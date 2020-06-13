ReactDOM.render(
    <button onClick={(function(event) {
        console.log(this, event)
    }).bind(this)}>Save</button>,
    document.getElementById('content-1')
)

/// binding on return
class SaveButton extends React.Component {
    handleSave(e) {
        console.log(this, e)
    }
    render() {
        return <button onClick={this.handleSave.bind(this)} >Save</button>
    }
}
ReactDOM.render(
    <SaveButton />,
    document.getElementById('content-2')
)

//binding on constructor, recommended approach
class SaveButton2 extends React.Component {
    constructor(props) {
        super(props)
        this.handleSave = this.handleSave.bind(this)
    }
    handleSave(e) {
        console.log(this, e)
    }

    render() {
        return <button onClick={this.handleSave}>Save</button>
    }
}
ReactDOM.render(
    <SaveButton2 />,
    document.getElementById('content-3')
)

//testing events
ReactDOM.render(
    <div 
    style={{border: '1px solid red'}} 
    onMouseOver={() => {console.log('mouse is over')}}>
        Passe o mouse aqui e veja no log
    </div>,
    document.getElementById('content-4')
)