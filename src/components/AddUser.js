import React, {Component} from 'react';

class AddUser extends Component {
    state = {
        name: "",
        email: ""
    };

    onNameChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    onEmailChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    onAddSubmit(e) {
        const {addUser} = this.props;
        const {name, email} = this.state;

        const newUser = {
            id: (Math.random() * 100),
            name: name,
            email: email
        };
        addUser(newUser);

        e.preventDefault();
    }

    render() {
        const {name, email} = this.state;
        return (
            <div className="card">
                <h4 className="card-header"> Add New USer</h4>
                <div className="card-body">
                    <form onSubmit={this.onAddSubmit.bind(this)}>
                        <div className="form-group">
                            <label htmlFor="">Name</label>
                            <input value={name}
                                   type="text"
                                   name="name"
                                   id="name"
                                   placeholder="Enter Name"
                                   className="form-control"
                                   onChange={this.onNameChange.bind(this)}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="">Email</label>
                            <input value={email}
                                   type="text"
                                   name="email"
                                   id="email"
                                   placeholder="Enter Email"
                                   className="form-control"
                                   onChange={this.onEmailChange.bind(this)}
                            />
                        </div>
                        <div className="text-center mt-2">
                            <button type="submit" className="btn btn-danger"> Add New User</button>
                        </div>

                    </form>
                </div>
            </div>
        );
    }
}

export default AddUser;