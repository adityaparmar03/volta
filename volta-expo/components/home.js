import React from 'react';
import { Platform, Dimensions, Text } from 'react-native';
import { MapView } from 'expo';
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux';
import * as myactions from '../actions/station';
import { Constants, Location, Permissions } from 'expo';

const { width, height } = Dimensions.get('window');
const ASPECT_RATIO = width / height;

class Home extends React.Component {

    state = {
      mapRegion: {
        latitude: 37.78825, 
        longitude: -122.4324, 
        latitudeDelta: 0.0922, 
        longitudeDelta: 0.0421 * ASPECT_RATIO
        },
      markers:[],
     
    };
  
    _handleMapRegionChange = mapRegion => {
      this.setState({ mapRegion });
    };
    componentDidMount() {
        

      this.props.getStations();
                          
     
   }
   /*
   componentWillMount() {
    if (Platform.OS === 'android' && !Constants.isDevice) {
      this.setState({
        errorMessage: 'Oops, this will not work on Sketch in an Android emulator. Try it on your device!',
      });
    } else {
      this._getLocationAsync();
    }
  }

  _getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      this.setState({
        errorMessage: 'Permission to access location was denied',
      });
    }

    let location = await Location.getCurrentPositionAsync({});
    
    this.setState({mapRegion:{
       latitude: location.coords.latitude, 
       longitude: location.coords.longitude, 
       latitudeDelta: 0.0922, 
       longitudeDelta: 0.0421 * ASPECT_RATIO
       }});
  };
*/
   componentWillReceiveProps(nextProps) {
   
    if (nextProps.stations) {
     
      this.setState({
       
        markers:nextProps.stations,
       
      
      })
    }
}
    render() {
    return (
        <MapView
             style={{
             flex: 1
           }}
             region={this.state.mapRegion}
             onRegionChange={this._handleMapRegionChange}
           >
           {
             this.state.markers.map((marker,index)=>(
               <MapView.Marker
                   key={index}
                   coordinate={
                   {
                       latitude : marker.latitude,
                       longitude: marker.longitude
                   }}
                   title={marker.status}
                   description={marker.address}
                   image={require('../assets/charging.png')}
   
                 />
             )
             )
           }
          
         </MapView>
       );
    }
   
   
  
}
function mapStateToProps(state){

  return{
     
    stations : state.stations.stations
     
  }
}
function matchDispatchToProps(dispatch){
  
  return bindActionCreators(myactions,dispatch)

  
}


export default (connect(mapStateToProps,matchDispatchToProps)(Home));
