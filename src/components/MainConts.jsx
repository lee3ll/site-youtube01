import React, { useEffect, useState } from 'react';
import { Category, Videos } from './';

const MainConts = () => {
  const [selectCategory, setSelectCategory] = useState('eunji');
  const [videos, setvideos] = useState([]);

  useEffect(() => {
    fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=48&q=Studio%20Ghiblitype=video&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`
    )
      .then((response) => response.json())
      .then((result) => setvideos(result.items))
      .catch((error) => console.log(error));
  }, []);

  return (
    <main id="main">
      <aside id="asdie">
        <Category
          selectCategory={selectCategory}
          setSelectCategory={setSelectCategory}
        />
      </aside>
      <section id="contents">
        <h2>{selectCategory} 유튜버</h2>
        <Videos videos={videos}/>
      </section>
    </main>
  );
};

export default MainConts;
