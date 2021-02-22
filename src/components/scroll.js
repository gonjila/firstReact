import React from 'react'

const scroll = (items) => {
    return(
        <div style={{overflowY: "scroll", border: "3px solid #0ccac4", height: "470px"}}>
            {items.children}
        </div>
    );
}

export default scroll;