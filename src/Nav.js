import React from 'react';
import logo from './logo.svg';
import './sass/materialize.scss';
import {Link} from 'react-router-dom';

function Nav(){
	return (
		<div className="navbar-fixed">
			<nav>
			  <div className="nav-wrapper">
			    <Link to="/" className="brand-logo"><img className="spinner" src={logo} width="44%" height="44%" alt="logo" /></Link>
			    <a href="#!" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
			    <ul id="nav-mobile" className="right hide-on-med-and-down">
			      <li><Link to="/">Lista de clientes</Link></li>
			      <li><Link to="/create">Crear nuevo cliente</Link></li>
			    </ul>
			  </div>
			</nav>
			<ul className="sidenav" id="mobile-demo">
				<li><Link to="/">Lista de clientes</Link></li>
			    <li><Link to="/create">Crear nuevo cliente</Link></li>
			</ul>
		</div>
		);
}

export default Nav;