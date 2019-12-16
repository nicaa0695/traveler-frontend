import React from 'react';
import { connect } from 'react-redux';
import { ListGroup, ListGroupItem, Button } from 'reactstrap';
import { deleteActivity } from '../actions/activityActions';

const ActivitiesList = props => {

  const handleDelete = (activity) => {
    props.deleteActivity(activity.id, activity.destination_id)
  }

  return (
    <div className='ActivitiesList'>
      {props.activities && props.activities.length === 0 ? <h6>There aren't any activities for this location yet</h6> : <h5>Below Are Some Activities for this Location</h5>}
      <ListGroup>
        {props.activities && props.activities.map(activity =>
          <ListGroupItem style={{fontSize: 'xx-large' }} key={activity.id}>{activity.title}   <Button style={{backgroundColor: 'black'}}onClick={() => handleDelete(activity)} className='DeleteButton'>Delete This Activity</Button></ListGroupItem>
        )}
      </ListGroup>
    </div>
  );
};

export default connect(null, { deleteActivity })(ActivitiesList);