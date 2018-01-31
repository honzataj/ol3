# OpenLayers for Munimap

## Requirements
* Run `make check-deps` to ensure that basic dependencies are OK.
* Run `npm install` to install NodeJS deps. Errors related to node-gyp and slimmerjs are not crucial.

## Change API
* Manually tag non-API methods/classes you want to use with @api:
   * ol.extent.getArea
   * ol.extent.getEnlargedArea
   * ol.extent.getForViewAndSize
   * ol.geom.Geometry#containsXY
* Change default values of @define variables in `munimap/config/ol.json`:
   * ol.DEBUG=false
   * ol.ENABLE_IMAGE=false
   * ol.ENABLE_PROJ4JS=false
   * ol.ENABLE_RASTER_REPROJECTION=false
   * ol.ENABLE_VECTOR_TILE=false
   * ol.ENABLE_WEBGL=false
* Do some changes:
   * ol.source.Cluster
   * ol.source.Cluster.CompareFunction
   * olx.source.ClusterOptions
* Manually tag non-API types referred from `src/ol/typedefs.js` with @api
   * this can be done easier in second iteration

## Generate externs
* Run `node ./tasks/generate-externs.js ./munimap/build/ol.externs.js`
* Remove all occurences of `, undefined: (Object)` from `build/ol.externs.js`
* Manually create `munimap/externs/missing.enum.js` with enumerations.
* Manually fix issues related to inheritDoc:
   * ol.geom.Point#intersectsExtent

## Generate single JS file
* Run `node ./tasks/build-ext.js` to generate wrappers of external libraries for compiler.
* Run `node ./tasks/build.js ./munimap/config/ol.json ./munimap/build/ol.js`
* Run `node ./tasks/build.js ./munimap/config/ol-debug.json ./munimap/build/ol-debug.js`

## Modify externs locally
* Solve conflicts in `/munimap/build/ol.externs.js`
* Remove `goog.provide('oltypedefs')` in `src/ol/typedefs.js`
* Generate single JS file again
* Add `goog.provide('oltypedefs')` in `src/ol/typedefs.js`