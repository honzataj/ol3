/**
 * @enum {number}
 */
ol.Image.State = {
  IDLE: 0,
  LOADING: 1,
  LOADED: 2,
  ERROR: 3
};


/**
 * Overlay position: `'bottom-left'`, `'bottom-center'`,  `'bottom-right'`,
 * `'center-left'`, `'center-center'`, `'center-right'`, `'top-left'`,
 * `'top-center'`, `'top-right'`
 * @enum {string}
 */
ol.Overlay.Positioning = {
  BOTTOM_LEFT: 'bottom-left',
  BOTTOM_CENTER: 'bottom-center',
  BOTTOM_RIGHT: 'bottom-right',
  CENTER_LEFT: 'center-left',
  CENTER_CENTER: 'center-center',
  CENTER_RIGHT: 'center-right',
  TOP_LEFT: 'top-left',
  TOP_CENTER: 'top-center',
  TOP_RIGHT: 'top-right'
};


/**
 * Raster operation type. Supported values are `'pixel'` and `'image'`.
 * @enum {string}
 */
ol.RasterOperationType = {
  PIXEL: 'pixel',
  IMAGE: 'image'
};


/**
 * Units for the scale line. Supported values are `'degrees'`, `'imperial'`,
 * `'nautical'`, `'metric'`, `'us'`.
 * @enum {string}
 */
ol.control.ScaleLine.Units = {
  DEGREES: 'degrees',
  IMPERIAL: 'imperial',
  NAUTICAL: 'nautical',
  METRIC: 'metric',
  US: 'us'
};


/**
 * IGC altitude/z. One of 'barometric', 'gps', 'none'.
 * @enum {string}
 */
ol.format.IGC.Z = {
  BAROMETRIC: 'barometric',
  GPS: 'gps',
  NONE: 'none'
};


/**
 * The coordinate layout for geometries, indicating whether a 3rd or 4th z ('Z')
 * or measure ('M') coordinate is available. Supported values are `'XY'`,
 * `'XYZ'`, `'XYM'`, `'XYZM'`.
 * @enum {string}
 */
ol.geom.GeometryLayout = {
  XY: 'XY',
  XYZ: 'XYZ',
  XYM: 'XYM',
  XYZM: 'XYZM'
};


/**
 * The geometry type. One of `'Point'`, `'LineString'`, `'LinearRing'`,
 * `'Polygon'`, `'MultiPoint'`, `'MultiLineString'`, `'MultiPolygon'`,
 * `'GeometryCollection'`, `'Circle'`.
 * @enum {string}
 */
ol.geom.GeometryType = {
  POINT: 'Point',
  LINE_STRING: 'LineString',
  LINEAR_RING: 'LinearRing',
  POLYGON: 'Polygon',
  MULTI_POINT: 'MultiPoint',
  MULTI_LINE_STRING: 'MultiLineString',
  MULTI_POLYGON: 'MultiPolygon',
  GEOMETRY_COLLECTION: 'GeometryCollection',
  CIRCLE: 'Circle'
};


/**
 * Projection units: `'degrees'`, `'ft'`, `'m'`, `'pixels'`, `'tile-pixels'` or
 * `'us-ft'`.
 * @enum {string}
 */
ol.proj.Units = {
  DEGREES: 'degrees',
  FEET: 'ft',
  METERS: 'm',
  PIXELS: 'pixels',
  TILE_PIXELS: 'tile-pixels',
  USFEET: 'us-ft'
};


/**
 * Available renderers: `'canvas'` or `'webgl'`.
 * @enum {string}
 */
ol.renderer.Type = {
  CANVAS: 'canvas',
  WEBGL: 'webgl'
};


/**
 * State of the source, one of 'undefined', 'loading', 'ready' or 'error'.
 * @enum {string}
 */
ol.source.State = {
  UNDEFINED: 'undefined',
  LOADING: 'loading',
  READY: 'ready',
  ERROR: 'error'
};


/**
 * Available server types: `'carmentaserver'`, `'geoserver'`, `'mapserver'`,
 *     `'qgis'`. These are servers that have vendor parameters beyond the WMS
 *     specification that OpenLayers can make use of.
 * @enum {string}
 */
ol.source.WMSServerType = {
  CARMENTA_SERVER: 'carmentaserver',
  GEOSERVER: 'geoserver',
  MAPSERVER: 'mapserver',
  QGIS: 'qgis'
};


/**
 * Request encoding. One of 'KVP', 'REST'.
 * @enum {string}
 */
ol.source.WMTS.RequestEncoding = {
  KVP: 'KVP',  // see spec §8
  REST: 'REST' // see spec §10
};


/**
 * Icon anchor units. One of 'fraction', 'pixels'.
 * @enum {string}
 */
ol.style.Icon.AnchorUnits = {
  FRACTION: 'fraction',
  PIXELS: 'pixels'
};


/**
 * Icon origin. One of 'bottom-left', 'bottom-right', 'top-left', 'top-right'.
 * @enum {string}
 */
ol.style.Icon.Origin = {
  BOTTOM_LEFT: 'bottom-left',
  BOTTOM_RIGHT: 'bottom-right',
  TOP_LEFT: 'top-left',
  TOP_RIGHT: 'top-right'
};
