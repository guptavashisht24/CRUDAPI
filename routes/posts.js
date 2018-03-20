let posts = require('../store').posts

module.exports = {
	getPosts(req,res){
      if(posts)
      	res.status(200).send(posts);
      else
      res.status(400).send({'msg':'no posts found'})
	},
	addPosts(req,res){
      if(req.body)
      {
      	posts.push(req.body)
      	res.status(201).send(posts)
      }else{
      	res.status(501).send({'msg':'Nothing to add!'})
      }
	},
	updatePosts(req,res){
      if(req.params.postId && posts.length > req.params.postId && req.body && posts.length!=0){
      	posts[req.params.postId] = req.body;
      	res.status(202).send(posts);
      }
      else
      	res.status(401).send({'msg':'Very Bad Request :/'});
	},
	removePosts(req,res){
       if(req.params.postId && posts.length > req.params.postId && posts.length!=0){
            console.log(req.params.postId);
       	posts.splice(req.params.postId,1)
      	res.status(202).send(posts);
      }else{
      	res.status(402).send({'msg':'No such post exists'});
      }
	}
}