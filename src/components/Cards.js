import { useState, useEffect, React } from 'react';
import { Card } from './Card';
import LoadingBar from 'react-top-loading-bar';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Spinner from './Spinner';


export const Cards = (props) => {

    const myPageNo = useSelector((state) => state.handlePageNo);
    // const [page, setPage] = useState(1);
    const [results, setResults] = useState([]);
    const [totalResult, setTotalResult] = useState(0);
    const [progress, setProgress] = useState(0);
    let location = useLocation();


    // fetching the data through API 
    const fetchData = async () => {
        setProgress(20);
        const uri = `https://api.rawg.io/api/games?key=${props.apiKey}&page=${myPageNo}&page_size=${props.pageSize}&genres=${props.genre}`;
        // const uri = `https://api.rawg.io/api/games?key=22112c2feadd44a5a4a5dec82e74fd95&page=1&page_size=9&genres=action`;
        let data = await fetch(uri);
        let parsedData = await data.json();
        setProgress(50)
        setResults(parsedData.results);
        setTotalResult(parsedData.count);
        setProgress(100)

    }

    // if we fetch 20 card then it would took 500 pages 
    useEffect(() => {
        fetchData();
        // eslint-disable-next-line
    }, [location])

    // fetching next page 
    const fetchNextPage = async () => {
        setProgress(0)
        const uri = `https://api.rawg.io/api/games?key=${props.apiKey}&page=${myPageNo + 1}&page_size=${props.pageSize}&genres=${props.genre}`;
        // setPage(myPageNo + 1);
        setProgress(30)
        let data = await fetch(uri);
        let parsedData = await data.json();
        setProgress(70)
        setResults(parsedData.results);
        setProgress(100)
    }

    // Exctracting the genres of indivisual games 
    const extractGenre = (element) => {
        let gen = [];
        for (let i = 0; i < element.length; i++) {
            gen.push(element[i].name)
        }
        return gen.join(",");
    }

    // cheacking the plateform supported by indivisual game 
    const cheack_icon = (element) => {
        const icon = [];

        for (let i = 0; i < element.length; i++) {
            if (element[i].platform.slug === "playstation") {
                icon.push(<i className="fa-brands fa-playstation fa-2xs" ></i>)
            }
        }

        for (let i = 0; i < element.length; i++) {
            if (element[i].platform.slug === "pc") {
                icon.push(<i className="fa-brands fa-windows fa-2xs"></i>)
            }
        }

        for (let i = 0; i < element.length; i++) {
            if (element[i].platform.slug === "xbox") {
                icon.push(<i className="fa-brands fa-xbox fa-2xs"></i>)
            }
        }
        for (let i = 0; i < element.length; i++) {
            if (element[i].platform.slug === "linux") {
                icon.push(<i className="fa-brands fa-linux fa-2xs"></i>)
            }
        }
        for (let i = 0; i < element.length; i++) {
            if (element[i].platform.slug === "mac") {
                icon.push(<i className="fa-brands fa-apple fa-2xs"></i>)
            }
        }
        return icon
    }

    return (
        <>
            <LoadingBar
                color='#f11946'
                progress={progress}
                onLoaderFinished={() => setProgress(0)}
            />
            <div className="container">
                <div className="heading">
                    <h2>Collections</h2>
                    <p>based on player's interst</p>
                </div>

                <div className="row g-2">
                    {
                        results.map((element) => {
                            return (
                                <div className='col-md-4' key={element.id} >
                                    <Card name={element.name} bg_img={element.background_image} rel_date={element.released} genre={extractGenre(element.genres)} platform_icon={cheack_icon(element.parent_platforms)} key={element.id} />
                                    {/* <Spinner /> */}
                                </div>

                            )
                        })
                    }
                </div>

                {/* <Pagination fetchPageData={fetchPageData} lastPage={totalPage} fetchPrev={fetchPrevPage} fetchNext={fetchNextPage} /> */}
            </div >

        </>
    )
}
