import {base_url,get_station,STATION_RESULT} from '../constant'
import axios from 'axios';
export function getStations(){
    console.log("action =>>>>>")
    return  dispatch => {
        
        axios.get(base_url+get_station)
          .then(function (response) {
         
            return dispatch(
                { 
                    type : STATION_RESULT,
                     payload : response.data 
                })
           
          })
          .catch(function (error) {
            return dispatch({ type : "STATION_ERROR", payload : error } )
          });
         
     }
  }