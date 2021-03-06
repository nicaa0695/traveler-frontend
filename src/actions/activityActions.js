// adding activities with fetch
export const addActivity = (activity, destinationId) => {
    return (dispatch) => {
      fetch(`http://localhost:3000/destinations/${destinationId}/activities`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(activity)
      })
      .then(res => res.json())
      .then(destination => {
        dispatch({type: 'ADD_ACTIVITY', payload: destination})
      })
    };
  };

  // deleting activities with fetch
  export const deleteActivity = (activityId, destinationId) => {
    return (dispatch) => {
      fetch(`http://localhost:3000/destinations/${destinationId}/activities/${activityId}`, {
        method: 'DELETE'
      })
      .then(res => res.json())
      .then(destination =>
        dispatch({type: 'DELETE_ACTIVITY', payload: destination})
      )
    };
  };