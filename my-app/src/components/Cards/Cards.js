import { Component } from "react"
import MarvelService from "../../services/MarvelService"
import CardItem from "./CardItem"

class Cards extends Component{
    state = {
        name: null,
        thumbnail: null,
    }
    service = new MarvelService
    componentDidMount() {
        this.service.getAllCharacters().then(res => {
            debugger
            this.setState({
                name: res.name,
                thumbnail: res.thumbnail
            })
        })
    }
    render() {
        return(
            <div className="cards">
                <div className="cards-grid">
                <CardItem data={this.state}/>
                <CardItem data={this.state}/>

               
                </div>
                <button className="btn-1">LOAD MORE</button>
            </div>
        )
    }
}

export default Cards