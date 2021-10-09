const config = {
    designui_color_preview: '6f9fe8',
    time_added_to_each_payment: 300000
}

const pageTemplate = '<svg width="{width}" height="{height}" viewBox="0 0 495 672"><defs>{def-pattern}</defs><path id="shape0" fill="{fill}" stroke="#000000" stroke-width="4" d="{shape-d}" /><text id="shape1" x="{shape-char-x}" y="{shape-char-y}" text-anchor="middle" fill="#FFF" dominant-baseline="middle" font-size="{shape-font-size}" font-stretch="normal" font-weight="600" style="stroke:#000000;stroke-width:4px;">{letterEscaped}</text></svg>'

const designUI_shapePreview = '<svg width="{width}" height="{height}" viewBox="0 0 495 672"><defs>{def-pattern}</defs><path id="shape0" fill="{fill}" d="{shape-d}" /></svg>'

const designUI_patternPreview = '<svg width="{width}" height="{height}" viewBox="0 0 {width} {width}"><defs>{def-pattern}</defs><rect width="100%" height="100%" fill="{fill}"/></svg>'

const fonts = {
    Hack: {
        nornal: 'https://cdnjs.cloudflare.com/ajax/libs/hack-font/3.3.0/web/fonts/hack-bold.woff',
        bold: 'https://cdnjs.cloudflare.com/ajax/libs/hack-font/3.3.0/web/fonts/hack-bold.woff',
        italics: 'https://cdnjs.cloudflare.com/ajax/libs/hack-font/3.3.0/web/fonts/hack-bold.woff',
        bolditalics: 'https://cdnjs.cloudflare.com/ajax/libs/hack-font/3.3.0/web/fonts/hack-bold.woff'
    }
}

const shapes = {
    tooth: {
        d: "M3,3 L492,3 L492,669 L246,531 L3,669 Z",
        charX: '50%',
        charY: '50%',
        fontSize: '400',
        free: true
    },
    rectangle: {
        d: "M3,3 L492,3 L492,669 L3,669 Z",
        charX: '50%',
        charY: '50%',
        fontSize: '400',
        free: true,
    },
    thickTooth: {
        d: "M33,3 L462,3 L492,660 L246,531 L3,660 Z",
        charX: '50%',
        charY: '50%',
        fontSize: '400',
        free: false,
    },
    triangle: {
        d: "M3,3 L492,3 L246,640 Z",
        charX: '50%',
        charY: '38%',
        fontSize: '300',
        free: false,
    },
    tallTriangle: {
        d: "M3,3 L492,0 L492,500 L246,640 L3,500 Z",
        charX: '50%',
        charY: '50%',
        fontSize: '400',
        free: false,
    },
    cuttingCorners: {
        d: "M3,3 L492,3 L492,580 L392,669 L103,669 3,580 Z",
        charX: '50%',
        charY: '50%',
        fontSize: '400',
        free: false,
    },
    bottomHalfCircle: {
        d: "M3,3 L492,3 L492,400 C492,700 3,700 3,400 Z",
        charX: '50%',
        charY: '50%',
        fontSize: '400',
        free: false,
    },
}

const colorPalettes = {
    0: {
        colors: ['f94144', 'f3722c', 'f8961e', 'f9c74f', '90be6d', '43aa8b', '4CA3DD'],
        free: true
    },
    1: {
        colors: ['ff0000', 'ff8700', 'ffd60a', '97e519', '09cd44', '2386e2', '580aff', 'be0aff'],
        free: false
    },
    2: {
        colors: ['ffbe0b', 'fb5607', 'ff006e', 'c11cad', '8338ec', '3a86ff', '1a33e9', '10bd58'],
        free: false
    },
    3: {
        colors: ['f9c80e', 'f86624', 'ea3546', '7a4da4', '43bccd', '4bbc22', '358618'],
        free: false
    },
    4: {
        colors: ['ffadad', 'ffd6a5', 'fdffb6', 'caffbf', '9bf6ff', 'a0c4ff', 'bdb2ff', 'ffc6ff'],
        free: false
    },
    5: {
        colors: ['f58bbd', 'ffc6ab', 'fcf6bd', 'd0f4de', 'a4f0ab', '60e88d', 'a9def9', 'e4c1f9'],
        free: false
    },
    6: {
        colors: ['70d6ff', '757ae8', 'c787f2', 'ff70a6', 'ff9770', 'ffd670', 'e9ff70', 'a4e543'],
        free: false
    },
    7: {
        colors: ['5f0f40', '9a031e', 'dd3000', 'fb8b24', 'e36414', '4a7795', '0f4c5c', '1c7b47'],
        free: false
    },
    8: {
        colors: ['f7b538', 'db7c26', 'd8572a', 'c32f27', '9c312c', '753330', '3e833e', '18a413'],
        free: false
    },
    9: {
        colors: ['8ea604', 'f5bb00', 'ec9f05', 'd76a03', 'bf3100', '934336', '504db0', '8b3573'],
        free: false
    },
    10: {
        colors: ['287271', '2a9d8f', 'e9c46a', 'f4a261', 'e76f51', 'd24927', '8d6eb1', '4e5db3'],
        free: false
    },
    11: {
        colors: ['f94144', 'f3722c', 'f8961e', 'f9c74f', '90be6d', '43aa8b', '577590'],
        free: false,
        order: 'FIXED'
    },
    12: {
        colors: ['ffadad', 'ffd6a5', 'fdffb6', 'caffbf', '9bf6ff', 'a0c4ff', 'bdb2ff', 'ffc6ff'],
        free: false,
        order: 'FIXED'
    }

}

