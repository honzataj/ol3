# OpenLayers for Kompas

## Requirements
* Run `make check-deps` to ensure that basic dependencies are OK.
* Run `npm install` to install NodeJS deps. Errors related to node-gyp and slimmerjs are not crucial.

## Change API
* Manually tag non-API methods/classes you want to use with @api:
   * ol.view.getResolutionForExtent
   * ol.View.prototype.isDef
   * ol.extent.forEachCorner
   * ol.Image
   * ol.ImageBase.prototype.getState
   * ol.source.Image.defaultImageLoadFunction
   * ol.source.Image.prototype.findNearestResolution
   * ol.source.Image.prototype.getImage
   * ol.DEFAULT_WMS_VERSION
   * ol.Ellipsoid - all to @api
   * ol.ellipsoid.WGS84
   * ol.geom.SimpleGeometry.prototype.getFlatCoordinates
   * ol.geom.SimpleGeometry.prototype.getStride
* Manually create methods for returning private properties and tag with @api:
   * ol.Ellipsoid.prototype.getA 
   * ol.View.prototype.getMinZoom
   * ol.interaction.Draw.prototype.getSketchFeature
   * ol.Map.prototype.getPixelRatio
   * ol.Image.prototype.getSrc 
* Change default values of @define variables in `kompas/config/ol.json`:
   * ol.DEBUG=false
* Manually tag non-API types referred from `src/ol/typedefs.js` with @api
   * this can be done easier in second iteration
* Manually create `src/ol/ellipsoid` with `ellipsoid.js` and `wgs84ellipsoid.js`.

## Generate externs
* Run `node ./tasks/generate-externs.js ./kompas/build/ol.externs.js`
* Remove all occurences of `, undefined: (Object)` from `build/ol.externs.js`
* Manually create `kompas/externs/missing.enum.js` with enumerations.


## Generate single JS file
* Run `node ./tasks/build-ext.js` to generate wrappers of external libraries for compiler.
* Run `node ./tasks/build.js ./kompas/config/ol.json ./kompas/build/ol.js`
* Run `node ./tasks/build.js ./kompas/config/ol-debug.json ./kompas/build/ol-debug.js`


## Modify externs locally
* Solve conflicts in `/kompas/build/ol.externs.js`
* Remove `goog.provide('oltypedefs')` in `src/ol/typedefs.js`
* Generate single JS file again
* Add `goog.provide('oltypedefs')` in `src/ol/typedefs.js`
