const Client = require('../models/client')
module.exports = {
  
  // ec6 -> all:all
  all(req, res, next){
    const limit = parseInt(req.query.limit) || ''
    Client.find({}).limit(limit)
    .then(clients => res.status(200).send(clients))
    .catch(next)
  }, 
  
  //name of endpoint
  create_client(req, res, next){
    const clientProps = req.body;
    //query mongoose
    Client.create(clientProps)
      .then(client => res.status(201).send(client))
      .catch(next)
  },
  
  edit(req, res, next){
    const clientId = req.params.id;
    const clientProps = req.body;

    Client.findByIdAndUpdate({_id: clientId}, clientProps)
    .then(()=> Client.findById({_id:driverId}))
    .then(client => res.status(200).send(client))
    .catch(next)
  },
  
  delete(req, res, next){
    const clientId = req.params.id;
    
    Client.findByIdAndRemove({_id: clientId})
    .then(()=> res.status(204).send('Client deleted'))
    .catch(next)
  },
  
  details(req, res, next){
    const clientId = req.params.id;

    Client.findById({_id: clientId})
    .then(client => res.status(200).send(client))
    .catch(next)
  }
}
