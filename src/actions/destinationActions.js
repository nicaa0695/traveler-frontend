// fetch all destinations 
export const fetchDestinations = () => {
    return (dispatch) => {
      fetch('http://localhost:3000/destinations')
      .then(res => res.json())
      .then(destinations => dispatch({
        type: 'FETCH_DESTINATIONS',
        payload: destinations
      }))
    };
  };

  // add destinations
  export const addDestination = (destinationData, history, path) => {
    return (dispatch) => {
      fetch('http://localhost:3000/destinations', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(destinationData)
      })
      .then(res => res.json())
      .then(destination => {
        history.push(path)
        dispatch({type: 'ADD_DESTINATION', payload: destination})
      })
    };
  };

  //delete destinations 
  export const deleteDestination = destinationId => {
    return (dispatch) => {
      fetch(`http://localhost:3000/destinations/${destinationId}`, {
        method: 'DELETE'
      })
      .then(res => res.json())
      .then(destination => {
        dispatch({type: 'DELETE_DESTINATION', payload: destination.id})
      })
    };
  };
  
  //toggle destination visited/not visted
  export const toggleVisited = (destination, destinationId) => {
    const updatedVisited = {...destination, visited: !destination.visited};
  
    return (dispatch) => {
      fetch(`http://localhost:3000/destinations/${destinationId}`, {
        method: 'PATCH',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({destination: updatedVisited})
      })
      .then(res => res.json())
      .then(destination => {
        dispatch({type: 'TOGGLE_VISITED', payload: destination})
      })
    };
  };

  // add destination to bucketlist with fetch
   export const toggleBucketList = (destination, destinationId) => {
    const updatedBucketList = {...destination, bucket_list: !destination.bucket_list};
  
    return (dispatch) => {
      fetch(`http://localhost:3000/destinations/${destinationId}`, {
        method: 'PATCH',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({destination: updatedBucketList})
      })
      .then(res => res.json())
      .then(destination => {
        dispatch({type: 'TOGGLE_BUCKET_LIST', payload: destination})
      })
    };
  };