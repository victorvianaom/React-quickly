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
        return React.createElement('span', null, `Current date and time is ${dateTimeNow}`);
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