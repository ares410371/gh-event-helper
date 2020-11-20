import * as React from 'react';
import SideNavigation from "./components/SideNavigation";
import {Container} from "rsuite";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Home from "./components/Home";
import CityEvent from "./components/CityEvent";
import RoadEvent from "./components/RoadEvent";
import Export from "./components/Export";
import CityEventSettings from "./components/CityEventSettings";
import RoadEventSettings from "./components/RoadEventSettings";

class App extends React.Component {

    render() {
        return (
            <div className="sidebar-page">
                <BrowserRouter>
                    <Container>
                        <SideNavigation/>
                        <Container className={`page-container container-full`} style={{ alignItems: 'center'}}>
                            <Switch>
                                <Route exact path="/" component={Home}/>
                                <Route exact path="/city-event" component={CityEvent}/>
                                <Route exact path="/road-event" component={RoadEvent}/>
                                <Route exact path="/export" component={Export}/>
                                <Route exact path="/city-event-settings" component={CityEventSettings}/>
                                <Route exact path="/road-event-settings" component={RoadEventSettings}/>
                            </Switch>
                        </Container>
                    </Container>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;
