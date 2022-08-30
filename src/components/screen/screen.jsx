import Box from '../box/box';
import './screen.sass';
const Screen = ()=>{
    const colors = ["#000","#f0f","#fdd","#00f","#f2f","#ccc"]
    return(
        <section className="screen">
            {
                colors.map((color,index)=> <Box color={color} index={index}/>)
            }
        </section>
    )
}

export default Screen;