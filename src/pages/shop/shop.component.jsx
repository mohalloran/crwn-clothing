import React, {Component} from 'react';
import SHOP_DATA from './shop.data.js';
import CollectionPreview from '../../components/preview-collection/collection-preview.component'

class ShopPage extends Component {

    constructor(props){
        super(props);

        
        this.state = {
            collections: SHOP_DATA
            
        }
    }

    render() {

        const {collections} = this.state;

        console.log('Title is ',collections[0].title)
        console.log('items are ',collections[0].items)
        return (
            <div className='shop-page'>
                {
                    collections.map( ({id, ...otherCollectionProps}) => (
                        <CollectionPreview key={id} {...otherCollectionProps} />
                    ))
                    // collections.map( (collection) => (
                    //     <CollectionPreview title={collection.title} items={collection.items} />
                    // ))
                }
               
            </div>
        )
    }
}

export default ShopPage;
