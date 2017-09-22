import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Item1 extends Component{

    constructor(props){
        super(props);
    }

    render(){
        return(<div>
            <h5>El usuario <strong>{this.props.reg.user}</strong> sigue a</h5>
        </div>)};

}

export default Item1;