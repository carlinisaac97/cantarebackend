const express = require("express");
const cors = require("cors");
const multer = require("multer");
const upload = multer({ dest: "upload/" });
const bodyparser = require("body-parser");

const authorizationMiddleware = require('./src/middleware/authorization.middleware');

const app = express();
app.use(bodyparser.json());
app.use(cors());

require("./src/routes/usuario.routes")(app);
require("./src/routes/canciones.routes")(app);
require("./src/routes/pedido.routes")(app);
require("./src/routes/artista.routes")(app);
require("./src/routes/video/video.routes")(app);

require("./src/routes/rol.routes")(app);

app.listen(3000, () => console.log("listening on PORT 3000"));
