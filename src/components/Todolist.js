import React, { Component } from 'react'
const today=new Date;
function formatDate(date){
    return new Intl.DateTimeFormat('en-IN',{weekday:'long'}).format(date)
}
export default function Todolist(){
    return(
        <>
        <ul style={{
            backgroundColor:'pink',
            color:'blueviolet'
        }}>
            <li>Learn React</li>
            <li>Revise Javascript</li>
            <li>Revise python</li>
        </ul>
        <h1>To do list for {formatDate(today)}</h1>
        </>
    )
}