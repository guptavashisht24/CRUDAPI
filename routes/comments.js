let posts = require('../store').posts

module.exports = {
	getComments(req,res){
		if(req.params.postId && posts[req.params.postId] && posts[req.params.postId].comments)
			res.status(200).send(posts[req.params.postId].comments)
		else
			res.status(400).send({'msg':'No comments'})
	},
	addComments(req,res){
		if(req.params.postId && posts[req.params.postId]){
			if(posts[req.params.postId].comments)
				posts[req.params.postId].comments.push(req.body)
			else
				posts[req.params.postId].comments = [req.body]
			res.status(201).send(posts[req.params.postId])
		}
		else
			res.status(400).send({'msg':'No such post exists'})
	},
	updateComments(req,res){
		if(req.params.postId && posts[req.params.postId].comments[req.params.commentId]){
			posts[req.params.postId].comments[req.params.commentId] = req.body
			res.status(201).send(posts[req.params.postId])
		}
		else
			res.status(400).send({'msg':'No such comments:/'})
	},
	removeComments(req,res){
		if(req.params.postId && posts[req.params.postId].comments[req.params.commentId]){
			posts[req.params.postId].comments.splice(req.params.commentId,1)
			res.status(201).send(posts[req.params.postId])
		}
		else
			res.status(400).send({'msg':'No such comments:/'})
	}
}