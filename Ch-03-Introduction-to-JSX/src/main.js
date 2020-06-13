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
            (this.props.userName) ? `Welcome ${this.props.userName} Current date and time is ${dateTimeNow}` : `Current date and time is ${dateTimeNow}`
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

class HelloWorld3 extends React.Component {
    render() {
        return (
            <div>
                {helloWorldReactElement}
                {helloWorldReactElement}
                {helloWorldReactElement}
            </div>
        )
    }
}
ReactDOM.render(
    <HelloWorld3/>,
    document.getElementById('content-8')
)

ReactDOM.render(
    <div>
        <a href="https://google.com">Google</a><br/>
        <DateTimeNow1 userName='Victor'/>
    </div>,
    document.getElementById('content-9')
)

class ProfileLink extends React.Component {
    render() {
        return (
            <a href={this.props.url}
            title={this.props.label}
            target="_blank">
                Profile
            </a>
        )
    }
}
ReactDOM.render(
    <ProfileLink url="https://netflix.com" label="Profile for Victor"/>,
    document.getElementById('content-11')
)

ReactDOM.render(
    <li nada-nao="porra nenhuma">teste</li>,
    document.getElementById('content-12')
)

//passing all properties
class HelloWord4 extends React.Component {
    render() {
        return (
            <h1 {...this.props}>
                Hello {this.props.frameworkName} World!!!
            </h1>
        )
    }
}
ReactDOM.render(
    <div>
        <HelloWord4 id="ember" frameworkName="Ember.js" title="A framework for creating ambitious web applications" />
        <HelloWord4 id="backbone" frameworkName="Backbone.js" title="Gives struture to web applications" /> 
        <HelloWord4 id="angular" frameworkName="Angular.js" title="Superheroic Javascript MVW framework" />
    </div>,
    document.getElementById('content-13')
)

//methods
class Content extends React.Component {
    getUrl() {
        return 'http://google.com'
    }
    render() {
        return (
            <div>
                <p>
                    Your REST API URL is: <a href={this.getUrl()}>{this.getUrl()}</a>
                </p>
            </div>
        )
    }
}
ReactDOM.render(
    <Content/>,
    document.getElementById('content-14')
)

//special characters style
var specialCharts = {__html: '&copy;&mdash;&ldquo;'}
ReactDOM.render(
    <div>
        <span dangerourlySetInnetHTML={specialCharts} />
        <br />
        <span style={{color: '#f00'}}>texto vermelho</span>
    </div>,
    document.getElementById('content-15')
)

