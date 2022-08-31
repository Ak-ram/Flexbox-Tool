import Select from '../select/select';
import './controls.sass';
import { flexData } from '../../flexData';
const Controls = () => {

    return (
        <section className="controls">
            <span  className='controls-header'>Container Options :</span>
            <div className='container-options'>
                {
                    flexData.container.map((prop) => {
                        return (<Select
                            key={Object.keys(prop)}
                            name={Object.keys(prop)}
                            prop={prop} />
                                
                         )
                    }
                    )}
            </div>
            <br />
            <span className='controls-header'>Item Options :</span>
            <div className='item-options'>
                {
                    flexData.item.map((prop) => {
                        return (<Select
                            key={Object.keys(prop)}
                            name={Object.keys(prop)}
                            prop={prop} />)
                    }
                    )}

            </div>        </section>
    )
}

export default Controls;