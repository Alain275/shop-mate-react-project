import React from 'react'

const Button = ({prop}) => {
  return (
    <button className=" px-5 text-lg bg-sky-500/50 rounded p-1.5 dark:bg-sky-500/75 dark:text-white" >{prop}</button>
  )
}

export default Button