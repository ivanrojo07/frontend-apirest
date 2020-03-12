import React from 'react';
import './sass/materialize.scss';
import {Switch, Route} from 'react-router-dom';
import List from './List';
import Form from './Form';
import Show from './Show';
import Edit from './Edit';

class Main extends React.Component{
	render(){
		return (<div>
			<Switch>
				<Route exact path="/" component={List} />
				<Route path="/create" component={Form} />
				<Route path="/show/:id" component={Show} />
				<Route path="/edit/:id" component={Edit} />
			</Switch>
		</div>);
	}
}

export default Main