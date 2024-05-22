import MoviesSlider from '../MoviesSlider'
import './index.css'

const PrimeVideo = props => {
  const {moviesList} = props
  const actionMovies = moviesList.filter(each => each.categoryId === 'ACTION')
  const comedyMovies = moviesList.filter(each => each.categoryId === 'COMEDY')

  return (
    <div className="main-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
        className="prime-video-img"
        alt="prime video"
      />
      <div className="movies-container">
        <h1 className="movies-h">Action Movies</h1>
        <div className="movies">
          <MoviesSlider moviesList={actionMovies} />
        </div>
      </div>
      <div className="movies-container">
        <h1 className="movies-h">Comedy Movies</h1>
        <div className="movies">
          <MoviesSlider moviesList={comedyMovies} />
        </div>
      </div>
    </div>
  )
}

export default PrimeVideo
