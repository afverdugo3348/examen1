import React, {Component} from 'react';
import Item from './Component2.js'

class Lista extends Component {
    constructor(props) {
        super(props)
    }



    render() {
        return (<div>
            <div>
                {this.renderItem()}
            </div>
            	<h5>Tienes {this.props.seguidores.length} de seguidores</h5>        
        </div>);
    }


    renderItem() {
        return this.props.seguidores.map((t, i) => {
            return <Item seg={t} key={i}/>;
        });
    } 
}

export default Lista;