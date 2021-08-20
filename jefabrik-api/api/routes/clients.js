var express = require('express');
const ClientController = require('../controller/client');
const Client = require("../model/client");
var router = express.Router();

/* GET clients listing. */
router.get('/', async (req, res) => {
    try{
        const response = await ClientController.getAllClients();
        res.status(response.code).send(response.data);
    }catch(error){
        res.status(500).send(error);
    }
});

/* GET client by ID. */
router.get('/:id', async (req, res) => {
    try {
        const id = req.params.id.toString();
        const response = await ClientController.getClientById(id);
        res.status(response.code).send(response.data);
    } catch (error) {
        res.status(500).send(error);
    }
  });

/* POST a new client. */
router.post('/', async (req, res) => {
    try{
        const response = await ClientController.createClient(req, res);
        res.status(response.code).send(response.data);
    }catch(error){
        res.status(500).send(error);
    }
});

/* UPDATE client by ID. */
router.patch('/:id', async (req, res) => {
    const response = await Client.findByIdAndUpdate(req.params.id, req.body, {new: true, useFindAndModify: false}).then((blog) => {
        if (!response) {
            return res.status(404).send();
        }
        res.send(response);
    }).catch((error) => {
        res.status(500).send(error);
    })
})

/* DELETE client by ID. */
router.delete('/:id', async (req, res) => {
    try {
        const id = req.params.id.toString();
        const response = await ClientController.deleteClientById(id);
        res.status(response.code).send(response.data);
    } catch (error) {
        res.status(500).send(error);
    }
  });

module.exports = router;