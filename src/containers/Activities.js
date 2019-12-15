import React from 'react';
import ActivityInput from '../components/ActivityInput';
import ActivitiesList from '../components/ActivitiesList';

class Activities extends React.Component {

    render() {
      return (
        <div>
          <ActivityInput destination={this.props.destination} />
          <ActivitiesList activities={this.props.destination && this.props.destination.activities} />
        </div>
      );
    }
  };

export default Activities;