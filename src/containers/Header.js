import React from 'react';
import { Button, Input, Menu } from 'semantic-ui-react';

class Header extends React.Component {
  constructor() {
    super();
    this.handleItemClick = this.handleItemClick.bind(this);
  }

  browserHistory = this.browserHistory;

  handleItemClick(e, { name }) {
    switch(name) {
      case 'submit':
        this.context.router.transitionTo('/submit');
        break;
      default:
        this.context.router.transitionTo('/');
        break;
    }
  }

  render() {
    return (
      <Menu pointing secondary>
				<Menu.Item>
         <Input placeholder='Description' />
      	</Menu.Item>
        <Menu.Item>
         <Input icon='tag' placeholder='Category' />
      	</Menu.Item>
        <Menu.Item>
          <Button content='Submit' name='submit' onClick={this.handleItemClick} />
        </Menu.Item>
      </Menu>
    )
  }
}

Header.contextTypes = {
  router: React.PropTypes.object
}

export default Header;
