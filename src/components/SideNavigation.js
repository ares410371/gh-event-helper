import React from 'react';
import 'rsuite/dist/styles/rsuite-default.css';
import {Sidenav, Nav, Dropdown, Icon, Sidebar, Divider, DOMHelper} from "rsuite";
import {Link} from "react-router-dom";
import NavToggle from "./NavToggle";

const headerStyles = {
    padding: 18,
    fontSize: 16,
    height: 56,
    background: '#34c3ff',
    color: ' #fff',
    whiteSpace: 'nowrap',
    overflow: 'hidden'
};

const { getHeight, on } = DOMHelper;

type State = {
    windowHeight: number,
    expand: boolean
};

type Props = {
    //children: React.Node
};

class SideNavigation extends React.Component<Props, State> {
    resizeListener = null;
    constructor(props: Props) {
        super(props);
        this.state = {
            windowHeight: getHeight(window),
            expand: true
        };
        this.resizeListenner = on(window, 'resize', this.updateHeight);
        this.handleToggle = this.handleToggle.bind(this);
    }

    updateHeight = () => {
        this.setState({
            windowHeight: getHeight(window)
        });
    }

    handleToggle() {
        this.setState({
            expand: !this.state.expand
        });
    }

    componentWillUnmount() {
        if (this.resizeListenner) {
            this.resizeListenner.off();
        }
    }

    render() {
        const { expand, windowHeight } = this.state;

        let navBodyStyle = null;
        if (expand) {
            navBodyStyle = {
                height: windowHeight - 112,
                overflow: 'auto'
            }
        }

        return (
            <Sidebar style={{display: 'flex', flexDirection: 'column'}} width={expand ? 260 : 56} collapsible>
                <Sidenav expanded={expand} appearance="subtle">
                    <Sidenav.Header>
                        <div style={headerStyles}>
                            <Icon icon="logo-analytics" size="lg" style={{ verticalAlign: 0 }} />
                            <span style={{ marginLeft: 12 }}> GM event helper</span>
                        </div>
                    </Sidenav.Header>
                    <Sidenav.Body style={navBodyStyle}>
                        <Nav>
                            <Nav.Item eventKey="2" icon={<Icon icon="fort-awesome"/>}>City Event</Nav.Item>
                            <Nav.Item eventKey="3" icon={<Icon icon="road"/>}>Road Event</Nav.Item>
                            <Divider/>
                            <Dropdown eventKey="4" trigger="hover" title="Settings" icon={<Icon icon="gear-circle"/>} placement="rightStart">
                                <Dropdown.Item eventKey="4-1">Export</Dropdown.Item>
                                <Dropdown.Item eventKey="4-2">Card event setting</Dropdown.Item>
                                <Dropdown.Item eventKey="4-3">Road event setting</Dropdown.Item>
                            </Dropdown>
                        </Nav>
                    </Sidenav.Body>
                </Sidenav>
                <NavToggle expand={expand} onChange={this.handleToggle} />
            </Sidebar>
        );
    }
}

export default SideNavigation;
