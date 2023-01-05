import React from 'react'
import './folders.css'

const Folders = ({folderList, handleActiveFolder}) => {
  
  return (
    <div className='folder__section'>
      <h2>Folders</h2>
      <ul className="folders">
        {folderList.map((item, key) => (
          <li key={key} id={item}>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid*/}
            <a href="#" onClick={()=>{handleActiveFolder(item)}}>{item}</a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Folders
