import Select from '../select/select';
import './controls.sass';
const Controls = () => {
    const flexDirections = ['row', 'column', 'row-reverse', 'column-reverse']
    return (
        <section className="controls">

            <Select name="flex-direction" options={flexDirections} />
            <Select name="flex-direction" options={flexDirections} />
            <Select name="flex-direction" options={flexDirections} />
            <Select name="flex-direction" options={flexDirections} />
            <Select name="flex-direction" options={flexDirections} />
            <Select name="flex-direction" options={flexDirections} />
            <Select name="flex-direction" options={flexDirections} />
            <Select name="flex-direction" options={flexDirections} />
            <Select name="flex-direction" options={flexDirections} />
            <Select name="flex-direction" options={flexDirections} />

        </section>
    )
}

export default Controls;