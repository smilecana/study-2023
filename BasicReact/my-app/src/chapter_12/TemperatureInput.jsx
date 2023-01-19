const scaleNames = {
    c: 'Celsius',
    f: 'Fahrenheit'
}

function TemperatureInput(props) {
    const handleChange = (e) => {
        props.onTemperatureChange(e.target.value);
    }

    return (
        <fieldset>
            <legend>Input the temperature (Unit-{scaleNames[props.scale]}):</legend>
            <input value={props.temperature} onChange={handleChange}/>
        </fieldset>
    )
}

export default TemperatureInput;