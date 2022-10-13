const { request, response } = require('express')

const usrGet = (req = request, res = response) => {
    res.json({
        status: true,
        msg: 'request GET - Controller'
    })
}

const usrPut = (req, res) => {
    res.json({
        status: true,
        msg: 'Peticion PUT'
    })
}

const usrPost = (req, res) => {
    res.json({
        status: true,
        msg: 'Peticion POST'
    })
}

const usrDelete = (req, res) => {
    res.json({
        status: true,
        msg: 'Peticion DELETE'
    })
}

module.exports = {
    usrGet,
    usrPut,
    usrPost,
    usrDelete
}