const _config_texture_stripes_size = 80
const _config_texture_stripes_stripeWidth = 50
const textures = {
    none: {
        def: '',
        free: true,
    },
    stripes: {
        def: `<pattern id="{patternId}" patternUnits="userSpaceOnUse" 
                       width="${_config_texture_stripes_size}" height="${_config_texture_stripes_size}">
                    <path   d=" M-${_config_texture_stripes_size / 2},${_config_texture_stripes_size / 2} L${_config_texture_stripes_size / 2},-${_config_texture_stripes_size / 2}
                                M0,${_config_texture_stripes_size} L${_config_texture_stripes_size},0
                                M${_config_texture_stripes_size - (_config_texture_stripes_stripeWidth / 2)},${_config_texture_stripes_size + (_config_texture_stripes_stripeWidth / 2)} L${_config_texture_stripes_size + (_config_texture_stripes_stripeWidth / 2)},${_config_texture_stripes_size - (_config_texture_stripes_stripeWidth / 2)}
                            "
                            style="stroke:{color}; stroke-width:${_config_texture_stripes_stripeWidth};" />
                </pattern>`,
        free: true,
    },
    stars: {
        def: '<pattern id="{patternId}" width="93" height="93" viewBox="0 0 93 93" patternUnits="userSpaceOnUse" > <rect fill="{color}" width="93" height="93" /> <path fill="#fff" d="m 423.36731,482.99651 -17.17837,-16.91258 -23.67086,4.56313 10.77641,-21.56387 -11.6545,-21.10224 23.83856,3.58537 16.46798,-17.60503 3.95663,23.77975 21.83227,10.22173 -21.39322,11.11133 z" transform="matrix(0.26458333,0,0,0.26458333,-35.498008,-44.964143)" /> <path fill="#fff" transform="matrix(0.26458333,0,0,0.26458333,-52.602388,-103.11973)" d="m 423.36731,482.99651 -17.17837,-16.91258 -23.67086,4.56313 10.77641,-21.56387 -11.6545,-21.10224 23.83856,3.58537 16.46798,-17.60503 3.95663,23.77975 21.83227,10.22173 -21.39322,11.11133 z" /> <path fill="#fff" transform="matrix(0.1989412,0,0,0.17888309,-4.6000639,-46.896606)" d="m 423.36731,482.99651 -17.17837,-16.91258 -23.67086,4.56313 10.77641,-21.56387 -11.6545,-21.10224 23.83856,3.58537 16.46798,-17.60503 3.95663,23.77975 21.83227,10.22173 -21.39322,11.11133 z" /> <path fill="#fff" transform="matrix(0.26458333,0,0,0.26458333,-86.976129,-46.2457)" d="m 423.36731,482.99651 -17.17837,-16.91258 -23.67086,4.56313 10.77641,-21.56387 -11.6545,-21.10224 23.83856,3.58537 16.46798,-17.60503 3.95663,23.77975 21.83227,10.22173 -21.39322,11.11133 z" /> <path fill="#fff" d="m 395.04345,363.73814 -36.24706,-10.81344 -29.45686,23.72916 -0.91676,-37.81454 -31.67044,-20.68242 35.68046,-12.55723 9.88345,-36.5116 22.96851,30.05374 37.77874,-1.88299 -21.48514,31.13147 z" transform="matrix(0.21264229,0,0,0.22058172,-59.526615,-50.083995)" /> <path fill="#fff" transform="matrix(0.21264229,0,0,0.22058172,-29.441076,-22.311067)" d="m 395.04345,363.73814 -36.24706,-10.81344 -29.45686,23.72916 -0.91676,-37.81454 -31.67044,-20.68242 35.68046,-12.55723 9.88345,-36.5116 22.96851,30.05374 37.77874,-1.88299 -21.48514,31.13147 z" /> </pattern>'
    },
    beecomb: {
        def: '<pattern id="{patternId}" width="88.91" height="77" viewBox="0 0 34.64101615137755 30" patternUnits="userSpaceOnUse" patternTransform="rotate(135)"><path d="M-20-20h200v200h-200M19.01 28.25L15.98 26.5L12.95 28.25L12.95 31.75L15.98 33.5L19.01 31.75zM1.69 28.25L-1.34 26.5L-4.37 28.25L-4.37 31.75L-1.34 33.5L1.69 31.75zM-6.97 13.25L-10 11.5L-13.03 13.25L-13.03 16.75L-10 18.5L-6.97 16.75zM1.69-1.75L-1.34-3.5L-4.37-1.75L-4.37 1.75L-1.34 3.5L1.69 1.75zM19.01-1.75L15.98-3.5L12.95-1.75L12.95 1.75L15.98 3.5L19.01 1.75zM27.67 13.25L24.64 11.5L21.61 13.25L21.61 16.75L24.64 18.5L27.67 16.75zM36.33 28.25L33.3 26.5L30.27 28.25L30.27 31.75L33.3 33.5L36.33 31.75zM10.35 43.25L7.32 41.5L4.29 43.25L4.29 46.75L7.32 48.5L10.35 46.75zM-15.63 28.25L-18.66 26.5L-21.69 28.25L-21.69 31.75L-18.66 33.5L-15.63 31.75zM-15.63-1.75L-18.66-3.5L-21.69-1.75L-21.69 1.75L-18.66 3.5L-15.63 1.75zM10.35-16.75L7.32-18.5L4.29-16.75L4.29-13.25L7.32-11.5L10.35-13.25zM36.33-1.75L33.3-3.5L30.27-1.75L30.27 1.75L33.3 3.5L36.33 1.75zM27.67 43.25L24.64 41.5L21.61 43.25L21.61 46.75L24.64 48.5L27.67 46.75zM-6.97 43.25L-10 41.5L-13.03 43.25L-13.03 46.75L-10 48.5L-6.97 46.75zM-24.29 13.25L-27.32 11.5L-30.35 13.25L-30.35 16.75L-27.32 18.5L-24.29 16.75zM-6.97-16.75L-10-18.5L-13.03-16.75L-13.03-13.25L-10-11.5L-6.97-13.25zM27.67-16.75L24.64-18.5L21.61-16.75L21.61-13.25L24.64-11.5L27.67-13.25zM44.99 13.25L41.96 11.5L38.93 13.25L38.93 16.75L41.96 18.5L44.99 16.75zM10.35 13.25L7.32 11.5L4.29 13.25L4.29 16.75L7.32 18.5L10.35 16.75z" fill="{color}"/></pattern>'
    },
    bubbles: {
        def: '<pattern id="{patternId}" width="100" height="100" viewBox="0 0 100 100" patternUnits="userSpaceOnUse"><rect width="100%" height="100%" fill="{color}"/><path stroke-width="1" fill="#FFF" fill-rule="evenodd"  d="M11,18 C14.8659932,18 18,14.8659932 18,11 C18,7.13400675 14.8659932,4 11,4 C7.13400675,4 4,7.13400675 4,11 C4,14.8659932 7.13400675,18 11,18 Z M59,43 C62.8659932,43 66,39.8659932 66,36 C66,32.1340068 62.8659932,29 59,29 C55.1340068,29 52,32.1340068 52,36 C52,39.8659932 55.1340068,43 59,43 Z M16,36 C17.6568542,36 19,34.6568542 19,33 C19,31.3431458 17.6568542,30 16,30 C14.3431458,30 13,31.3431458 13,33 C13,34.6568542 14.3431458,36 16,36 Z M79,67 C80.6568542,67 82,65.6568542 82,64 C82,62.3431458 80.6568542,61 79,61 C77.3431458,61 76,62.3431458 76,64 C76,65.6568542 77.3431458,67 79,67 Z M34,90 C35.6568542,90 37,88.6568542 37,87 C37,85.3431458 35.6568542,84 34,84 C32.3431458,84 31,85.3431458 31,87 C31,88.6568542 32.3431458,90 34,90 Z M90,14 C91.6568542,14 93,12.6568542 93,11 C93,9.34314575 91.6568542,8 90,8 C88.3431458,8 87,9.34314575 87,11 C87,12.6568542 88.3431458,14 90,14 Z M12,86 C14.209139,86 16,84.209139 16,82 C16,79.790861 14.209139,78 12,78 C9.790861,78 8,79.790861 8,82 C8,84.209139 9.790861,86 12,86 Z M40,21 C42.209139,21 44,19.209139 44,17 C44,14.790861 42.209139,13 40,13 C37.790861,13 36,14.790861 36,17 C36,19.209139 37.790861,21 40,21 Z M63,10 C65.7614237,10 68,7.76142375 68,5 C68,2.23857625 65.7614237,0 63,0 C60.2385763,0 58,2.23857625 58,5 C58,7.76142375 60.2385763,10 63,10 Z M57,70 C59.209139,70 61,68.209139 61,66 C61,63.790861 59.209139,62 57,62 C54.790861,62 53,63.790861 53,66 C53,68.209139 54.790861,70 57,70 Z M86,92 C88.7614237,92 91,89.7614237 91,87 C91,84.2385763 88.7614237,82 86,82 C83.2385763,82 81,84.2385763 81,87 C81,89.7614237 83.2385763,92 86,92 Z M32,63 C34.7614237,63 37,60.7614237 37,58 C37,55.2385763 34.7614237,53 32,53 C29.2385763,53 27,55.2385763 27,58 C27,60.7614237 29.2385763,63 32,63 Z M89,50 C91.7614237,50 94,47.7614237 94,45 C94,42.2385763 91.7614237,40 89,40 C86.2385763,40 84,42.2385763 84,45 C84,47.7614237 86.2385763,50 89,50 Z M80,29 C81.1045695,29 82,28.1045695 82,27 C82,25.8954305 81.1045695,25 80,25 C78.8954305,25 78,25.8954305 78,27 C78,28.1045695 78.8954305,29 80,29 Z M60,91 C61.1045695,91 62,90.1045695 62,89 C62,87.8954305 61.1045695,87 60,87 C58.8954305,87 58,87.8954305 58,89 C58,90.1045695 58.8954305,91 60,91 Z M35,41 C36.1045695,41 37,40.1045695 37,39 C37,37.8954305 36.1045695,37 35,37 C33.8954305,37 33,37.8954305 33,39 C33,40.1045695 33.8954305,41 35,41 Z M12,60 C13.1045695,60 14,59.1045695 14,58 C14,56.8954305 13.1045695,56 12,56 C10.8954305,56 10,56.8954305 10,58 C10,59.1045695 10.8954305,60 12,60 Z"></path></pattern>'
    },
    clouds: {
        def: '<pattern id="{patternId}" viewBox="0 0 56 28" width="56" height="28" patternUnits="userSpaceOnUse"><path fill="{color}" d="M56 26v2h-7.75c2.3-1.27 4.94-2 7.75-2zm-26 2a2 2 0 1 0-4 0h-4.09A25.98 25.98 0 0 0 0 16v-2c.67 0 1.34.02 2 .07V14a2 2 0 0 0-2-2v-2a4 4 0 0 1 3.98 3.6 28.09 28.09 0 0 1 2.8-3.86A8 8 0 0 0 0 6V4a9.99 9.99 0 0 1 8.17 4.23c.94-.95 1.96-1.83 3.03-2.63A13.98 13.98 0 0 0 0 0h7.75c2 1.1 3.73 2.63 5.1 4.45 1.12-.72 2.3-1.37 3.53-1.93A20.1 20.1 0 0 0 14.28 0h2.7c.45.56.88 1.14 1.29 1.74 1.3-.48 2.63-.87 4-1.15-.11-.2-.23-.4-.36-.59H26v.07a28.4 28.4 0 0 1 4 0V0h4.09l-.37.59c1.38.28 2.72.67 4.01 1.15.4-.6.84-1.18 1.3-1.74h2.69a20.1 20.1 0 0 0-2.1 2.52c1.23.56 2.41 1.2 3.54 1.93A16.08 16.08 0 0 1 48.25 0H56c-4.58 0-8.65 2.2-11.2 5.6 1.07.8 2.09 1.68 3.03 2.63A9.99 9.99 0 0 1 56 4v2a8 8 0 0 0-6.77 3.74c1.03 1.2 1.97 2.5 2.79 3.86A4 4 0 0 1 56 10v2a2 2 0 0 0-2 2.07 28.4 28.4 0 0 1 2-.07v2c-9.2 0-17.3 4.78-21.91 12H30zM7.75 28H0v-2c2.81 0 5.46.73 7.75 2zM56 20v2c-5.6 0-10.65 2.3-14.28 6h-2.7c4.04-4.89 10.15-8 16.98-8zm-39.03 8h-2.69C10.65 24.3 5.6 22 0 22v-2c6.83 0 12.94 3.11 16.97 8zm15.01-.4a28.09 28.09 0 0 1 2.8-3.86 8 8 0 0 0-13.55 0c1.03 1.2 1.97 2.5 2.79 3.86a4 4 0 0 1 7.96 0zm14.29-11.86c1.3-.48 2.63-.87 4-1.15a25.99 25.99 0 0 0-44.55 0c1.38.28 2.72.67 4.01 1.15a21.98 21.98 0 0 1 36.54 0zm-5.43 2.71c1.13-.72 2.3-1.37 3.54-1.93a19.98 19.98 0 0 0-32.76 0c1.23.56 2.41 1.2 3.54 1.93a15.98 15.98 0 0 1 25.68 0zm-4.67 3.78c.94-.95 1.96-1.83 3.03-2.63a13.98 13.98 0 0 0-22.4 0c1.07.8 2.09 1.68 3.03 2.63a9.99 9.99 0 0 1 16.34 0z"></path></pattern>'
    },
    zigzag: {
        def: '<pattern id="{patternId}" width="40" height="12" viewBox="0 0 40 12" patternUnits="userSpaceOnUse"><path stroke="none" stroke-width="1" fill="{color}" fill-rule="evenodd" d="M2.84217094e-14,6.17157288 L6.17157288,0 L11.8284271,0 L0,11.8284271 L2.84217094e-14,6.17157288 L2.84217094e-14,6.17157288 Z M40,11.8284271 L28.1715729,0 L33.8284271,3.55271368e-15 L40,6.17157288 L40,11.8284271 L40,11.8284271 Z M6.17157288,12 L18.1715729,0 L21.8284271,0 L33.8284271,12 L28.1715729,12 L20,3.82842712 L11.8284271,12 L6.17157288,12 L6.17157288,12 Z M18.1715729,12 L20,10.1715729 L21.8284271,12 L18.1715729,12 L18.1715729,12 Z"></path></pattern>'
    },
    bathroomfloor: {
        def: '<pattern id="{patternId}" viewBox="0 0 80 80" width="80" height="80" patternUnits="userSpaceOnUse"><path fill="{color}" fill-rule="evenodd" d="M0 0h40v40H0V0zm40 40h40v40H40V40zm0-40h2l-2 2V0zm0 4l4-4h2l-6 6V4zm0 4l8-8h2L40 10V8zm0 4L52 0h2L40 14v-2zm0 4L56 0h2L40 18v-2zm0 4L60 0h2L40 22v-2zm0 4L64 0h2L40 26v-2zm0 4L68 0h2L40 30v-2zm0 4L72 0h2L40 34v-2zm0 4L76 0h2L40 38v-2zm0 4L80 0v2L42 40h-2zm4 0L80 4v2L46 40h-2zm4 0L80 8v2L50 40h-2zm4 0l28-28v2L54 40h-2zm4 0l24-24v2L58 40h-2zm4 0l20-20v2L62 40h-2zm4 0l16-16v2L66 40h-2zm4 0l12-12v2L70 40h-2zm4 0l8-8v2l-6 6h-2zm4 0l4-4v2l-2 2h-2z"/></pattern>'
    },
    circuit: {
        def: '<pattern id="{patternId}" viewBox="0 0 304 304" width="304" height="304" patternUnits="userSpaceOnUse"><rect width="100%" height="100%" fill="{color}"/><path fill="#FFF" d="M44.1 224a5 5 0 1 1 0 2H0v-2h44.1zm160 48a5 5 0 1 1 0 2H82v-2h122.1zm57.8-46a5 5 0 1 1 0-2H304v2h-42.1zm0 16a5 5 0 1 1 0-2H304v2h-42.1zm6.2-114a5 5 0 1 1 0 2h-86.2a5 5 0 1 1 0-2h86.2zm-256-48a5 5 0 1 1 0 2H0v-2h12.1zm185.8 34a5 5 0 1 1 0-2h86.2a5 5 0 1 1 0 2h-86.2zM258 12.1a5 5 0 1 1-2 0V0h2v12.1zm-64 208a5 5 0 1 1-2 0v-54.2a5 5 0 1 1 2 0v54.2zm48-198.2V80h62v2h-64V21.9a5 5 0 1 1 2 0zm16 16V64h46v2h-48V37.9a5 5 0 1 1 2 0zm-128 96V208h16v12.1a5 5 0 1 1-2 0V210h-16v-76.1a5 5 0 1 1 2 0zm-5.9-21.9a5 5 0 1 1 0 2H114v48H85.9a5 5 0 1 1 0-2H112v-48h12.1zm-6.2 130a5 5 0 1 1 0-2H176v-74.1a5 5 0 1 1 2 0V242h-60.1zm-16-64a5 5 0 1 1 0-2H114v48h10.1a5 5 0 1 1 0 2H112v-48h-10.1zM66 284.1a5 5 0 1 1-2 0V274H50v30h-2v-32h18v12.1zM236.1 176a5 5 0 1 1 0 2H226v94h48v32h-2v-30h-48v-98h12.1zm25.8-30a5 5 0 1 1 0-2H274v44.1a5 5 0 1 1-2 0V146h-10.1zm-64 96a5 5 0 1 1 0-2H208v-80h16v-14h-42.1a5 5 0 1 1 0-2H226v18h-16v80h-12.1zm86.2-210a5 5 0 1 1 0 2H272V0h2v32h10.1zM98 101.9V146H53.9a5 5 0 1 1 0-2H96v-42.1a5 5 0 1 1 2 0zM53.9 34a5 5 0 1 1 0-2H80V0h2v34H53.9zm60.1 3.9V66H82v64H69.9a5 5 0 1 1 0-2H80V64h32V37.9a5 5 0 1 1 2 0zM101.9 82a5 5 0 1 1 0-2H128V37.9a5 5 0 1 1 2 0V82h-28.1zm16-64a5 5 0 1 1 0-2H146v44.1a5 5 0 1 1-2 0V18h-26.1zm102.2 270a5 5 0 1 1 0 2H98v14h-2v-16h124.1zM242 149.9V160h16v34h-16v62h48v48h-2v-46h-48v-66h16v-30h-16v-12.1a5 5 0 1 1 2 0zM53.9 18a5 5 0 1 1 0-2H64V2H48V0h18v18H53.9zm112 32a5 5 0 1 1 0-2H192V0h50v2h-48v48h-28.1zm-48-48a5 5 0 0 1-9.8-2h2.07a3 3 0 1 0 5.66 0H178v34h-18V21.9a5 5 0 1 1 2 0V32h14V2h-58.1zm0 96a5 5 0 1 1 0-2H137l32-32h39V21.9a5 5 0 1 1 2 0V66h-40.17l-32 32H117.9zm28.1 90.1a5 5 0 1 1-2 0v-76.51L175.59 80H224V21.9a5 5 0 1 1 2 0V82h-49.59L146 112.41v75.69zm16 32a5 5 0 1 1-2 0v-99.51L184.59 96H300.1a5 5 0 0 1 3.9-3.9v2.07a3 3 0 0 0 0 5.66v2.07a5 5 0 0 1-3.9-3.9H185.41L162 121.41v98.69zm-144-64a5 5 0 1 1-2 0v-3.51l48-48V48h32V0h2v50H66v55.41l-48 48v2.69zM50 53.9v43.51l-48 48V208h26.1a5 5 0 1 1 0 2H0v-65.41l48-48V53.9a5 5 0 1 1 2 0zm-16 16V89.41l-34 34v-2.82l32-32V69.9a5 5 0 1 1 2 0zM12.1 32a5 5 0 1 1 0 2H9.41L0 43.41V40.6L8.59 32h3.51zm265.8 18a5 5 0 1 1 0-2h18.69l7.41-7.41v2.82L297.41 50H277.9zm-16 160a5 5 0 1 1 0-2H288v-71.41l16-16v2.82l-14 14V210h-28.1zm-208 32a5 5 0 1 1 0-2H64v-22.59L40.59 194H21.9a5 5 0 1 1 0-2H41.41L66 216.59V242H53.9zm150.2 14a5 5 0 1 1 0 2H96v-56.6L56.6 162H37.9a5 5 0 1 1 0-2h19.5L98 200.6V256h106.1zm-150.2 2a5 5 0 1 1 0-2H80v-46.59L48.59 178H21.9a5 5 0 1 1 0-2H49.41L82 208.59V258H53.9zM34 39.8v1.61L9.41 66H0v-2h8.59L32 40.59V0h2v39.8zM2 300.1a5 5 0 0 1 3.9 3.9H3.83A3 3 0 0 0 0 302.17V256h18v48h-2v-46H2v42.1zM34 241v63h-2v-62H0v-2h34v1zM17 18H0v-2h16V0h2v18h-1zm273-2h14v2h-16V0h2v16zm-32 273v15h-2v-14h-14v14h-2v-16h18v1zM0 92.1A5.02 5.02 0 0 1 6 97a5 5 0 0 1-6 4.9v-2.07a3 3 0 1 0 0-5.66V92.1zM80 272h2v32h-2v-32zm37.9 32h-2.07a3 3 0 0 0-5.66 0h-2.07a5 5 0 0 1 9.8 0zM5.9 0A5.02 5.02 0 0 1 0 5.9V3.83A3 3 0 0 0 3.83 0H5.9zm294.2 0h2.07A3 3 0 0 0 304 3.83V5.9a5 5 0 0 1-3.9-5.9zm3.9 300.1v2.07a3 3 0 0 0-1.83 1.83h-2.07a5 5 0 0 1 3.9-3.9zM97 100a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-48 32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm32 48a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm32-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm32 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16-64a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 96a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-144a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-96 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm96 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16-64a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-32 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM49 36a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-32 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm32 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM33 68a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-48a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 240a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16-64a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16-32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm80-176a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm32 48a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm112 176a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM17 180a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM17 84a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm32 64a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"></path></pattern>'
    },
    glamorous: {
        def: '<pattern id="{patternId}" width="180" height="180" viewBox="0 0 180 180" patternUnits="userSpaceOnUse"><rect width="100%" height="100%" fill="{color}"/><path d="M81.2792408,88 L68.4142136,88 L87.7117544,107.297541 L81.2792408,88 L81.2792408,88 Z M83.3874259,88 L96.6125741,88 L90,107.837722 L83.3874259,88 L83.3874259,88 Z M98.7207592,88 L111.585786,88 L92.2882456,107.297541 L98.7207592,88 L98.7207592,88 Z M65.7928932,85.7928932 L73.5857864,78 L75.2071068,78 L105.792893,78 L106.414214,78 L106.914214,78.5 L114.207107,85.7928932 L115.414214,87 L90.7071068,111.707107 L90,112.414214 L64.5857864,87 L64.5857864,87 L65.7928932,85.7928932 L65.7928932,85.7928932 Z M68.4142136,86 L74,80.4142136 L79.5857864,86 L68.4142136,86 L68.4142136,86 Z M84.4142136,86 L90,80.4142136 L95.5857864,86 L84.4142136,86 L84.4142136,86 Z M100.414214,86 L106,80.4142136 L111.585786,86 L100.414214,86 L100.414214,86 Z M92.4142136,80 L103.585786,80 L98,85.5857864 L92.4142136,80 L92.4142136,80 Z M82,85.5857864 L87.5857864,80 L76.4142136,80 L82,85.5857864 L82,85.5857864 Z M17.4142136,0 L0.707106781,16.7071068 L0,17.4142136 L0,0 L17.4142136,0 L17.4142136,0 Z M4.27924078,0 L0,12.8377223 L0,0 L4.27924078,0 L4.27924078,0 Z M14.5857864,0 L2.28824561,12.2975408 L6.38742589,0 L14.5857864,0 L14.5857864,0 Z M180,17.4142136 L162.585786,0 L180,0 L180,17.4142136 L180,17.4142136 Z M165.414214,0 L177.711754,12.2975408 L173.612574,0 L165.414214,0 Z M180,12.8377223 L175.720759,0 L180,0 L180,12.8377223 L180,12.8377223 Z M1.42108547e-14,163 L15.7928932,163 L16.4142136,163 L16.9142136,163.5 L24.2071068,170.792893 L25.4142136,172 L17.4142136,180 L0,180 L0,163 L1.42108547e-14,163 Z M0,173 L6.61257411,173 L4.27924078,180 L0,180 L0,173 Z M14.5857864,180 L21.5857864,173 L8.72075922,173 L6.38742589,180 L14.5857864,180 Z M2.4158453e-13,165.414214 L5.58578644,171 L0,171 L0,165.414214 L2.4158453e-13,165.414214 Z M10.4142136,171 L16,165.414214 L21.5857864,171 L10.4142136,171 Z M2.41421356,165 L13.5857864,165 L8,170.585786 L2.41421356,165 Z M180,163 L165.207107,163 L163.585786,163 L155.792893,170.792893 L155.792893,170.792893 L154.585786,172 L162.585786,180 L180,180 L180,163 Z M165.414214,180 L158.414214,173 L171.279241,173 L173.612574,180 L165.414214,180 Z M180,173 L173.387426,173 L175.720759,180 L180,180 L180,173 Z M158.414214,171 L164,165.414214 L169.585786,171 L158.414214,171 Z M180,165.414214 L174.414214,171 L180,171 L180,165.414214 Z M172,170.585786 L177.585786,165 L166.414214,165 L172,170.585786 Z M152.932504,25.6532829 L154.346717,27.0674965 L120.405592,61.008622 L118.991378,59.5944084 L152.932504,25.6532829 Z M154.346717,152.932504 L152.932504,154.346717 L118.991378,120.405592 L120.405592,118.991378 L154.346717,152.932504 Z M27.0674965,154.346717 L25.6532829,152.932504 L59.5944084,118.991378 L61.008622,120.405592 L27.0674965,154.346717 Z M25.6532829,27.0674965 L27.0674965,25.6532829 L61.008622,59.5944084 L59.5944084,61.008622 L25.6532829,27.0674965 Z M0,85 C2.209139,85 4,86.790861 4,89 C4,91.209139 2.209139,93 0,93 L0,85 Z M180,85 C177.790861,85 176,86.790861 176,89 C176,91.209139 177.790861,93 180,93 L180,85 Z M94,0 C94,2.209139 92.209139,4 90,4 C87.790861,4 86,2.209139 86,0 L94,0 Z M94,180 C94,177.790861 92.209139,176 90,176 C87.790861,176 86,177.790861 86,180 L94,180 Z" fill="#FFF" stroke-width="5" fill-rule="evenodd"></path></pattern>'
    }
}

