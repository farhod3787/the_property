const express = require("express")
const router = express.Router()
const Announcement = require("./../model/announcement")

// router.get('/', (req, res) => {
//     res.status(200).json({ msg: "Sdk" })
// })
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
        cb(null, 'gallery' + '-' + Date.now() + '.' + ext);
    }
})

router.post('/create', multer({ storage: storage }).any('gallery'), (req, res) => {

    let body = {
        user_id: req.body.user_id,
        region_id: req.body.region_id,
        classification: req.body.classification,
        location: req.body.location,
        rooms_number: req.body.rooms_number,
        room_allocation: req.body.room_allocation,
        floor: req.body.floor,
        general_floor: req.body.general_floor,
        area: req.body.area,
        live_area: req.body.live_area,
        appearance_id: req.body.appearance_id,
        building_material_id: req.body.building_material_id,
        summ: req.body.summ,
        currency_id: req.body.currency_id,
        one_m_kv: req.body.one_m_kv,
        announcement_number: req.body.announcement_number,
        announcement_type_id: req.body.announcement_type_id,
        date: req.body.date,
        gallery: []
    }

    if (req.files) {
        for (let i = 0; i < req.files.length; i++) {
            body.gallery.push({ url: req.files[i].filename })
        }
    }

    let newAnnouncement = new Announcement(body)

    newAnnouncement.save().then((result) => {
        res.status(200).json()
    }).catch(e => {
        console.log(e);
        res.status(400).json()
    })
})

router.get('/', (req, res) => {
    Announcement.find().then((result) => {
        res.status(200).json({ announcements: result })
    }).catch(e => {
        console.log(e);
        res.status(400).json()
    })

})

router.get('/view/:id', (req, res) => {
    let id = req.params.id

    Announcement.findById(id).then((result) => {

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

    Announcement.findByIdAndRemove(id).then((result) => {

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