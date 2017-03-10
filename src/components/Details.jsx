import React,{ Component } from 'react';

export default class Details extends Component{
    render(){
        return(<div>
            <p><b>Address: </b>{this.props.location.formatted_address}</p>
            <p><b>Phone number:</b>{this.props.location.formatted_phone_number}</p>

        </div>);
    }
}
