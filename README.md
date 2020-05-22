# dg-myapp

This is essentially a full-stack "hello world"
- It shows a message
- Which  is coming from the backend
- Which in turn is taken from configuration
- Which can be different in each environment

## local setup

```docker-compose up```

## components

- 1 React frontend (create-react-app)
- 1 Node.js Express backend service (generate-express)

## infrastructure

- Frontend: Firebase CDN
- Backend: Google Cloud Run

3 environments:
- Production: [dg-myapp.web.app](https://dg-myapp.web.app)
- Development: roduction: [dg-myapp-dev.web.app](https://dg-myapp-dev.web.app)
- Local: docker-compose

