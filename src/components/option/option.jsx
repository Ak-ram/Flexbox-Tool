import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import { flexData } from '../../flexData';
const Option = ({option,prop}) =>{
    const getOptionValue = (e)=>{
        let screen = document.querySelectorAll('.screen')[0];
        let property = Object.keys(prop);
        flexData.container.find(key=> {
            // component options
            if(property[0]===Object.keys(key)[0]){
                screen.style[property] = option;
                
            }else{
                // item options
            }
            e.currentTarget.parentElement.previousElementSibling.textContent = option
        })
    }
    return(
         <div key={option} className="option" onClick={(e)=>getOptionValue(e)}>
             <MdOutlineKeyboardArrowRight color={'#bbb'} size={22} />
             <span className='_option'>{option}</span>
        </div>
    )
}
export default Option