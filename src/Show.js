import React from 'react';
import './sass/materialize.scss';
import axios from 'axios';
import {Link} from 'react-router-dom';

class Show extends React.Component{
	constructor(props){
		super(props);
		console.log(props.match.params.id);
		this.state ={
			cliente :{}
		}
	}

	componentDidMount(){
		let cliente_id = this.props.match.params.id;
		axios.get(`http://localhost:8080/api/clientes/${cliente_id}`)
			.then(res=>{
				if (res.data) {
					this.setState({cliente:res.data});
				}else{
					this.props.history.push('/');
				}

			}).catch(err=>{
				console.log(err);
				this.props.history.push('/');
			})

	}

	render(){
		var cliente = this.state.cliente;
		return (
			<div className="container">
				<div className="row">
					<div className="card blue-grey darken-1">
				        <div className="card-content white-text">
			          		<span className="card-title">Cliente</span>
				          	<ul className="collection">
				          		<li className="collection-item green-text text-darken-4">
				          			<i className="material-icons">account_box</i>
				          			Nombre
				          			<span className="badge green darken-4 white-text">{cliente.nombre}</span>
				          		</li>
				          		<li className="collection-item green-text text-darken-4">
				          			<i className="material-icons">account_circle</i>
				          			Apellido
				          			<span className="badge green darken-4 white-text">{cliente.apellido}</span>
				          		</li>
				          		<li className="collection-item green-text text-darken-4">
				          			<i className="material-icons">alternate_email</i>
				          			Email
				          			<span className="badge green darken-4 white-text">{cliente.email}</span>
				          		</li>
				          		<li className="collection-item green-text text-darken-4">
				          			<i className="material-icons">create</i>
				          			Creado
				          			<span className="badge green darken-4 white-text">{Date(cliente.createdAt)}</span>
				          		</li>
				          		<li className="collection-item green-text text-darken-4">
				          			<i className="material-icons">update</i>
				          			Actualizado
				          			<span className="badge green darken-4 white-text">{Date(cliente.updatedAt)}</span>
				          		</li>
				          	</ul>
				          	<div>
				          		<Link to={`/edit/${cliente.id}`} className="btn waves-effect waves-light">Editar
    								<i className="material-icons right">system_update_alt</i>
  								</Link>
				          	</div>
				        </div>
			      	</div>
				</div>
			</div>
			);
	}
}

export default Show;