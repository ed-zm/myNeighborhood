import React, { Component } from 'react';
import {FormGroup, FormControl, Button, Glyphicon} from 'react-bootstrap';
function filterLocations(prevLocations, text){
    let re = new RegExp(text);
    var filtered = prevLocations.filter((e) => {
        if(e.name.match(re)){
            return e;
        }
    });
    console.log("filtered");
    console.log(filtered);
    if (filtered == []){
        filtered = null;
    }
    else{
        return filtered;
    }
}
export default class SearchBar extends Component {
    constructor(){
        super();
        this.state = {
            inputValue: ''
        }
        this.onChange = this.onChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    onChange(change){
        this.setState({inputValue: change.target.value}, () => {
            if(this.props.locations != []){
                this.props.getFiltered(filterLocations(this.props.locations, this.state.inputValue));
            }

        });
    }
    handleSubmit(submit){
        submit.preventDefault();
    }
    render(){
        return(
            <form onSubmit = {this.handleSubmit}>
                <FormGroup role = "form">
                    <FormControl type = "text" placeholder = "search"  onChange = {this.onChange} value = {this.state.inputValue}/>
                    <Button type = "submit"><Glyphicon glyph = "search"/></Button>
                </FormGroup>
            </form>

        );
    }

}
