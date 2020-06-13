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

// Capture vs Bubbling...
class Mouse extends React.Component {
    render() {
        return <div
                style={{border: '1px solid red'}}
                onMouseOver={((event) => {
                    console.log('mouse over on bubbling event')
                    console.dir(event, this)}).bind(this)}
                onMouseOverCapture={((event) => { //// the CAPTURE evente is logged first
                    console.log('mouse over on CAPTURE event')
                    console.dir(event,this)}).bind(this)}>
                    Mouse here, open devTools
            </div>
    }
}
ReactDOM.render(
    <Mouse />,
    document.getElementById('content-5')
)

//// payinga attention to the SyntheticEvent class passed to the event handler function
class Mouse2 extends React.Component {
    render() {
        return <div>
            <div
            style={{border:'1px solid red'}}
            onMouseOver={(event) => {
                console.log('mouse is over with event, showing the SyntheticEvent object passed to this handler')
                console.log(event)
            }}>
            Pass the mouse over me, i'll show you in the log a SyntheticEvent object ...
            </div>
        </div>
    }
}
ReactDOM.render(
    <Mouse2 />,
    document.getElementById('content-6')
)