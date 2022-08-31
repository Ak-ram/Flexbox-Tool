import { useRef, useState } from 'react';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';

const Option = ({option,prop}) =>{
    const getOptionValue = ()=>{
        let screen = document.querySelectorAll('.screen')[0];
        let property = Object.keys(prop);
        
        console.log(screen.style[property] = option);
    }
    return(
         <div key={option} className="option" onClick={getOptionValue}>
             <MdOutlineKeyboardArrowRight color={'#bbb'} size={22} />
             <span className='_option'>{option}</span>
        </div>
    )
}
export default Option