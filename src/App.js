import Header from './MyComp/Header';
import Todos from './MyComp/Todos';
import Footer from './MyComp/Footer';
import Add from './MyComp/Add';
import { useState, useEffect } from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import About from './MyComp/About';


function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const [todos, setTodos] = useState(initTodo);

  useEffect(() => {
    // Update local storage whenever todos change
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  function onDelete(todo) {
    console.log("deleted!!!", todo);

    setTodos(todos.filter((e) => e !== todo));
  }

  function addTodo(title, desc) {
    console.log(title, desc);

    let sno;
    if (todos.length === 0) {
      sno = 0;
    } else {
      sno = todos[todos.length - 1].sno + 1;
    }

    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    }

    setTodos([...todos, myTodo]);
  }

  return (
    <>
    <BrowserRouter>
        <Header title="TO DO LIST"></Header>
        <Routes>
          <Route path='/' element={<>
            <Add addTodo={addTodo}></Add>
            <Todos todos={todos} onDelete={onDelete}></Todos>
          </>}></Route>
          <Route path="/about" element={<About></About>}></Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </>
  );
}

export default App;
