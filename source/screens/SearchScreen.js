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
          search:"",
        }
      }
    
    render(){
        
        const ship = this.state.ship;

        const { search } = this.state;

        return(
            <View>
                
                <SearchBar onSubmitEditing={this.getInfo.bind(this)} placeholder="IMO" maxLength={7} keyboardType="numeric" onChangeText={this.updateSearch} value={search} />
                        
                { this.state.ship == null ? <Text>Test IMO : 278335 </Text> : <ShipDetail base={this} ship={this.state.ship}></ShipDetail>}

            </View>
        );

    }

    updateSearch = search => {
        this.setState({ search });
    };   

    async getInfo() {
        
        var imo = this.state.search;
        var temp = await searchController.getShipInfo(imo);
        this.setState({ship:temp})

    }

}
 
