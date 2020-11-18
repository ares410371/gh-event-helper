import * as React from 'react';
import SideNavigation from "./components/SideNavigation";
import {Container, Content, Header} from "rsuite";
import {BrowserRouter} from "react-router-dom";

class App extends React.Component {

    render() {
        return (
            <div className="sidebar-page">
                <BrowserRouter>
                    <Container>
                        <SideNavigation/>
                        <Container className={`page-container container-full`}>
                            <Header>
                                <h2>Page Title</h2>
                            </Header>
                            <Content>Content</Content>
                        </Container>
                    </Container>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;
