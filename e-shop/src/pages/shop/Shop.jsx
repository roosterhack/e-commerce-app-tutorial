import React, { useState } from "react";
import SHOP_DATA from "./shopData";
import { CollectionPreview } from "../../components/collection-preview/collection-preview.component";

export const Shop = () => {
  const [collections, setCollections] = useState(SHOP_DATA);

  return (
    <div className="shop-page">
      {collections.map(({ id, ...restCollectionProps }) => (
        <CollectionPreview key={id} {...restCollectionProps} />
      ))}
    </div>
  );
};
