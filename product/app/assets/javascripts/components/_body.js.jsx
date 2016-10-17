var Body = React.createClass({
	getInitialState(){
		return { contacts:[]}
	},

	componentDidMount(){
		$.getJSON('/api/v1/contacts.json', (response) => {this.setState({ contacts: response}) });
	},

	handleSubmit(contact) {
		console.log(contact);
		var newState = this.state.contacts.concat(contact);
		this.setState({ contacts: newState })
	},
	bhandleDelete(id) {
		$.ajax({
			url: `/api/v1/contacts/${id}`,
			type: 'DELETE',
			success:() => { this.removecontactClient(id);
			}
		});
	},

	removecontactClient(id) {
		var newcontacts = this.state.contacts.filter((contact) => {
			return contact.id != id;
		});

		this.setState({ contacts: newcontacts });
	},

	handleUpdate(contact) {
		$.ajax({
			url: `/api/v1/contacts/${contact.id}`,
			type: 'PUT',
			data: { contact: contact },
			success: () => {
				this.updateContacts(contact);

			}
		}
		)},

	updateContacts(contact) {
		var contacts = this.state.contacts.filter((i) => { return i.id != contact.id});
		contacts.push(contact);

		this.setState({contacts: contacts});
	},

	render() {
		return (
			<div>
				<NewContact handleSubmit={this.handleSubmit} />
				<AllContacts contacts = {this.state.contacts} ahandleDelete = {this.bhandleDelete} onUpdate={this.handleUpdate}/>
			</div>
		)
	}

});
