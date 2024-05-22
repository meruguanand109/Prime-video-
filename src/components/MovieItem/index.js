import Popup from 'reactjs-popup'
import ReactPlayer from 'react-player'
import {IoMdClose} from 'react-icons/io'
import './index.css'

const MovieItem = props => {
  const {movie} = props
  const {thumbnailUrl, videoUrl} = movie
  return (
    <Popup
      modal
      trigger={
        <div className="movie-item">
          <img src={thumbnailUrl} alt="thumbnail" className="thumbnail-img" />
        </div>
      }
    >
      {close => (
        <div className="popup">
          <button
            aria-label="closeButton"
            type="button"
            data-testid="closeButton"
            className="close-btn"
            onClick={() => close()}
          >
            <IoMdClose />
          </button>
          <div className="video">
            <ReactPlayer url={videoUrl} />
          </div>
        </div>
      )}
    </Popup>
  )
}

export default MovieItem
