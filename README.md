This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

# Rama r01-deploy: 
En package.json, se agregó el key homepage y las siguientes líneas a devDependencies y scripts :
{
  "name": "lp2-hotel",
  "version": "0.1.0",
  "private": true,
  "homepage": "https://lp2-20172.github.io/lp2-hotel",
  "dependencies": {
    "gh-pages": "^1.0.0",
    "react": "^15.6.1",
    "react-dom": "^15.6.1",
    "react-scripts": "1.0.12"
  },
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build",
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test --env=jsdom",
    "eject": "react-scripts eject"
  }
}

