import React from 'react';
import { useSelector } from 'react-redux';
import { COLLECTION_ID_MAP } from '../../redux/shop/shop.reducer';

import CollectionItem from '../../components/collection-item/collection-item.component';

import './collection.styles.scss';

export const CollectionPage = ({ match }) => {
  const collections = useSelector((state) => state.shop.collections);
  const correctCollection = collections[match.params.collectionId];
  const { title, items } = correctCollection;


  return (
    <div className='collection-page'>
    
       <h2 className='title'>{title}</h2>
       <div className='items'>
         {correctCollection && 
          items.map((item) => <CollectionItem key={item.id} item={item} />)}
       </div>
     </div>
  );
};
