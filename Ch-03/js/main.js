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