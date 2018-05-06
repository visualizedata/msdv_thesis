
export const COUNTIES_ARR = ['Philadelphia', 'Queens', 'New York', 'Richmond City', 'Baltimore City', 'Bronx', 'Kings', 'Fulton', 'DeKalb'];

export const MAPBOX_TOKEN = process.env.MAPBOX;

export const DARK_TOKEN = process.env.DARKBOX;

export const dots16_URL = '../data/2016/pennDots.json';

export const dots40_URL = '../data/1940/1940Dots.json';

export const dots40Full_URL = '../data/1940/1940Dots.json';

export const poly_URL = '../data/2016/deckInc.json';

export const hsPoly_URL = '../data/2016/deckHS.json';

export const holc_URL = '../data/holc/holc.geojson';

export const phil_HOLC_ID = "joesteele-6a5xs2ot";

export const houseMin = 40900;
export const houseMax = 778600;

export const incMin = 4560;
export const incMax = 68125;

export const MapMode = {
    NONE: 'NONE',
    DOTS: 'DOTS',
    POLYINC: 'POLYINC',
    POLYHS: 'POLYHS',
    OLD: 'OLD'
}

export const MapBase = {
    NONE: 'NONE',
    TIFF: 'TIFF',
    TRACT: 'TRACT',
    HOLC: 'HOLC',
    BUILD: 'BUILD'
}


const W_COLOR = [0, 128, 255];
const B_COLOR = [255, 0, 128];
const A_COLOR = [137, 244, 66];
const L_COLOR = [244, 149, 66];

const C_COLOR = [244, 80, 6];


export const DOT_COLORS = [W_COLOR,B_COLOR,A_COLOR,L_COLOR];
export const OLD_COLORS = [W_COLOR, C_COLOR];



