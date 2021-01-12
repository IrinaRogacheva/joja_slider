import React from 'react'

export function AddPicture(props: any) {
    return  (<>
      <input type="file" id="LoadImage" className="FileInput" onChange={(e)=>{props.openPicture(e)}}></input>
      <label htmlFor="LoadImage" >
        <div className="Picture IconButton"></div>
      </label>
    </>)
}