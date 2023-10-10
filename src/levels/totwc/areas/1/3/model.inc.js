import { CALC_DXT, G_CC_MODULATERGB, G_CC_SHADE, G_IM_FMT_RGBA, G_IM_SIZ_16b, G_IM_SIZ_16b_BYTES, G_LIGHTING, G_OFF, G_ON, G_TEXTURE_IMAGE_FRAC, G_TX_LOADTILE, G_TX_NOLOD, G_TX_NOMASK, G_TX_NOMIRROR, G_TX_RENDERTILE, G_TX_WRAP, gsDPLoadBlock, gsDPLoadSync, gsDPPipeSync, gsDPSetCombineMode, gsDPSetTextureImage, gsDPSetTile, gsDPSetTileSize, gsDPTileSync, gsSP2Triangles, gsSPClearGeometryMode, gsSPDisplayList, gsSPEndDisplayList, gsSPSetGeometryMode, gsSPTexture, gsSPVertex } from "../../../../../include/gbi";
import { sky_09001000 } from "../../../../../textures/sky";
import { totwc_seg7_texture_07001000 } from "../../../texture.inc";

// 0x070070C8 - 0x070071C8
const totwc_seg7_vertex_070070C8 = [
    [[[  4506,  -7679,   3686], 0, [   990,    990], [0xfe, 0xff, 0xcb, 0x00]]],
    [[[  3686,  -7679,   3686], 0, [     0,    990], [0xfe, 0xff, 0xcb, 0x00]]],
    [[[  3686,  -5119,   3686], 0, [     0,  -2204], [0xfe, 0xff, 0xcb, 0xff]]],
    [[[  4506,  -5119,   3686], 0, [   990,  -2204], [0xfe, 0xff, 0xcb, 0xff]]],
    [[[  4506,  -5119,  -3685], 0, [   990,  -2204], [0xb9, 0xd0, 0xad, 0xff]]],
    [[[  4506,  -7679,  -3685], 0, [   990,    990], [0xb9, 0xd0, 0xad, 0x00]]],
    [[[  4506,  -5119,  -4505], 0, [     0,  -2204], [0xb9, 0xd0, 0xad, 0xff]]],
    [[[  4506,  -7679,  -4505], 0, [     0,    990], [0xb9, 0xd0, 0xad, 0x00]]],
    [[[  3686,  -7679,  -4505], 0, [     0,    990], [0xb9, 0xd0, 0xad, 0x00]]],
    [[[  3686,  -7679,  -3685], 0, [   990,    990], [0xb9, 0xd0, 0xad, 0x00]]],
    [[[  3686,  -5119,  -3685], 0, [   990,  -2204], [0xb9, 0xd0, 0xad, 0xff]]],
    [[[  3686,  -5119,  -4505], 0, [     0,  -2204], [0xb9, 0xd0, 0xad, 0xff]]],
    [[[ -4505,  -5119,   4506], 0, [   990,  -2204], [0x50, 0x86, 0xa3, 0xff]]],
    [[[ -4505,  -7679,   4506], 0, [   990,    990], [0x50, 0x86, 0xa3, 0x00]]],
    [[[ -3685,  -7679,   4506], 0, [     0,    990], [0x50, 0x86, 0xa3, 0x00]]],
    [[[ -3685,  -5119,   4506], 0, [     0,  -2204], [0x50, 0x86, 0xa3, 0xff]]],
];

