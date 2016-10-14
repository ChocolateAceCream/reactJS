var AllContacts = React.createClass ({
    getInitialState(){
        return { contacts:[]}
    },

    componentDidMount(){
        $.getJSON('/api/v1/contacts.json', (response) => {this.setState({ contacts: response}) });
    },

    render() {
        var contacts = this.state.contacts.map((contact) => {
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
