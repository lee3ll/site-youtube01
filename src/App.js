import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {
  HeaderCont,
  MainConts,
  VideoConts,
  ChannelConts,
  SearchConts,
} from './components';

const App = () => {
  return (
    <BrowserRouter>
      <HeaderCont />
      <Routes>
        <Route path="/" element={<MainConts />}></Route>
        <Route path="/video/:id" element={<VideoConts />}></Route>
        <Route path="/channel/:id" element={<ChannelConts />}></Route>
        <Route path="/search/:searchTerm" element={<SearchConts />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
