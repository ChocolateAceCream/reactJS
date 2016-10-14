var AllContacts = React.createClass ({
    render() {
        var contacts = this.props.contacts.map((contact) => {
            return (
                <div key={contact.id}>
                    <h3>{contact.name}</h3>
                    <p>{contact.phone}</p>
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
