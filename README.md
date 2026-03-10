<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Cash Closers (Vite + React)

## Run locally

**Prerequisites:** Node.js 20+

1. Install dependencies:
   `npm install`
2. Build the app:
   `npm run build`
3. Run the production server:
   `npm run start`
4. Open `http://localhost:8080`

For hot-reload development:

- `npm run dev`

## Deploy to Google Cloud Run

This repository now includes everything needed for Cloud Run deployment:

- `Dockerfile` for a multi-stage production image build.
- `server.js` Express server that serves `dist/`, supports SPA routing, and listens on `PORT`.

### Deploy commands

```bash
gcloud builds submit --tag gcr.io/PROJECT_ID/cash-closers
gcloud run deploy cash-closers \
  --image gcr.io/PROJECT_ID/cash-closers \
  --platform managed \
  --region us-central1 \
  --allow-unauthenticated
```

## Mobile friendliness

The UI uses responsive Tailwind breakpoints across navigation and page headings so content scales down on small screens while preserving larger typography on desktop.
