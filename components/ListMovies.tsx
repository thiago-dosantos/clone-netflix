import React, { useEffect, useState } from 'react';
import Tmdb from '@/libs/Tmdb';
import MovieRow from '@/components/MovieRow';
import FeaturedMovie from '@/components/FeaturedMovie';
import { Ring } from '@uiball/loaders'
import Footer from '@/components/Footer';

export default () => {
  
  const [movieList, setMovieList] = useState([]);
  const [featureData, setFeatureData] = useState(null);

  useEffect(() => {
    const loadAll = async () => {
      // take list
      let list = await Tmdb.getHomeList();
      setMovieList(list);

      // take feature
      let originals = list.filter(i=>i.slug === 'originals');
      let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length -1));
      let chosen = originals[0].items.results[randomChosen];
      let chosenInfo = await Tmdb.getMovieInfo(chosen.id, 'tv');
      setFeatureData(chosenInfo);
    }

    loadAll();
  }, []);

  return (
    <div className='text-white mx-auto h-full'>

      {featureData &&
        <FeaturedMovie item={featureData} />
      }

      <section className='mt-[-130px]'>
        {movieList.map((item, key) => (
          <MovieRow key={key} title={item.title} items={item.items}/>
        ))}
      </section>

      {movieList.length <= 0 && 
        <div className="fixed left-0 top-0 bottom-0 right-0 z-[99] bg-zinc-900 flex justify-center items-center">
          <Ring
          size={100}
          lineWeight={5}
          speed={1} 
          color="red" 
          />
        </div>
      }
      <Footer />
    </div>
  );
}