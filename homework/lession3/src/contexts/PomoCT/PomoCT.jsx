import React, { createContext } from 'react'

const defaultValue = { backGroundColor: "red", timer: "25" }
const PomoCT = createContext(defaultValue)

export default PomoCT