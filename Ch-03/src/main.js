//@node_modules/babel/preset-react

const E = React.createElement
h1 = E('h1', null, 'test')
ReactDOM.render(
    h1,
    document.getElementById('content-1')
)

//comparing JavaScript with JSX
ReactDOM.render(
    React.createElement('h1', null, 'Hello!'),
    document.getElementById('content-2')
)
ReactDOM.render(
    <h1>Hello!</h1>,
    document.getElementById('content-3')
)   

//storing the React Element made with the JSX syntax in a variable
let helloWorldReactElement = <h1>Heloooooo</h1>
ReactDOM.render(
    helloWorldReactElement,
    document.getElementById('content-4')
)

//now components/elements with the use of JSX
class HelloWorld extends React.Component {
    render() {
        return (
            <div>
                <h1>1. Hello mundo</h1>
                <h2>2. Hi there World</h2>
            </div>
        )
    }
}

ReactDOM.render(
    <HelloWorld/>,
    document.getElementById('content-5')
)

class DateTimeNow1 extends React.Component {
    render() {
        let dateTimeNow = new Date().toLocaleString()
        return React.createElement(
            'span',
            null,
            `Current date and time is ${dateTimeNow}`
        )
    } 
}
ReactDOM.render(
    <DateTimeNow1/>,
    document.getElementById('content-6')
)

class DateTimeNow2 extends React.Component {
    render() {
        let dateTimeNow = new Date().toLocaleString()
        return <span>Current date and time is {dateTimeNow}</span>
    } 
}
ReactDOM.render(
    <DateTimeNow2/>,
    document.getElementById('content-7')
)