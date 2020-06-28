class InputTextNotChange extends React.Component {
    render() {
        return (
            <input type="text" name="title" value="Mr." />
        )
    }
}
ReactDOM.render(
    <InputTextNotChange />,
    document.getElementById('div-1')
)

class InputTextChange extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title: 'Mister'
        }
    }
    handleChange(event) {
        this.setState({title: event.target.value}) //this calls render()
    }
    render() {
        return(
            <input 
            type='text' 
            name='title' 
            value={this.state.title}
            onChange={this.handleChange.bind(this)} />
        )
    }
}
ReactDOM.render(
    <InputTextChange />,
    document.getElementById('div-2')
)