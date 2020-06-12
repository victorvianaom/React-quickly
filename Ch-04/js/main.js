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