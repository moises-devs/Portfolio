import React, { useState } from 'react';
import styleName from "./SkillItem.module.css"
import { usePopper } from 'react-popper';

  
function SkillItem({ name, render }) {
    const [referenceElement, setReferenceElement] = useState(null);
    const [popperElement, setPopperElement] = useState(null);
    const [showTool, setShowTool] = useState(false);
    const { styles, attributes } = usePopper(referenceElement, popperElement, {
        placement:'top',
    });
  return (
    <>
    <li className={styleName.icon} ref={setReferenceElement} onMouseEnter={() => setShowTool(true)} onMouseLeave={() => setShowTool(false)}>
    <span className={`${styleName[name]}`}>
    {render}
    </span>
    </li>
    {showTool && <span className={styleName.pop} ref={setPopperElement} style={styles.popper} {...attributes.popper}>
        {name.toUpperCase()}
         {/* <div ref={setArrowElement} style={styles.arrow} /> */}
    </span>}
    </>
  )
}

export default SkillItem