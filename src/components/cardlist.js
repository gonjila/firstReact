import React from 'react';
import Cards from "./card";

const cardList = ({robots}) => {
    const CardComponent = robots.map((a, i)=>{
        return <Cards key={i} id={robots[i].id} name={robots[i].name} email={robots[i].email} />
    })
    return(
        <div>
        {CardComponent}
    </div>
    );
}

export default cardList;