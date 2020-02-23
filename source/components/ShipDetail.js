import React, { Component} from 'react';
import {ScrollView} from 'react-native';
import {Card, ListItem, Button } from 'react-native-elements';
import PropTypes from 'prop-types';

export default class ShipDetail extends Component{

    constructor(props){
        super(props);
        this.state={
            search:"",
        }
    }

    render(){
        return(
        <ScrollView style={{marginBottom:75}}>
            <Card title={this.props.ship.values.shipname} image={{uri: this.props.ship.text.img_thumb}} >
                <Button onPress={this.showOnMap.bind(this)} title='SHOW ON MAP' />
                <ListItem key={1} title={"SHIP NAME"} subtitle={this.props.ship.values.shipname} bottomDivider />
                <ListItem key={2} title={"SHIP TYPE"} subtitle={this.props.ship.values.type_summary +" / "+this.props.ship.values.type_name} bottomDivider />
                <ListItem key={3} title={"IMO"} subtitle={this.props.ship.values.imo} bottomDivider />
                <ListItem key={4} title={"MMSI"} subtitle={this.props.ship.values.mmsi} bottomDivider />
                <ListItem key={5} title={"LENGTH"} subtitle={this.props.ship.values.vsl_length} bottomDivider />
                <ListItem key={6} title={"COURSE"} subtitle={this.props.ship.values.course} bottomDivider />
                <ListItem key={7} title={"SPEED"} subtitle={this.props.ship.values.speed} bottomDivider />
                <ListItem key={8} title={"COORDINATE"} subtitle={"Lat : "+ this.props.ship.values.ship_lat +" Lon : "+ this.props.ship.values.ship_lon} bottomDivider />
            </Card>
        </ScrollView>
        );
    }
    
    showOnMap(){
        this.props.base.props.navigation.navigate("Live Map",{ship:this.props.ship})
    }

}

ShipDetail.propTypes = {
    ship: PropTypes.object,
    base: PropTypes.object,
};