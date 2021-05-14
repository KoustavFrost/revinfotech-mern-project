import React, {
    Component
} from 'react'
import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

// Creating the Table
const TableData = props => (
    <tr>
        <td>{props.tabledata.name}</td>
        <td>{props.tabledata.email}</td>
        <td>{props.tabledata.age}</td>
        <td>{props.tabledata.book}</td>
        <td>{props.tabledata.bio}</td>
    </tr>
);

export default class ListView extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
    }

    // Function to get all the data from the database
    componentDidMount() {
        axios.get(API_URL)
            .then(response => {
                this.setState({
                    data: response.data
                })
                console.log('this.state --> ', this.state);
            })
            .catch((error) => {
                console.error(error);
            })
    }

    tableDataList() {
        return this.state.data.map((currentData, i) => {
            return <TableData tabledata={currentData} key={i} />
        })
    }

    render() {
        return (
            <div>
                <h3>List Data</h3>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Age</th>
                            <th>Book</th>
                            <th>Bio</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.tableDataList()}
                    </tbody>
                </table>
            </div>
        )
    }
}
