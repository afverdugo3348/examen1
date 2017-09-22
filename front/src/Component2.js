import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Item extends Component{

    constructor(props){
        super(props);
    }

    render(){
        return(<div>
            <h5>{this.props.seg.i}Te sigue <strong>{this.props.seg.login}</strong>, github: {this.props.seg.html_url}</h5>
        </div>)};

}

export default Item;