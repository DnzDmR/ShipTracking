import React, { Component } from 'react';
import {Text,View} from 'react-native';
import DetailController from '../controllers/DetailController';
import ShipDetail from '../components/ShipDetail';
import { SearchBar } from 'react-native-elements';

const detailController = new DetailController();

export default class DetailScreen extends Component{

    constructor(props){
        super(props);
        this.state={
          ship:null,
          search:"",
        }
      }
    
    render(){
                
        const { search } = this.state;

        return(
            <View>
                
                <SearchBar onSubmitEditing={this.getInfo.bind(this)} placeholder="IMO" maxLength={7} keyboardType="numeric" onChangeText={this.updateSearch} value={search} />
                        
                { this.state.ship == null ? <Text></Text> : <ShipDetail base={this} ship={this.state.ship}></ShipDetail>}

            </View>
        );

    }

    updateSearch = search => {
        this.setState({ search });
    };   

    async getInfo() {
        
        var imo = this.state.search;
        var temp = await detailController.getShipInfo(imo);
        this.setState({ship:temp})

    }

}
 
