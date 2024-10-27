import React from 'react';

const TextArea = ({placeholder, value, onChange, className }) => {
    return (
        <textarea 
        value={value}
        onChange={onChange}
        className={`textarea border-primaryDarker border-1 rounded-2xl bg-primaryLight ${className}`} 
        placeholder={placeholder || 'none'}></textarea>
    );
};

export default TextArea;