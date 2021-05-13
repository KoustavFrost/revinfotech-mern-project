import React, {
    Component
} from 'react'
import axios from 'axios';

export default class ListView extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
    }

    render() {
        return (
            <div>
                <h3>List View</h3>
            </div>
        )
    }
}
