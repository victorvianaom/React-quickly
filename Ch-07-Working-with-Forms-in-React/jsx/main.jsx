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

// Rendering radio buttons and handling changes
class Form1 extends React.Component {
    constructor(props) {
        super(props)
        this.handleRadio = this.handleRadio.bind(this)
        this.state = {
            radioGroup: {
                angular: false,
                react: true,
                polymer: false
            }
        }
    }
    handleRadio(event) {
        let obj = {} //erase other radios
        obj[event.target.value] = event.target.checked
        this.setState({radioGroup: obj})
    }

    render() {
        return(
            <form>
                <input  type='radio'
                        name='radioGroup'
                        value='angular'
                        checked={this.state.radioGroup['angular']}
                        onChange={this.handleRadio} 
                />
                <input  type='radio'
                        name='radioGroup'
                        value='react'
                        checked={this.state.radioGroup['react']}
                        onChange={this.handleRadio} 
                />
                <input  type='radio'
                        name='radioGroup'
                        value='polymer'
                        checked={this.state.radioGroup['polymer']}
                        onChange={this.handleRadio} 
                />
            </form>
        )
    }
}
ReactDOM.render(
    <Form1 />,
    document.getElementById('div-3')
)