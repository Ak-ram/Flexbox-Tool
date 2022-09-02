import { useEffect, useState } from 'react';
import { IoIosArrowDown,IoIosArrowUp } from 'react-icons/io';
import Option from '../option/option'
import './select.sass'
const Select = ({ name, prop }) => {
    const [isClicked, setClicked] = useState(false);
    const [isOpened, setOpened] = useState(false);
    const [options,setOptions] = useState([])
    try{
        useEffect(()=>{
            setOptions(prop[Object.keys(prop)[0]])
        },[])
    }catch{}
    const ChangeOptionsListStatus = (ele) => {
        let optionElement = document.querySelectorAll('.secondary-options');
        for (let i = 0; i < optionElement.length; i++)
            optionElement[i].classList.add('hide')
        setClicked(!isClicked);
        setOpened(!isOpened);
    }
    return (
        <div className='select'>
            <div className='name'>{name}</div>
            <div className='options'>
                <div className='default-option' onClick={(ele)=>ChangeOptionsListStatus(ele)}>
                    Choose {isOpened?<IoIosArrowDown />:<IoIosArrowUp />}
                    </div>
                <div className={`${isClicked ? 'secondary-options' : 'secondary-options hide'}`}>
                    {options?.map((option) => {
                        return (
                           <Option key={option} option={option} prop={prop} />
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
export default Select