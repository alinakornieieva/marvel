import { Component } from 'react'
import './CardItem.css'

class CardItem extends Component {
    onCardClick = (e) => {
        // console.log(e.target.closest('div'))
        // e.target.closest('div').classList.toggle.
        // console.log(this.props.data.id)
        this.props.recieveCharId(this.props.data.id)
    }
    render() {
        return(
            <div onClick={this.onCardClick}>
                <div>
                    <img style={{width: '200px', height: '200px'}} src={this.props.data.thumbnail} alt="character-image" />
                </div>
                <div className='card-item-name'>
                    {this.props.data.name}
                </div>
            </div>
        )
    }
}

export default CardItem


// const CardItem = (props) => {
//     return(
//         <div>
//             <div>
//                 <img style={{width: '200px', height: '200px'}} src={props.data.thumbnail} alt="character-image" />
//             </div>
//             <div className='card-item-name'>
//                 {props.data.name}
//             </div>
//         </div>
//     )
// }