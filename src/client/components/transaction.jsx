import React from "react";
import { browserHistory } from "react-router";
import PropTypes from "prop-types";

import "../styles/skeleton.css";
import "../styles/custom.css";
import CarBuyingStyles from "../styles/car-buying.css";

class VehicleInfo extends React.Component{
    constructor(props) {
        super(props);
    }
    render(){
        this.props = this.props && this.props.data;
        return(
            <div>
            
                <div class="well" > Vehicle Number : {this.props.vin_number},  Cost : {this.props.actual_price} </div>
            </div>
        )
    }
}

class Transaction extends React.Component{
    render(){
        this.props = this.props && this.props.data;

        return (
            <div>
                <VehicleInfo data={this.props} />
            </div>
        );
    }
}

Transaction.propTypes = {
    data : PropTypes.object,
    customer_id : PropTypes.string,
    actual_price : PropTypes.number
}

VehicleInfo.propTypes = {
    data : PropTypes.object,
    vin_number : PropTypes.string,
    actual_price : PropTypes.number
}

export default Transaction;