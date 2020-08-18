import React from 'react';
import { useSelector } from 'react-redux';

import CollectionPreview from '../../components/collection-preview/collection-preview';

const ShopPage = () => {
  const collections = useSelector((state) => state.shop.collections);
  return (
    <div className='shop-page'>
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
};

export default ShopPage;
