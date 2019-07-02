import Ellipsoid from 'Ellipsoid.js'


/**
 * @const
 * @type {ol.Ellipsoid}
 * @api
 */
const EllipsoidWGS84 = new Ellipsoid(6378137, 1 / 298.257223563);

export default EllipsoidWGS84;