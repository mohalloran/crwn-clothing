import React from 'react';
import {connect} from 'react-redux';
import {selectDirectorySections} from '../../redux/directory/directory.selector';
import MenuItem from '../menu-items/menu-item.component';
import './directory.styles.scss';

const Directory = ({sections}) => {

        return (
                <div className='directory-menu'>
                   {
                       sections.map( ({title, imageUrl, id,linkUrl, size})  => (
                             <MenuItem key={id} title={title} imageUrl={imageUrl} linkUrl={linkUrl} size={size}/>
                       ))
                   }
                        
                </div>
        ) 
}

const mapStateToProps = (state) => {
    return {
        sections: selectDirectorySections(state)
    }
}

export default connect(mapStateToProps, null)(Directory);