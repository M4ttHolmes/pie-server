const Express = require("express");
const app = Express();
require("dotenv").config();
const controllers = require("./controllers");
const dbConnection = require("./db");
const middlewares = require("./middleware");

app.use(middlewares.CORS);
app.use(Express.json());
app.use("/user", controllers.userController);
app.use("/pies", controllers.pieController);

dbConnection.authenticate()
.then(() => dbConnection.sync()) // => {force: true} {alter: true}   // IMPORTANT
.then(() => {
    app.listen(process.env.PORT, () => {
        console.log(`[Server]: App is listening on port ${process.env.PORT}.`);
    })
})
.catch((err) => {
    console.log(`[Server]: Server yeeted. ${err}`);
})


