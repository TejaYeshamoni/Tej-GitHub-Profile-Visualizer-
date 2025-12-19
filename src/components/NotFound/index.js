import {Link} from 'react-router-dom'
import './index.css'

const NotFound = () => (
  <div className="notFoundContainer">
    <img
      src="https://res.cloudinary.com/dhtl10m17/image/upload/v1745086246/Group_7519_mks7or.png"
      alt="page not found"
      className="not-found-image"
    />
    <h1 className="not-found-heading">PAGE NOT FOUND</h1>
    <p className="not-found-des">
      we are sorry, the page you requested could not be found Please go back to
      the homepage.
    </p>
    <Link to="/">
      <button type="button" className="go-to-home-button">
        Go to Home
      </button>
    </Link>
  </div>
)

export default NotFound
