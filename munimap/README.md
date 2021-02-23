# OpenLayers for Munimap

## Requirements
* Run `npm install` to install NodeJS deps. Errors related to node-gyp and slimmerjs are not crucial.

## Breaking changes
* `ol.externs.js` and `typedefs.js` are not created automatically, it is necessary to update manually and push them to repo

## Change API
* Manually delete `src/ol/ellipsoid` with `ellipsoid.js` and `wgs84ellipsoid.js`.
* Manually delete ol.Image.State from `missing.enum.js` (maybe duplicated) and add ol.ImageState
* Manually tag with @api:
    * ol.extent.createOrUpdate
    * ol.extent.getForViewAndSize
* Manually change `typedefs.js`
   * ol.ImageLoadFunctionType - change typedef from ol.Image to ol.ImageWrapper
   * ol.Attribution - remove all occurrences
   * ol.KMLVec2_ - remove
   * ol.MapOptionsInternal - remove logos and mapRendererPlugin from typedef annotation
   * ol.StyleRenderFunction - remove olx.render.State from typedef annotation
* Manually add property compareFn to `src/ol/source/Cluster.js` and use it in ol.source.Cluster.prototype.cluster 
   ```js
   const features = this.source.getFeatures();
   if (this.compareFn) {
      features.sort(this.compareFn);
   }
   ```

## Generate externs
* Externs are copied from v 4.6.4.
* Manually create (copy end edit a definition from ol source code):
   * ol.ImageWrapper
   * ol.sphere.getDistance
   * ol.sphere.getArea
   * ol.sphere.getLength
   * ol.View.prototype.getResolutionForExtent
   * ol.View.prototype.getResolutionForZoom
   * ol.View.prototype.getZoomForResolution
   * ol.View.prototype.animate
   * olx.view.AnimateOptions
   * ol.PluggableMap - also add all prototype functions
   * EsriJSON - copy all objects from elder ol version (from externs folder)
   * TileJSON - copy all objects from elder ol version (from externs folder)
* Manually remove:
   * ol.Attribution
   * ol.proj.setProj4
   * ol.source.xxx > .getAttributions() - remove all occurrences of getAttributions() on ol.source.xxx files
   * ol.Sphere.prototype.geodesicArea, .harvesineDistance
   * olx.AttributionOptions
* Manually change:
   * ol.geom.Polygon.circular - remove sphere param and add opt_sphereRadius
   * ol.ImageBase - remove ol.Attribution
   * ol.source.BingMaps.TOS_ATTRIBUTION - change type to string
   * ol.source.OSM.ATTRIBUTION - change type to string
   * ol.Sphere - change to ol.sphere, remove constructor and param, add type
   * ol.View.prototype.calculateExtent - change size to opt_size
   * ol.View.prototype.fit - remove size from param and add to opts
   * olx.source.ImageArcGISRestOptions - change `Array<ol.Attribution>` to `ol.AttributionLike`
   * olx.view.FitOptions - add all other params
   * ol.geom.GeometryCollection.prototype.applyTransform - add params
   * ol.geom.GeometryCollection.prototype.translate - add params
   * ol.geom.SimpleGeometry.prototype.applyTransform - add params
   * ol.geom.SimpleGeometry.prototype.translate - add params
   
   

## Generate single JS file
* run into root folder 
    * `rm -rf build && rm -rf build/ol && mkdir -p build && npx buble --input src/ol --output build/ol --no modules --sourcemap && cp src/ol/ol.css build/ol/ol.css && node tasks/prepare-package && cp README.md build/ol && node tasks/generate-index && npx webpack --config config/webpack-config-legacy-build.js && npx cleancss --source-map src/ol/ol.css -o build/legacy/ol.css`
    * `rm -rf munimap/build && mkdir -p munimap/build && cp build/legacy/ol.js munimap/build/ol.js && cp build/legacy/ol.js.map munimap/build/ol.js.map && rm -rf munimap/css && mkdir -p munimap/css && cp build/legacy/ol.css munimap/css/ol.css && cp build/legacy/ol.css.map munimap/css/ol.css.map`
* remove source-mapping tag from ol.css