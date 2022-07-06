const { Schema, Types} = require('mongoose');

const ReactionSchema = new Schema({
    reactionId: {
        type: Schema.Types.ObjectId,
        default: new Types.ObjectId()
    },
    reactionBody: {
    type: String,
    required: 'Reaction Body is required',
    validate: [({ length }) => length <= 280 , '280 character maximum']
  },
  username: {
    type: String,
    required: 'Username is required'
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (createdAtVal) => dateFormat(createdAtVal)
  },
},
  {
    toJSON: {
      getters: true
    },
    id: false

  });


module.exports = ReactionSchema;