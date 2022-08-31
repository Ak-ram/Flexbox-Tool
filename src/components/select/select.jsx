import { useRef } from 'react';
import { useState } from 'react';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';

import './select.sass'
const Select = ({ name, options }) => {
    const [isClicked, setClicked] = useState(false);
    const optionRef = useRef();
    const ChangeOptionsListStatus = (ele) => {
        let optionElement = document.querySelectorAll('.secondary-options');
        for (let i = 0; i < optionElement.length; i++)
            optionElement[i].classList.add('hide')
        setClicked(!isClicked);
        console.log(optionRef.current)
        // return ele.target.textContent
    }


    return (
        <div className='select'>
            <div className='name'>{name} :</div>
            <div className='options'>
                <div className='default-option' onClick={(ele)=>ChangeOptionsListStatus(ele)}>row</div>
                <div className={`${isClicked ? 'secondary-options' : 'secondary-options hide'}`}>
                    {options?.map((option) => {
                        return (
                            <div key={option} className="option" onClick={ChangeOptionsListStatus}>
                                <MdOutlineKeyboardArrowRight color={'#bbb'} size={22} />
                                <span ref={optionRef} className='_option'>{option}</span>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
export default Select