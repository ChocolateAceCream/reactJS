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
            <tr style={{marginBottom : '50px'}}>
             <td>  <input ref='name' placeholder='Name of Contact' /> </td>
             <td>  <input ref='phone' placeholder='Phone Number' /></td>
             <td>  <button type="button" className="btn btn-primary"  onClick={this.handleClick}>Submit</button></td>
            </tr>
        )
    }
});
