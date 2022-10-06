import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink, useParams } from 'react-router-dom';
import {
  Avatar,
  AvatarGroup,
  Box,
  Button,
  Divider,
  ImageList,
  ImageListItem,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@mui/material';
import { Home } from '@mui/icons-material';
import { actionUserAsync } from '../../../../redux/actions/usersActions';

function Rightbar() {
  const dispatch = useDispatch();
  const { modelId } = useParams();
  const users = useSelector((state) => state.users);
  const articles = useSelector((state) => state.articles);
  console.log('это статьи', articles);

  const [checkSubscribe, setCheckSubscribe] = useState(false);

  useEffect(() => {
    axios(`/api/users/${modelId}/subscribe`)
      .then((res) => {
        console.log(res.data.state, 'это ответ с бека');
        setCheckSubscribe(res.data.state);
      });
  }, [modelId]);

  return (
    <Box flex={3} p={2} sx={{ display: { xs: 'none', sm: 'flex' }, justifyContent: 'flex-start' }}>
      <Box position="fixed" width={300}>
        <Button
          sx={{ width: '100%', marginBottom: '15px' }}
          variant="outlined"
          onClick={() => {
            dispatch(actionUserAsync(modelId));
            setCheckSubscribe(!checkSubscribe);
          }}
        >
          {checkSubscribe ? 'Отписаться' : 'Подписаться'}
        </Button>
        <Typography variant="h6" fontWeight={100}>
          Подписчики
        </Typography>
        <AvatarGroup max={7}>
          {users && users.map((user) => (
            <Avatar
              key={user.id}
              alt={user?.User?.name}
              src={user?.User?.img}
            />
          ))}
        </AvatarGroup>
        <Typography
          component={NavLink}
          to={`/models/${modelId}/photos`}
          variant="h6"
          fontWeight={100}
          mt={2}
          style={{ textDecoration: 'none' }}
          color="text.primary"
        >
          Фотографии ваших авто
        </Typography>
        <ImageList rowHeight={100} style={{ marginBottom: 20 }} cols={2}>
          <ImageListItem>
            <img
              src="https://material-ui.com/static/images/image-list/breakfast.jpg"
              alt=""
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://material-ui.com/static/images/image-list/burgers.jpg"
              alt=""
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://material-ui.com/static/images/image-list/camera.jpg"
              alt=""
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://material-ui.com/static/images/image-list/morning.jpg"
              alt=""
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://material-ui.com/static/images/image-list/hats.jpg"
              alt=""
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://material-ui.com/static/images/image-list/vegetables.jpg"
              alt=""
            />
          </ImageListItem>
        </ImageList>
        <Typography
          component={NavLink}
          to={`/models/${modelId}/articles`}
          variant="h6"
          fontWeight={100}
          mt={2}
          style={{ textDecoration: 'none' }}
          color="text.primary"
        >
          Статьи про авто
        </Typography>
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
          {articles && articles.map((article) => (
            <>
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar alt="Remy Sharp" src={article?.img} />
                </ListItemAvatar>
                <ListItemText
                  primary={article?.title}
                  secondary={(
                    <>
                      {`${article?.text.substr(0, 53)}...`}
                      {/* {" — I'll be in your neighborhood doing errands this…"} */}
                    </>
                  )}
                />
              </ListItem>
              <Divider variant="inset" component="li" />
            </>
          ))}
        </List>
      </Box>
    </Box>
  );
}

export default Rightbar;
