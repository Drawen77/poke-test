import React, { useState } from "react";




const Select = (props) => {

    const { getNumberOfPok } = props;

    const [finalValue, setFinalValue] = useState('151');

    return (
        <label>Pokemons on the screen&nbsp;
            <select onChange={(e) => { setFinalValue(e.target.value) }} onClick={() => getNumberOfPok(finalValue)}>
                <option value={151} >1st Gen</option>
                <option value={100}>100</option>
                <option value={50}>50</option>
                <option value={20} >20</option>
                <option value={10}>10</option>
                <option value={1000}>All</option>
            </select >
        </label >
    )
}

export default Select;