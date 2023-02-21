import './CardItem.css'

const CardItem = (props) => {
    return(
        <div>
            <div>
                <img style={{width: '200px', height: '200px'}} src={props.data.thumbnail} alt="character-image" />
            </div>
            <div className='card-item-name'>
                {props.data.name}
            </div>
        </div>
    )
}

export default CardItem