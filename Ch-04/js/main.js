const DigitalDisplay = function (props) {
    return React.createElement(
        'div',
        null,
        props.time
    );
};

const AnalogDisplay = function (props) {
    let date = new Date(props.time);
    let dialStyle = {
        position: 'relative',
        top: 0,
        left: 0,
        width: 200,
        height: 200,
        borderRadius: 20000,
        borderStyle: 'solid',
        borderColor: 'black'
    };
    let secondHandStyle = {
        position: 'relative',
        top: 100,
        left: 100,
        border: '1px solid red',
        width: '40%',
        height: 1,
        transform: 'rotate(' + (date.getSeconds() / 60 * 360 - 90).toString() + 'deg)',
        transformOrigin: '0% 0%',
        backgroundColor: 'red'
    };
    let minuteHandStyle = {
        position: 'relative',
        top: 100,
        left: 100,
        border: '1px solid gray',
        width: '40%',
        height: 3,
        transform: 'rotate(' + (date.getMinutes() / 60 * 360 - 90).toString() + 'deg)',
        transformOrigin: '0% 0%',
        backgroundColor: 'gray'
    };
    let hourHandStyle = {
        position: 'relative',
        top: 92,
        left: 106,
        border: '1px solid gray',
        width: '20%',
        height: 7,
        transform: 'rotate(' + (date.getHours() / 12 * 360 - 90).toString() + 'deg)',
        transformOrigin: '0% 0%',
        backgroundColor: 'gray'
    };

    return React.createElement(
        'div',
        null,
        React.createElement(
            'div',
            { style: dialStyle },
            React.createElement('div', { style: secondHandStyle }),
            React.createElement('div', { style: minuteHandStyle }),
            React.createElement('div', { style: hourHandStyle })
        )
    );
};

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.launchClock();
        this.state = { currentTime: new Date().toLocaleString() };
    }

    launchClock() {
        setInterval(() => {
            console.log('Updating time...');
            this.setState({
                currentTime: new Date().toLocaleString()
            });
        }, 500);
    }

    render() {
        console.log('Rendering clock...');
        return React.createElement(
            'div',
            null,
            React.createElement(AnalogDisplay, { time: this.state.currentTime }),
            React.createElement(DigitalDisplay, { time: this.state.currentTime })
        );
    }
}
ReactDOM.render(React.createElement(Clock, null), document.getElementById('content-1'));

//stateless components
const HelloWorld = function (props) {
    return React.createElement(
        'h1',
        props,
        'Hello ',
        props.frameworkName,
        ' World!'
    );
};
ReactDOM.render(React.createElement(HelloWorld, { frameworkName: 'React' }), document.getElementById('content-2'));
//or use arrow functions
const HelloWorld2 = props => {
    return React.createElement(
        'h1',
        props,
        'Hello ',
        props.frameworkName,
        ' World 2 !!'
    );
};
ReactDOM.render(React.createElement(HelloWorld2, { frameworkName: 'React 2' }), document.getElementById('content-3'));
// or ...
const HelloWorld3 = props => React.createElement(
    'h1',
    props,
    'Hello ',
    props.frameworkName,
    ' World 3 !!!'
);
ReactDOM.render(React.createElement(HelloWorld3, { frameworkName: 'React 3' }), document.getElementById('content-4'));
//or...
function HelloWorld4(props) {
    return React.createElement(
        'h1',
        props,
        'Hello ',
        props.frameworkName,
        ' World 4 !!!!'
    );
}
ReactDOM.render(React.createElement(HelloWorld4, { frameworkName: 'React 4' }), document.getElementById('content-5'));