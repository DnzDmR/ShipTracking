import React, { Component } from 'react'
import {View,StyleSheet} from 'react-native';
import MapView,{Marker} from 'react-native-maps';
import MapController from '../controllers/MapController';


const mapController = new MapController();

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: 600,
    width: 400,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
 });


 var b = true;
export default class HomeScreens extends Component {
    
  constructor(props){
    super(props);
    this.state={
      lights:[],
      ports:[],
      marinas:[],

    }
  }
    
    render(){

      return (
        <View style={styles.container}>
            <MapView
            style={styles.map}
            region={{
                latitude: 40.99825,
                longitude: 29.0024,
                latitudeDelta: 0.1050,
                longitudeDelta: 0.1021,
            }}
            >
                {this.state.lights.map(marker => (
                        <Marker 
                        coordinate={{longitude:Number(marker.LON),latitude:Number(marker.LAT)}}
                        title={"Light:"+marker.LIGHT_NAME}
                        />
                ))} 

                {this.state.ports.map(marker => (
                        <Marker 
                        coordinate={{longitude:Number(marker[2]),latitude:Number(marker[3])}}
                        title={"Ports:"+marker[1]}
                        />
                ))} 

                {this.state.marinas.map(marker => (
                        <Marker 
                        coordinate={{longitude:Number(marker.CENTERX),latitude:Number(marker.CENTERY)}}
                        title={"Marinas:"+marker.PORT_NAME}
                        />
                ))} 

            </MapView>
      </View>

      );
    }

    componentDidMount(){
      this.setLights();
    }

    async setLights() {

      var temp = await mapController.getAssetList();
      
      this.setState({lights:temp.lights})
      this.setState({ports:temp.ports})
      this.setState({marinas:temp.marinas})
      
    }

}