import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Detail from '../components/Detail'
import Filter from '../components/Filter'
import Header from '../components/Header'




export default function Home() {
    const [nobelyear , setnobelyear] = useState();

    const [ nobeldata , setnobeldata ] = useState([]);

    const nobeldetail = async() => {
        await axios.get('https://api.nobelprize.org/2.1/nobelPrizes')
            .then(function (response) {
                console.log(response);
                setnobeldata(response.data.nobelPrizes)
            })
    } 
    useEffect(() => {
        if(nobeldata.length === 0){
            nobeldetail();
    }
    },[])

    let Nobeldatadesciption 
    if(nobeldata.length !== 0)
    Nobeldatadesciption = nobeldata.map((el,i) => {
        // console.log(el);
        const {awardYear,prizeAmount,laureates} = el;
        return (<div key={i}>{awardYear}</div>);
    })

    console.log(nobeldata.length);

    return (
        <div>
            <Header />
            <div className='flex'>
                <Filter />
                <Detail />
                {nobeldata.length === 0 ?  <></>:Nobeldatadesciption}
            </div>
        </div>
    )
}
