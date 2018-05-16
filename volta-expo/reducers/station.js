import {STATION_RESULT} from '../constant'
const initialState = {
    
 
    stations:[]
}
export default function station (state = initialState, action) {
    switch (action.type) {
      case STATION_RESULT:
        return {
          ...state,

        }
      
      default:
        return state
    }
  }