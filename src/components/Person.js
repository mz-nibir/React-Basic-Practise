

// let Person = (props) => {
//     return (
//         <div>
//             <h1>Name: {props.name}</h1>
//             <p>age: {props.age}</p>
//             <p>{props.children}</p>
//         </div>

import { Component } from "react";


//     );

// }
class Person extends Component {
    constructor(props) {
        super(props);

    }
    render() {
        return (
            <div>
                <h1>Name: {this.props.name}</h1>
                <p>age: {this.props.age}</p>
                <p>{this.props.children}</p>
            </div>





        );
    }

}

export default Person;