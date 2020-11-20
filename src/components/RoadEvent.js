import React from 'react';
import {Button, Content} from "rsuite";
import './RoadEvent.css'
import {road_cards} from "../resources/data/road_data";
import {shuffle} from "./Utils";

type State = {
    viewingCard: boolean,
    editingCard: boolean,
    road: Array
};

type Props = {
};

class RoadEvent extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            viewingCard: false,
            editingCard: false,
            road: []
        }
    }

    componentDidMount() {
        console.log('component did mount')
        this.load()
    }

    save() {
        console.log('save')
        const { road } = this.state
        localStorage.setItem(`road`, JSON.stringify(road))
    }

    load() {
        console.log('load')
        const road = localStorage.getItem(`road`)
        if (!road) return this.init()

        this.setState({ city: JSON.parse(road) })
    }

    init() {
        console.log('init')
        // actual road events in campaign
        let road = [22, 5, 3, 6, 11, 13, 15, 27, 29, 43, 14, 1, 2, 18, 9, 4, 24].map((e, index) => index)
        //let road = [...Array(83)].map((e, index) => index)
        road = shuffle(road)
        this.setState({road})
    }

    drawCard() {
        console.log('draw card')
        this.setState({ viewingCard: true })
    }

    // modifies only the current drawn card
    removeCard() {
        let newCards = this.state.road.slice()
        newCards.splice(0,1)
        this.setState({road: newCards, viewingCard: false}, this.save)
    }

    // modifies only the current drawn card
    moveToBottomOfDeck() {
        let newCards = this.state.road.slice()
        newCards.splice(0,1)
        newCards.push(this.state.road[0])
        this.setState({road: newCards, viewingCard: false}, this.save)
    }

    render() {
        if (this.state.viewingCard) {
            console.log('viewing card')
            const cardId = this.state.road[0]
            let card = road_cards[cardId]
            return (
                <div className="App App-viewer">
                    <div className="card" tabIndex={1}>
                        <img className="card-front" alt="" src={card.front} />
                        <img tabIndex={2} className="card-back" alt="" src={card.back}/>
                    </div>
                    <Button onClick={() => this.moveToBottomOfDeck()}>
                        &nbsp; Put on bottom of deck
                    </Button>
                    <div className="button" onClick={() => this.moveToBottomOfDeck()}>
                        <img className="button-icon" alt="" src={'bottom.svg'} />
                        &nbsp; Put on bottom of deck
                    </div>
                    <div className="button" onClick={() => this.removeCard()}>
                        <img className="button-icon" alt="" src={'rip.svg'} />
                        &nbsp; Rip up card
                    </div>
                </div>
            )
        }
        return (
            <div>
                <Content>
                    <div className="card-button-road" onClick={() => this.drawCard()} >
                        Draw
                    </div>
                </Content>
            </div>
        );
    }
}

export default RoadEvent;
