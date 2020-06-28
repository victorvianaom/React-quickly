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