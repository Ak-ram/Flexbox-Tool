import './box.sass'
const Box = ({color, index})=>{
    return(
        <div className='box' style={{background: `${color}`}}>{index}</div>
    )
}
export default Box