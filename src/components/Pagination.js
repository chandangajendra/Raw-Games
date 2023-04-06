import React from 'react'

export const Pagination = (props) => {

    return (
        <>
            <nav aria-label="Page navigation example my-3" className='my-3'>
                <ul className="pagination-lg pagination justify-content-center">
                    {/* condition ? exprIfTrue : exprIfFalse */}
                    <li className={`page-item ${props.pageNo === 1 ? "disabled" : " "} `}>
                        <button className="page-link" onClick={() => { props.fetchPrev() }}>Previous</button>

                    </li>
                    {/* <li className="page-item active "><a className="page-link Secondary" href="#">1</a></li> */}
                    <li className="page-item"><a className="page-link" href="#">{props.pageNo}</a></li>
                    <li className="page-item"><a className="page-link" href="#">of</a></li>
                    <li className="page-item"><a className="page-link" href="#">{props.lastPage()}</a></li>

                    <li className="page-item">
                        <button className={`page-link ${props.pageNo === props.lastPage() ? "disabled" : " "}`} onClick={() => props.fetchNext()}>Next</button>
                    </li>
                </ul>
            </nav>
        </>
    )
}
