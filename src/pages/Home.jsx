import '../styles/Home.css'
import {Link} from 'react-router-dom'
import BannerImage from '../assets/pizza.jpeg'

const Home = () => {
  return (
    <div className='home' style={{backgroundImage: `url(${BannerImage})`}} >
      <div className="headerContainer">
        <h1>Yeamin's Pizzaria</h1>
        <p>PIZZA TO FIT ANY TASTE</p>
        <Link to='/menu'>
         <button> ORDER NOW</button>
        </Link>
      </div>
    </div>
  )
}

export default Home