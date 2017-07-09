import React from 'react';
import { Modal, Form } from 'semantic-ui-react';

class CategoryEditModal extends React.Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      oldCategory: this.props.category,
      oldColor: this.props.color,
      newCategory: this.props.category,
      newColor: this.props.color,
    }
  }

  handleChange = (e, { name, value }) => {
      this.setState({ [name]: value })
  }

  render() {
    const colors = [
      'red',
      'orange',
      'yellow',
      'olive',
      'green',
      'teal',
      'blue',
      'violet',
      'purple',
      'pink',
      'brown',
      'grey',
      'black'
    ];

    const { newCategory, newColor } = this.states;

    return (
      <Modal open={this.props.editing}>
        <Modal.Content>
          <Form>
            <Form.Field>
              <label>Category</label>
              <input name='category' value={newCategory} onChange={ this.handleChange } />
            </Form.Field>
            <Form.Field>
              <label>Color</label>
              <Dropdown name='color' onChange={ this.handleChange } value={newColor} search selection options={colors} />
            </Form.Field>
            <Button type='submit'>Submit</Button>
          </Form>
        </Modal.Content>
      </Modal>
    )
  }
}

CategoryEditModal.propTypes = {
  category: React.PropTypes.string.isRequired,
  color: React.PropTypes.string.isRequired,
  editing: React.PropTypes.bool.isRequired,
}

export default CategoryEditModal;
