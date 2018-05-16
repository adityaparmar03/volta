import {base_url,get_station,STATION_RESULT} from '../constant'

export function getStations(){
    return  dispatch => {
        
        axios.get(base_url+get_station)
          .then(function (response) {
           console.log(response)
            return dispatch(
                { 
                    type : STATION_RESULT,
                     payload : response.data 
                })
           
          })
          .catch(function (error) {
            return dispatch({ type : "HOME_ERROR", payload : error } )
          });
         
     }
  }