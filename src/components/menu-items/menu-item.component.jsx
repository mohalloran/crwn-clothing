import React from 'react';
import './menu-item.styles.scss';
import { withRouter } from 'react-router-dom';

const MenuItem = ({title,imageUrl, linkUrl, size, history, match}) => {

    console.log('match is ',match.url);
    console.log('link url is ',linkUrl);
    return (
        <div className={`menu-item ${size}`} onClick={() => history.push(`${match.url}${linkUrl}`)}>
           <div className='background-image' style={{backgroundImage:`url(${imageUrl})` }} />
 
            <div className='content'>
                <h1 className='title'>{title.toUpperCase()}</h1>
                    <span className='subtitle'>SHOP NOW</span>
                
            </div>
        </div>
       
    )
}
//withRouter will return a MenuItem Component with the History object injected .
export default withRouter(MenuItem);