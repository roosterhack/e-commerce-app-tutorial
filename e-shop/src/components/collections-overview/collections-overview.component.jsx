import React from 'react';
import { useSelector } from 'react-redux';
import CollectionPreview from '../../components/collection-preview/collection-preview';

import './collections-overview.styles.scss';

export const CollectionsOverview = () => {
  const collections = useSelector((state) => state.shop.collections);
  return (
    <div className='collections-overview'>
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
};
