import React, {Component} from 'react';
import Item1 from "./Component4.js"
class Lista1 extends Component {
    constructor(props) {
        super(props)
    }



    render() {
        return (<div>   {this.renderItem}
        </div>);
    }


    renderItem() {
        return this.props.reg.map((t, i) => {
            return <Item1 seg={t} key={i}/>;
        });
    } 
}

export default Lista1;