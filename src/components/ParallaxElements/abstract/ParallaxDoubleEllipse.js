import React from 'react';
import titleEllipse from "../../../images/abstractElements/titleEllipse.png";
import {MouseParallax} from "react-just-parallax";
import titleEllipseSmall from "../../../images/abstractElements/titleEllipseSmall.png";

const ParallaxDoubleEllipse = (props) => {
    const {top, right} = props;

    const bigEllipseStyle={
        height: 387,
        position: 'absolute',
        top: top,
        right: right,
    }
    const smallEllipseStyle={
        height: 308,
        position: 'absolute',
        top: top+32,
        right: right+50,
    }

    return (
        <div>
            <MouseParallax strength={0.019} isAbsolutelyPositioned={true} zIndex={-2}>
                <img src={titleEllipse}
                     style={bigEllipseStyle}/>
            </MouseParallax>
            <MouseParallax strength={0.012} isAbsolutelyPositioned={true} zIndex={-1}>
                <img src={titleEllipseSmall}
                     style={smallEllipseStyle}/>
            </MouseParallax>
        </div>
    );
};

export default ParallaxDoubleEllipse;