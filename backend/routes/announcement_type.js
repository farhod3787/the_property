const express = require("express")
const router = express.Router()
const AnnouncementType = require("./../model/announcement_type")

// router.get('/', (req, res) => {
//     res.status(200).json({ msg: "Sdk" })
// })

router.post('/create', (req, res) => {

    let body = {
        name: req.body.name
    }

    let newAnnouncementType = new AnnouncementType(body)

    newAnnouncementType.save().then((result) => {
        res.status(200).json()
    }).catch(e => {
        console.log(e);
        res.status(400).json()
    })
})

router.get('/', (req, res) => {
    AnnouncementType.find().then((result) => {
        res.status(200).json({ announcementTypes: result })
    }).catch(e => {
        console.log(e);
        res.status(400).json()
    })

})

router.get('/view/:id', (req, res) => {
    let id = req.params.id

    AnnouncementType.findById(id).then((result) => {

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

    AnnouncementType.findByIdAndRemove(id).then((result) => {

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