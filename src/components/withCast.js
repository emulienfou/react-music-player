import React from 'react'
import { useCast } from 'react-cast-sender'

export const withCast = (Component) => {
  return (props) => {
    const cast = useCast();

    return <Component cast={ cast } { ...props } />
  }
}
