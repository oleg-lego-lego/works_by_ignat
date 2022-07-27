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
    {name, setNameCallback, addUser, error, totalUsers, KeyboardOnEnter}
) => {

    const inputClass = error ? s.errorInput : s.input

    return (
        <div className={s.greeting}>
            <div className={s.blockInput}>
                <input
                    value={name}
                    onChange={setNameCallback}
                    className={inputClass}
                    onKeyDown={KeyboardOnEnter}
                />
                <button onClick={addUser} className={s.button} disabled={!name}>add</button>
                <div className={s.count}>{totalUsers}</div>
            </div>
            <div className={s.error}>{error}</div>
        </div>
    )
}

export default Greeting




