import React, { useEffect, useState } from 'react'
import Paginations from './Pagination';

export default function Detail(props) {
    const [currentPage, setCurrentPage] = useState(1);
    const [datasPerPage, setdataPerPage] = useState(5);
    console.log(currentPage)

    const indexOfLastData = currentPage * datasPerPage;
    const indexOfFirstData = indexOfLastData - datasPerPage;
    const currentDatas = props.nobeldata && props.nobeldata.slice(indexOfFirstData, indexOfLastData);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    let Nobeldatadesciption

    let check = 0;

    const prizeAmountdata = [];

    let prizeAmountfilter
    let sumprizeAmount

    if (props.nobeldata.length != 0) {
        Nobeldatadesciption = currentDatas.map((el, i) => {
            const { awardYear, prizeAmount, laureates, categoryFullName } = el;
            const laureatesOrgName = laureates
                .filter((g) => g.orgName)
                .map((f, i) => {
                    return (<div key={i}>{f.orgName.en}</div>)
                });
            const laureatesKnownName = laureates
                .filter((g) => g.knownName)
                .map((h, i) => {
                    return (<div key={i}>{h.knownName.en}</div>)
                });
            const laureatesmotivation = laureates
                .filter((g) => g.motivation)
                .map((h, i) => {
                    return (<div key={i}>{h.motivation.en}</div>)
                });
            prizeAmountfilter = currentDatas
                .filter((p) => p.prizeAmount)
                .map((k, i) => {
                    prizeAmountdata.push(k.prizeAmount);
                    return (<></>)
                })

            const sum = 0;

            if (props.filteryear == awardYear) {
                check = check + 1;
                if (check == 5) {
                    sumprizeAmount = prizeAmountdata.reduce(
                        (accumulator, currentValue) => accumulator + currentValue,
                        sum
                    );
                }

                return (
                    <div key={i}>
                        <div className='flex'>
                            <div className='w-[7%]'>{awardYear}</div>
                            <div className='w-[10%]'>{categoryFullName.en}</div>
                            <div className='w-[20%] relative'>{laureatesKnownName}
                                <div>{laureatesOrgName}</div>
                            </div>
                            <div className='w-[48%]'>{laureatesmotivation}</div>
                        </div>
                    </div>
                );
            } else if (props.filteryear == 0) {
                sumprizeAmount = prizeAmountdata.reduce(
                    (accumulator, currentValue) => accumulator + currentValue,
                    sum
                );
                return (
                    <div key={i}>
                        <div className='flex'>
                            <div className='w-[7%]'>{awardYear}</div>
                            <div className='w-[10%]'>{categoryFullName.en}</div>
                            <div className='w-[20%] relative'>{laureatesKnownName}
                                <div>{laureatesOrgName}</div>
                            </div>
                            <div className='w-[48%]'>{laureatesmotivation}</div>
                        </div>
                    </div>
                );
            }

        })
    }

    useEffect(() => {
        setCurrentPage(1)
        if (check == 5) {
            const p = prizeAmountfilter;
        }
        sumprizeAmount = 0;
    }, [props.filteryear])

    return (
        <>
            <div className='flex justify-center items-center min-h-[90vh] w-full bg-green-300'>
                <div>{Nobeldatadesciption}
                    <div className='text-xl text-rose-600'>prizeamount total {sumprizeAmount}</div>
                    <Paginations
                        datasPerPage={datasPerPage}
                        totalDatas={props.nobeldata.length}
                        check={check}
                        paginate={paginate}
                        setdataPerPage={setdataPerPage}
                        className='flex justify-end items-end'
                    />
                </div>
            </div>
        </>
    )
}
