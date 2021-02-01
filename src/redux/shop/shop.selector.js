import { createSelector } from 'reselect';

//maps the String value to the Integer value
const COLLECTION_ID_MAP = {
    hats:1,
    sneakers: 2,
    jackets: 3,
    womens: 4,
    mens: 5
}

const selectShop = (state) => state.shop;

export const selectShopItems = createSelector(
    [selectShop],
    (shop) => shop
)

export const selectCollections = createSelector(
    [selectShop],
    (shop) => shop
)

export const selectCollectionsAsArray =  
  createSelector(
    [selectCollections],
    (collections) => Object.values(collections)
 )

//selector takes parameter collectionUrlParam and createSelector takes
//state as a parameter and passes it to other input selectors
export const selectCollection = (collectionUrlParam) => 
  createSelector(
      [selectCollections],
      (collections) => collections[collectionUrlParam]
      //(collections) => collections.find( (collection) => collection.id === COLLECTION_ID_MAP[collectionUrlParam])
  )

  
