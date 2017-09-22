import React, {Component} from 'react';
import Lista from './Component1.js';
import Lista1 from './Component3.js';

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            nombre: "",
            siguiendome: [],
            registro:[]
        };

        this.envio = this.envio.bind(this);
    }

   render() {
        return (
            <div>
                <h1>GITHUB FOLLOWERS</h1>
                <div>
                     <form onSubmit={this.envio}>
                        <h4>Github user:</h4>
                        <input id="user" placeholder="Mira quien te sigue :)"/>
                        <button type="submit">Consultar</button>
                    </form>
                </div>
                <Lista seguidores={this.state.siguiendome}/>
                <div>
                    <form>
                        <h4>Ver registro de búsqueda:</h4>
                        <button onClick={this.sendQueryR}>Consultar registro</button>
                    </form>
                    <Lista1 registro={this.state.registro}/>
                </div>
            </div>                         
        );
    }
    


    //On Submit
    envio(event) {
        const user = document.getElementById("user").value;
        //A lo que se cambie el State hacemos el query al back
        this.setState({
            nombre: user
        },()=> {this.sendQuery()});      

        event.preventDefault();
    }



    sendQuery(){
        const url = "/followers/"+this.state.nombre;

        fetch(url).then(res => res.json())
           .then(json => {
                this.setState({
                siguiendome: json.data
                });
            });

    }





    sendQueryR(){
        const url = "/followers/registro/";
        fetch(url).then(res => 
            console.log(res.json()))
           .then(json => {
                this.setState({
                registro: json.data
                });
            });

    }
}

export default App;
