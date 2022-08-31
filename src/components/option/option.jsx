import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import { flexData } from '../../flexData';
const Option = ({option,prop}) =>{
    const getOptionValue = ()=>{
        let screen = document.querySelectorAll('.screen')[0];
        let property = Object.keys(prop);
        screen.style[property] = option;
        // console.log(flexData.container.find(prop=> prop==property))
        console.log(...property)
    }
    return(
         <div key={option} className="option" onClick={getOptionValue}>
             <MdOutlineKeyboardArrowRight color={'#bbb'} size={22} />
             <span className='_option'>{option}</span>
        </div>
    )
}
export default Option