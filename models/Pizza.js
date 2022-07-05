const { Schema, model } = require('mongoose');
const Comment = require('./Comment');

const PizzaSchema = new Schema({
    size: {
        type: String,
        default: 'Large'
    },
    toppings: [],
    comments: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Comment'
        }
    ],
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
},
    {
        toJSON: {
            virtuals: true,
        },
        id: false
    });

// get total count of comments and replies on retrieval
PizzaSchema.virtual('commentCount').get(function () {
    return this.comments.length;
});

const Pizza = model('Pizza', PizzaSchema);

module.exports = {Pizza, Comment};