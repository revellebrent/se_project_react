WTWR (What To Wear?) — Frontend

A React app that suggests clothing based on current weather and lets users manage their wardrobe (add, like, and view items). Built with React + Vite, talks to a Node/Express API.

Live Sites

Frontend: https://wardrobe411.csproject.org

API: https://api.wardrobe411.csproject.org

Features

Weather-aware suggestions (uses your location)

Add/delete clothing items

Like/unlike items

Auth: signup/signin, persist JWT in localStorage

Responsive UI with modal dialogs and mobile drawer

Tech Stack

React 18, React Router 6

Vite (dev server & build)

Plain CSS

Deployed via nginx (static) + PM2/nginx for backend

Configuration
API base URL

api.js and auth.js choose the base URL by environment:

const baseUrl =
  process.env.NODE_ENV === "production"
    ? "https://api.wardrobe411.csproject.org"
    : "http://localhost:3001";


No frontend .env required for this setup.

package.json

Set the homepage to your root domain (no www or api):

"homepage": "https://wardrobe411.csproject.org"

Scripts
# start dev server
npm run dev

# production build
npm run build

# preview local build
npm run preview

Deploy (static files)

Build locally:

npm run build


Copy the build to the server (adjust user/host if needed):

scp -r ./dist/* revellebrent@wardrobe411.csproject.org:/home/revellebrent/frontend


nginx serves from /home/revellebrent/frontend (already configured).

Project Structure (minimal)
src/
  assets/
  components/
  contexts/
  hooks/
  utils/
  index.jsx
  App.jsx
  styles.css

Backend

Repo: https://github.com/revellebrent/se_project_express
Base URL (prod): https://api.wardrobe411.csproject.org

If you want me to add a tiny “Troubleshooting” section or a deploy script to package.json (e.g., "deploy": "npm run build && scp -r ./dist/* revellebrent@wardrobe411.csproject.org:/home/revellebrent/frontend"), say the word and I’ll drop it in.
