import {STATION_RESULT} from '../constant'
const initialState = {
    
 
    stations:[]
}
export default function stations (state = initialState, action) {
    switch (action.type) {
      case STATION_RESULT:
   
        let data = action.payload
        let stations = [];
        data.map((station,index)=>{
            let obj = {
              latitude : station.location.coordinates[1],
              longitude: station.location.coordinates[0],
              address:   station.street_address+","+station.city+","+station.state+","+station.zip_code,
              status:    station.status

            
            }
            stations.push(obj)
         }
        
        )
      
        return {
          ...state,
          stations:stations

        }
      break;
      default:
        return state
    }
  }