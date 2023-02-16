import React, { useState } from 'react'
import Paginations from './Pagination';

export default function Detail(props) {
    const [currentPage, setCurrentPage] = useState(1);
    const [ datasPerPage,setdataPerPage ] = useState(5);

    const indexOfLastData = currentPage * datasPerPage;
    const indexOfFirstData = indexOfLastData - datasPerPage;
    const currentDatas = props.nobeldata && props.nobeldata.slice(indexOfFirstData, indexOfLastData);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    let Nobeldatadesciption

    let check = 0;

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
            if (props.filteryear == awardYear) {
                check = check + 1;
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

    return (
        <>
            <div className='flex justify-center items-center min-h-[90vh] w-full bg-green-300'>
                <div>{Nobeldatadesciption}
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
