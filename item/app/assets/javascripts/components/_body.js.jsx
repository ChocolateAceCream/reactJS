var Body = React.createClass({
    render() {
        return (
            <div>
            <NewItem />
            <AllItems items = {this.state.items} />
        </div>
        )
    }
})
