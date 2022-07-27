import React, {ChangeEvent, KeyboardEvent} from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void
    addUser: () => void
    error: string
    totalUsers: number
    KeyboardOnEnter: (e: KeyboardEvent<HTMLInputElement>) => void
}

const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers,KeyboardOnEnter}
) => {

    const inputClass = error ? s.errorInput : s.input

    return (
        <div>
            <input value={name} onChange={setNameCallback} className={inputClass} onKeyPress={KeyboardOnEnter}/>
            <span>{error}</span>
            <button onClick={addUser}>add</button>
            <span>{totalUsers}</span>
        </div>
    )
}

export default Greeting

