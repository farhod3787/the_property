const mongoose = require('mongoose');

var jwt = require('jsonwebtoken');

const AdminSchema = mongoose.Schema({
    login: { type: String },
    password: { type: String }
});

AdminSchema.statics.hashofPassword = function(pass) {
    let password = { password: pass };

    let hashpass = jwt.sign(password, 'pro');

    return hashpass;
}

AdminSchema.statics.generateToken = function(login, password) {
    var value = {
        login: login,
        password: password
    }
    var token = jwt.sign(value, 'pro');
    return token;
}

//                                                               K i r i  sh

AdminSchema.statics.verifyUser = function(users, body) {
    var object = { isAdmin: false };
    var distoken = undefined;

    users.forEach((user) => {
        try {
            distoken = jwt.verify(user.password, 'pro');

        } catch {}
        if (distoken) {
            if (user.login == body.login && distoken.password == body.password) {

                object.token = jwt.sign({ login: user.login, password: user.password }, 'pro')
                if (user == users[0]) {
                    object.isAdmin = true;
                }
            }
        } else {
            console.log("Distoken Undefined")
        }
    })
    return object;
}

//                                                      T e k s  h i r i  s h

AdminSchema.statics.verifyOfUser = function(users, token) {
    var object = { isAdmin: false };
    var distoken = undefined;

    users.forEach((user) => {
        try {
            distoken = jwt.verify(token, 'pro');
        } catch {

        }
        if (distoken) {
            if (user.login == distoken.login && user.password == distoken.password) {

                object.isAdmin = true;

            }
        }
    })

    return object;
}



module.exports = mongoose.model('admin', AdminSchema);