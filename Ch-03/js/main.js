//@node_modules/babel/preset-react

const E = React.createElement;
h1 = E('h1', null, 'test');
ReactDOM.render(h1, document.getElementById('content-1'));

//comparing JavaScript with JSX
ReactDOM.render(React.createElement('h1', null, 'Hello!'), document.getElementById('content-2'));
ReactDOM.render(React.createElement(
    'h1',
    null,
    'Hello!'
), document.getElementById('content-3'));

//storing the React Element made with the JSX syntax in a variable
let helloWorldReactElement = React.createElement(
    'h1',
    null,
    'Heloooooo'
);
ReactDOM.render(helloWorldReactElement, document.getElementById('content-4'));

//now components/elements with the use of JSX
class HelloWorld extends React.Component {
    render() {
        return React.createElement(
            'div',
            null,
            React.createElement(
                'h1',
                null,
                '1. Hello mundo'
            ),
            React.createElement(
                'h2',
                null,
                '2. Hi there World'
            )
        );
    }
}

ReactDOM.render(React.createElement(HelloWorld, null), document.getElementById('content-5'));

class DateTimeNow1 extends React.Component {
    render() {
        let dateTimeNow = new Date().toLocaleString();
        return React.createElement('span', null, this.props.userName ? `Welcome ${this.props.userName} Current date and time is ${dateTimeNow}` : `Current date and time is ${dateTimeNow}`);
    }
}
ReactDOM.render(React.createElement(DateTimeNow1, null), document.getElementById('content-6'));

class DateTimeNow2 extends React.Component {
    render() {
        let dateTimeNow = new Date().toLocaleString();
        return React.createElement(
            'span',
            null,
            'Current date and time is ',
            dateTimeNow
        );
    }
}
ReactDOM.render(React.createElement(DateTimeNow2, null), document.getElementById('content-7'));

class HelloWorld3 extends React.Component {
    render() {
        return React.createElement(
            'div',
            null,
            helloWorldReactElement,
            helloWorldReactElement,
            helloWorldReactElement
        );
    }
}
ReactDOM.render(React.createElement(HelloWorld3, null), document.getElementById('content-8'));

ReactDOM.render(React.createElement(
    'div',
    null,
    React.createElement(
        'a',
        { href: 'https://google.com' },
        'Google'
    ),
    React.createElement('br', null),
    React.createElement(DateTimeNow1, { userName: 'Victor' })
), document.getElementById('content-9'));

class ProfileLink extends React.Component {
    render() {
        return React.createElement(
            'a',
            { href: this.props.url,
                title: this.props.label,
                target: '_blank' },
            'Profile'
        );
    }
}
ReactDOM.render(React.createElement(ProfileLink, { url: 'https://netflix.com', label: 'Profile for Victor' }), document.getElementById('content-11'));

ReactDOM.render(React.createElement(
    'li',
    { 'nada-nao': 'porra nenhuma' },
    'teste'
), document.getElementById('content-12'));

//passing all properties
class HelloWord4 extends React.Component {
    render() {
        return React.createElement(
            'h1',
            this.props,
            'Hello ',
            this.props.frameworkName,
            ' World!!!'
        );
    }
}
ReactDOM.render(React.createElement(
    'div',
    null,
    React.createElement(HelloWord4, { id: 'ember', frameworkName: 'Ember.js', title: 'A framework for creating ambitious web applications' }),
    React.createElement(HelloWord4, { id: 'backbone', frameworkName: 'Backbone.js', title: 'Gives struture to web applications' }),
    React.createElement(HelloWord4, { id: 'angular', frameworkName: 'Angular.js', title: 'Superheroic Javascript MVW framework' })
), document.getElementById('content-13'));

//methods
class Content extends React.Component {
    getUrl() {
        return 'http://google.com';
    }
    render() {
        return React.createElement(
            'div',
            null,
            React.createElement(
                'p',
                null,
                'Your REST API URL is: ',
                React.createElement(
                    'a',
                    { href: this.getUrl() },
                    this.getUrl()
                )
            )
        );
    }
}
ReactDOM.render(React.createElement(Content, null), document.getElementById('content-14'));