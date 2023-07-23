import React from "react";

type PropsType = {
    title:string
    tasks: TaskType[]
    removeTask: (id: number) => void
}

type TaskType = {
    id: number,
    title: string,
    isDone: boolean
}

export const Todolist =(props:PropsType)=> {
    return(
        <div className="App">
            <div>
                <h3>{props.title}</h3>
                <div>
                    <input/>
                    <button>+</button>
                </div>
                <ul>
                    {props.tasks.map((t:TaskType)=>{        
                        return(
                           <li><input type="checkbox" checked={t.isDone}/>
                           <span>{t.title}</span>
                           <button onClick={() => props.removeTask(t.id)}>x</button>
                           </li>
                        )                        
                    })}
                </ul>
                <div>
                    <button>All</button>
                    <button>Active</button>
                    <button>Completed</button>
                </div>
            </div>
        </div>
    )
}