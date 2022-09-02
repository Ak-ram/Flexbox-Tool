import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import { flexData } from '../../flexData';
const Option = ({option,prop}) =>{
    const getOptionValue = (e)=>{
        let screen = document.querySelector('.screen');
        let box_3 = document.querySelectorAll('.box')[2];
        let property = Object.keys(prop);
        flexData.container.find(key=> {
            // component options
            if(property[0]===Object.keys(key)[0]){
                screen.style[property] = option;
                box_3.classList.remove('box_active');
            }else{
                // item options
                flexData.item.find(key=>{
                    if(property[0]=== Object.keys(key)[0]){
                        box_3.style[property] = option;
                        box_3.classList.add('box_active')
                    };
                    
                })
            }
            // e.currentTarget.parentElement.previousElementSibling.firstChild.textContent = option
            e.currentTarget.parentElement.parentElement.querySelector('.choose').textContent = option
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