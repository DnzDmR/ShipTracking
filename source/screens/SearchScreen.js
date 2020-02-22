import React, { Component } from 'react';
import {Text,Button,TextInput,View} from 'react-native';
import SearchController from '../controllers/SearchController';
import ShipDetail from '../components/ShipDetail';
import { SearchBar } from 'react-native-elements';

const searchController = new SearchController();

export default class SearchScreen extends Component{

    constructor(props){
        super(props);
        this.state={
          ship:null,
        }
      }
    
    render(){
        
        const ship = this.state.ship;
        console.log(ship)
        return(
            <View>
                
                <SearchBar placeholder="IMO" keyboardType="numeric"  />
                        
                { this.state.ship == null ? <Text>Please Search Vessel With IMO </Text> : <ShipDetail ship={this.state.ship}></ShipDetail>}

            </View>
        );

    }



    componentDidMount(){
        this.getInfo();
    }

    async getInfo() {

        var temp = await searchController.getShipInfo();
        this.setState({ship:temp})

    }

}
 