// 0x070071C8 - 0x070072C8
const totwc_seg7_vertex_070071C8 = [
    [[[ -3685,  -5119,   4506], 0, [ 11210,  -2204], [0x93, 0xce, 0xd5, 0xff]]],
    [[[ -3685,  -7679,   3686], 0, [ 10188,    990], [0x93, 0xce, 0xd5, 0x00]]],
    [[[ -3685,  -5119,   3686], 0, [ 10188,  -2204], [0x93, 0xce, 0xd5, 0xff]]],
    [[[ -3685,  -7679,   4506], 0, [ 11210,    990], [0x93, 0xce, 0xd5, 0x00]]],
    [[[ -4505,  -5119,   3686], 0, [ 10188,  -2204], [0x93, 0xce, 0xd5, 0xff]]],
    [[[ -4505,  -7679,   3686], 0, [ 10188,    990], [0x93, 0xce, 0xd5, 0x00]]],
    [[[ -4505,  -7679,   4506], 0, [ 11210,    990], [0x93, 0xce, 0xd5, 0x00]]],
    [[[ -4505,  -5119,   4506], 0, [ 11210,  -2204], [0x93, 0xce, 0xd5, 0xff]]],
    [[[ -3685,  -5119,   3686], 0, [     0,  -2204], [0xc5, 0xf8, 0xff, 0xff]]],
    [[[ -4505,  -7679,   3686], 0, [   990,    990], [0xc5, 0xf8, 0xff, 0x00]]],
    [[[ -4505,  -5119,   3686], 0, [   990,  -2204], [0xc5, 0xf8, 0xff, 0xff]]],
    [[[ -3685,  -7679,   3686], 0, [     0,    990], [0xc5, 0xf8, 0xff, 0x00]]],
    [[[ -3685,  -7679,  -4505], 0, [ -9228,    990], [0xc1, 0xdd, 0xff, 0x00]]],
    [[[ -4505,  -7679,  -4505], 0, [-10250,    990], [0xc1, 0xdd, 0xff, 0x00]]],
    [[[ -4505,  -5119,  -4505], 0, [-10250,  -2204], [0xc1, 0xdd, 0xff, 0xff]]],
    [[[ -3685,  -5119,  -4505], 0, [ -9228,  -2204], [0xc1, 0xdd, 0xff, 0xff]]],
];

// 0x070072C8 - 0x070073C8
const totwc_seg7_vertex_070072C8 = [
    [[[  4506,  -5119,  -4505], 0, [   990,  -2204], [0xdd, 0xff, 0xc8, 0xff]]],
    [[[  4506,  -7679,  -4505], 0, [   990,    990], [0xdd, 0xff, 0xc8, 0x00]]],
    [[[  3686,  -5119,  -4505], 0, [     0,  -2204], [0xdd, 0xff, 0xc8, 0xff]]],
    [[[  3686,  -7679,  -4505], 0, [     0,    990], [0xdd, 0xff, 0xc8, 0x00]]],
    [[[  3686,  -5119,   4506], 0, [     0,  -2204], [0xa6, 0xa1, 0x6f, 0xff]]],
    [[[  3686,  -7679,   4506], 0, [     0,    990], [0xa6, 0xa1, 0x6f, 0x00]]],
    [[[  4506,  -5119,   4506], 0, [   990,  -2204], [0xa6, 0xa1, 0x6f, 0xff]]],
    [[[  4506,  -7679,   4506], 0, [   990,    990], [0xa6, 0xa1, 0x6f, 0x00]]],
    [[[ -4505,  -5119,  -3685], 0, [-10250,  -2204], [0x65, 0x7b, 0x97, 0xff]]],
    [[[ -4505,  -7679,  -3685], 0, [-10250,    990], [0x65, 0x7b, 0x97, 0x00]]],
    [[[ -3685,  -5119,  -3685], 0, [ -9228,  -2204], [0x65, 0x7b, 0x97, 0xff]]],
    [[[ -3685,  -7679,  -3685], 0, [ -9228,    990], [0x65, 0x7b, 0x97, 0x00]]],
    [[[  3686,  -5119,  -3685], 0, [     0,  -2204], [0x95, 0x9e, 0x7b, 0xff]]],
    [[[  3686,  -7679,  -3685], 0, [     0,    990], [0x95, 0x9e, 0x7b, 0x00]]],
    [[[  4506,  -5119,  -3685], 0, [   990,  -2204], [0x95, 0x9e, 0x7b, 0xff]]],
    [[[  4506,  -7679,  -3685], 0, [   990,    990], [0x95, 0x9e, 0x7b, 0x00]]],
];

