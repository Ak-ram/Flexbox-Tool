import Box from '../box/box';
import './screen.sass';
const Screen = ()=>{
    const colors = ["#ff9800","#e91e63","#673ab7","#03a9f4","#f2f","#ccc"]
    return(
        <section className="screen">
            {
                colors.map((color,index)=> <Box key={color} color={color} index={index+1}/>)
            }
        </section>
    )
}

export default Screen;