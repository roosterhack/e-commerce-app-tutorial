import React, { useEffect, useState } from 'react';
import { Route } from 'react-router-dom';
import { CollectionPage } from '../collection/Collection.component';

import { CollectionsOverview } from '../../components/collections-overview/collections-overview.component';
import {
  firestore,
  convertCollectionsSnapshotToMap,
} from '../../firebase/firebase.utils';

const ShopPage = ({ match }) => {
  const unsubscribeFromSnapshot = null;

  useEffect(() => {
    const collectionRef = firestore.collection('collections');
    collectionRef.onSnapshot(async (snapshot) => {
      convertCollectionsSnapshotToMap(snapshot);
    });
  }, []);

  return (
    <div className='shop-page'>
      <Route exact path={`${match.path}`} component={CollectionsOverview} />
      <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
    </div>
  );
};

export default ShopPage;
