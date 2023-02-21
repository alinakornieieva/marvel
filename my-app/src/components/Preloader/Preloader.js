import loader from './loader.gif'
import './Preloader.css'

const Preloader = () => {
    return(
        <div className='preloader'>
            <img src={loader} alt="loader" />
        </div>
    )
}

export default Preloader