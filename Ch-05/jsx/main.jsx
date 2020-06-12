class Content extends React.Component {
    componentDidMount() {
        console.log('componentDidMount: ', ReactDOM.findDOMNode(this))
    }

    UNSAFE_componentWillMount() {
        console.log('componentWillMount: ', ReactDOM.findDOMNode(this))
    }
    UNSAFE_componentWillReceiveProps() {

    }
    UNSAFE_componentWillUpdate() {

    }
    componentWillUnmount() {

    }
    shouldComponentUpdate() {

    }
    componentDidUpdate() {

    }

    render() {
        return (
            <div></div>
        )
    }
}
ReactDOM.render(
    <Content />,
    document.getElementById('content-1')
)

///////////////////////////////
