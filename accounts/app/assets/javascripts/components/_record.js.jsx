var Record = React.createClass({
    getInitialState() {
        return {
            record: this.props.data
        }
    },

    render() {
        return(
            <tr>
                <td>{this.state.record.title}</td>
                <td>{this.state.record.date}</td>
                <td>{this.state.record.amount}</td>
            </tr>
        )
    }
});
