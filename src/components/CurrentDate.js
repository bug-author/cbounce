import React, { useEffect, useState } from 'react'

export const CurrentDate = () => {

    var [date, setDate] = useState(new Date());

    useEffect(() => {
        let timer = setInterval(() => setDate(new Date()), 1000);

        return function cleanup() {
            // to avoid memory leaks
            clearInterval(timer);
        }
    });

    var month = ["January", "February", "March", "April", "May", "June", "July",
        "August", "September", "October", "November", "December"];

    return (
        <div style={{ color: '#6A6A6A', fontSize: 'small' }}>
            {date.getDate()}, {month[date.getMonth()]} {date.getFullYear()}
        </div>
    )
}
export default CurrentDate;