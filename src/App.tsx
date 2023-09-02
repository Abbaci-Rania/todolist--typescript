import React, { useState } from 'react';
import './App.css';
import InputField from './components/InputField';
import {Todo} from './Model'
import TodoList from './components/TodoList';

// let name: string;
// let age: number;
// let isStable:boolean;
// let hobbies:string[]; //array of syting
// let role:[number, string]; //tuple
// role = [5, "ggdh"];

// //Defining objects
// type Person ={
//   name: string;
//   age?: number; //the ? indicates that this property is optional
// }
// let person1:Person = {
//   name:'rania',
//   age:5,
// };

// //if we want that a variable can be both number and string: We use UNION |
// let myvar: number | string;

// //define a function
// let printFunc: (name:string, age:number) => number; // => number is the return type

// //if we want a variable that doesnt have a specific type:
// let general: unknown; 
// let printFunction: (name:string, age:number) => void | never; //void returns undefined but never doesnt return anything

// //interface work like type
// interface Person2{
//   name: string;
//   age?: number;
// }
// interface Guy extends Person2{
//   gender: string;
// }
// //extends using types
// type X = {
//   a:string;
//   b: number;
// }
// type Y= X & {
//   c: string;
//   d: Number;
// }
// let Yvar:Y ={
//   a:"hello",
//   b:40,
//   c:"world",
//   d : 3.6789 ,   
// };




const App: React.FC = ()=>{
  const [todo, setTodo]= useState<string>("")
  const[todos, setTodos]= useState<Todo[]>([] )
  const handleAdd = (e:React.FormEvent)=>{
    e.preventDefault()
    if(todo) {
      setTodos([...todos, {id:Date.now(), todo: todo, isDone: false}])
      setTodo("")

    }
  }

  return (
    <div className="App">
      <span className="heading">Taskify</span>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      <TodoList todos={todos} setTodos={setTodos}/>
    </div>
  );
}

export default App;
