import React from 'react'
import { DeleteAllUsers } from './DeleteAllUsers'

export const UserDetails = () => {
  return (
    <>
      <div>
        <h4>UserDetails</h4>

        <div>
          <button>Add Users</button>
          <ul>
            <li>item 1</li>
            <li>item 1</li>
            <li>item 1</li>
            <li>item 1</li>
          </ul>
        </div>
        <DeleteAllUsers/>
      </div>
    </>
  )
}
