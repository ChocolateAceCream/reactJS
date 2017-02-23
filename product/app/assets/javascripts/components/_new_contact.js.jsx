var NewContact = React.createClass({
    handleClick() {
        var name = this.refs.name.value;
        var phone = this.refs.phone.value;
        $.ajax({
            url: '/api/v1/contacts',
            type: 'POST',
            data: { contact: { name: name, phone: phone } },
            success: (contact) => {
                this.props.handleSubmit(contact);
            },
        });
    },
    render() {
        return (
            <div>
                    <input ref='name' placeholder='Name of Contact' />
                    <input ref='phone' placeholder='Phone Number' />
                <button onClick={this.handleClick}>Submit</button>
            </div>
        )
    }
});
