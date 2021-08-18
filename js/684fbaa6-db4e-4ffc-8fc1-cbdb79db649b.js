if (!String.prototype.format) {
    String.prototype.format = function () {
        var args = arguments;
        return this.replace(/{(\d+)}/g, function (match, number) {
            return typeof args[number] != 'undefined'
                ? args[number]
                : match
                ;
        });
    };
}

var app = new Vue({
    el: '#app',
    data: {
        bannerValue: 'Happy birthday!'
    },
    methods: {
        generate: function () {

            pdfMake.fonts = {
                Roboto: {
                    normal: 'https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.66/fonts/Roboto/Roboto-Regular.ttf',
                    bold: 'https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.66/fonts/Roboto/Roboto-Medium.ttf',
                    italics: 'https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.66/fonts/Roboto/Roboto-Italic.ttf',
                    bolditalics: 'https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.66/fonts/Roboto/Roboto-MediumItalic.ttf'
                },
                Hack: {
                    nornal: 'https://cdnjs.cloudflare.com/ajax/libs/hack-font/3.3.0/web/fonts/hack-bold.woff',
                    bold: 'https://cdnjs.cloudflare.com/ajax/libs/hack-font/3.3.0/web/fonts/hack-bold.woff',
                    italics: 'https://cdnjs.cloudflare.com/ajax/libs/hack-font/3.3.0/web/fonts/hack-bold.woff',
                    bolditalics: 'https://cdnjs.cloudflare.com/ajax/libs/hack-font/3.3.0/web/fonts/hack-bold.woff'
                }
            }

            var pageTemplate = '<?xml version="1.0" standalone="no"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN" "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd"><svg xmlns="http://www.w3.org/2000/svg"     xmlns:xlink="http://www.w3.org/1999/xlink"    xmlns:krita="http://krita.org/namespaces/svg/krita"    xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"    width="495" height="672" viewBox="0 0 495 672"><defs/><path id="shape0" fill="{0}" fill-rule="evenodd" stroke="#000000" stroke-width="5" stroke-linecap="square"  stroke="#000"   stroke-linejoin="bevel" d="M0,0 L495,0 L495,672 L247,531 L0,672 L0 0Z" /><text id="shape1" krita:useRichText="true" x="50%" y="50%" text-anchor="middle" fill="#FFF" dominant-baseline="middle" font-size="400" font-stretch="normal" font-weight="600" kerning="0" letter-spacing="0" word-spacing="0" style="stroke:#000000;stroke-width:3px;stroke-linecap:butt;stroke-linejoin:miter">{1}</text></svg>'

            var colors = ['#f94144', '#f3722c', '#f8961e', '#f9c74f', '#90be6d', '#43aa8b', '#4CA3DD']
            var colorsDraw = colors.slice();

            var contentGenerated = []
            this.bannerValue.toUpperCase().replace(/\s/g, "").split("").forEach(letter => {
                if (colorsDraw.length == 0) {
                    colorsDraw = colors.slice();
                }
                var randomIndex = Math.floor(Math.random() * colorsDraw.length)
                var randomColor = colorsDraw[randomIndex]
                colorsDraw.splice(randomIndex, 1)
                contentGenerated.push({ svg: pageTemplate.format(randomColor, letter) })
            });

            var docDefinition = {
                content: contentGenerated,
                pageSize: 'A4',
                pageOrientation: 'portrait',
                pageMargins: [50, 120, 50, 50],
                info: {
                    title: 'B-day banner generator',
                    author: 'www.bdaybanner.com',
                    subject: 'B-day banner generator',
                    keywords: 'birthday banner generator free',
                    creator: 'www.bdaybanner.com',
                    producer: 'www.bdaybanner.com'
                },
                defaultStyle: {
                    font: 'Hack'
                },
            };


            var pdfDoc = pdfMake.createPdf(docDefinition);
            pdfDoc.download();
            // pdfDoc.print();

            // alert(this.bannerValue)
        }
    }
})