class Content extends React.Component {
    componentDidMount() {
        console.log('componentDidMount: ', ReactDOM.findDOMNode(this));
    }

    UNSAFE_componentWillMount() {
        console.log('componentWillMount: ', ReactDOM.findDOMNode(this));
    }
    UNSAFE_componentWillReceiveProps() {}
    UNSAFE_componentWillUpdate() {}
    componentWillUnmount() {}
    shouldComponentUpdate() {}
    componentDidUpdate() {}

    render() {
        return React.createElement('div', null);
    }
}
ReactDOM.render(React.createElement(Content, null), document.getElementById('content-1'));

///////////////////////////////