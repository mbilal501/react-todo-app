import React, { useState } from "react"
import { FaPlusCircle } from "react-icons/fa"
// import { IconContext } from "react-icons"

const InputTodo = props => {
    const [inputText, setInputText] = useState({
        title: "",
    })
    
    const onChange = e => {
        setInputText({
            ...inputText,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        if(inputText.title.trim())
        {
            props.addTodoProps(inputText.title)
            setInputText({
                title: "",
            })
        }
        else
        {
            alert("Please write item")
            
        }
    }
    
    
    return (
        <form onSubmit={handleSubmit} className="form-container">
          <input
            type="text"
            className="input-text"
            placeholder="Add todo..."
            value={inputText.title}
            name="title"
            onChange={onChange}
          />
          <button className="input-submit">
          <FaPlusCircle style={{ color: "darkcyan", fontSize: "20px", marginTop: "2px" }} />
          </button>
          {/* <IconContext.Provider
  value={{
    color: "darkcyan",
    style: { fontSize: "20px", color: "#ff0000" },
    className: "submit-iconn",
  }}
>
  <button className="input-submit">
    <FaPlusCircle />
    <FaPlusCircle />
    <FaPlusCircle />
  </button>
</IconContext.Provider> */}
        </form>
      )
} 

export default InputTodo

// import React, { Component } from "react"

// class InputTodo extends Component {
//     state = {
//         title:""
//     };
//     onChange = e => {
//         // console.log("Hello");
//          this.setState({
//              [e.target.name]: e.target.value
//          });
//     };

//     handleSubmit = e => {
//         e.preventDefault();
//         if(this.state.title.trim()){
//             this.props.addTodoProps(this.state.title);
//             this.setState({
//               title:""
//           });
//         }
//         else{
//             alert("Please Write Something to add in Your Todo List");
//         }
      
//     };

//     render(){
//         return (
//             <form onSubmit={this.handleSubmit} className="form-container">
//                 <input 
//                     type="text" 
//                     className="input-text"
//                     name="title" 
//                     placeholder="Add Todo..." 
//                     value={this.state.title} 
//                     onChange={this.onChange}
//                 />
//                 <button className="input-submit">Submit</button>
//             </form>
//         )
//     }
// }

// export default InputTodo
