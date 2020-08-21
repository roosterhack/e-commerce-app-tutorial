import { SHOP_DATA } from './shop.data';

const INITIAL_STATE = {
  collections: SHOP_DATA,
};

export const COLLECTION_ID_MAP = {
  hats: 1,
  sneakers: 2,
  jackets: 3,
  womens: 4,
  mens: 5,
};

export const shopReducer = (state = INITIAL_STATE, { type }) => {
  switch (type) {
    default:
      return state;
  }
};
