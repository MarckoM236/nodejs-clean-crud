import http from 'http';
import router from './system/router.js';

const server = http.createServer((req, res) => {
  
  router(req, res);
  
});

server.listen(3010, 'localhost', () => {
  console.log('Server running at http://localhost:3010/');
});