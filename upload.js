let express = require('express');
const app = express();
var fileopload = require('express-fileupload');

app.use(fileopload());
app.get('/', (req, res, next) => {

    res.status(200).send("Hello World");
})

app.post("/upload", (req, res, next) => {
    // console.log(req.files);
    var file = req.files.photo;

    file.mv('./uploads/' + file.name,function (err, result) {
        if (err)
            throw err;
        res.send({
            success: true,
            message: "File Uploaded!!"

        });
    });


})

app.listen(3000, () => {
    console.log("Post started");
})