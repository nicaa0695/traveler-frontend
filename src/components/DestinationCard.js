import React from 'react';
import { Card, CardBody, CardTitle, CardImg, Button } from 'reactstrap';

class DestinationCard extends React.Component {

  state = {
    likes: 0
  }

  countLikes = () =>  {
    this.setState ({
      likes: this.state.likes + 1
    })
  }

  callApi = () => {
    console.log('a')
    fetch(`http://localhost:3000/api/v1/destinatidfsfsdfsdons/1`)
      .then(res => {
        console.log(res)
        if (!res.ok) {
          throw new Error(res.statusText)
        } else {
          console.log('b')
          return res.json()
        }
      })
      .then(destination => console.log('c', destination))
      .catch(error => console.log('d', error))
      console.log('e')

      // 'a', 'e', 'd'
  }

  render () {
    let {destination} = this.props
    return (
      <Card className = 'DestinationCard'>
        <CardBody>
          <CardTitle>{destination.name} - {destination.country}</CardTitle>
          <CardImg className='DestinationImage' src={destination.image} alt={destination.name} />
          <button onClick={this.countLikes}>Like: {this.state.likes}</button>
          <button onClick={this.callApi}>Call API</button>
        </CardBody>
      </Card>
    )
  }


}

export default DestinationCard;