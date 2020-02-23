import React, { Component } from 'react'
import {View,Image,Text,StyleSheet} from 'react-native';
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



export default class HomeScreens extends Component {
    
  constructor(props){
    super(props);
    this.state={
      lights:[],
      ports:[],
      marinas:[],
      defaultLatitude: 40.99825,
      defaultLongitude: 29.0024,
      selectedTrack:[],

    }
  }
   
    
    render(){
      
      

      return (
        <View style={styles.container}>
            <MapView
            style={styles.map}
            region={{
                latitude: this.state.defaultLatitude,
                longitude: this.state.defaultLongitude,
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

                {this.state.selectedTrack.map(marker => ( 
                        <Marker 
                        coordinate={{longitude:Number(marker.ship_lon),latitude:Number(marker.ship_lat)}}
                        title={"Ship Name:"+marker.shipname}>

                          <Image source={require('../images/ship.png')} style={{height: 35, width:35 }} />

                        </Marker>
                ))} 

            </MapView>
      </View>

      );
    }

    componentDidMount(){
      this.setLights();
    }

    componentDidUpdate(){

      const { route } = this.props;

      if(route?.params?.ship && this.state.selectedTrack.length > 0){
        if(route.params.ship.values.shipname != this.state.selectedTrack[0].shipname){
      
          let tempArray = [...this.state.selectedTrack];
          tempArray[0] = route.params.ship.values;
          this.setState({selectedTrack: tempArray});

        
          this.setState({defaultLatitude:Number(route.params.ship.values.ship_lat)}) 
          this.setState({defaultLongitude:Number(route.params.ship.values.ship_lon)}) 
        }
      }
      
      if(route?.params?.ship && this.state.selectedTrack.length === 0 ){

        this.setState({ selectedTrack: [...this.state.selectedTrack, route.params.ship.values] }) 
        this.setState({defaultLatitude:Number(route.params.ship.values.ship_lat)}) 
        this.setState({defaultLongitude:Number(route.params.ship.values.ship_lon)}) 

      }
    }

    async setLights() {

      var temp = await mapController.getAssetList();
      
      this.setState({lights:temp.lights})
      this.setState({ports:temp.ports})
      this.setState({marinas:temp.marinas})
      
    }

}