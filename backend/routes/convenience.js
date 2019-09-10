const express = require("express")
const router = express.Router()
const Convenience = require("./../model/convenience")

// router.get('/', (req, res) => {
//     res.status(200).json({ msg: "Sdk" })
// })

router.post('/create', (req, res) => {

    let body = {
        name: req.body.name
    }

    let newConvenience = new Convenience(body)

    newConvenience.save().then((result) => {
        res.status(200).json()
    }).catch(e => {
        console.log(e);
        res.status(400).json()
    })
})

router.get('/', (req, res) => {
    Convenience.find().then((result) => {
        res.status(200).json({ conveniences: result })
    }).catch(e => {
        console.log(e);
        res.status(400).json()
    })

})

router.get('/view/:id', (req, res) => {
    let id = req.params.id

    Convenience.findById(id).then((result) => {

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

    Convenience.findByIdAndRemove(id).then((result) => {

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

module.exports = router