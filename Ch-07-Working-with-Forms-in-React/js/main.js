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
        this.handleCheckbox = this.handleCheckbox.bind(this);
        this.state = {
            radioGroup: {
                angular: false,
                react: true,
                polymer: false
            },
            checkboxGroup: {
                node: true,
                react: true,
                express: true,
                mongodb: true
            }
        };
    }
    handleRadio(event) {
        let obj = {}; //erase other radios
        obj[event.target.value] = event.target.checked;
        this.setState({ radioGroup: obj });
    }
    handleCheckbox(event) {
        let obj = Object.assign(this.state.checkboxGroup);
        obj[event.target.value] = event.target.checked;
        this.setState({ checkboxGroup: obj });
    }

    render() {
        return React.createElement(
            "form",
            null,
            React.createElement(
                "b",
                null,
                "Radio:"
            ),
            React.createElement("br", null),
            React.createElement("input", { type: "radio",
                name: "radioGroup",
                value: "angular",
                checked: this.state.radioGroup['angular'],
                onChange: this.handleRadio
            }),
            " Angular ",
            React.createElement("br", null),
            React.createElement("input", { type: "radio",
                name: "radioGroup",
                value: "react",
                checked: this.state.radioGroup['react'],
                onChange: this.handleRadio
            }),
            " React ",
            React.createElement("br", null),
            React.createElement("input", { type: "radio",
                name: "radioGroup",
                value: "polymer",
                checked: this.state.radioGroup['polymer'],
                onChange: this.handleRadio
            }),
            " Polymer ",
            React.createElement("br", null),
            React.createElement("br", null),
            React.createElement(
                "b",
                null,
                "Checkbox:"
            ),
            React.createElement("br", null),
            React.createElement("input", { type: "checkbox",
                name: "checkboxGroup",
                value: "node",
                checked: this.state.checkboxGroup['node'],
                onChange: this.handleCheckbox
            }),
            " Node ",
            React.createElement("br", null),
            React.createElement("input", { type: "checkbox",
                name: "checkboxGroup",
                value: "react",
                checked: this.state.checkboxGroup['react'],
                onChange: this.handleCheckbox
            }),
            " React ",
            React.createElement("br", null),
            React.createElement("input", { type: "checkbox",
                name: "checkboxGroup",
                value: "express",
                checked: this.state.checkboxGroup['express'],
                onChange: this.handleCheckbox
            }),
            " Express ",
            React.createElement("br", null),
            React.createElement("input", { type: "checkbox",
                name: "checkboxGroup",
                value: "mongodb",
                checked: this.state.checkboxGroup['mongodb'],
                onChange: this.handleCheckbox
            }),
            " MongoDB ",
            React.createElement("br", null)
        );
    }
}
ReactDOM.render(React.createElement(Form1, null), document.getElementById('div-3'));