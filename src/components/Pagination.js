import { useEffect, React } from 'react';
import { incPage, decPage, updatePageNo } from "../action/index";
import { useSelector, useDispatch } from 'react-redux';
// import { setPageDefault } from "../action/index";

export const Pagination = (props) => {
    const dispatch = useDispatch();
    const myPageNo = useSelector((state) => state.handlePageNo);

    const handleChange = (event) => {
        dispatch(updatePageNo(event.target.value));
    }

    const enterPressed = () => {
        console.log("Enter key pressed");
        props.fetchPageData();
    }

    return (
        <>
            <nav aria-label="Page navigation example my-3" className='my-3'>
                <ul className="pagination-lg pagination justify-content-center">

                    <li className={`page-item ${myPageNo === 1 ? "disabled" : " "} `}>
                        <button className="page-link" onClick={() => { props.fetchPrev(); dispatch(decPage(1)) }}>Previous</button>
                    </li>

                    {/* onChange={(e) => handleChange(e)}  */}
                    <li className="page-item"><a className="page-link" href="/"><input className="page-link page-input" type="number" onClick={(e) => { e.preventDefault(); }} value={myPageNo} onChange={handleChange} onKeyPress={(e) => { if (e.key === "Enter") { enterPressed(); } }} /></a></li>
                    <li className="page-item"><a className="page-link" href="/">of</a></li>
                    {/* <li className="page-item"><a className="page-link" href="/">{props.lastPage()}</a></li> */}
                    <li className="page-item"><a className="page-link" href="/">1111</a></li>

                    <li className="page-item">
                        <button className={`page-link ${myPageNo === 1111 ? "disabled" : ""}`} onClick={() => { props.fetchNext(); dispatch(incPage(1)) }}>Next</button>
                    </li>

                </ul>
            </nav>

        </>
    )
}