// 0x070073C8 - 0x070074C8
const totwc_seg7_vertex_070073C8 = [
    [[[ -3685,  -7679,  -3685], 0, [   990,    990], [0x97, 0xa9, 0xcd, 0x00]]],
    [[[ -3685,  -7679,  -4505], 0, [     0,    990], [0x97, 0xa9, 0xcd, 0x00]]],
    [[[ -3685,  -5119,  -4505], 0, [     0,  -2204], [0x97, 0xa9, 0xcd, 0xff]]],
    [[[ -3685,  -5119,  -3685], 0, [   990,  -2204], [0x97, 0xa9, 0xcd, 0xff]]],
    [[[ -4505,  -5119,  -4505], 0, [     0,  -2204], [0x97, 0xa9, 0xcd, 0xff]]],
    [[[ -4505,  -7679,  -4505], 0, [     0,    990], [0x97, 0xa9, 0xcd, 0x00]]],
    [[[ -4505,  -5119,  -3685], 0, [   990,  -2204], [0x97, 0xa9, 0xcd, 0xff]]],
    [[[ -4505,  -7679,  -3685], 0, [   990,    990], [0x97, 0xa9, 0xcd, 0x00]]],
    [[[  4506,  -5119,   4506], 0, [ 11210,  -2204], [0xcd, 0xc4, 0x97, 0xff]]],
    [[[  4506,  -7679,   4506], 0, [ 11210,    990], [0xcd, 0xc4, 0x97, 0x00]]],
    [[[  4506,  -5119,   3686], 0, [ 10188,  -2204], [0xcd, 0xc4, 0x97, 0xff]]],
    [[[  4506,  -7679,   3686], 0, [ 10188,    990], [0xcd, 0xc4, 0x97, 0x00]]],
    [[[  3686,  -7679,   3686], 0, [ 10188,    990], [0xcd, 0xc4, 0x97, 0x00]]],
    [[[  3686,  -7679,   4506], 0, [ 11210,    990], [0xcd, 0xc4, 0x97, 0x00]]],
    [[[  3686,  -5119,   4506], 0, [ 11210,  -2204], [0xcd, 0xc4, 0x97, 0xff]]],
    [[[  3686,  -5119,   3686], 0, [ 10188,  -2204], [0xcd, 0xc4, 0x97, 0xff]]],
];

// 0x070074C8 - 0x070075C8
const totwc_seg7_vertex_070074C8 = [
    [[[  -469,  -7679,   1135], 0, [   350,  13700], [0x9b, 0x51, 0x20, 0x00]]],
    [[[  -469,  -5119,   1135], 0, [   350,   7468], [0x9b, 0x51, 0x20, 0xff]]],
    [[[ -1134,  -5119,    470], 0, [  2638,   7468], [0x9b, 0x51, 0x20, 0xff]]],
    [[[ -1134,  -7679,    470], 0, [  2638,  13700], [0x9b, 0x51, 0x20, 0x00]]],
    [[[   470,  -7679,  -1134], 0, [  2638,  13700], [0x9b, 0x51, 0x20, 0x00]]],
    [[[  1135,  -5119,   -469], 0, [   350,   7468], [0x9b, 0x51, 0x20, 0xff]]],
    [[[  1135,  -7679,   -469], 0, [   350,  13700], [0x9b, 0x51, 0x20, 0x00]]],
    [[[   470,  -5119,  -1134], 0, [  2638,   7468], [0x9b, 0x51, 0x20, 0xff]]],
    [[[   470,  -7679,   1135], 0, [   346,  13700], [0x7d, 0x3e, 0x1c, 0x00]]],
    [[[  -469,  -5119,   1135], 0, [  2636,   7468], [0x7d, 0x3e, 0x1c, 0xff]]],
    [[[  -469,  -7679,   1135], 0, [  2636,  13700], [0x7d, 0x3e, 0x1c, 0x00]]],
    [[[   470,  -5119,   1135], 0, [   346,   7468], [0x7d, 0x3e, 0x1c, 0xff]]],
    [[[  1135,  -7679,   -469], 0, [  2638,  13700], [0x7d, 0x3e, 0x1c, 0x00]]],
    [[[  1135,  -5119,    470], 0, [   350,   7468], [0x7d, 0x3e, 0x1c, 0xff]]],
    [[[  1135,  -7679,    470], 0, [   350,  13700], [0x7d, 0x3e, 0x1c, 0x00]]],
    [[[  1135,  -5119,   -469], 0, [  2638,   7468], [0x7d, 0x3e, 0x1c, 0xff]]],
];

