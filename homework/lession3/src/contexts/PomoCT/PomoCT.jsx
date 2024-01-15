import { createContext } from 'react'

const defaultValue = { mode: "longBreak", timer: "25" }
const PomoCT = createContext(defaultValue)

export default PomoCT