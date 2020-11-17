import React from 'react';
import 'rsuite/dist/styles/rsuite-default.css';
import {Sidenav, Nav, Dropdown, Icon, Navbar, Sidebar} from "rsuite";

const headerStyles = {
    padding: 18,
    fontSize: 16,
    height: 56,
    background: '#34c3ff',
    color: ' #fff',
    whiteSpace: 'nowrap',
    overflow: 'hidden'
};

const iconStyles = {
    width: 56,
    height: 56,
    lineHeight: '56px',
    textAlign: 'center'
};

const NavToggle = ({expand, onChange}) => {
    return (
        <Navbar appearance="subtle" className="nav-toggle">
            <Navbar.Body>
                <Nav>
                    <Dropdown
                        placement="topStart"
                        trigger="click"
                        renderTitle={children => {
                            return <Icon style={iconStyles} icon="cog"/>;
                        }}
                    >
                        <Dropdown.Item>Help</Dropdown.Item>
                        <Dropdown.Item>Settings</Dropdown.Item>
                        <Dropdown.Item>Sign out</Dropdown.Item>
                    </Dropdown>
                </Nav>

                <Nav pullRight>
                    <Nav.Item onClick={onChange} style={{width: 56, textAlign: 'center'}}>
                        <Icon icon={expand ? 'angle-left' : 'angle-right'}/>
                    </Nav.Item>
                </Nav>
            </Navbar.Body>
        </Navbar>
    );
};

class SideNavigation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            expand: true
        };
        this.handleToggle = this.handleToggle.bind(this);
    }

    handleToggle() {
        this.setState({
            expand: !this.state.expand
        });
    }

    render() {
        const {expand} = this.state;
        return (
            <Sidebar style={{display: 'flex', flexDirection: 'column'}} width={expand ? 260 : 56} collapsible>
                <Sidenav.Header>
                    <div style={headerStyles}>
                        <Icon icon="logo-analytics" size="lg" style={{verticalAlign: 0}}/>
                        <span style={{marginLeft: 12}}> GM event helper</span>
                    </div>
                </Sidenav.Header>
                <Sidenav expanded={expand} appearance="subtle">
                    <Sidenav.Body>
                        <Nav>
                            <Nav.Item eventKey="1">Home</Nav.Item>
                            <Nav.Item eventKey="2" icon={<Icon icon="fort-awesome"/>}>City Event</Nav.Item>
                            <Nav.Item eventKey="3" icon={<Icon icon="road"/>}>Road Event</Nav.Item>
                            <Dropdown eventKey="4" trigger="hover" title="Settings" icon={<Icon icon="gear-circle"/>} placement="rightStart">
                                <Dropdown.Item eventKey="4-1">Export</Dropdown.Item>
                                <Dropdown.Item eventKey="4-2">Card event setting</Dropdown.Item>
                                <Dropdown.Item eventKey="4-3">Road event setting</Dropdown.Item>
                            </Dropdown>
                        </Nav>
                    </Sidenav.Body>
                </Sidenav>
                <NavToggle expand={expand} onChange={this.handleToggle}/>
            </Sidebar>

        );
    }
}

export default SideNavigation;
