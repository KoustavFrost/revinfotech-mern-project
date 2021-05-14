import React, {
    Component
} from 'react'
import axios from 'axios';
import swal from 'sweetalert';

const API_URL = process.env.REACT_APP_API_URL;

// Inline CSS
const paddingTop = {
    paddingTop: '0.5rem'
};

export default class CreateView extends Component {

    constructor(props) {
        super(props);

        // Binding
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangeAge = this.onChangeAge.bind(this);
        this.onChangeBio = this.onChangeBio.bind(this);
        this.onChangeBook = this.onChangeBook.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        // Creating default state
        this.state = {
            name: "",
            email: "",
            age: "",
            bio: "",
            book: "",
        };
    }

    onChangeName(e) {
        this.setState({
            name: e.target.value
        });
    }

    onChangeEmail(e) {
        this.setState({
            email: e.target.value
        });
    }

    onChangeAge(e) {
        this.setState({
            age: e.target.value
        });
    }

    onChangeBio(e) {
        this.setState({
            bio: e.target.value
        });
    }

    onChangeBook(e) {
        this.setState({
            book: e.target.value
        });
    }

    // Submit function
    onSubmit(e) {
        e.preventDefault();

        const newData = {
            name: this.state.name,
            email: this.state.email,
            age: this.state.age,
            bio: this.state.bio,
            book: this.state.book,
        };

        console.log(newData);

        axios.post(API_URL, newData)
            .then(response => {
                console.log('response -> ', response);
                if (response.status === 200) {
                    swal("Success", "Data submitted successfully!", "success")
                        .then(() => {
                            this.setState({
                                name: "",
                                email: "",
                                age: "",
                                bio: "",
                                book: "",
                            });
                        })
                }
            })
            .catch(error => {
                console.log(error.response)
                if (error.response.status === 400) {
                    // Handling the validation error
                    let errorData = error.response.message;
                    let html = "<p>" + errorData + "</p>";
                    swal({
                        title: "Failure!",
                        html: html, //TODO: Need to fix this
                        icon: "warning",
                    })
                }
            })

    }

    render() {
        return (
            <div>
                <h3>Create Data</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <lable>Name: </lable>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.name}
                            onChange={this.onChangeName}
                        />
                    </div>

                    <div className="form-group">
                        <lable>Email: </lable>
                        <input
                            type="email"
                            className="form-control"
                            value={this.state.email}
                            onChange={this.onChangeEmail}
                        />
                    </div>

                    <div className="form-group">
                        <lable>Age: </lable>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.age}
                            onChange={this.onChangeAge}
                        />
                    </div>

                    <div className="form-group">
                        <lable>Bio: </lable>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.bio}
                            onChange={this.onChangeBio}
                        />
                    </div>

                    <div className="form-group">
                        <lable>Book: </lable>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.book}
                            onChange={this.onChangeBook}
                        />
                    </div>

                    <div className="form=group" style={paddingTop}>
                        <input
                            type="submit"
                            value="Submit"
                            className="btn btn-success"
                        />
                    </div>
                </form>
            </div>
        )
    }
}
