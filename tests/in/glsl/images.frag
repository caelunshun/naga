#version 460 core

layout(rgba8, binding = 0) uniform image1D img1D;
layout(rgba8, binding = 1) uniform image2D img2D;
layout(rgba8, binding = 2) uniform image3D img3D;
// layout(rgba8, binding = 3) uniform imageCube imgCube;
layout(rgba8, binding = 4) uniform image1DArray img1DArray;
layout(rgba8, binding = 5) uniform image2DArray img2DArray;
// layout(rgba8, binding = 6) uniform imageCubeArray imgCubeArray;

void testImg1D(in int coord) {
    int size = imageSize(img1D);
    vec4 c = imageLoad(img1D, coord);
    imageStore(img1D, coord, vec4(2));
}

void testImg1DArray(in ivec2 coord) {
    vec2 size = imageSize(img1DArray);
    vec4 c = imageLoad(img1DArray, coord);
    imageStore(img1DArray, coord, vec4(2));
}

void testImg2D(in ivec2 coord) {
    vec2 size = imageSize(img2D);
    vec4 c = imageLoad(img2D, coord);
    imageStore(img2D, coord, vec4(2));
}

void testImg2DArray(in ivec3 coord) {
    vec3 size = imageSize(img2DArray);
    vec4 c = imageLoad(img2DArray, coord);
    imageStore(img2DArray, coord, vec4(2));
}

void testImg3D(in ivec3 coord) {
    vec3 size = imageSize(img3D);
    vec4 c = imageLoad(img3D, coord);
    imageStore(img3D, coord, vec4(2));
}

// Naga doesn't support cube images and it's usefulness
// is questionable, so they won't be supported for now
// void testImgCube(in ivec3 coord) {
//     vec2 size = imageSize(imgCube);
//     vec4 c = imageLoad(imgCube, coord);
//     imageStore(imgCube, coord, vec4(2));
// }
//
// void testImgCubeArray(in ivec3 coord) {
//    vec3 size = imageSize(imgCubeArray);
//     vec4 c = imageLoad(imgCubeArray, coord);
//     imageStore(imgCubeArray, coord, vec4(2));
// }

void main() {}
