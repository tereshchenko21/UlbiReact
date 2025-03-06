import React from 'react'
import classes from '../Input/InputCource.module.scss'

const InputCource = React.forwardRef((props, ref) => {
    return (
        <input ref={ref} {...props} type="text" className={classes.inputCource}/>
    )
})

export default InputCource