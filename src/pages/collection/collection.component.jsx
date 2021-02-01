import React from 'react';
import { connect } from 'react-redux';
import { selectCollection } from '../../redux/shop/shop.selector';
import CollectionItem from '../../components/collection-item/collection-item.components';
import './collection.styles.scss';

const CollectionPage = ({ collection }) => {
    
    const { title, items } = collection;

    return (
        <div className='collection-page'>
            <h2 className='title'>{title}</h2>
            <div className='items'>
                {
                    items.map( (item) => <CollectionItem key={item.id} item={item} /> )
                }
            </div>
        </div>
    )
}

const mapStateToProps = (state, props) => {
   //props.match.param.collectionId parameter collectionId in URL
   //selectCollection takes a parameter props.match.param.collectionId and
   //createSelector takes state as a parameter and input selectors are called
   //with it .
   return {
       collection: selectCollection(props.match.params.collectionId)(state),
   }
}

export default connect(mapStateToProps)(CollectionPage);