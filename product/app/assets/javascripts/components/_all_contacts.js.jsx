var AllContacts = React.createClass ({

    handleDelete(id){
        console.log("delete contact clicked")
        this.props.handleDelete(id);
    },

    render() {
        var contacts = this.props.contacts.map((contact) => {
            return (
                <div key={contact.id}>
                    <h3>{contact.name}</h3>
                    <p>{contact.phone}</p>
                    <button onClick={this.handleDelete.bind(this, contact.id)}>Delete</button>
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
