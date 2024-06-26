const mongoose = require("mongoose");
require("dotenv").config();

/*  funcion para conectar  */
const conectarBD = () => {
  mongoose
    .connect(process.env.MONGO_URL)
    .then(() => console.log("Estamos conectados con MongoDB"))
    .catch((err) => console.error(err));
};

module.exports = conectarBD;
