const express = require("express");
const cors = require("cors");
const multer = require("multer");
const upload = multer({ dest: "upload/" });
const bodyparser = require("body-parser");

const authorizationMiddleware = require('./src/middleware/authorization.middleware');

const app = express();
app.use(bodyparser.json());
app.use(cors());

require("./src/routes/usuario/usuario.routes")(app);
require("./src/routes/canciones/canciones.routes")(app);
require("./src/routes/pedido/pedido.routes")(app);
require("./src/routes/artista/artista.routes")(app);
require("./src/routes/video/video.routes")(app);


app.listen(3000, () => console.log("listening on port 3000"));
