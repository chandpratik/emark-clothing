import React from 'react';
import { Route } from 'react-router-dom';


import SHOP_DATA from '../../redux/shop/shop.data';

import CollectionPage from '../../pages/collection/collection.component';
import CollectionsOverview from '../../components/collections-overview/collections-overview.components';

const ShopPage = ({ match }) => (
  <div className="shop-page">
    <Route exact path={`${match.path}`} component={CollectionsOverview} />
    <Route
      exact
      path={`${match.path}/:collectionId`}
      component={CollectionPage}
    />
  </div>
);

export default ShopPage;
