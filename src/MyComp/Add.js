import { useState } from "react";

function Add(props) {
  const [title,setTitle]=useState("");;
  const [desc,setDesc]=useState("");

  function submit(e){
    e.preventDefault();
    if(!title||!desc){
      alert("Cant be empty");
    }
    else{

      props.addTodo(title,desc);
      
      setTitle("");
      setDesc("");
    }
  }
  return (
    <>
      <div className="container">
      <form onSubmit={submit}>
        <h3 className="my-3">Add a todo</h3>
        <div className="form-group my-3">
          <label htmlFor="title">Todo title</label>
          <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)}className="form-control" id="title" aria-describedby="emailHelp"/>
         </div>
        <div className="form-group my-3">
          <label htmlFor="desc">Todo Description</label>
          <input type="text" value={desc} onChange={(e)=>setDesc(e.target.value)}className="form-control" id="desc"/>
        </div>
       <button type="submit" className="btn btn-sn btn-success">Add</button>
      </form>
      </div>
    </>
  );
}
export default Add;
