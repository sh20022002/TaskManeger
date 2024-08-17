import React, { useState } from 'react';
import '../css/ToDoItem.css';   
            
export default function ToDosItem({ item }) {
    const [isVisible, setIsVisible] = useState(true);
            
    const handleErase = () => {
        setIsVisible(false);
    };
            
    return (
            <div>
                {isVisible && <button className="button-style" onClick={handleErase}>{item}</button>}
            </div>
            );
}