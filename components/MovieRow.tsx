import React, { useState } from 'react';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';


const MovieRow = ({title, items}) => {
    const [scrollX, setScrollX] = useState(-400);

    const handleLeftArrow = () => {
        let x = scrollX + Math.round(window.innerWidth / 2);
        if(x > 0) {
            x = 0;
        }
        setScrollX(x);
    }
    
    const handleRightArrow = () => {
        let x = scrollX - Math.round(window.innerWidth / 2);
        let listW = items.results.length * 150;
        if ((window.innerWidth - listW) > x) {
            x = (window.innerWidth - listW) + 60;
        }
        setScrollX(x);
    }

    return (
        // class movieRow
      <div className='group/item mb-7'>
        {/* class movieRow h2 */}
        <h2 className='cursor-default mx-0 mt-0 mb-2 pl-7 font-roboto text-2xl'>{title}</h2>

        <div onClick={handleLeftArrow} className='mobile:opacity-100 group/edit opacity-0 group-hover/item:opacity-100 group-hover/item:ease-out group-hover/item:duration-700 absolute w-[40px] h-[225px] bg-bgnextbtn left-0 z-[99] flex items-center justify-center overflow-hidden cursor-pointer'>
            <NavigateBeforeIcon style={{fontSize: 50}} />
        </div>
        <div onClick={handleRightArrow} className='mobile:opacity-100 group/edit opacity-0 group-hover/item:opacity-100 group-hover/item:ease-out group-hover/item:duration-700 absolute w-[40px] h-[225px] bg-bgnextbtn right-0 z-[99] flex items-center justify-center overflow-hidden cursor-pointer'>
            <NavigateNextIcon style={{fontSize: 50}} />
        </div>

        {/* class movieRow--listarea */}
        <div className='overflow-x-hidden pl-7'>
            {/* class movieRow--list */}
            <div className='ease-out duration-300' style={{ marginLeft: scrollX, width: items.results.length * 150 }} >
                {items.results.length > 0 && items.results.map((item, key) => (
                    // class movieRow--item
                    <div key={key} className='cursor-pointer inline-block w-36'>
                        <img className='w-full scale-90 transition duration-200 ease-in-out hover:scale-100' src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.original_title} key={key}/>  
                    </div>
                ))}
            </div>
        </div>
      </div>  
    );
}

MovieRow.displayName = 'MovieRow';

export default MovieRow;