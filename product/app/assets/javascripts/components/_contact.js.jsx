/*var Contact = React.createClass({
	getInitialState() {
		return {editable: false}
	},
	handleEdit() {
		if(this.state.editable){
			var name = this.refs.name.value;
			var phone = this.refs.phone.value;
			var id = this.props.contact.id;
            var contact = {id: id, name: name, phone: phone};
            this.props.handleUpdate(contact);
		}
		this.setState({ editable: !this.state.editable})
	},
	render(){
		var name = this.state.editable ? <input type='text' defaultValue={this.props.contact.name} /> : <h3>{this.props.contact.name}</h3>;
		var phone = this.state.editable ? <input type='text' defaultValue={this.props.contact.phone} />: <p>{this.props.contact.phone}</p>;
		return (
			<div>
				{name}
				{phone}
				<button onClick={this.props.handleDelete} >Delete</button>
				<button onClick={this.handleEdit}> {this.state.editable ? 'Submit' : 'Edit'} </button>
			</div>
		)
	}
});
*/

var Contact = React.createClass({
    getInitialState() {
        return {editable: false}
    },
    handleEdit() {
        if(this.state.editable) {
            var name = this.refs.name.value;
            var id = this.props.contact.id;
            var phone = this.refs.phone.value;
            var contact = {id: id , name: name , phone: phone};
            this.props.handleUpdate(contact);

        }
        this.setState({ editable: !this.state.editable })
    },

    render() {
        var name = this.state.editable ? <input type='text' ref='name' defaultValue={this.props.contact.name} /> : <h3>{this.props.contact.name}</h3>;
        var phone = this.state.editable ? <input type='text' ref='phone' defaultValue={this.props.contact.phone} />: <p>{this.props.contact.phone}</p>;
        return (
            <div>
                {name}
                {phone}
                <button onClick={this.props.handleDelete} >Delete</button>
                <button onClick={this.handleEdit}> {this.state.editable ? 'Submit' : 'Edit' } </button>
            </div>
        )
    }
});
