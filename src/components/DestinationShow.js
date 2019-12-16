import React from 'react';
import { connect } from 'react-redux';
import { Card, CardBody, CardTitle, CardImg, Button } from 'reactstrap';
import Activities from '../containers/Activities';
import { deleteDestination, toggleVisited, toggleBucketList } from '../actions/destinationActions';


const DestinationShow = props => {

  let destination = props.destinations.filter(destination => destination.id == props.match.params.id)[0];

  const handleDelete = () => {
    props.deleteDestination(destination.id);
    const path = `/destinations`;
    props.history.push(path);
  };

  const handleVisited = () => {
    props.toggleVisited(destination, destination.id)
  }

  const handleBucketList = () => {
    props.toggleBucketList(destination, destination.id)
  }

  return (
    <div>
      <Card className = 'DestinationShow'>
        <CardBody>
          <Button onClick={handleDelete} className='DeleteButton'>x</Button>
          <CardTitle>{destination && destination.name} - {destination && destination.country}</CardTitle>
          <CardImg className='DestinationImage' src={destination && destination.image} alt={destination && destination.name} />
        </CardBody>
        <Button onClick={handleVisited} className='VisitedButton'>
          {destination && destination.visited === false ? 'Add to Visited' : 'You Have Visited'}
        </Button>
        <Button onClick={handleBucketList} className='BucketListButton'>
          {destination && destination.bucket_list === false ? 'Add to Bucket List' : 'This Is In your Bucket List'}
        </Button>
      </Card>

      <Activities destination={destination} />
    </div>
  );
};

export default connect(null, { deleteDestination, toggleVisited, toggleBucketList })(DestinationShow);