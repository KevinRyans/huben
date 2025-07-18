 vspn0b-codex/create-frontend-project-for-huben-platform
# HUBen

Dette prosjektet inneholder en enkel fullstack-applikasjon for HUBen. Frontenden er bygget med React (uten Vite) og Tailwind CSS, mens backend bruker Express.

## Strukturer

```
frontend/  - React-klienten
backend/   - Express-serveren
```

## Komme i gang

Installer avhengigheter i begge mapper:

```bash
cd frontend && npm install
cd ../backend && npm install
```

Start utviklingsmiljøet (to terminaler):

```bash
# terminal 1
cd frontend
npm start

# terminal 2
cd backend
npm start
```

Bygg frontenden for produksjon og server den via Express:

```bash
cd frontend && npm run build
cd ../backend && npm start
```
main
