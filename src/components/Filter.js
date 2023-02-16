import React from 'react'


export default function Filter(props) {
    let showyear
    let check = 0;

    if (props.nobeldata.length !== 0) {
        showyear = props.nobeldata && props.nobeldata
            .map((el, i) => {
                const { awardYear } = el
                if (check != awardYear) {
                    check = awardYear
                    return (
                        <option value={awardYear} key={i} >{awardYear}</option>
                    )
                }
            })
    }

    function handleChange(event) {
        props.setyear(event.target.value);
      }

    return (<>
        <div className='flex justify-center items-center h-[90vh] w-[20rem] bg-blue-300'>
            <div>
                <select onChange={handleChange} >
                <option value='0'>-</option>
                    {showyear}
                </select>
            </div>
        </div>
    </>

    )
}