const drawColor = (paletteNumber) => {

    const palette = colorPalettes[paletteNumber]

    if (typeof palette.colorsDraw === 'undefined') {
        palette.colorsDraw = []

    }
    if (palette.colorsDraw.length == 0) {
        palette.colorsDraw = palette.colors.slice();
    }

    const colorsDraw = palette.colorsDraw
    const prvColor = palette.prvColor

    let nextIndex = palette.order === 'FIXED' ? 0 : Math.floor(Math.random() * colorsDraw.length)
    let nextColor = colorsDraw[nextIndex]

    // prevent same color in case of new colorsDraw (last form prev == new from brand new colorsDraw)
    if (nextColor === prvColor) {
        nextIndex = (nextIndex + 1 < colorsDraw.length) ? nextIndex + 1 : 0;
        nextColor = colorsDraw[nextIndex]
    }

    // remove used color
    colorsDraw.splice(nextIndex, 1)

    palette.prvColor = nextColor

    return nextColor
}

const createPage = (template, width, height, letter, color, shapeName, textureName) => {
    const letterEscaped = _.escape(letter)

    const shape = shapes[shapeName]

    // prepare pattern
    const patternTemplate = textures[textureName].def
    const patternId = textureName + color
    const patternValueObj = {
        color: '#' + color,
        patternId: patternId
    }
    const patternDef = patternTemplate.replace(/{([^{}]+)}/g, function (keyExpr, key) {
        return patternValueObj[key]
    });

    // prepare page
    const templateValues = {
        'width': width,
        'height': height,
        'fill': textureName === 'none' ? '#' + color : 'url(#' + patternId + ')',
        'letterEscaped': letterEscaped,
        'shape-d': shape.d,
        'shape-char-x': shape.charX,
        'shape-char-y': shape.charY,
        'shape-font-size': shape.fontSize,
        'def-pattern': patternDef
    }
    const page = template.replace(/{([^{}]+)}/g, function (keyExpr, key) {
        return templateValues[key]
    });

    return page;
}

