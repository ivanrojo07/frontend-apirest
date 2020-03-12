import React from 'react';
import './sass/materialize.scss';
import axios from 'axios';

class Edit extends React.Component{

	constructor(props){
		super(props);
		this.state={

			nombre:'',
			apellido:'',
			email:'',
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
		let cliente_id =this.props.match.params.id;
		let params={
			nombre:this.state.nombre,
			apellido:this.state.apellido,
			email:this.state.email
		};
		axios.put(`http://localhost:8080/api/clientes/update/${cliente_id}`,params)
			.then(res=>{
				if (res.data) {
					this.props.history.push('/');
				}
			}).catch(err=>{
				console.log(err);
				this.props.history.push('/');
			})
		event.preventDefault();
	}

	componentDidMount(){
		let cliente_id = this.props.match.params.id;
		axios.get(`http://localhost:8080/api/clientes/${cliente_id}`)
			.then(res=>{
				if (res.data) {
					var cliente_res = res.data;
					this.setState({
						nombre:cliente_res.nombre,
						apellido:cliente_res.apellido,
						email:cliente_res.email
					});
				}else{
					this.props.history.push('/');
				}

			}).catch(err=>{
				console.log(err);
				this.props.history.push('/');
			})
	}

	render(){
		return (
			<div className="container">
				<form onSubmit={this.handleSubmit}>
					<div className="row">
						<div className="col s12">
							<div className="row">
								<div className="input-field active col s4">
									<input type="text" id="nombre" className="validate" value={this.state.nombre} name="nombre" onChange={this.handleChange}/>
          							<label htmlFor="nombre" className="active">Nombre</label>
								</div>
								<div className="input-field active col s4">
									<input type="text" id="apellido" className="validate" value={this.state.apellido} name="apellido" onChange={this.handleChange}/>
          							<label htmlFor="apellido" className="active">Apellido</label>
								</div>
								<div className="input-field active col s4">
									<input type="email" id="email" className="validate" value={this.state.email} name="email" onChange={this.handleChange}/>
          							<label htmlFor="email" className="active">Email</label>
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

export default Edit;