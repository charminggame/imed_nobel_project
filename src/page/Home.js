import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Detail from '../components/Detail'
import Filter from '../components/Filter'
import Header from '../components/Header'




export default function Home() {
    const [nobeldata, setnobeldata] = useState([]);
    const [ filteryear,setfilteryear ] = useState(0);
 
    const nobeldetail = async () => {
        await axios.get('https://api.nobelprize.org/2.1/nobelPrizes')
            .then(function (response) {
                setnobeldata(response.data.nobelPrizes)
            })
    }
    useEffect(() => {
            nobeldetail();       
    }, [])

    return (
        <div>
            <Header />
            <div className='flex'>
                <Filter nobeldata={nobeldata} setyear={setfilteryear}/>
                <Detail nobeldata={nobeldata} filteryear={filteryear}/>
            </div>
        </div>
    )
}
