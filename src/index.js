import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Match, Miss } from 'react-router';
import { Grid } from 'semantic-ui-react'

import Header from './containers/Header'
import Home from './containers/Home'
import NavBar from './containers/NavBar'
import NotFound from './containers/NotFound'
import Sessions from './components/Sessions'

const Root = () => {
  return (
      <BrowserRouter>
        <Grid>
          <Grid.Row columns={1}>
            <Grid.Column>
              <Header/>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row columns={2} >
            <Grid.Column>
              <NavBar/>
            </Grid.Column>
            <Grid.Column stretched>
                <Match exactly pattern="/" component={Home} />
                <Match pattern="/sessions/:userId" render={(props) => <Sessions sessions={[]} {...props} />} />
                <Miss component={NotFound} />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </BrowserRouter>
  )
}

render(<Root/>, document.querySelector('#main'));
