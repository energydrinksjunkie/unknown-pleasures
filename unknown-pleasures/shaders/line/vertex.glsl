#include ../noise;

uniform float uOffset;

void main(){
    vec3 pos = position;
    pos.y += noise2D(vec2(pos.x + uOffset, 0.0) * 64.0) * 0.02;
    pos.y += noise2D(vec2(pos.x + uOffset, 0.0) * 2.5) * 0.5;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
}