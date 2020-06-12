class Clock extends React.Component {
    constructor(props) {
        super(props)
        this.launchClock()
        this.state = {currentTime: (new Date()).toLocaleString()}
    }

    launchClock() {
        setInterval(() => {
            console.log('Updating time...')
            this.setState({
                currentTime: (new Date()).toLocaleString()
            })
        }, 500);
    }

    render() {
        console.log('Rendering clock...')
        return <div>{this.state.currentTime}</div>
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