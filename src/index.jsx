import React from 'react';
import ReactDom from 'react-dom';
import Voting from './components/Voting';

require('./style.css');

const pair = ['Trainspotting','28 Days Later'];

ReactDom.render(
	<Voting pair={pair} winner="Transpotting" />,
	document.getElementById('app')
);
