/* inicializar express */
const express = require("express");

/* llamar la conexcion de mongo db */
const conectarBD = require("../config/config");

/* llamar cosr */
const cors = require("cors");

/* iniciar servidor */
const app = express();
const port = 5000;
app.use(express.json());

//rutas de los modulos
app.use("/programacion/lenguajes", require("../routes/RoutesLenguajes"));

/* enlazar la conexion de la base de datos */
conectarBD();
app.use(cors());

app.listen(port, () =>
  console.log(
    "Nuestro servidor se encuentra conectado http://localhost:5000",
    port
  )
);

app.get("/", (req, res) => {
  res.send("Bienvenido, nuestro servidor esta configurado");
});