const generateContent = (textToGenerate, paletteNumber, shapeName, textureName) => {
    const contentGenerated = []
    textToGenerate.toUpperCase().replace(/\s/g, "").split("").forEach(letter => {
        const randomColor = drawColor(paletteNumber)

        const page = createPage(pageTemplate, 495, 672, letter, randomColor, shapeName, textureName)
        contentGenerated.push({
            svg: page
        })
    });
    return contentGenerated;
}

const validateInput = (textToGenerate) => {

    const inputEl = document.getElementById("input_generateText")

    if (textToGenerate.length === 0) {
        inputEl.classList.add('is-invalid');
        inputEl.scrollIntoView({ block: "center" });
        return 'Please insert your banner text'
    } else {
        inputEl.classList.remove('is-invalid')
        inputEl.classList.add('is-valid')
        return ''
    }

}

const sendEvent = (textToGenerate) => {
    if (typeof pa !== 'undefined') {
        pa.track({
            name: 'click-generate_summary'
        })
        pa.track({
            name: 'click-generate_' + textToGenerate
        })
    }
}

const prepareViewData = () => {

    const shapesToShow = Object.getOwnPropertyNames(shapes).map(
        shapeName => ({
            name: shapeName,
            free: shapes[shapeName].free,
            svg: createPage(designUI_shapePreview, '100%', '100%', 'B', config.designui_color_preview, shapeName, 'none')
        })
    )

    const patternToShow = Object.getOwnPropertyNames(textures).map(
        patternName => ({
            name: patternName,
            free: textures[patternName].free,
            svg: createPage(designUI_patternPreview, '100%', '100%', '.', config.designui_color_preview, 'rectangle', patternName)
        })
    )

    return {
        shapes: shapesToShow,
        colorPalettes: colorPalettes,
        patterns: patternToShow,
    }
}

