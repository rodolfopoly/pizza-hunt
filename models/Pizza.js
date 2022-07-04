const { Schema, model } = require('mongoose');

const PizzaSchema = new Schema({
    size: {
        type: String,
        default: 'Large'
    },
    toppings: [],
    pizzaName: {
        type: String
    },
    createdBy: {
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Pizza = model('Pizza', PizzaSchema);

module.exports = Pizza;