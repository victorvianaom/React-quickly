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
            this.state.currentTime
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