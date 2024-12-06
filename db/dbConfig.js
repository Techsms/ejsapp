import mysql from "mysql2";

const pool=mysql.createPool({
  user:"root",
  password:"9111337529",
  database:"appjs",
  host:"localhost"

});
export default pool;