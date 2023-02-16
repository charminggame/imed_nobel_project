import React, { useEffect, useState } from 'react'
import Paginations from './Pagination';

export default function Detail(props) {
    const [currentPage, setCurrentPage] = useState(1);
    const [datasPerPage] = useState(5);

    const indexOfLastData = currentPage * datasPerPage;
    const indexOfFirstData = indexOfLastData - datasPerPage;
    const currentDatas = props.nobeldata && props.nobeldata.slice(indexOfFirstData, indexOfLastData);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    let Nobeldatadesciption

    if (props.nobeldata.length !== 0) {
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
                    {/* <div>{sumprizeAmount}</div> */}
                </div>
            );
        })
    }


    return (
        <>
            <div className='flex justify-center items-center min-h-[90vh] w-full bg-green-300'>
                <div>{Nobeldatadesciption}
                    <Paginations
                        datasPerPage={datasPerPage}
                        totalDatas={props.nobeldata.length}
                        paginate={paginate}
                        className='flex justify-end items-end'
                    />
                </div>
            </div>
        </>
    )
}
