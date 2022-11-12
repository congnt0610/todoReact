import React from 'react';
import {useState, useEffect, createContext} from 'react'

export const DataContext = createContext()

export const DataProvider = (props) => {
    const [todos, setTodos] = useState([])


    useEffect(() => {
        const todoStore = JSON.parse(localStorage.getItem('todoStore'))
        if(todoStore) setTodos(todoStore)
    },[])



    useEffect(() =>{
        localStorage.setItem('todoStore', JSON.stringify(todos))
    },[todos])



    return(
        <DataContext.Provider value = {[todos,setTodos]}>
        {/* dai dien cho component con duoc truyen vao */}
        {props.children} 
        </DataContext.Provider>
    )
}