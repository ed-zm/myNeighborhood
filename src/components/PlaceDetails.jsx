import React, { Component } from 'react';
import Details from './Details.jsx';
import { ListGroupItem,Glyphicon } from 'react-bootstrap'
export default class PlaceDetails extends Component {
    constructor(props){
        super(props);
        this.state = {
            expandStatus: false,
            placeStatus: false,
            glyph: "plus"};
            this.expand = this.expand.bind(this);
            this.showDetails = this.showDetails.bind(this);
            this.select = this.select.bind(this);
    }

    expand(){
        if (this.state.expandStatus){
            this.setState({expandStatus: false, glyph: "plus"});
        }
        else{
            this.setState({expandStatus: true, glyph: "minus"});
        }
     }
     showDetails(location){
         if(this.state.expandStatus){
             location.formatted_address;
             return(<Details location = {location}/>);
         }
     }
     select(){
         this.setState({placeStatus: true});
     }

     render(){
         const location = this.props.location;
             return (
                <ListGroupItem  onClick ={this.select} active = {this.state.placeStatus}>
                    <h3>
                        {location.name}
                        <Glyphicon glyph = {this.state.glyph} onClick = {this.expand}/>
                    </h3>
                    {this.showDetails(location)}
            </ListGroupItem>
            )
     }
}
