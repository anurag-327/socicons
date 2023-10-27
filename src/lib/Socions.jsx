import React from 'react'
import { Path } from './path'
export function Socions(props)
{
    let icon=props.icon
    if(icon==undefined){
         throw("Pass icon name in icon field")
    }

    let size=props.size || 32
    let color=props.color || "#000000"
    
  return(
          Path(icon,size,color)
  )
}
