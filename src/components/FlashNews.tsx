import React from 'react';
import Marquee from './Marquee';
import "../css/home.css"; 

const FlashNews: React.FC = () => {
    return (
        <div className="flash-news pt-24 ">
            <div className="row">
                <div className="truncate">
                    <center>
                        {/* <p className="contentfont">FLASH NEWS<i className="material-icons right"></i></p> */}
                    </center>
                </div>
                <div className="body">
                    <Marquee>
                    </Marquee>
                </div>
            </div>
        </div>
    );
};

export default FlashNews;
