const express = require("express")
const router = express.Router()
const User = require("./../model/user")
const multer = require("multer")


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const isValid = MIME_TYPE_MAP[file.mimetype];
        let error = new Error("Errorrr");
        if (isValid) {
            error = null;
        }
        cb(error, "backend/photos");
    },
    filename: (req, file, cb) => {
        const name = file.originalname.toLowerCase().split(' ').join('-');
        const ext = MIME_TYPE_MAP[file.mimetype];
        cb(null, 'avatar' + '-' + Date.now() + '.' + ext);
    }
})


// router.get('/', (req, res) => {
//     res.status(200).json({ msg: "Sdk" })
// })

router.post('/create', multer({ storage: storage }).single('avatar'), (req, res) => {

    let body = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        number: req.body.number,
        avatar: ''
    }

    if (req.file) {
        body.avatar = req.file.filename
    }

    let newUser = new User(body)

    newUser.save().then((result) => {
        res.status(200).json({message: "New User Created"})
    }).catch(e => {
        console.log(e);
        res.status(400).json()
    })
})

router.get('/', (req, res) => {
    User.find().then((result) => {
        res.status(200).json(result)
        // res.status(200).json({ users: result })
    }).catch(e => {
        console.log(e);
        res.status(400).json()
    })

})

router.get('/view/:id', (req, res) => {
    let id = req.params.id

    User.findById(id).then((result) => {

        if (!result) {
            res.status(404).json()
        } else {
            res.status(200).json(result)
        }
    }).catch(e => {
        console.log(e);
        res.status(400).json()
    })

})

router.delete('/:id', (req, res) => {
    let id = req.params.id

    User.findByIdAndRemove(id).then((result) => {

        if (!result) {
            res.status(404).json()
        } else {
            res.status(200).json()
        }
    }).catch(e => {
        console.log(e);
        res.status(400).json()
    })
})

const MIME_TYPE_MAP = {
    'image/png': 'png',
    'image/jpg': 'jpg',
    'image/jpeg': 'jpg'
}

module.exports = router