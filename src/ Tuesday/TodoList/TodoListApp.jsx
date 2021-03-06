import React from 'react';
import './TodoListApp.css';
import TodoList from "./TodoList";
import AddNewItemForm from "./AddNewItemForm";
import {saveState} from "./SaveAndDefaultState";

class TodoListApp extends React.Component {
    state = {
        todolist: [
            // {id:"01", title: "Home"},
            // {id:"02", title: "Gobs" },
            // {id:"03", title: "Sport" },
        ]
    };

    nextTodoListId = 0;

    // saveState = () => {
    //     localStorage.setItem("todoList-state" + this.state.todolist.id, JSON.stringify(this.state));
    // };

    restoreState = () => {
        let state = this.state;
        let stateAsString = localStorage.getItem("our-state" + this.state.id);
        if (stateAsString) {
            state = JSON.parse(stateAsString);
        }
        this.setState(state, () => {
            this.state.todolist.forEach(task => {
                if (task.id >= this.nextTodoListId) {
                    this.nextTodoListId = task.id + 1;
                }
            })
        });

    };

    componentDidMount() {
        this.restoreState();
    };

    addTodoList = (newTodoLisName) => {
        let newTodo = {
            title: newTodoLisName,
            id: this.nextTodoListId
        };
        this.nextTodoListId++;
        this.setState({
            todolist: [...this.state.todolist, newTodo
            ]
        }, () => saveState(this.state.id, this.state))
    };


    render = () => {
        let todoList = this.state.todolist.map(t => {
            return <TodoList id={t.id}
                             title={t.title}
                             key={t.id}
            />
        });
        return (
            <div>
                <div>
                    <AddNewItemForm addItem={this.addTodoList}
                                    deleteTodoList={this.deleteTodoList}
                    />
                </div>
                <div className="TodoListApp">
                    {todoList}
                </div>
            </div>
        );
    }
}

export default TodoListApp;