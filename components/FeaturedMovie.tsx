// import React from "react";

// const FeaturedMovie = ({item}) => {

//     let firstDate = new Date(item.first_air_date);
//     let genres = [];
//     for (let i in item.genres) {
//         genres.push( item.genres[i].name );
//     }
//     let description = item.overview;
//     if(description.length > 300) {
//         description = description.substring(0, 300)+'...'
//     }

//     return (
//         <section className='bg-cover h-screen bg-center mobile:h-[90vh]' style={{
//             backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`
//         }}>
//             <div className="w-[100%] h-[100%] bg-gradient-to-t from-zinc-950 from-10% to-transparent to-90%">
//                 <div className="flex flex-col justify-center pl-8 pb-[130px] pt-[70px] w-[100%] h-[100%] bg-gradient-to-r from-zinc-950 from-30% to-transparent to-70%">
//                     <div className="text-6xl font-bold mobile:text-4xl">{item.original_name}</div>
//                     <div className="text-lg font-bold mt-4 mobile:text-base">
//                         <div className="inline-block text-nfpoints mr-4">{item.vote_average} Average</div>
//                         <div className="inline-block mr-4 ">{firstDate.getFullYear()}</div>
//                         <div className="inline-block mr-4">{item.number_of_seasons} season{item.number_of_seasons !== 1 ? 's' : ''}</div>
//                     </div>
//                     <div className="mt-4 text-xl text-neutral-400 max-w-[40%] mobile:text-sm mobile:max-w-[100%] mobile:mr-8">{description}</div>
//                     <div className="mt-4">
//                         <a className="inline-block text-xl font-bold py-3 px-7 rounded-md decoration-[none] mr-2.5 bg-white text-black transition duration-200 ease-out hover:opacity-[0.7] mobile:text-base" href={`/watch/${item.id}`}>► Watch</a>
//                         <a className="inline-block text-xl font-bold py-3 px-7 rounded-md decoration-[none] mr-2.5 bg-neutral-700 text-white transition duration-200 ease-out hover:opacity-[0.7] mobile:text-base" href={`/list/add/${item.id}`}>+My List</a>
//                     </div>
//                     <div className="pt-2 text-neutral-400 mobile:text-sm"><strong>Gêneros: </strong>{genres.join(', ')}</div>
//                 </div>
//             </div>
//         </section>
//     );
// }

// FeaturedMovie.displayName = 'FeaturedMovie';

// export default FeaturedMovie;