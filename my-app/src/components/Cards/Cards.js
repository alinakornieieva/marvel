import { Component } from "react"
import MarvelService from "../../services/MarvelService"
import Preloader from "../Preloader/Preloader"
import CardItem from "./CardItem"
import Error from "../Error/Error"

class Cards extends Component{
    state = {
        charList: [],
        isFetching: true,
        hasError: false
    }
    service = new MarvelService()
    componentDidMount() {
        this.service.getAllCharacters().then(this.onCharLoaded).catch(this.onError)
    }
    onCharLoaded = (charList) => {
        this.setState({
            charList,
            isFetching: false
        })
    }
    onError = () => {
        this.setState({
            hasError: true,
            isFetching: false
        })
    }
    render() {
        const loading = this.state.isFetching ? <Preloader/> : null
        const error = this.state.hasError ? <Error/> : null
        const content = !(loading || error) ? <View data={this.state.charList}/> : null
        return(
            <div className="cards">
                {loading}
                {error}
                {content}
            </div>
        )
    }
}

const View = (props) => {
    return(
        <>
            <div className="cards-grid">
                {props.data.map(item => <CardItem data={item}/>)}
            </div>
            <button className="btn-1">LOAD MORE</button>
        </>
    )
}

export default Cards