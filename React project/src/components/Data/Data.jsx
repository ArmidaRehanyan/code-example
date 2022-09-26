import React, {Component} from "react";
import style from "./Data.module.css";
import axios from "axios";


class Data extends Component {
    state = {todos: []};

    async componentDidMount() {
        let result = await axios.get("https://jsonplaceholder.typicode.com/users");
        this.setState({todos: result.data})
    }

    render() {
        return (
            <div className={style.axiosData}>
                {this.state.todos.length > 0 ? (
                    <ul className="list-group">
                        <div>{this.state.todos.map((todo) =>
                            <li key={todo.id}
                                className="list-group-item d-flex justify-content-between align-items-center">
                                {todo.email}
                                <span className="">
                                      <input type="checkbox" checked={todo.completed}/>
                                </span>
                            </li>
                        )}</div>
                    </ul>
                ) : (
                    <div className="spinner-border text-primary" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                )}
            </div>
        );
    }
}

export default Data
