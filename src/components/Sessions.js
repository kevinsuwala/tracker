import React, { PropTypes } from 'react';
import { Grid } from 'semantic-ui-react'

import Tracker from './Tracker';
import SessionItem from './SessionItem'
import SessionApi from '../api/sessionApi'

class Sessions extends React.Component {
  constructor() {
    super();
    this.addSession = this.addSession.bind(this);
    this.addCategory = this.addCategory.bind(this);

    this.state = {
      categories: {},
      sessions: []
    };
  }

  componentWillReceiveProps() {
    SessionApi.getAllSessions().then(sessions => {
      this.setState({ sessions });
    });
  }

  addSession(session) {
    let sessions = [...this.state.sessions];
    sessions.push(session);
    this.setState({ sessions });
  }

  addCategory(category, details) {
    let categories = {...this.state.categories};
    categories[category] = details;
    this.setState({ categories });
  }

  createItem = (item, index) => {
    return(
      <SessionItem key={index} item={item} categories={this.state.categories} />
    )
  }

  render() {
    console.log(this.state.sessions);
    console.log(this.state.sessions[0]);
    return (
      <div className="sessions-main">
        <Tracker categories={this.state.categories} addCategory={this.addCategory} addSession={this.addSession} />
        <Grid divided='vertically'>
          { this.state.sessions.map((item, index) => {return this.createItem(item, index)}) }
        </Grid>
      </div>
    )
  }
}

Sessions.propTypes = {
  params: React.PropTypes.object.isRequired,
  sessions: PropTypes.array.isRequired
}

export default Sessions;

