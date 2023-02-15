import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Detail from '../components/Detail'
import Filter from '../components/Filter'
import Header from '../components/Header'




export default function Home() {
    const [nobelyear, setnobelyear] = useState();

    const [nobeldata, setnobeldata] = useState([]);

    const nobeldetail = async () => {
        await axios.get('https://api.nobelprize.org/2.1/nobelPrizes')
            .then(function (response) {
                console.log(response);
                setnobeldata(response.data.nobelPrizes)
            })
    }
    useEffect(() => {
        if (nobeldata.length === 0) {
            nobeldetail();
        }
    }, [])

    let Nobeldatadesciption
    let laureatesdatamap
    let knownNamefilter
    
    const [ laureatesKnownNamedata,setlaureatesKnownNamedata ] = useState();
    const [ laureatesorgNamedata,setlaureatesorgNamedata ] = useState();

    if (nobeldata.length !== 0)
        Nobeldatadesciption = nobeldata.map((el, i) => {
            const { awardYear, prizeAmount, laureates } = el;
            const laureatesOrgName = laureates
                .filter((g) => g.orgName)
                .map((f) => {
                    setlaureatesorgNamedata(f.orgName.en);
                });
            const laureatesKnownName = laureates
                .filter((g) => g.knownName)
                .map((h) => {
                    console.log(h.knownName.en);
                });
            // laureatesdatamap = laureates.map((eel, i) => {  ทดลอง map laureates
            //     const { knownName, fullName, motivation } = eel;
            //     // console.log(eel)
            //     return (<div key={i}>
            //         {/* {knownName} */}

            //     </div>)
            // })
            return (
                <div key={i}>
                    <div>{awardYear}</div>
                    <div>{prizeAmount}</div>
                    <div>{laureatesKnownName}</div>
                    <div>{laureatesOrgName}</div>
                </div>
            );
        })

    console.log();

    return (
        <div>
            <Header />
            <div className='flex'>
                <Filter />
                <Detail Datanobel={nobeldata.length === 0 ? <></> : Nobeldatadesciption} />
            </div>
        </div>
    )
}
