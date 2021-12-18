import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Button = () => {
    const arr = [{id: 1}, {id: 2}, {id: 3}];
    const [pick, setPick] = useState(arr);
    const [select, setSelect] = useState([]);

    return (
        pick.map((item) => (
            console.log(item, pick, select),
            <button
                key={item.id}
                onClick={() => {
                !select.includes(item.id)
                    ? setSelect((select) => [...select, item.id])
                    : setSelect(select.filter((button) => button !== item.id));
                }}
                className={
                select.includes(item.id)
                    ? "button table_btn_s"
                    : "button table_btn_ns"
                }
            >
                선택
            </button>

        ))
    )
}


export default Button;