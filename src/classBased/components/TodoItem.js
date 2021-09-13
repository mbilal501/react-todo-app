import React from "react"
import styles from "./TodoItem.module.css"


class TodoItem extends React.Component {
    state = {
        editing: false
    };
    handleEditing = () => {
        this.setState({
            editing: true
        });
    }
    handleUpdatedDone = event => {
        if(event.key === "Enter"){
            this.setState({ editing: false })
        }
    }

    componentWillUnmount() {
         console.log("Cleaning Up...");
    }

    render() {
        const completedStyle = {
            fontStyle: "italic",
            color: "#595959",
            opacity: 0.4,
            textDecoration: "line-through",
          }

        const { id, title, completed } = this.props.todo;

        let viewMode = {}
        let editMode = {}

        if(this.state.editing){
            viewMode.display = "none"
        }
        else{
            editMode.display = "none"
        }

        return <li className={styles.item}>
                <div onDoubleClick={this.handleEditing} style={viewMode}>
                <input 
                type="checkbox" 
                className={styles.checkbox}
                checked={completed}
                onChange={() => this.props.handleChangeProps(id)} 
                />
                
                <button onClick={() => this.props.deleteTodoProps(id)}>
                Delete
                </button>
                
                <span style={ completed ? completedStyle : null } >
                {title}
                </span>

                </div>

                <input 
                type="text"
                style={editMode}
                className={styles.textInput}
                value={title}
                onChange={e => {
                    this.props.setUpdate(e.target.value, id)
                }}
                onKeyDown={this.handleUpdatedDone}
                />

               </li>
    }




//code without destructuring

/**
 Using Destructuring
If you take a look at the TodoItem component, we were writing multiples this.props.todo to grab the id, title and completed values. This can be a pain in the neck if your application gets complex.

Instead of doing these, you can pull each of the variables out of the todo. In other words, you can "destructure" the todo and get these variables from it.

To destructure the id from this.props.todo.id, you’ll have something like this:

const { id } = this.props.todo
The same thing applies to the title and completed.

Let’s apply this in the TodoItem component. Add this line of code just above the return statement:

const { completed, id, title } = this.props.todo
Then, replace every this.props.todo with their corresponding variables. For instance, this.props.todo.completed should be replaced with completed and so on.
**/

// render() {
//     const completedStyle = {
//         fontStyle: "italic",
//         color: "#595959",
//         opacity: 0.4,
//         textDecoration: "line-through",
//       }

//     return <li className={styles.item}>
//             <input 
//             type="checkbox" 
//             className={styles.checkbox}
//             checked={this.props.todo.completed}
//             onChange={() => this.props.handleChangeProps(this.props.todo.id)} 
//             />
            
//             <button onClick={() => this.props.deleteTodoProps(this.props.todo.id)}>
//             Delete
//             </button>
            
//             <span style={ this.props.todo.completed ? completedStyle : null } >
//             {this.props.todo.title}
//             </span>
//            </li>
// }

















}

export default TodoItem 

// import React from "react"

// function TodoItem(props) {
//   return <li>{props.todo.title}</li>
// }

// export default TodoItem