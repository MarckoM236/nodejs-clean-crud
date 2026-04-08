import mysql from 'mysql2/promise'
import { connectionMysql } from '../app/config/databaseConfig.js';

const pool = mysql.createPool({
  host: connectionMysql.host,
  user: connectionMysql.user,
  password: connectionMysql.password,
  database: connectionMysql.database,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

export default pool;
