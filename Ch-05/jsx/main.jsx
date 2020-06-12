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

/////////////////////////////// USERS
class Users extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            users: []
        }
    }
    componentDidMount() {
        fetch('./users.json')
            .then((response) => response.json())
            .then((users) => this.setState({users: users}))
    }

    render() {
        return (
            <div className="container">
                <h1>List of Users</h1>
                <table className="table-striped table-condensed table table-bordered table-hover">
                    <tbody>{this.state.users.map((user) => 
                        <tr key={user.id}>
                            <td>{user.first_name} {user.last_name}</td>
                            <td>{user.email}</td>
                            <td>{user.ip_address}</td>
                        </tr> )}
                    </tbody>
                </table>
            </div>
        )
    }
}
ReactDOM.render(
    <Users />,
    document.getElementById('content-2')
)

//// Adding and removing an event listener
class Note extends React.Component {
    confirmLeave(e) {
        let confirmationMessage = 'Do you really wanna close?'
        e.returnValue = confirmationMessage
        return confirmationMessage
    }
    componentDidMount() {
        console.log('Attaching confirmLeave event listener for beforeunload')
        window.addEventListener('beforeunload', this.confirmLeave)
    }
    componentWillUnmount() {
        console.log('Removing confirmLeave event listener for beforeunload')
        window.removeEventListener('beforeunload', this.confirmLeave)
    }

    render() {
        console.log('Rendering...')
        return <p>Here will be our input field for notes (parent will remove in {this.props.secondsLeft} seconds)</p>
    }
}

let secondsLeft = 5
let interval = setInterval(() => {
    if (secondsLeft === 0) {
        ReactDOM.render(
            <div>
                Note was removed after {secondsLeft} seconds.
            </div>,
            document.getElementById('content-3')
        )
        clearInterval(interval)
    } else {
        ReactDOM.render(
            <div>
                <Note secondsLeft={secondsLeft}/>
            </div>,
            document.getElementById('content-3')
        )
    }
    secondsLeft--
}, 1000);
