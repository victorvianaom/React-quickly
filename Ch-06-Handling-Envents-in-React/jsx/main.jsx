ReactDOM.render(
    <button onClick={(function(event) {
        console.log(this, event)
    }).bind(this)}>Save</button>,
    document.getElementById('content-1')
)