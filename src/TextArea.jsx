import React from 'react';
import { useState, useEffect } from 'react';

const TextArea = ({ layout, components }) => {
    // console.log(layout, components);
    const [fullObject, setFullObject] = useState({});

    useEffect(() => {
        console.log("h")
        const value = {
            'layout': layout,
        };
        const pretty = JSON.stringify(value, undefined, 2);
        setFullObject(pretty);
        console.log(fullObject);
    });

    return (
        <div>
            <h4>Full Object Data:</h4>
            <textarea defaultValue={fullObject} name="" id="" cols="50" rows="80" />
        </div>
    );
};

export default TextArea;