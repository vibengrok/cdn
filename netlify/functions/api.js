const fs = require('fs');
const path = require('path');

exports.handler = async (event, context) => {
  // Set CORS headers
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'GET, OPTIONS',
    'Content-Type': 'application/json',
  };

  // Handle OPTIONS request for CORS preflight
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers,
      body: '',
    };
  }

  // Only allow GET requests
  if (event.httpMethod !== 'GET') {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ error: 'Method not allowed' }),
    };
  }

  try {
    // Extract the resource name from the path
    // Path will be like /.netlify/functions/api/exam or /exam
    const pathParts = event.path.split('/').filter(p => p);
    const resourceName = pathParts[pathParts.length - 1];

    if (!resourceName) {
      // Return API documentation if no resource specified
      return {
        statusCode: 200,
        headers,
        body: JSON.stringify({
          message: 'JSON API Server',
          usage: 'GET /{resource} to retrieve JSON data',
          availableResources: ['exam', 'quiz'],
          examples: [
            '/exam - Returns exam.json data',
            '/quiz - Returns quiz.json data'
          ]
        }),
      };
    }

    // Construct the file path
    const filePath = path.join(__dirname, '..', '..', 'assets', `${resourceName}.json`);

    // Check if file exists
    if (!fs.existsSync(filePath)) {
      return {
        statusCode: 404,
        headers,
        body: JSON.stringify({ 
          error: 'Resource not found',
          resource: resourceName,
          message: `The resource '${resourceName}' does not exist`
        }),
      };
    }

    // Read and return the JSON file
    const fileContent = fs.readFileSync(filePath, 'utf8');
    
    // Validate JSON
    let jsonData;
    try {
      jsonData = JSON.parse(fileContent);
    } catch (parseError) {
      return {
        statusCode: 500,
        headers,
        body: JSON.stringify({ 
          error: 'Invalid JSON file',
          resource: resourceName 
        }),
      };
    }

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify(jsonData),
    };

  } catch (error) {
    console.error('Error:', error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ 
        error: 'Internal server error',
        message: error.message 
      }),
    };
  }
};
