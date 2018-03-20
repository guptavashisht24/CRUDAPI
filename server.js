let express = require('express');
let app = express();
let bodyParser = require('body-parser');
const logger = require('morgan');
const routes = require('./routes');
app.use(bodyParser.json());
app.use(logger('dev'));
app.get('/posts', routes.posts.getPosts)	
app.post('/posts', routes.posts.addPosts)
app.put('/posts/:postId/',routes.posts.updatePosts)
app.delete('/posts/:postId/',routes.posts.removePosts)
app.get('/posts/:postId/comments', routes.comments.getComments)
app.post('/posts/:postId/comments',routes.comments.addComments)
app.put('/posts/:postId/comments/:commentId',routes.comments.updateComments)
app.delete('/posts/:postId/comments/:commentId',routes.comments.removeComments)
app.listen(3000)