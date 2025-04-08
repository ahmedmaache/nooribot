# cPanel Deployment Instructions

## Prerequisites
- cPanel hosting with Node.js support
- SSH access (recommended)

## Deployment Steps

1. **Compress your application files**:
   - Create a zip file containing:
     - package.json
     - server.js
     - public/ directory

2. **Upload to cPanel**:
   - Log in to cPanel
   - Go to "File Manager"
   - Upload the zip file to your desired directory (e.g., public_html/node-app)
   - Extract the files

3. **Set up Node.js application**:
   - In cPanel, go to "Setup Node.js App"
   - Click "Create Application"
   - Configure:
     - Application root: /home/username/public_html/node-app
     - Application URL: yourdomain.com/node-app
     - Application startup file: server.js
     - Application entry point: server.js
   - Click "Save"

4. **Install dependencies**:
   - Via SSH (recommended):
     ```bash
     cd ~/public_html/node-app
     npm install --production
     ```
   - Or via cPanel's terminal

5. **Start/Restart application**:
   - In "Setup Node.js App", find your application
   - Click "Restart"

## Notes
- Your app will be available at: http://yourdomain.com/node-app
- For custom domains/subdomains, configure them in cPanel first
- Environment variables can be set in the "Setup Node.js App" interface