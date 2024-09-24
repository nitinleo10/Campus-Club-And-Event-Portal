import mysql from 'mysql2'
const connection=mysql.createConnection({
    host:"localhost",
    database:process.env.dbname,
    user:process.env.dbuser,
    password:process.env.dbpassword
});
// module.exports=connection;

export default connection;
