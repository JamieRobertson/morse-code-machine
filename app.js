import React from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import morseData from './data/data';


const spaceBar = 32;
const enterKey = 13;
const deleteKey = 46;  // There are two delete buttons
const backKey = 8;	   // There are two delete buttons


class Countdown extends React.Component {
	calculateSeconds() {
		let { inputSpeed, morseCharTimer, outputDelay } = this.props;
		// every 100 (inputSpeed) * 10 
		// morseCharTimer gains one
		// So every 1000 ms 
		return (
			(inputSpeed * 10) * outputDelay
		);
	}
	render() {
		let totalTime = this.calculateSeconds();
		return (
			<div className="loader-wrapper">
				<div className="wrapper-bg"></div>
				<div className="loader spinner"></div>
				<div className="loader filler"></div>
				<div className="mask"></div>
			</div>
		);
	}
}

class MorseOutput extends React.Component {
	render() {
		return (
			<i>{ this.props.text }</i>
		);
	}
}

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isPressed: false,
			keyDownTimer: 0,
			morseCharTimer: 0,
			inputSpeed: 100,
			outputDelay: 2,
			morseString: '',
			outputArray: []
		};
		this.handleKeyDown = this.handleKeyDown.bind(this);
		this.handleKeyUp = this.handleKeyUp.bind(this);
		this.addMorseChar = this.addMorseChar.bind(this);
		this.charLookup = this.charLookup.bind(this);
		this.removeStringChar = this.removeStringChar.bind(this);
		this.tickKeyDownTimer = this.tickKeyDownTimer.bind(this);
		this.tickMorseCharTimer = this.tickMorseCharTimer.bind(this);
	}

	tickKeyDownTimer() {
		this.setState({keyDownTimer: this.state.keyDownTimer + 1});
	}

	tickMorseCharTimer() {
		let { outputArray, outputDelay, morseCharTimer, morseString } = this.state;
		this.setState({morseCharTimer: this.state.morseCharTimer + 1});
		// If time has run up - add char from morseLookup to output string
		if (morseCharTimer >= outputDelay || morseString.split('').length === 6) {
			let newChar = this.charLookup(morseString);
			// Reset morse char interval
			this.stopCounter(this.morseCharInterval);
			this.setState({morseCharTimer: 0});
			// Add char from data to output array
			if (typeof newChar !== 'undefined') {
				this.setState({outputArray: outputArray.concat( newChar ) });
			}
			// Reset morse string
			this.resetMorseString()
		}
	}

	stopCounter(interval) {
		clearInterval(interval);
	}

	startCounter(timer) {
		let { inputSpeed } = this.state;
		// Start keyDown timer to check for . or -
		this.setState({keyDownTimer: 0});
		this.keyDownInterval = setInterval(this.tickKeyDownTimer, inputSpeed);
		// Start morse char counter to confirm end of morse string
		this.morseCharInterval = setInterval(this.tickMorseCharTimer, (inputSpeed * 10) );
	}

	charLookup(morse) {
		let { data } = this.props;
		for (let key in data) {
	        if (morse === data[key]) {
	            return key;
	        }
	    }
	}

	resetMorseString() {
		let { morseString } = this.state;
		this.setState({morseString: ''});
	}

	removeStringChar() {
		// TODO : handle Ch character ?
		let { outputArray } = this.state;
		this.setState({outputArray: outputArray.slice(0,-1) });
	}

	addMorseChar() {
		let { morseString, keyDownTimer } = this.state;
		// All morse char < 6 inputs
		if (morseString.split('').length < 6) {
			let newMorseChar = keyDownTimer < 2 ? '.' : '-';
			// let newString = morseString.concat(newMorseChar);
			this.setState({morseString: morseString.concat(newMorseChar)});
		}
	}
	
	handleKeyDown(e) {
		let { isPressed, outputDelay, morseCharTimer } = this.state;
		let keyCode = e.keyCode || e.which;
		// Check for space bar + if is already pressed
		if (keyCode === spaceBar && !isPressed) { 
			e.preventDefault();
			this.setState({isPressed: true});
			// Reset morse char interval
			this.stopCounter(this.morseCharInterval);
			this.setState({morseCharTimer: 0});
			// Start both counters
			this.startCounter();
		}
		if (keyCode === backKey || keyCode === deleteKey) { 
			e.preventDefault();
			this.removeStringChar();
		}
	}
	
	handleKeyUp(e) {
		let { isPressed } = this.state;
		let keyCode = e.keyCode || e.which;
		// Check for space bar + if is already pressed
		if (keyCode === spaceBar && isPressed) { 
			this.addMorseChar();
			this.setState({isPressed: false});
			this.stopCounter(this.keyDownInterval);
		}
	}

	componentDidMount() {
		const addEvent = document.addEventListener || document.attachEvent;
		addEvent('keydown', this.handleKeyDown, false);
		addEvent('keyup', this.handleKeyUp, false);
	}

	render() {
		let { morseCharTimer, outputDelay, outputArray } = this.state;
		let { data } = this.props;

		let outputClass = classNames('morse-output', {
			waiting: morseCharTimer > 0 && morseCharTimer <= outputDelay
		});

		let renderNodes = outputArray.map((currentValue, i , arr) => {
			return (
				<MorseOutput key={i} text={currentValue} />
			);
		});

		if (!data) return <div>Loading...</div>;

		return (
			<div className={ outputClass }>
				<h3>{ renderNodes }</h3>
				<Countdown {...this.state} />
			</div>
		);
	}
}

ReactDOM.render(
	<App data={ morseData } />, 
	document.getElementById('app')
);
