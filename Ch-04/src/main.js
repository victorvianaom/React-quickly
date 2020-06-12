const DigitalDisplay = function(props) {
    return <div>{props.time}</div>
}

const AnalogDisplay = function(props) {
    let date = new Date(props.time)
    let dialStyle = {
        position : 'relative',
        top: 0,
        left: 0,
        width: 200,
        height: 200,
        borderRadius: 20000,
        borderStyle: 'solid',
        borderColor: 'black'
    }
    let secondHandStyle = {
        position: 'relative',
        top: 100,
        left: 100,
        border: '1px solid red',
        width: '40%',
        height: 1,
        transform: 'rotate('+ ((date.getSeconds()/60)*360 -90).toString() +'deg)',
        transformOrigin: '0% 0%',
        backgroundColor: 'red'
    }
    let minuteHandStyle = {
        position: 'relative',
        top: 100,
        left: 100,
        border: '1px solid gray',
        width: '40%',
        height: 3,
        transform: 'rotate('+ ((date.getMinutes()/60)*360 -90).toString() +'deg)',
        transformOrigin: '0% 0%',
        backgroundColor: 'gray'
    }
    let hourHandStyle = {
        position: 'relative',
        top: 92,
        left: 106,
        border: '1px solid gray',
        width: '20%',
        height: 7,
        transform: 'rotate('+ ((date.getHours()/12)*360 -90).toString() +'deg)',
        transformOrigin: '0% 0%',
        backgroundColor: 'gray'
    }

    return <div>
        <div style={dialStyle}>
            <div style={secondHandStyle} />
            <div style={minuteHandStyle} />
            <div style={hourHandStyle} />
        </div>
    </div>
}

class Clock extends React.Component {
    constructor(props) {
        super(props)
        this.launchClock()
        this.state = {currentTime: (new Date()).toLocaleString()}
    }

    launchClock() {
        setInterval(() => {
            console.log('Updating time...')
            this.setState({ //this function calls render()
                currentTime: (new Date()).toLocaleString()
            })
        }, 500);
    }

    render() {
        console.log('Rendering clock...')
        return <div>
            <AnalogDisplay time={this.state.currentTime} />
            <DigitalDisplay time={this.state.currentTime} />
        </div>
    }
}
ReactDOM.render(
    <Clock />,
    document.getElementById('content-1')
)

//stateless components
const HelloWorld = function(props) {
    return <h1 {...props}>Hello {props.frameworkName} World!</h1>
}
ReactDOM.render(
    <HelloWorld frameworkName='React'/>,
    document.getElementById('content-2')
)
//or use arrow functions
const HelloWorld2 = (props) => {
    return <h1 {...props}>Hello {props.frameworkName} World 2 !!</h1>
}
ReactDOM.render(
    <HelloWorld2 frameworkName="React 2"/>,
    document.getElementById('content-3')
)
// or ...
const HelloWorld3 = props => <h1 {...props}>Hello {props.frameworkName} World 3 !!!</h1>
ReactDOM.render(<HelloWorld3 frameworkName="React 3"/>, document.getElementById('content-4'))
//or...
function HelloWorld4(props) {
    return <h1 {...props}>Hello {props.frameworkName} World 4 !!!!</h1>
}
ReactDOM.render(<HelloWorld4 frameworkName="React 4"/>, document.getElementById('content-5'))