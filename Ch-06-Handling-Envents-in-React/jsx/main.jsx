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
        return <div
            style={{border:'1px solid red'}}
            onMouseOver={(event) => {
                console.log('mouse is over with event, showing the SyntheticEvent object passed to this handler')
                console.log('event: ', event)
                console.log('this: ', this)//// there's no need to bind here as i'm using arrow functions
            }}>
            Pass the mouse over me, i'll show you in the log a SyntheticEvent object ...
            </div>
    }
}
ReactDOM.render(
    <Mouse2 />,
    document.getElementById('content-6')
)

///accessing events in a asyncronous callback, this ways wont work
class Mouse3 extends React.Component {
    handleMouseOver(event) {
        event.persist()////THIS WAY THE EVENT CAN BE CALLED ASYNCRONOUSLY
        console.log('inside handleMouseOver, event received: ', event)
        window.e = event ////// ANTI-PATTERN
        console.log('event.target: ', event.target)
        console.log('event.currentTarget: ', event.currentTarget)
        setTimeout(() => {////BY DEFAULT IS NOT POSSIBLE TO USE AN EVENT ON AN ASYNCRONOUS CALLBACK, BUT I SET event.persist(), now it is possible
            console.table('asyncronously calling event.target', event.target)
            console.table('asyncronously calling window.e.target', window.e.target)
        }, 2500);
    }
    render() {
        return <div
        style={{border: '1px solid red'}}
        onMouseOver={this.handleMouseOver.bind(this)}>
            come here with the mouse...
        </div>
    }
}
ReactDOM.render(
    <Mouse3 />,
    document.getElementById('content-7')
)

/// updating the state as a result of a click action
class Button extends React.Component {
    constructor(props) {
        super(props)
        this.state = {counter: 0}
        this.buttonStyle = {
            color: 'white',
            backgroundColor: 'black',
            width: 300,
            height: 80
        }
    }
    handleClick(event) {
        this.setState({counter: ++this.state.counter})//again, setState calls render()
    }

    render() {
        return <button
                style={this.buttonStyle}
                onClick={this.handleClick.bind(this)}>
                {
                (this.state.counter === 0) ?
                    <span>You haven't clicked me yet!</span>
                :   ( (this.state.counter === 1) ?
                    <span>You've clicked me just {this.state.counter} time!</span>
                    :
                    <span>You've clicked me {this.state.counter} times!</span>
                    )
                }
               </button>
    }
}
ReactDOM.render(
    <Button />,
    document.getElementById('content-8')
)

/// triggering an event from a stateless component
class ClickCounterButton extends React.Component {
    render() {
        return <button
            onClick={this.props.handler}>{/**a function can be passed as a property */}
            Increase number (current number is {this.props.counter})
        </button>
    }
}
class ContentButton extends React.Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)//bind here or on render()
        this.state = {counter: 0}
    }
    handleClick(event) {
        this.setState({counter: ++this.state.counter})
    }
    render() {
        return (
            <ClickCounterButton handler={this.handleClick} counter={this.state.counter}/>
        )
    }
}
ReactDOM.render(
    <ContentButton />,
    document.getElementById('content-9')
)

///Exchanging data between child components
class ClickCounterButton2 extends React.Component {//child
    render() {
        return (
            <button
            style={{color: 'white', backgroundColor: 'blue', width: 200, height: 60}}
            onClick={this.props.handler}>
                Don't click me!
            </button>
        )
    }
}
class Counter2 extends React.Component {//child
    render() {
        return (
            <span>
                Clicked {this.props.counter} times.
            </span>
        )
    }
}
class Content2 extends React.Component {//parent
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
        this.state = {counter: 0}
    }
    handleClick() {
        this.setState({counter: ++this.state.counter})
    }

    render() {
        return (
            <div>
                <ClickCounterButton2 handler={this.handleClick} />
                <br />
                <Counter2 counter={this.state.counter} />
            </div>
        )
    }
}
ReactDOM.render(
    <Content2 />,
    document.getElementById('content-10')
)

////responding to DOM events not supported by React
///the below code didn`t work, i just typed in 
class Radio extends React.Component {
    constructor(props) {
        super(props)
        this.handleResize = this.handleResize.bind(this)
        let order = props.order
        let i = 1
        this.state = {
            outerStyle: this.getStyle(4, i),
            innerStyle: this.getStyle(1, i),
            selectedStyle: this.getStyle(2 ,i),
            taggerStyle: {top: order*20, width: 25, height: 25}
        }
    }
    getStyle(i, m) {
        let value = i*m
        return {
            top: value,
            bottom: value,
            left: value,
            right: value
        }
    }
    componentDidMount() {
        window.addEventListener('resize', this.handleResize)
    }
    componentWillUnmount() {
        window.removeEventListener('resize', this.handleResize)
    }
    handleResize(event) {
        let w = 1+ Math.round(window.innerWidth / 300)
        this.setState({
            taggerStyle: {top: this.props.order*w*10, width: w*10, height: w*10},
            textStyle: {left: w*13, fontSize: 7*w}
        })
    }

    render() {
        return (
            <div>
                <div className="radio-tagger" style={this.state.taggerStyle}>
                    <input type='radio' name={this.props.name} id={this.props.id}>
                    </input>
                    <label htmlFor={this.props.id}>
                        <div className='radio-text' style={this.state.textStyle}> {this.props.label} </div>
                        <div className='radio-outer' style={this.state.outerStyle}>
                            <div className='radio-inner' style={this.state.innerStyle}>
                                <div className='radio-selected' style={this.state.selectedStyle}>
                                    Teste teste teste
                                </div>
                            </div>
                        </div>
                    </label>
                </div>
            </div>
        )
    }
}
ReactDOM.render(
    <Radio name='name-meu-radio' id='id-meu-radio'/>,
    document.getElementById('content-11')
)