/**
 * @module ol/renderer/webgl/defaultmapshader
 */
// This file is automatically generated, do not edit.
// Run `make shaders` to generate, and commit the result.

import {DEBUG_WEBGL} from '../../index.js';
import WebGLFragment from '../../webgl/Fragment.js';
import WebGLVertex from '../../webgl/Vertex.js';

export const fragment = new WebGLFragment(DEBUG_WEBGL ?
  'precision mediump float;\nvarying vec2 v_texCoord;\n\n\nuniform float u_opacity;\nuniform sampler2D u_texture;\n\nvoid main(void) {\n  vec4 texColor = texture2D(u_texture, v_texCoord);\n  gl_FragColor.rgb = texColor.rgb;\n  gl_FragColor.a = texColor.a * u_opacity;\n}\n' :
  'precision mediump float;varying vec2 a;uniform float f;uniform sampler2D g;void main(void){vec4 texColor=texture2D(g,a);gl_FragColor.rgb=texColor.rgb;gl_FragColor.a=texColor.a*f;}');

export const vertex = new WebGLVertex(DEBUG_WEBGL ?
  'varying vec2 v_texCoord;\n\n\nattribute vec2 a_position;\nattribute vec2 a_texCoord;\n\nuniform mat4 u_texCoordMatrix;\nuniform mat4 u_projectionMatrix;\n\nvoid main(void) {\n  gl_Position = u_projectionMatrix * vec4(a_position, 0., 1.);\n  v_texCoord = (u_texCoordMatrix * vec4(a_texCoord, 0., 1.)).st;\n}\n\n\n' :
  'varying vec2 a;attribute vec2 b;attribute vec2 c;uniform mat4 d;uniform mat4 e;void main(void){gl_Position=e*vec4(b,0.,1.);a=(d*vec4(c,0.,1.)).st;}');
