# OpenLayers for Kompas

## Requirements
* Run `make check-deps` to ensure that basic dependencies are OK.
* Run `npm install` to install NodeJS deps. Errors related to node-gyp and slimmerjs are not crucial.
* Install `acorn` if it's not installed in npm.

## Change API - from version 4.6.5
* Manually delete `src/ol/ellipsoid` with `ellipsoid.js` and `wgs84ellipsoid.js`.
* Manually delete ol.Image.State from `missing.enum.js`
* Manually create methods for returning private properties and tag with @api:
   * ol.ImageWrapper.getSrc
* Manually tag with @api:
    *ol.interaction.Draw.prototype.getOverlay
* Manually change `typedefs.js`
   * ol.ImageLoadFunctionType - change typedef from ol.Image to ol.ImageWrapper

## Generate externs
* Externs are copied from v 4.6.5.
* Is necesssary to remove:
    * ol.interaction.Draw.prototype.getSketchFeature
    * ol.ellipsoid and all prototype methods
    * ol.ellipsoid.Ellipsoid and all prototype methods
    * ol.ellipsoid.EllipsoidWGS84
    * ol.format.EsriJSON and all prototype methods
    * ol.proj.setProj4
    * ol.source.TileJSON and all prototype methods
    * ol.source.TileUTFGrid and all prototype methods
    * all prototype methods from ol.Sphere
    * olx.source.TileUTFGridOptions
    * olx.source.TileJSONOptions
* Is necessary to change:
    * ol.geom.Polygon.circular - new parameter
    * ol.Image to ol.ImageWrapper
    * ol.source.Image.defaultImageLoadFunction - param ol.Image to ol.ImageWrapper
    * ol.source.Image.Event - param ol.Image to ol.ImageWrapper
    * ol.source.Image.Event.prototype.image - param ol.Image to ol.ImageWrapper
    * ol.Sphere to ol.sphere
* Is necessary to add:
    * ol.interaction.Draw.prototype.getOverlay
    * ol.sphere.getDistance
    * ol.sphere.getLength
    * ol.sphere.getArea
    * ol.sphere.offset

## Generate Single JS file:
* run `rm -rf build && rm -rf build/ol && mkdir -p build && npx buble --input src/ol --output build/ol --no modules --sourcemap && cp src/ol/ol.css build/ol/ol.css && node tasks/prepare-package && cp README.md build/ol && node tasks/generate-index && npx webpack --config config/webpack-config-legacy-build.js && npx cleancss --source-map src/ol/ol.css -o build/legacy/ol.css`
* run `rm -rf kompas/build && mkdir -p kompas/build && cp build/legacy/ol.js kompas/build/ol.js && cp build/legacy/ol.js.map kompas/build/ol.js.map && rm -rf kompas/css && mkdir -p kompas/css && cp build/legacy/ol.css kompas/css/ol.css && cp build/legacy/ol.css.map kompas/css/ol.css.map`
