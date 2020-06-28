class InputTextNotChange extends React.Component {
    render() {
        return React.createElement("input", { type: "text", name: "title", value: "Mr." });
    }
}
ReactDOM.render(React.createElement(InputTextNotChange, null), document.getElementById('div-1'));

class InputTextChange extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: 'Mister'
        };
    }
    handleChange(event) {
        this.setState({ title: event.target.value }); //this calls render()
    }
    render() {
        return React.createElement("input", {
            type: "text",
            name: "title",
            value: this.state.title,
            onChange: this.handleChange.bind(this) });
    }
}
ReactDOM.render(React.createElement(InputTextChange, null), document.getElementById('div-2'));

// Rendering radio buttons and handling changes
class Form1 extends React.Component {
    constructor(props) {
        super(props);
        this.handleRadio = this.handleRadio.bind(this);
        this.state = {
            radioGroup: {
                angular: false,
                react: true,
                polymer: false
            }
        };
    }
    handleRadio(event) {
        let obj = {}; //erase other radios
        obj[event.target.value] = event.target.checked;
        this.setState({ radioGroup: obj });
    }

    render() {
        return React.createElement(
            "form",
            null,
            React.createElement("input", { type: "radio",
                name: "radioGroup",
                value: "angular",
                checked: this.state.radioGroup['angular'],
                onChange: this.handleRadio
            }),
            React.createElement("input", { type: "radio",
                name: "radioGroup",
                value: "react",
                checked: this.state.radioGroup['react'],
                onChange: this.handleRadio
            }),
            React.createElement("input", { type: "radio",
                name: "radioGroup",
                value: "polymer",
                checked: this.state.radioGroup['polymer'],
                onChange: this.handleRadio
            })
        );
    }
}
ReactDOM.render(React.createElement(Form1, null), document.getElementById('div-3'));