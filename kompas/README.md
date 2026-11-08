# OpenLayers for Kompas

## Requirements
* Run `npm install` to install NodeJS deps. Errors related to node-gyp and slimmerjs are not crucial.

## Change API - from version 5.3.0
* no changes

## Generate externs
* Externs are copied from v 5.3.0.
* Is necesssary to remove:
    * all constrainedResolution params, typically in olx options
        * olx.ViewOptions
        * olx.interaction.DefaultsOptions
        * olx.interaction.MouseWheelZoomOptions
        * olx.interaction.PinchZoomOptions
        * olx.view.FitOptions
    * ol.View.prototype.constrainResolution
* Is necessary to change:
    * ol.source.ImageWMS.prototype.getGetFeatureInfoUrl -> getFeatureInfoUrl
    * ol.source.TileWMS.prototype.getGetFeatureInfoUrl -> getFeatureInfoUrl
* Is necessary to add:
    * ol.events.Condition
    * params to updated View and Interaction methods
        * olx.ViewOptions
        * olx.interaction.DefaultsOptions
        * olx.interaction.MouseWheelZoomOptions
        * olx.interaction.PinchZoomOptions
        * olx.view.FitOptions

## Generate Single JS file:
* For the first creation:
    * delete `node_modules` folder
    * run `npm install`
* run `$env:WEBPACK_CLI_FORCE_LOAD_ESM_CONFIG="true"`
* run `$env:NODE_OPTIONS="--openssl-legacy-provider"`
* run `npm build-legacy`
* run in bash `npx shx rm -rf kompas/build && mkdir -p kompas/build && cp -a build/legacy/. kompas/build/ && rm -rf kompas/css && mkdir -p kompas/css && mv kompas/build/ol.css kompas/css/ol.css && mv kompas/build/ol.css.map kompas/css/ol.css.map`
