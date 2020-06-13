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

/////////////////////////////// USERS
class Users extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: []
        };
    }
    componentDidMount() {
        fetch('./users.json').then(response => response.json()).then(users => this.setState({ users: users }));
    }

    render() {
        return React.createElement(
            'div',
            { className: 'container' },
            React.createElement(
                'h1',
                null,
                'List of Users'
            ),
            React.createElement(
                'table',
                { className: 'table-striped table-condensed table table-bordered table-hover' },
                React.createElement(
                    'tbody',
                    null,
                    this.state.users.map(user => React.createElement(
                        'tr',
                        { key: user.id },
                        React.createElement(
                            'td',
                            null,
                            user.first_name,
                            ' ',
                            user.last_name
                        ),
                        React.createElement(
                            'td',
                            null,
                            user.email
                        ),
                        React.createElement(
                            'td',
                            null,
                            user.ip_address
                        )
                    ))
                )
            )
        );
    }
}
ReactDOM.render(React.createElement(Users, null), document.getElementById('content-2'));

//// Adding and removing an event listener
class Note extends React.Component {
    confirmLeave(e) {
        let confirmationMessage = 'Do you really wanna close?';
        e.returnValue = confirmationMessage;
        return confirmationMessage;
    }
    componentDidMount() {
        console.log('Attaching confirmLeave event listener for beforeunload');
        window.addEventListener('beforeunload', this.confirmLeave);
    }
    componentWillUnmount() {
        console.log('Removing confirmLeave event listener for beforeunload');
        window.removeEventListener('beforeunload', this.confirmLeave);
    }

    render() {
        console.log('Rendering...');
        return React.createElement(
            'p',
            null,
            'Here will be our input field for notes (parent will remove in ',
            this.props.secondsLeft,
            ' seconds)'
        );
    }
}

let secondsLeft = 5;
let interval = setInterval(() => {
    if (secondsLeft === 0) {
        ReactDOM.render(React.createElement(
            'div',
            null,
            'Note was removed after ',
            secondsLeft,
            ' seconds.'
        ), document.getElementById('content-3'));
        clearInterval(interval);
    } else {
        ReactDOM.render(React.createElement(
            'div',
            null,
            React.createElement(Note, { secondsLeft: secondsLeft })
        ), document.getElementById('content-3'));
    }
    secondsLeft--;
}, 1000);