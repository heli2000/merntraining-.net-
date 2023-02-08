import React, { useContext } from 'react'
import {NameContext} from './NameContext';

const Child = (props) => {
  const namec = useContext(NameContext);
  const name = namec;
  props.getname(name);
  return (
    <div>
      {name}
    </div>
  )
}

export default Child
