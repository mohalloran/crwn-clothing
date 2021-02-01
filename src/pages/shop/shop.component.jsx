import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import {selectShopItems} from '../../redux/shop/shop.selector'
import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';

//match ,location, history available to us
const ShopPage = ({ match }) => {
    console.log('Match Path is:',match.path);

    //Match /shop/param   param is the collectionId
    //<Route path={`${match.path}/:collectionId`} component={ CollectionPage } />

    return (
            <div className='shop-page'>
                <Route exact path={`${match.path}`} component={ CollectionsOverview } />
                <Route path={`${match.path}/:collectionId`} component={ CollectionPage } />
            </div>
    )
    
}

const mapStateToProps = (state) => {
   return {
       collections: selectShopItems(state),
       
   }
}

export default connect(mapStateToProps,null)(ShopPage);
