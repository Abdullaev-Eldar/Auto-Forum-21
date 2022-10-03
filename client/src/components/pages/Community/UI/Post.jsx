import React from 'react';

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
import Add from './Add';
import ShowPost from './ShowPost';

function Post({ post, addFavoritePost }) {
  return (
    <Card sx={{ width: '60%', margin: '1%' }}>
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
        image={`http://localhost:3001/${post.img}`}
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
        <IconButton aria-label="like">
          <Checkbox
            icon={<FavoriteBorder />}
            checkedIcon={<Favorite sx={{ color: 'red' }} />}
          />
        </IconButton>
        <IconButton onClick={() => addFavoritePost(post?.id)} aria-label="favorite">
          <Checkbox
            icon={<BookmarkAddIcon />}
            checkedIcon={<BookmarkAddIcon sx={{ color: 'white' }} />}
          />
        </IconButton>
        <ShowPost post={post} />
      </CardActions>
    </Card>
  );
}

export default Post;
