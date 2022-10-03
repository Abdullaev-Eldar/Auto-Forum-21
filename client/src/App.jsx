import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import Article from './components/pages/Articles/Article';
import ArticleList from './components/pages/Articles/ArticleList/ArticleList';
import Login from './components/pages/Auth/Login/Login';
import Registration from './components/pages/Auth/Registration/Registration';
import Community from './components/pages/Community';
import PhotoAlbum from './components/pages/PhotoAlbum';
import Brands from './components/pages/Start/Brands';
import Models from './components/pages/Start/Models';
import Navbar from './components/UI/Navbar';
import { auth } from './redux/actions/authActions';
import { fetchBrands } from './redux/actions/brandsActions';
<<<<<<< HEAD
import Profile from './components/pages/Profile';
=======
import { fetchModels } from './redux/actions/modelsActions';
>>>>>>> cfeaa7c4cbf493e93cbf78116129475abb5dcd42

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(auth());
    dispatch(fetchBrands());
    dispatch(fetchModels());
  }, []);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Brands />} />
        <Route path="/brands" element={<Brands />} />
        <Route path="/brands/:brandId" element={<Models />} />
        <Route path="/models/:modelId" element={<Community />} />
        <Route path="/models/:modelId/photos" element={<PhotoAlbum />} />
        <Route path="/models/:modelId/articles" element={<ArticleList />} />
        <Route path="/models/:modelId/articles/:id" element={<Article />} />
        <Route path="/personal" element={<Profile />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
