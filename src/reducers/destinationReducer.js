const destinationReducer = (state = { destinations: [] }, action) => {

    switch (action.type) {
  
      case 'FETCH_DESTINATIONS':
        return {...state, destinations: action.payload};
  
      case 'ADD_DESTINATION':
        return {...state, destinations: [...state.destinations, action.payload]};
  
      case 'DELETE_DESTINATION':
        const filteredDestinations = state.destinations.filter(destination => destination.id !== action.payload)
        return {...state, destinations: filteredDestinations}
  
      case 'TOGGLE_VISITED':
      case 'TOGGLE_BUCKET_LIST':
        const destination = state.destinations.map(destination => {
          if (destination.id !== action.payload.id) {
            return destination
          } else {
            return action.payload
          }
        })
        return {...state, destinations: destination}
  
      case 'ADD_ACTIVITY':
        const addActivityDestination = state.destinations.map(destination => {
          if (destination.id === action.payload.id) {
            return action.payload
          } else {
            return destination
          }
        })
        return {...state, destinations: addActivityDestination}
  
      case 'DELETE_ACTIVITY':
        const deleteActivityDestination = state.destinations.map(destination => {
          if (destination.id === action.payload.id) {
            return action.payload
          } else {
            return destination
          }
        })
        return {...state, destinations: deleteActivityDestination}
  
      default:
        return state;
    }
  }
  
  export default destinationReducer;