const express = require("express");
const app = express();
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./_build/openapi.json");

app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

const port = 3030;

app.listen(port, () => {
	console.log(`docs is serving on relative path /docs and on ${port} port`)
});