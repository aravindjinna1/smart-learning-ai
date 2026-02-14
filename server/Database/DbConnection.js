const mongoose = require("mongoose");
require('dotenv').config();

const DbConnection = async() => {

    try {
         const connection = await  mongoose.connect(process.env.MONGODB_URL)
         console.log('Database connected successfull')
    } catch(error) {

        console.error("failed to connect database ",error.message);
        process.exit(1);
       
    }
  
};

module.exports = DbConnection;
