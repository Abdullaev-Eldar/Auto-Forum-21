import React from 'react';
import axios from 'axios';

import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';
import ForumIcon from '@mui/icons-material/Forum';
import {
  Favorite, FavoriteBorder, MoreVert,
} from '@mui/icons-material';
import {
  Avatar,
  Badge,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Checkbox,
  IconButton,
  Typography,
} from '@mui/material';
import { useDispatch } from 'react-redux';
import Add from './Add';
import ShowPost from './ShowPost';
import { addPostCounterLike } from '../../../../redux/actions/postsActions';

function Post({ post, addFavoritePost }) {
  // функция добавляет лайк к посту
  const dispatch = useDispatch();
  const addLikePost = async (postId) => {
    try {
      await axios.post(`/api/posts/like/${postId}`);
      dispatch(addPostCounterLike(post.id));
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <Card sx={{ width: '800px', margin: '1%' }}>
      <CardHeader
        avatar={(
          <Avatar src={post?.User?.img} aria-label="recipe" />
        )}
        action={(
          <IconButton aria-label="settings">
            <MoreVert />
          </IconButton>
        )}
        title={post?.User?.name}
        subheader={new Date(post?.updatedAt).toLocaleString()}
      />
      <CardMedia
        component="img"
        height="500vh"
        image={`http://localhost:3001/${post?.img}`}
        alt="Post Photo"
      />
      <CardContent>
        <Typography variant="h4" color="text.secondary">
          {post?.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {post?.text}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>

        <IconButton onClick={() => addLikePost(post?.id)} aria-label="like">
          <Badge badgeContent={post?.likesCount} color="primary">
            <Checkbox
              icon={<FavoriteBorder />}
              checkedIcon={<Favorite sx={{ color: 'red' }} />}
            />
          </Badge>
        </IconButton>

        <IconButton onClick={() => addFavoritePost(post?.id)} aria-label="favorite">
          <Checkbox
            icon={<BookmarkAddIcon />}
            checkedIcon={<BookmarkAddIcon sx={{ color: 'red' }} />}
          />
        </IconButton>
        <ShowPost post={post} />
      </CardActions>
    </Card>
  );
}

export default Post;
