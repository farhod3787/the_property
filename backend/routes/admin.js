const express = require("express")

const Admin = require("./../model/admin")

const router = express.Router();

//                                                               R e g i  s t r a t s i o n
router.post('/post', function(req, res, next) {
    try {
        Admin.find().then(async(result) => {


            var body = req.body;
            let user = {
                login: body.login,
                password: await Admin.hashofPassword(body.password),
            }
            const use = new Admin(user);

            let token = await Admin.generateToken(use.login, use.password);

            use.save().then(() => {
                res.status(200).json({ token: token, allow: true })
            }).catch(err => {
                console.log(err);
                res.status(404).json({ message: "Error in Saved user" })
            })


        }).catch(e => {
            res.status(200).json({ allow: false })
        });
    } catch (error) {
        res.status(200).json({ allow: false })
    }

});

//                                                      Tekshirish

router.get('/verifyAdmin/:token', async function(request, response) {
        //    console.log("This verify")

        var token = request.params.token;
        var users = await Admin.find();

        var obj = Admin.verifyOfUser(users, token);
        response.status(200).json(obj);

        // response.status(200).json({token});
    })
    //                                                                K i r  i  sh

router.post('/sign', async function(request, response) {
    var body = request.body;
    var data = {}
    var users = await Admin.find();
    // console.log(users);
    var obj = Admin.verifyUser(users, body);

    if (obj.isUser) {
        data.token = obj.token;
        data.isAdmin = obj.isAdmin;
        response.status(200).json(data)
    } else {
        response.status(404).json(obj)
    }

});

router.get('/verify', (req, res) => {
    Admin.find().then(async(result) => {
        if (result.length > 0) {
            res.status(200).json({ allow: false })

        } else {
            res.status(200).json({ allow: true })

        }
    }).catch(e => {
        res.status(200).json({ allow: false })
    })
})

module.exports = router