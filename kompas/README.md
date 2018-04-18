# OpenLayers for Kompas

## Requirements
* Run `make check-deps` to ensure that basic dependencies are OK.
* Run `npm install` to install NodeJS deps. Errors related to node-gyp and slimmerjs are not crucial.

## Change API
* Manually tag non-API methods/classes you want to use with @api:
   * ol.PluggableMap
   * ol.geom.Geometry.prototype.intersectExtent 
   * ol.geom.Point.prototype.intersectExtent
   * ol.geom.SimpleGeometry.prototype.setCoordinates
   * ol.geom.Point.prototype.setCoordinates
* Manually create `src/ol/ellipsoid` with `ellipsoid.js` and `wgs84ellipsoid.js`.
* Manually create methods for returning private properties and tag with @api:
   * ol.Ellipsoid.prototype.getA 
   * ol.PluggableMap.prototype.getPixelRatio
* Manually remove/comment 
   * ol.layer.VectorTile.prototype.getSource
* Manually remove @api:
   * ol.proj.units.METERS_PER_UNIT 
* Change default values of @define variables in `kompas/config/ol.json`:
   * ol.DEBUG_WEBGL=false
* Manually tag non-API types referred from `src/ol/typedefs.js` with @api
   * this can be done easier in second iteration

## Generate externs
* Run `node ./tasks/generate-externs.js ./kompas/build/ol.externs.js`
* Remove all occurences of `, undefined: (Object)` from `build/ol.externs.js`
* Manually create `kompas/externs/missing.enum.js` with enumerations - for ol v.4.6.5 add:
   * ol.style.IconAnchorUnits
   * ol.style.IconOrigin
   * ol.TileState
   * ol.proj.Units
   * ol.proj.Units.METERS_PER_UNIT 
   * ol.control.ScaleLineUnits
   * ol.ImageState
   * ol.OverlayPositioning
   * ol.source.WMTSRequestEncoding
   * ol.style.TextPlacement
   * ol.format.IGCZ
   * ol.source.rasterOperationType 
 

## Generate single JS file
* Run `node ./tasks/build-ext.js` to generate wrappers of external libraries for compiler.
* Run `node ./tasks/build.js ./kompas/config/ol.json ./kompas/build/ol.js`
* Run `node ./tasks/build.js ./kompas/config/ol-debug.json ./kompas/build/ol-debug.js`


## Modify externs locally
* Solve conflicts in `/kompas/build/ol.externs.js`
* Remove `goog.provide('oltypedefs')` in `src/ol/typedefs.js`
* Generate single JS file again
* Add `goog.provide('oltypedefs')` in `src/ol/typedefs.js`
