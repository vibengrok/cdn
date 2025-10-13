# 🚀 Quick Start Guide

Get your JSON API running on Netlify in 5 minutes!

## Step 1: Install Dependencies

```bash
npm install
```

## Step 2: Test Locally

```bash
npm run dev
```

Visit `http://localhost:8888` to see your API in action!

## Step 3: Deploy to Netlify

### Option A: Using Netlify CLI (Fastest)

```bash
# Install Netlify CLI globally
npm install -g netlify-cli

# Login to Netlify
netlify login

# Deploy
netlify deploy --prod
```

### Option B: Using GitHub + Netlify (Recommended)

1. **Create a GitHub repository** and push your code:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/your-repo.git
   git push -u origin main
   ```

2. **Connect to Netlify**:
   - Go to https://app.netlify.com
   - Click "Add new site" → "Import an existing project"
   - Select GitHub and authorize
   - Choose your repository
   - Click "Deploy site" (settings are auto-detected)

3. **Done!** Your API is live at `https://your-site-name.netlify.app`

## Step 4: Use Your API

Your endpoints will be:
- `https://your-site-name.netlify.app/exam`
- `https://your-site-name.netlify.app/quiz`

### Test with cURL:
```bash
curl https://your-site-name.netlify.app/exam
```

### Test with JavaScript:
```javascript
fetch('https://your-site-name.netlify.app/exam')
  .then(res => res.json())
  .then(data => console.log(data));
```

## 🎉 That's it!

Your JSON API is now live and ready to use!

## Next Steps

- Add more JSON files to `assets/` directory
- Update `netlify.toml` to add new endpoints
- Customize `public/index.html` for your branding
- Add authentication if needed

## Need Help?

Check the full [README.md](README.md) for detailed documentation.
