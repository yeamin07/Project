import '../styles/Footer.css'
import { Instagram } from '@mui/icons-material'
import { Twitter } from '@mui/icons-material'
import { Facebook } from '@mui/icons-material'
import { GitHub } from '@mui/icons-material'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="socialMedia">
            <Instagram/>
            <Twitter/>
            <Facebook/>
            <GitHub/>
        </div>
        <p>&copy; 2023 yeaminpizza.com</p>
    </div>
  )
}

export default Footer