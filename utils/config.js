require('dotenv').config();

const PORT = process.env.PORT;
const MONGODB_URI = process.env.MONGODB_URL;

module.exports={PORT,MONGODB_URI}