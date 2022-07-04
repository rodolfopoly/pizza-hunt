const { Pizza } = require('../models');

const pizzaController = {
  // the functions will go in here as methods
  //get all pizza
  async getAllPizza(req, res){
    try{
        const pizzaData = await Pizza.find({})
        res.json(pizzaData);
    } catch(err){
        console.log(err);
        res.status(400).json(err);
    }
  },
  // get one pizza by id
  async getPizzaById({ params }, res) {
    try{
    const pizzaData = await Pizza.findOne({ _id: params.id })
        // If no pizza is found, send 404
        if (!pizzaData) {
          res.status(404).json({ message: 'No pizza found with this id!' });
        }
        else{ res.json(pizzaData)};
    } catch(err){
        console.log(err);
        res.status(400).json(err);
      };
  },
  //create a pizza
  async createPizza({body}, res){
    try{
        const pizzaData = await Pizza.create(body);
        res.json(pizzaData);
    } catch (err){
        console.log(err);
        res.status(400).json(err);
    }
  },
  //update a pizza by id
  async updatePizza ({params, body}, res){
    try{
        const pizzaData = await Pizza.findOneAndUpdate({_id: params.id}, body, {new: true});
        if (!pizzaData) {
            res.status(404).json({ message: 'No pizza found with this id!' });
          }
          else{ res.json(pizzaData)};
    } catch(err){
        console.log(err);
        res.status(400).json(err);
    }
  },
  //delete a pizza
  async deletePizza({ params }, res) {
    try{
    const pizzaData = await Pizza.findOneAndDelete({ _id: params.id })
        // If no pizza is found, send 404
        if (!pizzaData) {
          res.status(404).json({ message: 'No pizza found with this id!' });
        }
        else{ res.json(pizzaData)};
    } catch(err){
        console.log(err);
        res.status(400).json(err);
      };
  },
};

module.exports = pizzaController;