import React from 'react';
import {Text,ScrollView,iew,Image} from 'react-native';
import {Card, ListItem, Button, Icon } from 'react-native-elements'

export default function ShipDetail({ship}){
   
    return(
        
        <ScrollView style={{marginBottom:75}}>
    
            <Card title={ship.values.shipname} image={{uri: ship.text.img_thumb}} >
                    
                    <Button title='SHOW ON MAP' />
                    
                    <ListItem key={1} title={"SHIP NAME"} subtitle={ship.values.shipname} bottomDivider />
                    <ListItem key={2} title={"SHIP TYPE"} subtitle={ship.values.type_summary +" / "+ship.values.type_name} bottomDivider />
                    <ListItem key={3}  title={"IMO"} subtitle={ship.values.imo} bottomDivider />
                    <ListItem key={4} title={"MMSI"} subtitle={ship.values.mmsi} bottomDivider />
                    <ListItem key={5} title={"LENGTH"} subtitle={ship.values.vsl_length} bottomDivider />
                    <ListItem key={6} title={"COURSE"} subtitle={ship.values.course} bottomDivider />
                    <ListItem key={7} title={"SPEED"} subtitle={ship.values.speed} bottomDivider />
                    <ListItem key={8} title={"COORDINATE"} subtitle={"Lat : "+ ship.values.ship_lat +" Lon : "+ ship.values.ship_lon} bottomDivider />
                   
            </Card>
        </ScrollView>
    );
}