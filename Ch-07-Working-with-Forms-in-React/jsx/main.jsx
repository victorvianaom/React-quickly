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
        this.handleCheckbox = this.handleCheckbox.bind(this)
        this.handleDescription = this.handleDescription.bind(this)
        this.handleBackEndSelect = this.handleBackEndSelect.bind(this)
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
        }
    }
    handleRadio(event) {
        let obj = {} //erase other radios
        obj[event.target.value] = event.target.checked
        this.setState({radioGroup: obj})
    }
    handleCheckbox(event) {
        let obj = Object.assign(this.state.checkboxGroup)// state cannot be changed directly
        obj[event.target.value] = event.target.checked
        this.setState({checkboxGroup: obj})
    }
    handleDescription(event) {
        this.setState({description: event.target.value})
    }
    handleBackEndSelect(event){
        this.setState({selectedBackEndValue: event.target.value})
    }

    render() {
        return(
            <form>
                <b>Radio:</b><br />
                <input  type='radio'
                        name='radioGroup'
                        id="radio-angular"
                        value='angular'
                        checked={this.state.radioGroup['angular']}
                        onChange={this.handleRadio} 
                /> <label htmlFor="radio-angular">Angular</label><br />
                <input  type='radio'
                        name='radioGroup'
                        id="radio-react"
                        value='react'
                        checked={this.state.radioGroup['react']}
                        onChange={this.handleRadio} 
                /> <label htmlFor="radio-react">React</label> <br />
                <input  type='radio'
                        name='radioGroup'
                        id='radio-polymer'
                        value='polymer'
                        checked={this.state.radioGroup['polymer']}
                        onChange={this.handleRadio} 
                /> <label htmlFor="radio-polymer">Polymer</label> <br />
                <br />


                <b>Checkbox:</b><br />
                <input  type='checkbox'
                        name='checkboxGroup'
                        id='check-node'
                        value='node'
                        checked={this.state.checkboxGroup['node']}
                        onChange={this.handleCheckbox} 
                /> <label htmlFor="check-node">Node</label> <br />
                <input  type='checkbox'
                        name='checkboxGroup'
                        id='check-react'
                        value='react'
                        checked={this.state.checkboxGroup['react']}
                        onChange={this.handleCheckbox} 
                /> <label htmlFor="check-react">React</label> <br />
                <input  type='checkbox'
                        name='checkboxGroup'
                        id="check-express"
                        value='express'
                        checked={this.state.checkboxGroup['express']}
                        onChange={this.handleCheckbox} 
                /> <label htmlFor="check-express">Express</label> <br />
                <input  type='checkbox'
                        name='checkboxGroup'
                        id="check-mongodb"
                        value='mongodb'
                        checked={this.state.checkboxGroup['mongodb']}
                        onChange={this.handleCheckbox} 
                /> <label htmlFor="check-mongodb">MongoDB</label> <br />


                <b>TextArea:</b><br />
                <textarea   name='description' 
                            value={this.state.description} 
                            onChange={this.handleDescription}
                /><br />

                <b>Select and Option:</b><br />
                <select value={this.state.selectedBackEndValue} onChange={this.handleBackEndSelect}>
                    <option value='ruby'>Ruby</option>
                    <option value='node'>Node</option>
                    <option value='python'>Python</option>
                </select>
            </form>
        )
    }
}
ReactDOM.render(
    <Form1 />,
    document.getElementById('div-3')
)