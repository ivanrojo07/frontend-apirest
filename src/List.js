import React from 'react';
import './sass/materialize.scss';
import axios from 'axios';
import {Link} from 'react-router-dom';

class List extends React.Component{
	
	constructor(props){
		super(props);
		this.state = {
			clientes:[]
		};
		this.deleteCliente = this.deleteCliente.bind(this);
	}

  	componentDidMount(){
	   this.getClientes();
	    
  	}

  	getClientes(){
	 	axios.get("http://localhost:8080/api/clientes/").then(res=>{
	      let clientes = res.data;
	      this.setState({'clientes':clientes});
	    }).catch(err=>{
	      console.log(err);
	      let clientes = [];
	      this.setState({'clientes':clientes});
	    });
  	}

  	deleteCliente(event){
  		event.preventDefault();
  		var cliente_id = event.target.id;
  		console.log('lanzo el evento para: '+cliente_id);
  		axios.delete(`http://localhost:8080/api/clientes/delete/${cliente_id}`)
  			.then(res=>{
  				console.log(res.data);
  				this.getClientes();
  			}).catch(err=>{
  				console.log(err);
  				this.getClientes();
  			})
  	}

  	render(){
  		var clientes = this.state.clientes;
  		 return (<div className="container">
	        <div className="row">
	          <div className="col s12">
	            <div className="card blue-grey darken-1">
	            <div className="card-content white-text">
	              <span className="card-title">Clientes</span>
	              <table className="striped highlight centered responsive-table">
	                <thead className="teal lighten-3">
	                  <tr>
	                    <th>
	                      Nombre
	                    </th>
	                    <th>
	                      Apellido
	                    </th>
	                    <th>
	                      Correo
	                    </th>
	                    <th>
	                      Fecha de creación
	                    </th>
	                    <th>
	                      Fecha de actualización
	                    </th>
	                    <th>
	                    	Ver
	                    </th>
	                    <th>
	                    	Actualizar
	                    </th>
	                    <th>
	                    	Borrar
	                    </th>
	                  </tr>
	                </thead>
	                <tbody>
	                {clientes.map(cliente=>{
	                  return (<tr key={cliente.id}>
	                    <td>{cliente.nombre}</td>
	                    <td>{cliente.apellido}</td>
	                    <td>{cliente.email}</td>
	                    <td>{cliente.createdAt ? cliente.createdAt : 'No se encuentra esta información'}</td>
	                    <td>{cliente.updatedAt ? cliente.updatedAt : 'No se encuentra esta información'}</td>
	                    <td><Link className="waves-effect waves-light btn" to={`/show/${cliente.id}`}
	                    >Ver usuario <i className="material-icons left">account_circle</i></Link></td>
	                    <td>
	                    	<Link to={`/edit/${cliente.id}`} className="btn waves-effect waves-light light-green darken-3">Editar
								<i className="material-icons right">system_update_alt</i>
							</Link>
	                    </td>
	                    <td>
	                    	<button className="btn red darken-3" onClick={this.deleteCliente} id={cliente.id}>Borrar</button>
	                    </td>
	                  </tr>);
	                })}
	                </tbody>
	              </table>
	            </div>
	            </div>
	          </div>
	        </div>
      	</div>);
  	}
}

export default List;