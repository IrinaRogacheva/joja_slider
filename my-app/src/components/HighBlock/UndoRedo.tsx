import React from 'react';

export function UndoRedo(props: any) {
    return (
        <div className='Main2'>
          <button className='IconButton Left' onClick={()=>{props.undo()}}></button>
          <button className='IconButton Right' onClick={()=>{props.redo()}}></button>
        </div>
    )
}