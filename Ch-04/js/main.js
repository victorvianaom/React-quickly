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
        ' World!!'
    );
};
ReactDOM.render(React.createElement(HelloWorld, { frameworkName: 'React' }), document.getElementById('content-2'));