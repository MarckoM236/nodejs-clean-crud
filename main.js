import http from 'http';
import router from './system/router.js';
import {connectionServer} from './app/config/appConfig.js'

const server = http.createServer((req, res) => {
  
  router(req, res);
  
});

server.listen(connectionServer.port, connectionServer.host, () => {
  console.log(`Server running at http://${connectionServer.host}:${connectionServer.port}/`);
});