import { Component } from "react"
import MarvelService from "../../services/MarvelService"
import Preloader from "../Preloader/Preloader"
import CardItem from "./CardItem"
import Error from "../Error/Error"

class Cards extends Component{
    state = {
        charList: [],
        isFetching: true,
        hasError: false,
        offset: 210,
        newItemsLoading: false,
        listEnd: false
    }
    service = new MarvelService()
    componentDidMount() {
        this.service.getAllCharacters()
        .then(this.onFirstCharListLoaded).catch(this.onError)

    }
    onFirstCharListLoaded = (newItems) => {
        this.setState(({offset}) => ({
            charList: [...newItems],
            newItemsLoading: false,
            isFetching: false,
            offset: offset + 9,
        }))
    }
    onRequest = (offset) => {
        this.onCharListLoading()
        this.service.getAllCharacters(offset).then(this.onCharListLoaded).catch(this.onError)
    }
    onCharListLoading = () => {
        this.setState({
            newItemsLoading: true
        })
    }
    onCharListLoaded = (newItems) => {
        let ended = false
        if (newItems.length < 9) {
            ended = true
        }
        this.setState(({charList, offset}) => ({
            charList: [...charList, ...newItems],
            newItemsLoading: false,
            isFetching: false,
            offset: offset + 9,
            listEnd: ended
        }))
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
        const content = !(loading || error) ? <View listEnd={this.state.listEnd} onRequest={this.onRequest} offset={this.state.offset} newItemsLoading={this.state.newItemsLoading} data={this.state.charList} recieveCharId={this.props.recieveCharId}/> : null
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
                {props.data.map(item => <CardItem key={item.id} data={item}  recieveCharId={props.recieveCharId} />)}
            </div>
            <button className="btn-1" 
            style={{display: props.listEnd ? 'none' : 'block'}}
            onClick={() => props.onRequest(props.offset)}
            disabled={props.newItemsLoading}>LOAD MORE</button>
        </>
    )
}

export default Cards

// box-shadow: rgba(255, 0, 0, 0.16) 0px 10px 36px 0px, rgba(255, 0, 0, 0.06) 0px 0px 0px 1px;