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
        return React.createElement(
            'button',
            null,
            this.props.buttonLabel
        );
    }
}
Button.defaultProps = { buttonLabel: 'Submit' };

class AllButtons extends React.Component {
    render() {
        return React.createElement(
            'div',
            null,
            React.createElement(Button, { buttonLabel: 'Bosta' }),
            React.createElement(Button, { buttonLabel: 'Merda' }),
            React.createElement(Button, null),
            React.createElement(Button, null)
        );
    }
}
ReactDOM.render(React.createElement(AllButtons, null), document.getElementById('div-1'));