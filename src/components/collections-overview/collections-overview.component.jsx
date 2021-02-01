import React from 'react';
import { connect } from 'react-redux';
import CollectionPreview from '../../components/preview-collection/collection-preview.component'
import { selectCollections } from '../../redux/shop/shop.selector';
import { selectCollectionsAsArray} from '../../redux/shop/shop.selector';



import './collections-overview.styles.scss';

const CollectionsOverview = ({collections}) => {
    return (
        <div className='collections-overview'>
            {collections.map( ({id, ...otherCollectionProps}) => (
                <CollectionPreview key={id} {...otherCollectionProps} />
        ))}
        </div>
        
    )
}

const mapStateToProps = (state) => {
    console.log('CollectionsAsArray is:',selectCollectionsAsArray(state));
    return {
        collections: selectCollectionsAsArray(state)
        
    }
}

export default connect(mapStateToProps, null)(CollectionsOverview)