import React,{useEffect, useRef, useState} from 'react'
import {Todo} from '../Model'
import { AiFillEdit, AiFillDelete,AiOutlineCheck } from 'react-icons/ai';

interface Props{
    todo: Todo;
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>> 
}
const SingleTodo = ({todo, todos, setTodos } :Props) => {
    const [edit, setEdit]= useState<Boolean>(false)
    const [editTodo, setEditTodo]= useState<string>(todo.todo)

    const handleCheck = (id: number)=>{
        setTodos(todos.map((todo)=>{ return todo.id===id ? {...todo, isDone:!todo.isDone} : todo}))
    }
    const handleDelete = (id: number)=>{
        setTodos(todos.filter((todo)=> todo.id != id))
    }
    const handleEdit = (e: React.FormEvent, id:number)=>{
        e.preventDefault()
        setTodos(todos.map((todo)=>(todo.id === id ? {...todo, todo:editTodo} : todo)))
        setEdit(false)
    }
    const inputRef = useRef<HTMLInputElement>(null)
    useEffect(()=>{inputRef.current?.focus();}, [edit])
  return (
    <form className='todos__single' onSubmit={(e)=> handleEdit(e, todo.id)}>
        {edit ? 
            <input ref={inputRef} value={editTodo} onChange={(e)=>setEditTodo(e.target.value)} className='todos__single--text'/> 
            : todo.isDone ? 
            (<s className='todos__single--text'>{todo.todo}</s>) 
            : (<span className='todos__single--text'>{todo.todo}</span>)
        }
        
        <div>
            <span className="icon" onClick={()=> handleCheck(todo.id)}><AiOutlineCheck /></span>
            <span className="icon" onClick={()=> {if(!todo.isDone && !edit){setEdit(!edit)}}}><AiFillEdit /></span>
            <span className="icon" onClick={()=> handleDelete(todo.id)}><AiFillDelete /></span>
        </div>
    </form>
  )
}

export default SingleTodo
