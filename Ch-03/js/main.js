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