import React from 'react';
import { Grid, Label } from 'semantic-ui-react';
import { formattedTimeDifference, formattedTimeRange } from '../helpers';

class SessionItem extends React.Component {
  renderCategory = (category, categories, index) => {
    const color = categories[category] ? categories[category]['color'] : "grey";
    return(
      <Label key={index} color={color}>
        {category}
      </Label>
    )
  }

  render() {
    const { item, categories } = this.props
    
    return (
        <Grid.Row columns='equal' verticalAlign="middle">
          <Grid.Column>
            <h3>{item['description']}</h3>
          </Grid.Column>

          <Grid.Column>
            {
              item['categories'] ?
              item['categories'].map((category, index) => {
                return this.renderCategory(category, categories, index)
              }) : ""
            }
          </Grid.Column>
          
          <Grid.Column>
            <Label>
              <h4>{ formattedTimeDifference(item['startTime'], item['endTime']) }</h4>
            </Label>
          </Grid.Column>
          
          <Grid.Column>
            <Label>
              <h4>{  formattedTimeRange(item['startTime'], item['endTime']) }</h4>
            </Label>
          </Grid.Column>
        </Grid.Row>
    )
  }
}

SessionItem.propTypes = {
  categories: React.PropTypes.object.isRequired,
  item: React.PropTypes.object.isRequired,
}

export default SessionItem;
