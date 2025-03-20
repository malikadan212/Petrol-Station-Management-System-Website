import React from 'react';

function Card({ children, className }) {
    return (
        <div className={`border border-gray-200 shadow-sm rounded-lg ${className}`}>
            {children}
        </div>
    );
}

export default Card;
