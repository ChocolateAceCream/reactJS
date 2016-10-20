var Records = React.createClass({
    getInitialState() {
        return {records: this.props.data}
    },

    getDefaultProps() {
        return { records: [] }
    },
    render () {
        records = this.props.data.map ( function(record) {
            return(
                <Record data={record} key={record.id}/>
           );
        });
        return (
            <div className='record'>
                <h2 className='title'>Records</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>date</th>
                            <th>amount</th>
                        </tr>
                    </thead>
                    <tbody>{records}</tbody>
                </table>
            </div>
        );

    }
});
