const pageTemplate = '<svg width="{width}" height="{height}" viewBox="0 0 495 672"><defs>{def-pattern}</defs><path id="shape0" fill="{fill}" stroke="#000000" stroke-width="4" d="{shape-d}" /><text id="shape1" x="{shape-char-x}" y="{shape-char-y}" text-anchor="middle" fill="#FFF" dominant-baseline="middle" font-size="{shape-font-size}" font-stretch="normal" font-weight="600" style="stroke:#000000;stroke-width:4px;">{letterEscaped}</text></svg>'

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
        fontSize: '400'
    },
    triangle: {
        d: "M3,3 L492,3 L246,640 Z",
        charX: '50%',
        charY: '38%',
        fontSize: '300'
    },
    tallTriangle: {
        d: "M3,3 L492,0 L492,500 L246,640 L3,500 Z",
        charX: '50%',
        charY: '50%',
        fontSize: '400'
    },
    bottomHalfCircle: {
        d: "M3,3 L492,3 L492,400 C492,700 3,700 3,400 Z",
        charX: '50%',
        charY: '50%',
        fontSize: '400'
    },
    rectangle: {
        d: "M3,3 L492,3 L492,669 L3,669 Z",
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
        def: '<pattern id="stars" viewBox="0,0,10,10" width="2%" height="2%"><polygon points="0,0 2,5 0,10 5,8 10,10 8,5 10,0 5,2"/></pattern>'
    },
    'stripes': {
        def: `<pattern id="stripes" patternUnits="userSpaceOnUse" 
                       width="${_config_texture_stripes_size}" height="${_config_texture_stripes_size}">
                    <path   d=" M-${_config_texture_stripes_size / 2},${_config_texture_stripes_size / 2} L${_config_texture_stripes_size / 2},-${_config_texture_stripes_size / 2}
                                M0,${_config_texture_stripes_size} L${_config_texture_stripes_size},0
                                M${_config_texture_stripes_size - (_config_texture_stripes_stripeWidth / 2)},${_config_texture_stripes_size + (_config_texture_stripes_stripeWidth / 2)} L${_config_texture_stripes_size + (_config_texture_stripes_stripeWidth / 2)},${_config_texture_stripes_size - (_config_texture_stripes_stripeWidth / 2)}
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

const createPage = (template, width, height, letter, color, shapeName, textureName) => {
    const letterEscaped = _.escape(letter)

    const shape = shapes[shapeName]
    const texture = textures[textureName]

    const templateValues = {
        'width': width,
        'height': height,
        'fill': textureName === 'none' ? '#' + color : 'url(#' + textureName + ')',
        'letterEscaped': letterEscaped,
        'shape-d': shape.d,
        'shape-char-x': shape.charX,
        'shape-char-y': shape.charY,
        'shape-font-size': shape.fontSize,
        'def-pattern': texture.def
    }
    const page = template.replace(/{([^{}]+)}/g, function(keyExpr, key) {
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
            svg: createPage(pageTemplate, '100%', '100%', 'B', "e6f2ff", shapeName, 'none')
        })
    )

    const patternToShow = Object.getOwnPropertyNames(textures).map(
        patternName => ({
            name: patternName,
            svg: createPage(pageTemplate, '100%', '100%', 'B', "e6f2ff", 'rectangle', patternName)
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
        selectedPattern: 'none'
    },
    methods: {
        setSelectedShape: function(selectedShapeName) {
            this.selectedShape = selectedShapeName
        },

        setSelectedColorPalette: function(colorPaletteIndex) {
            this.selectedColorPalette = colorPaletteIndex
        },

        setSelectedPattern: function(selectedPatternName) {
            this.selectedPattern = selectedPatternName
        },

        generate: function() {
            this.input_generateText_error = validateInput(this.bannerValue);
            if (this.input_generateText_error.length !== 0) {
                return
            }

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
                },
            };

            const pdfDoc = pdfMake.createPdf(docDefinition);
            pdfDoc.download(defaultFileName = prepareFilename(this.bannerValue));
        }
    }
})

window.onload = function() {
    document.getElementById("input_generateText").focus();
};
