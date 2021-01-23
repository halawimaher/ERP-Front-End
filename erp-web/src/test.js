import React, {Component} from 'react';


export default class Test extends Component {
    state = {
        pro: [],
        // countries:[],
    }


    async componentDidMount() {
        //category

        const url = 'http://localhost:8000/api/allproject';

        const response = await fetch(url, {});

        const result = await response.json();

        this.setState({pro: result});


    }

    render() {
        return (
            <ul>
                {this.state.pro.map(p => <li key={p.id}> {p.name} </li>)}

            </ul>

        )
    }

}