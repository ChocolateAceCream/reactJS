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
                    <div key={contact.id}>
                        <Contact contact={contact}
                              handleDelete={this.handleDelete.bind(this, contact.id)}
                              handleUpdate={this.onUpdate}/>
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
