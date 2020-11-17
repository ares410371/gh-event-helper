import React from 'react';
import './App.css';
import SideNavigation from "./components/SideNavigation";
import {Container, Content, Header} from "rsuite";

class App extends React.Component {

    render() {
        return (
            <div className="sidebar-page" style={{bottom: 0}}>
                <Container>
                    <SideNavigation/>
                    <Container>
                        <Header>
                            <h2>Page Title</h2>
                        </Header>
                        <Content>Content</Content>
                    </Container>
                </Container>
            </div>
        );
    }
}

export default App;
