
// importing the model or schema

const users = require('../schema/model');

// var router = express.Router();

// router.get('/register', 

exports.getUserDetails = (req, res) => {
    users.find().then((data) => {
        if (data.length != 0) {
            res.send(data)
        }
        else {
            res.send({ message: "Data not found" });
        }
    }).catch((err) => {
        console.log(err)
    })
}


exports.getUserDetailsById = (req, res) => {
    users.findById(req.params.id).then((data) => {
        if (data) {
            res.send(data)
        }
        else {
            res.send({ message: "Data not found" });
        }
    }).catch((err) => {
        console.log(err)
    })
}

// router.put('/register/:id',

exports.updateUserDetails = (req, res) => {
    users.findByIdAndUpdate(req.params.id,req.body, {new:true }).then((data) => {
        if (data != 0) {
            res.send(data)
        }
        else {
            res.send({ message: "Data not found" });
        }
    }).catch((err) => {
        console.log(err)
    })
}

// router.post('/register', 
exports.insertUserDetails =(req, res) => {
    var user = {
        name: req.body.name,
        age: req.body.age,
        bloodGroup: req.body.bloodGroup
    }
    users.create(user).then((created) => {
        res.status(201).send({ message: 'created' })
    }).catch((err) => {
        console.log(err)
    })
}


// router.delete('/register/:id', 

exports.deleteUserDetails = (req, res) => {
    users.findByIdAndRemove(req.params.id).then((data) => {
        if (data) {
            res.send({ message: "Data has been deleted" ,data})
        }
        else {
            res.send({ message: "Data not found" });
        }
    }).catch((err) => { 
        console.log(err)
    })
}

