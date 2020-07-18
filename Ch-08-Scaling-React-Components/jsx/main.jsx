// defaultProps on a button example
console.log("got into main.js")
class Button extends React.Component {
    render() {
        return <button>{this.props.buttonLabel}</button>
    }
}
Button.defaultProps = {buttonLabel: 'Submit'}

class AllButtons extends React.Component {
    render() {
        return(
            <div>
                <Button buttonLabel='Bosta' />
                <Button buttonLabel='Merda' />
                <Button />
                <Button />
            </div>
        )
    }
}
ReactDOM.render(
    <AllButtons />,
    document.getElementById('div-1')
)