const prepareFilename = (textToGenerate) => {
    const shortTextToGenerate = textToGenerate.substring(0, 10);
    const dashInsteadOfSpaces = shortTextToGenerate.replace(/\s/g, '-')
    return 'bigdaybanner_' + dashInsteadOfSpaces + '.pdf';
}

var app = new Vue({
    el: '#app',
    data: {
        bannerValue: '',
        input_generateText_error: '',
        viewData: prepareViewData(),
        selectedShape: 'tooth',
        selectedColorPalette: 0,
        selectedPattern: 'none',
        generatingInProgress: false,
        showDownloadedText: false,
        payment: {
            show: false,
            periodTitle: '',
            payPalPaymentButtons: undefined,
        },
        seinfeld: false,
        seinfeldCode: undefined,
        seinfeldCodeInput: undefined,
        seinfeldCodeUntilText: undefined
    },

    methods: {
        showPurchaseModal: function () {
            const purchaseModal = new bootstrap.Modal(document.getElementById('purchaseModal'), {});
            purchaseModal.show();
        },

        setSelectedShape: function (selectedShapeName) {
            const shape = shapes[selectedShapeName]
            if (!shape.free && !this.seinfeld) {
                this.showPurchaseModal();
                return;
            }

            this.selectedShape = selectedShapeName
        },

        setSelectedColorPalette: function (colorPaletteIndex) {
            const palette = colorPalettes[colorPaletteIndex]
            if (!palette.free && !this.seinfeld) {
                this.showPurchaseModal();
                return;
            }
            this.selectedColorPalette = colorPaletteIndex
        },

        setSelectedPattern: function (selectedPatternName) {
            const pattern = textures[selectedPatternName]
            if (!pattern.free && !this.seinfeld) {
                this.showPurchaseModal();
                return;
            }
            this.selectedPattern = selectedPatternName
        },

        generate: function () {
            this.input_generateText_error = validateInput(this.bannerValue);
            if (this.input_generateText_error.length !== 0) {
                return
            }

            this.generatingInProgress = true;

            sendEvent(this.bannerValue);

            pdfMake.fonts = fonts;

            const docDefinition = {
                content: generateContent(this.bannerValue, this.selectedColorPalette, this.selectedShape, this.selectedPattern),
                pageSize: 'A4',
                pageOrientation: 'portrait',
                pageMargins: [50, 120, 50, 50],
                info: {
                    title: 'PDF banner generator',
                    author: 'www.bigdaybanner.com',
                    subject: 'PDF banner generator',
                    keywords: 'birthday banner generator free pdf',
                    creator: 'www.bigdaybanner.com',
                    producer: 'www.bigdaybanner.com'
                },
                defaultStyle: {
                    font: 'Hack'
                }
            };

            const pdfDoc = pdfMake.createPdf(docDefinition)

            // --- Open (opening may not work in some browsers)
            // const win = window.open('', '_blank');
            // pdfDoc.open({}, win);

            // --- download (should work in every browser)
            const filename = prepareFilename(this.bannerValue);
            const callback = () => {
                this.generatingInProgress = false;
                this.showDownloadedText = true;
            }
            pdfDoc.download(defaultFileName = filename, cb = callback);

            setTimeout(() => this.generatingInProgress = false, 2000) // just in case callback fails

            setTimeout(() => this.showDownloadedText = false, 7000)

            // reset colors
            delete colorPalettes[this.selectedColorPalette].colorsDraw
        },

        openPayment: function (paymentOption) {
            let dolars = 1
            let periodMs = 2592000000
            switch (paymentOption) {
                case 1:
                    this.payment.periodTitle = '1 hour'
                    dolars = 1
                    periodMs = 3600000
                    break;
                case 2:
                    this.payment.periodTitle = '24 hours'
                    dolars = 3
                    periodMs = 86400000
                    break;
                case 3:
                    this.payment.periodTitle = '30 days'
                    dolars = 10
                    periodMs = 2592000000
                    break;
            }

            const validUntil = Date.now() + periodMs + config.time_added_to_each_payment
            const validUntil36 = btoa(validUntil.toString(36)).replace('=', '@')
            this.applyCode(validUntil36)

            const paypalProps = {
                createOrder: function (data, actions) {
                    return actions.order.create({
                        purchase_units: [
                            {
                                "description": "BigDayBanner.com full access",
                                "amount": { "currency_code": "USD", "value": dolars }
                            }
                        ]
                    });
                },
                onApprove: function (data, actions) {
                    return actions.order.capture().then(function (orderData) {
                        app.seinfeld = true

                        // Show a success message within this page, e.g.
                        const element = document.getElementById('paymentContainer');
                        element.innerHTML = '';
                        element.innerHTML = '<h3>Thank you for your payment</h3>';

                    });
                },

                onError: function (err) {
                    console.log(err);
                    const element = document.getElementById('paymentContainer');
                    element.innerHTML = '';
                    element.innerHTML = '<h3>Error occured, payment was not processed</h3>';
                }

            }

            this.payment.show = true;
            this.payment.payPalPaymentButtons = paypal.Buttons(paypalProps);
            this.payment.payPalPaymentButtons.render('#paypalContainer');
        },

        closePayment: function () {
            this.payment.show = false;
            if (this.payment.payPalPaymentButtons) {
                this.payment.payPalPaymentButtons.close()
            }
        },

        applyCodeInput: function () {
            console.log('unlocking');
            console.log(this.applyCode(this.seinfeldCodeInput))
        },

        applyCode: function (inputCode) {
            // TODO: error handling, check if not to far in the future (99999999999)
            const now = Date.now()
            const days31InFuture = now + 2678400000
            const timestamp = parseInt(atob(inputCode.replace('@', '=')), 36)
            if (now > timestamp || timestamp > days31InFuture) {
                return -1
            }
            this.seinfeld = true;
            this.seinfeldCode = inputCode;
            this.seinfeldCodeUntilText = moment(timestamp).format('MMMM Do YYYY, HH:mm');
            localStorage['403e433e-5e0e-46bc-995e-fcf2691ffe35'] = inputCode
        },
    },

    mounted: function () {
        const inputCode = localStorage['403e433e-5e0e-46bc-995e-fcf2691ffe35']
        console.log('mount ' + inputCode);
        if (inputCode) {
            this.applyCode(inputCode)
        }

    }
})

window.onload = function () {
    document.getElementById("input_generateText").focus();
};