import { useRef } from 'react';
import { useState } from 'react';
import { MdOutlineCheckCircleOutline } from 'react-icons/md';

import './select.sass'
const Select = ({ name, options }) => {
    const [isClicked, setClicked] = useState(false);
    const ChangeOptionsListStatus = () => {
        let options = document.querySelectorAll('.secondary-options');
        for (let i = 0; i < options.length; i++)
            options[i].classList.add('hide')
        setClicked(!isClicked);
    }


    return (
        <div className='select'>
            <div className='name'>{name} :</div>
            <div className='options'>
                <div className='default-option' onClick={ChangeOptionsListStatus}>row</div>
                <div className={`${isClicked ? 'secondary-options' : 'secondary-options hide'}`}>
                    {options?.map((option,index) => {
                        return(
                            <div key={option} className="option" onClick={ChangeOptionsListStatus}>
                            {<MdOutlineCheckCircleOutline color={'#bbb'} size={22} />}
                            <span className='_option'>{option}</span>
                        </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
export default Select