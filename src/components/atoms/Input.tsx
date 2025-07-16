import React from 'react';
import type { InputHTMLAttributes } from 'react';
import '../component.css';

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
    className?: string;
};

const Input: React.FC<InputProps> = ({ className = '', ...props}) =>{
    return(
        <input 
        className={`inputField ${className}`}
        {...props}
        />
    );
};

export default Input;