// 0x070075C8 - 0x070076C8
const totwc_seg7_vertex_070075C8 = [
    [[[ -1134,  -7679,    470], 0, [   350,  13700], [0xc3, 0x67, 0x2b, 0x00]]],
    [[[ -1134,  -5119,    470], 0, [   350,   7468], [0xc3, 0x67, 0x2b, 0xff]]],
    [[[ -1134,  -5119,   -469], 0, [  2638,   7468], [0xc3, 0x67, 0x2b, 0xff]]],
    [[[ -1134,  -7679,   -469], 0, [  2638,  13700], [0xc3, 0x67, 0x2b, 0x00]]],
    [[[  -469,  -7679,  -1134], 0, [  2636,  13700], [0xc3, 0x67, 0x2b, 0x00]]],
    [[[  -469,  -5119,  -1134], 0, [  2636,   7468], [0xc3, 0x67, 0x2b, 0xff]]],
    [[[   470,  -5119,  -1134], 0, [   346,   7468], [0xc3, 0x67, 0x2b, 0xff]]],
    [[[   470,  -7679,  -1134], 0, [   346,  13700], [0xc3, 0x67, 0x2b, 0x00]]],
    [[[ -1134,  -7679,   -469], 0, [  2604,  13704], [0xe4, 0x87, 0x39, 0x00]]],
    [[[  -469,  -5119,  -1134], 0, [   330,   7468], [0xe4, 0x87, 0x39, 0xff]]],
    [[[  -469,  -7679,  -1134], 0, [   316,  13700], [0xe4, 0x87, 0x39, 0x00]]],
    [[[ -1134,  -5119,   -469], 0, [  2620,   7474], [0xe4, 0x87, 0x39, 0xff]]],
    [[[  1135,  -7679,    470], 0, [   322,  13686], [0x5d, 0x2e, 0x00, 0x00]]],
    [[[  1135,  -5119,    470], 0, [   338,   7454], [0x5d, 0x2e, 0x00, 0xff]]],
    [[[   470,  -5119,   1135], 0, [  2626,   7460], [0x5d, 0x2e, 0x00, 0xff]]],
    [[[   470,  -7679,   1135], 0, [  2612,  13692], [0x5d, 0x2e, 0x00, 0x00]]],
];

// 0x070076C8 - 0x07007808
const totwc_seg7_dl_070076C8 = [
    gsDPSetTextureImage(G_IM_FMT_RGBA, G_IM_SIZ_16b, 1, totwc_seg7_texture_07001000),
    gsDPLoadSync(),
    gsDPLoadBlock(G_TX_LOADTILE, 0, 0, 32 * 32 - 1, CALC_DXT(32, G_IM_SIZ_16b_BYTES)),
    gsSPVertex(totwc_seg7_vertex_070070C8, 16, 0),
    gsSP2Triangles( 0,  1,  2, 0x0,  3,  0,  2, 0x0),
    gsSP2Triangles( 4,  5,  6, 0x0,  5,  7,  6, 0x0),
    gsSP2Triangles( 8,  9, 10, 0x0, 11,  8, 10, 0x0),
    gsSP2Triangles(12, 13, 14, 0x0, 12, 14, 15, 0x0),
    gsSPVertex(totwc_seg7_vertex_070071C8, 16, 0),
    gsSP2Triangles( 0,  1,  2, 0x0,  0,  3,  1, 0x0),
    gsSP2Triangles( 4,  5,  6, 0x0,  4,  6,  7, 0x0),
    gsSP2Triangles( 8,  9, 10, 0x0,  8, 11,  9, 0x0),
    gsSP2Triangles(12, 13, 14, 0x0, 15, 12, 14, 0x0),
    gsSPVertex(totwc_seg7_vertex_070072C8, 16, 0),
    gsSP2Triangles( 0,  1,  2, 0x0,  1,  3,  2, 0x0),
    gsSP2Triangles( 4,  5,  6, 0x0,  5,  7,  6, 0x0),
    gsSP2Triangles( 8,  9, 10, 0x0,  9, 11, 10, 0x0),
    gsSP2Triangles(12, 13, 14, 0x0, 13, 15, 14, 0x0),
    gsSPVertex(totwc_seg7_vertex_070073C8, 16, 0),
    gsSP2Triangles( 0,  1,  2, 0x0,  3,  0,  2, 0x0),
    gsSP2Triangles( 4,  5,  6, 0x0,  5,  7,  6, 0x0),
    gsSP2Triangles( 8,  9, 10, 0x0,  9, 11, 10, 0x0),
    gsSP2Triangles(12, 13, 14, 0x0, 15, 12, 14, 0x0),
    gsSPEndDisplayList(),
];

