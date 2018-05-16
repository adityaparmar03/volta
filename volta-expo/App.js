import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { MapView } from 'expo';

export default class App extends React.Component {

    state = {
      mapRegion: { latitude: 37.78825, longitude: -122.4324, latitudeDelta: 2.0922, longitudeDelta: 2.0421 }
    };
  
    _handleMapRegionChange = mapRegion => {
      this.setState({ mapRegion });
    };
  
    render() {
    return (
     <MapView
          style={{
          flex: 1
        }}
          region={this.state.mapRegion}
          onRegionChange={this._handleMapRegionChange}
        >
        
        <MapView.Marker
                 
                  coordinate={
                  {
                      latitude : 37.78825,
                      longitude: -122.4324
                  }}
                  title={"marker.stationName"}
                  description={"metadata"}
                />
      </MapView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
