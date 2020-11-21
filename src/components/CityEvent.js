import React from 'react';
import {Button, Content} from "rsuite";
import './CityEvent.css';
import {city_cards} from "../resources/data/city_data";
import {shuffle} from "./Utils";

type State = {
    viewingCard: boolean,
    editingCard: boolean,
    city: Array
};

type Props = {
};

class CityEvent extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            viewingCard: false,
            editingCard: false,
            city: []
        }
    }

    componentDidMount() {
        console.log('component did mount')
        this.load()
    }

    save() {
        console.log('save')
        const { city } = this.state
        localStorage.setItem(`city`, JSON.stringify(city))
    }

    load() {
        console.log('load')
        const city = localStorage.getItem(`city`)
        if (!city) return this.init()

        this.setState({ city: JSON.parse(city) })
    }

    init() {
        console.log('init')
        // actual city events in campaign
        let city = [26, 22, 28, 7, 19, 24, 10, 11, 2, 42, 20, 14, 18, 12, 71, 1, 70, 3, 27, 9, 13, 30, 75, 15].map((e, index) => index)
        //let city = [...Array(90)].map((e, index) => index)
        city = shuffle(city)
        this.setState({city})
    }

    drawCard() {
        console.log('draw card')
        this.setState({ viewingCard: true })
    }

    // modifies only the current drawn card
    removeCard() {
        let newCards = this.state.city.slice()
        newCards.splice(0,1)
        this.setState({city: newCards, viewingCard: false}, this.save)
    }

    // modifies only the current drawn card
    moveToBottomOfDeck() {
        let newCards = this.state.city.slice()
        newCards.splice(0,1)
        newCards.push(this.state.city[0])
        this.setState({city: newCards, viewingCard: false}, this.save)
    }

    render() {
        if (this.state.viewingCard) {
            console.log('viewing card')
            const cardId = this.state.city[0]
            let card = city_cards[cardId]
            return (
                <div className="App App-viewer">
                    <div className="card" tabIndex={1}>
                        <img className="card-front" alt="" src={card.front} />
                        <img tabIndex={2} className="card-back" alt="" src={card.back}/>
                    </div>
                    <Button onClick={() => this.moveToBottomOfDeck()}>
                        &nbsp; Put on bottom of deck
                    </Button>
                    <Button onClick={() => this.removeCard()}>
                        &nbsp; Rip up card
                    </Button>
                </div>
            )
        }
        return (
            <div>
                <Content>
                    <div className="card-button-city" onClick={() => this.drawCard()} >
                        Draw
                    </div>
                </Content>
            </div>
        );
    }
}

export default CityEvent;
