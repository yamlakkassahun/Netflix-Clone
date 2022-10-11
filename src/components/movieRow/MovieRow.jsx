import React from 'react'
import './MovieRow.css';

const MovieRow = ({ title, fetchUrl, isLarger }) => {
    return (
        <div className='row'>
            <h2>{title}</h2>
            <div className="row_posters">
                {isLarger == "true" ? <>
                    <img className="row_poster" src='https://m.media-amazon.com/images/I/71niXI3lxlL._AC_SY679_.jpg' alt='poster' />
                    <img className="row_poster" src='https://i.etsystatic.com/34628541/r/il/cb3e08/3716962468/il_570xN.3716962468_183d.jpg' alt='poster' />
                    <img className="row_poster" src='https://media1.popsugar-assets.com/files/thumbor/z5oKgNC9S4DS6Bay78Aoy5aLO4s/fit-in/728xorig/filters:format_auto-!!-:strip_icc-!!-/2017/01/26/813/n/1922283/055dc333c3280d59_BeautyAndTheBeast58726d5b9fac8/i/Beauty-Beast-2017-Movie-Posters.jpg' alt='poster' />
                    <img className="row_poster" src='https://sm.ign.com/t/ign_za/gallery/s/spider-man/spider-man-far-from-home-official-movie-posters_ex7e.1080.jpg' alt='poster' />
                    <img className="row_poster" src='http://www.saltypopcorn.co.uk/film-images/the-batman.jpg' alt='poster' />
                    <img className="row_poster" src='https://m.media-amazon.com/images/M/MV5BOTY2NzFjODctOWUzMC00MGZhLTlhNjMtM2Y2ODBiNGY1ZWRiXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_FMjpg_UX1000_.jpg' alt='poster' />
                    <img className="row_poster" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGLcZn7B4RrXlkSrkdxHFclczCxe8JdlEVazmP9zVcgyy7Y9YYtNmmTD2eolmoyRFZI1w&usqp=CAU' alt='poster' />
                    <img className="row_poster" src='https://m.media-amazon.com/images/I/71hXOjjUYmL._AC_SY679_.jpg' alt='poster' />
                    <img className="row_poster" src='https://cdn.seat42f.com/wp-content/uploads/2021/04/20024821/Shang-Chi-And-The-Legend-Of-The-Ten-Rings-Movie-Poster.jpg' alt='poster' />
                    <img className="row_poster" src='http://www.saltymovies.com/film-images/uncharted.jpg' alt='poster' />
                    <img className="row_poster" src='https://m.media-amazon.com/images/I/71niXI3lxlL._AC_SY679_.jpg' alt='poster' />
                    <img className="row_poster" src='https://i.etsystatic.com/34628541/r/il/cb3e08/3716962468/il_570xN.3716962468_183d.jpg' alt='poster' />
                    <img className="row_poster" src='https://media1.popsugar-assets.com/files/thumbor/z5oKgNC9S4DS6Bay78Aoy5aLO4s/fit-in/728xorig/filters:format_auto-!!-:strip_icc-!!-/2017/01/26/813/n/1922283/055dc333c3280d59_BeautyAndTheBeast58726d5b9fac8/i/Beauty-Beast-2017-Movie-Posters.jpg' alt='poster' />
                    <img className="row_poster" src='https://sm.ign.com/t/ign_za/gallery/s/spider-man/spider-man-far-from-home-official-movie-posters_ex7e.1080.jpg' alt='poster' />
                    <img className="row_poster" src='http://www.saltypopcorn.co.uk/film-images/the-batman.jpg' alt='poster' />
                    <img className="row_poster" src='https://m.media-amazon.com/images/M/MV5BOTY2NzFjODctOWUzMC00MGZhLTlhNjMtM2Y2ODBiNGY1ZWRiXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_FMjpg_UX1000_.jpg' alt='poster' />
                    <img className="row_poster" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGLcZn7B4RrXlkSrkdxHFclczCxe8JdlEVazmP9zVcgyy7Y9YYtNmmTD2eolmoyRFZI1w&usqp=CAU' alt='poster' />
                    <img className="row_poster" src='https://m.media-amazon.com/images/I/71hXOjjUYmL._AC_SY679_.jpg' alt='poster' />
                    <img className="row_poster" src='https://cdn.seat42f.com/wp-content/uploads/2021/04/20024821/Shang-Chi-And-The-Legend-Of-The-Ten-Rings-Movie-Poster.jpg' alt='poster' />
                    <img className="row_poster" src='http://www.saltymovies.com/film-images/uncharted.jpg' alt='poster' />
                </> :
                    <>
                        <img className="row_poster" src='https://film-book.com/wp-content/uploads/2022/05/thor-love-and-thunder-movie-poster-banner-01-700x400-1-700x400.jpg' alt='poster' />
                        <img className="row_poster" src='https://static.c.realme.com/ID/wm-thread/1540072444898148352.jpg' alt='poster' />
                        <img className="row_poster" src='https://images.thedirect.com/media/article_full/eternals-review-mcu-marvel-studios-disney-box-office.jpg' alt='poster' />
                        <img className="row_poster" src='https://1.bp.blogspot.com/-VkL6iGa3gDM/XaSBWeiBZYI/AAAAAAAAJqI/8ulCIYKnBIQNHXwiQk1my1KMCKE2m-8ogCLcBGAsYHQ/s1600/ghost-2019-hindi-horror-movie-poster.jpg' alt='poster' />
                        <img className="row_poster" src='https://www.gamespot.com/a/uploads/original/1601/16018044/3866941-freeguy.jpg' alt='poster' />
                        <img className="row_poster" src='https://fangirlfreakout.com/wp-content/uploads/2020/09/star-wars-the-rise-of-skywalker-2-600x379-1.png' alt='poster' />
                        <img className="row_poster" src='https://i.blogs.es/e42a32/portada/1366_2000.jpg' alt='poster' />
                        <img className="row_poster" src='https://film-book.com/wp-content/uploads/2022/05/thor-love-and-thunder-movie-poster-banner-01-700x400-1-700x400.jpg' alt='poster' />
                    </>
                }
            </div>


        </div>
    )
}

export default MovieRow