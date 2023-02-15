import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function Detail(props) {
        const [ data,setdata ] = useState([]);

        return (
        <>
            <div className='flex justify-center items-center h-[90vh] w-full bg-green-300'>
                <div>{props.Datanobel}</div>
            </div>
        </>
    )
}
