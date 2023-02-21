import React, { Component } from 'react';
import './RandomCharacterCard.css'
import {Container, Row, Col} from 'react-bootstrap'
import MarvelService from '../../services/MarvelService';
import Preloader from '../Preloader/Preloader';


class RandomCharacterCard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: null,
            description: null,
            thumbnail: null,
            homepage: null,
            wiki: null,
            isFetching: true
        }
    }
    componentDidMount() {
        this.updateCharacter()
    }
    service = new MarvelService()
    updateCharacter = () => {
        const id = Math.floor(Math.random() * (1011400 - 1011000) + 1011000)
        // this.service.getAllCharacters().then(res => console.log(res))
        // if (this.state.isFetching) {
        //     return <Preloader/>
        // }
        this.service.getCharacter(id).then((res) => {
            this.setState(res)
            // console.log(res)
        })
    }
    render() {
        if (this.state.isFetching) {
            return <Preloader/>
        }
        const {name, description, thumbnail, homepage, wiki} = this.state
        return(
            <Container className='container'>
                <Row>
                    <Col className='character-card-col-1'>
                    <div>
                    <img className='character-card-img' src={thumbnail} alt={thumbnail} />
                </div>
                <div className='character-card-col-1-info'>
                    <h2>{name}</h2>
                    <p>{description}</p>
                    <div className='character-card-btn'>
                        <a href={homepage} className='btn-1'>HOMEPAGE</a>
                        <a href={wiki} className='btn-2'>WIKI</a>
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
                        <button className='btn-1' onClick={this.updateCharacter}>TRY IT</button>
                    </div>
                    <div>
                        <img src="../../../img/mjolnir.png" alt="" />
                    </div>
    
                </Col>
                
                </Row>
            </Container>
        )
    }
}

export default RandomCharacterCard