import CardItem from "./CardItem"

const Cards = () => {
    return(
        <div className="cards">
            <div className="cards-grid">
            <CardItem/>
            <CardItem/>
            <CardItem/>
            <CardItem/>
            <CardItem/>
            <CardItem/>
            <CardItem/>
            <CardItem/>
            <CardItem/>

            </div>

            <button className="btn-1">LOAD MORE</button>
        </div>
    )
}

export default Cards