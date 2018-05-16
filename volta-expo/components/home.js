import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { MapView } from 'expo';
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux';
import * as myactions from '../actions/station';

class Home extends React.Component {

    state = {
      mapRegion: { latitude: 37.78825, longitude: -122.4324, latitudeDelta: 112.0922, longitudeDelta: 112.0421 },
      markers:[
              {
              latitude : 37.78825,
              longitude: -122.4324,
              address:"Adi",
              status:"metadata"
      },{
        latitude : 37.38825,
        longitude: -122.1324,
        address:"Adi",
        status:"Active"
      }]
    };
  
    _handleMapRegionChange = mapRegion => {
      this.setState({ mapRegion });
    };
    componentDidMount() {
        

      this.props.getStations();
                          
     
   }
   componentWillReceiveProps(nextProps) {
   
    if (nextProps.stations) {
      console.log(nextProps.stations)
      this.setState({
       
        markers:nextProps.stations
      
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
