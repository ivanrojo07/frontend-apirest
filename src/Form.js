import './sass/materialize.scss';
import React from 'react';
import axios from 'axios';

class Form extends React.Component{

	constructor(props) {
	    super(props);
	    this.state = {
			nombre:'',
			apellido:'',
			email:''
		};

	    this.handleChange = this.handleChange.bind(this);
	    this.handleSubmit = this.handleSubmit.bind(this);
  	}
	handleChange(event){
		const campo = event.target.name;
		const value = event.target.value;
		this.setState({[campo]:value});
	}

	handleSubmit(event){
		/*const formData = new FormData();
		formData.append("nombre",this.state.nombre);
		formData.append("apellido",this.state.apellido);
		formData.append("email",this.state.email);*/
		let cliente = {
			nombre:this.state.nombre,
			apellido:this.state.apellido,
			email:this.state.email
		};
		axios.post('http://localhost:8080/api/clientes/create',cliente).then(res=>{
			console.log(res.data);
			this.props.history.push('/');
		}).catch(err=>{
			console.log(err)
		})

		event.preventDefault();

	}

	render(){
		return (
			<div className="container">
				<form onSubmit={this.handleSubmit}>
					<div className="row">
						<div className="col s12">
							<div className="row">
								<div className="input-field col s4">
									<input type="text" id="nombre" className="validate" value={this.state.nombre} name="nombre" onChange={this.handleChange}/>
          							<label htmlFor="nombre">Nombre</label>
								</div>
								<div className="input-field col s4">
									<input type="text" id="apellido" className="validate" value={this.state.apellido} name="apellido" onChange={this.handleChange}/>
          							<label htmlFor="apellido">Apellido</label>
								</div>
								<div className="input-field col s4">
									<input type="email" id="email" className="validate" value={this.state.email} name="email" onChange={this.handleChange}/>
          							<label htmlFor="email">Email</label>
								</div>
							</div>
							<div className="row">
							 	<button className="btn waves-effect waves-light right" type="submit" name="action">Guardar
    								<i className="material-icons right">send</i>
  								</button>
							</div>
						</div>
					</div>
				</form>
			</div>
			);
	}
}

export default Form;