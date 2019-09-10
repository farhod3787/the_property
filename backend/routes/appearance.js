const express = require("express")
const router = express.Router()
const Appearance = require("./../model/appearance")

// router.get('/', (req, res) => {
//     res.status(200).json({ msg: "Sdk" })
// })

router.post('/create', (req, res) => {

    let body = {
        name: req.body.name
    }

    let newAppearance = new Appearance(body)

    newAppearance.save().then((result) => {
        res.status(200).json()
    }).catch(e => {
        console.log(e);
        res.status(400).json()
    })
})

router.get('/', (req, res) => {
    Appearance.find().then((result) => {
        res.status(200).json({ appearance: result })
    }).catch(e => {
        console.log(e);
        res.status(400).json()
    })

})

router.get('/view/:id', (req, res) => {
    let id = req.params.id

    Appearance.findById(id).then((result) => {

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

    Appearance.findByIdAndRemove(id).then((result) => {

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