import React from 'react';
import pic1 from '../images/panapic1.png'
import './main1.css'
import pic2 from '../images/panapic2.png'
import pic3 from '../images/pic3.png'
import pic4 from '../images/pic4.png'

function Upper(){
    return (
        <div className="heading">
            <h3 className="bold">Making the most of the ever-growing 
                Information Technology
            </h3>
            <div>
                <span className="tablet">
                    <img src={pic1} alt='picture1'></img>
                </span>
                <p className="para">Managed by a team of professional experts with extensive
                    experience and impressive records
                </p>
            </div>
            <div className="dangerous">
            <button >Read More</button>
            </div>
            <div className="main2">
        <span>
        <img src={pic2} alt='picture2' className="picture2"></img>
        <img src={pic3} alt='picture3'className="picture3"></img>
        </span>
        </div>
        <div className="main3">
            <img src={pic4} alt='picture4'></img>
        </div>
    </div>
    );
}

export default Upper;