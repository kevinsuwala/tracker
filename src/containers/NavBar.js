import React from 'react';
import { Menu } from 'semantic-ui-react';

class NavBar extends React.Component {
  constructor() {
    super();
    this.handleItemClick = this.handleItemClick.bind(this);
  }

  state = { activeItem: 'home' }
  browserHistory = this.browserHistory;

  handleItemClick(e, { name }) {
    this.setState({ activeItem: name })

    switch(name) {
      case 'home':
        this.context.router.transitionTo('/');
        break;
      case 'sessions':
        this.context.router.transitionTo('/sessions/1');
        break;
      default:
        this.context.router.transitionTo('/');
        break;
    }
  }

  render() {
    const { activeItem } = this.state

    return (
      <Menu pointing secondary stackable vertical={true}>
        <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick} />
        <Menu.Item name='sessions' active={activeItem === 'sessions'} onClick={this.handleItemClick} />
        <Menu.Menu position='right'>
          <Menu.Item name='login' active={activeItem === 'login'} onClick={this.handleItemClick} />
        </Menu.Menu>
      </Menu>
    )
  }
}

NavBar.contextTypes = {
  router: React.PropTypes.object
}

export default NavBar;
