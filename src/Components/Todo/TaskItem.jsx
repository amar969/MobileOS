import React from 'react'

export const TaskItem = ({title, status, id}) => {
  return (
    <>
    <p id={id} > {`${title} - ${status}`} </p>
    </>
  )
}
