#include ../noise;

uniform float uOffset;
uniform float uTime;
uniform float uStrength;

void main(){
    vec3 pos = position;

    float flatnessAmplitude = pow(1.0-abs(uv.x -0.5) * 2.0,3.5) * uStrength;

    pos.y += noise2D(vec2(pos.x + uOffset, uTime * 0.02) * 64.0) * 0.02;
    pos.y += noise2D(vec2(pos.x + uOffset, uTime * 0.0001) * 512.0) * 0.05 * flatnessAmplitude;
    pos.y += pow(noise2D(vec2(pos.x + uOffset, uTime * 0.05) * 2.5) +1.0, 1.2) * 0.55 * flatnessAmplitude;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
}