import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardBody, CardTitle, CardImg } from 'reactstrap';

const BucketList = props => {

  return (
    <div className='DestinationContainer'>
      <h3>Destinations on your Bucket List</h3>

      {props.destinations.map(destination => {
        if (destination.bucket_list === true) {
          return (
            <Link key={destination.id} to={`/destinations/${destination.id}`}>
              <Card key={destination.id} className = 'DestinationCard'>
                <CardBody>
                  <CardTitle>{destination.name} - {destination.country}</CardTitle>
                  <CardImg className='DestinationImage' src={destination.image} alt={destination.name} />
                </CardBody>
              </Card>
            </Link>
          )
        } else {
          return (
            null
          )
        }
      })}
    </div>
  );
};

export default BucketList;