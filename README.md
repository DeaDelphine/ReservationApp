# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Installation pour les tests 
```bash
npm i jest @testing-library/react @testing-library/jest-dom
```
```bash
npm i @babel/preset-react
```
```bash
npm i @babel/preset-env
```
```bash
npm i jest jest-environment-jsdom
```
-> créer un fichier .babelrc avec : 
`{
    "presets": ["@babel/preset-env", "@babel/preset-react"]
  }`
-> importer React et render
-> ajouter l'annotation sur le fichier test 
/**
 * @jest-environment jsdom
 */

 1. Aller sur github 
 2. Puis dans settings 
 3. Dans secrets and variables
 4. Puis dans Action 
 5. Add New Repository Secret
 6. Ajouter la clé Netlify avec le nom dans le fichier ci.yaml
 7. Ajouter la seconde clé après déploiement du projet sur netlify 
 8. Aller dans site configuration 
 9. Puis prendre la clé Site ID

 Token Netlify : 
 `nfp_H11VCzhZtDCLa9XWVZnmz4CMMRuopVYQ1dda`