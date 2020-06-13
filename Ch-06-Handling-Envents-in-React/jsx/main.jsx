ReactDOM.render(
    <button onClick={(function(event) {
        console.log(this, event)
    }).bind(this)}>Save</button>,
    document.getElementById('content-1')
)

/// binding on return
class SaveButton extends React.Component {
    handleSave(event) {
        console.log(this, event)
    }
    render() {
        return <button onClick={this.handleSave.bind(this)} >Save</button>
    }
}
ReactDOM.render(
    <SaveButton />,
    document.getElementById('content-2')
)

//binding on constructor
class SaveButton2 extends React.Component {
    constructor(props) {
        super(props)
        this.handleSave = this.handleSave.bind(this)
    }
    handleSave(event) {
        console.log(this, event)
    }

    render() {
        return <button onClick={this.handleSave}>Save</button>
    }
}
ReactDOM.render(
    <SaveButton2 />,
    document.getElementById('content-3')
)