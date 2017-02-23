/*var AllContacts = React.createClass ({

    handleDelete(id){
        console.log("delete contact clicked")
        this.props.ahandleDelete(id);
    },

    onUpdate(contact) {
        this.props.onUpdate(contact);
    },

    render() {
        var contacts = this.props.contacts.map((contact) => {
            return (
                <div key={contact.id}>
                    <Contact contact={contact}
                        handleDelete={this.handleDelete.bind(this, contact.id)}
                        handleUpdate= {this.onUpdate} />
                </div>
            )
        });

        return(
            <div>
                {contacts}
            </div>
        )
    }

});
*/
var AllContacts = React.createClass({
    handleDelete(id) {
        this.props.ahandleDelete(id);
    },

    onUpdate(contact) {
        this.props.onUpdate(contact);
    },

    render() {
        var contacts= this.props.contacts.map((contact) => {
            return (
                <tbody key={contact.id}>
                    <Contact  contact={contact}
                        handleDelete={this.handleDelete.bind(this, contact.id)}
                        handleUpdate={this.onUpdate}/>
                </tbody>
            )
        });

        return(
            <table className="table table-condensed">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Phone Number</th>
                        <th>Option</th>
                    </tr>
                </thead>
                    {contacts}
            </table>
        )
    }
});
