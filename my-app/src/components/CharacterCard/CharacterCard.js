import './CharacterCard.css'
import {Container, Row, Col} from 'react-bootstrap'

const CharacterCard = () => {
    return(
        <Container className='container'>
            <Row>
                <Col className='character-card-col-1'>
                <div>
                <img className='character-card-img' src="../../../img/thor.jpeg" alt="character" />
            </div>
            <div className='character-card-col-1-info'>
                <h2>THOR</h2>
                <p>As the Norse God of thunder and lightning, Thor wields one of the greatest weapons ever made, the enchanted hammer Mjolnir. While others have described Thor as an over-muscled, oafish imbecile, he's quite smart and compassionate...</p>
                <div className='character-card-btn'>
                    <button className='btn-1'>HOMEPAGE</button>
                    <button className='btn-2'>WIKI</button>
                </div>
            </div>
                
                </Col>
            <Col className='character-card-col-2'>
                <div>
                    <div className='character-card-col-text'>
                        Random character for today!
                    </div>
                    <div className='character-card-col-text'>
                        Do you want to get to know him better?
                    </div>
                    <div className='character-card-col-text-2'>
                        Or choose another one
                    </div>
                    <button className='btn-1'>TRY IT</button>
                </div>
                <div>
                    <img src="../../../img/mjolnir.png" alt="" />
                </div>

            </Col>
            
            </Row>
        </Container>
    )
}

export default CharacterCard