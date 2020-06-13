ReactDOM.render(React.createElement(
    'button',
    { onClick: function (event) {
            console.log(this, event);
        }.bind(this) },
    'Save'
), document.getElementById('content-1'));

/// binding on return
class SaveButton extends React.Component {
    handleSave(event) {
        console.log(this, event);
    }
    render() {
        return React.createElement(
            'button',
            { onClick: this.handleSave.bind(this) },
            'Save'
        );
    }
}
ReactDOM.render(React.createElement(SaveButton, null), document.getElementById('content-2'));

//binding on constructor
class SaveButton2 extends React.Component {
    constructor(props) {
        super(props);
        this.handleSave = this.handleSave.bind(this);
    }
    handleSave(event) {
        console.log(this, event);
    }

    render() {
        return React.createElement(
            'button',
            { onClick: this.handleSave },
            'Save'
        );
    }
}
ReactDOM.render(React.createElement(SaveButton2, null), document.getElementById('content-3'));