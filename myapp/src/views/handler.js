const app = require("../config/custom-express");

module.exports = ('/home', (req, res) => {
    res.render('./home.html')
})



