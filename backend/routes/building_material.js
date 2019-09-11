const express = require("express")
const router = express.Router()
const BuildingMaterial = require("./../model/building_material")

// router.get('/', (req, res) => {
//     res.status(200).json({ msg: "Sdk" })
// })

router.post('/create', (req, res) => {

    let body = {
        name: req.body.name
    }

    let newBuildingMaterial = new BuildingMaterial(body)

    newBuildingMaterial.save().then((result) => {
        res.status(200).json()
    }).catch(e => {
        console.log(e);
        res.status(400).json()
    })
})

router.get('/', (req, res) => {
    BuildingMaterial.find().then((result) => {
        res.status(200).json(result)
        // res.status(200).json({ buildingMaterials: result })
    }).catch(e => {
        console.log(e);
        res.status(400).json()
    })

})

router.get('/view/:id', (req, res) => {
    let id = req.params.id

    BuildingMaterial.findById(id).then((result) => {

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

    BuildingMaterial.findByIdAndRemove(id).then((result) => {

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