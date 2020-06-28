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
        this.handleDescription = this.handleDescription.bind(this);
        this.handleBackEndSelect = this.handleBackEndSelect.bind(this);
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
            },
            description: 'text inside the textarea',
            selectedBackEndValue: 'node'
        };
    }
    handleRadio(event) {
        let obj = {}; //erase other radios
        obj[event.target.value] = event.target.checked;
        this.setState({ radioGroup: obj });
    }
    handleCheckbox(event) {
        let obj = Object.assign(this.state.checkboxGroup); // state cannot be changed directly
        obj[event.target.value] = event.target.checked;
        this.setState({ checkboxGroup: obj });
    }
    handleDescription(event) {
        this.setState({ description: event.target.value });
    }
    handleBackEndSelect(event) {
        this.setState({ selectedBackEndValue: event.target.value });
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
                id: "radio-angular",
                value: "angular",
                checked: this.state.radioGroup['angular'],
                onChange: this.handleRadio
            }),
            " ",
            React.createElement(
                "label",
                { htmlFor: "radio-angular" },
                "Angular"
            ),
            React.createElement("br", null),
            React.createElement("input", { type: "radio",
                name: "radioGroup",
                id: "radio-react",
                value: "react",
                checked: this.state.radioGroup['react'],
                onChange: this.handleRadio
            }),
            " ",
            React.createElement(
                "label",
                { htmlFor: "radio-react" },
                "React"
            ),
            " ",
            React.createElement("br", null),
            React.createElement("input", { type: "radio",
                name: "radioGroup",
                id: "radio-polymer",
                value: "polymer",
                checked: this.state.radioGroup['polymer'],
                onChange: this.handleRadio
            }),
            " ",
            React.createElement(
                "label",
                { htmlFor: "radio-polymer" },
                "Polymer"
            ),
            " ",
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
                id: "check-node",
                value: "node",
                checked: this.state.checkboxGroup['node'],
                onChange: this.handleCheckbox
            }),
            " ",
            React.createElement(
                "label",
                { htmlFor: "check-node" },
                "Node"
            ),
            " ",
            React.createElement("br", null),
            React.createElement("input", { type: "checkbox",
                name: "checkboxGroup",
                id: "check-react",
                value: "react",
                checked: this.state.checkboxGroup['react'],
                onChange: this.handleCheckbox
            }),
            " ",
            React.createElement(
                "label",
                { htmlFor: "check-react" },
                "React"
            ),
            " ",
            React.createElement("br", null),
            React.createElement("input", { type: "checkbox",
                name: "checkboxGroup",
                id: "check-express",
                value: "express",
                checked: this.state.checkboxGroup['express'],
                onChange: this.handleCheckbox
            }),
            " ",
            React.createElement(
                "label",
                { htmlFor: "check-express" },
                "Express"
            ),
            " ",
            React.createElement("br", null),
            React.createElement("input", { type: "checkbox",
                name: "checkboxGroup",
                id: "check-mongodb",
                value: "mongodb",
                checked: this.state.checkboxGroup['mongodb'],
                onChange: this.handleCheckbox
            }),
            " ",
            React.createElement(
                "label",
                { htmlFor: "check-mongodb" },
                "MongoDB"
            ),
            " ",
            React.createElement("br", null),
            React.createElement(
                "b",
                null,
                "TextArea:"
            ),
            React.createElement("br", null),
            React.createElement("textarea", { name: "description",
                value: this.state.description,
                onChange: this.handleDescription
            }),
            React.createElement("br", null),
            React.createElement(
                "b",
                null,
                "Select and Option:"
            ),
            React.createElement("br", null),
            React.createElement(
                "select",
                { value: this.state.selectedBackEndValue, onChange: this.handleBackEndSelect },
                React.createElement(
                    "option",
                    { value: "ruby" },
                    "Ruby"
                ),
                React.createElement(
                    "option",
                    { value: "node" },
                    "Node"
                ),
                React.createElement(
                    "option",
                    { value: "python" },
                    "Python"
                )
            )
        );
    }
}
ReactDOM.render(React.createElement(Form1, null), document.getElementById('div-3'));