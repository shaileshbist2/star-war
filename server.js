const path = require("path")
const express = require("express")
const app = express()

/********************* ENV PROD & DEV **************************************/
console.log(path.resolve(__dirname, "./build"));
app.use(express.static(path.resolve(__dirname, "./build")))
app.get('/*', function (_req, res) {
    res.sendFile(path.resolve(__dirname, "./build/index.html"))
})
/****************************************************************************/
app.listen(5000, () => console.log("server running 5000"))
