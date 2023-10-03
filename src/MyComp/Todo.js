import React from 'react';
function Todo(props){
    return(
        <>
            <div className="container ">
                <h3>{props.ti.title}</h3 >
                <p>{props.ti.desc}</p>
                <button className="btn btn-sm btn-danger" onClick={()=>{props.onDelete(props.ti)}}>Delete</button>
                <hr/>
            </div>
        </>
    );
}
export default Todo;