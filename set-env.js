const fs = require('fs');
const dotenv = require('dotenv');

dotenv.config();

const environment = `export const environment = {
  production: false,
  apiKey: '${process.env.TMDB_API_KEY || ''}',
  baseUrl: 'https://api.themoviedb.org/3',
  imageUrl: 'https://image.tmdb.org/t/p/w500'
};
`;

const environmentProd = `export const environment = {
  production: true,
  apiKey: '${process.env.TMDB_API_KEY || ''}',
  baseUrl: 'https://api.themoviedb.org/3',
  imageUrl: 'https://image.tmdb.org/t/p/w500'
};
`;

fs.writeFileSync('./src/environments/environment.ts', environment);
fs.writeFileSync('./src/environments/environment.prod.ts', environmentProd);

console.log('✓ Variables de entorno cargadas correctamente');
