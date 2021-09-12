const pageTemplate = '<?xml version="1.0" standalone="no"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN" "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd"><svg xmlns="http://www.w3.org/2000/svg"     xmlns:xlink="http://www.w3.org/1999/xlink"    xmlns:krita="http://krita.org/namespaces/svg/krita"    xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"    width="495" height="672" viewBox="0 0 495 672"><def>{def-pattern}</def><path id="shape0" fill="{fill}" fill-rule="evenodd" stroke="#000000" stroke-width="5" stroke-linecap="square" stroke-linejoin="bevel" d="{shape-d}" /><text id="shape1" krita:useRichText="true" x="{shape-char-x}" y="{shape-char-y}" text-anchor="middle" fill="#FFF" dominant-baseline="middle" font-size="{shape-font-size}" font-stretch="normal" font-weight="600" kerning="0" letter-spacing="0" word-spacing="0" style="stroke:#000000;stroke-width:3px;stroke-linecap:butt;stroke-linejoin:miter">{letterEscaped}</text></svg>'

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
        d: "M0,0 L495,0 L495,672 L247,531 L0,672 L0 0Z",
        charX: '50%', 
        charY: '50%',
        fontSize: '400'
    },
    triangle: {
        d: "M0,0 L495,0 L247,640 L0 0Z",
        charX: '50%',
        charY: '38%',
        fontSize: '300'
    },
    tallTriangle: {
        d: "M0,0 L495,0 L495,500 L247,640 L0,500 L0 0Z",
        charX: '50%',
        charY: '50%',
        fontSize: '400'
    },
    bottomHalfCircle: {
        d: "M0,0 L495,0 L495,400 C495,700 0,700 0,400 L0 0Z",
        charX: '50%',
        charY: '50%',
        fontSize: '400'
    },
    rectangle: {
        d: "M0,0 L495,0 L495,672 L0,672 L0 0Z",
        charX: '50%',
        charY: '50%',
        fontSize: '400'
    }
}

const colorPalettes = {
    0: {
        colors: ['f94144', 'f3722c', 'f8961e', 'f9c74f', '90be6d', '43aa8b', '4CA3DD']
    },
    1: {
        colors: ["001219", "005f73", "0a9396", "94d2bd", "e9d8a6", "ee9b00", "ca6702", "bb3e03", "ae2012", "9b2226"]
    },
    2: {
        colors: ["ef476f", "ffd166", "06d6a0", "118ab2", "073b4c"]
    },
    3: {
        colors: ["ff0000", "ff8700", "ffd300", "deff0a", "a1ff0a", "0aff99", "0aefff", "147df5", "580aff", "be0aff"]
    },
    4: {
        colors: ["9a8f97", "c3baba", "e9e3e6", "b2b2b2", "736f72"]
    }

}

const _config_texture_stripes_size = 80
const _config_texture_stripes_stripeWidth = 50
const textures = {
    'none': {
        def: ''
    },
    'stars': {
        def: '<pattern id="texture" viewBox="0,0,10,10" width="2%" height="2%"><polygon points="0,0 2,5 0,10 5,8 10,10 8,5 10,0 5,2"/></pattern>'
    },
    'stripes': {
        def: `<pattern id="texture" patternUnits="userSpaceOnUse" 
                       width="${_config_texture_stripes_size}" height="${_config_texture_stripes_size}">
                    <path   d=" M-${_config_texture_stripes_size/2},${_config_texture_stripes_size/2} L${_config_texture_stripes_size/2},-${_config_texture_stripes_size/2}
                                M0,${_config_texture_stripes_size} L${_config_texture_stripes_size},0
                                M${_config_texture_stripes_size-(_config_texture_stripes_stripeWidth/2)},${_config_texture_stripes_size+(_config_texture_stripes_stripeWidth/2)} L${_config_texture_stripes_size+(_config_texture_stripes_stripeWidth/2)},${_config_texture_stripes_size-(_config_texture_stripes_stripeWidth/2)}
                            "
                            style="stroke:orange; stroke-width:${_config_texture_stripes_stripeWidth};" />
                </pattern>`
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

    let randomIndex = Math.floor(Math.random() * colorsDraw.length)
    let randomColor = colorsDraw[randomIndex]

    // prevent same color in case of new colorsDraw (last form prev == new from brand new colorsDraw)
    if (randomColor === prvColor) {
        randomIndex = (randomIndex + 1 < colorsDraw.length) ? randomIndex + 1 : 0;
        randomColor = colorsDraw[randomIndex]
    }

    // remove used color
    colorsDraw.splice(randomIndex, 1)

    palette.prvColor = randomColor

    return randomColor
}

const createPage = (template, letter, color, shapeName, textureName) => {
    const letterEscaped = _.escape(letter)

    const shape = shapes[shapeName]
    const texture = textures[textureName]

    const templateValues = {
        'fill': textureName === 'none' ? '#' + color : 'url(#texture)',
        'letterEscaped': letterEscaped,
        'shape-d': shape.d,
        'shape-char-x': shape.charX,
        'shape-char-y': shape.charY,
        'shape-font-size': shape.fontSize,
        'def-pattern': texture.def
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

        const page = createPage(pageTemplate, letter, randomColor, shapeName, textureName)

        contentGenerated.push({
            svg: page
        })
    });
    return contentGenerated;
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

var app = new Vue({
    el: '#app',
    data: {
        bannerValue: 'Happy birthday!',
    },
    methods: {
        generate: function () {

            sendEvent(this.bannerValue);

            pdfMake.fonts = fonts;

            const docDefinition = {
                content: generateContent(this.bannerValue, 0, 'tooth', 'none'),
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
                },
            };

            const pdfDoc = pdfMake.createPdf(docDefinition);
            pdfDoc.download(defaultFileName = "printout_www-bigdaybanner-com.pdf");
        }
    }
})