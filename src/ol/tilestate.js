goog.provide('ol.TileState');

/**
 * @enum {number}
 * @api
 */
ol.TileState = {
  IDLE: 0,
  LOADING: 1,
  LOADED: 2,
  ERROR: 3,
  EMPTY: 4,
  ABORT: 5
};
