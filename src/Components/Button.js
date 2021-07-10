import React from 'react'
 

const Button = (props) => { 
    const clickHandler = () => {
        console.log('Clicked');
    }
    return (
        <button disabled = {props.disabled ? true : false} 
        className = {`btn ${props.color ?? `default`} 
                        ${props.hover ? `hover` : `not-hover`}
                        ${props.variant ?? `non-variant`} 
                        ${props.disabled ? 'disable-btn' : ''} 
                        ${props.disableShadow ? 'disable-shadow' : ''} 
                        ${props.startIcon || props.endIcon  ? 'icon' : ''} 
                        ${props.size}
                        `} 
        onClick = {clickHandler}> 
        <span className = 'btn-icon'>
            {props.startIcon ?? ''}
        </span>
            {props.value ? `${props.value}`  
                : props.disabled ? 'Disabled'  
                : 'Default'}
        <span className = 'btn-icon'>
            {props.endIcon ?? ''}
        </span>
        </button>
    )
}

export default Button


