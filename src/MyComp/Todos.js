import Todo from './Todo';


function Todos(props){
    
    return(
        <>
        <div className="container">
            <h3 className="text-center my-3">Todos List</h3>
            {props.todos.length!==0 ? props.todos.map((todo)=>{
                return <Todo ti={todo} key={todo.sno} onDelete={props.onDelete}/>
            }):<h3>No todos to do</h3> }
            
        </div>
        </>
    );
}
export default Todos;