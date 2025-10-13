# JSON API Server

A simple, serverless JSON API built with Netlify Functions. Serve your JSON files as API endpoints without the `.json` extension.

## 🚀 Features

- **Serverless Architecture**: Built on Netlify Functions
- **Clean URLs**: Access `/exam` instead of `/exam.json`
- **CORS Enabled**: Access from any domain
- **Fast & Reliable**: Hosted on Netlify's global CDN
- **Easy to Deploy**: One-click deployment to Netlify

## 📁 Project Structure

```
JsonAPI/
├── assets/              # JSON data files
│   ├── exam.json
│   └── quiz.json
├── netlify/
│   └── functions/
│       └── api.js       # Serverless function
├── public/
│   └── index.html       # Landing page
├── netlify.toml         # Netlify configuration
├── package.json         # Dependencies
└── README.md
```

## 🔧 Setup & Installation

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Netlify account (free)

### Local Development

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Install Netlify CLI** (if not already installed):
   ```bash
   npm install -g netlify-cli
   ```

3. **Run locally**:
   ```bash
   netlify dev
   ```

4. **Access the API**:
   - Homepage: `http://localhost:8888`
   - Exam endpoint: `http://localhost:8888/exam`
   - Quiz endpoint: `http://localhost:8888/quiz`

## 🌐 Deployment to Netlify

### Method 1: Deploy via Netlify CLI

1. **Login to Netlify**:
   ```bash
   netlify login
   ```

2. **Initialize your site**:
   ```bash
   netlify init
   ```

3. **Deploy**:
   ```bash
   netlify deploy --prod
   ```

### Method 2: Deploy via Git (Recommended)

1. **Push your code to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin <your-github-repo-url>
   git push -u origin main
   ```

2. **Connect to Netlify**:
   - Go to [Netlify](https://app.netlify.com)
   - Click "Add new site" → "Import an existing project"
   - Choose your Git provider (GitHub)
   - Select your repository
   - Netlify will auto-detect the settings from `netlify.toml`
   - Click "Deploy site"

### Method 3: Drag & Drop

1. Build your site (not required for this project)
2. Go to [Netlify Drop](https://app.netlify.com/drop)
3. Drag and drop your project folder

## 📡 API Usage

Once deployed, your API will be available at:

```
https://your-site-name.netlify.app/exam
https://your-site-name.netlify.app/quiz
```

### Example: Fetch Data with JavaScript

```javascript
fetch('https://your-site-name.netlify.app/exam')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
```

### Example: Using with Axios

```javascript
import axios from 'axios';

axios.get('https://your-site-name.netlify.app/quiz')
  .then(response => console.log(response.data))
  .catch(error => console.error('Error:', error));
```

### Example: cURL

```bash
curl https://your-site-name.netlify.app/exam
```

## ➕ Adding New Endpoints

To add a new JSON endpoint:

1. Add your JSON file to the `assets/` directory (e.g., `newdata.json`)

2. Update `netlify.toml` to add a redirect:
   ```toml
   [[redirects]]
     from = "/newdata"
     to = "/.netlify/functions/api/newdata"
     status = 200
   ```

3. Deploy your changes

Your new endpoint will be available at `/newdata`

## 🔒 CORS Configuration

CORS is enabled by default for all origins. To restrict access, modify the headers in:
- `netlify/functions/api.js`
- `netlify.toml`

## 🛠️ Customization

### Modify the Landing Page

Edit `public/index.html` to customize the homepage.

### Add Authentication

To add authentication, modify `netlify/functions/api.js` to check for API keys or tokens.

### Rate Limiting

Consider using Netlify's built-in rate limiting or add custom rate limiting logic in the function.

## 📝 Environment Variables

If you need environment variables:

1. Add them in Netlify dashboard: Site settings → Environment variables
2. Access them in your function: `process.env.YOUR_VARIABLE`

## 🐛 Troubleshooting

### Function not working locally
- Make sure you're using `netlify dev` instead of a regular dev server
- Check that Node.js version is compatible

### 404 errors on deployed site
- Verify `netlify.toml` redirects are correct
- Check that JSON files exist in the `assets/` directory
- Review Netlify function logs in the dashboard

### CORS errors
- Ensure CORS headers are set in both `api.js` and `netlify.toml`
- Check browser console for specific CORS error messages

## 📄 License

MIT License - feel free to use this project for any purpose.

## 🤝 Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.

## 📞 Support

For issues or questions:
- Check Netlify documentation: https://docs.netlify.com
- Review Netlify Functions guide: https://docs.netlify.com/functions/overview/

---

**Happy coding! 🎉**
