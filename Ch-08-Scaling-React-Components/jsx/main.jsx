// defaultProps
/*class DatePicker extends React.Component {

}
DatePicker.defaultProps = {
    currentDate: Date(),
    rows: 4,
    locale: 'US'
}*/

// defaultProps on a button example
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