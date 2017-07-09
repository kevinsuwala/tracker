import React from 'react';
import { Button, Input, Dropdown, Modal, Form } from 'semantic-ui-react'
import CategoryEditModal from './CategoryEditModal';

class Tracker extends React.Component {
  constructor() {
    super();
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleAddCategory = this.handleAddCategory.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.toggleTracker = this.toggleTracker.bind(this);
  }

  state = {
    activity: '',
    categories: [],
    modalOpen: false,
    startTime: 0,
    tracking: false
  }

  handleCloseModal = () => {
    this.setState({ modalOpen: false })
  }

  handleOpenModal = (e, data) => {
    const category = data.value
    this.setState({ modalOpen: true })
  }

  handleChange = (e, { name, value }) => {
      this.setState({ [name]: value })
  }

  handleAddCategory = (e, { value }) => {
    console.log(value);
    this.props.addCategory(value, {color: 'grey'})

    this.setState({  
      categories: [{[value]: 'grey' }, ...this.state.categories]
    })
  }

  toggleTracker = () => {
    let startTime = this.state.startTime;

    if (this.state.tracking) {
      const session = {
        activity: this.state.activity,
        categories: this.state.categories,
        start: this.state.startTime / 1000,
        end: Date.now() / 1000
      }

      this.props.addSession(session);
      this.setState({ activity: '', categories: [] })
    } else {
      startTime = Date.now()
    }

    this.setState({
      startTime: startTime,
      tracking: !this.state.tracking
    })
  }

  render() {
    const options = Object.keys(this.props.categories).map((key) => {
      return {
        label: { color: this.props.categories[key].color, empty: true, circular: true },
        text: key,
        value: key,
      };
    });

    const renderedLabels = (label, index, props) => ({
      color: label.label.color,
      content: label.text
    })

    const { activity, categories } = this.state

    return (
      <div>
      <Input name='activity' onChange={ this.handleChange } type='text' placeholder='Activity' value={activity} fluid={true} action>
        <input />
        <Dropdown name='categories' onAddItem={this.handleAddCategory} onChange={ this.handleChange } placeholder='Categories' value={categories} allowAdditions multiple search selection renderLabel={renderedLabels} options={options} onLabelClick={this.handleOpenModal} />
        <Button type='submit' onClick={ this.toggleTracker }>{ this.state.tracking? 'Stop' : 'Track' }</Button>
      </Input>
      </div>
    )
  }
}

Tracker.propTypes = {
  categories: React.PropTypes.object.isRequired,
  addSession: React.PropTypes.func.isRequired,
  addCategory: React.PropTypes.func.isRequired,
}

export default Tracker;
