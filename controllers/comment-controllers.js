const { Pizza, Comment } = require('../models');
const { findOneAndUpdate } = require('../models/Comment');

const commentController = {
    // add comment to pizza
    async addComment({params, body}, res) {
        try{
        console.log(body);
        await Comment.create(body);

        const commentData = await Pizza.findOneAndUpdate(
            { _id: params.pizzaId },
            { $push: {comments: _id} },
            {new: true}
        )
        if (!commentData) {
            res.status(404).json({ message: 'No pizza found with this id!' });
          }
          else{res.json(commentData);}
        } catch(err){
            console.log(err);
            res.status(400).json(err);
        }
  
    },
  
    // remove comment
    async removeComment({params}, res) {
        try{
            const commentDelete = await Comment.findOneAndDelete({_id: params.commentId})
            if (!commentDelete) {
                return res.status(404).json({ message: 'No comment with this id!' });
            }
            else{
                const pizzaData = await findOneAndUpdate(
                    {_id: params.pizzaId},
                    {$pull: { comments: params.commentId } },
                    {new: true}
                )
                if (!pizzaData) {
                    res.status(404).json({ message: 'No pizza found with this id!' });
                  }
                  else{res.json(pizzaData);}
            }
        }catch(err){
            console.log(err);
            res.status(400).json(err);
        }
    }
  };
  
  module.exports = commentController;