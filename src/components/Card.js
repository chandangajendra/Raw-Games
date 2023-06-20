import React from 'react'

export const Card = (props) => {
    let { name, bg_img, rel_date, genre, platform_icon } = props;

    return (
        <>
            <div className="container text-center" >
                <div className="row">
                    <div className="col">
                        <div className="card" >
                            <img className='card-img' src={bg_img} alt="asdfds" />
                            <div className="card-dsc">
                                {platform_icon}
                                <h3>{name}</h3>
                                <div className={`card-hover`}>
                                    <div className="row">
                                        <div className="col dsc-left"><h6>Genre</h6></div>
                                        <div className="col dsc-right"><h6>{genre}</h6></div>
                                    </div>
                                    <hr className='dsc-hr' />
                                    <div className="row">
                                        <div className="col dsc-left"><h6>Release Date</h6></div>
                                        <div className="col dsc-right"><h6>{rel_date}</h6></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}
