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

//******************************** */


app.listen(3000, () => {
    console.log("Post started");
})

const becryipt = require('bcryptjs')
const myFunction = async () => {

    const password = 'Sandeep@123';
    const hashPassword = await becryipt.hash(password,8);
    console.log(password);
    console.log(hashPassword);
}

myFunction();