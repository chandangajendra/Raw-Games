import React from 'react'
import { useState } from 'react';

export const Pagination = (props) => {

    return (
        <>
            <nav aria-label="Page navigation example my-3" className='my-3'>
                <ul className="pagination-lg pagination justify-content-center">
                    <li className={`page-item ${props.pageNo === 1 ? "disabled" : " "} `}>
                        <button className="page-link" onClick={() => { props.fetchPrev(); }}>Previous</button>
                    </li>
                    {/* onChange={(e) => handleChange(e)} onKeyPress={(e) =>{if (e.key === "Enter") {enterPressed();}}} */}
                    <li className="page-item"><a className="page-link" href="/"><input className="page-link page-input" type="number" onClick={(e) => { e.preventDefault(); }} value={props.pageNo} /></a></li>
                    <li className="page-item"><a className="page-link" href="/">of</a></li>
                    <li className="page-item"><a className="page-link" href="/">{props.lastPage()}</a></li>

                    <li className="page-item">
                        <button className={`page-link ${props.pageNo === props.lastPage() ? "disabled" : " "}`} onClick={() => { props.fetchNext() }}>Next</button>
                    </li>
                </ul>
            </nav>
        </>
    )
}