// 0x07007808 - 0x070078B8
const totwc_seg7_dl_07007808 = [
    gsDPSetTextureImage(G_IM_FMT_RGBA, G_IM_SIZ_16b, 1, sky_09001000),
    gsDPLoadSync(),
    gsDPLoadBlock(G_TX_LOADTILE, 0, 0, 32 * 32 - 1, CALC_DXT(32, G_IM_SIZ_16b_BYTES)),
    gsSPVertex(totwc_seg7_vertex_070074C8, 16, 0),
    gsSP2Triangles( 0,  1,  2, 0x0,  0,  2,  3, 0x0),
    gsSP2Triangles( 4,  5,  6, 0x0,  4,  7,  5, 0x0),
    gsSP2Triangles( 8,  9, 10, 0x0,  8, 11,  9, 0x0),
    gsSP2Triangles(12, 13, 14, 0x0, 12, 15, 13, 0x0),
    gsSPVertex(totwc_seg7_vertex_070075C8, 16, 0),
    gsSP2Triangles( 0,  1,  2, 0x0,  0,  2,  3, 0x0),
    gsSP2Triangles( 4,  5,  6, 0x0,  4,  6,  7, 0x0),
    gsSP2Triangles( 8,  9, 10, 0x0,  8, 11,  9, 0x0),
    gsSP2Triangles(12, 13, 14, 0x0, 12, 14, 15, 0x0),
    gsSPEndDisplayList(),
];

// 0x070078B8 - 0x07007930
export const totwc_seg7_dl_070078B8 = [
    gsDPPipeSync(),
    gsDPSetCombineMode(G_CC_MODULATERGB, G_CC_MODULATERGB),
    gsSPClearGeometryMode(G_LIGHTING),
    gsDPSetTile(G_IM_FMT_RGBA, G_IM_SIZ_16b, 0, 0, G_TX_LOADTILE, 0, G_TX_WRAP | G_TX_NOMIRROR, G_TX_NOMASK, G_TX_NOLOD, G_TX_WRAP | G_TX_NOMIRROR, G_TX_NOMASK, G_TX_NOLOD),
    gsSPTexture(0xFFFF, 0xFFFF, 0, G_TX_RENDERTILE, G_ON),
    gsDPTileSync(),
    gsDPSetTile(G_IM_FMT_RGBA, G_IM_SIZ_16b, 8, 0, G_TX_RENDERTILE, 0, G_TX_WRAP | G_TX_NOMIRROR, 5, G_TX_NOLOD, G_TX_WRAP | G_TX_NOMIRROR, 5, G_TX_NOLOD),
    gsDPSetTileSize(0, 0, 0, (32 - 1) << G_TEXTURE_IMAGE_FRAC, (32 - 1) << G_TEXTURE_IMAGE_FRAC),
    gsSPDisplayList(totwc_seg7_dl_070076C8),
    gsSPDisplayList(totwc_seg7_dl_07007808),
    gsSPTexture(0xFFFF, 0xFFFF, 0, G_TX_RENDERTILE, G_OFF),
    gsDPPipeSync(),
    gsDPSetCombineMode(G_CC_SHADE, G_CC_SHADE),
    gsSPSetGeometryMode(G_LIGHTING),
    gsSPEndDisplayList(),
];