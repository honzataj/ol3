goog.provide('ol.source.WMTSRequestEncoding');

/**
 * Request encoding. One of 'KVP', 'REST'.
 * @enum {string}
 * @api
 */
ol.source.WMTSRequestEncoding = {
  KVP: 'KVP',  // see spec §8
  REST: 'REST' // see spec §10
};
