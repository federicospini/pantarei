!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var f;"undefined"!=typeof window?f=window:"undefined"!=typeof global?f=global:"undefined"!=typeof self&&(f=self),f.parse5=e()}}(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

//Const
var VALID_DOCTYPE_NAME = 'html',
    QUIRKS_MODE_SYSTEM_ID = 'http://www.ibm.com/data/dtd/v11/ibmxhtml1-transitional.dtd',
    QUIRKS_MODE_PUBLIC_ID_PREFIXES = [
        '+//silmaril//dtd html pro v0r11 19970101//en',
        '-//advasoft ltd//dtd html 3.0 aswedit + extensions//en',
        '-//as//dtd html 3.0 aswedit + extensions//en',
        '-//ietf//dtd html 2.0 level 1//en',
        '-//ietf//dtd html 2.0 level 2//en',
        '-//ietf//dtd html 2.0 strict level 1//en',
        '-//ietf//dtd html 2.0 strict level 2//en',
        '-//ietf//dtd html 2.0 strict//en',
        '-//ietf//dtd html 2.0//en',
        '-//ietf//dtd html 2.1e//en',
        '-//ietf//dtd html 3.0//en',
        '-//ietf//dtd html 3.0//en//',
        '-//ietf//dtd html 3.2 final//en',
        '-//ietf//dtd html 3.2//en',
        '-//ietf//dtd html 3//en',
        '-//ietf//dtd html level 0//en',
        '-//ietf//dtd html level 0//en//2.0',
        '-//ietf//dtd html level 1//en',
        '-//ietf//dtd html level 1//en//2.0',
        '-//ietf//dtd html level 2//en',
        '-//ietf//dtd html level 2//en//2.0',
        '-//ietf//dtd html level 3//en',
        '-//ietf//dtd html level 3//en//3.0',
        '-//ietf//dtd html strict level 0//en',
        '-//ietf//dtd html strict level 0//en//2.0',
        '-//ietf//dtd html strict level 1//en',
        '-//ietf//dtd html strict level 1//en//2.0',
        '-//ietf//dtd html strict level 2//en',
        '-//ietf//dtd html strict level 2//en//2.0',
        '-//ietf//dtd html strict level 3//en',
        '-//ietf//dtd html strict level 3//en//3.0',
        '-//ietf//dtd html strict//en',
        '-//ietf//dtd html strict//en//2.0',
        '-//ietf//dtd html strict//en//3.0',
        '-//ietf//dtd html//en',
        '-//ietf//dtd html//en//2.0',
        '-//ietf//dtd html//en//3.0',
        '-//metrius//dtd metrius presentational//en',
        '-//microsoft//dtd internet explorer 2.0 html strict//en',
        '-//microsoft//dtd internet explorer 2.0 html//en',
        '-//microsoft//dtd internet explorer 2.0 tables//en',
        '-//microsoft//dtd internet explorer 3.0 html strict//en',
        '-//microsoft//dtd internet explorer 3.0 html//en',
        '-//microsoft//dtd internet explorer 3.0 tables//en',
        '-//netscape comm. corp.//dtd html//en',
        '-//netscape comm. corp.//dtd strict html//en',
        '-//o\'reilly and associates//dtd html 2.0//en',
        '-//o\'reilly and associates//dtd html extended 1.0//en',
        '-//spyglass//dtd html 2.0 extended//en',
        '-//sq//dtd html 2.0 hotmetal + extensions//en',
        '-//sun microsystems corp.//dtd hotjava html//en',
        '-//sun microsystems corp.//dtd hotjava strict html//en',
        '-//w3c//dtd html 3 1995-03-24//en',
        '-//w3c//dtd html 3.2 draft//en',
        '-//w3c//dtd html 3.2 final//en',
        '-//w3c//dtd html 3.2//en',
        '-//w3c//dtd html 3.2s draft//en',
        '-//w3c//dtd html 4.0 frameset//en',
        '-//w3c//dtd html 4.0 transitional//en',
        '-//w3c//dtd html experimental 19960712//en',
        '-//w3c//dtd html experimental 970421//en',
        '-//w3c//dtd w3 html//en',
        '-//w3o//dtd w3 html 3.0//en',
        '-//w3o//dtd w3 html 3.0//en//',
        '-//webtechs//dtd mozilla html 2.0//en',
        '-//webtechs//dtd mozilla html//en'
    ],
    QUIRKS_MODE_NO_SYSTEM_ID_PUBLIC_ID_PREFIXES = [
        '-//w3c//dtd html 4.01 frameset//',
        '-//w3c//dtd html 4.01 transitional//'
    ],
    QUIRKS_MODE_PUBLIC_IDS = [
        '-//w3o//dtd w3 html strict 3.0//en//',
        '-/w3c/dtd html 4.0 transitional/en',
        'html'
    ];


//Utils
function enquoteDoctypeId(id) {
    var quote = id.indexOf('"') !== -1 ? '\'' : '"';

    return quote + id + quote;
}


//API
exports.isQuirks = function (name, publicId, systemId) {
    if (name !== VALID_DOCTYPE_NAME)
        return true;

    if (systemId && systemId.toLowerCase() === QUIRKS_MODE_SYSTEM_ID)
        return true;

    if (publicId !== null) {
        publicId = publicId.toLowerCase();

        if (QUIRKS_MODE_PUBLIC_IDS.indexOf(publicId) > -1)
            return true;

        var prefixes = QUIRKS_MODE_PUBLIC_ID_PREFIXES;

        if (systemId === null)
            prefixes = prefixes.concat(QUIRKS_MODE_NO_SYSTEM_ID_PUBLIC_ID_PREFIXES);

        for (var i = 0; i < prefixes.length; i++) {
            if (publicId.indexOf(prefixes[i]) === 0)
                return true;
        }
    }

    return false;
};

exports.serializeContent = function (name, publicId, systemId) {
    var str = '!DOCTYPE ';

    if(name)
        str += name;

    if (publicId !== null)
        str += ' PUBLIC ' + enquoteDoctypeId(publicId);

    else if (systemId !== null)
        str += ' SYSTEM';

    if (systemId !== null)
        str += ' ' + enquoteDoctypeId(systemId);

    return str;
};

},{}],2:[function(require,module,exports){
'use strict';

var Tokenizer = require('../tokenizer'),
    HTML = require('./html');

//Aliases
var $ = HTML.TAG_NAMES,
    NS = HTML.NAMESPACES,
    ATTRS = HTML.ATTRS;


//MIME types
var MIME_TYPES = {
    TEXT_HTML: 'text/html',
    APPLICATION_XML: 'application/xhtml+xml'
};

//Attributes
var DEFINITION_URL_ATTR = 'definitionurl',
    ADJUSTED_DEFINITION_URL_ATTR = 'definitionURL',
    SVG_ATTRS_ADJUSTMENT_MAP = {
        'attributename': 'attributeName',
        'attributetype': 'attributeType',
        'basefrequency': 'baseFrequency',
        'baseprofile': 'baseProfile',
        'calcmode': 'calcMode',
        'clippathunits': 'clipPathUnits',
        'diffuseconstant': 'diffuseConstant',
        'edgemode': 'edgeMode',
        'filterunits': 'filterUnits',
        'glyphref': 'glyphRef',
        'gradienttransform': 'gradientTransform',
        'gradientunits': 'gradientUnits',
        'kernelmatrix': 'kernelMatrix',
        'kernelunitlength': 'kernelUnitLength',
        'keypoints': 'keyPoints',
        'keysplines': 'keySplines',
        'keytimes': 'keyTimes',
        'lengthadjust': 'lengthAdjust',
        'limitingconeangle': 'limitingConeAngle',
        'markerheight': 'markerHeight',
        'markerunits': 'markerUnits',
        'markerwidth': 'markerWidth',
        'maskcontentunits': 'maskContentUnits',
        'maskunits': 'maskUnits',
        'numoctaves': 'numOctaves',
        'pathlength': 'pathLength',
        'patterncontentunits': 'patternContentUnits',
        'patterntransform': 'patternTransform',
        'patternunits': 'patternUnits',
        'pointsatx': 'pointsAtX',
        'pointsaty': 'pointsAtY',
        'pointsatz': 'pointsAtZ',
        'preservealpha': 'preserveAlpha',
        'preserveaspectratio': 'preserveAspectRatio',
        'primitiveunits': 'primitiveUnits',
        'refx': 'refX',
        'refy': 'refY',
        'repeatcount': 'repeatCount',
        'repeatdur': 'repeatDur',
        'requiredextensions': 'requiredExtensions',
        'requiredfeatures': 'requiredFeatures',
        'specularconstant': 'specularConstant',
        'specularexponent': 'specularExponent',
        'spreadmethod': 'spreadMethod',
        'startoffset': 'startOffset',
        'stddeviation': 'stdDeviation',
        'stitchtiles': 'stitchTiles',
        'surfacescale': 'surfaceScale',
        'systemlanguage': 'systemLanguage',
        'tablevalues': 'tableValues',
        'targetx': 'targetX',
        'targety': 'targetY',
        'textlength': 'textLength',
        'viewbox': 'viewBox',
        'viewtarget': 'viewTarget',
        'xchannelselector': 'xChannelSelector',
        'ychannelselector': 'yChannelSelector',
        'zoomandpan': 'zoomAndPan'
    },
    XML_ATTRS_ADJUSTMENT_MAP = {
        'xlink:actuate': {prefix: 'xlink', name: 'actuate', namespace: NS.XLINK},
        'xlink:arcrole': {prefix: 'xlink', name: 'arcrole', namespace: NS.XLINK},
        'xlink:href': {prefix: 'xlink', name: 'href', namespace: NS.XLINK},
        'xlink:role': {prefix: 'xlink', name: 'role', namespace: NS.XLINK},
        'xlink:show': {prefix: 'xlink', name: 'show', namespace: NS.XLINK},
        'xlink:title': {prefix: 'xlink', name: 'title', namespace: NS.XLINK},
        'xlink:type': {prefix: 'xlink', name: 'type', namespace: NS.XLINK},
        'xml:base': {prefix: 'xml', name: 'base', namespace: NS.XML},
        'xml:lang': {prefix: 'xml', name: 'lang', namespace: NS.XML},
        'xml:space': {prefix: 'xml', name: 'space', namespace: NS.XML},
        'xmlns': {prefix: '', name: 'xmlns', namespace: NS.XMLNS},
        'xmlns:xlink': {prefix: 'xmlns', name: 'xlink', namespace: NS.XMLNS}

    };

//SVG tag names adjustment map
var SVG_TAG_NAMES_ADJUSTMENT_MAP = {
    'altglyph': 'altGlyph',
    'altglyphdef': 'altGlyphDef',
    'altglyphitem': 'altGlyphItem',
    'animatecolor': 'animateColor',
    'animatemotion': 'animateMotion',
    'animatetransform': 'animateTransform',
    'clippath': 'clipPath',
    'feblend': 'feBlend',
    'fecolormatrix': 'feColorMatrix',
    'fecomponenttransfer': 'feComponentTransfer',
    'fecomposite': 'feComposite',
    'feconvolvematrix': 'feConvolveMatrix',
    'fediffuselighting': 'feDiffuseLighting',
    'fedisplacementmap': 'feDisplacementMap',
    'fedistantlight': 'feDistantLight',
    'feflood': 'feFlood',
    'fefunca': 'feFuncA',
    'fefuncb': 'feFuncB',
    'fefuncg': 'feFuncG',
    'fefuncr': 'feFuncR',
    'fegaussianblur': 'feGaussianBlur',
    'feimage': 'feImage',
    'femerge': 'feMerge',
    'femergenode': 'feMergeNode',
    'femorphology': 'feMorphology',
    'feoffset': 'feOffset',
    'fepointlight': 'fePointLight',
    'fespecularlighting': 'feSpecularLighting',
    'fespotlight': 'feSpotLight',
    'fetile': 'feTile',
    'feturbulence': 'feTurbulence',
    'foreignobject': 'foreignObject',
    'glyphref': 'glyphRef',
    'lineargradient': 'linearGradient',
    'radialgradient': 'radialGradient',
    'textpath': 'textPath'
};

//Tags that causes exit from foreign content
var EXITS_FOREIGN_CONTENT = {};

EXITS_FOREIGN_CONTENT[$.B] = true;
EXITS_FOREIGN_CONTENT[$.BIG] = true;
EXITS_FOREIGN_CONTENT[$.BLOCKQUOTE] = true;
EXITS_FOREIGN_CONTENT[$.BODY] = true;
EXITS_FOREIGN_CONTENT[$.BR] = true;
EXITS_FOREIGN_CONTENT[$.CENTER] = true;
EXITS_FOREIGN_CONTENT[$.CODE] = true;
EXITS_FOREIGN_CONTENT[$.DD] = true;
EXITS_FOREIGN_CONTENT[$.DIV] = true;
EXITS_FOREIGN_CONTENT[$.DL] = true;
EXITS_FOREIGN_CONTENT[$.DT] = true;
EXITS_FOREIGN_CONTENT[$.EM] = true;
EXITS_FOREIGN_CONTENT[$.EMBED] = true;
EXITS_FOREIGN_CONTENT[$.H1] = true;
EXITS_FOREIGN_CONTENT[$.H2] = true;
EXITS_FOREIGN_CONTENT[$.H3] = true;
EXITS_FOREIGN_CONTENT[$.H4] = true;
EXITS_FOREIGN_CONTENT[$.H5] = true;
EXITS_FOREIGN_CONTENT[$.H6] = true;
EXITS_FOREIGN_CONTENT[$.HEAD] = true;
EXITS_FOREIGN_CONTENT[$.HR] = true;
EXITS_FOREIGN_CONTENT[$.I] = true;
EXITS_FOREIGN_CONTENT[$.IMG] = true;
EXITS_FOREIGN_CONTENT[$.LI] = true;
EXITS_FOREIGN_CONTENT[$.LISTING] = true;
EXITS_FOREIGN_CONTENT[$.MENU] = true;
EXITS_FOREIGN_CONTENT[$.META] = true;
EXITS_FOREIGN_CONTENT[$.NOBR] = true;
EXITS_FOREIGN_CONTENT[$.OL] = true;
EXITS_FOREIGN_CONTENT[$.P] = true;
EXITS_FOREIGN_CONTENT[$.PRE] = true;
EXITS_FOREIGN_CONTENT[$.RUBY] = true;
EXITS_FOREIGN_CONTENT[$.S] = true;
EXITS_FOREIGN_CONTENT[$.SMALL] = true;
EXITS_FOREIGN_CONTENT[$.SPAN] = true;
EXITS_FOREIGN_CONTENT[$.STRONG] = true;
EXITS_FOREIGN_CONTENT[$.STRIKE] = true;
EXITS_FOREIGN_CONTENT[$.SUB] = true;
EXITS_FOREIGN_CONTENT[$.SUP] = true;
EXITS_FOREIGN_CONTENT[$.TABLE] = true;
EXITS_FOREIGN_CONTENT[$.TT] = true;
EXITS_FOREIGN_CONTENT[$.U] = true;
EXITS_FOREIGN_CONTENT[$.UL] = true;
EXITS_FOREIGN_CONTENT[$.VAR] = true;

//Check exit from foreign content
exports.causesExit = function (startTagToken) {
    var tn = startTagToken.tagName;
    var isFontWithAttrs = tn === $.FONT && (Tokenizer.getTokenAttr(startTagToken, ATTRS.COLOR) !== null ||
                                            Tokenizer.getTokenAttr(startTagToken, ATTRS.SIZE) !== null ||
                                            Tokenizer.getTokenAttr(startTagToken, ATTRS.FACE) !== null);

    return isFontWithAttrs ? true : EXITS_FOREIGN_CONTENT[tn];
};

//Token adjustments
exports.adjustTokenMathMLAttrs = function (token) {
    for (var i = 0; i < token.attrs.length; i++) {
        if (token.attrs[i].name === DEFINITION_URL_ATTR) {
            token.attrs[i].name = ADJUSTED_DEFINITION_URL_ATTR;
            break;
        }
    }
};

exports.adjustTokenSVGAttrs = function (token) {
    for (var i = 0; i < token.attrs.length; i++) {
        var adjustedAttrName = SVG_ATTRS_ADJUSTMENT_MAP[token.attrs[i].name];

        if (adjustedAttrName)
            token.attrs[i].name = adjustedAttrName;
    }
};

exports.adjustTokenXMLAttrs = function (token) {
    for (var i = 0; i < token.attrs.length; i++) {
        var adjustedAttrEntry = XML_ATTRS_ADJUSTMENT_MAP[token.attrs[i].name];

        if (adjustedAttrEntry) {
            token.attrs[i].prefix = adjustedAttrEntry.prefix;
            token.attrs[i].name = adjustedAttrEntry.name;
            token.attrs[i].namespace = adjustedAttrEntry.namespace;
        }
    }
};

exports.adjustTokenSVGTagName = function (token) {
    var adjustedTagName = SVG_TAG_NAMES_ADJUSTMENT_MAP[token.tagName];

    if (adjustedTagName)
        token.tagName = adjustedTagName;
};

//Integration points
exports.isMathMLTextIntegrationPoint = function (tn, ns) {
    return ns === NS.MATHML && (tn === $.MI || tn === $.MO || tn === $.MN || tn === $.MS || tn === $.MTEXT);
};

exports.isHtmlIntegrationPoint = function (tn, ns, attrs) {
    if (ns === NS.MATHML && tn === $.ANNOTATION_XML) {
        for (var i = 0; i < attrs.length; i++) {
            if (attrs[i].name === ATTRS.ENCODING) {
                var value = attrs[i].value.toLowerCase();

                return value === MIME_TYPES.TEXT_HTML || value === MIME_TYPES.APPLICATION_XML;
            }
        }
    }

    return ns === NS.SVG && (tn === $.FOREIGN_OBJECT || tn === $.DESC || tn === $.TITLE);
};

},{"../tokenizer":18,"./html":3}],3:[function(require,module,exports){
'use strict';

var NS = exports.NAMESPACES = {
    HTML: 'http://www.w3.org/1999/xhtml',
    MATHML: 'http://www.w3.org/1998/Math/MathML',
    SVG: 'http://www.w3.org/2000/svg',
    XLINK: 'http://www.w3.org/1999/xlink',
    XML: 'http://www.w3.org/XML/1998/namespace',
    XMLNS: 'http://www.w3.org/2000/xmlns/'
};

exports.ATTRS = {
    TYPE: 'type',
    ACTION: 'action',
    ENCODING: 'encoding',
    PROMPT: 'prompt',
    NAME: 'name',
    COLOR: 'color',
    FACE: 'face',
    SIZE: 'size'
};

var $ = exports.TAG_NAMES = {
    A: 'a',
    ADDRESS: 'address',
    ANNOTATION_XML: 'annotation-xml',
    APPLET: 'applet',
    AREA: 'area',
    ARTICLE: 'article',
    ASIDE: 'aside',

    B: 'b',
    BASE: 'base',
    BASEFONT: 'basefont',
    BGSOUND: 'bgsound',
    BIG: 'big',
    BLOCKQUOTE: 'blockquote',
    BODY: 'body',
    BR: 'br',
    BUTTON: 'button',

    CAPTION: 'caption',
    CENTER: 'center',
    CODE: 'code',
    COL: 'col',
    COLGROUP: 'colgroup',

    DD: 'dd',
    DESC: 'desc',
    DETAILS: 'details',
    DIALOG: 'dialog',
    DIR: 'dir',
    DIV: 'div',
    DL: 'dl',
    DT: 'dt',

    EM: 'em',
    EMBED: 'embed',

    FIELDSET: 'fieldset',
    FIGCAPTION: 'figcaption',
    FIGURE: 'figure',
    FONT: 'font',
    FOOTER: 'footer',
    FOREIGN_OBJECT: 'foreignObject',
    FORM: 'form',
    FRAME: 'frame',
    FRAMESET: 'frameset',

    H1: 'h1',
    H2: 'h2',
    H3: 'h3',
    H4: 'h4',
    H5: 'h5',
    H6: 'h6',
    HEAD: 'head',
    HEADER: 'header',
    HGROUP: 'hgroup',
    HR: 'hr',
    HTML: 'html',

    I: 'i',
    IMG: 'img',
    IMAGE: 'image',
    INPUT: 'input',
    IFRAME: 'iframe',
    ISINDEX: 'isindex',

    KEYGEN: 'keygen',

    LABEL: 'label',
    LI: 'li',
    LINK: 'link',
    LISTING: 'listing',

    MAIN: 'main',
    MALIGNMARK: 'malignmark',
    MARQUEE: 'marquee',
    MATH: 'math',
    MENU: 'menu',
    MENUITEM: 'menuitem',
    META: 'meta',
    MGLYPH: 'mglyph',
    MI: 'mi',
    MO: 'mo',
    MN: 'mn',
    MS: 'ms',
    MTEXT: 'mtext',

    NAV: 'nav',
    NOBR: 'nobr',
    NOFRAMES: 'noframes',
    NOEMBED: 'noembed',
    NOSCRIPT: 'noscript',

    OBJECT: 'object',
    OL: 'ol',
    OPTGROUP: 'optgroup',
    OPTION: 'option',

    P: 'p',
    PARAM: 'param',
    PLAINTEXT: 'plaintext',
    PRE: 'pre',

    RB: 'rb',
    RP: 'rp',
    RT: 'rt',
    RTC: 'rtc',
    RUBY: 'ruby',

    S: 's',
    SCRIPT: 'script',
    SECTION: 'section',
    SELECT: 'select',
    SOURCE: 'source',
    SMALL: 'small',
    SPAN: 'span',
    STRIKE: 'strike',
    STRONG: 'strong',
    STYLE: 'style',
    SUB: 'sub',
    SUMMARY: 'summary',
    SUP: 'sup',

    TABLE: 'table',
    TBODY: 'tbody',
    TEMPLATE: 'template',
    TEXTAREA: 'textarea',
    TFOOT: 'tfoot',
    TD: 'td',
    TH: 'th',
    THEAD: 'thead',
    TITLE: 'title',
    TR: 'tr',
    TRACK: 'track',
    TT: 'tt',

    U: 'u',
    UL: 'ul',

    SVG: 'svg',

    VAR: 'var',

    WBR: 'wbr',

    XMP: 'xmp'
};

var SPECIAL_ELEMENTS = exports.SPECIAL_ELEMENTS = {};

SPECIAL_ELEMENTS[NS.HTML] = {};
SPECIAL_ELEMENTS[NS.HTML][$.ADDRESS] = true;
SPECIAL_ELEMENTS[NS.HTML][$.APPLET] = true;
SPECIAL_ELEMENTS[NS.HTML][$.AREA] = true;
SPECIAL_ELEMENTS[NS.HTML][$.ARTICLE] = true;
SPECIAL_ELEMENTS[NS.HTML][$.ASIDE] = true;
SPECIAL_ELEMENTS[NS.HTML][$.BASE] = true;
SPECIAL_ELEMENTS[NS.HTML][$.BASEFONT] = true;
SPECIAL_ELEMENTS[NS.HTML][$.BGSOUND] = true;
SPECIAL_ELEMENTS[NS.HTML][$.BLOCKQUOTE] = true;
SPECIAL_ELEMENTS[NS.HTML][$.BODY] = true;
SPECIAL_ELEMENTS[NS.HTML][$.BR] = true;
SPECIAL_ELEMENTS[NS.HTML][$.BUTTON] = true;
SPECIAL_ELEMENTS[NS.HTML][$.CAPTION] = true;
SPECIAL_ELEMENTS[NS.HTML][$.CENTER] = true;
SPECIAL_ELEMENTS[NS.HTML][$.COL] = true;
SPECIAL_ELEMENTS[NS.HTML][$.COLGROUP] = true;
SPECIAL_ELEMENTS[NS.HTML][$.DD] = true;
SPECIAL_ELEMENTS[NS.HTML][$.DETAILS] = true;
SPECIAL_ELEMENTS[NS.HTML][$.DIR] = true;
SPECIAL_ELEMENTS[NS.HTML][$.DIV] = true;
SPECIAL_ELEMENTS[NS.HTML][$.DL] = true;
SPECIAL_ELEMENTS[NS.HTML][$.DT] = true;
SPECIAL_ELEMENTS[NS.HTML][$.EMBED] = true;
SPECIAL_ELEMENTS[NS.HTML][$.FIELDSET] = true;
SPECIAL_ELEMENTS[NS.HTML][$.FIGCAPTION] = true;
SPECIAL_ELEMENTS[NS.HTML][$.FIGURE] = true;
SPECIAL_ELEMENTS[NS.HTML][$.FOOTER] = true;
SPECIAL_ELEMENTS[NS.HTML][$.FORM] = true;
SPECIAL_ELEMENTS[NS.HTML][$.FRAME] = true;
SPECIAL_ELEMENTS[NS.HTML][$.FRAMESET] = true;
SPECIAL_ELEMENTS[NS.HTML][$.H1] = true;
SPECIAL_ELEMENTS[NS.HTML][$.H2] = true;
SPECIAL_ELEMENTS[NS.HTML][$.H3] = true;
SPECIAL_ELEMENTS[NS.HTML][$.H4] = true;
SPECIAL_ELEMENTS[NS.HTML][$.H5] = true;
SPECIAL_ELEMENTS[NS.HTML][$.H6] = true;
SPECIAL_ELEMENTS[NS.HTML][$.HEAD] = true;
SPECIAL_ELEMENTS[NS.HTML][$.HEADER] = true;
SPECIAL_ELEMENTS[NS.HTML][$.HGROUP] = true;
SPECIAL_ELEMENTS[NS.HTML][$.HR] = true;
SPECIAL_ELEMENTS[NS.HTML][$.HTML] = true;
SPECIAL_ELEMENTS[NS.HTML][$.IFRAME] = true;
SPECIAL_ELEMENTS[NS.HTML][$.IMG] = true;
SPECIAL_ELEMENTS[NS.HTML][$.INPUT] = true;
SPECIAL_ELEMENTS[NS.HTML][$.ISINDEX] = true;
SPECIAL_ELEMENTS[NS.HTML][$.LI] = true;
SPECIAL_ELEMENTS[NS.HTML][$.LINK] = true;
SPECIAL_ELEMENTS[NS.HTML][$.LISTING] = true;
SPECIAL_ELEMENTS[NS.HTML][$.MAIN] = true;
SPECIAL_ELEMENTS[NS.HTML][$.MARQUEE] = true;
SPECIAL_ELEMENTS[NS.HTML][$.MENU] = true;
SPECIAL_ELEMENTS[NS.HTML][$.MENUITEM] = true;
SPECIAL_ELEMENTS[NS.HTML][$.META] = true;
SPECIAL_ELEMENTS[NS.HTML][$.NAV] = true;
SPECIAL_ELEMENTS[NS.HTML][$.NOEMBED] = true;
SPECIAL_ELEMENTS[NS.HTML][$.NOFRAMES] = true;
SPECIAL_ELEMENTS[NS.HTML][$.NOSCRIPT] = true;
SPECIAL_ELEMENTS[NS.HTML][$.OBJECT] = true;
SPECIAL_ELEMENTS[NS.HTML][$.OL] = true;
SPECIAL_ELEMENTS[NS.HTML][$.P] = true;
SPECIAL_ELEMENTS[NS.HTML][$.PARAM] = true;
SPECIAL_ELEMENTS[NS.HTML][$.PLAINTEXT] = true;
SPECIAL_ELEMENTS[NS.HTML][$.PRE] = true;
SPECIAL_ELEMENTS[NS.HTML][$.SCRIPT] = true;
SPECIAL_ELEMENTS[NS.HTML][$.SECTION] = true;
SPECIAL_ELEMENTS[NS.HTML][$.SELECT] = true;
SPECIAL_ELEMENTS[NS.HTML][$.SOURCE] = true;
SPECIAL_ELEMENTS[NS.HTML][$.STYLE] = true;
SPECIAL_ELEMENTS[NS.HTML][$.SUMMARY] = true;
SPECIAL_ELEMENTS[NS.HTML][$.TABLE] = true;
SPECIAL_ELEMENTS[NS.HTML][$.TBODY] = true;
SPECIAL_ELEMENTS[NS.HTML][$.TD] = true;
SPECIAL_ELEMENTS[NS.HTML][$.TEMPLATE] = true;
SPECIAL_ELEMENTS[NS.HTML][$.TEXTAREA] = true;
SPECIAL_ELEMENTS[NS.HTML][$.TFOOT] = true;
SPECIAL_ELEMENTS[NS.HTML][$.TH] = true;
SPECIAL_ELEMENTS[NS.HTML][$.THEAD] = true;
SPECIAL_ELEMENTS[NS.HTML][$.TITLE] = true;
SPECIAL_ELEMENTS[NS.HTML][$.TR] = true;
SPECIAL_ELEMENTS[NS.HTML][$.TRACK] = true;
SPECIAL_ELEMENTS[NS.HTML][$.UL] = true;
SPECIAL_ELEMENTS[NS.HTML][$.WBR] = true;
SPECIAL_ELEMENTS[NS.HTML][$.XMP] = true;

SPECIAL_ELEMENTS[NS.MATHML] = {};
SPECIAL_ELEMENTS[NS.MATHML][$.MI] = true;
SPECIAL_ELEMENTS[NS.MATHML][$.MO] = true;
SPECIAL_ELEMENTS[NS.MATHML][$.MN] = true;
SPECIAL_ELEMENTS[NS.MATHML][$.MS] = true;
SPECIAL_ELEMENTS[NS.MATHML][$.MTEXT] = true;
SPECIAL_ELEMENTS[NS.MATHML][$.ANNOTATION_XML] = true;

SPECIAL_ELEMENTS[NS.SVG] = {};
SPECIAL_ELEMENTS[NS.SVG][$.TITLE] = true;
SPECIAL_ELEMENTS[NS.SVG][$.FOREIGN_OBJECT] = true;
SPECIAL_ELEMENTS[NS.SVG][$.DESC] = true;

},{}],4:[function(require,module,exports){
'use strict';

module.exports = function mergeOptions(defaults, options) {
    options = options || {};

    return [defaults, options].reduce(function (merged, optObj) {
        Object.keys(optObj).forEach(function (key) {
            merged[key] = optObj[key];
        });

        return merged;
    }, {});
};

},{}],5:[function(require,module,exports){
'use strict';

exports.REPLACEMENT_CHARACTER = '\uFFFD';

exports.CODE_POINTS = {
    EOF: -1,
    NULL: 0x00,
    TABULATION: 0x09,
    CARRIAGE_RETURN: 0x0D,
    LINE_FEED: 0x0A,
    FORM_FEED: 0x0C,
    SPACE: 0x20,
    EXCLAMATION_MARK: 0x21,
    QUOTATION_MARK: 0x22,
    NUMBER_SIGN: 0x23,
    AMPERSAND: 0x26,
    APOSTROPHE: 0x27,
    HYPHEN_MINUS: 0x2D,
    SOLIDUS: 0x2F,
    DIGIT_0: 0x30,
    DIGIT_9: 0x39,
    SEMICOLON: 0x3B,
    LESS_THAN_SIGN: 0x3C,
    EQUALS_SIGN: 0x3D,
    GREATER_THAN_SIGN: 0x3E,
    QUESTION_MARK: 0x3F,
    LATIN_CAPITAL_A: 0x41,
    LATIN_CAPITAL_F: 0x46,
    LATIN_CAPITAL_X: 0x58,
    LATIN_CAPITAL_Z: 0x5A,
    GRAVE_ACCENT: 0x60,
    LATIN_SMALL_A: 0x61,
    LATIN_SMALL_F: 0x66,
    LATIN_SMALL_X: 0x78,
    LATIN_SMALL_Z: 0x7A,
    REPLACEMENT_CHARACTER: 0xFFFD
};

exports.CODE_POINT_SEQUENCES = {
    DASH_DASH_STRING: [0x2D, 0x2D], //--
    DOCTYPE_STRING: [0x44, 0x4F, 0x43, 0x54, 0x59, 0x50, 0x45], //DOCTYPE
    CDATA_START_STRING: [0x5B, 0x43, 0x44, 0x41, 0x54, 0x41, 0x5B], //[CDATA[
    CDATA_END_STRING: [0x5D, 0x5D, 0x3E], //]]>
    SCRIPT_STRING: [0x73, 0x63, 0x72, 0x69, 0x70, 0x74], //script
    PUBLIC_STRING: [0x50, 0x55, 0x42, 0x4C, 0x49, 0x43], //PUBLIC
    SYSTEM_STRING: [0x53, 0x59, 0x53, 0x54, 0x45, 0x4D] //SYSTEM
};

},{}],6:[function(require,module,exports){
'use strict';

var Parser = require('./parser'),
    Serializer = require('./serializer');

/** @namespace parse5 */

/**
 * Parses an HTML string.
 * @function parse
 * @memberof parse5
 * @instance
 * @param {string} html - Input HTML string.
 * @param {ParserOptions} [options] - Parsing options.
 * @returns {ASTNode<Document>} document
 * @example
 * var parse5 = require('parse5');
 *
 * var document = parse5.parse('<!DOCTYPE html><html><head></head><body>Hi there!</body></html>');
 */
exports.parse = function parse(html, options) {
    var parser = new Parser(options);

    return parser.parse(html);
};

/**
 * Parses an HTML fragment.
 * @function parseFragment
 * @memberof parse5
 * @instance
 * @param {ASTNode} [fragmentContext] - Parsing context element. If specified, given fragment
 * will be parsed as if it was set to the context element's `innerHTML` property.
 * @param {string} html - Input HTML fragment string.
 * @param {ParserOptions} [options] - Parsing options.
 * @returns {ASTNode<DocumentFragment>} documentFragment
 * @example
 * var parse5 = require('parse5');
 *
 * var documentFragment = parse5.parseFragment('<table></table>');
 *
 * // Parses the html fragment in the context of the parsed <table> element.
 * var trFragment = parser.parseFragment(documentFragment.childNodes[0], '<tr><td>Shake it, baby</td></tr>');
 */
exports.parseFragment = function parseFragment(fragmentContext, html, options) {
    if (typeof fragmentContext === 'string') {
        options = html;
        html = fragmentContext;
        fragmentContext = null;
    }

    var parser = new Parser(options);

    return parser.parseFragment(html, fragmentContext);
};

/**
 * Serializes an AST node to an HTML string.
 * @function serialize
 * @memberof parse5
 * @instance
 * @param {ASTNode} node - Node to serialize.
 * @param {SerializerOptions} [options] - Serialization options.
 * @returns {String} html
 * @example
 * var parse5 = require('parse5');
 *
 * var document = parse5.parse('<!DOCTYPE html><html><head></head><body>Hi there!</body></html>');
 *
 * // Serializes a document.
 * var html = parse5.serialize(document);
 *
 * // Serializes the <body> element content.
 * var bodyInnerHtml = parse5.serialize(document.childNodes[0].childNodes[1]);
 */
exports.serialize = function (node, options) {
    var serializer = new Serializer(node, options);

    return serializer.serialize();
};

/**
 * Provides built-in tree adapters that can be used for parsing and serialization.
 * @var treeAdapters
 * @memberof parse5
 * @instance
 * @property {TreeAdapter} default - Default tree format for parse5.
 * @property {TreeAdapter} htmlparser2 - Quite popular [htmlparser2](https://github.com/fb55/htmlparser2) tree format
 * (e.g. used by [cheerio](https://github.com/MatthewMueller/cheerio) and [jsdom](https://github.com/tmpvar/jsdom)).
 * @example
 * var parse5 = require('parse5');
 *
 * // Uses the default tree adapter for parsing.
 * var document = parse5.parse('<div></div>', { treeAdapter: parse5.treeAdapters.default });
 *
 * // Uses the htmlparser2 tree adapter with the SerializerStream.
 * var serializer = new parse5.SerializerStream(node, { treeAdapter: parse5.treeAdapters.htmlparser2 });
 */
exports.treeAdapters = {
    default: require('./tree_adapters/default'),
    htmlparser2: require('./tree_adapters/htmlparser2')
};


// Streaming
exports.ParserStream = require('./parser/stream');
exports.SerializerStream = require('./serializer/stream');
exports.SAXParser = require('./sax');

},{"./parser":10,"./parser/stream":12,"./sax":14,"./serializer":16,"./serializer/stream":17,"./tree_adapters/default":21,"./tree_adapters/htmlparser2":22}],7:[function(require,module,exports){
'use strict';

var OpenElementStack = require('../parser/open_element_stack'),
    Tokenizer = require('../tokenizer'),
    HTML = require('../common/html');


//Aliases
var $ = HTML.TAG_NAMES;


function setEndLocation(element, closingToken, treeAdapter) {
    var loc = element.__location;

    if (!loc)
        return;

    /**
     * @typedef {Object} ElementLocationInfo
     * @extends StartTagLocationInfo
     *
     * @property {StartTagLocationInfo} startTag - Element's start tag location info.
     * @property {LocationInfo} endTag - Element's end tag location info.
     */
    if (!loc.startTag) {
        loc.startTag = {
            line: loc.line,
            col: loc.col,
            startOffset: loc.startOffset,
            endOffset: loc.endOffset
        };
        if (loc.attrs)
            loc.startTag.attrs = loc.attrs;
    }

    if (closingToken.location) {
        var ctLocation = closingToken.location,
            tn = treeAdapter.getTagName(element),
        // NOTE: For cases like <p> <p> </p> - First 'p' closes without a closing tag and
        // for cases like <td> <p> </td> - 'p' closes without a closing tag
            isClosingEndTag = closingToken.type === Tokenizer.END_TAG_TOKEN &&
                              tn === closingToken.tagName;

        if (isClosingEndTag) {
            loc.endTag = {
                line: ctLocation.line,
                col: ctLocation.col,
                startOffset: ctLocation.startOffset,
                endOffset: ctLocation.endOffset
            };
        }

        loc.endOffset = ctLocation.endOffset;
    }
}


exports.assign = function (parser) {
    //NOTE: obtain Parser proto this way to avoid module circular references
    var parserProto = Object.getPrototypeOf(parser),
        treeAdapter = parser.treeAdapter,
        attachableElementLocation = null,
        lastFosterParentingLocation = null,
        currentToken = null;


    //NOTE: patch _bootstrap method
    parser._bootstrap = function (document, fragmentContext) {
        parserProto._bootstrap.call(this, document, fragmentContext);

        attachableElementLocation = null;
        lastFosterParentingLocation = null;
        currentToken = null;

        //OpenElementStack
        parser.openElements.pop = function () {
            setEndLocation(this.current, currentToken, treeAdapter);
            OpenElementStack.prototype.pop.call(this);
        };

        parser.openElements.popAllUpToHtmlElement = function () {
            for (var i = this.stackTop; i > 0; i--)
                setEndLocation(this.items[i], currentToken, treeAdapter);

            OpenElementStack.prototype.popAllUpToHtmlElement.call(this);
        };

        parser.openElements.remove = function (element) {
            setEndLocation(element, currentToken, treeAdapter);
            OpenElementStack.prototype.remove.call(this, element);
        };
    };


    //Token processing
    parser._processTokenInForeignContent = function (token) {
        currentToken = token;
        parserProto._processTokenInForeignContent.call(this, token);
    };

    parser._processToken = function (token) {
        currentToken = token;
        parserProto._processToken.call(this, token);

        //NOTE: <body> and <html> are never popped from the stack, so we need to updated
        //their end location explicitly.
        if (token.type === Tokenizer.END_TAG_TOKEN &&
            (token.tagName === $.HTML ||
             token.tagName === $.BODY && this.openElements.hasInScope($.BODY))) {
            for (var i = this.openElements.stackTop; i >= 0; i--) {
                var element = this.openElements.items[i];

                if (this.treeAdapter.getTagName(element) === token.tagName) {
                    setEndLocation(element, token, treeAdapter);
                    break;
                }
            }
        }
    };


    //Doctype
    parser._setDocumentType = function (token) {
        parserProto._setDocumentType.call(this, token);

        var documentChildren = this.treeAdapter.getChildNodes(this.document),
            cnLength = documentChildren.length;

        for (var i = 0; i < cnLength; i++) {
            var node = documentChildren[i];

            if (this.treeAdapter.isDocumentTypeNode(node)) {
                node.__location = token.location;
                break;
            }
        }
    };


    //Elements
    parser._attachElementToTree = function (element) {
        //NOTE: _attachElementToTree is called from _appendElement, _insertElement and _insertTemplate methods.
        //So we will use token location stored in this methods for the element.
        element.__location = attachableElementLocation || null;
        attachableElementLocation = null;
        parserProto._attachElementToTree.call(this, element);
    };

    parser._appendElement = function (token, namespaceURI) {
        attachableElementLocation = token.location;
        parserProto._appendElement.call(this, token, namespaceURI);
    };

    parser._insertElement = function (token, namespaceURI) {
        attachableElementLocation = token.location;
        parserProto._insertElement.call(this, token, namespaceURI);
    };

    parser._insertTemplate = function (token) {
        attachableElementLocation = token.location;
        parserProto._insertTemplate.call(this, token);

        var tmplContent = this.treeAdapter.getTemplateContent(this.openElements.current);

        tmplContent.__location = null;
    };

    parser._insertFakeRootElement = function () {
        parserProto._insertFakeRootElement.call(this);
        this.openElements.current.__location = null;
    };


    //Comments
    parser._appendCommentNode = function (token, parent) {
        parserProto._appendCommentNode.call(this, token, parent);

        var children = this.treeAdapter.getChildNodes(parent),
            commentNode = children[children.length - 1];

        commentNode.__location = token.location;
    };


    //Text
    parser._findFosterParentingLocation = function () {
        //NOTE: store last foster parenting location, so we will be able to find inserted text
        //in case of foster parenting
        lastFosterParentingLocation = parserProto._findFosterParentingLocation.call(this);
        return lastFosterParentingLocation;
    };

    parser._insertCharacters = function (token) {
        parserProto._insertCharacters.call(this, token);

        var hasFosterParent = this._shouldFosterParentOnInsertion(),
            parent = hasFosterParent && lastFosterParentingLocation.parent ||
                     this.openElements.currentTmplContent ||
                     this.openElements.current,
            siblings = this.treeAdapter.getChildNodes(parent),
            textNodeIdx = hasFosterParent && lastFosterParentingLocation.beforeElement ?
            siblings.indexOf(lastFosterParentingLocation.beforeElement) - 1 :
            siblings.length - 1,
            textNode = siblings[textNodeIdx];

        //NOTE: if we have location assigned by another token, then just update end position
        if (textNode.__location)
            textNode.__location.endOffset = token.location.endOffset;

        else
            textNode.__location = token.location;
    };
};


},{"../common/html":3,"../parser/open_element_stack":11,"../tokenizer":18}],8:[function(require,module,exports){
'use strict';

var UNICODE = require('../common/unicode');

//Aliases
var $ = UNICODE.CODE_POINTS;


exports.assign = function (tokenizer) {
    //NOTE: obtain Tokenizer proto this way to avoid module circular references
    var tokenizerProto = Object.getPrototypeOf(tokenizer),
        tokenStartOffset = -1,
        tokenCol = -1,
        tokenLine = 1,
        isEol = false,
        lineStartPosStack = [0],
        lineStartPos = 0,
        col = -1,
        line = 1;

    function attachLocationInfo(token) {
        /**
         * @typedef {Object} LocationInfo
         *
         * @property {Number} line - One-based line index
         * @property {Number} col - One-based column index
         * @property {Number} startOffset - Zero-based first character index
         * @property {Number} endOffset - Zero-based last character index
         */
        token.location = {
            line: tokenLine,
            col: tokenCol,
            startOffset: tokenStartOffset,
            endOffset: -1
        };
    }

    //NOTE: patch consumption method to track line/col information
    tokenizer._consume = function () {
        var cp = tokenizerProto._consume.call(this);

        //NOTE: LF should be in the last column of the line
        if (isEol) {
            isEol = false;
            line++;
            lineStartPosStack.push(this.preprocessor.pos);
            lineStartPos = this.preprocessor.pos;
        }

        if (cp === $.LINE_FEED)
            isEol = true;

        col = this.preprocessor.pos - lineStartPos + 1;

        return cp;
    };

    tokenizer._unconsume = function () {
        tokenizerProto._unconsume.call(this);

        while (lineStartPos > this.preprocessor.pos && lineStartPosStack.length > 1) {
            lineStartPos = lineStartPosStack.pop();
            line--;
        }

        col = this.preprocessor.pos - lineStartPos + 1;
    };

    //NOTE: patch token creation methods and attach location objects
    tokenizer._createStartTagToken = function (tagNameFirstCh) {
        tokenizerProto._createStartTagToken.call(this, tagNameFirstCh);
        attachLocationInfo(this.currentToken);
    };

    tokenizer._createEndTagToken = function (tagNameFirstCh) {
        tokenizerProto._createEndTagToken.call(this, tagNameFirstCh);
        attachLocationInfo(this.currentToken);
    };

    tokenizer._createCommentToken = function () {
        tokenizerProto._createCommentToken.call(this);
        attachLocationInfo(this.currentToken);
    };

    tokenizer._createDoctypeToken = function (doctypeNameFirstCh) {
        tokenizerProto._createDoctypeToken.call(this, doctypeNameFirstCh);
        attachLocationInfo(this.currentToken);
    };

    tokenizer._createCharacterToken = function (type, ch) {
        tokenizerProto._createCharacterToken.call(this, type, ch);
        attachLocationInfo(this.currentCharacterToken);
    };

    tokenizer._createAttr = function (attrNameFirstCh) {
        tokenizerProto._createAttr.call(this, attrNameFirstCh);
        this.currentAttrLocation = {
            line: line,
            col: col,
            startOffset: this.preprocessor.pos,
            endOffset: -1
        };
    };

    tokenizer._leaveAttrName = function (toState) {
        tokenizerProto._leaveAttrName.call(this, toState);
        this._attachCurrentAttrLocationInfo();
    };

    tokenizer._leaveAttrValue = function (toState) {
        tokenizerProto._leaveAttrValue.call(this, toState);
        this._attachCurrentAttrLocationInfo();
    };

    tokenizer._attachCurrentAttrLocationInfo = function () {
        this.currentAttrLocation.endOffset = this.preprocessor.pos;

        if (!this.currentToken.location.attrs)
            this.currentToken.location.attrs = {};

        /**
         * @typedef {Object} StartTagLocationInfo
         * @extends LocationInfo
         *
         * @property {Dictionary<String, LocationInfo>} attrs - Start tag attributes' location info.
         */
        this.currentToken.location.attrs[this.currentAttr.name] = this.currentAttrLocation;
    };

    //NOTE: patch token emission methods to determine end location
    tokenizer._emitCurrentToken = function () {
        //NOTE: if we have pending character token make it's end location equal to the
        //current token's start location.
        if (this.currentCharacterToken)
            this.currentCharacterToken.location.endOffset = this.currentToken.location.startOffset;

        this.currentToken.location.endOffset = this.preprocessor.pos + 1;
        tokenizerProto._emitCurrentToken.call(this);
    };

    tokenizer._emitCurrentCharacterToken = function () {
        //NOTE: if we have character token and it's location wasn't set in the _emitCurrentToken(),
        //then set it's location at the current preprocessor position.
        //We don't need to increment preprocessor position, since character token
        //emission is always forced by the start of the next character token here.
        //So, we already have advanced position.
        if (this.currentCharacterToken && this.currentCharacterToken.location.endOffset === -1)
            this.currentCharacterToken.location.endOffset = this.preprocessor.pos;

        tokenizerProto._emitCurrentCharacterToken.call(this);
    };

    //NOTE: patch initial states for each mode to obtain token start position
    Object.keys(tokenizerProto.MODE)

        .map(function (modeName) {
            return tokenizerProto.MODE[modeName];
        })

        .forEach(function (state) {
            tokenizer[state] = function (cp) {
                tokenStartOffset = this.preprocessor.pos;
                tokenLine = line;
                tokenCol = col;
                tokenizerProto[state].call(this, cp);
            };
        });
};

},{"../common/unicode":5}],9:[function(require,module,exports){
'use strict';

//Const
var NOAH_ARK_CAPACITY = 3;

//List of formatting elements
var FormattingElementList = module.exports = function (treeAdapter) {
    this.length = 0;
    this.entries = [];
    this.treeAdapter = treeAdapter;
    this.bookmark = null;
};

//Entry types
FormattingElementList.MARKER_ENTRY = 'MARKER_ENTRY';
FormattingElementList.ELEMENT_ENTRY = 'ELEMENT_ENTRY';

//Noah Ark's condition
//OPTIMIZATION: at first we try to find possible candidates for exclusion using
//lightweight heuristics without thorough attributes check.
FormattingElementList.prototype._getNoahArkConditionCandidates = function (newElement) {
    var candidates = [];

    if (this.length >= NOAH_ARK_CAPACITY) {
        var neAttrsLength = this.treeAdapter.getAttrList(newElement).length,
            neTagName = this.treeAdapter.getTagName(newElement),
            neNamespaceURI = this.treeAdapter.getNamespaceURI(newElement);

        for (var i = this.length - 1; i >= 0; i--) {
            var entry = this.entries[i];

            if (entry.type === FormattingElementList.MARKER_ENTRY)
                break;

            var element = entry.element,
                elementAttrs = this.treeAdapter.getAttrList(element),
                isCandidate = this.treeAdapter.getTagName(element) === neTagName &&
                              this.treeAdapter.getNamespaceURI(element) === neNamespaceURI &&
                              elementAttrs.length === neAttrsLength;

            if (isCandidate)
                candidates.push({idx: i, attrs: elementAttrs});
        }
    }

    return candidates.length < NOAH_ARK_CAPACITY ? [] : candidates;
};

FormattingElementList.prototype._ensureNoahArkCondition = function (newElement) {
    var candidates = this._getNoahArkConditionCandidates(newElement),
        cLength = candidates.length;

    if (cLength) {
        var neAttrs = this.treeAdapter.getAttrList(newElement),
            neAttrsLength = neAttrs.length,
            neAttrsMap = {};

        //NOTE: build attrs map for the new element so we can perform fast lookups
        for (var i = 0; i < neAttrsLength; i++) {
            var neAttr = neAttrs[i];

            neAttrsMap[neAttr.name] = neAttr.value;
        }

        for (i = 0; i < neAttrsLength; i++) {
            for (var j = 0; j < cLength; j++) {
                var cAttr = candidates[j].attrs[i];

                if (neAttrsMap[cAttr.name] !== cAttr.value) {
                    candidates.splice(j, 1);
                    cLength--;
                }

                if (candidates.length < NOAH_ARK_CAPACITY)
                    return;
            }
        }

        //NOTE: remove bottommost candidates until Noah's Ark condition will not be met
        for (i = cLength - 1; i >= NOAH_ARK_CAPACITY - 1; i--) {
            this.entries.splice(candidates[i].idx, 1);
            this.length--;
        }
    }
};

//Mutations
FormattingElementList.prototype.insertMarker = function () {
    this.entries.push({type: FormattingElementList.MARKER_ENTRY});
    this.length++;
};

FormattingElementList.prototype.pushElement = function (element, token) {
    this._ensureNoahArkCondition(element);

    this.entries.push({
        type: FormattingElementList.ELEMENT_ENTRY,
        element: element,
        token: token
    });

    this.length++;
};

FormattingElementList.prototype.insertElementAfterBookmark = function (element, token) {
    var bookmarkIdx = this.length - 1;

    for (; bookmarkIdx >= 0; bookmarkIdx--) {
        if (this.entries[bookmarkIdx] === this.bookmark)
            break;
    }

    this.entries.splice(bookmarkIdx + 1, 0, {
        type: FormattingElementList.ELEMENT_ENTRY,
        element: element,
        token: token
    });

    this.length++;
};

FormattingElementList.prototype.removeEntry = function (entry) {
    for (var i = this.length - 1; i >= 0; i--) {
        if (this.entries[i] === entry) {
            this.entries.splice(i, 1);
            this.length--;
            break;
        }
    }
};

FormattingElementList.prototype.clearToLastMarker = function () {
    while (this.length) {
        var entry = this.entries.pop();

        this.length--;

        if (entry.type === FormattingElementList.MARKER_ENTRY)
            break;
    }
};

//Search
FormattingElementList.prototype.getElementEntryInScopeWithTagName = function (tagName) {
    for (var i = this.length - 1; i >= 0; i--) {
        var entry = this.entries[i];

        if (entry.type === FormattingElementList.MARKER_ENTRY)
            return null;

        if (this.treeAdapter.getTagName(entry.element) === tagName)
            return entry;
    }

    return null;
};

FormattingElementList.prototype.getElementEntry = function (element) {
    for (var i = this.length - 1; i >= 0; i--) {
        var entry = this.entries[i];

        if (entry.type === FormattingElementList.ELEMENT_ENTRY && entry.element === element)
            return entry;
    }

    return null;
};

},{}],10:[function(require,module,exports){
'use strict';

var Tokenizer = require('../tokenizer'),
    OpenElementStack = require('./open_element_stack'),
    FormattingElementList = require('./formatting_element_list'),
    locationInfoMixin = require('../location_info/parser_mixin'),
    defaultTreeAdapter = require('../tree_adapters/default'),
    doctype = require('../common/doctype'),
    foreignContent = require('../common/foreign_content'),
    mergeOptions = require('../common/merge_options'),
    UNICODE = require('../common/unicode'),
    HTML = require('../common/html');

//Aliases
var $ = HTML.TAG_NAMES,
    NS = HTML.NAMESPACES,
    ATTRS = HTML.ATTRS;

/**
 * @typedef {Object} ParserOptions
 *
 * @property {Boolean} [locationInfo=false] - Enables source code location information for the nodes.
 * When enabled, each node (except root node) has the `__location` property. In case the node is not an empty element,
 * `__location` will be {@link ElementLocationInfo} object, otherwise it's {@link LocationInfo}.
 * If the element was implicitly created by the parser it's `__location` property will be `null`.
 *
 * @property {TreeAdapter} [treeAdapter=parse5.treeAdapters.default] - Specifies the resulting tree format.
 */
var DEFAULT_OPTIONS = {
    locationInfo: false,
    treeAdapter: defaultTreeAdapter
};

//Misc constants
var SEARCHABLE_INDEX_DEFAULT_PROMPT = 'This is a searchable index. Enter search keywords: ',
    SEARCHABLE_INDEX_INPUT_NAME = 'isindex',
    HIDDEN_INPUT_TYPE = 'hidden';

//Adoption agency loops iteration count
var AA_OUTER_LOOP_ITER = 8,
    AA_INNER_LOOP_ITER = 3;

//Insertion modes
var INITIAL_MODE = 'INITIAL_MODE',
    BEFORE_HTML_MODE = 'BEFORE_HTML_MODE',
    BEFORE_HEAD_MODE = 'BEFORE_HEAD_MODE',
    IN_HEAD_MODE = 'IN_HEAD_MODE',
    AFTER_HEAD_MODE = 'AFTER_HEAD_MODE',
    IN_BODY_MODE = 'IN_BODY_MODE',
    TEXT_MODE = 'TEXT_MODE',
    IN_TABLE_MODE = 'IN_TABLE_MODE',
    IN_TABLE_TEXT_MODE = 'IN_TABLE_TEXT_MODE',
    IN_CAPTION_MODE = 'IN_CAPTION_MODE',
    IN_COLUMN_GROUP_MODE = 'IN_COLUMN_GROUP_MODE',
    IN_TABLE_BODY_MODE = 'IN_TABLE_BODY_MODE',
    IN_ROW_MODE = 'IN_ROW_MODE',
    IN_CELL_MODE = 'IN_CELL_MODE',
    IN_SELECT_MODE = 'IN_SELECT_MODE',
    IN_SELECT_IN_TABLE_MODE = 'IN_SELECT_IN_TABLE_MODE',
    IN_TEMPLATE_MODE = 'IN_TEMPLATE_MODE',
    AFTER_BODY_MODE = 'AFTER_BODY_MODE',
    IN_FRAMESET_MODE = 'IN_FRAMESET_MODE',
    AFTER_FRAMESET_MODE = 'AFTER_FRAMESET_MODE',
    AFTER_AFTER_BODY_MODE = 'AFTER_AFTER_BODY_MODE',
    AFTER_AFTER_FRAMESET_MODE = 'AFTER_AFTER_FRAMESET_MODE';

//Insertion mode reset map
var INSERTION_MODE_RESET_MAP = {};

INSERTION_MODE_RESET_MAP[$.TR] = IN_ROW_MODE;
INSERTION_MODE_RESET_MAP[$.TBODY] =
INSERTION_MODE_RESET_MAP[$.THEAD] =
INSERTION_MODE_RESET_MAP[$.TFOOT] = IN_TABLE_BODY_MODE;
INSERTION_MODE_RESET_MAP[$.CAPTION] = IN_CAPTION_MODE;
INSERTION_MODE_RESET_MAP[$.COLGROUP] = IN_COLUMN_GROUP_MODE;
INSERTION_MODE_RESET_MAP[$.TABLE] = IN_TABLE_MODE;
INSERTION_MODE_RESET_MAP[$.BODY] = IN_BODY_MODE;
INSERTION_MODE_RESET_MAP[$.FRAMESET] = IN_FRAMESET_MODE;

//Template insertion mode switch map
var TEMPLATE_INSERTION_MODE_SWITCH_MAP = {};

TEMPLATE_INSERTION_MODE_SWITCH_MAP[$.CAPTION] =
TEMPLATE_INSERTION_MODE_SWITCH_MAP[$.COLGROUP] =
TEMPLATE_INSERTION_MODE_SWITCH_MAP[$.TBODY] =
TEMPLATE_INSERTION_MODE_SWITCH_MAP[$.TFOOT] =
TEMPLATE_INSERTION_MODE_SWITCH_MAP[$.THEAD] = IN_TABLE_MODE;
TEMPLATE_INSERTION_MODE_SWITCH_MAP[$.COL] = IN_COLUMN_GROUP_MODE;
TEMPLATE_INSERTION_MODE_SWITCH_MAP[$.TR] = IN_TABLE_BODY_MODE;
TEMPLATE_INSERTION_MODE_SWITCH_MAP[$.TD] =
TEMPLATE_INSERTION_MODE_SWITCH_MAP[$.TH] = IN_ROW_MODE;

//Token handlers map for insertion modes
var _ = {};

_[INITIAL_MODE] = {};
_[INITIAL_MODE][Tokenizer.CHARACTER_TOKEN] =
_[INITIAL_MODE][Tokenizer.NULL_CHARACTER_TOKEN] = tokenInInitialMode;
_[INITIAL_MODE][Tokenizer.WHITESPACE_CHARACTER_TOKEN] = ignoreToken;
_[INITIAL_MODE][Tokenizer.COMMENT_TOKEN] = appendComment;
_[INITIAL_MODE][Tokenizer.DOCTYPE_TOKEN] = doctypeInInitialMode;
_[INITIAL_MODE][Tokenizer.START_TAG_TOKEN] =
_[INITIAL_MODE][Tokenizer.END_TAG_TOKEN] =
_[INITIAL_MODE][Tokenizer.EOF_TOKEN] = tokenInInitialMode;

_[BEFORE_HTML_MODE] = {};
_[BEFORE_HTML_MODE][Tokenizer.CHARACTER_TOKEN] =
_[BEFORE_HTML_MODE][Tokenizer.NULL_CHARACTER_TOKEN] = tokenBeforeHtml;
_[BEFORE_HTML_MODE][Tokenizer.WHITESPACE_CHARACTER_TOKEN] = ignoreToken;
_[BEFORE_HTML_MODE][Tokenizer.COMMENT_TOKEN] = appendComment;
_[BEFORE_HTML_MODE][Tokenizer.DOCTYPE_TOKEN] = ignoreToken;
_[BEFORE_HTML_MODE][Tokenizer.START_TAG_TOKEN] = startTagBeforeHtml;
_[BEFORE_HTML_MODE][Tokenizer.END_TAG_TOKEN] = endTagBeforeHtml;
_[BEFORE_HTML_MODE][Tokenizer.EOF_TOKEN] = tokenBeforeHtml;

_[BEFORE_HEAD_MODE] = {};
_[BEFORE_HEAD_MODE][Tokenizer.CHARACTER_TOKEN] =
_[BEFORE_HEAD_MODE][Tokenizer.NULL_CHARACTER_TOKEN] = tokenBeforeHead;
_[BEFORE_HEAD_MODE][Tokenizer.WHITESPACE_CHARACTER_TOKEN] = ignoreToken;
_[BEFORE_HEAD_MODE][Tokenizer.COMMENT_TOKEN] = appendComment;
_[BEFORE_HEAD_MODE][Tokenizer.DOCTYPE_TOKEN] = ignoreToken;
_[BEFORE_HEAD_MODE][Tokenizer.START_TAG_TOKEN] = startTagBeforeHead;
_[BEFORE_HEAD_MODE][Tokenizer.END_TAG_TOKEN] = endTagBeforeHead;
_[BEFORE_HEAD_MODE][Tokenizer.EOF_TOKEN] = tokenBeforeHead;

_[IN_HEAD_MODE] = {};
_[IN_HEAD_MODE][Tokenizer.CHARACTER_TOKEN] =
_[IN_HEAD_MODE][Tokenizer.NULL_CHARACTER_TOKEN] = tokenInHead;
_[IN_HEAD_MODE][Tokenizer.WHITESPACE_CHARACTER_TOKEN] = insertCharacters;
_[IN_HEAD_MODE][Tokenizer.COMMENT_TOKEN] = appendComment;
_[IN_HEAD_MODE][Tokenizer.DOCTYPE_TOKEN] = ignoreToken;
_[IN_HEAD_MODE][Tokenizer.START_TAG_TOKEN] = startTagInHead;
_[IN_HEAD_MODE][Tokenizer.END_TAG_TOKEN] = endTagInHead;
_[IN_HEAD_MODE][Tokenizer.EOF_TOKEN] = tokenInHead;

_[AFTER_HEAD_MODE] = {};
_[AFTER_HEAD_MODE][Tokenizer.CHARACTER_TOKEN] =
_[AFTER_HEAD_MODE][Tokenizer.NULL_CHARACTER_TOKEN] = tokenAfterHead;
_[AFTER_HEAD_MODE][Tokenizer.WHITESPACE_CHARACTER_TOKEN] = insertCharacters;
_[AFTER_HEAD_MODE][Tokenizer.COMMENT_TOKEN] = appendComment;
_[AFTER_HEAD_MODE][Tokenizer.DOCTYPE_TOKEN] = ignoreToken;
_[AFTER_HEAD_MODE][Tokenizer.START_TAG_TOKEN] = startTagAfterHead;
_[AFTER_HEAD_MODE][Tokenizer.END_TAG_TOKEN] = endTagAfterHead;
_[AFTER_HEAD_MODE][Tokenizer.EOF_TOKEN] = tokenAfterHead;

_[IN_BODY_MODE] = {};
_[IN_BODY_MODE][Tokenizer.CHARACTER_TOKEN] = characterInBody;
_[IN_BODY_MODE][Tokenizer.NULL_CHARACTER_TOKEN] = ignoreToken;
_[IN_BODY_MODE][Tokenizer.WHITESPACE_CHARACTER_TOKEN] = whitespaceCharacterInBody;
_[IN_BODY_MODE][Tokenizer.COMMENT_TOKEN] = appendComment;
_[IN_BODY_MODE][Tokenizer.DOCTYPE_TOKEN] = ignoreToken;
_[IN_BODY_MODE][Tokenizer.START_TAG_TOKEN] = startTagInBody;
_[IN_BODY_MODE][Tokenizer.END_TAG_TOKEN] = endTagInBody;
_[IN_BODY_MODE][Tokenizer.EOF_TOKEN] = eofInBody;

_[TEXT_MODE] = {};
_[TEXT_MODE][Tokenizer.CHARACTER_TOKEN] =
_[TEXT_MODE][Tokenizer.NULL_CHARACTER_TOKEN] =
_[TEXT_MODE][Tokenizer.WHITESPACE_CHARACTER_TOKEN] = insertCharacters;
_[TEXT_MODE][Tokenizer.COMMENT_TOKEN] =
_[TEXT_MODE][Tokenizer.DOCTYPE_TOKEN] =
_[TEXT_MODE][Tokenizer.START_TAG_TOKEN] = ignoreToken;
_[TEXT_MODE][Tokenizer.END_TAG_TOKEN] = endTagInText;
_[TEXT_MODE][Tokenizer.EOF_TOKEN] = eofInText;

_[IN_TABLE_MODE] = {};
_[IN_TABLE_MODE][Tokenizer.CHARACTER_TOKEN] =
_[IN_TABLE_MODE][Tokenizer.NULL_CHARACTER_TOKEN] =
_[IN_TABLE_MODE][Tokenizer.WHITESPACE_CHARACTER_TOKEN] = characterInTable;
_[IN_TABLE_MODE][Tokenizer.COMMENT_TOKEN] = appendComment;
_[IN_TABLE_MODE][Tokenizer.DOCTYPE_TOKEN] = ignoreToken;
_[IN_TABLE_MODE][Tokenizer.START_TAG_TOKEN] = startTagInTable;
_[IN_TABLE_MODE][Tokenizer.END_TAG_TOKEN] = endTagInTable;
_[IN_TABLE_MODE][Tokenizer.EOF_TOKEN] = eofInBody;

_[IN_TABLE_TEXT_MODE] = {};
_[IN_TABLE_TEXT_MODE][Tokenizer.CHARACTER_TOKEN] = characterInTableText;
_[IN_TABLE_TEXT_MODE][Tokenizer.NULL_CHARACTER_TOKEN] = ignoreToken;
_[IN_TABLE_TEXT_MODE][Tokenizer.WHITESPACE_CHARACTER_TOKEN] = whitespaceCharacterInTableText;
_[IN_TABLE_TEXT_MODE][Tokenizer.COMMENT_TOKEN] =
_[IN_TABLE_TEXT_MODE][Tokenizer.DOCTYPE_TOKEN] =
_[IN_TABLE_TEXT_MODE][Tokenizer.START_TAG_TOKEN] =
_[IN_TABLE_TEXT_MODE][Tokenizer.END_TAG_TOKEN] =
_[IN_TABLE_TEXT_MODE][Tokenizer.EOF_TOKEN] = tokenInTableText;

_[IN_CAPTION_MODE] = {};
_[IN_CAPTION_MODE][Tokenizer.CHARACTER_TOKEN] = characterInBody;
_[IN_CAPTION_MODE][Tokenizer.NULL_CHARACTER_TOKEN] = ignoreToken;
_[IN_CAPTION_MODE][Tokenizer.WHITESPACE_CHARACTER_TOKEN] = whitespaceCharacterInBody;
_[IN_CAPTION_MODE][Tokenizer.COMMENT_TOKEN] = appendComment;
_[IN_CAPTION_MODE][Tokenizer.DOCTYPE_TOKEN] = ignoreToken;
_[IN_CAPTION_MODE][Tokenizer.START_TAG_TOKEN] = startTagInCaption;
_[IN_CAPTION_MODE][Tokenizer.END_TAG_TOKEN] = endTagInCaption;
_[IN_CAPTION_MODE][Tokenizer.EOF_TOKEN] = eofInBody;

_[IN_COLUMN_GROUP_MODE] = {};
_[IN_COLUMN_GROUP_MODE][Tokenizer.CHARACTER_TOKEN] =
_[IN_COLUMN_GROUP_MODE][Tokenizer.NULL_CHARACTER_TOKEN] = tokenInColumnGroup;
_[IN_COLUMN_GROUP_MODE][Tokenizer.WHITESPACE_CHARACTER_TOKEN] = insertCharacters;
_[IN_COLUMN_GROUP_MODE][Tokenizer.COMMENT_TOKEN] = appendComment;
_[IN_COLUMN_GROUP_MODE][Tokenizer.DOCTYPE_TOKEN] = ignoreToken;
_[IN_COLUMN_GROUP_MODE][Tokenizer.START_TAG_TOKEN] = startTagInColumnGroup;
_[IN_COLUMN_GROUP_MODE][Tokenizer.END_TAG_TOKEN] = endTagInColumnGroup;
_[IN_COLUMN_GROUP_MODE][Tokenizer.EOF_TOKEN] = eofInBody;

_[IN_TABLE_BODY_MODE] = {};
_[IN_TABLE_BODY_MODE][Tokenizer.CHARACTER_TOKEN] =
_[IN_TABLE_BODY_MODE][Tokenizer.NULL_CHARACTER_TOKEN] =
_[IN_TABLE_BODY_MODE][Tokenizer.WHITESPACE_CHARACTER_TOKEN] = characterInTable;
_[IN_TABLE_BODY_MODE][Tokenizer.COMMENT_TOKEN] = appendComment;
_[IN_TABLE_BODY_MODE][Tokenizer.DOCTYPE_TOKEN] = ignoreToken;
_[IN_TABLE_BODY_MODE][Tokenizer.START_TAG_TOKEN] = startTagInTableBody;
_[IN_TABLE_BODY_MODE][Tokenizer.END_TAG_TOKEN] = endTagInTableBody;
_[IN_TABLE_BODY_MODE][Tokenizer.EOF_TOKEN] = eofInBody;

_[IN_ROW_MODE] = {};
_[IN_ROW_MODE][Tokenizer.CHARACTER_TOKEN] =
_[IN_ROW_MODE][Tokenizer.NULL_CHARACTER_TOKEN] =
_[IN_ROW_MODE][Tokenizer.WHITESPACE_CHARACTER_TOKEN] = characterInTable;
_[IN_ROW_MODE][Tokenizer.COMMENT_TOKEN] = appendComment;
_[IN_ROW_MODE][Tokenizer.DOCTYPE_TOKEN] = ignoreToken;
_[IN_ROW_MODE][Tokenizer.START_TAG_TOKEN] = startTagInRow;
_[IN_ROW_MODE][Tokenizer.END_TAG_TOKEN] = endTagInRow;
_[IN_ROW_MODE][Tokenizer.EOF_TOKEN] = eofInBody;

_[IN_CELL_MODE] = {};
_[IN_CELL_MODE][Tokenizer.CHARACTER_TOKEN] = characterInBody;
_[IN_CELL_MODE][Tokenizer.NULL_CHARACTER_TOKEN] = ignoreToken;
_[IN_CELL_MODE][Tokenizer.WHITESPACE_CHARACTER_TOKEN] = whitespaceCharacterInBody;
_[IN_CELL_MODE][Tokenizer.COMMENT_TOKEN] = appendComment;
_[IN_CELL_MODE][Tokenizer.DOCTYPE_TOKEN] = ignoreToken;
_[IN_CELL_MODE][Tokenizer.START_TAG_TOKEN] = startTagInCell;
_[IN_CELL_MODE][Tokenizer.END_TAG_TOKEN] = endTagInCell;
_[IN_CELL_MODE][Tokenizer.EOF_TOKEN] = eofInBody;

_[IN_SELECT_MODE] = {};
_[IN_SELECT_MODE][Tokenizer.CHARACTER_TOKEN] = insertCharacters;
_[IN_SELECT_MODE][Tokenizer.NULL_CHARACTER_TOKEN] = ignoreToken;
_[IN_SELECT_MODE][Tokenizer.WHITESPACE_CHARACTER_TOKEN] = insertCharacters;
_[IN_SELECT_MODE][Tokenizer.COMMENT_TOKEN] = appendComment;
_[IN_SELECT_MODE][Tokenizer.DOCTYPE_TOKEN] = ignoreToken;
_[IN_SELECT_MODE][Tokenizer.START_TAG_TOKEN] = startTagInSelect;
_[IN_SELECT_MODE][Tokenizer.END_TAG_TOKEN] = endTagInSelect;
_[IN_SELECT_MODE][Tokenizer.EOF_TOKEN] = eofInBody;

_[IN_SELECT_IN_TABLE_MODE] = {};
_[IN_SELECT_IN_TABLE_MODE][Tokenizer.CHARACTER_TOKEN] = insertCharacters;
_[IN_SELECT_IN_TABLE_MODE][Tokenizer.NULL_CHARACTER_TOKEN] = ignoreToken;
_[IN_SELECT_IN_TABLE_MODE][Tokenizer.WHITESPACE_CHARACTER_TOKEN] = insertCharacters;
_[IN_SELECT_IN_TABLE_MODE][Tokenizer.COMMENT_TOKEN] = appendComment;
_[IN_SELECT_IN_TABLE_MODE][Tokenizer.DOCTYPE_TOKEN] = ignoreToken;
_[IN_SELECT_IN_TABLE_MODE][Tokenizer.START_TAG_TOKEN] = startTagInSelectInTable;
_[IN_SELECT_IN_TABLE_MODE][Tokenizer.END_TAG_TOKEN] = endTagInSelectInTable;
_[IN_SELECT_IN_TABLE_MODE][Tokenizer.EOF_TOKEN] = eofInBody;

_[IN_TEMPLATE_MODE] = {};
_[IN_TEMPLATE_MODE][Tokenizer.CHARACTER_TOKEN] = characterInBody;
_[IN_TEMPLATE_MODE][Tokenizer.NULL_CHARACTER_TOKEN] = ignoreToken;
_[IN_TEMPLATE_MODE][Tokenizer.WHITESPACE_CHARACTER_TOKEN] = whitespaceCharacterInBody;
_[IN_TEMPLATE_MODE][Tokenizer.COMMENT_TOKEN] = appendComment;
_[IN_TEMPLATE_MODE][Tokenizer.DOCTYPE_TOKEN] = ignoreToken;
_[IN_TEMPLATE_MODE][Tokenizer.START_TAG_TOKEN] = startTagInTemplate;
_[IN_TEMPLATE_MODE][Tokenizer.END_TAG_TOKEN] = endTagInTemplate;
_[IN_TEMPLATE_MODE][Tokenizer.EOF_TOKEN] = eofInTemplate;

_[AFTER_BODY_MODE] = {};
_[AFTER_BODY_MODE][Tokenizer.CHARACTER_TOKEN] =
_[AFTER_BODY_MODE][Tokenizer.NULL_CHARACTER_TOKEN] = tokenAfterBody;
_[AFTER_BODY_MODE][Tokenizer.WHITESPACE_CHARACTER_TOKEN] = whitespaceCharacterInBody;
_[AFTER_BODY_MODE][Tokenizer.COMMENT_TOKEN] = appendCommentToRootHtmlElement;
_[AFTER_BODY_MODE][Tokenizer.DOCTYPE_TOKEN] = ignoreToken;
_[AFTER_BODY_MODE][Tokenizer.START_TAG_TOKEN] = startTagAfterBody;
_[AFTER_BODY_MODE][Tokenizer.END_TAG_TOKEN] = endTagAfterBody;
_[AFTER_BODY_MODE][Tokenizer.EOF_TOKEN] = stopParsing;

_[IN_FRAMESET_MODE] = {};
_[IN_FRAMESET_MODE][Tokenizer.CHARACTER_TOKEN] =
_[IN_FRAMESET_MODE][Tokenizer.NULL_CHARACTER_TOKEN] = ignoreToken;
_[IN_FRAMESET_MODE][Tokenizer.WHITESPACE_CHARACTER_TOKEN] = insertCharacters;
_[IN_FRAMESET_MODE][Tokenizer.COMMENT_TOKEN] = appendComment;
_[IN_FRAMESET_MODE][Tokenizer.DOCTYPE_TOKEN] = ignoreToken;
_[IN_FRAMESET_MODE][Tokenizer.START_TAG_TOKEN] = startTagInFrameset;
_[IN_FRAMESET_MODE][Tokenizer.END_TAG_TOKEN] = endTagInFrameset;
_[IN_FRAMESET_MODE][Tokenizer.EOF_TOKEN] = stopParsing;

_[AFTER_FRAMESET_MODE] = {};
_[AFTER_FRAMESET_MODE][Tokenizer.CHARACTER_TOKEN] =
_[AFTER_FRAMESET_MODE][Tokenizer.NULL_CHARACTER_TOKEN] = ignoreToken;
_[AFTER_FRAMESET_MODE][Tokenizer.WHITESPACE_CHARACTER_TOKEN] = insertCharacters;
_[AFTER_FRAMESET_MODE][Tokenizer.COMMENT_TOKEN] = appendComment;
_[AFTER_FRAMESET_MODE][Tokenizer.DOCTYPE_TOKEN] = ignoreToken;
_[AFTER_FRAMESET_MODE][Tokenizer.START_TAG_TOKEN] = startTagAfterFrameset;
_[AFTER_FRAMESET_MODE][Tokenizer.END_TAG_TOKEN] = endTagAfterFrameset;
_[AFTER_FRAMESET_MODE][Tokenizer.EOF_TOKEN] = stopParsing;

_[AFTER_AFTER_BODY_MODE] = {};
_[AFTER_AFTER_BODY_MODE][Tokenizer.CHARACTER_TOKEN] = tokenAfterAfterBody;
_[AFTER_AFTER_BODY_MODE][Tokenizer.NULL_CHARACTER_TOKEN] = tokenAfterAfterBody;
_[AFTER_AFTER_BODY_MODE][Tokenizer.WHITESPACE_CHARACTER_TOKEN] = whitespaceCharacterInBody;
_[AFTER_AFTER_BODY_MODE][Tokenizer.COMMENT_TOKEN] = appendCommentToDocument;
_[AFTER_AFTER_BODY_MODE][Tokenizer.DOCTYPE_TOKEN] = ignoreToken;
_[AFTER_AFTER_BODY_MODE][Tokenizer.START_TAG_TOKEN] = startTagAfterAfterBody;
_[AFTER_AFTER_BODY_MODE][Tokenizer.END_TAG_TOKEN] = tokenAfterAfterBody;
_[AFTER_AFTER_BODY_MODE][Tokenizer.EOF_TOKEN] = stopParsing;

_[AFTER_AFTER_FRAMESET_MODE] = {};
_[AFTER_AFTER_FRAMESET_MODE][Tokenizer.CHARACTER_TOKEN] =
_[AFTER_AFTER_FRAMESET_MODE][Tokenizer.NULL_CHARACTER_TOKEN] = ignoreToken;
_[AFTER_AFTER_FRAMESET_MODE][Tokenizer.WHITESPACE_CHARACTER_TOKEN] = whitespaceCharacterInBody;
_[AFTER_AFTER_FRAMESET_MODE][Tokenizer.COMMENT_TOKEN] = appendCommentToDocument;
_[AFTER_AFTER_FRAMESET_MODE][Tokenizer.DOCTYPE_TOKEN] = ignoreToken;
_[AFTER_AFTER_FRAMESET_MODE][Tokenizer.START_TAG_TOKEN] = startTagAfterAfterFrameset;
_[AFTER_AFTER_FRAMESET_MODE][Tokenizer.END_TAG_TOKEN] = ignoreToken;
_[AFTER_AFTER_FRAMESET_MODE][Tokenizer.EOF_TOKEN] = stopParsing;

//Searchable index building utils (<isindex> tag)
function getSearchableIndexFormAttrs(isindexStartTagToken) {
    var indexAction = Tokenizer.getTokenAttr(isindexStartTagToken, ATTRS.ACTION),
        attrs = [];

    if (indexAction !== null) {
        attrs.push({
            name: ATTRS.ACTION,
            value: indexAction
        });
    }

    return attrs;
}

function getSearchableIndexLabelText(isindexStartTagToken) {
    var indexPrompt = Tokenizer.getTokenAttr(isindexStartTagToken, ATTRS.PROMPT);

    return indexPrompt === null ? SEARCHABLE_INDEX_DEFAULT_PROMPT : indexPrompt;
}

function getSearchableIndexInputAttrs(isindexStartTagToken) {
    var isindexAttrs = isindexStartTagToken.attrs,
        inputAttrs = [];

    for (var i = 0; i < isindexAttrs.length; i++) {
        var name = isindexAttrs[i].name;

        if (name !== ATTRS.NAME && name !== ATTRS.ACTION && name !== ATTRS.PROMPT)
            inputAttrs.push(isindexAttrs[i]);
    }

    inputAttrs.push({
        name: ATTRS.NAME,
        value: SEARCHABLE_INDEX_INPUT_NAME
    });

    return inputAttrs;
}

//Parser
var Parser = module.exports = function (options) {
    this.options = mergeOptions(DEFAULT_OPTIONS, options);

    this.treeAdapter = this.options.treeAdapter;
    this.pendingScript = null;

    if (this.options.locationInfo)
        locationInfoMixin.assign(this);
};

// API
Parser.prototype.parse = function (html) {
    var document = this.treeAdapter.createDocument();

    this._bootstrap(document, null);
    this.tokenizer.write(html, true);
    this._runParsingLoop(null, null);

    return document;
};

Parser.prototype.parseFragment = function (html, fragmentContext) {
    //NOTE: use <template> element as a fragment context if context element was not provided,
    //so we will parse in "forgiving" manner
    if (!fragmentContext)
        fragmentContext = this.treeAdapter.createElement($.TEMPLATE, NS.HTML, []);

    //NOTE: create fake element which will be used as 'document' for fragment parsing.
    //This is important for jsdom there 'document' can't be recreated, therefore
    //fragment parsing causes messing of the main `document`.
    var documentMock = this.treeAdapter.createElement('documentmock', NS.HTML, []);

    this._bootstrap(documentMock, fragmentContext);

    if (this.treeAdapter.getTagName(fragmentContext) === $.TEMPLATE)
        this._pushTmplInsertionMode(IN_TEMPLATE_MODE);

    this._initTokenizerForFragmentParsing();
    this._insertFakeRootElement();
    this._resetInsertionMode();
    this._findFormInFragmentContext();
    this.tokenizer.write(html, true);
    this._runParsingLoop(null, null);

    var rootElement = this.treeAdapter.getFirstChild(documentMock),
        fragment = this.treeAdapter.createDocumentFragment();

    this._adoptNodes(rootElement, fragment);

    return fragment;
};

//Bootstrap parser
Parser.prototype._bootstrap = function (document, fragmentContext) {
    this.tokenizer = new Tokenizer(this.options);

    this.stopped = false;

    this.insertionMode = INITIAL_MODE;
    this.originalInsertionMode = '';

    this.document = document;
    this.fragmentContext = fragmentContext;

    this.headElement = null;
    this.formElement = null;

    this.openElements = new OpenElementStack(this.document, this.treeAdapter);
    this.activeFormattingElements = new FormattingElementList(this.treeAdapter);

    this.tmplInsertionModeStack = [];
    this.tmplInsertionModeStackTop = -1;
    this.currentTmplInsertionMode = null;

    this.pendingCharacterTokens = [];
    this.hasNonWhitespacePendingCharacterToken = false;

    this.framesetOk = true;
    this.skipNextNewLine = false;
    this.fosterParentingEnabled = false;
};

//Parsing loop
Parser.prototype._runParsingLoop = function (writeCallback, scriptHandler) {
    while (!this.stopped) {
        this._setupTokenizerCDATAMode();

        var token = this.tokenizer.getNextToken();

        if (token.type === Tokenizer.HIBERNATION_TOKEN)
            break;

        if (this.skipNextNewLine) {
            this.skipNextNewLine = false;

            if (token.type === Tokenizer.WHITESPACE_CHARACTER_TOKEN && token.chars[0] === '\n') {
                if (token.chars.length === 1)
                    continue;

                token.chars = token.chars.substr(1);
            }
        }

        if (this._shouldProcessTokenInForeignContent(token))
            this._processTokenInForeignContent(token);

        else
            this._processToken(token);

        if (scriptHandler && this.pendingScript)
            break;
    }

    if (scriptHandler && this.pendingScript) {
        var script = this.pendingScript;

        this.pendingScript = null;

        scriptHandler(script);

        return;
    }

    if (writeCallback)
        writeCallback();
};

//Text parsing
Parser.prototype._setupTokenizerCDATAMode = function () {
    var current = this._getAdjustedCurrentElement();

    this.tokenizer.allowCDATA = current && current !== this.document &&
                                this.treeAdapter.getNamespaceURI(current) !== NS.HTML &&
                                !this._isHtmlIntegrationPoint(current) &&
                                !this._isMathMLTextIntegrationPoint(current);
};

Parser.prototype._switchToTextParsing = function (currentToken, nextTokenizerState) {
    this._insertElement(currentToken, NS.HTML);
    this.tokenizer.state = nextTokenizerState;
    this.originalInsertionMode = this.insertionMode;
    this.insertionMode = TEXT_MODE;
};

//Fragment parsing
Parser.prototype._getAdjustedCurrentElement = function () {
    return this.openElements.stackTop === 0 && this.fragmentContext ?
           this.fragmentContext :
           this.openElements.current;
};

Parser.prototype._findFormInFragmentContext = function () {
    var node = this.fragmentContext;

    do {
        if (this.treeAdapter.getTagName(node) === $.FORM) {
            this.formElement = node;
            break;
        }

        node = this.treeAdapter.getParentNode(node);
    } while (node);
};

Parser.prototype._initTokenizerForFragmentParsing = function () {
    if(this.treeAdapter.getNamespaceURI(this.fragmentContext) === NS.HTML) {
        var tn = this.treeAdapter.getTagName(this.fragmentContext);

        if (tn === $.TITLE || tn === $.TEXTAREA)
            this.tokenizer.state = Tokenizer.MODE.RCDATA;

        else if (tn === $.STYLE || tn === $.XMP || tn === $.IFRAME ||
                 tn === $.NOEMBED || tn === $.NOFRAMES || tn === $.NOSCRIPT)
            this.tokenizer.state = Tokenizer.MODE.RAWTEXT;

        else if (tn === $.SCRIPT)
            this.tokenizer.state = Tokenizer.MODE.SCRIPT_DATA;

        else if (tn === $.PLAINTEXT)
            this.tokenizer.state = Tokenizer.MODE.PLAINTEXT;
    }
};

//Tree mutation
Parser.prototype._setDocumentType = function (token) {
    this.treeAdapter.setDocumentType(this.document, token.name, token.publicId, token.systemId);
};

Parser.prototype._attachElementToTree = function (element) {
    if (this._shouldFosterParentOnInsertion())
        this._fosterParentElement(element);

    else {
        var parent = this.openElements.currentTmplContent || this.openElements.current;

        this.treeAdapter.appendChild(parent, element);
    }
};

Parser.prototype._appendElement = function (token, namespaceURI) {
    var element = this.treeAdapter.createElement(token.tagName, namespaceURI, token.attrs);

    this._attachElementToTree(element);
};

Parser.prototype._insertElement = function (token, namespaceURI) {
    var element = this.treeAdapter.createElement(token.tagName, namespaceURI, token.attrs);

    this._attachElementToTree(element);
    this.openElements.push(element);
};

Parser.prototype._insertTemplate = function (token) {
    var tmpl = this.treeAdapter.createElement(token.tagName, NS.HTML, token.attrs),
        content = this.treeAdapter.createDocumentFragment();

    this.treeAdapter.setTemplateContent(tmpl, content);
    this._attachElementToTree(tmpl);
    this.openElements.push(tmpl);
};

Parser.prototype._insertFakeRootElement = function () {
    var element = this.treeAdapter.createElement($.HTML, NS.HTML, []);

    this.treeAdapter.appendChild(this.openElements.current, element);
    this.openElements.push(element);
};

Parser.prototype._appendCommentNode = function (token, parent) {
    var commentNode = this.treeAdapter.createCommentNode(token.data);

    this.treeAdapter.appendChild(parent, commentNode);
};

Parser.prototype._insertCharacters = function (token) {
    if (this._shouldFosterParentOnInsertion())
        this._fosterParentText(token.chars);

    else {
        var parent = this.openElements.currentTmplContent || this.openElements.current;

        this.treeAdapter.insertText(parent, token.chars);
    }
};

Parser.prototype._adoptNodes = function (donor, recipient) {
    while (true) {
        var child = this.treeAdapter.getFirstChild(donor);

        if (!child)
            break;

        this.treeAdapter.detachNode(child);
        this.treeAdapter.appendChild(recipient, child);
    }
};

//Token processing
Parser.prototype._shouldProcessTokenInForeignContent = function (token) {
    var current = this._getAdjustedCurrentElement();

    if (!current || current === this.document)
        return false;

    var ns = this.treeAdapter.getNamespaceURI(current);

    if (ns === NS.HTML)
        return false;

    if (this.treeAdapter.getTagName(current) === $.ANNOTATION_XML && ns === NS.MATHML &&
        token.type === Tokenizer.START_TAG_TOKEN && token.tagName === $.SVG)
        return false;

    var isCharacterToken = token.type === Tokenizer.CHARACTER_TOKEN ||
                           token.type === Tokenizer.NULL_CHARACTER_TOKEN ||
                           token.type === Tokenizer.WHITESPACE_CHARACTER_TOKEN,
        isMathMLTextStartTag = token.type === Tokenizer.START_TAG_TOKEN &&
                               token.tagName !== $.MGLYPH &&
                               token.tagName !== $.MALIGNMARK;

    if ((isMathMLTextStartTag || isCharacterToken) && this._isMathMLTextIntegrationPoint(current))
        return false;

    if ((token.type === Tokenizer.START_TAG_TOKEN || isCharacterToken) && this._isHtmlIntegrationPoint(current))
        return false;

    return token.type !== Tokenizer.EOF_TOKEN;
};

Parser.prototype._processToken = function (token) {
    _[this.insertionMode][token.type](this, token);
};

Parser.prototype._processTokenInBodyMode = function (token) {
    _[IN_BODY_MODE][token.type](this, token);
};

Parser.prototype._processTokenInForeignContent = function (token) {
    if (token.type === Tokenizer.CHARACTER_TOKEN)
        characterInForeignContent(this, token);

    else if (token.type === Tokenizer.NULL_CHARACTER_TOKEN)
        nullCharacterInForeignContent(this, token);

    else if (token.type === Tokenizer.WHITESPACE_CHARACTER_TOKEN)
        insertCharacters(this, token);

    else if (token.type === Tokenizer.COMMENT_TOKEN)
        appendComment(this, token);

    else if (token.type === Tokenizer.START_TAG_TOKEN)
        startTagInForeignContent(this, token);

    else if (token.type === Tokenizer.END_TAG_TOKEN)
        endTagInForeignContent(this, token);
};

Parser.prototype._processFakeStartTagWithAttrs = function (tagName, attrs) {
    var fakeToken = this.tokenizer.buildStartTagToken(tagName);

    fakeToken.attrs = attrs;
    this._processToken(fakeToken);
};

Parser.prototype._processFakeStartTag = function (tagName) {
    var fakeToken = this.tokenizer.buildStartTagToken(tagName);

    this._processToken(fakeToken);
    return fakeToken;
};

Parser.prototype._processFakeEndTag = function (tagName) {
    var fakeToken = this.tokenizer.buildEndTagToken(tagName);

    this._processToken(fakeToken);
    return fakeToken;
};

//Integration points
Parser.prototype._isMathMLTextIntegrationPoint = function (element) {
    var tn = this.treeAdapter.getTagName(element),
        ns = this.treeAdapter.getNamespaceURI(element);

    return foreignContent.isMathMLTextIntegrationPoint(tn, ns);
};

Parser.prototype._isHtmlIntegrationPoint = function (element) {
    var tn = this.treeAdapter.getTagName(element),
        ns = this.treeAdapter.getNamespaceURI(element),
        attrs = this.treeAdapter.getAttrList(element);

    return foreignContent.isHtmlIntegrationPoint(tn, ns, attrs);
};

//Active formatting elements reconstruction
Parser.prototype._reconstructActiveFormattingElements = function () {
    var listLength = this.activeFormattingElements.length;

    if (listLength) {
        var unopenIdx = listLength,
            entry = null;

        do {
            unopenIdx--;
            entry = this.activeFormattingElements.entries[unopenIdx];

            if (entry.type === FormattingElementList.MARKER_ENTRY || this.openElements.contains(entry.element)) {
                unopenIdx++;
                break;
            }
        } while (unopenIdx > 0);

        for (var i = unopenIdx; i < listLength; i++) {
            entry = this.activeFormattingElements.entries[i];
            this._insertElement(entry.token, this.treeAdapter.getNamespaceURI(entry.element));
            entry.element = this.openElements.current;
        }
    }
};

//Close elements
Parser.prototype._closeTableCell = function () {
    if (this.openElements.hasInTableScope($.TD))
        this._processFakeEndTag($.TD);

    else
        this._processFakeEndTag($.TH);
};

Parser.prototype._closePElement = function () {
    this.openElements.generateImpliedEndTagsWithExclusion($.P);
    this.openElements.popUntilTagNamePopped($.P);
};

//Insertion modes
Parser.prototype._resetInsertionMode = function () {
    for (var i = this.openElements.stackTop, last = false; i >= 0; i--) {
        var element = this.openElements.items[i];

        if (i === 0) {
            last = true;

            if (this.fragmentContext)
                element = this.fragmentContext;
        }

        var tn = this.treeAdapter.getTagName(element),
            newInsertionMode = INSERTION_MODE_RESET_MAP[tn];

        if (newInsertionMode) {
            this.insertionMode = newInsertionMode;
            break;
        }

        else if (!last && (tn === $.TD || tn === $.TH)) {
            this.insertionMode = IN_CELL_MODE;
            break;
        }

        else if (!last && tn === $.HEAD) {
            this.insertionMode = IN_HEAD_MODE;
            break;
        }

        else if (tn === $.SELECT) {
            this._resetInsertionModeForSelect(i);
            break;
        }

        else if (tn === $.TEMPLATE) {
            this.insertionMode = this.currentTmplInsertionMode;
            break;
        }

        else if (tn === $.HTML) {
            this.insertionMode = this.headElement ? AFTER_HEAD_MODE : BEFORE_HEAD_MODE;
            break;
        }

        else if (last) {
            this.insertionMode = IN_BODY_MODE;
            break;
        }
    }
};

Parser.prototype._resetInsertionModeForSelect = function (selectIdx) {
    if (selectIdx > 0) {
        for (var i = selectIdx - 1; i > 0; i--) {
            var ancestor = this.openElements.items[i],
                tn = this.treeAdapter.getTagName(ancestor);

            if (tn === $.TEMPLATE)
                break;

            else if (tn === $.TABLE) {
                this.insertionMode = IN_SELECT_IN_TABLE_MODE;
                return;
            }
        }
    }

    this.insertionMode = IN_SELECT_MODE;
};

Parser.prototype._pushTmplInsertionMode = function (mode) {
    this.tmplInsertionModeStack.push(mode);
    this.tmplInsertionModeStackTop++;
    this.currentTmplInsertionMode = mode;
};

Parser.prototype._popTmplInsertionMode = function () {
    this.tmplInsertionModeStack.pop();
    this.tmplInsertionModeStackTop--;
    this.currentTmplInsertionMode = this.tmplInsertionModeStack[this.tmplInsertionModeStackTop];
};

//Foster parenting
Parser.prototype._isElementCausesFosterParenting = function (element) {
    var tn = this.treeAdapter.getTagName(element);

    return tn === $.TABLE || tn === $.TBODY || tn === $.TFOOT || tn === $.THEAD || tn === $.TR;
};

Parser.prototype._shouldFosterParentOnInsertion = function () {
    return this.fosterParentingEnabled && this._isElementCausesFosterParenting(this.openElements.current);
};

Parser.prototype._findFosterParentingLocation = function () {
    var location = {
        parent: null,
        beforeElement: null
    };

    for (var i = this.openElements.stackTop; i >= 0; i--) {
        var openElement = this.openElements.items[i],
            tn = this.treeAdapter.getTagName(openElement),
            ns = this.treeAdapter.getNamespaceURI(openElement);

        if (tn === $.TEMPLATE && ns === NS.HTML) {
            location.parent = this.treeAdapter.getTemplateContent(openElement);
            break;
        }

        else if (tn === $.TABLE) {
            location.parent = this.treeAdapter.getParentNode(openElement);

            if (location.parent)
                location.beforeElement = openElement;
            else
                location.parent = this.openElements.items[i - 1];

            break;
        }
    }

    if (!location.parent)
        location.parent = this.openElements.items[0];

    return location;
};

Parser.prototype._fosterParentElement = function (element) {
    var location = this._findFosterParentingLocation();

    if (location.beforeElement)
        this.treeAdapter.insertBefore(location.parent, element, location.beforeElement);
    else
        this.treeAdapter.appendChild(location.parent, element);
};

Parser.prototype._fosterParentText = function (chars) {
    var location = this._findFosterParentingLocation();

    if (location.beforeElement)
        this.treeAdapter.insertTextBefore(location.parent, chars, location.beforeElement);
    else
        this.treeAdapter.insertText(location.parent, chars);
};

//Special elements
Parser.prototype._isSpecialElement = function (element) {
    var tn = this.treeAdapter.getTagName(element),
        ns = this.treeAdapter.getNamespaceURI(element);

    return HTML.SPECIAL_ELEMENTS[ns][tn];
};

//Adoption agency algorithm
//(see: http://www.whatwg.org/specs/web-apps/current-work/multipage/tree-construction.html#adoptionAgency)
//------------------------------------------------------------------

//Steps 5-8 of the algorithm
function aaObtainFormattingElementEntry(p, token) {
    var formattingElementEntry = p.activeFormattingElements.getElementEntryInScopeWithTagName(token.tagName);

    if (formattingElementEntry) {
        if (!p.openElements.contains(formattingElementEntry.element)) {
            p.activeFormattingElements.removeEntry(formattingElementEntry);
            formattingElementEntry = null;
        }

        else if (!p.openElements.hasInScope(token.tagName))
            formattingElementEntry = null;
    }

    else
        genericEndTagInBody(p, token);

    return formattingElementEntry;
}

//Steps 9 and 10 of the algorithm
function aaObtainFurthestBlock(p, formattingElementEntry) {
    var furthestBlock = null;

    for (var i = p.openElements.stackTop; i >= 0; i--) {
        var element = p.openElements.items[i];

        if (element === formattingElementEntry.element)
            break;

        if (p._isSpecialElement(element))
            furthestBlock = element;
    }

    if (!furthestBlock) {
        p.openElements.popUntilElementPopped(formattingElementEntry.element);
        p.activeFormattingElements.removeEntry(formattingElementEntry);
    }

    return furthestBlock;
}

//Step 13 of the algorithm
function aaInnerLoop(p, furthestBlock, formattingElement) {
    var element = null,
        lastElement = furthestBlock,
        nextElement = p.openElements.getCommonAncestor(furthestBlock);

    for (var i = 0; i < AA_INNER_LOOP_ITER; i++) {
        element = nextElement;

        //NOTE: store next element for the next loop iteration (it may be deleted from the stack by step 9.5)
        nextElement = p.openElements.getCommonAncestor(element);

        var elementEntry = p.activeFormattingElements.getElementEntry(element);

        if (!elementEntry) {
            p.openElements.remove(element);
            continue;
        }

        if (element === formattingElement)
            break;

        element = aaRecreateElementFromEntry(p, elementEntry);

        if (lastElement === furthestBlock)
            p.activeFormattingElements.bookmark = elementEntry;

        p.treeAdapter.detachNode(lastElement);
        p.treeAdapter.appendChild(element, lastElement);
        lastElement = element;
    }

    return lastElement;
}

//Step 13.7 of the algorithm
function aaRecreateElementFromEntry(p, elementEntry) {
    var ns = p.treeAdapter.getNamespaceURI(elementEntry.element),
        newElement = p.treeAdapter.createElement(elementEntry.token.tagName, ns, elementEntry.token.attrs);

    p.openElements.replace(elementEntry.element, newElement);
    elementEntry.element = newElement;

    return newElement;
}

//Step 14 of the algorithm
function aaInsertLastNodeInCommonAncestor(p, commonAncestor, lastElement) {
    if (p._isElementCausesFosterParenting(commonAncestor))
        p._fosterParentElement(lastElement);

    else {
        var tn = p.treeAdapter.getTagName(commonAncestor),
            ns = p.treeAdapter.getNamespaceURI(commonAncestor);

        if (tn === $.TEMPLATE && ns === NS.HTML)
            commonAncestor = p.treeAdapter.getTemplateContent(commonAncestor);

        p.treeAdapter.appendChild(commonAncestor, lastElement);
    }
}

//Steps 15-19 of the algorithm
function aaReplaceFormattingElement(p, furthestBlock, formattingElementEntry) {
    var ns = p.treeAdapter.getNamespaceURI(formattingElementEntry.element),
        token = formattingElementEntry.token,
        newElement = p.treeAdapter.createElement(token.tagName, ns, token.attrs);

    p._adoptNodes(furthestBlock, newElement);
    p.treeAdapter.appendChild(furthestBlock, newElement);

    p.activeFormattingElements.insertElementAfterBookmark(newElement, formattingElementEntry.token);
    p.activeFormattingElements.removeEntry(formattingElementEntry);

    p.openElements.remove(formattingElementEntry.element);
    p.openElements.insertAfter(furthestBlock, newElement);
}

//Algorithm entry point
function callAdoptionAgency(p, token) {
    for (var i = 0; i < AA_OUTER_LOOP_ITER; i++) {
        var formattingElementEntry = aaObtainFormattingElementEntry(p, token, formattingElementEntry);

        if (!formattingElementEntry)
            break;

        var furthestBlock = aaObtainFurthestBlock(p, formattingElementEntry);

        if (!furthestBlock)
            break;

        p.activeFormattingElements.bookmark = formattingElementEntry;

        var lastElement = aaInnerLoop(p, furthestBlock, formattingElementEntry.element),
            commonAncestor = p.openElements.getCommonAncestor(formattingElementEntry.element);

        p.treeAdapter.detachNode(lastElement);
        aaInsertLastNodeInCommonAncestor(p, commonAncestor, lastElement);
        aaReplaceFormattingElement(p, furthestBlock, formattingElementEntry);
    }
}


//Generic token handlers
//------------------------------------------------------------------
function ignoreToken() {
    //NOTE: do nothing =)
}

function appendComment(p, token) {
    p._appendCommentNode(token, p.openElements.currentTmplContent || p.openElements.current);
}

function appendCommentToRootHtmlElement(p, token) {
    p._appendCommentNode(token, p.openElements.items[0]);
}

function appendCommentToDocument(p, token) {
    p._appendCommentNode(token, p.document);
}

function insertCharacters(p, token) {
    p._insertCharacters(token);
}

function stopParsing(p) {
    p.stopped = true;
}

//12.2.5.4.1 The "initial" insertion mode
//------------------------------------------------------------------
function doctypeInInitialMode(p, token) {
    p._setDocumentType(token);

    if (token.forceQuirks || doctype.isQuirks(token.name, token.publicId, token.systemId))
        p.treeAdapter.setQuirksMode(p.document);

    p.insertionMode = BEFORE_HTML_MODE;
}

function tokenInInitialMode(p, token) {
    p.treeAdapter.setQuirksMode(p.document);
    p.insertionMode = BEFORE_HTML_MODE;
    p._processToken(token);
}


//12.2.5.4.2 The "before html" insertion mode
//------------------------------------------------------------------
function startTagBeforeHtml(p, token) {
    if (token.tagName === $.HTML) {
        p._insertElement(token, NS.HTML);
        p.insertionMode = BEFORE_HEAD_MODE;
    }

    else
        tokenBeforeHtml(p, token);
}

function endTagBeforeHtml(p, token) {
    var tn = token.tagName;

    if (tn === $.HTML || tn === $.HEAD || tn === $.BODY || tn === $.BR)
        tokenBeforeHtml(p, token);
}

function tokenBeforeHtml(p, token) {
    p._insertFakeRootElement();
    p.insertionMode = BEFORE_HEAD_MODE;
    p._processToken(token);
}


//12.2.5.4.3 The "before head" insertion mode
//------------------------------------------------------------------
function startTagBeforeHead(p, token) {
    var tn = token.tagName;

    if (tn === $.HTML)
        startTagInBody(p, token);

    else if (tn === $.HEAD) {
        p._insertElement(token, NS.HTML);
        p.headElement = p.openElements.current;
        p.insertionMode = IN_HEAD_MODE;
    }

    else
        tokenBeforeHead(p, token);
}

function endTagBeforeHead(p, token) {
    var tn = token.tagName;

    if (tn === $.HEAD || tn === $.BODY || tn === $.HTML || tn === $.BR)
        tokenBeforeHead(p, token);
}

function tokenBeforeHead(p, token) {
    p._processFakeStartTag($.HEAD);
    p._processToken(token);
}


//12.2.5.4.4 The "in head" insertion mode
//------------------------------------------------------------------
function startTagInHead(p, token) {
    var tn = token.tagName;

    if (tn === $.HTML)
        startTagInBody(p, token);

    else if (tn === $.BASE || tn === $.BASEFONT || tn === $.BGSOUND || tn === $.LINK || tn === $.META)
        p._appendElement(token, NS.HTML);

    else if (tn === $.TITLE)
        p._switchToTextParsing(token, Tokenizer.MODE.RCDATA);

    //NOTE: here we assume that we always act as an interactive user agent with enabled scripting, so we parse
    //<noscript> as a rawtext.
    else if (tn === $.NOSCRIPT || tn === $.NOFRAMES || tn === $.STYLE)
        p._switchToTextParsing(token, Tokenizer.MODE.RAWTEXT);

    else if (tn === $.SCRIPT)
        p._switchToTextParsing(token, Tokenizer.MODE.SCRIPT_DATA);

    else if (tn === $.TEMPLATE) {
        p._insertTemplate(token, NS.HTML);
        p.activeFormattingElements.insertMarker();
        p.framesetOk = false;
        p.insertionMode = IN_TEMPLATE_MODE;
        p._pushTmplInsertionMode(IN_TEMPLATE_MODE);
    }

    else if (tn !== $.HEAD)
        tokenInHead(p, token);
}

function endTagInHead(p, token) {
    var tn = token.tagName;

    if (tn === $.HEAD) {
        p.openElements.pop();
        p.insertionMode = AFTER_HEAD_MODE;
    }

    else if (tn === $.BODY || tn === $.BR || tn === $.HTML)
        tokenInHead(p, token);

    else if (tn === $.TEMPLATE && p.openElements.tmplCount > 0) {
        p.openElements.generateImpliedEndTags();
        p.openElements.popUntilTemplatePopped();
        p.activeFormattingElements.clearToLastMarker();
        p._popTmplInsertionMode();
        p._resetInsertionMode();
    }
}

function tokenInHead(p, token) {
    p._processFakeEndTag($.HEAD);
    p._processToken(token);
}


//12.2.5.4.6 The "after head" insertion mode
//------------------------------------------------------------------
function startTagAfterHead(p, token) {
    var tn = token.tagName;

    if (tn === $.HTML)
        startTagInBody(p, token);

    else if (tn === $.BODY) {
        p._insertElement(token, NS.HTML);
        p.framesetOk = false;
        p.insertionMode = IN_BODY_MODE;
    }

    else if (tn === $.FRAMESET) {
        p._insertElement(token, NS.HTML);
        p.insertionMode = IN_FRAMESET_MODE;
    }

    else if (tn === $.BASE || tn === $.BASEFONT || tn === $.BGSOUND || tn === $.LINK || tn === $.META ||
             tn === $.NOFRAMES || tn === $.SCRIPT || tn === $.STYLE || tn === $.TEMPLATE || tn === $.TITLE) {
        p.openElements.push(p.headElement);
        startTagInHead(p, token);
        p.openElements.remove(p.headElement);
    }

    else if (tn !== $.HEAD)
        tokenAfterHead(p, token);
}

function endTagAfterHead(p, token) {
    var tn = token.tagName;

    if (tn === $.BODY || tn === $.HTML || tn === $.BR)
        tokenAfterHead(p, token);

    else if (tn === $.TEMPLATE)
        endTagInHead(p, token);
}

function tokenAfterHead(p, token) {
    p._processFakeStartTag($.BODY);
    p.framesetOk = true;
    p._processToken(token);
}


//12.2.5.4.7 The "in body" insertion mode
//------------------------------------------------------------------
function whitespaceCharacterInBody(p, token) {
    p._reconstructActiveFormattingElements();
    p._insertCharacters(token);
}

function characterInBody(p, token) {
    p._reconstructActiveFormattingElements();
    p._insertCharacters(token);
    p.framesetOk = false;
}

function htmlStartTagInBody(p, token) {
    if (p.openElements.tmplCount === 0)
        p.treeAdapter.adoptAttributes(p.openElements.items[0], token.attrs);
}

function bodyStartTagInBody(p, token) {
    var bodyElement = p.openElements.tryPeekProperlyNestedBodyElement();

    if (bodyElement && p.openElements.tmplCount === 0) {
        p.framesetOk = false;
        p.treeAdapter.adoptAttributes(bodyElement, token.attrs);
    }
}

function framesetStartTagInBody(p, token) {
    var bodyElement = p.openElements.tryPeekProperlyNestedBodyElement();

    if (p.framesetOk && bodyElement) {
        p.treeAdapter.detachNode(bodyElement);
        p.openElements.popAllUpToHtmlElement();
        p._insertElement(token, NS.HTML);
        p.insertionMode = IN_FRAMESET_MODE;
    }
}

function addressStartTagInBody(p, token) {
    if (p.openElements.hasInButtonScope($.P))
        p._closePElement();

    p._insertElement(token, NS.HTML);
}

function numberedHeaderStartTagInBody(p, token) {
    if (p.openElements.hasInButtonScope($.P))
        p._closePElement();

    var tn = p.openElements.currentTagName;

    if (tn === $.H1 || tn === $.H2 || tn === $.H3 || tn === $.H4 || tn === $.H5 || tn === $.H6)
        p.openElements.pop();

    p._insertElement(token, NS.HTML);
}

function preStartTagInBody(p, token) {
    if (p.openElements.hasInButtonScope($.P))
        p._closePElement();

    p._insertElement(token, NS.HTML);
    //NOTE: If the next token is a U+000A LINE FEED (LF) character token, then ignore that token and move
    //on to the next one. (Newlines at the start of pre blocks are ignored as an authoring convenience.)
    p.skipNextNewLine = true;
    p.framesetOk = false;
}

function formStartTagInBody(p, token) {
    var inTemplate = p.openElements.tmplCount > 0;

    if (!p.formElement || inTemplate) {
        if (p.openElements.hasInButtonScope($.P))
            p._closePElement();

        p._insertElement(token, NS.HTML);

        if (!inTemplate)
            p.formElement = p.openElements.current;
    }
}

function listItemStartTagInBody(p, token) {
    p.framesetOk = false;

    for (var i = p.openElements.stackTop; i >= 0; i--) {
        var element = p.openElements.items[i],
            tn = p.treeAdapter.getTagName(element);

        if (token.tagName === $.LI && tn === $.LI ||
            (token.tagName === $.DD || token.tagName === $.DT) && (tn === $.DD || tn === $.DT)) {
            p._processFakeEndTag(tn);
            break;
        }

        if (tn !== $.ADDRESS && tn !== $.DIV && tn !== $.P && p._isSpecialElement(element))
            break;
    }

    if (p.openElements.hasInButtonScope($.P))
        p._closePElement();

    p._insertElement(token, NS.HTML);
}

function plaintextStartTagInBody(p, token) {
    if (p.openElements.hasInButtonScope($.P))
        p._closePElement();

    p._insertElement(token, NS.HTML);
    p.tokenizer.state = Tokenizer.MODE.PLAINTEXT;
}

function buttonStartTagInBody(p, token) {
    if (p.openElements.hasInScope($.BUTTON)) {
        p.openElements.generateImpliedEndTags();
        p.openElements.popUntilTagNamePopped($.BUTTON);
    }

    p._reconstructActiveFormattingElements();
    p._insertElement(token, NS.HTML);
    p.framesetOk = false;
}

function aStartTagInBody(p, token) {
    var activeElementEntry = p.activeFormattingElements.getElementEntryInScopeWithTagName($.A);

    if (activeElementEntry) {
        p._processFakeEndTag($.A);
        p.openElements.remove(activeElementEntry.element);
        p.activeFormattingElements.removeEntry(activeElementEntry);
    }

    p._reconstructActiveFormattingElements();
    p._insertElement(token, NS.HTML);
    p.activeFormattingElements.pushElement(p.openElements.current, token);
}

function bStartTagInBody(p, token) {
    p._reconstructActiveFormattingElements();
    p._insertElement(token, NS.HTML);
    p.activeFormattingElements.pushElement(p.openElements.current, token);
}

function nobrStartTagInBody(p, token) {
    p._reconstructActiveFormattingElements();

    if (p.openElements.hasInScope($.NOBR)) {
        p._processFakeEndTag($.NOBR);
        p._reconstructActiveFormattingElements();
    }

    p._insertElement(token, NS.HTML);
    p.activeFormattingElements.pushElement(p.openElements.current, token);
}

function appletStartTagInBody(p, token) {
    p._reconstructActiveFormattingElements();
    p._insertElement(token, NS.HTML);
    p.activeFormattingElements.insertMarker();
    p.framesetOk = false;
}

function tableStartTagInBody(p, token) {
    if (!p.treeAdapter.isQuirksMode(p.document) && p.openElements.hasInButtonScope($.P))
        p._closePElement();

    p._insertElement(token, NS.HTML);
    p.framesetOk = false;
    p.insertionMode = IN_TABLE_MODE;
}

function areaStartTagInBody(p, token) {
    p._reconstructActiveFormattingElements();
    p._appendElement(token, NS.HTML);
    p.framesetOk = false;
}

function inputStartTagInBody(p, token) {
    p._reconstructActiveFormattingElements();
    p._appendElement(token, NS.HTML);

    var inputType = Tokenizer.getTokenAttr(token, ATTRS.TYPE);

    if (!inputType || inputType.toLowerCase() !== HIDDEN_INPUT_TYPE)
        p.framesetOk = false;

}

function paramStartTagInBody(p, token) {
    p._appendElement(token, NS.HTML);
}

function hrStartTagInBody(p, token) {
    if (p.openElements.hasInButtonScope($.P))
        p._closePElement();

    p._appendElement(token, NS.HTML);
    p.framesetOk = false;
}

function imageStartTagInBody(p, token) {
    token.tagName = $.IMG;
    areaStartTagInBody(p, token);
}

function isindexStartTagInBody(p, token) {
    if (!p.formElement || p.openElements.tmplCount > 0) {
        p._processFakeStartTagWithAttrs($.FORM, getSearchableIndexFormAttrs(token));
        p._processFakeStartTag($.HR);
        p._processFakeStartTag($.LABEL);
        p.treeAdapter.insertText(p.openElements.current, getSearchableIndexLabelText(token));
        p._processFakeStartTagWithAttrs($.INPUT, getSearchableIndexInputAttrs(token));
        p._processFakeEndTag($.LABEL);
        p._processFakeStartTag($.HR);
        p._processFakeEndTag($.FORM);
    }
}

function textareaStartTagInBody(p, token) {
    p._insertElement(token, NS.HTML);
    //NOTE: If the next token is a U+000A LINE FEED (LF) character token, then ignore that token and move
    //on to the next one. (Newlines at the start of textarea elements are ignored as an authoring convenience.)
    p.skipNextNewLine = true;
    p.tokenizer.state = Tokenizer.MODE.RCDATA;
    p.originalInsertionMode = p.insertionMode;
    p.framesetOk = false;
    p.insertionMode = TEXT_MODE;
}

function xmpStartTagInBody(p, token) {
    if (p.openElements.hasInButtonScope($.P))
        p._closePElement();

    p._reconstructActiveFormattingElements();
    p.framesetOk = false;
    p._switchToTextParsing(token, Tokenizer.MODE.RAWTEXT);
}

function iframeStartTagInBody(p, token) {
    p.framesetOk = false;
    p._switchToTextParsing(token, Tokenizer.MODE.RAWTEXT);
}

//NOTE: here we assume that we always act as an user agent with enabled plugins, so we parse
//<noembed> as a rawtext.
function noembedStartTagInBody(p, token) {
    p._switchToTextParsing(token, Tokenizer.MODE.RAWTEXT);
}

function selectStartTagInBody(p, token) {
    p._reconstructActiveFormattingElements();
    p._insertElement(token, NS.HTML);
    p.framesetOk = false;

    if (p.insertionMode === IN_TABLE_MODE ||
        p.insertionMode === IN_CAPTION_MODE ||
        p.insertionMode === IN_TABLE_BODY_MODE ||
        p.insertionMode === IN_ROW_MODE ||
        p.insertionMode === IN_CELL_MODE)

        p.insertionMode = IN_SELECT_IN_TABLE_MODE;

    else
        p.insertionMode = IN_SELECT_MODE;
}

function optgroupStartTagInBody(p, token) {
    if (p.openElements.currentTagName === $.OPTION)
        p._processFakeEndTag($.OPTION);

    p._reconstructActiveFormattingElements();
    p._insertElement(token, NS.HTML);
}

function rbStartTagInBody(p, token) {
    if (p.openElements.hasInScope($.RUBY))
        p.openElements.generateImpliedEndTags();

    p._insertElement(token, NS.HTML);
}

function rtStartTagInBody(p, token) {
    if (p.openElements.hasInScope($.RUBY))
        p.openElements.generateImpliedEndTagsWithExclusion($.RTC);

    p._insertElement(token, NS.HTML);
}

function menuitemStartTagInBody(p, token) {
    p._appendElement(token, NS.HTML);
}

function mathStartTagInBody(p, token) {
    p._reconstructActiveFormattingElements();

    foreignContent.adjustTokenMathMLAttrs(token);
    foreignContent.adjustTokenXMLAttrs(token);

    if (token.selfClosing)
        p._appendElement(token, NS.MATHML);
    else
        p._insertElement(token, NS.MATHML);
}

function svgStartTagInBody(p, token) {
    p._reconstructActiveFormattingElements();

    foreignContent.adjustTokenSVGAttrs(token);
    foreignContent.adjustTokenXMLAttrs(token);

    if (token.selfClosing)
        p._appendElement(token, NS.SVG);
    else
        p._insertElement(token, NS.SVG);
}

function genericStartTagInBody(p, token) {
    p._reconstructActiveFormattingElements();
    p._insertElement(token, NS.HTML);
}

//OPTIMIZATION: Integer comparisons are low-cost, so we can use very fast tag name length filters here.
//It's faster than using dictionary.
function startTagInBody(p, token) {
    var tn = token.tagName;

    switch (tn.length) {
        case 1:
            if (tn === $.I || tn === $.S || tn === $.B || tn === $.U)
                bStartTagInBody(p, token);

            else if (tn === $.P)
                addressStartTagInBody(p, token);

            else if (tn === $.A)
                aStartTagInBody(p, token);

            else
                genericStartTagInBody(p, token);

            break;

        case 2:
            if (tn === $.DL || tn === $.OL || tn === $.UL)
                addressStartTagInBody(p, token);

            else if (tn === $.H1 || tn === $.H2 || tn === $.H3 || tn === $.H4 || tn === $.H5 || tn === $.H6)
                numberedHeaderStartTagInBody(p, token);

            else if (tn === $.LI || tn === $.DD || tn === $.DT)
                listItemStartTagInBody(p, token);

            else if (tn === $.EM || tn === $.TT)
                bStartTagInBody(p, token);

            else if (tn === $.BR)
                areaStartTagInBody(p, token);

            else if (tn === $.HR)
                hrStartTagInBody(p, token);

            else if (tn === $.RB)
                rbStartTagInBody(p, token);

            else if (tn === $.RT || tn === $.RP)
                rtStartTagInBody(p, token);

            else if (tn !== $.TH && tn !== $.TD && tn !== $.TR)
                genericStartTagInBody(p, token);

            break;

        case 3:
            if (tn === $.DIV || tn === $.DIR || tn === $.NAV)
                addressStartTagInBody(p, token);

            else if (tn === $.PRE)
                preStartTagInBody(p, token);

            else if (tn === $.BIG)
                bStartTagInBody(p, token);

            else if (tn === $.IMG || tn === $.WBR)
                areaStartTagInBody(p, token);

            else if (tn === $.XMP)
                xmpStartTagInBody(p, token);

            else if (tn === $.SVG)
                svgStartTagInBody(p, token);

            else if (tn === $.RTC)
                rbStartTagInBody(p, token);

            else if (tn !== $.COL)
                genericStartTagInBody(p, token);

            break;

        case 4:
            if (tn === $.HTML)
                htmlStartTagInBody(p, token);

            else if (tn === $.BASE || tn === $.LINK || tn === $.META)
                startTagInHead(p, token);

            else if (tn === $.BODY)
                bodyStartTagInBody(p, token);

            else if (tn === $.MAIN || tn === $.MENU)
                addressStartTagInBody(p, token);

            else if (tn === $.FORM)
                formStartTagInBody(p, token);

            else if (tn === $.CODE || tn === $.FONT)
                bStartTagInBody(p, token);

            else if (tn === $.NOBR)
                nobrStartTagInBody(p, token);

            else if (tn === $.AREA)
                areaStartTagInBody(p, token);

            else if (tn === $.MATH)
                mathStartTagInBody(p, token);

            else if (tn !== $.HEAD)
                genericStartTagInBody(p, token);

            break;

        case 5:
            if (tn === $.STYLE || tn === $.TITLE)
                startTagInHead(p, token);

            else if (tn === $.ASIDE)
                addressStartTagInBody(p, token);

            else if (tn === $.SMALL)
                bStartTagInBody(p, token);

            else if (tn === $.TABLE)
                tableStartTagInBody(p, token);

            else if (tn === $.EMBED)
                areaStartTagInBody(p, token);

            else if (tn === $.INPUT)
                inputStartTagInBody(p, token);

            else if (tn === $.PARAM || tn === $.TRACK)
                paramStartTagInBody(p, token);

            else if (tn === $.IMAGE)
                imageStartTagInBody(p, token);

            else if (tn !== $.FRAME && tn !== $.TBODY && tn !== $.TFOOT && tn !== $.THEAD)
                genericStartTagInBody(p, token);

            break;

        case 6:
            if (tn === $.SCRIPT)
                startTagInHead(p, token);

            else if (tn === $.CENTER || tn === $.FIGURE || tn === $.FOOTER || tn === $.HEADER || tn === $.HGROUP)
                addressStartTagInBody(p, token);

            else if (tn === $.BUTTON)
                buttonStartTagInBody(p, token);

            else if (tn === $.STRIKE || tn === $.STRONG)
                bStartTagInBody(p, token);

            else if (tn === $.APPLET || tn === $.OBJECT)
                appletStartTagInBody(p, token);

            else if (tn === $.KEYGEN)
                areaStartTagInBody(p, token);

            else if (tn === $.SOURCE)
                paramStartTagInBody(p, token);

            else if (tn === $.IFRAME)
                iframeStartTagInBody(p, token);

            else if (tn === $.SELECT)
                selectStartTagInBody(p, token);

            else if (tn === $.OPTION)
                optgroupStartTagInBody(p, token);

            else
                genericStartTagInBody(p, token);

            break;

        case 7:
            if (tn === $.BGSOUND)
                startTagInHead(p, token);

            else if (tn === $.DETAILS || tn === $.ADDRESS || tn === $.ARTICLE || tn === $.SECTION || tn === $.SUMMARY)
                addressStartTagInBody(p, token);

            else if (tn === $.LISTING)
                preStartTagInBody(p, token);

            else if (tn === $.MARQUEE)
                appletStartTagInBody(p, token);

            else if (tn === $.ISINDEX)
                isindexStartTagInBody(p, token);

            else if (tn === $.NOEMBED)
                noembedStartTagInBody(p, token);

            else if (tn !== $.CAPTION)
                genericStartTagInBody(p, token);

            break;

        case 8:
            if (tn === $.BASEFONT || tn === $.MENUITEM)
                menuitemStartTagInBody(p, token);

            else if (tn === $.FRAMESET)
                framesetStartTagInBody(p, token);

            else if (tn === $.FIELDSET)
                addressStartTagInBody(p, token);

            else if (tn === $.TEXTAREA)
                textareaStartTagInBody(p, token);

            else if (tn === $.TEMPLATE)
                startTagInHead(p, token);

            else if (tn === $.NOSCRIPT)
                noembedStartTagInBody(p, token);

            else if (tn === $.OPTGROUP)
                optgroupStartTagInBody(p, token);

            else if (tn !== $.COLGROUP)
                genericStartTagInBody(p, token);

            break;

        case 9:
            if (tn === $.PLAINTEXT)
                plaintextStartTagInBody(p, token);

            else
                genericStartTagInBody(p, token);

            break;

        case 10:
            if (tn === $.BLOCKQUOTE || tn === $.FIGCAPTION)
                addressStartTagInBody(p, token);

            else
                genericStartTagInBody(p, token);

            break;

        default:
            genericStartTagInBody(p, token);
    }
}

function bodyEndTagInBody(p, token) {
    if (p.openElements.hasInScope($.BODY))
        p.insertionMode = AFTER_BODY_MODE;

    else
        token.ignored = true;
}

function htmlEndTagInBody(p, token) {
    var fakeToken = p._processFakeEndTag($.BODY);

    if (!fakeToken.ignored)
        p._processToken(token);
}

function addressEndTagInBody(p, token) {
    var tn = token.tagName;

    if (p.openElements.hasInScope(tn)) {
        p.openElements.generateImpliedEndTags();
        p.openElements.popUntilTagNamePopped(tn);
    }
}

function formEndTagInBody(p) {
    var inTemplate = p.openElements.tmplCount > 0,
        formElement = p.formElement;

    if (!inTemplate)
        p.formElement = null;

    if ((formElement || inTemplate) && p.openElements.hasInScope($.FORM)) {
        p.openElements.generateImpliedEndTags();

        if (inTemplate)
            p.openElements.popUntilTagNamePopped($.FORM);

        else
            p.openElements.remove(formElement);
    }
}

function pEndTagInBody(p, token) {
    if (p.openElements.hasInButtonScope($.P)) {
        p.openElements.generateImpliedEndTagsWithExclusion($.P);
        p.openElements.popUntilTagNamePopped($.P);
    }

    else {
        p._processFakeStartTag($.P);
        p._processToken(token);
    }
}

function liEndTagInBody(p) {
    if (p.openElements.hasInListItemScope($.LI)) {
        p.openElements.generateImpliedEndTagsWithExclusion($.LI);
        p.openElements.popUntilTagNamePopped($.LI);
    }
}

function ddEndTagInBody(p, token) {
    var tn = token.tagName;

    if (p.openElements.hasInScope(tn)) {
        p.openElements.generateImpliedEndTagsWithExclusion(tn);
        p.openElements.popUntilTagNamePopped(tn);
    }
}

function numberedHeaderEndTagInBody(p) {
    if (p.openElements.hasNumberedHeaderInScope()) {
        p.openElements.generateImpliedEndTags();
        p.openElements.popUntilNumberedHeaderPopped();
    }
}

function appletEndTagInBody(p, token) {
    var tn = token.tagName;

    if (p.openElements.hasInScope(tn)) {
        p.openElements.generateImpliedEndTags();
        p.openElements.popUntilTagNamePopped(tn);
        p.activeFormattingElements.clearToLastMarker();
    }
}

function brEndTagInBody(p) {
    p._processFakeStartTag($.BR);
}

function genericEndTagInBody(p, token) {
    var tn = token.tagName;

    for (var i = p.openElements.stackTop; i > 0; i--) {
        var element = p.openElements.items[i];

        if (p.treeAdapter.getTagName(element) === tn) {
            p.openElements.generateImpliedEndTagsWithExclusion(tn);
            p.openElements.popUntilElementPopped(element);
            break;
        }

        if (p._isSpecialElement(element))
            break;
    }
}

//OPTIMIZATION: Integer comparisons are low-cost, so we can use very fast tag name length filters here.
//It's faster than using dictionary.
function endTagInBody(p, token) {
    var tn = token.tagName;

    switch (tn.length) {
        case 1:
            if (tn === $.A || tn === $.B || tn === $.I || tn === $.S || tn === $.U)
                callAdoptionAgency(p, token);

            else if (tn === $.P)
                pEndTagInBody(p, token);

            else
                genericEndTagInBody(p, token);

            break;

        case 2:
            if (tn === $.DL || tn === $.UL || tn === $.OL)
                addressEndTagInBody(p, token);

            else if (tn === $.LI)
                liEndTagInBody(p, token);

            else if (tn === $.DD || tn === $.DT)
                ddEndTagInBody(p, token);

            else if (tn === $.H1 || tn === $.H2 || tn === $.H3 || tn === $.H4 || tn === $.H5 || tn === $.H6)
                numberedHeaderEndTagInBody(p, token);

            else if (tn === $.BR)
                brEndTagInBody(p, token);

            else if (tn === $.EM || tn === $.TT)
                callAdoptionAgency(p, token);

            else
                genericEndTagInBody(p, token);

            break;

        case 3:
            if (tn === $.BIG)
                callAdoptionAgency(p, token);

            else if (tn === $.DIR || tn === $.DIV || tn === $.NAV)
                addressEndTagInBody(p, token);

            else
                genericEndTagInBody(p, token);

            break;

        case 4:
            if (tn === $.BODY)
                bodyEndTagInBody(p, token);

            else if (tn === $.HTML)
                htmlEndTagInBody(p, token);

            else if (tn === $.FORM)
                formEndTagInBody(p, token);

            else if (tn === $.CODE || tn === $.FONT || tn === $.NOBR)
                callAdoptionAgency(p, token);

            else if (tn === $.MAIN || tn === $.MENU)
                addressEndTagInBody(p, token);

            else
                genericEndTagInBody(p, token);

            break;

        case 5:
            if (tn === $.ASIDE)
                addressEndTagInBody(p, token);

            else if (tn === $.SMALL)
                callAdoptionAgency(p, token);

            else
                genericEndTagInBody(p, token);

            break;

        case 6:
            if (tn === $.CENTER || tn === $.FIGURE || tn === $.FOOTER || tn === $.HEADER || tn === $.HGROUP)
                addressEndTagInBody(p, token);

            else if (tn === $.APPLET || tn === $.OBJECT)
                appletEndTagInBody(p, token);

            else if (tn === $.STRIKE || tn === $.STRONG)
                callAdoptionAgency(p, token);

            else
                genericEndTagInBody(p, token);

            break;

        case 7:
            if (tn === $.ADDRESS || tn === $.ARTICLE || tn === $.DETAILS || tn === $.SECTION || tn === $.SUMMARY)
                addressEndTagInBody(p, token);

            else if (tn === $.MARQUEE)
                appletEndTagInBody(p, token);

            else
                genericEndTagInBody(p, token);

            break;

        case 8:
            if (tn === $.FIELDSET)
                addressEndTagInBody(p, token);

            else if (tn === $.TEMPLATE)
                endTagInHead(p, token);

            else
                genericEndTagInBody(p, token);

            break;

        case 10:
            if (tn === $.BLOCKQUOTE || tn === $.FIGCAPTION)
                addressEndTagInBody(p, token);

            else
                genericEndTagInBody(p, token);

            break;

        default :
            genericEndTagInBody(p, token);
    }
}

function eofInBody(p, token) {
    if (p.tmplInsertionModeStackTop > -1)
        eofInTemplate(p, token);

    else
        p.stopped = true;
}

//12.2.5.4.8 The "text" insertion mode
//------------------------------------------------------------------
function endTagInText(p, token) {
    if (token.tagName === $.SCRIPT)
        p.pendingScript = p.openElements.current;

    p.openElements.pop();
    p.insertionMode = p.originalInsertionMode;
}


function eofInText(p, token) {
    p.openElements.pop();
    p.insertionMode = p.originalInsertionMode;
    p._processToken(token);
}


//12.2.5.4.9 The "in table" insertion mode
//------------------------------------------------------------------
function characterInTable(p, token) {
    var curTn = p.openElements.currentTagName;

    if (curTn === $.TABLE || curTn === $.TBODY || curTn === $.TFOOT || curTn === $.THEAD || curTn === $.TR) {
        p.pendingCharacterTokens = [];
        p.hasNonWhitespacePendingCharacterToken = false;
        p.originalInsertionMode = p.insertionMode;
        p.insertionMode = IN_TABLE_TEXT_MODE;
        p._processToken(token);
    }

    else
        tokenInTable(p, token);
}

function captionStartTagInTable(p, token) {
    p.openElements.clearBackToTableContext();
    p.activeFormattingElements.insertMarker();
    p._insertElement(token, NS.HTML);
    p.insertionMode = IN_CAPTION_MODE;
}

function colgroupStartTagInTable(p, token) {
    p.openElements.clearBackToTableContext();
    p._insertElement(token, NS.HTML);
    p.insertionMode = IN_COLUMN_GROUP_MODE;
}

function colStartTagInTable(p, token) {
    p._processFakeStartTag($.COLGROUP);
    p._processToken(token);
}

function tbodyStartTagInTable(p, token) {
    p.openElements.clearBackToTableContext();
    p._insertElement(token, NS.HTML);
    p.insertionMode = IN_TABLE_BODY_MODE;
}

function tdStartTagInTable(p, token) {
    p._processFakeStartTag($.TBODY);
    p._processToken(token);
}

function tableStartTagInTable(p, token) {
    var fakeToken = p._processFakeEndTag($.TABLE);

    //NOTE: The fake end tag token here can only be ignored in the fragment case.
    if (!fakeToken.ignored)
        p._processToken(token);
}

function inputStartTagInTable(p, token) {
    var inputType = Tokenizer.getTokenAttr(token, ATTRS.TYPE);

    if (inputType && inputType.toLowerCase() === HIDDEN_INPUT_TYPE)
        p._appendElement(token, NS.HTML);

    else
        tokenInTable(p, token);
}

function formStartTagInTable(p, token) {
    if (!p.formElement && p.openElements.tmplCount === 0) {
        p._insertElement(token, NS.HTML);
        p.formElement = p.openElements.current;
        p.openElements.pop();
    }
}

function startTagInTable(p, token) {
    var tn = token.tagName;

    switch (tn.length) {
        case 2:
            if (tn === $.TD || tn === $.TH || tn === $.TR)
                tdStartTagInTable(p, token);

            else
                tokenInTable(p, token);

            break;

        case 3:
            if (tn === $.COL)
                colStartTagInTable(p, token);

            else
                tokenInTable(p, token);

            break;

        case 4:
            if (tn === $.FORM)
                formStartTagInTable(p, token);

            else
                tokenInTable(p, token);

            break;

        case 5:
            if (tn === $.TABLE)
                tableStartTagInTable(p, token);

            else if (tn === $.STYLE)
                startTagInHead(p, token);

            else if (tn === $.TBODY || tn === $.TFOOT || tn === $.THEAD)
                tbodyStartTagInTable(p, token);

            else if (tn === $.INPUT)
                inputStartTagInTable(p, token);

            else
                tokenInTable(p, token);

            break;

        case 6:
            if (tn === $.SCRIPT)
                startTagInHead(p, token);

            else
                tokenInTable(p, token);

            break;

        case 7:
            if (tn === $.CAPTION)
                captionStartTagInTable(p, token);

            else
                tokenInTable(p, token);

            break;

        case 8:
            if (tn === $.COLGROUP)
                colgroupStartTagInTable(p, token);

            else if (tn === $.TEMPLATE)
                startTagInHead(p, token);

            else
                tokenInTable(p, token);

            break;

        default:
            tokenInTable(p, token);
    }

}

function endTagInTable(p, token) {
    var tn = token.tagName;

    if (tn === $.TABLE) {
        if (p.openElements.hasInTableScope($.TABLE)) {
            p.openElements.popUntilTagNamePopped($.TABLE);
            p._resetInsertionMode();
        }

        else
            token.ignored = true;
    }

    else if (tn === $.TEMPLATE)
        endTagInHead(p, token);

    else if (tn !== $.BODY && tn !== $.CAPTION && tn !== $.COL && tn !== $.COLGROUP && tn !== $.HTML &&
             tn !== $.TBODY && tn !== $.TD && tn !== $.TFOOT && tn !== $.TH && tn !== $.THEAD && tn !== $.TR)
        tokenInTable(p, token);
}

function tokenInTable(p, token) {
    var savedFosterParentingState = p.fosterParentingEnabled;

    p.fosterParentingEnabled = true;
    p._processTokenInBodyMode(token);
    p.fosterParentingEnabled = savedFosterParentingState;
}


//12.2.5.4.10 The "in table text" insertion mode
//------------------------------------------------------------------
function whitespaceCharacterInTableText(p, token) {
    p.pendingCharacterTokens.push(token);
}

function characterInTableText(p, token) {
    p.pendingCharacterTokens.push(token);
    p.hasNonWhitespacePendingCharacterToken = true;
}

function tokenInTableText(p, token) {
    var i = 0;

    if (p.hasNonWhitespacePendingCharacterToken) {
        for (; i < p.pendingCharacterTokens.length; i++)
            tokenInTable(p, p.pendingCharacterTokens[i]);
    }

    else {
        for (; i < p.pendingCharacterTokens.length; i++)
            p._insertCharacters(p.pendingCharacterTokens[i]);
    }

    p.insertionMode = p.originalInsertionMode;
    p._processToken(token);
}


//12.2.5.4.11 The "in caption" insertion mode
//------------------------------------------------------------------
function startTagInCaption(p, token) {
    var tn = token.tagName;

    if (tn === $.CAPTION || tn === $.COL || tn === $.COLGROUP || tn === $.TBODY ||
        tn === $.TD || tn === $.TFOOT || tn === $.TH || tn === $.THEAD || tn === $.TR) {
        var fakeToken = p._processFakeEndTag($.CAPTION);

        //NOTE: The fake end tag token here can only be ignored in the fragment case.
        if (!fakeToken.ignored)
            p._processToken(token);
    }

    else
        startTagInBody(p, token);
}

function endTagInCaption(p, token) {
    var tn = token.tagName;

    if (tn === $.CAPTION) {
        if (p.openElements.hasInTableScope($.CAPTION)) {
            p.openElements.generateImpliedEndTags();
            p.openElements.popUntilTagNamePopped($.CAPTION);
            p.activeFormattingElements.clearToLastMarker();
            p.insertionMode = IN_TABLE_MODE;
        }

        else
            token.ignored = true;
    }

    else if (tn === $.TABLE) {
        var fakeToken = p._processFakeEndTag($.CAPTION);

        //NOTE: The fake end tag token here can only be ignored in the fragment case.
        if (!fakeToken.ignored)
            p._processToken(token);
    }

    else if (tn !== $.BODY && tn !== $.COL && tn !== $.COLGROUP && tn !== $.HTML && tn !== $.TBODY &&
             tn !== $.TD && tn !== $.TFOOT && tn !== $.TH && tn !== $.THEAD && tn !== $.TR)
        endTagInBody(p, token);
}


//12.2.5.4.12 The "in column group" insertion mode
//------------------------------------------------------------------
function startTagInColumnGroup(p, token) {
    var tn = token.tagName;

    if (tn === $.HTML)
        startTagInBody(p, token);

    else if (tn === $.COL)
        p._appendElement(token, NS.HTML);

    else if (tn === $.TEMPLATE)
        startTagInHead(p, token);

    else
        tokenInColumnGroup(p, token);
}

function endTagInColumnGroup(p, token) {
    var tn = token.tagName;

    if (tn === $.COLGROUP) {
        if (p.openElements.currentTagName !== $.COLGROUP)
            token.ignored = true;

        else {
            p.openElements.pop();
            p.insertionMode = IN_TABLE_MODE;
        }
    }

    else if (tn === $.TEMPLATE)
        endTagInHead(p, token);

    else if (tn !== $.COL)
        tokenInColumnGroup(p, token);
}

function tokenInColumnGroup(p, token) {
    var fakeToken = p._processFakeEndTag($.COLGROUP);

    //NOTE: The fake end tag token here can only be ignored in the fragment case.
    if (!fakeToken.ignored)
        p._processToken(token);
}

//12.2.5.4.13 The "in table body" insertion mode
//------------------------------------------------------------------
function startTagInTableBody(p, token) {
    var tn = token.tagName;

    if (tn === $.TR) {
        p.openElements.clearBackToTableBodyContext();
        p._insertElement(token, NS.HTML);
        p.insertionMode = IN_ROW_MODE;
    }

    else if (tn === $.TH || tn === $.TD) {
        p._processFakeStartTag($.TR);
        p._processToken(token);
    }

    else if (tn === $.CAPTION || tn === $.COL || tn === $.COLGROUP ||
             tn === $.TBODY || tn === $.TFOOT || tn === $.THEAD) {

        if (p.openElements.hasTableBodyContextInTableScope()) {
            p.openElements.clearBackToTableBodyContext();
            p._processFakeEndTag(p.openElements.currentTagName);
            p._processToken(token);
        }
    }

    else
        startTagInTable(p, token);
}

function endTagInTableBody(p, token) {
    var tn = token.tagName;

    if (tn === $.TBODY || tn === $.TFOOT || tn === $.THEAD) {
        if (p.openElements.hasInTableScope(tn)) {
            p.openElements.clearBackToTableBodyContext();
            p.openElements.pop();
            p.insertionMode = IN_TABLE_MODE;
        }
    }

    else if (tn === $.TABLE) {
        if (p.openElements.hasTableBodyContextInTableScope()) {
            p.openElements.clearBackToTableBodyContext();
            p._processFakeEndTag(p.openElements.currentTagName);
            p._processToken(token);
        }
    }

    else if (tn !== $.BODY && tn !== $.CAPTION && tn !== $.COL && tn !== $.COLGROUP ||
             tn !== $.HTML && tn !== $.TD && tn !== $.TH && tn !== $.TR)
        endTagInTable(p, token);
}

//12.2.5.4.14 The "in row" insertion mode
//------------------------------------------------------------------
function startTagInRow(p, token) {
    var tn = token.tagName;

    if (tn === $.TH || tn === $.TD) {
        p.openElements.clearBackToTableRowContext();
        p._insertElement(token, NS.HTML);
        p.insertionMode = IN_CELL_MODE;
        p.activeFormattingElements.insertMarker();
    }

    else if (tn === $.CAPTION || tn === $.COL || tn === $.COLGROUP || tn === $.TBODY ||
             tn === $.TFOOT || tn === $.THEAD || tn === $.TR) {
        var fakeToken = p._processFakeEndTag($.TR);

        //NOTE: The fake end tag token here can only be ignored in the fragment case.
        if (!fakeToken.ignored)
            p._processToken(token);
    }

    else
        startTagInTable(p, token);
}

function endTagInRow(p, token) {
    var tn = token.tagName;

    if (tn === $.TR) {
        if (p.openElements.hasInTableScope($.TR)) {
            p.openElements.clearBackToTableRowContext();
            p.openElements.pop();
            p.insertionMode = IN_TABLE_BODY_MODE;
        }

        else
            token.ignored = true;
    }

    else if (tn === $.TABLE) {
        var fakeToken = p._processFakeEndTag($.TR);

        //NOTE: The fake end tag token here can only be ignored in the fragment case.
        if (!fakeToken.ignored)
            p._processToken(token);
    }

    else if (tn === $.TBODY || tn === $.TFOOT || tn === $.THEAD) {
        if (p.openElements.hasInTableScope(tn)) {
            p._processFakeEndTag($.TR);
            p._processToken(token);
        }
    }

    else if (tn !== $.BODY && tn !== $.CAPTION && tn !== $.COL && tn !== $.COLGROUP ||
             tn !== $.HTML && tn !== $.TD && tn !== $.TH)
        endTagInTable(p, token);
}


//12.2.5.4.15 The "in cell" insertion mode
//------------------------------------------------------------------
function startTagInCell(p, token) {
    var tn = token.tagName;

    if (tn === $.CAPTION || tn === $.COL || tn === $.COLGROUP || tn === $.TBODY ||
        tn === $.TD || tn === $.TFOOT || tn === $.TH || tn === $.THEAD || tn === $.TR) {

        if (p.openElements.hasInTableScope($.TD) || p.openElements.hasInTableScope($.TH)) {
            p._closeTableCell();
            p._processToken(token);
        }
    }

    else
        startTagInBody(p, token);
}

function endTagInCell(p, token) {
    var tn = token.tagName;

    if (tn === $.TD || tn === $.TH) {
        if (p.openElements.hasInTableScope(tn)) {
            p.openElements.generateImpliedEndTags();
            p.openElements.popUntilTagNamePopped(tn);
            p.activeFormattingElements.clearToLastMarker();
            p.insertionMode = IN_ROW_MODE;
        }
    }

    else if (tn === $.TABLE || tn === $.TBODY || tn === $.TFOOT || tn === $.THEAD || tn === $.TR) {
        if (p.openElements.hasInTableScope(tn)) {
            p._closeTableCell();
            p._processToken(token);
        }
    }

    else if (tn !== $.BODY && tn !== $.CAPTION && tn !== $.COL && tn !== $.COLGROUP && tn !== $.HTML)
        endTagInBody(p, token);
}

//12.2.5.4.16 The "in select" insertion mode
//------------------------------------------------------------------
function startTagInSelect(p, token) {
    var tn = token.tagName;

    if (tn === $.HTML)
        startTagInBody(p, token);

    else if (tn === $.OPTION) {
        if (p.openElements.currentTagName === $.OPTION)
            p._processFakeEndTag($.OPTION);

        p._insertElement(token, NS.HTML);
    }

    else if (tn === $.OPTGROUP) {
        if (p.openElements.currentTagName === $.OPTION)
            p._processFakeEndTag($.OPTION);

        if (p.openElements.currentTagName === $.OPTGROUP)
            p._processFakeEndTag($.OPTGROUP);

        p._insertElement(token, NS.HTML);
    }

    else if (tn === $.SELECT)
        p._processFakeEndTag($.SELECT);

    else if (tn === $.INPUT || tn === $.KEYGEN || tn === $.TEXTAREA) {
        if (p.openElements.hasInSelectScope($.SELECT)) {
            p._processFakeEndTag($.SELECT);
            p._processToken(token);
        }
    }

    else if (tn === $.SCRIPT || tn === $.TEMPLATE)
        startTagInHead(p, token);
}

function endTagInSelect(p, token) {
    var tn = token.tagName;

    if (tn === $.OPTGROUP) {
        var prevOpenElement = p.openElements.items[p.openElements.stackTop - 1],
            prevOpenElementTn = prevOpenElement && p.treeAdapter.getTagName(prevOpenElement);

        if (p.openElements.currentTagName === $.OPTION && prevOpenElementTn === $.OPTGROUP)
            p._processFakeEndTag($.OPTION);

        if (p.openElements.currentTagName === $.OPTGROUP)
            p.openElements.pop();
    }

    else if (tn === $.OPTION) {
        if (p.openElements.currentTagName === $.OPTION)
            p.openElements.pop();
    }

    else if (tn === $.SELECT && p.openElements.hasInSelectScope($.SELECT)) {
        p.openElements.popUntilTagNamePopped($.SELECT);
        p._resetInsertionMode();
    }

    else if (tn === $.TEMPLATE)
        endTagInHead(p, token);
}

//12.2.5.4.17 The "in select in table" insertion mode
//------------------------------------------------------------------
function startTagInSelectInTable(p, token) {
    var tn = token.tagName;

    if (tn === $.CAPTION || tn === $.TABLE || tn === $.TBODY || tn === $.TFOOT ||
        tn === $.THEAD || tn === $.TR || tn === $.TD || tn === $.TH) {
        p._processFakeEndTag($.SELECT);
        p._processToken(token);
    }

    else
        startTagInSelect(p, token);
}

function endTagInSelectInTable(p, token) {
    var tn = token.tagName;

    if (tn === $.CAPTION || tn === $.TABLE || tn === $.TBODY || tn === $.TFOOT ||
        tn === $.THEAD || tn === $.TR || tn === $.TD || tn === $.TH) {
        if (p.openElements.hasInTableScope(tn)) {
            p._processFakeEndTag($.SELECT);
            p._processToken(token);
        }
    }

    else
        endTagInSelect(p, token);
}

//12.2.5.4.18 The "in template" insertion mode
//------------------------------------------------------------------
function startTagInTemplate(p, token) {
    var tn = token.tagName;

    if (tn === $.BASE || tn === $.BASEFONT || tn === $.BGSOUND || tn === $.LINK || tn === $.META ||
        tn === $.NOFRAMES || tn === $.SCRIPT || tn === $.STYLE || tn === $.TEMPLATE || tn === $.TITLE)
        startTagInHead(p, token);

    else {
        var newInsertionMode = TEMPLATE_INSERTION_MODE_SWITCH_MAP[tn] || IN_BODY_MODE;

        p._popTmplInsertionMode();
        p._pushTmplInsertionMode(newInsertionMode);
        p.insertionMode = newInsertionMode;
        p._processToken(token);
    }
}

function endTagInTemplate(p, token) {
    if (token.tagName === $.TEMPLATE)
        endTagInHead(p, token);
}

function eofInTemplate(p, token) {
    if (p.openElements.tmplCount > 0) {
        p.openElements.popUntilTemplatePopped();
        p.activeFormattingElements.clearToLastMarker();
        p._popTmplInsertionMode();
        p._resetInsertionMode();
        p._processToken(token);
    }

    else
        p.stopped = true;
}


//12.2.5.4.19 The "after body" insertion mode
//------------------------------------------------------------------
function startTagAfterBody(p, token) {
    if (token.tagName === $.HTML)
        startTagInBody(p, token);

    else
        tokenAfterBody(p, token);
}

function endTagAfterBody(p, token) {
    if (token.tagName === $.HTML) {
        if (!p.fragmentContext)
            p.insertionMode = AFTER_AFTER_BODY_MODE;
    }

    else
        tokenAfterBody(p, token);
}

function tokenAfterBody(p, token) {
    p.insertionMode = IN_BODY_MODE;
    p._processToken(token);
}

//12.2.5.4.20 The "in frameset" insertion mode
//------------------------------------------------------------------
function startTagInFrameset(p, token) {
    var tn = token.tagName;

    if (tn === $.HTML)
        startTagInBody(p, token);

    else if (tn === $.FRAMESET)
        p._insertElement(token, NS.HTML);

    else if (tn === $.FRAME)
        p._appendElement(token, NS.HTML);

    else if (tn === $.NOFRAMES)
        startTagInHead(p, token);
}

function endTagInFrameset(p, token) {
    if (token.tagName === $.FRAMESET && !p.openElements.isRootHtmlElementCurrent()) {
        p.openElements.pop();

        if (!p.fragmentContext && p.openElements.currentTagName !== $.FRAMESET)
            p.insertionMode = AFTER_FRAMESET_MODE;
    }
}

//12.2.5.4.21 The "after frameset" insertion mode
//------------------------------------------------------------------
function startTagAfterFrameset(p, token) {
    var tn = token.tagName;

    if (tn === $.HTML)
        startTagInBody(p, token);

    else if (tn === $.NOFRAMES)
        startTagInHead(p, token);
}

function endTagAfterFrameset(p, token) {
    if (token.tagName === $.HTML)
        p.insertionMode = AFTER_AFTER_FRAMESET_MODE;
}

//12.2.5.4.22 The "after after body" insertion mode
//------------------------------------------------------------------
function startTagAfterAfterBody(p, token) {
    if (token.tagName === $.HTML)
        startTagInBody(p, token);

    else
        tokenAfterAfterBody(p, token);
}

function tokenAfterAfterBody(p, token) {
    p.insertionMode = IN_BODY_MODE;
    p._processToken(token);
}

//12.2.5.4.23 The "after after frameset" insertion mode
//------------------------------------------------------------------
function startTagAfterAfterFrameset(p, token) {
    var tn = token.tagName;

    if (tn === $.HTML)
        startTagInBody(p, token);

    else if (tn === $.NOFRAMES)
        startTagInHead(p, token);
}


//12.2.5.5 The rules for parsing tokens in foreign content
//------------------------------------------------------------------
function nullCharacterInForeignContent(p, token) {
    token.chars = UNICODE.REPLACEMENT_CHARACTER;
    p._insertCharacters(token);
}

function characterInForeignContent(p, token) {
    p._insertCharacters(token);
    p.framesetOk = false;
}

function startTagInForeignContent(p, token) {
    if (foreignContent.causesExit(token) && !p.fragmentContext) {

        while (p.treeAdapter.getNamespaceURI(p.openElements.current) !== NS.HTML &&
               !p._isMathMLTextIntegrationPoint(p.openElements.current) &&
               !p._isHtmlIntegrationPoint(p.openElements.current))

            p.openElements.pop();

        p._processToken(token);
    }

    else {
        var current = p._getAdjustedCurrentElement(),
            currentNs = p.treeAdapter.getNamespaceURI(current);

        if (currentNs === NS.MATHML)
            foreignContent.adjustTokenMathMLAttrs(token);

        else if (currentNs === NS.SVG) {
            foreignContent.adjustTokenSVGTagName(token);
            foreignContent.adjustTokenSVGAttrs(token);
        }

        foreignContent.adjustTokenXMLAttrs(token);

        if (token.selfClosing)
            p._appendElement(token, currentNs);
        else
            p._insertElement(token, currentNs);
    }
}

function endTagInForeignContent(p, token) {
    for (var i = p.openElements.stackTop; i > 0; i--) {
        var element = p.openElements.items[i];

        if (p.treeAdapter.getNamespaceURI(element) === NS.HTML) {
            p._processToken(token);
            break;
        }

        if (p.treeAdapter.getTagName(element).toLowerCase() === token.tagName) {
            p.openElements.popUntilElementPopped(element);
            break;
        }
    }
}

},{"../common/doctype":1,"../common/foreign_content":2,"../common/html":3,"../common/merge_options":4,"../common/unicode":5,"../location_info/parser_mixin":7,"../tokenizer":18,"../tree_adapters/default":21,"./formatting_element_list":9,"./open_element_stack":11}],11:[function(require,module,exports){
'use strict';

var HTML = require('../common/html');

//Aliases
var $ = HTML.TAG_NAMES,
    NS = HTML.NAMESPACES;

//Element utils

//OPTIMIZATION: Integer comparisons are low-cost, so we can use very fast tag name length filters here.
//It's faster than using dictionary.
function isImpliedEndTagRequired(tn) {
    switch (tn.length) {
        case 1:
            return tn === $.P;

        case 2:
            return tn === $.RB || tn === $.RP || tn === $.RT || tn === $.DD || tn === $.DT || tn === $.LI;

        case 3:
            return tn === $.RTC;

        case 6:
            return tn === $.OPTION;

        case 8:
            return tn === $.OPTGROUP;
    }

    return false;
}

function isScopingElement(tn, ns) {
    switch (tn.length) {
        case 2:
            if (tn === $.TD || tn === $.TH)
                return ns === NS.HTML;

            else if (tn === $.MI || tn === $.MO || tn === $.MN || tn === $.MS)
                return ns === NS.MATHML;

            break;

        case 4:
            if (tn === $.HTML)
                return ns === NS.HTML;

            else if (tn === $.DESC)
                return ns === NS.SVG;

            break;

        case 5:
            if (tn === $.TABLE)
                return ns === NS.HTML;

            else if (tn === $.MTEXT)
                return ns === NS.MATHML;

            else if (tn === $.TITLE)
                return ns === NS.SVG;

            break;

        case 6:
            return (tn === $.APPLET || tn === $.OBJECT) && ns === NS.HTML;

        case 7:
            return (tn === $.CAPTION || tn === $.MARQUEE) && ns === NS.HTML;

        case 8:
            return tn === $.TEMPLATE && ns === NS.HTML;

        case 13:
            return tn === $.FOREIGN_OBJECT && ns === NS.SVG;

        case 14:
            return tn === $.ANNOTATION_XML && ns === NS.MATHML;
    }

    return false;
}

//Stack of open elements
var OpenElementStack = module.exports = function (document, treeAdapter) {
    this.stackTop = -1;
    this.items = [];
    this.current = document;
    this.currentTagName = null;
    this.currentTmplContent = null;
    this.tmplCount = 0;
    this.treeAdapter = treeAdapter;
};

//Index of element
OpenElementStack.prototype._indexOf = function (element) {
    var idx = -1;

    for (var i = this.stackTop; i >= 0; i--) {
        if (this.items[i] === element) {
            idx = i;
            break;
        }
    }
    return idx;
};

//Update current element
OpenElementStack.prototype._isInTemplate = function () {
    return this.currentTagName === $.TEMPLATE && this.treeAdapter.getNamespaceURI(this.current) === NS.HTML;
};

OpenElementStack.prototype._updateCurrentElement = function () {
    this.current = this.items[this.stackTop];
    this.currentTagName = this.current && this.treeAdapter.getTagName(this.current);

    this.currentTmplContent = this._isInTemplate() ? this.treeAdapter.getTemplateContent(this.current) : null;
};

//Mutations
OpenElementStack.prototype.push = function (element) {
    this.items[++this.stackTop] = element;
    this._updateCurrentElement();

    if (this._isInTemplate())
        this.tmplCount++;

};

OpenElementStack.prototype.pop = function () {
    this.stackTop--;

    if (this.tmplCount > 0 && this._isInTemplate())
        this.tmplCount--;

    this._updateCurrentElement();
};

OpenElementStack.prototype.replace = function (oldElement, newElement) {
    var idx = this._indexOf(oldElement);

    this.items[idx] = newElement;

    if (idx === this.stackTop)
        this._updateCurrentElement();
};

OpenElementStack.prototype.insertAfter = function (referenceElement, newElement) {
    var insertionIdx = this._indexOf(referenceElement) + 1;

    this.items.splice(insertionIdx, 0, newElement);

    if (insertionIdx === ++this.stackTop)
        this._updateCurrentElement();
};

OpenElementStack.prototype.popUntilTagNamePopped = function (tagName) {
    while (this.stackTop > -1) {
        var tn = this.currentTagName;

        this.pop();

        if (tn === tagName)
            break;
    }
};

OpenElementStack.prototype.popUntilTemplatePopped = function () {
    while (this.stackTop > -1) {
        var tn = this.currentTagName,
            ns = this.treeAdapter.getNamespaceURI(this.current);

        this.pop();

        if (tn === $.TEMPLATE && ns === NS.HTML)
            break;
    }
};

OpenElementStack.prototype.popUntilElementPopped = function (element) {
    while (this.stackTop > -1) {
        var poppedElement = this.current;

        this.pop();

        if (poppedElement === element)
            break;
    }
};

OpenElementStack.prototype.popUntilNumberedHeaderPopped = function () {
    while (this.stackTop > -1) {
        var tn = this.currentTagName;

        this.pop();

        if (tn === $.H1 || tn === $.H2 || tn === $.H3 || tn === $.H4 || tn === $.H5 || tn === $.H6)
            break;
    }
};

OpenElementStack.prototype.popAllUpToHtmlElement = function () {
    //NOTE: here we assume that root <html> element is always first in the open element stack, so
    //we perform this fast stack clean up.
    this.stackTop = 0;
    this._updateCurrentElement();
};

OpenElementStack.prototype.clearBackToTableContext = function () {
    while (this.currentTagName !== $.TABLE && this.currentTagName !== $.TEMPLATE && this.currentTagName !== $.HTML)
        this.pop();
};

OpenElementStack.prototype.clearBackToTableBodyContext = function () {
    while (this.currentTagName !== $.TBODY &&
           this.currentTagName !== $.TFOOT &&
           this.currentTagName !== $.THEAD &&
           this.currentTagName !== $.TEMPLATE &&
           this.currentTagName !== $.HTML)
        this.pop();
};

OpenElementStack.prototype.clearBackToTableRowContext = function () {
    while (this.currentTagName !== $.TR && this.currentTagName !== $.TEMPLATE && this.currentTagName !== $.HTML)
        this.pop();
};

OpenElementStack.prototype.remove = function (element) {
    for (var i = this.stackTop; i >= 0; i--) {
        if (this.items[i] === element) {
            this.items.splice(i, 1);
            this.stackTop--;
            this._updateCurrentElement();
            break;
        }
    }
};

//Search
OpenElementStack.prototype.tryPeekProperlyNestedBodyElement = function () {
    //Properly nested <body> element (should be second element in stack).
    var element = this.items[1];

    return element && this.treeAdapter.getTagName(element) === $.BODY ? element : null;
};

OpenElementStack.prototype.contains = function (element) {
    return this._indexOf(element) > -1;
};

OpenElementStack.prototype.getCommonAncestor = function (element) {
    var elementIdx = this._indexOf(element);

    return --elementIdx >= 0 ? this.items[elementIdx] : null;
};

OpenElementStack.prototype.isRootHtmlElementCurrent = function () {
    return this.stackTop === 0 && this.currentTagName === $.HTML;
};

//Element in scope
OpenElementStack.prototype.hasInScope = function (tagName) {
    for (var i = this.stackTop; i >= 0; i--) {
        var tn = this.treeAdapter.getTagName(this.items[i]);

        if (tn === tagName)
            return true;

        var ns = this.treeAdapter.getNamespaceURI(this.items[i]);

        if (isScopingElement(tn, ns))
            return false;
    }

    return true;
};

OpenElementStack.prototype.hasNumberedHeaderInScope = function () {
    for (var i = this.stackTop; i >= 0; i--) {
        var tn = this.treeAdapter.getTagName(this.items[i]);

        if (tn === $.H1 || tn === $.H2 || tn === $.H3 || tn === $.H4 || tn === $.H5 || tn === $.H6)
            return true;

        if (isScopingElement(tn, this.treeAdapter.getNamespaceURI(this.items[i])))
            return false;
    }

    return true;
};

OpenElementStack.prototype.hasInListItemScope = function (tagName) {
    for (var i = this.stackTop; i >= 0; i--) {
        var tn = this.treeAdapter.getTagName(this.items[i]);

        if (tn === tagName)
            return true;

        var ns = this.treeAdapter.getNamespaceURI(this.items[i]);

        if ((tn === $.UL || tn === $.OL) && ns === NS.HTML || isScopingElement(tn, ns))
            return false;
    }

    return true;
};

OpenElementStack.prototype.hasInButtonScope = function (tagName) {
    for (var i = this.stackTop; i >= 0; i--) {
        var tn = this.treeAdapter.getTagName(this.items[i]);

        if (tn === tagName)
            return true;

        var ns = this.treeAdapter.getNamespaceURI(this.items[i]);

        if (tn === $.BUTTON && ns === NS.HTML || isScopingElement(tn, ns))
            return false;
    }

    return true;
};

OpenElementStack.prototype.hasInTableScope = function (tagName) {
    for (var i = this.stackTop; i >= 0; i--) {
        var tn = this.treeAdapter.getTagName(this.items[i]);

        if (tn === tagName)
            return true;

        var ns = this.treeAdapter.getNamespaceURI(this.items[i]);

        if ((tn === $.TABLE || tn === $.TEMPLATE || tn === $.HTML) && ns === NS.HTML)
            return false;
    }

    return true;
};

OpenElementStack.prototype.hasTableBodyContextInTableScope = function () {
    for (var i = this.stackTop; i >= 0; i--) {
        var tn = this.treeAdapter.getTagName(this.items[i]);

        if (tn === $.TBODY || tn === $.THEAD || tn === $.TFOOT)
            return true;

        var ns = this.treeAdapter.getNamespaceURI(this.items[i]);

        if ((tn === $.TABLE || tn === $.HTML) && ns === NS.HTML)
            return false;
    }

    return true;
};

OpenElementStack.prototype.hasInSelectScope = function (tagName) {
    for (var i = this.stackTop; i >= 0; i--) {
        var tn = this.treeAdapter.getTagName(this.items[i]);

        if (tn === tagName)
            return true;

        var ns = this.treeAdapter.getNamespaceURI(this.items[i]);

        if (tn !== $.OPTION && tn !== $.OPTGROUP && ns === NS.HTML)
            return false;
    }

    return true;
};

//Implied end tags
OpenElementStack.prototype.generateImpliedEndTags = function () {
    while (isImpliedEndTagRequired(this.currentTagName))
        this.pop();
};

OpenElementStack.prototype.generateImpliedEndTagsWithExclusion = function (exclusionTagName) {
    while (isImpliedEndTagRequired(this.currentTagName) && this.currentTagName !== exclusionTagName)
        this.pop();
};

},{"../common/html":3}],12:[function(require,module,exports){
'use strict';

var WritableStream = require('stream').Writable,
    inherits = require('util').inherits,
    Parser = require('./index');

/**
 * Streaming HTML parser with scripting support.
 * A [writable stream]{@link https://nodejs.org/api/stream.html#stream_class_stream_writable}.
 * @class ParserStream
 * @memberof parse5
 * @instance
 * @extends stream.Writable
 * @param {ParserOptions} options - Parsing options.
 * @example
 * var parse5 = require('parse5');
 * var http = require('http');
 *
 * // Fetch the google.com content and obtain it's <body> node
 * http.get('http://google.com', function(res) {
 *  var parser = new parse5.ParserStream();
 *
 *  parser.on('finish', function() {
 *      var body = parser.document.childNodes[0].childNodes[1];
 *  });
 *
 *  res.pipe(parser);
 * });
 */
var ParserStream = module.exports = function (options) {
    WritableStream.call(this);

    this.parser = new Parser(options);

    this.lastChunkWritten = false;
    this.writeCallback = null;
    this.pausedByScript = false;

    /**
     * The resulting document node.
     * @member {ASTNode<document>} document
     * @memberof parse5#ParserStream
     * @instance
     */
    this.document = this.parser.treeAdapter.createDocument();

    this.pendingHtmlInsertions = [];

    this._resume = this._resume.bind(this);
    this._documentWrite = this._documentWrite.bind(this);
    this._scriptHandler = this._scriptHandler.bind(this);

    this.parser._bootstrap(this.document, null);
};

inherits(ParserStream, WritableStream);

//WritableStream implementation
ParserStream.prototype._write = function (chunk, encoding, callback) {
    this.writeCallback = callback;
    this.parser.tokenizer.write(chunk.toString('utf8'), this.lastChunkWritten);
    this._runParsingLoop();
};

ParserStream.prototype.end = function (chunk, encoding, callback) {
    this.lastChunkWritten = true;
    WritableStream.prototype.end.call(this, chunk, encoding, callback);
};

//Scriptable parser implementation
ParserStream.prototype._runParsingLoop = function () {
    this.parser._runParsingLoop(this.writeCallback, this._scriptHandler);
};

ParserStream.prototype._resume = function () {
    if (!this.pausedByScript)
        throw new Error('Parser was already resumed');

    while (this.pendingHtmlInsertions.length) {
        var html = this.pendingHtmlInsertions.pop();

        this.parser.tokenizer.insertHtmlAtCurrentPos(html);
    }

    this.pausedByScript = false;

    //NOTE: keep parsing if we don't wait for the next input chunk
    if (this.parser.tokenizer.active)
        this._runParsingLoop();
};

ParserStream.prototype._documentWrite = function (html) {
    if (!this.parser.stopped)
        this.pendingHtmlInsertions.push(html);
};

ParserStream.prototype._scriptHandler = function (scriptElement) {
    if (this.listeners('script').length) {
        this.pausedByScript = true;

        /**
         * Raised then parser encounters a `<script>` element.
         * If this event has listeners, parsing will be suspended once it is emitted.
         * So, if `<script>` has the `src` attribute, you can fetch it, execute and then resume parsing just like browsers do.
         * @event script
         * @memberof parse5#ParserStream
         * @instance
         * @type {Function}
         * @param {ASTNode} scriptElement - The script element that caused the event.
         * @param {Function} documentWrite(html) - Write additional `html` at the current parsing position.
         *  Suitable for implementing the DOM `document.write` and `document.writeln` methods.
         * @param {Function} resume - Resumes parsing.
         * @example
         * var parse = require('parse5');
         * var http = require('http');
         *
         * var parser = new parse5.ParserStream();
         *
         * parser.on('script', function(scriptElement, documentWrite, resume) {
         *   var src = parse5.treeAdapters.default.getAttrList(scriptElement)[0].value;
         *
         *   http.get(src, function(res) {
         *      // Fetch the script content, execute it with DOM built around `parser.document` and
         *      // `document.write` implemented using `documentWrite`.
         *      ...
         *      // Then resume parsing.
         *      resume();
         *   });
         * });
         *
         * parser.end('<script src="example.com/script.js"></script>');
         */


        this.emit('script', scriptElement, this._documentWrite, this._resume);
    }
    else
        this._runParsingLoop();
};


},{"./index":10,"stream":42,"util":44}],13:[function(require,module,exports){
'use strict';

var WritableStream = require('stream').Writable,
    util = require('util');

var DevNullStream = module.exports = function () {
    WritableStream.call(this);
};

util.inherits(DevNullStream, WritableStream);

DevNullStream.prototype._write = function (chunk, encoding, cb) {
    cb();
};

},{"stream":42,"util":44}],14:[function(require,module,exports){
'use strict';

var TransformStream = require('stream').Transform,
    DevNullStream = require('./dev_null_stream'),
    inherits = require('util').inherits,
    Tokenizer = require('../tokenizer'),
    ParserFeedbackSimulator = require('./parser_feedback_simulator'),
    mergeOptions = require('../common/merge_options');

/**
 * @typedef {Object} SAXParserOptions
 *
 * @property {Boolean} [locationInfo=false] - Enables source code location information for the tokens.
 * When enabled, each token event handler will receive {@link LocationInfo} (or {@link StartTagLocationInfo})
 * object as its last argument.
 */
var DEFAULT_OPTIONS = {
    locationInfo: false
};

/**
 * Streaming [SAX]{@link https://en.wikipedia.org/wiki/Simple_API_for_XML}-style HTML parser.
 * A [transform stream](https://nodejs.org/api/stream.html#stream_class_stream_transform)
 * (which means you can pipe *through* it, see example).
 * @class SAXParser
 * @memberof parse5
 * @instance
 * @extends stream.Transform
 * @param {SAXParserOptions} options - Parsing options.
 * @example
 * var parse5 = require('parse5');
 * var http = require('http');
 * var fs = require('fs');
 *
 * var file = fs.createWriteStream('/home/google.com.html');
 * var parser = new parse5.SAXParser();
 *
 * parser.on('text', function(text) {
 *  // Handle page text content
 *  ...
 * });
 *
 * http.get('http://google.com', function(res) {
 *  // SAXParser is the Transform stream, which means you can pipe
 *  // through it. So, you can analyze page content and, e.g., save it
 *  // to the file at the same time:
 *  res.pipe(parser).pipe(file);
 * });
 */
var SAXParser = module.exports = function (options) {
    TransformStream.call(this);

    this.options = mergeOptions(DEFAULT_OPTIONS, options);

    this.tokenizer = new Tokenizer(options);
    this.parserFeedbackSimulator = new ParserFeedbackSimulator(this.tokenizer);

    this.pendingText = null;
    this.currentTokenLocation = void 0;

    this.lastChunkWritten = false;
    this.stopped = false;

    // NOTE: always pipe stream to the /dev/null stream to avoid
    // `highWaterMark` hit even if we don't have consumers.
    // (see: https://github.com/inikulin/parse5/issues/97#issuecomment-171940774)
    this.pipe(new DevNullStream());
};

inherits(SAXParser, TransformStream);

//TransformStream implementation
SAXParser.prototype._transform = function (chunk, encoding, callback) {
    if (!this.stopped) {
        this.tokenizer.write(chunk.toString('utf8'), this.lastChunkWritten);
        this._runParsingLoop();
    }

    this.push(chunk);

    callback();
};

SAXParser.prototype._flush = function (callback) {
    callback();
};

SAXParser.prototype.end = function (chunk, encoding, callback) {
    this.lastChunkWritten = true;
    TransformStream.prototype.end.call(this, chunk, encoding, callback);
};

/**
 * Stops parsing. Useful if you want the parser to stop consuming CPU time once you've obtained the desired info
 * from the input stream. Doesn't prevent piping, so that data will flow through the parser as usual.
 *
 * @function stop
 * @memberof parse5#SAXParser
 * @instance
 * @example
 * var parse5 = require('parse5');
 * var http = require('http');
 * var fs = require('fs');
 *
 * var file = fs.createWriteStream('/home/google.com.html');
 * var parser = new parse5.SAXParser();
 *
 * parser.on('doctype', function(name, publicId, systemId) {
 *  // Process doctype info ans stop parsing
 *  ...
 *  parser.stop();
 * });
 *
 * http.get('http://google.com', function(res) {
 *  // Despite the fact that parser.stop() was called whole
 *  // content of the page will be written to the file
 *  res.pipe(parser).pipe(file);
 * });
 */
SAXParser.prototype.stop = function () {
    this.stopped = true;
};

//Internals
SAXParser.prototype._runParsingLoop = function () {
    do {
        var token = this.tokenizer.getNextToken();

        if (token.type === Tokenizer.HIBERNATION_TOKEN)
            break;

        this.parserFeedbackSimulator.adjustTokenizer(token);

        if (token.type === Tokenizer.CHARACTER_TOKEN ||
            token.type === Tokenizer.WHITESPACE_CHARACTER_TOKEN ||
            token.type === Tokenizer.NULL_CHARACTER_TOKEN) {

            if (this.options.locationInfo) {
                if (this.pendingText === null)
                    this.currentTokenLocation = token.location;

                else
                    this.currentTokenLocation.end = token.location.end;
            }

            this.pendingText = (this.pendingText || '') + token.chars;
        }

        else {
            this._emitPendingText();
            this._handleToken(token);
        }
    } while (!this.stopped && token.type !== Tokenizer.EOF_TOKEN);
};

SAXParser.prototype._handleToken = function (token) {
    if (this.options.locationInfo)
        this.currentTokenLocation = token.location;

    if (token.type === Tokenizer.START_TAG_TOKEN)
        /**
         * Raised when the parser encounters a start tag.
         * @event startTag
         * @memberof parse5#SAXParser
         * @instance
         * @type {Function}
         * @param {String} name - Tag name.
         * @param {String} attributes - List of attributes in the `{ key: String, value: String }` form.
         * @param {Boolean} selfClosing - Indicates if the tag is self-closing.
         * @param {StartTagLocationInfo} [location] - Start tag source code location info.
         * Available if location info is enabled in {@link SAXParserOptions}.
         */
        this.emit('startTag', token.tagName, token.attrs, token.selfClosing, this.currentTokenLocation);

    else if (token.type === Tokenizer.END_TAG_TOKEN)
        /**
         * Raised then parser encounters an end tag.
         * @event endTag
         * @memberof parse5#SAXParser
         * @instance
         * @type {Function}
         * @param {String} name - Tag name.
         * @param {LocationInfo} [location] - End tag source code location info.
         * Available if location info is enabled in {@link SAXParserOptions}.
         */
        this.emit('endTag', token.tagName, this.currentTokenLocation);

    else if (token.type === Tokenizer.COMMENT_TOKEN)
        /**
         * Raised then parser encounters a comment.
         * @event comment
         * @memberof parse5#SAXParser
         * @instance
         * @type {Function}
         * @param {String} text - Comment text.
         * @param {LocationInfo} [location] - Comment source code location info.
         * Available if location info is enabled in {@link SAXParserOptions}.
         */
        this.emit('comment', token.data, this.currentTokenLocation);

    else if (token.type === Tokenizer.DOCTYPE_TOKEN)
        /**
         * Raised then parser encounters a [document type declaration]{@link https://en.wikipedia.org/wiki/Document_type_declaration}.
         * @event doctype
         * @memberof parse5#SAXParser
         * @instance
         * @type {Function}
         * @param {String} name - Document type name.
         * @param {String} publicId - Document type public identifier.
         * @param {String} systemId - Document type system identifier.
         * @param {LocationInfo} [location] - Document type declaration source code location info.
         * Available if location info is enabled in {@link SAXParserOptions}.
         */
        this.emit('doctype', token.name, token.publicId, token.systemId, this.currentTokenLocation);
};

SAXParser.prototype._emitPendingText = function () {
    if (this.pendingText !== null) {
        /**
         * Raised then parser encounters text content.
         * @event text
         * @memberof parse5#SAXParser
         * @instance
         * @type {Function}
         * @param {String} text - Text content.
         * @param {LocationInfo} [location] - Text content code location info.
         * Available if location info is enabled in {@link SAXParserOptions}.
         */
        this.emit('text', this.pendingText, this.currentTokenLocation);
        this.pendingText = null;
    }
};

},{"../common/merge_options":4,"../tokenizer":18,"./dev_null_stream":13,"./parser_feedback_simulator":15,"stream":42,"util":44}],15:[function(require,module,exports){
'use strict';

var Tokenizer = require('../tokenizer'),
    foreignContent = require('../common/foreign_content'),
    UNICODE = require('../common/unicode'),
    HTML = require('../common/html');


//Aliases
var $ = HTML.TAG_NAMES,
    NS = HTML.NAMESPACES;


//ParserFeedbackSimulator
//Simulates adjustment of the Tokenizer which performed by standard parser during tree construction.
var ParserFeedbackSimulator = module.exports = function (tokenizer) {
    this.tokenizer = tokenizer;

    this.namespaceStack = [];
    this.namespaceStackTop = -1;
    this.currentNamespace = null;
    this.inForeignContent = false;
};

//API
ParserFeedbackSimulator.prototype.adjustTokenizer = function (token) {
    if (token.type === Tokenizer.START_TAG_TOKEN)
        this._handleStartTagToken(token);

    else if (token.type === Tokenizer.END_TAG_TOKEN)
        this._handleEndTagToken(token);

    else if (token.type === Tokenizer.NULL_CHARACTER_TOKEN && this.inForeignContent) {
        token.type = Tokenizer.CHARACTER_TOKEN;
        token.chars = UNICODE.REPLACEMENT_CHARACTER;
    }

    return token;
};

//Namespace stack mutations
ParserFeedbackSimulator.prototype._enterNamespace = function (namespace) {
    this.namespaceStackTop++;
    this.namespaceStack.push(namespace);

    this.inForeignContent = namespace !== NS.HTML;
    this.currentNamespace = namespace;
    this.tokenizer.allowCDATA = this.inForeignContent;
};

ParserFeedbackSimulator.prototype._leaveCurrentNamespace = function () {
    this.namespaceStackTop--;
    this.namespaceStack.pop();

    this.currentNamespace = this.namespaceStack[this.namespaceStackTop];
    this.inForeignContent = this.currentNamespace !== NS.HTML;
    this.tokenizer.allowCDATA = this.inForeignContent;
};

//Token handlers
ParserFeedbackSimulator.prototype._ensureTokenizerMode = function (tn) {
    if (tn === $.TEXTAREA || tn === $.TITLE)
        this.tokenizer.state = Tokenizer.MODE.RCDATA;

    else if (tn === $.PLAINTEXT)
        this.tokenizer.state = Tokenizer.MODE.PLAINTEXT;

    else if (tn === $.SCRIPT)
        this.tokenizer.state = Tokenizer.MODE.SCRIPT_DATA;

    else if (tn === $.STYLE || tn === $.IFRAME || tn === $.XMP ||
             tn === $.NOEMBED || tn === $.NOFRAMES || tn === $.NOSCRIPT)
        this.tokenizer.state = Tokenizer.MODE.RAWTEXT;
};

ParserFeedbackSimulator.prototype._handleStartTagToken = function (token) {
    var tn = token.tagName;

    if (tn === $.SVG)
        this._enterNamespace(NS.SVG);

    else if (tn === $.MATH)
        this._enterNamespace(NS.MATHML);

    else if (this.inForeignContent) {
        if (foreignContent.causesExit(token))
            this._leaveCurrentNamespace();

        else if (foreignContent.isMathMLTextIntegrationPoint(tn, this.currentNamespace) ||
                 foreignContent.isHtmlIntegrationPoint(tn, this.currentNamespace, token.attrs))
            this._enterNamespace(NS.HTML);
    }

    else
        this._ensureTokenizerMode(tn);
};

ParserFeedbackSimulator.prototype._handleEndTagToken = function (token) {
    var tn = token.tagName;

    if (!this.inForeignContent) {
        var previousNs = this.namespaceStack[this.namespaceStackTop - 1];

        //NOTE: check for exit from integration point
        if (foreignContent.isMathMLTextIntegrationPoint(tn, previousNs) ||
            foreignContent.isHtmlIntegrationPoint(tn, previousNs, token.attrs))
            this._leaveCurrentNamespace();

        else if (tn === $.SCRIPT)
            this.tokenizer.state = Tokenizer.MODE.DATA;
    }

    else if (tn === $.SVG && this.currentNamespace === NS.SVG ||
             tn === $.MATH && this.currentNamespace === NS.MATHML)
        this._leaveCurrentNamespace();
};

},{"../common/foreign_content":2,"../common/html":3,"../common/unicode":5,"../tokenizer":18}],16:[function(require,module,exports){
'use strict';

var defaultTreeAdapter = require('../tree_adapters/default'),
    doctype = require('../common/doctype'),
    mergeOptions = require('../common/merge_options'),
    HTML = require('../common/html');

//Aliases
var $ = HTML.TAG_NAMES,
    NS = HTML.NAMESPACES;

//Default serializer options
/**
 * @typedef {Object} SerializerOptions
 *
 * @property {TreeAdapter} [treeAdapter=parse5.treeAdapters.default] - Specifies input tree format.
 */
var DEFAULT_OPTIONS = {
    treeAdapter: defaultTreeAdapter
};

//Escaping regexes
var AMP_REGEX = /&/g,
    NBSP_REGEX = /\u00a0/g,
    DOUBLE_QUOTE_REGEX = /"/g,
    LT_REGEX = /</g,
    GT_REGEX = />/g;

//Serializer
var Serializer = module.exports = function (node, options) {
    this.options = mergeOptions(DEFAULT_OPTIONS, options);
    this.treeAdapter = this.options.treeAdapter;

    this.html = '';
    this.startNode = node;
};

// NOTE: exported as static method for the testing purposes
Serializer.escapeString = function (str, attrMode) {
    str = str
        .replace(AMP_REGEX, '&amp;')
        .replace(NBSP_REGEX, '&nbsp;');

    if (attrMode)
        str = str.replace(DOUBLE_QUOTE_REGEX, '&quot;');

    else {
        str = str
            .replace(LT_REGEX, '&lt;')
            .replace(GT_REGEX, '&gt;');
    }

    return str;
};


//API
Serializer.prototype.serialize = function () {
    this._serializeChildNodes(this.startNode);

    return this.html;
};


//Internals
Serializer.prototype._serializeChildNodes = function (parentNode) {
    var childNodes = this.treeAdapter.getChildNodes(parentNode);

    if (childNodes) {
        for (var i = 0, cnLength = childNodes.length; i < cnLength; i++) {
            var currentNode = childNodes[i];

            if (this.treeAdapter.isElementNode(currentNode))
                this._serializeElement(currentNode);

            else if (this.treeAdapter.isTextNode(currentNode))
                this._serializeTextNode(currentNode);

            else if (this.treeAdapter.isCommentNode(currentNode))
                this._serializeCommentNode(currentNode);

            else if (this.treeAdapter.isDocumentTypeNode(currentNode))
                this._serializeDocumentTypeNode(currentNode);
        }
    }
};

Serializer.prototype._serializeElement = function (node) {
    var tn = this.treeAdapter.getTagName(node),
        ns = this.treeAdapter.getNamespaceURI(node);

    this.html += '<' + tn;
    this._serializeAttributes(node);
    this.html += '>';

    if (tn !== $.AREA && tn !== $.BASE && tn !== $.BASEFONT && tn !== $.BGSOUND && tn !== $.BR && tn !== $.BR &&
        tn !== $.COL && tn !== $.EMBED && tn !== $.FRAME && tn !== $.HR && tn !== $.IMG && tn !== $.INPUT &&
        tn !== $.KEYGEN && tn !== $.LINK && tn !== $.MENUITEM && tn !== $.META && tn !== $.PARAM && tn !== $.SOURCE &&
        tn !== $.TRACK && tn !== $.WBR) {

        if (tn === $.PRE || tn === $.TEXTAREA || tn === $.LISTING) {
            var firstChild = this.treeAdapter.getFirstChild(node);

            if (firstChild && this.treeAdapter.isTextNode(firstChild)) {
                var content = this.treeAdapter.getTextNodeContent(firstChild);

                if (content[0] === '\n')
                    this.html += '\n';
            }
        }

        var childNodesHolder = tn === $.TEMPLATE && ns === NS.HTML ?
            this.treeAdapter.getTemplateContent(node) :
            node;

        this._serializeChildNodes(childNodesHolder);
        this.html += '</' + tn + '>';
    }
};

Serializer.prototype._serializeAttributes = function (node) {
    var attrs = this.treeAdapter.getAttrList(node);

    for (var i = 0, attrsLength = attrs.length; i < attrsLength; i++) {
        var attr = attrs[i],
            value = Serializer.escapeString(attr.value, true);

        this.html += ' ';

        if (!attr.namespace)
            this.html += attr.name;

        else if (attr.namespace === NS.XML)
            this.html += 'xml:' + attr.name;

        else if (attr.namespace === NS.XMLNS) {
            if (attr.name !== 'xmlns')
                this.html += 'xmlns:';

            this.html += attr.name;
        }

        else if (attr.namespace === NS.XLINK)
            this.html += 'xlink:' + attr.name;

        else
            this.html += attr.namespace + ':' + attr.name;

        this.html += '="' + value + '"';
    }
};

Serializer.prototype._serializeTextNode = function (node) {
    var content = this.treeAdapter.getTextNodeContent(node),
        parent = this.treeAdapter.getParentNode(node),
        parentTn = void 0;

    if (parent && this.treeAdapter.isElementNode(parent))
        parentTn = this.treeAdapter.getTagName(parent);

    if (parentTn === $.STYLE || parentTn === $.SCRIPT || parentTn === $.XMP || parentTn === $.IFRAME ||
        parentTn === $.NOEMBED || parentTn === $.NOFRAMES || parentTn === $.PLAINTEXT || parentTn === $.NOSCRIPT)

        this.html += content;

    else
        this.html += Serializer.escapeString(content, false);
};

Serializer.prototype._serializeCommentNode = function (node) {
    this.html += '<!--' + this.treeAdapter.getCommentNodeContent(node) + '-->';
};

Serializer.prototype._serializeDocumentTypeNode = function (node) {
    var name = this.treeAdapter.getDocumentTypeNodeName(node),
        publicId = this.treeAdapter.getDocumentTypeNodePublicId(node),
        systemId = this.treeAdapter.getDocumentTypeNodeSystemId(node);

    this.html += '<' + doctype.serializeContent(name, publicId, systemId) + '>';
};

},{"../common/doctype":1,"../common/html":3,"../common/merge_options":4,"../tree_adapters/default":21}],17:[function(require,module,exports){
'use strict';

var ReadableStream = require('stream').Readable,
    inherits = require('util').inherits,
    Serializer = require('./index');

/**
 * Streaming AST node to an HTML serializer.
 * A [readable stream]{@link https://nodejs.org/api/stream.html#stream_class_stream_readable}.
 * @class SerializerStream
 * @memberof parse5
 * @instance
 * @extends stream.Readable
 * @param {ASTNode} node - Node to serialize.
 * @param {SerializerOptions} [options] - Serialization options.
 * @example
 * var parse5 = require('parse5');
 * var fs = require('fs');
 *
 * var file = fs.createWriteStream('/home/index.html');
 *
 * // Serializes the parsed document to HTML and writes it to the file.
 * var document = parse5.parse('<body>Who is John Galt?</body>');
 * var serializer = new parse5.SerializerStream(document);
 *
 * serializer.pipe(file);
 */
var SerializerStream = module.exports = function (node, options) {
    ReadableStream.call(this);

    this.serializer = new Serializer(node, options);

    Object.defineProperty(this.serializer, 'html', {
        //NOTE: To make `+=` concat operator work properly we define
        //getter which always returns empty string
        get: function () {
            return '';
        },
        set: this.push.bind(this)
    });
};

inherits(SerializerStream, ReadableStream);

//Readable stream implementation
SerializerStream.prototype._read = function () {
    this.serializer.serialize();
    this.push(null);
};

},{"./index":16,"stream":42,"util":44}],18:[function(require,module,exports){
'use strict';

var Preprocessor = require('./preprocessor'),
    locationInfoMixin = require('../location_info/tokenizer_mixin'),
    UNICODE = require('../common/unicode'),
    NAMED_ENTITY_TRIE = require('./named_entity_trie');

//Aliases
var $ = UNICODE.CODE_POINTS,
    $$ = UNICODE.CODE_POINT_SEQUENCES;

//Replacement code points for numeric entities
var NUMERIC_ENTITY_REPLACEMENTS = {
    0x00: 0xFFFD, 0x0D: 0x000D, 0x80: 0x20AC, 0x81: 0x0081, 0x82: 0x201A, 0x83: 0x0192, 0x84: 0x201E,
    0x85: 0x2026, 0x86: 0x2020, 0x87: 0x2021, 0x88: 0x02C6, 0x89: 0x2030, 0x8A: 0x0160, 0x8B: 0x2039,
    0x8C: 0x0152, 0x8D: 0x008D, 0x8E: 0x017D, 0x8F: 0x008F, 0x90: 0x0090, 0x91: 0x2018, 0x92: 0x2019,
    0x93: 0x201C, 0x94: 0x201D, 0x95: 0x2022, 0x96: 0x2013, 0x97: 0x2014, 0x98: 0x02DC, 0x99: 0x2122,
    0x9A: 0x0161, 0x9B: 0x203A, 0x9C: 0x0153, 0x9D: 0x009D, 0x9E: 0x017E, 0x9F: 0x0178
};

//States
var DATA_STATE = 'DATA_STATE',
    CHARACTER_REFERENCE_IN_DATA_STATE = 'CHARACTER_REFERENCE_IN_DATA_STATE',
    RCDATA_STATE = 'RCDATA_STATE',
    CHARACTER_REFERENCE_IN_RCDATA_STATE = 'CHARACTER_REFERENCE_IN_RCDATA_STATE',
    RAWTEXT_STATE = 'RAWTEXT_STATE',
    SCRIPT_DATA_STATE = 'SCRIPT_DATA_STATE',
    PLAINTEXT_STATE = 'PLAINTEXT_STATE',
    TAG_OPEN_STATE = 'TAG_OPEN_STATE',
    END_TAG_OPEN_STATE = 'END_TAG_OPEN_STATE',
    TAG_NAME_STATE = 'TAG_NAME_STATE',
    RCDATA_LESS_THAN_SIGN_STATE = 'RCDATA_LESS_THAN_SIGN_STATE',
    RCDATA_END_TAG_OPEN_STATE = 'RCDATA_END_TAG_OPEN_STATE',
    RCDATA_END_TAG_NAME_STATE = 'RCDATA_END_TAG_NAME_STATE',
    RAWTEXT_LESS_THAN_SIGN_STATE = 'RAWTEXT_LESS_THAN_SIGN_STATE',
    RAWTEXT_END_TAG_OPEN_STATE = 'RAWTEXT_END_TAG_OPEN_STATE',
    RAWTEXT_END_TAG_NAME_STATE = 'RAWTEXT_END_TAG_NAME_STATE',
    SCRIPT_DATA_LESS_THAN_SIGN_STATE = 'SCRIPT_DATA_LESS_THAN_SIGN_STATE',
    SCRIPT_DATA_END_TAG_OPEN_STATE = 'SCRIPT_DATA_END_TAG_OPEN_STATE',
    SCRIPT_DATA_END_TAG_NAME_STATE = 'SCRIPT_DATA_END_TAG_NAME_STATE',
    SCRIPT_DATA_ESCAPE_START_STATE = 'SCRIPT_DATA_ESCAPE_START_STATE',
    SCRIPT_DATA_ESCAPE_START_DASH_STATE = 'SCRIPT_DATA_ESCAPE_START_DASH_STATE',
    SCRIPT_DATA_ESCAPED_STATE = 'SCRIPT_DATA_ESCAPED_STATE',
    SCRIPT_DATA_ESCAPED_DASH_STATE = 'SCRIPT_DATA_ESCAPED_DASH_STATE',
    SCRIPT_DATA_ESCAPED_DASH_DASH_STATE = 'SCRIPT_DATA_ESCAPED_DASH_DASH_STATE',
    SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN_STATE = 'SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN_STATE',
    SCRIPT_DATA_ESCAPED_END_TAG_OPEN_STATE = 'SCRIPT_DATA_ESCAPED_END_TAG_OPEN_STATE',
    SCRIPT_DATA_ESCAPED_END_TAG_NAME_STATE = 'SCRIPT_DATA_ESCAPED_END_TAG_NAME_STATE',
    SCRIPT_DATA_DOUBLE_ESCAPE_START_STATE = 'SCRIPT_DATA_DOUBLE_ESCAPE_START_STATE',
    SCRIPT_DATA_DOUBLE_ESCAPED_STATE = 'SCRIPT_DATA_DOUBLE_ESCAPED_STATE',
    SCRIPT_DATA_DOUBLE_ESCAPED_DASH_STATE = 'SCRIPT_DATA_DOUBLE_ESCAPED_DASH_STATE',
    SCRIPT_DATA_DOUBLE_ESCAPED_DASH_DASH_STATE = 'SCRIPT_DATA_DOUBLE_ESCAPED_DASH_DASH_STATE',
    SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN_STATE = 'SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN_STATE',
    SCRIPT_DATA_DOUBLE_ESCAPE_END_STATE = 'SCRIPT_DATA_DOUBLE_ESCAPE_END_STATE',
    BEFORE_ATTRIBUTE_NAME_STATE = 'BEFORE_ATTRIBUTE_NAME_STATE',
    ATTRIBUTE_NAME_STATE = 'ATTRIBUTE_NAME_STATE',
    AFTER_ATTRIBUTE_NAME_STATE = 'AFTER_ATTRIBUTE_NAME_STATE',
    BEFORE_ATTRIBUTE_VALUE_STATE = 'BEFORE_ATTRIBUTE_VALUE_STATE',
    ATTRIBUTE_VALUE_DOUBLE_QUOTED_STATE = 'ATTRIBUTE_VALUE_DOUBLE_QUOTED_STATE',
    ATTRIBUTE_VALUE_SINGLE_QUOTED_STATE = 'ATTRIBUTE_VALUE_SINGLE_QUOTED_STATE',
    ATTRIBUTE_VALUE_UNQUOTED_STATE = 'ATTRIBUTE_VALUE_UNQUOTED_STATE',
    CHARACTER_REFERENCE_IN_ATTRIBUTE_VALUE_STATE = 'CHARACTER_REFERENCE_IN_ATTRIBUTE_VALUE_STATE',
    AFTER_ATTRIBUTE_VALUE_QUOTED_STATE = 'AFTER_ATTRIBUTE_VALUE_QUOTED_STATE',
    SELF_CLOSING_START_TAG_STATE = 'SELF_CLOSING_START_TAG_STATE',
    BOGUS_COMMENT_STATE = 'BOGUS_COMMENT_STATE',
    BOGUS_COMMENT_STATE_CONTINUATION = 'BOGUS_COMMENT_STATE_CONTINUATION',
    MARKUP_DECLARATION_OPEN_STATE = 'MARKUP_DECLARATION_OPEN_STATE',
    COMMENT_START_STATE = 'COMMENT_START_STATE',
    COMMENT_START_DASH_STATE = 'COMMENT_START_DASH_STATE',
    COMMENT_STATE = 'COMMENT_STATE',
    COMMENT_END_DASH_STATE = 'COMMENT_END_DASH_STATE',
    COMMENT_END_STATE = 'COMMENT_END_STATE',
    COMMENT_END_BANG_STATE = 'COMMENT_END_BANG_STATE',
    DOCTYPE_STATE = 'DOCTYPE_STATE',
    BEFORE_DOCTYPE_NAME_STATE = 'BEFORE_DOCTYPE_NAME_STATE',
    DOCTYPE_NAME_STATE = 'DOCTYPE_NAME_STATE',
    AFTER_DOCTYPE_NAME_STATE = 'AFTER_DOCTYPE_NAME_STATE',
    AFTER_DOCTYPE_PUBLIC_KEYWORD_STATE = 'AFTER_DOCTYPE_PUBLIC_KEYWORD_STATE',
    BEFORE_DOCTYPE_PUBLIC_IDENTIFIER_STATE = 'BEFORE_DOCTYPE_PUBLIC_IDENTIFIER_STATE',
    DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED_STATE = 'DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED_STATE',
    DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED_STATE = 'DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED_STATE',
    AFTER_DOCTYPE_PUBLIC_IDENTIFIER_STATE = 'AFTER_DOCTYPE_PUBLIC_IDENTIFIER_STATE',
    BETWEEN_DOCTYPE_PUBLIC_AND_SYSTEM_IDENTIFIERS_STATE = 'BETWEEN_DOCTYPE_PUBLIC_AND_SYSTEM_IDENTIFIERS_STATE',
    AFTER_DOCTYPE_SYSTEM_KEYWORD_STATE = 'AFTER_DOCTYPE_SYSTEM_KEYWORD_STATE',
    BEFORE_DOCTYPE_SYSTEM_IDENTIFIER_STATE = 'BEFORE_DOCTYPE_SYSTEM_IDENTIFIER_STATE',
    DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED_STATE = 'DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED_STATE',
    DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED_STATE = 'DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED_STATE',
    AFTER_DOCTYPE_SYSTEM_IDENTIFIER_STATE = 'AFTER_DOCTYPE_SYSTEM_IDENTIFIER_STATE',
    BOGUS_DOCTYPE_STATE = 'BOGUS_DOCTYPE_STATE',
    CDATA_SECTION_STATE = 'CDATA_SECTION_STATE';

//Utils

//OPTIMIZATION: these utility functions should not be moved out of this module. V8 Crankshaft will not inline
//this functions if they will be situated in another module due to context switch.
//Always perform inlining check before modifying this functions ('node --trace-inlining').
function isWhitespace(cp) {
    return cp === $.SPACE || cp === $.LINE_FEED || cp === $.TABULATION || cp === $.FORM_FEED;
}

function isAsciiDigit(cp) {
    return cp >= $.DIGIT_0 && cp <= $.DIGIT_9;
}

function isAsciiUpper(cp) {
    return cp >= $.LATIN_CAPITAL_A && cp <= $.LATIN_CAPITAL_Z;
}

function isAsciiLower(cp) {
    return cp >= $.LATIN_SMALL_A && cp <= $.LATIN_SMALL_Z;
}

function isAsciiAlphaNumeric(cp) {
    return isAsciiDigit(cp) || isAsciiUpper(cp) || isAsciiLower(cp);
}

function isDigit(cp, isHex) {
    return isAsciiDigit(cp) || isHex && (cp >= $.LATIN_CAPITAL_A && cp <= $.LATIN_CAPITAL_F ||
                                         cp >= $.LATIN_SMALL_A && cp <= $.LATIN_SMALL_F);
}

function isReservedCodePoint(cp) {
    return cp >= 0xD800 && cp <= 0xDFFF || cp > 0x10FFFF;
}

function toAsciiLowerCodePoint(cp) {
    return cp + 0x0020;
}

//NOTE: String.fromCharCode() function can handle only characters from BMP subset.
//So, we need to workaround this manually.
//(see: https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/String/fromCharCode#Getting_it_to_work_with_higher_values)
function toChar(cp) {
    if (cp <= 0xFFFF)
        return String.fromCharCode(cp);

    cp -= 0x10000;
    return String.fromCharCode(cp >>> 10 & 0x3FF | 0xD800) + String.fromCharCode(0xDC00 | cp & 0x3FF);
}

function toAsciiLowerChar(cp) {
    return String.fromCharCode(toAsciiLowerCodePoint(cp));
}

//Tokenizer
var Tokenizer = module.exports = function (options) {
    this.preprocessor = new Preprocessor();

    this.tokenQueue = [];

    this.allowCDATA = false;

    this.state = DATA_STATE;
    this.returnState = '';

    this.tempBuff = [];
    this.additionalAllowedCp = void 0;
    this.lastStartTagName = '';

    this.consumedAfterSnapshot = -1;
    this.active = false;

    this.currentCharacterToken = null;
    this.currentToken = null;
    this.currentAttr = null;

    if (options && options.locationInfo)
        locationInfoMixin.assign(this);
};

//Token types
Tokenizer.CHARACTER_TOKEN = 'CHARACTER_TOKEN';
Tokenizer.NULL_CHARACTER_TOKEN = 'NULL_CHARACTER_TOKEN';
Tokenizer.WHITESPACE_CHARACTER_TOKEN = 'WHITESPACE_CHARACTER_TOKEN';
Tokenizer.START_TAG_TOKEN = 'START_TAG_TOKEN';
Tokenizer.END_TAG_TOKEN = 'END_TAG_TOKEN';
Tokenizer.COMMENT_TOKEN = 'COMMENT_TOKEN';
Tokenizer.DOCTYPE_TOKEN = 'DOCTYPE_TOKEN';
Tokenizer.EOF_TOKEN = 'EOF_TOKEN';
Tokenizer.HIBERNATION_TOKEN = 'HIBERNATION_TOKEN';

//Tokenizer initial states for different modes
Tokenizer.MODE = Tokenizer.prototype.MODE = {
    DATA: DATA_STATE,
    RCDATA: RCDATA_STATE,
    RAWTEXT: RAWTEXT_STATE,
    SCRIPT_DATA: SCRIPT_DATA_STATE,
    PLAINTEXT: PLAINTEXT_STATE
};

//Static
Tokenizer.getTokenAttr = function (token, attrName) {
    for (var i = token.attrs.length - 1; i >= 0; i--) {
        if (token.attrs[i].name === attrName)
            return token.attrs[i].value;
    }

    return null;
};

//API
Tokenizer.prototype.getNextToken = function () {
    while (!this.tokenQueue.length && this.active) {
        this._hibernationSnapshot();

        var cp = this._consume();

        if (!this._ensureHibernation())
            this[this.state](cp);
    }

    return this.tokenQueue.shift();
};

Tokenizer.prototype.write = function (chunk, isLastChunk) {
    this.active = true;
    this.preprocessor.write(chunk, isLastChunk);
};

Tokenizer.prototype.insertHtmlAtCurrentPos = function (chunk) {
    this.active = true;
    this.preprocessor.insertHtmlAtCurrentPos(chunk);
};

//Hibernation
Tokenizer.prototype._hibernationSnapshot = function () {
    this.consumedAfterSnapshot = 0;
};

Tokenizer.prototype._ensureHibernation = function () {
    if (this.preprocessor.endOfChunkHit) {
        for (; this.consumedAfterSnapshot > 0; this.consumedAfterSnapshot--)
            this.preprocessor.retreat();

        this.active = false;
        this.tokenQueue.push({type: Tokenizer.HIBERNATION_TOKEN});

        return true;
    }

    return false;
};


//Consumption
Tokenizer.prototype._consume = function () {
    this.consumedAfterSnapshot++;
    return this.preprocessor.advance();
};

Tokenizer.prototype._unconsume = function () {
    this.consumedAfterSnapshot--;
    this.preprocessor.retreat();
};

Tokenizer.prototype._unconsumeSeveral = function (count) {
    while (count--)
        this._unconsume();
};

Tokenizer.prototype._reconsumeInState = function (state) {
    this.state = state;
    this._unconsume();
};

Tokenizer.prototype._consumeSubsequentIfMatch = function (pattern, startCp, caseSensitive) {
    var consumedCount = 0,
        isMatch = true,
        patternLength = pattern.length,
        patternPos = 0,
        cp = startCp,
        patternCp = void 0;

    for (; patternPos < patternLength; patternPos++) {
        if (patternPos > 0) {
            cp = this._consume();
            consumedCount++;
        }

        if (cp === $.EOF) {
            isMatch = false;
            break;
        }

        patternCp = pattern[patternPos];

        if (cp !== patternCp && (caseSensitive || cp !== toAsciiLowerCodePoint(patternCp))) {
            isMatch = false;
            break;
        }
    }

    if (!isMatch)
        this._unconsumeSeveral(consumedCount);

    return isMatch;
};

//Lookahead
Tokenizer.prototype._lookahead = function () {
    var cp = this._consume();

    this._unconsume();

    return cp;
};

//Temp buffer
Tokenizer.prototype.isTempBufferEqualToScriptString = function () {
    if (this.tempBuff.length !== $$.SCRIPT_STRING.length)
        return false;

    for (var i = 0; i < this.tempBuff.length; i++) {
        if (this.tempBuff[i] !== $$.SCRIPT_STRING[i])
            return false;
    }

    return true;
};

//Token creation
Tokenizer.prototype.buildStartTagToken = function (tagName) {
    return {
        type: Tokenizer.START_TAG_TOKEN,
        tagName: tagName,
        selfClosing: false,
        attrs: []
    };
};

Tokenizer.prototype.buildEndTagToken = function (tagName) {
    return {
        type: Tokenizer.END_TAG_TOKEN,
        tagName: tagName,
        ignored: false,
        attrs: []
    };
};

Tokenizer.prototype._createStartTagToken = function (tagNameFirstCh) {
    this.currentToken = this.buildStartTagToken(tagNameFirstCh);
};

Tokenizer.prototype._createEndTagToken = function (tagNameFirstCh) {
    this.currentToken = this.buildEndTagToken(tagNameFirstCh);
};

Tokenizer.prototype._createCommentToken = function () {
    this.currentToken = {
        type: Tokenizer.COMMENT_TOKEN,
        data: ''
    };
};

Tokenizer.prototype._createDoctypeToken = function (doctypeNameFirstCh) {
    this.currentToken = {
        type: Tokenizer.DOCTYPE_TOKEN,
        name: doctypeNameFirstCh || null,
        forceQuirks: false,
        publicId: null,
        systemId: null
    };
};

Tokenizer.prototype._createCharacterToken = function (type, ch) {
    this.currentCharacterToken = {
        type: type,
        chars: ch
    };
};

//Tag attributes
Tokenizer.prototype._createAttr = function (attrNameFirstCh) {
    this.currentAttr = {
        name: attrNameFirstCh,
        value: ''
    };
};

Tokenizer.prototype._isDuplicateAttr = function () {
    return Tokenizer.getTokenAttr(this.currentToken, this.currentAttr.name) !== null;
};

Tokenizer.prototype._leaveAttrName = function (toState) {
    this.state = toState;

    if (!this._isDuplicateAttr())
        this.currentToken.attrs.push(this.currentAttr);
};

Tokenizer.prototype._leaveAttrValue = function (toState) {
    this.state = toState;
};

//Appropriate end tag token
//(see: http://www.whatwg.org/specs/web-apps/current-work/multipage/tokenization.html#appropriate-end-tag-token)
Tokenizer.prototype._isAppropriateEndTagToken = function () {
    return this.lastStartTagName === this.currentToken.tagName;
};

//Token emission
Tokenizer.prototype._emitCurrentToken = function () {
    this._emitCurrentCharacterToken();

    //NOTE: store emited start tag's tagName to determine is the following end tag token is appropriate.
    if (this.currentToken.type === Tokenizer.START_TAG_TOKEN)
        this.lastStartTagName = this.currentToken.tagName;

    this.tokenQueue.push(this.currentToken);
    this.currentToken = null;
};

Tokenizer.prototype._emitCurrentCharacterToken = function () {
    if (this.currentCharacterToken) {
        this.tokenQueue.push(this.currentCharacterToken);
        this.currentCharacterToken = null;
    }
};

Tokenizer.prototype._emitEOFToken = function () {
    this._emitCurrentCharacterToken();
    this.tokenQueue.push({type: Tokenizer.EOF_TOKEN});
};

//Characters emission

//OPTIMIZATION: specification uses only one type of character tokens (one token per character).
//This causes a huge memory overhead and a lot of unnecessary parser loops. parse5 uses 3 groups of characters.
//If we have a sequence of characters that belong to the same group, parser can process it
//as a single solid character token.
//So, there are 3 types of character tokens in parse5:
//1)NULL_CHARACTER_TOKEN - \u0000-character sequences (e.g. '\u0000\u0000\u0000')
//2)WHITESPACE_CHARACTER_TOKEN - any whitespace/new-line character sequences (e.g. '\n  \r\t   \f')
//3)CHARACTER_TOKEN - any character sequence which don't belong to groups 1 and 2 (e.g. 'abcdef1234@@#$%^')
Tokenizer.prototype._appendCharToCurrentCharacterToken = function (type, ch) {
    if (this.currentCharacterToken && this.currentCharacterToken.type !== type)
        this._emitCurrentCharacterToken();

    if (this.currentCharacterToken)
        this.currentCharacterToken.chars += ch;

    else
        this._createCharacterToken(type, ch);
};

Tokenizer.prototype._emitCodePoint = function (cp) {
    var type = Tokenizer.CHARACTER_TOKEN;

    if (isWhitespace(cp))
        type = Tokenizer.WHITESPACE_CHARACTER_TOKEN;

    else if (cp === $.NULL)
        type = Tokenizer.NULL_CHARACTER_TOKEN;

    this._appendCharToCurrentCharacterToken(type, toChar(cp));
};

Tokenizer.prototype._emitSeveralCodePoints = function (codePoints) {
    for (var i = 0; i < codePoints.length; i++)
        this._emitCodePoint(codePoints[i]);
};

//NOTE: used then we emit character explicitly. This is always a non-whitespace and a non-null character.
//So we can avoid additional checks here.
Tokenizer.prototype._emitChar = function (ch) {
    this._appendCharToCurrentCharacterToken(Tokenizer.CHARACTER_TOKEN, ch);
};

//Character reference tokenization
Tokenizer.prototype._consumeNumericEntity = function (isHex) {
    var digits = '',
        nextCp = void 0;

    do {
        digits += toChar(this._consume());
        nextCp = this._lookahead();
    } while (nextCp !== $.EOF && isDigit(nextCp, isHex));

    if (this._lookahead() === $.SEMICOLON)
        this._consume();

    var referencedCp = parseInt(digits, isHex ? 16 : 10),
        replacement = NUMERIC_ENTITY_REPLACEMENTS[referencedCp];

    if (replacement)
        return replacement;

    if (isReservedCodePoint(referencedCp))
        return $.REPLACEMENT_CHARACTER;

    return referencedCp;
};

Tokenizer.prototype._consumeNamedEntity = function (startCp, inAttr) {
    var referencedCodePoints = null,
        entityCodePointsCount = 0,
        cp = startCp,
        leaf = NAMED_ENTITY_TRIE[cp],
        consumedCount = 1,
        semicolonTerminated = false;

    for (; leaf && cp !== $.EOF; cp = this._consume(), consumedCount++, leaf = leaf.l && leaf.l[cp]) {
        if (leaf.c) {
            //NOTE: we have at least one named reference match. But we don't stop lookup at this point,
            //because longer matches still can be found (e.g. '&not' and '&notin;') except the case
            //then found match is terminated by semicolon.
            referencedCodePoints = leaf.c;
            entityCodePointsCount = consumedCount;

            if (cp === $.SEMICOLON) {
                semicolonTerminated = true;
                break;
            }
        }
    }

    if (referencedCodePoints) {
        if (!semicolonTerminated) {
            //NOTE: unconsume excess (e.g. 'it' in '&notit')
            this._unconsumeSeveral(consumedCount - entityCodePointsCount);

            //NOTE: If the character reference is being consumed as part of an attribute and the next character
            //is either a U+003D EQUALS SIGN character (=) or an alphanumeric ASCII character, then, for historical
            //reasons, all the characters that were matched after the U+0026 AMPERSAND character (&) must be
            //unconsumed, and nothing is returned.
            //However, if this next character is in fact a U+003D EQUALS SIGN character (=), then this is a
            //parse error, because some legacy user agents will misinterpret the markup in those cases.
            //(see: http://www.whatwg.org/specs/web-apps/current-work/multipage/tokenization.html#tokenizing-character-references)
            if (inAttr) {
                var nextCp = this._lookahead();

                if (nextCp === $.EQUALS_SIGN || isAsciiAlphaNumeric(nextCp)) {
                    this._unconsumeSeveral(entityCodePointsCount);
                    return null;
                }
            }
        }

        return referencedCodePoints;
    }

    this._unconsumeSeveral(consumedCount);

    return null;
};

Tokenizer.prototype._consumeCharacterReference = function (startCp, inAttr) {
    if (isWhitespace(startCp) || startCp === $.GREATER_THAN_SIGN ||
        startCp === $.AMPERSAND || startCp === this.additionalAllowedCp || startCp === $.EOF) {
        //NOTE: not a character reference. No characters are consumed, and nothing is returned.
        this._unconsume();
        return null;
    }

    if (startCp === $.NUMBER_SIGN) {
        //NOTE: we have a numeric entity candidate, now we should determine if it's hex or decimal
        var isHex = false,
            nextCp = this._lookahead();

        if (nextCp === $.LATIN_SMALL_X || nextCp === $.LATIN_CAPITAL_X) {
            this._consume();
            isHex = true;
        }

        nextCp = this._lookahead();

        //NOTE: if we have at least one digit this is a numeric entity for sure, so we consume it
        if (nextCp !== $.EOF && isDigit(nextCp, isHex))
            return [this._consumeNumericEntity(isHex)];

        //NOTE: otherwise this is a bogus number entity and a parse error. Unconsume the number sign
        //and the 'x'-character if appropriate.
        this._unconsumeSeveral(isHex ? 2 : 1);
        return null;
    }

    return this._consumeNamedEntity(startCp, inAttr);
};

//State machine
var _ = Tokenizer.prototype;

//12.2.4.1 Data state
//------------------------------------------------------------------
_[DATA_STATE] = function dataState(cp) {
    if (cp === $.AMPERSAND)
        this.state = CHARACTER_REFERENCE_IN_DATA_STATE;

    else if (cp === $.LESS_THAN_SIGN)
        this.state = TAG_OPEN_STATE;

    else if (cp === $.NULL)
        this._emitCodePoint(cp);

    else if (cp === $.EOF)
        this._emitEOFToken();

    else
        this._emitCodePoint(cp);
};


//12.2.4.2 Character reference in data state
//------------------------------------------------------------------
_[CHARACTER_REFERENCE_IN_DATA_STATE] = function characterReferenceInDataState(cp) {
    this.additionalAllowedCp = void 0;

    var referencedCodePoints = this._consumeCharacterReference(cp, false);

    if (!this._ensureHibernation()) {
        if (referencedCodePoints)
            this._emitSeveralCodePoints(referencedCodePoints);

        else
            this._emitChar('&');

        this.state = DATA_STATE;
    }
};


//12.2.4.3 RCDATA state
//------------------------------------------------------------------
_[RCDATA_STATE] = function rcdataState(cp) {
    if (cp === $.AMPERSAND)
        this.state = CHARACTER_REFERENCE_IN_RCDATA_STATE;

    else if (cp === $.LESS_THAN_SIGN)
        this.state = RCDATA_LESS_THAN_SIGN_STATE;

    else if (cp === $.NULL)
        this._emitChar(UNICODE.REPLACEMENT_CHARACTER);

    else if (cp === $.EOF)
        this._emitEOFToken();

    else
        this._emitCodePoint(cp);
};


//12.2.4.4 Character reference in RCDATA state
//------------------------------------------------------------------
_[CHARACTER_REFERENCE_IN_RCDATA_STATE] = function characterReferenceInRcdataState(cp) {
    this.additionalAllowedCp = void 0;

    var referencedCodePoints = this._consumeCharacterReference(cp, false);

    if (!this._ensureHibernation()) {
        if (referencedCodePoints)
            this._emitSeveralCodePoints(referencedCodePoints);

        else
            this._emitChar('&');

        this.state = RCDATA_STATE;
    }
};


//12.2.4.5 RAWTEXT state
//------------------------------------------------------------------
_[RAWTEXT_STATE] = function rawtextState(cp) {
    if (cp === $.LESS_THAN_SIGN)
        this.state = RAWTEXT_LESS_THAN_SIGN_STATE;

    else if (cp === $.NULL)
        this._emitChar(UNICODE.REPLACEMENT_CHARACTER);

    else if (cp === $.EOF)
        this._emitEOFToken();

    else
        this._emitCodePoint(cp);
};


//12.2.4.6 Script data state
//------------------------------------------------------------------
_[SCRIPT_DATA_STATE] = function scriptDataState(cp) {
    if (cp === $.LESS_THAN_SIGN)
        this.state = SCRIPT_DATA_LESS_THAN_SIGN_STATE;

    else if (cp === $.NULL)
        this._emitChar(UNICODE.REPLACEMENT_CHARACTER);

    else if (cp === $.EOF)
        this._emitEOFToken();

    else
        this._emitCodePoint(cp);
};


//12.2.4.7 PLAINTEXT state
//------------------------------------------------------------------
_[PLAINTEXT_STATE] = function plaintextState(cp) {
    if (cp === $.NULL)
        this._emitChar(UNICODE.REPLACEMENT_CHARACTER);

    else if (cp === $.EOF)
        this._emitEOFToken();

    else
        this._emitCodePoint(cp);
};


//12.2.4.8 Tag open state
//------------------------------------------------------------------
_[TAG_OPEN_STATE] = function tagOpenState(cp) {
    if (cp === $.EXCLAMATION_MARK)
        this.state = MARKUP_DECLARATION_OPEN_STATE;

    else if (cp === $.SOLIDUS)
        this.state = END_TAG_OPEN_STATE;

    else if (isAsciiUpper(cp)) {
        this._createStartTagToken(toAsciiLowerChar(cp));
        this.state = TAG_NAME_STATE;
    }

    else if (isAsciiLower(cp)) {
        this._createStartTagToken(toChar(cp));
        this.state = TAG_NAME_STATE;
    }

    else if (cp === $.QUESTION_MARK)
        this._reconsumeInState(BOGUS_COMMENT_STATE);

    else {
        this._emitChar('<');
        this._reconsumeInState(DATA_STATE);
    }
};


//12.2.4.9 End tag open state
//------------------------------------------------------------------
_[END_TAG_OPEN_STATE] = function endTagOpenState(cp) {
    if (isAsciiUpper(cp)) {
        this._createEndTagToken(toAsciiLowerChar(cp));
        this.state = TAG_NAME_STATE;
    }

    else if (isAsciiLower(cp)) {
        this._createEndTagToken(toChar(cp));
        this.state = TAG_NAME_STATE;
    }

    else if (cp === $.GREATER_THAN_SIGN)
        this.state = DATA_STATE;

    else if (cp === $.EOF) {
        this._reconsumeInState(DATA_STATE);
        this._emitChar('<');
        this._emitChar('/');
    }

    else
        this._reconsumeInState(BOGUS_COMMENT_STATE);
};


//12.2.4.10 Tag name state
//------------------------------------------------------------------
_[TAG_NAME_STATE] = function tagNameState(cp) {
    if (isWhitespace(cp))
        this.state = BEFORE_ATTRIBUTE_NAME_STATE;

    else if (cp === $.SOLIDUS)
        this.state = SELF_CLOSING_START_TAG_STATE;

    else if (cp === $.GREATER_THAN_SIGN) {
        this.state = DATA_STATE;
        this._emitCurrentToken();
    }

    else if (isAsciiUpper(cp))
        this.currentToken.tagName += toAsciiLowerChar(cp);

    else if (cp === $.NULL)
        this.currentToken.tagName += UNICODE.REPLACEMENT_CHARACTER;

    else if (cp === $.EOF)
        this._reconsumeInState(DATA_STATE);

    else
        this.currentToken.tagName += toChar(cp);
};


//12.2.4.11 RCDATA less-than sign state
//------------------------------------------------------------------
_[RCDATA_LESS_THAN_SIGN_STATE] = function rcdataLessThanSignState(cp) {
    if (cp === $.SOLIDUS) {
        this.tempBuff = [];
        this.state = RCDATA_END_TAG_OPEN_STATE;
    }

    else {
        this._emitChar('<');
        this._reconsumeInState(RCDATA_STATE);
    }
};


//12.2.4.12 RCDATA end tag open state
//------------------------------------------------------------------
_[RCDATA_END_TAG_OPEN_STATE] = function rcdataEndTagOpenState(cp) {
    if (isAsciiUpper(cp)) {
        this._createEndTagToken(toAsciiLowerChar(cp));
        this.tempBuff.push(cp);
        this.state = RCDATA_END_TAG_NAME_STATE;
    }

    else if (isAsciiLower(cp)) {
        this._createEndTagToken(toChar(cp));
        this.tempBuff.push(cp);
        this.state = RCDATA_END_TAG_NAME_STATE;
    }

    else {
        this._emitChar('<');
        this._emitChar('/');
        this._reconsumeInState(RCDATA_STATE);
    }
};


//12.2.4.13 RCDATA end tag name state
//------------------------------------------------------------------
_[RCDATA_END_TAG_NAME_STATE] = function rcdataEndTagNameState(cp) {
    if (isAsciiUpper(cp)) {
        this.currentToken.tagName += toAsciiLowerChar(cp);
        this.tempBuff.push(cp);
    }

    else if (isAsciiLower(cp)) {
        this.currentToken.tagName += toChar(cp);
        this.tempBuff.push(cp);
    }

    else {
        if (this._isAppropriateEndTagToken()) {
            if (isWhitespace(cp)) {
                this.state = BEFORE_ATTRIBUTE_NAME_STATE;
                return;
            }

            if (cp === $.SOLIDUS) {
                this.state = SELF_CLOSING_START_TAG_STATE;
                return;
            }

            if (cp === $.GREATER_THAN_SIGN) {
                this.state = DATA_STATE;
                this._emitCurrentToken();
                return;
            }
        }

        this._emitChar('<');
        this._emitChar('/');
        this._emitSeveralCodePoints(this.tempBuff);
        this._reconsumeInState(RCDATA_STATE);
    }
};


//12.2.4.14 RAWTEXT less-than sign state
//------------------------------------------------------------------
_[RAWTEXT_LESS_THAN_SIGN_STATE] = function rawtextLessThanSignState(cp) {
    if (cp === $.SOLIDUS) {
        this.tempBuff = [];
        this.state = RAWTEXT_END_TAG_OPEN_STATE;
    }

    else {
        this._emitChar('<');
        this._reconsumeInState(RAWTEXT_STATE);
    }
};


//12.2.4.15 RAWTEXT end tag open state
//------------------------------------------------------------------
_[RAWTEXT_END_TAG_OPEN_STATE] = function rawtextEndTagOpenState(cp) {
    if (isAsciiUpper(cp)) {
        this._createEndTagToken(toAsciiLowerChar(cp));
        this.tempBuff.push(cp);
        this.state = RAWTEXT_END_TAG_NAME_STATE;
    }

    else if (isAsciiLower(cp)) {
        this._createEndTagToken(toChar(cp));
        this.tempBuff.push(cp);
        this.state = RAWTEXT_END_TAG_NAME_STATE;
    }

    else {
        this._emitChar('<');
        this._emitChar('/');
        this._reconsumeInState(RAWTEXT_STATE);
    }
};


//12.2.4.16 RAWTEXT end tag name state
//------------------------------------------------------------------
_[RAWTEXT_END_TAG_NAME_STATE] = function rawtextEndTagNameState(cp) {
    if (isAsciiUpper(cp)) {
        this.currentToken.tagName += toAsciiLowerChar(cp);
        this.tempBuff.push(cp);
    }

    else if (isAsciiLower(cp)) {
        this.currentToken.tagName += toChar(cp);
        this.tempBuff.push(cp);
    }

    else {
        if (this._isAppropriateEndTagToken()) {
            if (isWhitespace(cp)) {
                this.state = BEFORE_ATTRIBUTE_NAME_STATE;
                return;
            }

            if (cp === $.SOLIDUS) {
                this.state = SELF_CLOSING_START_TAG_STATE;
                return;
            }

            if (cp === $.GREATER_THAN_SIGN) {
                this._emitCurrentToken();
                this.state = DATA_STATE;
                return;
            }
        }

        this._emitChar('<');
        this._emitChar('/');
        this._emitSeveralCodePoints(this.tempBuff);
        this._reconsumeInState(RAWTEXT_STATE);
    }
};


//12.2.4.17 Script data less-than sign state
//------------------------------------------------------------------
_[SCRIPT_DATA_LESS_THAN_SIGN_STATE] = function scriptDataLessThanSignState(cp) {
    if (cp === $.SOLIDUS) {
        this.tempBuff = [];
        this.state = SCRIPT_DATA_END_TAG_OPEN_STATE;
    }

    else if (cp === $.EXCLAMATION_MARK) {
        this.state = SCRIPT_DATA_ESCAPE_START_STATE;
        this._emitChar('<');
        this._emitChar('!');
    }

    else {
        this._emitChar('<');
        this._reconsumeInState(SCRIPT_DATA_STATE);
    }
};


//12.2.4.18 Script data end tag open state
//------------------------------------------------------------------
_[SCRIPT_DATA_END_TAG_OPEN_STATE] = function scriptDataEndTagOpenState(cp) {
    if (isAsciiUpper(cp)) {
        this._createEndTagToken(toAsciiLowerChar(cp));
        this.tempBuff.push(cp);
        this.state = SCRIPT_DATA_END_TAG_NAME_STATE;
    }

    else if (isAsciiLower(cp)) {
        this._createEndTagToken(toChar(cp));
        this.tempBuff.push(cp);
        this.state = SCRIPT_DATA_END_TAG_NAME_STATE;
    }

    else {
        this._emitChar('<');
        this._emitChar('/');
        this._reconsumeInState(SCRIPT_DATA_STATE);
    }
};


//12.2.4.19 Script data end tag name state
//------------------------------------------------------------------
_[SCRIPT_DATA_END_TAG_NAME_STATE] = function scriptDataEndTagNameState(cp) {
    if (isAsciiUpper(cp)) {
        this.currentToken.tagName += toAsciiLowerChar(cp);
        this.tempBuff.push(cp);
    }

    else if (isAsciiLower(cp)) {
        this.currentToken.tagName += toChar(cp);
        this.tempBuff.push(cp);
    }

    else {
        if (this._isAppropriateEndTagToken()) {
            if (isWhitespace(cp)) {
                this.state = BEFORE_ATTRIBUTE_NAME_STATE;
                return;
            }

            else if (cp === $.SOLIDUS) {
                this.state = SELF_CLOSING_START_TAG_STATE;
                return;
            }

            else if (cp === $.GREATER_THAN_SIGN) {
                this._emitCurrentToken();
                this.state = DATA_STATE;
                return;
            }
        }

        this._emitChar('<');
        this._emitChar('/');
        this._emitSeveralCodePoints(this.tempBuff);
        this._reconsumeInState(SCRIPT_DATA_STATE);
    }
};


//12.2.4.20 Script data escape start state
//------------------------------------------------------------------
_[SCRIPT_DATA_ESCAPE_START_STATE] = function scriptDataEscapeStartState(cp) {
    if (cp === $.HYPHEN_MINUS) {
        this.state = SCRIPT_DATA_ESCAPE_START_DASH_STATE;
        this._emitChar('-');
    }

    else
        this._reconsumeInState(SCRIPT_DATA_STATE);
};


//12.2.4.21 Script data escape start dash state
//------------------------------------------------------------------
_[SCRIPT_DATA_ESCAPE_START_DASH_STATE] = function scriptDataEscapeStartDashState(cp) {
    if (cp === $.HYPHEN_MINUS) {
        this.state = SCRIPT_DATA_ESCAPED_DASH_DASH_STATE;
        this._emitChar('-');
    }

    else
        this._reconsumeInState(SCRIPT_DATA_STATE);
};


//12.2.4.22 Script data escaped state
//------------------------------------------------------------------
_[SCRIPT_DATA_ESCAPED_STATE] = function scriptDataEscapedState(cp) {
    if (cp === $.HYPHEN_MINUS) {
        this.state = SCRIPT_DATA_ESCAPED_DASH_STATE;
        this._emitChar('-');
    }

    else if (cp === $.LESS_THAN_SIGN)
        this.state = SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN_STATE;

    else if (cp === $.NULL)
        this._emitChar(UNICODE.REPLACEMENT_CHARACTER);

    else if (cp === $.EOF)
        this._reconsumeInState(DATA_STATE);

    else
        this._emitCodePoint(cp);
};


//12.2.4.23 Script data escaped dash state
//------------------------------------------------------------------
_[SCRIPT_DATA_ESCAPED_DASH_STATE] = function scriptDataEscapedDashState(cp) {
    if (cp === $.HYPHEN_MINUS) {
        this.state = SCRIPT_DATA_ESCAPED_DASH_DASH_STATE;
        this._emitChar('-');
    }

    else if (cp === $.LESS_THAN_SIGN)
        this.state = SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN_STATE;

    else if (cp === $.NULL) {
        this.state = SCRIPT_DATA_ESCAPED_STATE;
        this._emitChar(UNICODE.REPLACEMENT_CHARACTER);
    }

    else if (cp === $.EOF)
        this._reconsumeInState(DATA_STATE);

    else {
        this.state = SCRIPT_DATA_ESCAPED_STATE;
        this._emitCodePoint(cp);
    }
};


//12.2.4.24 Script data escaped dash dash state
//------------------------------------------------------------------
_[SCRIPT_DATA_ESCAPED_DASH_DASH_STATE] = function scriptDataEscapedDashDashState(cp) {
    if (cp === $.HYPHEN_MINUS)
        this._emitChar('-');

    else if (cp === $.LESS_THAN_SIGN)
        this.state = SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN_STATE;

    else if (cp === $.GREATER_THAN_SIGN) {
        this.state = SCRIPT_DATA_STATE;
        this._emitChar('>');
    }

    else if (cp === $.NULL) {
        this.state = SCRIPT_DATA_ESCAPED_STATE;
        this._emitChar(UNICODE.REPLACEMENT_CHARACTER);
    }

    else if (cp === $.EOF)
        this._reconsumeInState(DATA_STATE);

    else {
        this.state = SCRIPT_DATA_ESCAPED_STATE;
        this._emitCodePoint(cp);
    }
};


//12.2.4.25 Script data escaped less-than sign state
//------------------------------------------------------------------
_[SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN_STATE] = function scriptDataEscapedLessThanSignState(cp) {
    if (cp === $.SOLIDUS) {
        this.tempBuff = [];
        this.state = SCRIPT_DATA_ESCAPED_END_TAG_OPEN_STATE;
    }

    else if (isAsciiUpper(cp)) {
        this.tempBuff = [];
        this.tempBuff.push(toAsciiLowerCodePoint(cp));
        this.state = SCRIPT_DATA_DOUBLE_ESCAPE_START_STATE;
        this._emitChar('<');
        this._emitCodePoint(cp);
    }

    else if (isAsciiLower(cp)) {
        this.tempBuff = [];
        this.tempBuff.push(cp);
        this.state = SCRIPT_DATA_DOUBLE_ESCAPE_START_STATE;
        this._emitChar('<');
        this._emitCodePoint(cp);
    }

    else {
        this._emitChar('<');
        this._reconsumeInState(SCRIPT_DATA_ESCAPED_STATE);
    }
};


//12.2.4.26 Script data escaped end tag open state
//------------------------------------------------------------------
_[SCRIPT_DATA_ESCAPED_END_TAG_OPEN_STATE] = function scriptDataEscapedEndTagOpenState(cp) {
    if (isAsciiUpper(cp)) {
        this._createEndTagToken(toAsciiLowerChar(cp));
        this.tempBuff.push(cp);
        this.state = SCRIPT_DATA_ESCAPED_END_TAG_NAME_STATE;
    }

    else if (isAsciiLower(cp)) {
        this._createEndTagToken(toChar(cp));
        this.tempBuff.push(cp);
        this.state = SCRIPT_DATA_ESCAPED_END_TAG_NAME_STATE;
    }

    else {
        this._emitChar('<');
        this._emitChar('/');
        this._reconsumeInState(SCRIPT_DATA_ESCAPED_STATE);
    }
};


//12.2.4.27 Script data escaped end tag name state
//------------------------------------------------------------------
_[SCRIPT_DATA_ESCAPED_END_TAG_NAME_STATE] = function scriptDataEscapedEndTagNameState(cp) {
    if (isAsciiUpper(cp)) {
        this.currentToken.tagName += toAsciiLowerChar(cp);
        this.tempBuff.push(cp);
    }

    else if (isAsciiLower(cp)) {
        this.currentToken.tagName += toChar(cp);
        this.tempBuff.push(cp);
    }

    else {
        if (this._isAppropriateEndTagToken()) {
            if (isWhitespace(cp)) {
                this.state = BEFORE_ATTRIBUTE_NAME_STATE;
                return;
            }

            if (cp === $.SOLIDUS) {
                this.state = SELF_CLOSING_START_TAG_STATE;
                return;
            }

            if (cp === $.GREATER_THAN_SIGN) {
                this._emitCurrentToken();
                this.state = DATA_STATE;
                return;
            }
        }

        this._emitChar('<');
        this._emitChar('/');
        this._emitSeveralCodePoints(this.tempBuff);
        this._reconsumeInState(SCRIPT_DATA_ESCAPED_STATE);
    }
};


//12.2.4.28 Script data double escape start state
//------------------------------------------------------------------
_[SCRIPT_DATA_DOUBLE_ESCAPE_START_STATE] = function scriptDataDoubleEscapeStartState(cp) {
    if (isWhitespace(cp) || cp === $.SOLIDUS || cp === $.GREATER_THAN_SIGN) {
        this.state = this.isTempBufferEqualToScriptString() ? SCRIPT_DATA_DOUBLE_ESCAPED_STATE : SCRIPT_DATA_ESCAPED_STATE;
        this._emitCodePoint(cp);
    }

    else if (isAsciiUpper(cp)) {
        this.tempBuff.push(toAsciiLowerCodePoint(cp));
        this._emitCodePoint(cp);
    }

    else if (isAsciiLower(cp)) {
        this.tempBuff.push(cp);
        this._emitCodePoint(cp);
    }

    else
        this._reconsumeInState(SCRIPT_DATA_ESCAPED_STATE);
};


//12.2.4.29 Script data double escaped state
//------------------------------------------------------------------
_[SCRIPT_DATA_DOUBLE_ESCAPED_STATE] = function scriptDataDoubleEscapedState(cp) {
    if (cp === $.HYPHEN_MINUS) {
        this.state = SCRIPT_DATA_DOUBLE_ESCAPED_DASH_STATE;
        this._emitChar('-');
    }

    else if (cp === $.LESS_THAN_SIGN) {
        this.state = SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN_STATE;
        this._emitChar('<');
    }

    else if (cp === $.NULL)
        this._emitChar(UNICODE.REPLACEMENT_CHARACTER);

    else if (cp === $.EOF)
        this._reconsumeInState(DATA_STATE);

    else
        this._emitCodePoint(cp);
};


//12.2.4.30 Script data double escaped dash state
//------------------------------------------------------------------
_[SCRIPT_DATA_DOUBLE_ESCAPED_DASH_STATE] = function scriptDataDoubleEscapedDashState(cp) {
    if (cp === $.HYPHEN_MINUS) {
        this.state = SCRIPT_DATA_DOUBLE_ESCAPED_DASH_DASH_STATE;
        this._emitChar('-');
    }

    else if (cp === $.LESS_THAN_SIGN) {
        this.state = SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN_STATE;
        this._emitChar('<');
    }

    else if (cp === $.NULL) {
        this.state = SCRIPT_DATA_DOUBLE_ESCAPED_STATE;
        this._emitChar(UNICODE.REPLACEMENT_CHARACTER);
    }

    else if (cp === $.EOF)
        this._reconsumeInState(DATA_STATE);

    else {
        this.state = SCRIPT_DATA_DOUBLE_ESCAPED_STATE;
        this._emitCodePoint(cp);
    }
};


//12.2.4.31 Script data double escaped dash dash state
//------------------------------------------------------------------
_[SCRIPT_DATA_DOUBLE_ESCAPED_DASH_DASH_STATE] = function scriptDataDoubleEscapedDashDashState(cp) {
    if (cp === $.HYPHEN_MINUS)
        this._emitChar('-');

    else if (cp === $.LESS_THAN_SIGN) {
        this.state = SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN_STATE;
        this._emitChar('<');
    }

    else if (cp === $.GREATER_THAN_SIGN) {
        this.state = SCRIPT_DATA_STATE;
        this._emitChar('>');
    }

    else if (cp === $.NULL) {
        this.state = SCRIPT_DATA_DOUBLE_ESCAPED_STATE;
        this._emitChar(UNICODE.REPLACEMENT_CHARACTER);
    }

    else if (cp === $.EOF)
        this._reconsumeInState(DATA_STATE);

    else {
        this.state = SCRIPT_DATA_DOUBLE_ESCAPED_STATE;
        this._emitCodePoint(cp);
    }
};


//12.2.4.32 Script data double escaped less-than sign state
//------------------------------------------------------------------
_[SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN_STATE] = function scriptDataDoubleEscapedLessThanSignState(cp) {
    if (cp === $.SOLIDUS) {
        this.tempBuff = [];
        this.state = SCRIPT_DATA_DOUBLE_ESCAPE_END_STATE;
        this._emitChar('/');
    }

    else
        this._reconsumeInState(SCRIPT_DATA_DOUBLE_ESCAPED_STATE);
};


//12.2.4.33 Script data double escape end state
//------------------------------------------------------------------
_[SCRIPT_DATA_DOUBLE_ESCAPE_END_STATE] = function scriptDataDoubleEscapeEndState(cp) {
    if (isWhitespace(cp) || cp === $.SOLIDUS || cp === $.GREATER_THAN_SIGN) {
        this.state = this.isTempBufferEqualToScriptString() ? SCRIPT_DATA_ESCAPED_STATE : SCRIPT_DATA_DOUBLE_ESCAPED_STATE;

        this._emitCodePoint(cp);
    }

    else if (isAsciiUpper(cp)) {
        this.tempBuff.push(toAsciiLowerCodePoint(cp));
        this._emitCodePoint(cp);
    }

    else if (isAsciiLower(cp)) {
        this.tempBuff.push(cp);
        this._emitCodePoint(cp);
    }

    else
        this._reconsumeInState(SCRIPT_DATA_DOUBLE_ESCAPED_STATE);
};


//12.2.4.34 Before attribute name state
//------------------------------------------------------------------
_[BEFORE_ATTRIBUTE_NAME_STATE] = function beforeAttributeNameState(cp) {
    if (isWhitespace(cp))
        return;

    if (cp === $.SOLIDUS)
        this.state = SELF_CLOSING_START_TAG_STATE;

    else if (cp === $.GREATER_THAN_SIGN) {
        this.state = DATA_STATE;
        this._emitCurrentToken();
    }

    else if (isAsciiUpper(cp)) {
        this._createAttr(toAsciiLowerChar(cp));
        this.state = ATTRIBUTE_NAME_STATE;
    }

    else if (cp === $.NULL) {
        this._createAttr(UNICODE.REPLACEMENT_CHARACTER);
        this.state = ATTRIBUTE_NAME_STATE;
    }

    else if (cp === $.QUOTATION_MARK || cp === $.APOSTROPHE || cp === $.LESS_THAN_SIGN || cp === $.EQUALS_SIGN) {
        this._createAttr(toChar(cp));
        this.state = ATTRIBUTE_NAME_STATE;
    }

    else if (cp === $.EOF)
        this._reconsumeInState(DATA_STATE);

    else {
        this._createAttr(toChar(cp));
        this.state = ATTRIBUTE_NAME_STATE;
    }
};


//12.2.4.35 Attribute name state
//------------------------------------------------------------------
_[ATTRIBUTE_NAME_STATE] = function attributeNameState(cp) {
    if (isWhitespace(cp))
        this._leaveAttrName(AFTER_ATTRIBUTE_NAME_STATE);

    else if (cp === $.SOLIDUS)
        this._leaveAttrName(SELF_CLOSING_START_TAG_STATE);

    else if (cp === $.EQUALS_SIGN)
        this._leaveAttrName(BEFORE_ATTRIBUTE_VALUE_STATE);

    else if (cp === $.GREATER_THAN_SIGN) {
        this._leaveAttrName(DATA_STATE);
        this._emitCurrentToken();
    }

    else if (isAsciiUpper(cp))
        this.currentAttr.name += toAsciiLowerChar(cp);

    else if (cp === $.QUOTATION_MARK || cp === $.APOSTROPHE || cp === $.LESS_THAN_SIGN)
        this.currentAttr.name += toChar(cp);

    else if (cp === $.NULL)
        this.currentAttr.name += UNICODE.REPLACEMENT_CHARACTER;

    else if (cp === $.EOF)
        this._reconsumeInState(DATA_STATE);

    else
        this.currentAttr.name += toChar(cp);
};


//12.2.4.36 After attribute name state
//------------------------------------------------------------------
_[AFTER_ATTRIBUTE_NAME_STATE] = function afterAttributeNameState(cp) {
    if (isWhitespace(cp))
        return;

    if (cp === $.SOLIDUS)
        this.state = SELF_CLOSING_START_TAG_STATE;

    else if (cp === $.EQUALS_SIGN)
        this.state = BEFORE_ATTRIBUTE_VALUE_STATE;

    else if (cp === $.GREATER_THAN_SIGN) {
        this.state = DATA_STATE;
        this._emitCurrentToken();
    }

    else if (isAsciiUpper(cp)) {
        this._createAttr(toAsciiLowerChar(cp));
        this.state = ATTRIBUTE_NAME_STATE;
    }

    else if (cp === $.NULL) {
        this._createAttr(UNICODE.REPLACEMENT_CHARACTER);
        this.state = ATTRIBUTE_NAME_STATE;
    }

    else if (cp === $.QUOTATION_MARK || cp === $.APOSTROPHE || cp === $.LESS_THAN_SIGN) {
        this._createAttr(toChar(cp));
        this.state = ATTRIBUTE_NAME_STATE;
    }

    else if (cp === $.EOF)
        this._reconsumeInState(DATA_STATE);

    else {
        this._createAttr(toChar(cp));
        this.state = ATTRIBUTE_NAME_STATE;
    }
};


//12.2.4.37 Before attribute value state
//------------------------------------------------------------------
_[BEFORE_ATTRIBUTE_VALUE_STATE] = function beforeAttributeValueState(cp) {
    if (isWhitespace(cp))
        return;

    if (cp === $.QUOTATION_MARK)
        this.state = ATTRIBUTE_VALUE_DOUBLE_QUOTED_STATE;

    else if (cp === $.AMPERSAND)
        this._reconsumeInState(ATTRIBUTE_VALUE_UNQUOTED_STATE);

    else if (cp === $.APOSTROPHE)
        this.state = ATTRIBUTE_VALUE_SINGLE_QUOTED_STATE;

    else if (cp === $.NULL) {
        this.currentAttr.value += UNICODE.REPLACEMENT_CHARACTER;
        this.state = ATTRIBUTE_VALUE_UNQUOTED_STATE;
    }

    else if (cp === $.GREATER_THAN_SIGN) {
        this.state = DATA_STATE;
        this._emitCurrentToken();
    }

    else if (cp === $.LESS_THAN_SIGN || cp === $.EQUALS_SIGN || cp === $.GRAVE_ACCENT) {
        this.currentAttr.value += toChar(cp);
        this.state = ATTRIBUTE_VALUE_UNQUOTED_STATE;
    }

    else if (cp === $.EOF)
        this._reconsumeInState(DATA_STATE);

    else {
        this.currentAttr.value += toChar(cp);
        this.state = ATTRIBUTE_VALUE_UNQUOTED_STATE;
    }
};


//12.2.4.38 Attribute value (double-quoted) state
//------------------------------------------------------------------
_[ATTRIBUTE_VALUE_DOUBLE_QUOTED_STATE] = function attributeValueDoubleQuotedState(cp) {
    if (cp === $.QUOTATION_MARK)
        this.state = AFTER_ATTRIBUTE_VALUE_QUOTED_STATE;

    else if (cp === $.AMPERSAND) {
        this.additionalAllowedCp = $.QUOTATION_MARK;
        this.returnState = this.state;
        this.state = CHARACTER_REFERENCE_IN_ATTRIBUTE_VALUE_STATE;
    }

    else if (cp === $.NULL)
        this.currentAttr.value += UNICODE.REPLACEMENT_CHARACTER;

    else if (cp === $.EOF)
        this._reconsumeInState(DATA_STATE);

    else
        this.currentAttr.value += toChar(cp);
};


//12.2.4.39 Attribute value (single-quoted) state
//------------------------------------------------------------------
_[ATTRIBUTE_VALUE_SINGLE_QUOTED_STATE] = function attributeValueSingleQuotedState(cp) {
    if (cp === $.APOSTROPHE)
        this.state = AFTER_ATTRIBUTE_VALUE_QUOTED_STATE;

    else if (cp === $.AMPERSAND) {
        this.additionalAllowedCp = $.APOSTROPHE;
        this.returnState = this.state;
        this.state = CHARACTER_REFERENCE_IN_ATTRIBUTE_VALUE_STATE;
    }

    else if (cp === $.NULL)
        this.currentAttr.value += UNICODE.REPLACEMENT_CHARACTER;

    else if (cp === $.EOF)
        this._reconsumeInState(DATA_STATE);

    else
        this.currentAttr.value += toChar(cp);
};


//12.2.4.40 Attribute value (unquoted) state
//------------------------------------------------------------------
_[ATTRIBUTE_VALUE_UNQUOTED_STATE] = function attributeValueUnquotedState(cp) {
    if (isWhitespace(cp))
        this._leaveAttrValue(BEFORE_ATTRIBUTE_NAME_STATE);

    else if (cp === $.AMPERSAND) {
        this.additionalAllowedCp = $.GREATER_THAN_SIGN;
        this.returnState = this.state;
        this.state = CHARACTER_REFERENCE_IN_ATTRIBUTE_VALUE_STATE;
    }

    else if (cp === $.GREATER_THAN_SIGN) {
        this._leaveAttrValue(DATA_STATE);
        this._emitCurrentToken();
    }

    else if (cp === $.NULL)
        this.currentAttr.value += UNICODE.REPLACEMENT_CHARACTER;

    else if (cp === $.QUOTATION_MARK || cp === $.APOSTROPHE || cp === $.LESS_THAN_SIGN ||
             cp === $.EQUALS_SIGN || cp === $.GRAVE_ACCENT)
        this.currentAttr.value += toChar(cp);

    else if (cp === $.EOF)
        this._reconsumeInState(DATA_STATE);

    else
        this.currentAttr.value += toChar(cp);
};


//12.2.4.41 Character reference in attribute value state
//------------------------------------------------------------------
_[CHARACTER_REFERENCE_IN_ATTRIBUTE_VALUE_STATE] = function characterReferenceInAttributeValueState(cp) {
    var referencedCodePoints = this._consumeCharacterReference(cp, true);

    if (!this._ensureHibernation()) {
        if (referencedCodePoints) {
            for (var i = 0; i < referencedCodePoints.length; i++)
                this.currentAttr.value += toChar(referencedCodePoints[i]);
        }
        else
            this.currentAttr.value += '&';

        this.state = this.returnState;
    }
};


//12.2.4.42 After attribute value (quoted) state
//------------------------------------------------------------------
_[AFTER_ATTRIBUTE_VALUE_QUOTED_STATE] = function afterAttributeValueQuotedState(cp) {
    if (isWhitespace(cp))
        this._leaveAttrValue(BEFORE_ATTRIBUTE_NAME_STATE);

    else if (cp === $.SOLIDUS)
        this._leaveAttrValue(SELF_CLOSING_START_TAG_STATE);

    else if (cp === $.GREATER_THAN_SIGN) {
        this._leaveAttrValue(DATA_STATE);
        this._emitCurrentToken();
    }

    else if (cp === $.EOF)
        this._reconsumeInState(DATA_STATE);

    else
        this._reconsumeInState(BEFORE_ATTRIBUTE_NAME_STATE);
};


//12.2.4.43 Self-closing start tag state
//------------------------------------------------------------------
_[SELF_CLOSING_START_TAG_STATE] = function selfClosingStartTagState(cp) {
    if (cp === $.GREATER_THAN_SIGN) {
        this.currentToken.selfClosing = true;
        this.state = DATA_STATE;
        this._emitCurrentToken();
    }

    else if (cp === $.EOF)
        this._reconsumeInState(DATA_STATE);

    else
        this._reconsumeInState(BEFORE_ATTRIBUTE_NAME_STATE);
};


//12.2.4.44 Bogus comment state
//------------------------------------------------------------------
_[BOGUS_COMMENT_STATE] = function bogusCommentState() {
    this._createCommentToken();
    this._reconsumeInState(BOGUS_COMMENT_STATE_CONTINUATION);
};

//HACK: to support streaming and make BOGUS_COMMENT_STATE reentrant we've
//introduced BOGUS_COMMENT_STATE_CONTINUATION state which will not produce
//comment token on each call.
_[BOGUS_COMMENT_STATE_CONTINUATION] = function bogusCommentStateContinuation(cp) {
    while (true) {
        if (cp === $.GREATER_THAN_SIGN) {
            this.state = DATA_STATE;
            break;
        }

        else if (cp === $.EOF) {
            this._reconsumeInState(DATA_STATE);
            break;
        }

        else {
            this.currentToken.data += cp === $.NULL ? UNICODE.REPLACEMENT_CHARACTER : toChar(cp);

            this._hibernationSnapshot();
            cp = this._consume();

            if (this._ensureHibernation())
                return;
        }
    }

    this._emitCurrentToken();
};

//12.2.4.45 Markup declaration open state
//------------------------------------------------------------------
_[MARKUP_DECLARATION_OPEN_STATE] = function markupDeclarationOpenState(cp) {
    var dashDashMatch = this._consumeSubsequentIfMatch($$.DASH_DASH_STRING, cp, true),
        doctypeMatch = !dashDashMatch && this._consumeSubsequentIfMatch($$.DOCTYPE_STRING, cp, false),
        cdataMatch = !dashDashMatch && !doctypeMatch &&
                     this.allowCDATA &&
                     this._consumeSubsequentIfMatch($$.CDATA_START_STRING, cp, true);

    if (!this._ensureHibernation()) {
        if (dashDashMatch) {
            this._createCommentToken();
            this.state = COMMENT_START_STATE;
        }

        else if (doctypeMatch)
            this.state = DOCTYPE_STATE;

        else if (cdataMatch)
            this.state = CDATA_SECTION_STATE;

        else
            this._reconsumeInState(BOGUS_COMMENT_STATE);
    }
};


//12.2.4.46 Comment start state
//------------------------------------------------------------------
_[COMMENT_START_STATE] = function commentStartState(cp) {
    if (cp === $.HYPHEN_MINUS)
        this.state = COMMENT_START_DASH_STATE;

    else if (cp === $.NULL) {
        this.currentToken.data += UNICODE.REPLACEMENT_CHARACTER;
        this.state = COMMENT_STATE;
    }

    else if (cp === $.GREATER_THAN_SIGN) {
        this.state = DATA_STATE;
        this._emitCurrentToken();
    }

    else if (cp === $.EOF) {
        this._emitCurrentToken();
        this._reconsumeInState(DATA_STATE);
    }

    else {
        this.currentToken.data += toChar(cp);
        this.state = COMMENT_STATE;
    }
};


//12.2.4.47 Comment start dash state
//------------------------------------------------------------------
_[COMMENT_START_DASH_STATE] = function commentStartDashState(cp) {
    if (cp === $.HYPHEN_MINUS)
        this.state = COMMENT_END_STATE;

    else if (cp === $.NULL) {
        this.currentToken.data += '-';
        this.currentToken.data += UNICODE.REPLACEMENT_CHARACTER;
        this.state = COMMENT_STATE;
    }

    else if (cp === $.GREATER_THAN_SIGN) {
        this.state = DATA_STATE;
        this._emitCurrentToken();
    }

    else if (cp === $.EOF) {
        this._emitCurrentToken();
        this._reconsumeInState(DATA_STATE);
    }

    else {
        this.currentToken.data += '-';
        this.currentToken.data += toChar(cp);
        this.state = COMMENT_STATE;
    }
};


//12.2.4.48 Comment state
//------------------------------------------------------------------
_[COMMENT_STATE] = function commentState(cp) {
    if (cp === $.HYPHEN_MINUS)
        this.state = COMMENT_END_DASH_STATE;

    else if (cp === $.NULL)
        this.currentToken.data += UNICODE.REPLACEMENT_CHARACTER;

    else if (cp === $.EOF) {
        this._emitCurrentToken();
        this._reconsumeInState(DATA_STATE);
    }

    else
        this.currentToken.data += toChar(cp);
};


//12.2.4.49 Comment end dash state
//------------------------------------------------------------------
_[COMMENT_END_DASH_STATE] = function commentEndDashState(cp) {
    if (cp === $.HYPHEN_MINUS)
        this.state = COMMENT_END_STATE;

    else if (cp === $.NULL) {
        this.currentToken.data += '-';
        this.currentToken.data += UNICODE.REPLACEMENT_CHARACTER;
        this.state = COMMENT_STATE;
    }

    else if (cp === $.EOF) {
        this._emitCurrentToken();
        this._reconsumeInState(DATA_STATE);
    }

    else {
        this.currentToken.data += '-';
        this.currentToken.data += toChar(cp);
        this.state = COMMENT_STATE;
    }
};


//12.2.4.50 Comment end state
//------------------------------------------------------------------
_[COMMENT_END_STATE] = function commentEndState(cp) {
    if (cp === $.GREATER_THAN_SIGN) {
        this.state = DATA_STATE;
        this._emitCurrentToken();
    }

    else if (cp === $.EXCLAMATION_MARK)
        this.state = COMMENT_END_BANG_STATE;

    else if (cp === $.HYPHEN_MINUS)
        this.currentToken.data += '-';

    else if (cp === $.NULL) {
        this.currentToken.data += '--';
        this.currentToken.data += UNICODE.REPLACEMENT_CHARACTER;
        this.state = COMMENT_STATE;
    }

    else if (cp === $.EOF) {
        this._reconsumeInState(DATA_STATE);
        this._emitCurrentToken();
    }

    else {
        this.currentToken.data += '--';
        this.currentToken.data += toChar(cp);
        this.state = COMMENT_STATE;
    }
};


//12.2.4.51 Comment end bang state
//------------------------------------------------------------------
_[COMMENT_END_BANG_STATE] = function commentEndBangState(cp) {
    if (cp === $.HYPHEN_MINUS) {
        this.currentToken.data += '--!';
        this.state = COMMENT_END_DASH_STATE;
    }

    else if (cp === $.GREATER_THAN_SIGN) {
        this.state = DATA_STATE;
        this._emitCurrentToken();
    }

    else if (cp === $.NULL) {
        this.currentToken.data += '--!';
        this.currentToken.data += UNICODE.REPLACEMENT_CHARACTER;
        this.state = COMMENT_STATE;
    }

    else if (cp === $.EOF) {
        this._emitCurrentToken();
        this._reconsumeInState(DATA_STATE);
    }

    else {
        this.currentToken.data += '--!';
        this.currentToken.data += toChar(cp);
        this.state = COMMENT_STATE;
    }
};


//12.2.4.52 DOCTYPE state
//------------------------------------------------------------------
_[DOCTYPE_STATE] = function doctypeState(cp) {
    if (isWhitespace(cp))
        this.state = BEFORE_DOCTYPE_NAME_STATE;

    else if (cp === $.EOF) {
        this._createDoctypeToken();
        this.currentToken.forceQuirks = true;
        this._emitCurrentToken();
        this._reconsumeInState(DATA_STATE);
    }

    else
        this._reconsumeInState(BEFORE_DOCTYPE_NAME_STATE);
};


//12.2.4.53 Before DOCTYPE name state
//------------------------------------------------------------------
_[BEFORE_DOCTYPE_NAME_STATE] = function beforeDoctypeNameState(cp) {
    if (isWhitespace(cp))
        return;

    if (isAsciiUpper(cp)) {
        this._createDoctypeToken(toAsciiLowerChar(cp));
        this.state = DOCTYPE_NAME_STATE;
    }

    else if (cp === $.GREATER_THAN_SIGN) {
        this._createDoctypeToken();
        this.currentToken.forceQuirks = true;
        this._emitCurrentToken();
        this.state = DATA_STATE;
    }

    else if (cp === $.EOF) {
        this._createDoctypeToken();
        this.currentToken.forceQuirks = true;
        this._emitCurrentToken();
        this._reconsumeInState(DATA_STATE);
    }

    else if (cp === $.NULL) {
        this._createDoctypeToken(UNICODE.REPLACEMENT_CHARACTER);
        this.state = DOCTYPE_NAME_STATE;
    }

    else {
        this._createDoctypeToken(toChar(cp));
        this.state = DOCTYPE_NAME_STATE;
    }
};


//12.2.4.54 DOCTYPE name state
//------------------------------------------------------------------
_[DOCTYPE_NAME_STATE] = function doctypeNameState(cp) {
    if (isWhitespace(cp))
        this.state = AFTER_DOCTYPE_NAME_STATE;

    else if (cp === $.GREATER_THAN_SIGN) {
        this._emitCurrentToken();
        this.state = DATA_STATE;
    }

    else if (isAsciiUpper(cp))
        this.currentToken.name += toAsciiLowerChar(cp);

    else if (cp === $.NULL)
        this.currentToken.name += UNICODE.REPLACEMENT_CHARACTER;

    else if (cp === $.EOF) {
        this.currentToken.forceQuirks = true;
        this._emitCurrentToken();
        this._reconsumeInState(DATA_STATE);
    }

    else
        this.currentToken.name += toChar(cp);
};


//12.2.4.55 After DOCTYPE name state
//------------------------------------------------------------------
_[AFTER_DOCTYPE_NAME_STATE] = function afterDoctypeNameState(cp) {
    if (isWhitespace(cp))
        return;

    if (cp === $.GREATER_THAN_SIGN) {
        this.state = DATA_STATE;
        this._emitCurrentToken();
    }

    else if (cp === $.EOF) {
        this.currentToken.forceQuirks = true;
        this._emitCurrentToken();
        this._reconsumeInState(DATA_STATE);
    }

    else {
        var publicMatch = this._consumeSubsequentIfMatch($$.PUBLIC_STRING, cp, false),
            systemMatch = !publicMatch && this._consumeSubsequentIfMatch($$.SYSTEM_STRING, cp, false);

        if (!this._ensureHibernation()) {
            if (publicMatch)
                this.state = AFTER_DOCTYPE_PUBLIC_KEYWORD_STATE;

            else if (systemMatch)
                this.state = AFTER_DOCTYPE_SYSTEM_KEYWORD_STATE;

            else {
                this.currentToken.forceQuirks = true;
                this.state = BOGUS_DOCTYPE_STATE;
            }
        }
    }
};


//12.2.4.56 After DOCTYPE public keyword state
//------------------------------------------------------------------
_[AFTER_DOCTYPE_PUBLIC_KEYWORD_STATE] = function afterDoctypePublicKeywordState(cp) {
    if (isWhitespace(cp))
        this.state = BEFORE_DOCTYPE_PUBLIC_IDENTIFIER_STATE;

    else if (cp === $.QUOTATION_MARK) {
        this.currentToken.publicId = '';
        this.state = DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED_STATE;
    }

    else if (cp === $.APOSTROPHE) {
        this.currentToken.publicId = '';
        this.state = DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED_STATE;
    }

    else if (cp === $.GREATER_THAN_SIGN) {
        this.currentToken.forceQuirks = true;
        this._emitCurrentToken();
        this.state = DATA_STATE;
    }

    else if (cp === $.EOF) {
        this.currentToken.forceQuirks = true;
        this._emitCurrentToken();
        this._reconsumeInState(DATA_STATE);
    }

    else {
        this.currentToken.forceQuirks = true;
        this.state = BOGUS_DOCTYPE_STATE;
    }
};


//12.2.4.57 Before DOCTYPE public identifier state
//------------------------------------------------------------------
_[BEFORE_DOCTYPE_PUBLIC_IDENTIFIER_STATE] = function beforeDoctypePublicIdentifierState(cp) {
    if (isWhitespace(cp))
        return;

    if (cp === $.QUOTATION_MARK) {
        this.currentToken.publicId = '';
        this.state = DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED_STATE;
    }

    else if (cp === $.APOSTROPHE) {
        this.currentToken.publicId = '';
        this.state = DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED_STATE;
    }

    else if (cp === $.GREATER_THAN_SIGN) {
        this.currentToken.forceQuirks = true;
        this._emitCurrentToken();
        this.state = DATA_STATE;
    }

    else if (cp === $.EOF) {
        this.currentToken.forceQuirks = true;
        this._emitCurrentToken();
        this._reconsumeInState(DATA_STATE);
    }

    else {
        this.currentToken.forceQuirks = true;
        this.state = BOGUS_DOCTYPE_STATE;
    }
};


//12.2.4.58 DOCTYPE public identifier (double-quoted) state
//------------------------------------------------------------------
_[DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED_STATE] = function doctypePublicIdentifierDoubleQuotedState(cp) {
    if (cp === $.QUOTATION_MARK)
        this.state = AFTER_DOCTYPE_PUBLIC_IDENTIFIER_STATE;

    else if (cp === $.NULL)
        this.currentToken.publicId += UNICODE.REPLACEMENT_CHARACTER;

    else if (cp === $.GREATER_THAN_SIGN) {
        this.currentToken.forceQuirks = true;
        this._emitCurrentToken();
        this.state = DATA_STATE;
    }

    else if (cp === $.EOF) {
        this.currentToken.forceQuirks = true;
        this._emitCurrentToken();
        this._reconsumeInState(DATA_STATE);
    }

    else
        this.currentToken.publicId += toChar(cp);
};


//12.2.4.59 DOCTYPE public identifier (single-quoted) state
//------------------------------------------------------------------
_[DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED_STATE] = function doctypePublicIdentifierSingleQuotedState(cp) {
    if (cp === $.APOSTROPHE)
        this.state = AFTER_DOCTYPE_PUBLIC_IDENTIFIER_STATE;

    else if (cp === $.NULL)
        this.currentToken.publicId += UNICODE.REPLACEMENT_CHARACTER;

    else if (cp === $.GREATER_THAN_SIGN) {
        this.currentToken.forceQuirks = true;
        this._emitCurrentToken();
        this.state = DATA_STATE;
    }

    else if (cp === $.EOF) {
        this.currentToken.forceQuirks = true;
        this._emitCurrentToken();
        this._reconsumeInState(DATA_STATE);
    }

    else
        this.currentToken.publicId += toChar(cp);
};


//12.2.4.60 After DOCTYPE public identifier state
//------------------------------------------------------------------
_[AFTER_DOCTYPE_PUBLIC_IDENTIFIER_STATE] = function afterDoctypePublicIdentifierState(cp) {
    if (isWhitespace(cp))
        this.state = BETWEEN_DOCTYPE_PUBLIC_AND_SYSTEM_IDENTIFIERS_STATE;

    else if (cp === $.GREATER_THAN_SIGN) {
        this._emitCurrentToken();
        this.state = DATA_STATE;
    }

    else if (cp === $.QUOTATION_MARK) {
        this.currentToken.systemId = '';
        this.state = DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED_STATE;
    }

    else if (cp === $.APOSTROPHE) {
        this.currentToken.systemId = '';
        this.state = DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED_STATE;
    }

    else if (cp === $.EOF) {
        this.currentToken.forceQuirks = true;
        this._emitCurrentToken();
        this._reconsumeInState(DATA_STATE);
    }

    else {
        this.currentToken.forceQuirks = true;
        this.state = BOGUS_DOCTYPE_STATE;
    }
};


//12.2.4.61 Between DOCTYPE public and system identifiers state
//------------------------------------------------------------------
_[BETWEEN_DOCTYPE_PUBLIC_AND_SYSTEM_IDENTIFIERS_STATE] = function betweenDoctypePublicAndSystemIdentifiersState(cp) {
    if (isWhitespace(cp))
        return;

    if (cp === $.GREATER_THAN_SIGN) {
        this._emitCurrentToken();
        this.state = DATA_STATE;
    }

    else if (cp === $.QUOTATION_MARK) {
        this.currentToken.systemId = '';
        this.state = DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED_STATE;
    }


    else if (cp === $.APOSTROPHE) {
        this.currentToken.systemId = '';
        this.state = DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED_STATE;
    }

    else if (cp === $.EOF) {
        this.currentToken.forceQuirks = true;
        this._emitCurrentToken();
        this._reconsumeInState(DATA_STATE);
    }

    else {
        this.currentToken.forceQuirks = true;
        this.state = BOGUS_DOCTYPE_STATE;
    }
};


//12.2.4.62 After DOCTYPE system keyword state
//------------------------------------------------------------------
_[AFTER_DOCTYPE_SYSTEM_KEYWORD_STATE] = function afterDoctypeSystemKeywordState(cp) {
    if (isWhitespace(cp))
        this.state = BEFORE_DOCTYPE_SYSTEM_IDENTIFIER_STATE;

    else if (cp === $.QUOTATION_MARK) {
        this.currentToken.systemId = '';
        this.state = DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED_STATE;
    }

    else if (cp === $.APOSTROPHE) {
        this.currentToken.systemId = '';
        this.state = DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED_STATE;
    }

    else if (cp === $.GREATER_THAN_SIGN) {
        this.currentToken.forceQuirks = true;
        this._emitCurrentToken();
        this.state = DATA_STATE;
    }

    else if (cp === $.EOF) {
        this.currentToken.forceQuirks = true;
        this._emitCurrentToken();
        this._reconsumeInState(DATA_STATE);
    }

    else {
        this.currentToken.forceQuirks = true;
        this.state = BOGUS_DOCTYPE_STATE;
    }
};


//12.2.4.63 Before DOCTYPE system identifier state
//------------------------------------------------------------------
_[BEFORE_DOCTYPE_SYSTEM_IDENTIFIER_STATE] = function beforeDoctypeSystemIdentifierState(cp) {
    if (isWhitespace(cp))
        return;

    if (cp === $.QUOTATION_MARK) {
        this.currentToken.systemId = '';
        this.state = DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED_STATE;
    }

    else if (cp === $.APOSTROPHE) {
        this.currentToken.systemId = '';
        this.state = DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED_STATE;
    }

    else if (cp === $.GREATER_THAN_SIGN) {
        this.currentToken.forceQuirks = true;
        this._emitCurrentToken();
        this.state = DATA_STATE;
    }

    else if (cp === $.EOF) {
        this.currentToken.forceQuirks = true;
        this._emitCurrentToken();
        this._reconsumeInState(DATA_STATE);
    }

    else {
        this.currentToken.forceQuirks = true;
        this.state = BOGUS_DOCTYPE_STATE;
    }
};


//12.2.4.64 DOCTYPE system identifier (double-quoted) state
//------------------------------------------------------------------
_[DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED_STATE] = function doctypeSystemIdentifierDoubleQuotedState(cp) {
    if (cp === $.QUOTATION_MARK)
        this.state = AFTER_DOCTYPE_SYSTEM_IDENTIFIER_STATE;

    else if (cp === $.GREATER_THAN_SIGN) {
        this.currentToken.forceQuirks = true;
        this._emitCurrentToken();
        this.state = DATA_STATE;
    }

    else if (cp === $.NULL)
        this.currentToken.systemId += UNICODE.REPLACEMENT_CHARACTER;

    else if (cp === $.EOF) {
        this.currentToken.forceQuirks = true;
        this._emitCurrentToken();
        this._reconsumeInState(DATA_STATE);
    }

    else
        this.currentToken.systemId += toChar(cp);
};


//12.2.4.65 DOCTYPE system identifier (single-quoted) state
//------------------------------------------------------------------
_[DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED_STATE] = function doctypeSystemIdentifierSingleQuotedState(cp) {
    if (cp === $.APOSTROPHE)
        this.state = AFTER_DOCTYPE_SYSTEM_IDENTIFIER_STATE;

    else if (cp === $.GREATER_THAN_SIGN) {
        this.currentToken.forceQuirks = true;
        this._emitCurrentToken();
        this.state = DATA_STATE;
    }

    else if (cp === $.NULL)
        this.currentToken.systemId += UNICODE.REPLACEMENT_CHARACTER;

    else if (cp === $.EOF) {
        this.currentToken.forceQuirks = true;
        this._emitCurrentToken();
        this._reconsumeInState(DATA_STATE);
    }

    else
        this.currentToken.systemId += toChar(cp);
};


//12.2.4.66 After DOCTYPE system identifier state
//------------------------------------------------------------------
_[AFTER_DOCTYPE_SYSTEM_IDENTIFIER_STATE] = function afterDoctypeSystemIdentifierState(cp) {
    if (isWhitespace(cp))
        return;

    if (cp === $.GREATER_THAN_SIGN) {
        this._emitCurrentToken();
        this.state = DATA_STATE;
    }

    else if (cp === $.EOF) {
        this.currentToken.forceQuirks = true;
        this._emitCurrentToken();
        this._reconsumeInState(DATA_STATE);
    }

    else
        this.state = BOGUS_DOCTYPE_STATE;
};


//12.2.4.67 Bogus DOCTYPE state
//------------------------------------------------------------------
_[BOGUS_DOCTYPE_STATE] = function bogusDoctypeState(cp) {
    if (cp === $.GREATER_THAN_SIGN) {
        this._emitCurrentToken();
        this.state = DATA_STATE;
    }

    else if (cp === $.EOF) {
        this._emitCurrentToken();
        this._reconsumeInState(DATA_STATE);
    }
};


//12.2.4.68 CDATA section state
//------------------------------------------------------------------
_[CDATA_SECTION_STATE] = function cdataSectionState(cp) {
    while (true) {
        if (cp === $.EOF) {
            this._reconsumeInState(DATA_STATE);
            break;
        }

        else {
            var cdataEndMatch = this._consumeSubsequentIfMatch($$.CDATA_END_STRING, cp, true);

            if (this._ensureHibernation())
                break;

            if (cdataEndMatch) {
                this.state = DATA_STATE;
                break;
            }

            this._emitCodePoint(cp);

            this._hibernationSnapshot();
            cp = this._consume();

            if (this._ensureHibernation())
                break;
        }
    }
};

},{"../common/unicode":5,"../location_info/tokenizer_mixin":8,"./named_entity_trie":19,"./preprocessor":20}],19:[function(require,module,exports){
'use strict';

//NOTE: this file contains auto-generated trie structure that is used for named entity references consumption
//(see: http://www.whatwg.org/specs/web-apps/current-work/multipage/tokenization.html#tokenizing-character-references and
//http://www.whatwg.org/specs/web-apps/current-work/multipage/named-character-references.html#named-character-references)
module.exports = {65:{l:{69:{l:{108:{l:{105:{l:{103:{l:{59:{c:[198]}},c:[198]}}}}}}},77:{l:{80:{l:{59:{c:[38]}},c:[38]}}},97:{l:{99:{l:{117:{l:{116:{l:{101:{l:{59:{c:[193]}},c:[193]}}}}}}}}},98:{l:{114:{l:{101:{l:{118:{l:{101:{l:{59:{c:[258]}}}}}}}}}}},99:{l:{105:{l:{114:{l:{99:{l:{59:{c:[194]}},c:[194]}}}}},121:{l:{59:{c:[1040]}}}}},102:{l:{114:{l:{59:{c:[120068]}}}}},103:{l:{114:{l:{97:{l:{118:{l:{101:{l:{59:{c:[192]}},c:[192]}}}}}}}}},108:{l:{112:{l:{104:{l:{97:{l:{59:{c:[913]}}}}}}}}},109:{l:{97:{l:{99:{l:{114:{l:{59:{c:[256]}}}}}}}}},110:{l:{100:{l:{59:{c:[10835]}}}}},111:{l:{103:{l:{111:{l:{110:{l:{59:{c:[260]}}}}}}},112:{l:{102:{l:{59:{c:[120120]}}}}}}},112:{l:{112:{l:{108:{l:{121:{l:{70:{l:{117:{l:{110:{l:{99:{l:{116:{l:{105:{l:{111:{l:{110:{l:{59:{c:[8289]}}}}}}}}}}}}}}}}}}}}}}}}},114:{l:{105:{l:{110:{l:{103:{l:{59:{c:[197]}},c:[197]}}}}}}},115:{l:{99:{l:{114:{l:{59:{c:[119964]}}}}},115:{l:{105:{l:{103:{l:{110:{l:{59:{c:[8788]}}}}}}}}}}},116:{l:{105:{l:{108:{l:{100:{l:{101:{l:{59:{c:[195]}},c:[195]}}}}}}}}},117:{l:{109:{l:{108:{l:{59:{c:[196]}},c:[196]}}}}}}},66:{l:{97:{l:{99:{l:{107:{l:{115:{l:{108:{l:{97:{l:{115:{l:{104:{l:{59:{c:[8726]}}}}}}}}}}}}}}},114:{l:{118:{l:{59:{c:[10983]}}},119:{l:{101:{l:{100:{l:{59:{c:[8966]}}}}}}}}}}},99:{l:{121:{l:{59:{c:[1041]}}}}},101:{l:{99:{l:{97:{l:{117:{l:{115:{l:{101:{l:{59:{c:[8757]}}}}}}}}}}},114:{l:{110:{l:{111:{l:{117:{l:{108:{l:{108:{l:{105:{l:{115:{l:{59:{c:[8492]}}}}}}}}}}}}}}}}},116:{l:{97:{l:{59:{c:[914]}}}}}}},102:{l:{114:{l:{59:{c:[120069]}}}}},111:{l:{112:{l:{102:{l:{59:{c:[120121]}}}}}}},114:{l:{101:{l:{118:{l:{101:{l:{59:{c:[728]}}}}}}}}},115:{l:{99:{l:{114:{l:{59:{c:[8492]}}}}}}},117:{l:{109:{l:{112:{l:{101:{l:{113:{l:{59:{c:[8782]}}}}}}}}}}}}},67:{l:{72:{l:{99:{l:{121:{l:{59:{c:[1063]}}}}}}},79:{l:{80:{l:{89:{l:{59:{c:[169]}},c:[169]}}}}},97:{l:{99:{l:{117:{l:{116:{l:{101:{l:{59:{c:[262]}}}}}}}}},112:{l:{59:{c:[8914]},105:{l:{116:{l:{97:{l:{108:{l:{68:{l:{105:{l:{102:{l:{102:{l:{101:{l:{114:{l:{101:{l:{110:{l:{116:{l:{105:{l:{97:{l:{108:{l:{68:{l:{59:{c:[8517]}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}},121:{l:{108:{l:{101:{l:{121:{l:{115:{l:{59:{c:[8493]}}}}}}}}}}}}},99:{l:{97:{l:{114:{l:{111:{l:{110:{l:{59:{c:[268]}}}}}}}}},101:{l:{100:{l:{105:{l:{108:{l:{59:{c:[199]}},c:[199]}}}}}}},105:{l:{114:{l:{99:{l:{59:{c:[264]}}}}}}},111:{l:{110:{l:{105:{l:{110:{l:{116:{l:{59:{c:[8752]}}}}}}}}}}}}},100:{l:{111:{l:{116:{l:{59:{c:[266]}}}}}}},101:{l:{100:{l:{105:{l:{108:{l:{108:{l:{97:{l:{59:{c:[184]}}}}}}}}}}},110:{l:{116:{l:{101:{l:{114:{l:{68:{l:{111:{l:{116:{l:{59:{c:[183]}}}}}}}}}}}}}}}}},102:{l:{114:{l:{59:{c:[8493]}}}}},104:{l:{105:{l:{59:{c:[935]}}}}},105:{l:{114:{l:{99:{l:{108:{l:{101:{l:{68:{l:{111:{l:{116:{l:{59:{c:[8857]}}}}}}},77:{l:{105:{l:{110:{l:{117:{l:{115:{l:{59:{c:[8854]}}}}}}}}}}},80:{l:{108:{l:{117:{l:{115:{l:{59:{c:[8853]}}}}}}}}},84:{l:{105:{l:{109:{l:{101:{l:{115:{l:{59:{c:[8855]}}}}}}}}}}}}}}}}}}}}},108:{l:{111:{l:{99:{l:{107:{l:{119:{l:{105:{l:{115:{l:{101:{l:{67:{l:{111:{l:{110:{l:{116:{l:{111:{l:{117:{l:{114:{l:{73:{l:{110:{l:{116:{l:{101:{l:{103:{l:{114:{l:{97:{l:{108:{l:{59:{c:[8754]}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}},115:{l:{101:{l:{67:{l:{117:{l:{114:{l:{108:{l:{121:{l:{68:{l:{111:{l:{117:{l:{98:{l:{108:{l:{101:{l:{81:{l:{117:{l:{111:{l:{116:{l:{101:{l:{59:{c:[8221]}}}}}}}}}}}}}}}}}}}}}}},81:{l:{117:{l:{111:{l:{116:{l:{101:{l:{59:{c:[8217]}}}}}}}}}}}}}}}}}}}}}}}}}}}}},111:{l:{108:{l:{111:{l:{110:{l:{59:{c:[8759]},101:{l:{59:{c:[10868]}}}}}}}}},110:{l:{103:{l:{114:{l:{117:{l:{101:{l:{110:{l:{116:{l:{59:{c:[8801]}}}}}}}}}}}}},105:{l:{110:{l:{116:{l:{59:{c:[8751]}}}}}}},116:{l:{111:{l:{117:{l:{114:{l:{73:{l:{110:{l:{116:{l:{101:{l:{103:{l:{114:{l:{97:{l:{108:{l:{59:{c:[8750]}}}}}}}}}}}}}}}}}}}}}}}}}}},112:{l:{102:{l:{59:{c:[8450]}}},114:{l:{111:{l:{100:{l:{117:{l:{99:{l:{116:{l:{59:{c:[8720]}}}}}}}}}}}}}}},117:{l:{110:{l:{116:{l:{101:{l:{114:{l:{67:{l:{108:{l:{111:{l:{99:{l:{107:{l:{119:{l:{105:{l:{115:{l:{101:{l:{67:{l:{111:{l:{110:{l:{116:{l:{111:{l:{117:{l:{114:{l:{73:{l:{110:{l:{116:{l:{101:{l:{103:{l:{114:{l:{97:{l:{108:{l:{59:{c:[8755]}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}},114:{l:{111:{l:{115:{l:{115:{l:{59:{c:[10799]}}}}}}}}},115:{l:{99:{l:{114:{l:{59:{c:[119966]}}}}}}},117:{l:{112:{l:{59:{c:[8915]},67:{l:{97:{l:{112:{l:{59:{c:[8781]}}}}}}}}}}}}},68:{l:{68:{l:{59:{c:[8517]},111:{l:{116:{l:{114:{l:{97:{l:{104:{l:{100:{l:{59:{c:[10513]}}}}}}}}}}}}}}},74:{l:{99:{l:{121:{l:{59:{c:[1026]}}}}}}},83:{l:{99:{l:{121:{l:{59:{c:[1029]}}}}}}},90:{l:{99:{l:{121:{l:{59:{c:[1039]}}}}}}},97:{l:{103:{l:{103:{l:{101:{l:{114:{l:{59:{c:[8225]}}}}}}}}},114:{l:{114:{l:{59:{c:[8609]}}}}},115:{l:{104:{l:{118:{l:{59:{c:[10980]}}}}}}}}},99:{l:{97:{l:{114:{l:{111:{l:{110:{l:{59:{c:[270]}}}}}}}}},121:{l:{59:{c:[1044]}}}}},101:{l:{108:{l:{59:{c:[8711]},116:{l:{97:{l:{59:{c:[916]}}}}}}}}},102:{l:{114:{l:{59:{c:[120071]}}}}},105:{l:{97:{l:{99:{l:{114:{l:{105:{l:{116:{l:{105:{l:{99:{l:{97:{l:{108:{l:{65:{l:{99:{l:{117:{l:{116:{l:{101:{l:{59:{c:[180]}}}}}}}}}}},68:{l:{111:{l:{116:{l:{59:{c:[729]}}},117:{l:{98:{l:{108:{l:{101:{l:{65:{l:{99:{l:{117:{l:{116:{l:{101:{l:{59:{c:[733]}}}}}}}}}}}}}}}}}}}}}}},71:{l:{114:{l:{97:{l:{118:{l:{101:{l:{59:{c:[96]}}}}}}}}}}},84:{l:{105:{l:{108:{l:{100:{l:{101:{l:{59:{c:[732]}}}}}}}}}}}}}}}}}}}}}}}}}}},109:{l:{111:{l:{110:{l:{100:{l:{59:{c:[8900]}}}}}}}}}}},102:{l:{102:{l:{101:{l:{114:{l:{101:{l:{110:{l:{116:{l:{105:{l:{97:{l:{108:{l:{68:{l:{59:{c:[8518]}}}}}}}}}}}}}}}}}}}}}}}}},111:{l:{112:{l:{102:{l:{59:{c:[120123]}}}}},116:{l:{59:{c:[168]},68:{l:{111:{l:{116:{l:{59:{c:[8412]}}}}}}},69:{l:{113:{l:{117:{l:{97:{l:{108:{l:{59:{c:[8784]}}}}}}}}}}}}},117:{l:{98:{l:{108:{l:{101:{l:{67:{l:{111:{l:{110:{l:{116:{l:{111:{l:{117:{l:{114:{l:{73:{l:{110:{l:{116:{l:{101:{l:{103:{l:{114:{l:{97:{l:{108:{l:{59:{c:[8751]}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}},68:{l:{111:{l:{116:{l:{59:{c:[168]}}},119:{l:{110:{l:{65:{l:{114:{l:{114:{l:{111:{l:{119:{l:{59:{c:[8659]}}}}}}}}}}}}}}}}}}},76:{l:{101:{l:{102:{l:{116:{l:{65:{l:{114:{l:{114:{l:{111:{l:{119:{l:{59:{c:[8656]}}}}}}}}}}},82:{l:{105:{l:{103:{l:{104:{l:{116:{l:{65:{l:{114:{l:{114:{l:{111:{l:{119:{l:{59:{c:[8660]}}}}}}}}}}}}}}}}}}}}},84:{l:{101:{l:{101:{l:{59:{c:[10980]}}}}}}}}}}}}},111:{l:{110:{l:{103:{l:{76:{l:{101:{l:{102:{l:{116:{l:{65:{l:{114:{l:{114:{l:{111:{l:{119:{l:{59:{c:[10232]}}}}}}}}}}},82:{l:{105:{l:{103:{l:{104:{l:{116:{l:{65:{l:{114:{l:{114:{l:{111:{l:{119:{l:{59:{c:[10234]}}}}}}}}}}}}}}}}}}}}}}}}}}}}},82:{l:{105:{l:{103:{l:{104:{l:{116:{l:{65:{l:{114:{l:{114:{l:{111:{l:{119:{l:{59:{c:[10233]}}}}}}}}}}}}}}}}}}}}}}}}}}}}},82:{l:{105:{l:{103:{l:{104:{l:{116:{l:{65:{l:{114:{l:{114:{l:{111:{l:{119:{l:{59:{c:[8658]}}}}}}}}}}},84:{l:{101:{l:{101:{l:{59:{c:[8872]}}}}}}}}}}}}}}}}},85:{l:{112:{l:{65:{l:{114:{l:{114:{l:{111:{l:{119:{l:{59:{c:[8657]}}}}}}}}}}},68:{l:{111:{l:{119:{l:{110:{l:{65:{l:{114:{l:{114:{l:{111:{l:{119:{l:{59:{c:[8661]}}}}}}}}}}}}}}}}}}}}}}},86:{l:{101:{l:{114:{l:{116:{l:{105:{l:{99:{l:{97:{l:{108:{l:{66:{l:{97:{l:{114:{l:{59:{c:[8741]}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}},119:{l:{110:{l:{65:{l:{114:{l:{114:{l:{111:{l:{119:{l:{59:{c:[8595]},66:{l:{97:{l:{114:{l:{59:{c:[10515]}}}}}}},85:{l:{112:{l:{65:{l:{114:{l:{114:{l:{111:{l:{119:{l:{59:{c:[8693]}}}}}}}}}}}}}}}}}}}}}}}}},66:{l:{114:{l:{101:{l:{118:{l:{101:{l:{59:{c:[785]}}}}}}}}}}},76:{l:{101:{l:{102:{l:{116:{l:{82:{l:{105:{l:{103:{l:{104:{l:{116:{l:{86:{l:{101:{l:{99:{l:{116:{l:{111:{l:{114:{l:{59:{c:[10576]}}}}}}}}}}}}}}}}}}}}}}},84:{l:{101:{l:{101:{l:{86:{l:{101:{l:{99:{l:{116:{l:{111:{l:{114:{l:{59:{c:[10590]}}}}}}}}}}}}}}}}}}},86:{l:{101:{l:{99:{l:{116:{l:{111:{l:{114:{l:{59:{c:[8637]},66:{l:{97:{l:{114:{l:{59:{c:[10582]}}}}}}}}}}}}}}}}}}}}}}}}}}},82:{l:{105:{l:{103:{l:{104:{l:{116:{l:{84:{l:{101:{l:{101:{l:{86:{l:{101:{l:{99:{l:{116:{l:{111:{l:{114:{l:{59:{c:[10591]}}}}}}}}}}}}}}}}}}},86:{l:{101:{l:{99:{l:{116:{l:{111:{l:{114:{l:{59:{c:[8641]},66:{l:{97:{l:{114:{l:{59:{c:[10583]}}}}}}}}}}}}}}}}}}}}}}}}}}}}},84:{l:{101:{l:{101:{l:{59:{c:[8868]},65:{l:{114:{l:{114:{l:{111:{l:{119:{l:{59:{c:[8615]}}}}}}}}}}}}}}}}},97:{l:{114:{l:{114:{l:{111:{l:{119:{l:{59:{c:[8659]}}}}}}}}}}}}}}}}},115:{l:{99:{l:{114:{l:{59:{c:[119967]}}}}},116:{l:{114:{l:{111:{l:{107:{l:{59:{c:[272]}}}}}}}}}}}}},69:{l:{78:{l:{71:{l:{59:{c:[330]}}}}},84:{l:{72:{l:{59:{c:[208]}},c:[208]}}},97:{l:{99:{l:{117:{l:{116:{l:{101:{l:{59:{c:[201]}},c:[201]}}}}}}}}},99:{l:{97:{l:{114:{l:{111:{l:{110:{l:{59:{c:[282]}}}}}}}}},105:{l:{114:{l:{99:{l:{59:{c:[202]}},c:[202]}}}}},121:{l:{59:{c:[1069]}}}}},100:{l:{111:{l:{116:{l:{59:{c:[278]}}}}}}},102:{l:{114:{l:{59:{c:[120072]}}}}},103:{l:{114:{l:{97:{l:{118:{l:{101:{l:{59:{c:[200]}},c:[200]}}}}}}}}},108:{l:{101:{l:{109:{l:{101:{l:{110:{l:{116:{l:{59:{c:[8712]}}}}}}}}}}}}},109:{l:{97:{l:{99:{l:{114:{l:{59:{c:[274]}}}}}}},112:{l:{116:{l:{121:{l:{83:{l:{109:{l:{97:{l:{108:{l:{108:{l:{83:{l:{113:{l:{117:{l:{97:{l:{114:{l:{101:{l:{59:{c:[9723]}}}}}}}}}}}}}}}}}}}}}}},86:{l:{101:{l:{114:{l:{121:{l:{83:{l:{109:{l:{97:{l:{108:{l:{108:{l:{83:{l:{113:{l:{117:{l:{97:{l:{114:{l:{101:{l:{59:{c:[9643]}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}},111:{l:{103:{l:{111:{l:{110:{l:{59:{c:[280]}}}}}}},112:{l:{102:{l:{59:{c:[120124]}}}}}}},112:{l:{115:{l:{105:{l:{108:{l:{111:{l:{110:{l:{59:{c:[917]}}}}}}}}}}}}},113:{l:{117:{l:{97:{l:{108:{l:{59:{c:[10869]},84:{l:{105:{l:{108:{l:{100:{l:{101:{l:{59:{c:[8770]}}}}}}}}}}}}}}},105:{l:{108:{l:{105:{l:{98:{l:{114:{l:{105:{l:{117:{l:{109:{l:{59:{c:[8652]}}}}}}}}}}}}}}}}}}}}},115:{l:{99:{l:{114:{l:{59:{c:[8496]}}}}},105:{l:{109:{l:{59:{c:[10867]}}}}}}},116:{l:{97:{l:{59:{c:[919]}}}}},117:{l:{109:{l:{108:{l:{59:{c:[203]}},c:[203]}}}}},120:{l:{105:{l:{115:{l:{116:{l:{115:{l:{59:{c:[8707]}}}}}}}}},112:{l:{111:{l:{110:{l:{101:{l:{110:{l:{116:{l:{105:{l:{97:{l:{108:{l:{69:{l:{59:{c:[8519]}}}}}}}}}}}}}}}}}}}}}}}}},70:{l:{99:{l:{121:{l:{59:{c:[1060]}}}}},102:{l:{114:{l:{59:{c:[120073]}}}}},105:{l:{108:{l:{108:{l:{101:{l:{100:{l:{83:{l:{109:{l:{97:{l:{108:{l:{108:{l:{83:{l:{113:{l:{117:{l:{97:{l:{114:{l:{101:{l:{59:{c:[9724]}}}}}}}}}}}}}}}}}}}}}}},86:{l:{101:{l:{114:{l:{121:{l:{83:{l:{109:{l:{97:{l:{108:{l:{108:{l:{83:{l:{113:{l:{117:{l:{97:{l:{114:{l:{101:{l:{59:{c:[9642]}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}},111:{l:{112:{l:{102:{l:{59:{c:[120125]}}}}},114:{l:{65:{l:{108:{l:{108:{l:{59:{c:[8704]}}}}}}}}},117:{l:{114:{l:{105:{l:{101:{l:{114:{l:{116:{l:{114:{l:{102:{l:{59:{c:[8497]}}}}}}}}}}}}}}}}}}},115:{l:{99:{l:{114:{l:{59:{c:[8497]}}}}}}}}},71:{l:{74:{l:{99:{l:{121:{l:{59:{c:[1027]}}}}}}},84:{l:{59:{c:[62]}},c:[62]},97:{l:{109:{l:{109:{l:{97:{l:{59:{c:[915]},100:{l:{59:{c:[988]}}}}}}}}}}},98:{l:{114:{l:{101:{l:{118:{l:{101:{l:{59:{c:[286]}}}}}}}}}}},99:{l:{101:{l:{100:{l:{105:{l:{108:{l:{59:{c:[290]}}}}}}}}},105:{l:{114:{l:{99:{l:{59:{c:[284]}}}}}}},121:{l:{59:{c:[1043]}}}}},100:{l:{111:{l:{116:{l:{59:{c:[288]}}}}}}},102:{l:{114:{l:{59:{c:[120074]}}}}},103:{l:{59:{c:[8921]}}},111:{l:{112:{l:{102:{l:{59:{c:[120126]}}}}}}},114:{l:{101:{l:{97:{l:{116:{l:{101:{l:{114:{l:{69:{l:{113:{l:{117:{l:{97:{l:{108:{l:{59:{c:[8805]},76:{l:{101:{l:{115:{l:{115:{l:{59:{c:[8923]}}}}}}}}}}}}}}}}}}},70:{l:{117:{l:{108:{l:{108:{l:{69:{l:{113:{l:{117:{l:{97:{l:{108:{l:{59:{c:[8807]}}}}}}}}}}}}}}}}}}},71:{l:{114:{l:{101:{l:{97:{l:{116:{l:{101:{l:{114:{l:{59:{c:[10914]}}}}}}}}}}}}}}},76:{l:{101:{l:{115:{l:{115:{l:{59:{c:[8823]}}}}}}}}},83:{l:{108:{l:{97:{l:{110:{l:{116:{l:{69:{l:{113:{l:{117:{l:{97:{l:{108:{l:{59:{c:[10878]}}}}}}}}}}}}}}}}}}}}},84:{l:{105:{l:{108:{l:{100:{l:{101:{l:{59:{c:[8819]}}}}}}}}}}}}}}}}}}}}}}},115:{l:{99:{l:{114:{l:{59:{c:[119970]}}}}}}},116:{l:{59:{c:[8811]}}}}},72:{l:{65:{l:{82:{l:{68:{l:{99:{l:{121:{l:{59:{c:[1066]}}}}}}}}}}},97:{l:{99:{l:{101:{l:{107:{l:{59:{c:[711]}}}}}}},116:{l:{59:{c:[94]}}}}},99:{l:{105:{l:{114:{l:{99:{l:{59:{c:[292]}}}}}}}}},102:{l:{114:{l:{59:{c:[8460]}}}}},105:{l:{108:{l:{98:{l:{101:{l:{114:{l:{116:{l:{83:{l:{112:{l:{97:{l:{99:{l:{101:{l:{59:{c:[8459]}}}}}}}}}}}}}}}}}}}}}}},111:{l:{112:{l:{102:{l:{59:{c:[8461]}}}}},114:{l:{105:{l:{122:{l:{111:{l:{110:{l:{116:{l:{97:{l:{108:{l:{76:{l:{105:{l:{110:{l:{101:{l:{59:{c:[9472]}}}}}}}}}}}}}}}}}}}}}}}}}}},115:{l:{99:{l:{114:{l:{59:{c:[8459]}}}}},116:{l:{114:{l:{111:{l:{107:{l:{59:{c:[294]}}}}}}}}}}},117:{l:{109:{l:{112:{l:{68:{l:{111:{l:{119:{l:{110:{l:{72:{l:{117:{l:{109:{l:{112:{l:{59:{c:[8782]}}}}}}}}}}}}}}}}},69:{l:{113:{l:{117:{l:{97:{l:{108:{l:{59:{c:[8783]}}}}}}}}}}}}}}}}}}},73:{l:{69:{l:{99:{l:{121:{l:{59:{c:[1045]}}}}}}},74:{l:{108:{l:{105:{l:{103:{l:{59:{c:[306]}}}}}}}}},79:{l:{99:{l:{121:{l:{59:{c:[1025]}}}}}}},97:{l:{99:{l:{117:{l:{116:{l:{101:{l:{59:{c:[205]}},c:[205]}}}}}}}}},99:{l:{105:{l:{114:{l:{99:{l:{59:{c:[206]}},c:[206]}}}}},121:{l:{59:{c:[1048]}}}}},100:{l:{111:{l:{116:{l:{59:{c:[304]}}}}}}},102:{l:{114:{l:{59:{c:[8465]}}}}},103:{l:{114:{l:{97:{l:{118:{l:{101:{l:{59:{c:[204]}},c:[204]}}}}}}}}},109:{l:{59:{c:[8465]},97:{l:{99:{l:{114:{l:{59:{c:[298]}}}}},103:{l:{105:{l:{110:{l:{97:{l:{114:{l:{121:{l:{73:{l:{59:{c:[8520]}}}}}}}}}}}}}}}}},112:{l:{108:{l:{105:{l:{101:{l:{115:{l:{59:{c:[8658]}}}}}}}}}}}}},110:{l:{116:{l:{59:{c:[8748]},101:{l:{103:{l:{114:{l:{97:{l:{108:{l:{59:{c:[8747]}}}}}}}}},114:{l:{115:{l:{101:{l:{99:{l:{116:{l:{105:{l:{111:{l:{110:{l:{59:{c:[8898]}}}}}}}}}}}}}}}}}}}}},118:{l:{105:{l:{115:{l:{105:{l:{98:{l:{108:{l:{101:{l:{67:{l:{111:{l:{109:{l:{109:{l:{97:{l:{59:{c:[8291]}}}}}}}}}}},84:{l:{105:{l:{109:{l:{101:{l:{115:{l:{59:{c:[8290]}}}}}}}}}}}}}}}}}}}}}}}}}}},111:{l:{103:{l:{111:{l:{110:{l:{59:{c:[302]}}}}}}},112:{l:{102:{l:{59:{c:[120128]}}}}},116:{l:{97:{l:{59:{c:[921]}}}}}}},115:{l:{99:{l:{114:{l:{59:{c:[8464]}}}}}}},116:{l:{105:{l:{108:{l:{100:{l:{101:{l:{59:{c:[296]}}}}}}}}}}},117:{l:{107:{l:{99:{l:{121:{l:{59:{c:[1030]}}}}}}},109:{l:{108:{l:{59:{c:[207]}},c:[207]}}}}}}},74:{l:{99:{l:{105:{l:{114:{l:{99:{l:{59:{c:[308]}}}}}}},121:{l:{59:{c:[1049]}}}}},102:{l:{114:{l:{59:{c:[120077]}}}}},111:{l:{112:{l:{102:{l:{59:{c:[120129]}}}}}}},115:{l:{99:{l:{114:{l:{59:{c:[119973]}}}}},101:{l:{114:{l:{99:{l:{121:{l:{59:{c:[1032]}}}}}}}}}}},117:{l:{107:{l:{99:{l:{121:{l:{59:{c:[1028]}}}}}}}}}}},75:{l:{72:{l:{99:{l:{121:{l:{59:{c:[1061]}}}}}}},74:{l:{99:{l:{121:{l:{59:{c:[1036]}}}}}}},97:{l:{112:{l:{112:{l:{97:{l:{59:{c:[922]}}}}}}}}},99:{l:{101:{l:{100:{l:{105:{l:{108:{l:{59:{c:[310]}}}}}}}}},121:{l:{59:{c:[1050]}}}}},102:{l:{114:{l:{59:{c:[120078]}}}}},111:{l:{112:{l:{102:{l:{59:{c:[120130]}}}}}}},115:{l:{99:{l:{114:{l:{59:{c:[119974]}}}}}}}}},76:{l:{74:{l:{99:{l:{121:{l:{59:{c:[1033]}}}}}}},84:{l:{59:{c:[60]}},c:[60]},97:{l:{99:{l:{117:{l:{116:{l:{101:{l:{59:{c:[313]}}}}}}}}},109:{l:{98:{l:{100:{l:{97:{l:{59:{c:[923]}}}}}}}}},110:{l:{103:{l:{59:{c:[10218]}}}}},112:{l:{108:{l:{97:{l:{99:{l:{101:{l:{116:{l:{114:{l:{102:{l:{59:{c:[8466]}}}}}}}}}}}}}}}}},114:{l:{114:{l:{59:{c:[8606]}}}}}}},99:{l:{97:{l:{114:{l:{111:{l:{110:{l:{59:{c:[317]}}}}}}}}},101:{l:{100:{l:{105:{l:{108:{l:{59:{c:[315]}}}}}}}}},121:{l:{59:{c:[1051]}}}}},101:{l:{102:{l:{116:{l:{65:{l:{110:{l:{103:{l:{108:{l:{101:{l:{66:{l:{114:{l:{97:{l:{99:{l:{107:{l:{101:{l:{116:{l:{59:{c:[10216]}}}}}}}}}}}}}}}}}}}}}}},114:{l:{114:{l:{111:{l:{119:{l:{59:{c:[8592]},66:{l:{97:{l:{114:{l:{59:{c:[8676]}}}}}}},82:{l:{105:{l:{103:{l:{104:{l:{116:{l:{65:{l:{114:{l:{114:{l:{111:{l:{119:{l:{59:{c:[8646]}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}},67:{l:{101:{l:{105:{l:{108:{l:{105:{l:{110:{l:{103:{l:{59:{c:[8968]}}}}}}}}}}}}}}},68:{l:{111:{l:{117:{l:{98:{l:{108:{l:{101:{l:{66:{l:{114:{l:{97:{l:{99:{l:{107:{l:{101:{l:{116:{l:{59:{c:[10214]}}}}}}}}}}}}}}}}}}}}}}},119:{l:{110:{l:{84:{l:{101:{l:{101:{l:{86:{l:{101:{l:{99:{l:{116:{l:{111:{l:{114:{l:{59:{c:[10593]}}}}}}}}}}}}}}}}}}},86:{l:{101:{l:{99:{l:{116:{l:{111:{l:{114:{l:{59:{c:[8643]},66:{l:{97:{l:{114:{l:{59:{c:[10585]}}}}}}}}}}}}}}}}}}}}}}}}}}},70:{l:{108:{l:{111:{l:{111:{l:{114:{l:{59:{c:[8970]}}}}}}}}}}},82:{l:{105:{l:{103:{l:{104:{l:{116:{l:{65:{l:{114:{l:{114:{l:{111:{l:{119:{l:{59:{c:[8596]}}}}}}}}}}},86:{l:{101:{l:{99:{l:{116:{l:{111:{l:{114:{l:{59:{c:[10574]}}}}}}}}}}}}}}}}}}}}}}},84:{l:{101:{l:{101:{l:{59:{c:[8867]},65:{l:{114:{l:{114:{l:{111:{l:{119:{l:{59:{c:[8612]}}}}}}}}}}},86:{l:{101:{l:{99:{l:{116:{l:{111:{l:{114:{l:{59:{c:[10586]}}}}}}}}}}}}}}}}},114:{l:{105:{l:{97:{l:{110:{l:{103:{l:{108:{l:{101:{l:{59:{c:[8882]},66:{l:{97:{l:{114:{l:{59:{c:[10703]}}}}}}},69:{l:{113:{l:{117:{l:{97:{l:{108:{l:{59:{c:[8884]}}}}}}}}}}}}}}}}}}}}}}}}}}},85:{l:{112:{l:{68:{l:{111:{l:{119:{l:{110:{l:{86:{l:{101:{l:{99:{l:{116:{l:{111:{l:{114:{l:{59:{c:[10577]}}}}}}}}}}}}}}}}}}}}},84:{l:{101:{l:{101:{l:{86:{l:{101:{l:{99:{l:{116:{l:{111:{l:{114:{l:{59:{c:[10592]}}}}}}}}}}}}}}}}}}},86:{l:{101:{l:{99:{l:{116:{l:{111:{l:{114:{l:{59:{c:[8639]},66:{l:{97:{l:{114:{l:{59:{c:[10584]}}}}}}}}}}}}}}}}}}}}}}},86:{l:{101:{l:{99:{l:{116:{l:{111:{l:{114:{l:{59:{c:[8636]},66:{l:{97:{l:{114:{l:{59:{c:[10578]}}}}}}}}}}}}}}}}}}},97:{l:{114:{l:{114:{l:{111:{l:{119:{l:{59:{c:[8656]}}}}}}}}}}},114:{l:{105:{l:{103:{l:{104:{l:{116:{l:{97:{l:{114:{l:{114:{l:{111:{l:{119:{l:{59:{c:[8660]}}}}}}}}}}}}}}}}}}}}}}}}},115:{l:{115:{l:{69:{l:{113:{l:{117:{l:{97:{l:{108:{l:{71:{l:{114:{l:{101:{l:{97:{l:{116:{l:{101:{l:{114:{l:{59:{c:[8922]}}}}}}}}}}}}}}}}}}}}}}}}},70:{l:{117:{l:{108:{l:{108:{l:{69:{l:{113:{l:{117:{l:{97:{l:{108:{l:{59:{c:[8806]}}}}}}}}}}}}}}}}}}},71:{l:{114:{l:{101:{l:{97:{l:{116:{l:{101:{l:{114:{l:{59:{c:[8822]}}}}}}}}}}}}}}},76:{l:{101:{l:{115:{l:{115:{l:{59:{c:[10913]}}}}}}}}},83:{l:{108:{l:{97:{l:{110:{l:{116:{l:{69:{l:{113:{l:{117:{l:{97:{l:{108:{l:{59:{c:[10877]}}}}}}}}}}}}}}}}}}}}},84:{l:{105:{l:{108:{l:{100:{l:{101:{l:{59:{c:[8818]}}}}}}}}}}}}}}}}},102:{l:{114:{l:{59:{c:[120079]}}}}},108:{l:{59:{c:[8920]},101:{l:{102:{l:{116:{l:{97:{l:{114:{l:{114:{l:{111:{l:{119:{l:{59:{c:[8666]}}}}}}}}}}}}}}}}}}},109:{l:{105:{l:{100:{l:{111:{l:{116:{l:{59:{c:[319]}}}}}}}}}}},111:{l:{110:{l:{103:{l:{76:{l:{101:{l:{102:{l:{116:{l:{65:{l:{114:{l:{114:{l:{111:{l:{119:{l:{59:{c:[10229]}}}}}}}}}}},82:{l:{105:{l:{103:{l:{104:{l:{116:{l:{65:{l:{114:{l:{114:{l:{111:{l:{119:{l:{59:{c:[10231]}}}}}}}}}}}}}}}}}}}}}}}}}}}}},82:{l:{105:{l:{103:{l:{104:{l:{116:{l:{65:{l:{114:{l:{114:{l:{111:{l:{119:{l:{59:{c:[10230]}}}}}}}}}}}}}}}}}}}}},108:{l:{101:{l:{102:{l:{116:{l:{97:{l:{114:{l:{114:{l:{111:{l:{119:{l:{59:{c:[10232]}}}}}}}}}}},114:{l:{105:{l:{103:{l:{104:{l:{116:{l:{97:{l:{114:{l:{114:{l:{111:{l:{119:{l:{59:{c:[10234]}}}}}}}}}}}}}}}}}}}}}}}}}}}}},114:{l:{105:{l:{103:{l:{104:{l:{116:{l:{97:{l:{114:{l:{114:{l:{111:{l:{119:{l:{59:{c:[10233]}}}}}}}}}}}}}}}}}}}}}}}}},112:{l:{102:{l:{59:{c:[120131]}}}}},119:{l:{101:{l:{114:{l:{76:{l:{101:{l:{102:{l:{116:{l:{65:{l:{114:{l:{114:{l:{111:{l:{119:{l:{59:{c:[8601]}}}}}}}}}}}}}}}}}}},82:{l:{105:{l:{103:{l:{104:{l:{116:{l:{65:{l:{114:{l:{114:{l:{111:{l:{119:{l:{59:{c:[8600]}}}}}}}}}}}}}}}}}}}}}}}}}}}}},115:{l:{99:{l:{114:{l:{59:{c:[8466]}}}}},104:{l:{59:{c:[8624]}}},116:{l:{114:{l:{111:{l:{107:{l:{59:{c:[321]}}}}}}}}}}},116:{l:{59:{c:[8810]}}}}},77:{l:{97:{l:{112:{l:{59:{c:[10501]}}}}},99:{l:{121:{l:{59:{c:[1052]}}}}},101:{l:{100:{l:{105:{l:{117:{l:{109:{l:{83:{l:{112:{l:{97:{l:{99:{l:{101:{l:{59:{c:[8287]}}}}}}}}}}}}}}}}}}},108:{l:{108:{l:{105:{l:{110:{l:{116:{l:{114:{l:{102:{l:{59:{c:[8499]}}}}}}}}}}}}}}}}},102:{l:{114:{l:{59:{c:[120080]}}}}},105:{l:{110:{l:{117:{l:{115:{l:{80:{l:{108:{l:{117:{l:{115:{l:{59:{c:[8723]}}}}}}}}}}}}}}}}},111:{l:{112:{l:{102:{l:{59:{c:[120132]}}}}}}},115:{l:{99:{l:{114:{l:{59:{c:[8499]}}}}}}},117:{l:{59:{c:[924]}}}}},78:{l:{74:{l:{99:{l:{121:{l:{59:{c:[1034]}}}}}}},97:{l:{99:{l:{117:{l:{116:{l:{101:{l:{59:{c:[323]}}}}}}}}}}},99:{l:{97:{l:{114:{l:{111:{l:{110:{l:{59:{c:[327]}}}}}}}}},101:{l:{100:{l:{105:{l:{108:{l:{59:{c:[325]}}}}}}}}},121:{l:{59:{c:[1053]}}}}},101:{l:{103:{l:{97:{l:{116:{l:{105:{l:{118:{l:{101:{l:{77:{l:{101:{l:{100:{l:{105:{l:{117:{l:{109:{l:{83:{l:{112:{l:{97:{l:{99:{l:{101:{l:{59:{c:[8203]}}}}}}}}}}}}}}}}}}}}}}},84:{l:{104:{l:{105:{l:{99:{l:{107:{l:{83:{l:{112:{l:{97:{l:{99:{l:{101:{l:{59:{c:[8203]}}}}}}}}}}}}}}},110:{l:{83:{l:{112:{l:{97:{l:{99:{l:{101:{l:{59:{c:[8203]}}}}}}}}}}}}}}}}}}},86:{l:{101:{l:{114:{l:{121:{l:{84:{l:{104:{l:{105:{l:{110:{l:{83:{l:{112:{l:{97:{l:{99:{l:{101:{l:{59:{c:[8203]}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}},115:{l:{116:{l:{101:{l:{100:{l:{71:{l:{114:{l:{101:{l:{97:{l:{116:{l:{101:{l:{114:{l:{71:{l:{114:{l:{101:{l:{97:{l:{116:{l:{101:{l:{114:{l:{59:{c:[8811]}}}}}}}}}}}}}}}}}}}}}}}}}}}}},76:{l:{101:{l:{115:{l:{115:{l:{76:{l:{101:{l:{115:{l:{115:{l:{59:{c:[8810]}}}}}}}}}}}}}}}}}}}}}}}}},119:{l:{76:{l:{105:{l:{110:{l:{101:{l:{59:{c:[10]}}}}}}}}}}}}},102:{l:{114:{l:{59:{c:[120081]}}}}},111:{l:{66:{l:{114:{l:{101:{l:{97:{l:{107:{l:{59:{c:[8288]}}}}}}}}}}},110:{l:{66:{l:{114:{l:{101:{l:{97:{l:{107:{l:{105:{l:{110:{l:{103:{l:{83:{l:{112:{l:{97:{l:{99:{l:{101:{l:{59:{c:[160]}}}}}}}}}}}}}}}}}}}}}}}}}}}}},112:{l:{102:{l:{59:{c:[8469]}}}}},116:{l:{59:{c:[10988]},67:{l:{111:{l:{110:{l:{103:{l:{114:{l:{117:{l:{101:{l:{110:{l:{116:{l:{59:{c:[8802]}}}}}}}}}}}}}}}}},117:{l:{112:{l:{67:{l:{97:{l:{112:{l:{59:{c:[8813]}}}}}}}}}}}}},68:{l:{111:{l:{117:{l:{98:{l:{108:{l:{101:{l:{86:{l:{101:{l:{114:{l:{116:{l:{105:{l:{99:{l:{97:{l:{108:{l:{66:{l:{97:{l:{114:{l:{59:{c:[8742]}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}},69:{l:{108:{l:{101:{l:{109:{l:{101:{l:{110:{l:{116:{l:{59:{c:[8713]}}}}}}}}}}}}},113:{l:{117:{l:{97:{l:{108:{l:{59:{c:[8800]},84:{l:{105:{l:{108:{l:{100:{l:{101:{l:{59:{c:[8770,824]}}}}}}}}}}}}}}}}}}},120:{l:{105:{l:{115:{l:{116:{l:{115:{l:{59:{c:[8708]}}}}}}}}}}}}},71:{l:{114:{l:{101:{l:{97:{l:{116:{l:{101:{l:{114:{l:{59:{c:[8815]},69:{l:{113:{l:{117:{l:{97:{l:{108:{l:{59:{c:[8817]}}}}}}}}}}},70:{l:{117:{l:{108:{l:{108:{l:{69:{l:{113:{l:{117:{l:{97:{l:{108:{l:{59:{c:[8807,824]}}}}}}}}}}}}}}}}}}},71:{l:{114:{l:{101:{l:{97:{l:{116:{l:{101:{l:{114:{l:{59:{c:[8811,824]}}}}}}}}}}}}}}},76:{l:{101:{l:{115:{l:{115:{l:{59:{c:[8825]}}}}}}}}},83:{l:{108:{l:{97:{l:{110:{l:{116:{l:{69:{l:{113:{l:{117:{l:{97:{l:{108:{l:{59:{c:[10878,824]}}}}}}}}}}}}}}}}}}}}},84:{l:{105:{l:{108:{l:{100:{l:{101:{l:{59:{c:[8821]}}}}}}}}}}}}}}}}}}}}}}}}},72:{l:{117:{l:{109:{l:{112:{l:{68:{l:{111:{l:{119:{l:{110:{l:{72:{l:{117:{l:{109:{l:{112:{l:{59:{c:[8782,824]}}}}}}}}}}}}}}}}},69:{l:{113:{l:{117:{l:{97:{l:{108:{l:{59:{c:[8783,824]}}}}}}}}}}}}}}}}}}},76:{l:{101:{l:{102:{l:{116:{l:{84:{l:{114:{l:{105:{l:{97:{l:{110:{l:{103:{l:{108:{l:{101:{l:{59:{c:[8938]},66:{l:{97:{l:{114:{l:{59:{c:[10703,824]}}}}}}},69:{l:{113:{l:{117:{l:{97:{l:{108:{l:{59:{c:[8940]}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}},115:{l:{115:{l:{59:{c:[8814]},69:{l:{113:{l:{117:{l:{97:{l:{108:{l:{59:{c:[8816]}}}}}}}}}}},71:{l:{114:{l:{101:{l:{97:{l:{116:{l:{101:{l:{114:{l:{59:{c:[8824]}}}}}}}}}}}}}}},76:{l:{101:{l:{115:{l:{115:{l:{59:{c:[8810,824]}}}}}}}}},83:{l:{108:{l:{97:{l:{110:{l:{116:{l:{69:{l:{113:{l:{117:{l:{97:{l:{108:{l:{59:{c:[10877,824]}}}}}}}}}}}}}}}}}}}}},84:{l:{105:{l:{108:{l:{100:{l:{101:{l:{59:{c:[8820]}}}}}}}}}}}}}}}}}}},78:{l:{101:{l:{115:{l:{116:{l:{101:{l:{100:{l:{71:{l:{114:{l:{101:{l:{97:{l:{116:{l:{101:{l:{114:{l:{71:{l:{114:{l:{101:{l:{97:{l:{116:{l:{101:{l:{114:{l:{59:{c:[10914,824]}}}}}}}}}}}}}}}}}}}}}}}}}}}}},76:{l:{101:{l:{115:{l:{115:{l:{76:{l:{101:{l:{115:{l:{115:{l:{59:{c:[10913,824]}}}}}}}}}}}}}}}}}}}}}}}}}}}}},80:{l:{114:{l:{101:{l:{99:{l:{101:{l:{100:{l:{101:{l:{115:{l:{59:{c:[8832]},69:{l:{113:{l:{117:{l:{97:{l:{108:{l:{59:{c:[10927,824]}}}}}}}}}}},83:{l:{108:{l:{97:{l:{110:{l:{116:{l:{69:{l:{113:{l:{117:{l:{97:{l:{108:{l:{59:{c:[8928]}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}},82:{l:{101:{l:{118:{l:{101:{l:{114:{l:{115:{l:{101:{l:{69:{l:{108:{l:{101:{l:{109:{l:{101:{l:{110:{l:{116:{l:{59:{c:[8716]}}}}}}}}}}}}}}}}}}}}}}}}}}},105:{l:{103:{l:{104:{l:{116:{l:{84:{l:{114:{l:{105:{l:{97:{l:{110:{l:{103:{l:{108:{l:{101:{l:{59:{c:[8939]},66:{l:{97:{l:{114:{l:{59:{c:[10704,824]}}}}}}},69:{l:{113:{l:{117:{l:{97:{l:{108:{l:{59:{c:[8941]}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}},83:{l:{113:{l:{117:{l:{97:{l:{114:{l:{101:{l:{83:{l:{117:{l:{98:{l:{115:{l:{101:{l:{116:{l:{59:{c:[8847,824]},69:{l:{113:{l:{117:{l:{97:{l:{108:{l:{59:{c:[8930]}}}}}}}}}}}}}}}}}}},112:{l:{101:{l:{114:{l:{115:{l:{101:{l:{116:{l:{59:{c:[8848,824]},69:{l:{113:{l:{117:{l:{97:{l:{108:{l:{59:{c:[8931]}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}},117:{l:{98:{l:{115:{l:{101:{l:{116:{l:{59:{c:[8834,8402]},69:{l:{113:{l:{117:{l:{97:{l:{108:{l:{59:{c:[8840]}}}}}}}}}}}}}}}}}}},99:{l:{99:{l:{101:{l:{101:{l:{100:{l:{115:{l:{59:{c:[8833]},69:{l:{113:{l:{117:{l:{97:{l:{108:{l:{59:{c:[10928,824]}}}}}}}}}}},83:{l:{108:{l:{97:{l:{110:{l:{116:{l:{69:{l:{113:{l:{117:{l:{97:{l:{108:{l:{59:{c:[8929]}}}}}}}}}}}}}}}}}}}}},84:{l:{105:{l:{108:{l:{100:{l:{101:{l:{59:{c:[8831,824]}}}}}}}}}}}}}}}}}}}}}}},112:{l:{101:{l:{114:{l:{115:{l:{101:{l:{116:{l:{59:{c:[8835,8402]},69:{l:{113:{l:{117:{l:{97:{l:{108:{l:{59:{c:[8841]}}}}}}}}}}}}}}}}}}}}}}}}}}},84:{l:{105:{l:{108:{l:{100:{l:{101:{l:{59:{c:[8769]},69:{l:{113:{l:{117:{l:{97:{l:{108:{l:{59:{c:[8772]}}}}}}}}}}},70:{l:{117:{l:{108:{l:{108:{l:{69:{l:{113:{l:{117:{l:{97:{l:{108:{l:{59:{c:[8775]}}}}}}}}}}}}}}}}}}},84:{l:{105:{l:{108:{l:{100:{l:{101:{l:{59:{c:[8777]}}}}}}}}}}}}}}}}}}}}},86:{l:{101:{l:{114:{l:{116:{l:{105:{l:{99:{l:{97:{l:{108:{l:{66:{l:{97:{l:{114:{l:{59:{c:[8740]}}}}}}}}}}}}}}}}}}}}}}}}}}},115:{l:{99:{l:{114:{l:{59:{c:[119977]}}}}}}},116:{l:{105:{l:{108:{l:{100:{l:{101:{l:{59:{c:[209]}},c:[209]}}}}}}}}},117:{l:{59:{c:[925]}}}}},79:{l:{69:{l:{108:{l:{105:{l:{103:{l:{59:{c:[338]}}}}}}}}},97:{l:{99:{l:{117:{l:{116:{l:{101:{l:{59:{c:[211]}},c:[211]}}}}}}}}},99:{l:{105:{l:{114:{l:{99:{l:{59:{c:[212]}},c:[212]}}}}},121:{l:{59:{c:[1054]}}}}},100:{l:{98:{l:{108:{l:{97:{l:{99:{l:{59:{c:[336]}}}}}}}}}}},102:{l:{114:{l:{59:{c:[120082]}}}}},103:{l:{114:{l:{97:{l:{118:{l:{101:{l:{59:{c:[210]}},c:[210]}}}}}}}}},109:{l:{97:{l:{99:{l:{114:{l:{59:{c:[332]}}}}}}},101:{l:{103:{l:{97:{l:{59:{c:[937]}}}}}}},105:{l:{99:{l:{114:{l:{111:{l:{110:{l:{59:{c:[927]}}}}}}}}}}}}},111:{l:{112:{l:{102:{l:{59:{c:[120134]}}}}}}},112:{l:{101:{l:{110:{l:{67:{l:{117:{l:{114:{l:{108:{l:{121:{l:{68:{l:{111:{l:{117:{l:{98:{l:{108:{l:{101:{l:{81:{l:{117:{l:{111:{l:{116:{l:{101:{l:{59:{c:[8220]}}}}}}}}}}}}}}}}}}}}}}},81:{l:{117:{l:{111:{l:{116:{l:{101:{l:{59:{c:[8216]}}}}}}}}}}}}}}}}}}}}}}}}}}},114:{l:{59:{c:[10836]}}},115:{l:{99:{l:{114:{l:{59:{c:[119978]}}}}},108:{l:{97:{l:{115:{l:{104:{l:{59:{c:[216]}},c:[216]}}}}}}}}},116:{l:{105:{l:{108:{l:{100:{l:{101:{l:{59:{c:[213]}},c:[213]}}}}},109:{l:{101:{l:{115:{l:{59:{c:[10807]}}}}}}}}}}},117:{l:{109:{l:{108:{l:{59:{c:[214]}},c:[214]}}}}},118:{l:{101:{l:{114:{l:{66:{l:{97:{l:{114:{l:{59:{c:[8254]}}}}},114:{l:{97:{l:{99:{l:{101:{l:{59:{c:[9182]}}},107:{l:{101:{l:{116:{l:{59:{c:[9140]}}}}}}}}}}}}}}},80:{l:{97:{l:{114:{l:{101:{l:{110:{l:{116:{l:{104:{l:{101:{l:{115:{l:{105:{l:{115:{l:{59:{c:[9180]}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}},80:{l:{97:{l:{114:{l:{116:{l:{105:{l:{97:{l:{108:{l:{68:{l:{59:{c:[8706]}}}}}}}}}}}}}}},99:{l:{121:{l:{59:{c:[1055]}}}}},102:{l:{114:{l:{59:{c:[120083]}}}}},104:{l:{105:{l:{59:{c:[934]}}}}},105:{l:{59:{c:[928]}}},108:{l:{117:{l:{115:{l:{77:{l:{105:{l:{110:{l:{117:{l:{115:{l:{59:{c:[177]}}}}}}}}}}}}}}}}},111:{l:{105:{l:{110:{l:{99:{l:{97:{l:{114:{l:{101:{l:{112:{l:{108:{l:{97:{l:{110:{l:{101:{l:{59:{c:[8460]}}}}}}}}}}}}}}}}}}}}}}},112:{l:{102:{l:{59:{c:[8473]}}}}}}},114:{l:{59:{c:[10939]},101:{l:{99:{l:{101:{l:{100:{l:{101:{l:{115:{l:{59:{c:[8826]},69:{l:{113:{l:{117:{l:{97:{l:{108:{l:{59:{c:[10927]}}}}}}}}}}},83:{l:{108:{l:{97:{l:{110:{l:{116:{l:{69:{l:{113:{l:{117:{l:{97:{l:{108:{l:{59:{c:[8828]}}}}}}}}}}}}}}}}}}}}},84:{l:{105:{l:{108:{l:{100:{l:{101:{l:{59:{c:[8830]}}}}}}}}}}}}}}}}}}}}}}},105:{l:{109:{l:{101:{l:{59:{c:[8243]}}}}}}},111:{l:{100:{l:{117:{l:{99:{l:{116:{l:{59:{c:[8719]}}}}}}}}},112:{l:{111:{l:{114:{l:{116:{l:{105:{l:{111:{l:{110:{l:{59:{c:[8759]},97:{l:{108:{l:{59:{c:[8733]}}}}}}}}}}}}}}}}}}}}}}},115:{l:{99:{l:{114:{l:{59:{c:[119979]}}}}},105:{l:{59:{c:[936]}}}}}}},81:{l:{85:{l:{79:{l:{84:{l:{59:{c:[34]}},c:[34]}}}}},102:{l:{114:{l:{59:{c:[120084]}}}}},111:{l:{112:{l:{102:{l:{59:{c:[8474]}}}}}}},115:{l:{99:{l:{114:{l:{59:{c:[119980]}}}}}}}}},82:{l:{66:{l:{97:{l:{114:{l:{114:{l:{59:{c:[10512]}}}}}}}}},69:{l:{71:{l:{59:{c:[174]}},c:[174]}}},97:{l:{99:{l:{117:{l:{116:{l:{101:{l:{59:{c:[340]}}}}}}}}},110:{l:{103:{l:{59:{c:[10219]}}}}},114:{l:{114:{l:{59:{c:[8608]},116:{l:{108:{l:{59:{c:[10518]}}}}}}}}}}},99:{l:{97:{l:{114:{l:{111:{l:{110:{l:{59:{c:[344]}}}}}}}}},101:{l:{100:{l:{105:{l:{108:{l:{59:{c:[342]}}}}}}}}},121:{l:{59:{c:[1056]}}}}},101:{l:{59:{c:[8476]},118:{l:{101:{l:{114:{l:{115:{l:{101:{l:{69:{l:{108:{l:{101:{l:{109:{l:{101:{l:{110:{l:{116:{l:{59:{c:[8715]}}}}}}}}}}}}},113:{l:{117:{l:{105:{l:{108:{l:{105:{l:{98:{l:{114:{l:{105:{l:{117:{l:{109:{l:{59:{c:[8651]}}}}}}}}}}}}}}}}}}}}}}},85:{l:{112:{l:{69:{l:{113:{l:{117:{l:{105:{l:{108:{l:{105:{l:{98:{l:{114:{l:{105:{l:{117:{l:{109:{l:{59:{c:[10607]}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}},102:{l:{114:{l:{59:{c:[8476]}}}}},104:{l:{111:{l:{59:{c:[929]}}}}},105:{l:{103:{l:{104:{l:{116:{l:{65:{l:{110:{l:{103:{l:{108:{l:{101:{l:{66:{l:{114:{l:{97:{l:{99:{l:{107:{l:{101:{l:{116:{l:{59:{c:[10217]}}}}}}}}}}}}}}}}}}}}}}},114:{l:{114:{l:{111:{l:{119:{l:{59:{c:[8594]},66:{l:{97:{l:{114:{l:{59:{c:[8677]}}}}}}},76:{l:{101:{l:{102:{l:{116:{l:{65:{l:{114:{l:{114:{l:{111:{l:{119:{l:{59:{c:[8644]}}}}}}}}}}}}}}}}}}}}}}}}}}}}},67:{l:{101:{l:{105:{l:{108:{l:{105:{l:{110:{l:{103:{l:{59:{c:[8969]}}}}}}}}}}}}}}},68:{l:{111:{l:{117:{l:{98:{l:{108:{l:{101:{l:{66:{l:{114:{l:{97:{l:{99:{l:{107:{l:{101:{l:{116:{l:{59:{c:[10215]}}}}}}}}}}}}}}}}}}}}}}},119:{l:{110:{l:{84:{l:{101:{l:{101:{l:{86:{l:{101:{l:{99:{l:{116:{l:{111:{l:{114:{l:{59:{c:[10589]}}}}}}}}}}}}}}}}}}},86:{l:{101:{l:{99:{l:{116:{l:{111:{l:{114:{l:{59:{c:[8642]},66:{l:{97:{l:{114:{l:{59:{c:[10581]}}}}}}}}}}}}}}}}}}}}}}}}}}},70:{l:{108:{l:{111:{l:{111:{l:{114:{l:{59:{c:[8971]}}}}}}}}}}},84:{l:{101:{l:{101:{l:{59:{c:[8866]},65:{l:{114:{l:{114:{l:{111:{l:{119:{l:{59:{c:[8614]}}}}}}}}}}},86:{l:{101:{l:{99:{l:{116:{l:{111:{l:{114:{l:{59:{c:[10587]}}}}}}}}}}}}}}}}},114:{l:{105:{l:{97:{l:{110:{l:{103:{l:{108:{l:{101:{l:{59:{c:[8883]},66:{l:{97:{l:{114:{l:{59:{c:[10704]}}}}}}},69:{l:{113:{l:{117:{l:{97:{l:{108:{l:{59:{c:[8885]}}}}}}}}}}}}}}}}}}}}}}}}}}},85:{l:{112:{l:{68:{l:{111:{l:{119:{l:{110:{l:{86:{l:{101:{l:{99:{l:{116:{l:{111:{l:{114:{l:{59:{c:[10575]}}}}}}}}}}}}}}}}}}}}},84:{l:{101:{l:{101:{l:{86:{l:{101:{l:{99:{l:{116:{l:{111:{l:{114:{l:{59:{c:[10588]}}}}}}}}}}}}}}}}}}},86:{l:{101:{l:{99:{l:{116:{l:{111:{l:{114:{l:{59:{c:[8638]},66:{l:{97:{l:{114:{l:{59:{c:[10580]}}}}}}}}}}}}}}}}}}}}}}},86:{l:{101:{l:{99:{l:{116:{l:{111:{l:{114:{l:{59:{c:[8640]},66:{l:{97:{l:{114:{l:{59:{c:[10579]}}}}}}}}}}}}}}}}}}},97:{l:{114:{l:{114:{l:{111:{l:{119:{l:{59:{c:[8658]}}}}}}}}}}}}}}}}}}},111:{l:{112:{l:{102:{l:{59:{c:[8477]}}}}},117:{l:{110:{l:{100:{l:{73:{l:{109:{l:{112:{l:{108:{l:{105:{l:{101:{l:{115:{l:{59:{c:[10608]}}}}}}}}}}}}}}}}}}}}}}},114:{l:{105:{l:{103:{l:{104:{l:{116:{l:{97:{l:{114:{l:{114:{l:{111:{l:{119:{l:{59:{c:[8667]}}}}}}}}}}}}}}}}}}}}},115:{l:{99:{l:{114:{l:{59:{c:[8475]}}}}},104:{l:{59:{c:[8625]}}}}},117:{l:{108:{l:{101:{l:{68:{l:{101:{l:{108:{l:{97:{l:{121:{l:{101:{l:{100:{l:{59:{c:[10740]}}}}}}}}}}}}}}}}}}}}}}},83:{l:{72:{l:{67:{l:{72:{l:{99:{l:{121:{l:{59:{c:[1065]}}}}}}}}},99:{l:{121:{l:{59:{c:[1064]}}}}}}},79:{l:{70:{l:{84:{l:{99:{l:{121:{l:{59:{c:[1068]}}}}}}}}}}},97:{l:{99:{l:{117:{l:{116:{l:{101:{l:{59:{c:[346]}}}}}}}}}}},99:{l:{59:{c:[10940]},97:{l:{114:{l:{111:{l:{110:{l:{59:{c:[352]}}}}}}}}},101:{l:{100:{l:{105:{l:{108:{l:{59:{c:[350]}}}}}}}}},105:{l:{114:{l:{99:{l:{59:{c:[348]}}}}}}},121:{l:{59:{c:[1057]}}}}},102:{l:{114:{l:{59:{c:[120086]}}}}},104:{l:{111:{l:{114:{l:{116:{l:{68:{l:{111:{l:{119:{l:{110:{l:{65:{l:{114:{l:{114:{l:{111:{l:{119:{l:{59:{c:[8595]}}}}}}}}}}}}}}}}}}},76:{l:{101:{l:{102:{l:{116:{l:{65:{l:{114:{l:{114:{l:{111:{l:{119:{l:{59:{c:[8592]}}}}}}}}}}}}}}}}}}},82:{l:{105:{l:{103:{l:{104:{l:{116:{l:{65:{l:{114:{l:{114:{l:{111:{l:{119:{l:{59:{c:[8594]}}}}}}}}}}}}}}}}}}}}},85:{l:{112:{l:{65:{l:{114:{l:{114:{l:{111:{l:{119:{l:{59:{c:[8593]}}}}}}}}}}}}}}}}}}}}}}},105:{l:{103:{l:{109:{l:{97:{l:{59:{c:[931]}}}}}}}}},109:{l:{97:{l:{108:{l:{108:{l:{67:{l:{105:{l:{114:{l:{99:{l:{108:{l:{101:{l:{59:{c:[8728]}}}}}}}}}}}}}}}}}}}}},111:{l:{112:{l:{102:{l:{59:{c:[120138]}}}}}}},113:{l:{114:{l:{116:{l:{59:{c:[8730]}}}}},117:{l:{97:{l:{114:{l:{101:{l:{59:{c:[9633]},73:{l:{110:{l:{116:{l:{101:{l:{114:{l:{115:{l:{101:{l:{99:{l:{116:{l:{105:{l:{111:{l:{110:{l:{59:{c:[8851]}}}}}}}}}}}}}}}}}}}}}}}}},83:{l:{117:{l:{98:{l:{115:{l:{101:{l:{116:{l:{59:{c:[8847]},69:{l:{113:{l:{117:{l:{97:{l:{108:{l:{59:{c:[8849]}}}}}}}}}}}}}}}}}}},112:{l:{101:{l:{114:{l:{115:{l:{101:{l:{116:{l:{59:{c:[8848]},69:{l:{113:{l:{117:{l:{97:{l:{108:{l:{59:{c:[8850]}}}}}}}}}}}}}}}}}}}}}}}}}}},85:{l:{110:{l:{105:{l:{111:{l:{110:{l:{59:{c:[8852]}}}}}}}}}}}}}}}}}}}}},115:{l:{99:{l:{114:{l:{59:{c:[119982]}}}}}}},116:{l:{97:{l:{114:{l:{59:{c:[8902]}}}}}}},117:{l:{98:{l:{59:{c:[8912]},115:{l:{101:{l:{116:{l:{59:{c:[8912]},69:{l:{113:{l:{117:{l:{97:{l:{108:{l:{59:{c:[8838]}}}}}}}}}}}}}}}}}}},99:{l:{99:{l:{101:{l:{101:{l:{100:{l:{115:{l:{59:{c:[8827]},69:{l:{113:{l:{117:{l:{97:{l:{108:{l:{59:{c:[10928]}}}}}}}}}}},83:{l:{108:{l:{97:{l:{110:{l:{116:{l:{69:{l:{113:{l:{117:{l:{97:{l:{108:{l:{59:{c:[8829]}}}}}}}}}}}}}}}}}}}}},84:{l:{105:{l:{108:{l:{100:{l:{101:{l:{59:{c:[8831]}}}}}}}}}}}}}}}}}}}}},104:{l:{84:{l:{104:{l:{97:{l:{116:{l:{59:{c:[8715]}}}}}}}}}}}}},109:{l:{59:{c:[8721]}}},112:{l:{59:{c:[8913]},101:{l:{114:{l:{115:{l:{101:{l:{116:{l:{59:{c:[8835]},69:{l:{113:{l:{117:{l:{97:{l:{108:{l:{59:{c:[8839]}}}}}}}}}}}}}}}}}}}}},115:{l:{101:{l:{116:{l:{59:{c:[8913]}}}}}}}}}}}}},84:{l:{72:{l:{79:{l:{82:{l:{78:{l:{59:{c:[222]}},c:[222]}}}}}}},82:{l:{65:{l:{68:{l:{69:{l:{59:{c:[8482]}}}}}}}}},83:{l:{72:{l:{99:{l:{121:{l:{59:{c:[1035]}}}}}}},99:{l:{121:{l:{59:{c:[1062]}}}}}}},97:{l:{98:{l:{59:{c:[9]}}},117:{l:{59:{c:[932]}}}}},99:{l:{97:{l:{114:{l:{111:{l:{110:{l:{59:{c:[356]}}}}}}}}},101:{l:{100:{l:{105:{l:{108:{l:{59:{c:[354]}}}}}}}}},121:{l:{59:{c:[1058]}}}}},102:{l:{114:{l:{59:{c:[120087]}}}}},104:{l:{101:{l:{114:{l:{101:{l:{102:{l:{111:{l:{114:{l:{101:{l:{59:{c:[8756]}}}}}}}}}}}}},116:{l:{97:{l:{59:{c:[920]}}}}}}},105:{l:{99:{l:{107:{l:{83:{l:{112:{l:{97:{l:{99:{l:{101:{l:{59:{c:[8287,8202]}}}}}}}}}}}}}}},110:{l:{83:{l:{112:{l:{97:{l:{99:{l:{101:{l:{59:{c:[8201]}}}}}}}}}}}}}}}}},105:{l:{108:{l:{100:{l:{101:{l:{59:{c:[8764]},69:{l:{113:{l:{117:{l:{97:{l:{108:{l:{59:{c:[8771]}}}}}}}}}}},70:{l:{117:{l:{108:{l:{108:{l:{69:{l:{113:{l:{117:{l:{97:{l:{108:{l:{59:{c:[8773]}}}}}}}}}}}}}}}}}}},84:{l:{105:{l:{108:{l:{100:{l:{101:{l:{59:{c:[8776]}}}}}}}}}}}}}}}}}}},111:{l:{112:{l:{102:{l:{59:{c:[120139]}}}}}}},114:{l:{105:{l:{112:{l:{108:{l:{101:{l:{68:{l:{111:{l:{116:{l:{59:{c:[8411]}}}}}}}}}}}}}}}}},115:{l:{99:{l:{114:{l:{59:{c:[119983]}}}}},116:{l:{114:{l:{111:{l:{107:{l:{59:{c:[358]}}}}}}}}}}}}},85:{l:{97:{l:{99:{l:{117:{l:{116:{l:{101:{l:{59:{c:[218]}},c:[218]}}}}}}},114:{l:{114:{l:{59:{c:[8607]},111:{l:{99:{l:{105:{l:{114:{l:{59:{c:[10569]}}}}}}}}}}}}}}},98:{l:{114:{l:{99:{l:{121:{l:{59:{c:[1038]}}}}},101:{l:{118:{l:{101:{l:{59:{c:[364]}}}}}}}}}}},99:{l:{105:{l:{114:{l:{99:{l:{59:{c:[219]}},c:[219]}}}}},121:{l:{59:{c:[1059]}}}}},100:{l:{98:{l:{108:{l:{97:{l:{99:{l:{59:{c:[368]}}}}}}}}}}},102:{l:{114:{l:{59:{c:[120088]}}}}},103:{l:{114:{l:{97:{l:{118:{l:{101:{l:{59:{c:[217]}},c:[217]}}}}}}}}},109:{l:{97:{l:{99:{l:{114:{l:{59:{c:[362]}}}}}}}}},110:{l:{100:{l:{101:{l:{114:{l:{66:{l:{97:{l:{114:{l:{59:{c:[95]}}}}},114:{l:{97:{l:{99:{l:{101:{l:{59:{c:[9183]}}},107:{l:{101:{l:{116:{l:{59:{c:[9141]}}}}}}}}}}}}}}},80:{l:{97:{l:{114:{l:{101:{l:{110:{l:{116:{l:{104:{l:{101:{l:{115:{l:{105:{l:{115:{l:{59:{c:[9181]}}}}}}}}}}}}}}}}}}}}}}}}}}}}},105:{l:{111:{l:{110:{l:{59:{c:[8899]},80:{l:{108:{l:{117:{l:{115:{l:{59:{c:[8846]}}}}}}}}}}}}}}}}},111:{l:{103:{l:{111:{l:{110:{l:{59:{c:[370]}}}}}}},112:{l:{102:{l:{59:{c:[120140]}}}}}}},112:{l:{65:{l:{114:{l:{114:{l:{111:{l:{119:{l:{59:{c:[8593]},66:{l:{97:{l:{114:{l:{59:{c:[10514]}}}}}}},68:{l:{111:{l:{119:{l:{110:{l:{65:{l:{114:{l:{114:{l:{111:{l:{119:{l:{59:{c:[8645]}}}}}}}}}}}}}}}}}}}}}}}}}}}}},68:{l:{111:{l:{119:{l:{110:{l:{65:{l:{114:{l:{114:{l:{111:{l:{119:{l:{59:{c:[8597]}}}}}}}}}}}}}}}}}}},69:{l:{113:{l:{117:{l:{105:{l:{108:{l:{105:{l:{98:{l:{114:{l:{105:{l:{117:{l:{109:{l:{59:{c:[10606]}}}}}}}}}}}}}}}}}}}}}}},84:{l:{101:{l:{101:{l:{59:{c:[8869]},65:{l:{114:{l:{114:{l:{111:{l:{119:{l:{59:{c:[8613]}}}}}}}}}}}}}}}}},97:{l:{114:{l:{114:{l:{111:{l:{119:{l:{59:{c:[8657]}}}}}}}}}}},100:{l:{111:{l:{119:{l:{110:{l:{97:{l:{114:{l:{114:{l:{111:{l:{119:{l:{59:{c:[8661]}}}}}}}}}}}}}}}}}}},112:{l:{101:{l:{114:{l:{76:{l:{101:{l:{102:{l:{116:{l:{65:{l:{114:{l:{114:{l:{111:{l:{119:{l:{59:{c:[8598]}}}}}}}}}}}}}}}}}}},82:{l:{105:{l:{103:{l:{104:{l:{116:{l:{65:{l:{114:{l:{114:{l:{111:{l:{119:{l:{59:{c:[8599]}}}}}}}}}}}}}}}}}}}}}}}}}}},115:{l:{105:{l:{59:{c:[978]},108:{l:{111:{l:{110:{l:{59:{c:[933]}}}}}}}}}}}}},114:{l:{105:{l:{110:{l:{103:{l:{59:{c:[366]}}}}}}}}},115:{l:{99:{l:{114:{l:{59:{c:[119984]}}}}}}},116:{l:{105:{l:{108:{l:{100:{l:{101:{l:{59:{c:[360]}}}}}}}}}}},117:{l:{109:{l:{108:{l:{59:{c:[220]}},c:[220]}}}}}}},86:{l:{68:{l:{97:{l:{115:{l:{104:{l:{59:{c:[8875]}}}}}}}}},98:{l:{97:{l:{114:{l:{59:{c:[10987]}}}}}}},99:{l:{121:{l:{59:{c:[1042]}}}}},100:{l:{97:{l:{115:{l:{104:{l:{59:{c:[8873]},108:{l:{59:{c:[10982]}}}}}}}}}}},101:{l:{101:{l:{59:{c:[8897]}}},114:{l:{98:{l:{97:{l:{114:{l:{59:{c:[8214]}}}}}}},116:{l:{59:{c:[8214]},105:{l:{99:{l:{97:{l:{108:{l:{66:{l:{97:{l:{114:{l:{59:{c:[8739]}}}}}}},76:{l:{105:{l:{110:{l:{101:{l:{59:{c:[124]}}}}}}}}},83:{l:{101:{l:{112:{l:{97:{l:{114:{l:{97:{l:{116:{l:{111:{l:{114:{l:{59:{c:[10072]}}}}}}}}}}}}}}}}}}},84:{l:{105:{l:{108:{l:{100:{l:{101:{l:{59:{c:[8768]}}}}}}}}}}}}}}}}}}}}},121:{l:{84:{l:{104:{l:{105:{l:{110:{l:{83:{l:{112:{l:{97:{l:{99:{l:{101:{l:{59:{c:[8202]}}}}}}}}}}}}}}}}}}}}}}}}},102:{l:{114:{l:{59:{c:[120089]}}}}},111:{l:{112:{l:{102:{l:{59:{c:[120141]}}}}}}},115:{l:{99:{l:{114:{l:{59:{c:[119985]}}}}}}},118:{l:{100:{l:{97:{l:{115:{l:{104:{l:{59:{c:[8874]}}}}}}}}}}}}},87:{l:{99:{l:{105:{l:{114:{l:{99:{l:{59:{c:[372]}}}}}}}}},101:{l:{100:{l:{103:{l:{101:{l:{59:{c:[8896]}}}}}}}}},102:{l:{114:{l:{59:{c:[120090]}}}}},111:{l:{112:{l:{102:{l:{59:{c:[120142]}}}}}}},115:{l:{99:{l:{114:{l:{59:{c:[119986]}}}}}}}}},88:{l:{102:{l:{114:{l:{59:{c:[120091]}}}}},105:{l:{59:{c:[926]}}},111:{l:{112:{l:{102:{l:{59:{c:[120143]}}}}}}},115:{l:{99:{l:{114:{l:{59:{c:[119987]}}}}}}}}},89:{l:{65:{l:{99:{l:{121:{l:{59:{c:[1071]}}}}}}},73:{l:{99:{l:{121:{l:{59:{c:[1031]}}}}}}},85:{l:{99:{l:{121:{l:{59:{c:[1070]}}}}}}},97:{l:{99:{l:{117:{l:{116:{l:{101:{l:{59:{c:[221]}},c:[221]}}}}}}}}},99:{l:{105:{l:{114:{l:{99:{l:{59:{c:[374]}}}}}}},121:{l:{59:{c:[1067]}}}}},102:{l:{114:{l:{59:{c:[120092]}}}}},111:{l:{112:{l:{102:{l:{59:{c:[120144]}}}}}}},115:{l:{99:{l:{114:{l:{59:{c:[119988]}}}}}}},117:{l:{109:{l:{108:{l:{59:{c:[376]}}}}}}}}},90:{l:{72:{l:{99:{l:{121:{l:{59:{c:[1046]}}}}}}},97:{l:{99:{l:{117:{l:{116:{l:{101:{l:{59:{c:[377]}}}}}}}}}}},99:{l:{97:{l:{114:{l:{111:{l:{110:{l:{59:{c:[381]}}}}}}}}},121:{l:{59:{c:[1047]}}}}},100:{l:{111:{l:{116:{l:{59:{c:[379]}}}}}}},101:{l:{114:{l:{111:{l:{87:{l:{105:{l:{100:{l:{116:{l:{104:{l:{83:{l:{112:{l:{97:{l:{99:{l:{101:{l:{59:{c:[8203]}}}}}}}}}}}}}}}}}}}}}}}}},116:{l:{97:{l:{59:{c:[918]}}}}}}},102:{l:{114:{l:{59:{c:[8488]}}}}},111:{l:{112:{l:{102:{l:{59:{c:[8484]}}}}}}},115:{l:{99:{l:{114:{l:{59:{c:[119989]}}}}}}}}},97:{l:{97:{l:{99:{l:{117:{l:{116:{l:{101:{l:{59:{c:[225]}},c:[225]}}}}}}}}},98:{l:{114:{l:{101:{l:{118:{l:{101:{l:{59:{c:[259]}}}}}}}}}}},99:{l:{59:{c:[8766]},69:{l:{59:{c:[8766,819]}}},100:{l:{59:{c:[8767]}}},105:{l:{114:{l:{99:{l:{59:{c:[226]}},c:[226]}}}}},117:{l:{116:{l:{101:{l:{59:{c:[180]}},c:[180]}}}}},121:{l:{59:{c:[1072]}}}}},101:{l:{108:{l:{105:{l:{103:{l:{59:{c:[230]}},c:[230]}}}}}}},102:{l:{59:{c:[8289]},114:{l:{59:{c:[120094]}}}}},103:{l:{114:{l:{97:{l:{118:{l:{101:{l:{59:{c:[224]}},c:[224]}}}}}}}}},108:{l:{101:{l:{102:{l:{115:{l:{121:{l:{109:{l:{59:{c:[8501]}}}}}}}}},112:{l:{104:{l:{59:{c:[8501]}}}}}}},112:{l:{104:{l:{97:{l:{59:{c:[945]}}}}}}}}},109:{l:{97:{l:{99:{l:{114:{l:{59:{c:[257]}}}}},108:{l:{103:{l:{59:{c:[10815]}}}}}}},112:{l:{59:{c:[38]}},c:[38]}}},110:{l:{100:{l:{59:{c:[8743]},97:{l:{110:{l:{100:{l:{59:{c:[10837]}}}}}}},100:{l:{59:{c:[10844]}}},115:{l:{108:{l:{111:{l:{112:{l:{101:{l:{59:{c:[10840]}}}}}}}}}}},118:{l:{59:{c:[10842]}}}}},103:{l:{59:{c:[8736]},101:{l:{59:{c:[10660]}}},108:{l:{101:{l:{59:{c:[8736]}}}}},109:{l:{115:{l:{100:{l:{59:{c:[8737]},97:{l:{97:{l:{59:{c:[10664]}}},98:{l:{59:{c:[10665]}}},99:{l:{59:{c:[10666]}}},100:{l:{59:{c:[10667]}}},101:{l:{59:{c:[10668]}}},102:{l:{59:{c:[10669]}}},103:{l:{59:{c:[10670]}}},104:{l:{59:{c:[10671]}}}}}}}}}}},114:{l:{116:{l:{59:{c:[8735]},118:{l:{98:{l:{59:{c:[8894]},100:{l:{59:{c:[10653]}}}}}}}}}}},115:{l:{112:{l:{104:{l:{59:{c:[8738]}}}}},116:{l:{59:{c:[197]}}}}},122:{l:{97:{l:{114:{l:{114:{l:{59:{c:[9084]}}}}}}}}}}}}},111:{l:{103:{l:{111:{l:{110:{l:{59:{c:[261]}}}}}}},112:{l:{102:{l:{59:{c:[120146]}}}}}}},112:{l:{59:{c:[8776]},69:{l:{59:{c:[10864]}}},97:{l:{99:{l:{105:{l:{114:{l:{59:{c:[10863]}}}}}}}}},101:{l:{59:{c:[8778]}}},105:{l:{100:{l:{59:{c:[8779]}}}}},111:{l:{115:{l:{59:{c:[39]}}}}},112:{l:{114:{l:{111:{l:{120:{l:{59:{c:[8776]},101:{l:{113:{l:{59:{c:[8778]}}}}}}}}}}}}}}},114:{l:{105:{l:{110:{l:{103:{l:{59:{c:[229]}},c:[229]}}}}}}},115:{l:{99:{l:{114:{l:{59:{c:[119990]}}}}},116:{l:{59:{c:[42]}}},121:{l:{109:{l:{112:{l:{59:{c:[8776]},101:{l:{113:{l:{59:{c:[8781]}}}}}}}}}}}}},116:{l:{105:{l:{108:{l:{100:{l:{101:{l:{59:{c:[227]}},c:[227]}}}}}}}}},117:{l:{109:{l:{108:{l:{59:{c:[228]}},c:[228]}}}}},119:{l:{99:{l:{111:{l:{110:{l:{105:{l:{110:{l:{116:{l:{59:{c:[8755]}}}}}}}}}}}}},105:{l:{110:{l:{116:{l:{59:{c:[10769]}}}}}}}}}}},98:{l:{78:{l:{111:{l:{116:{l:{59:{c:[10989]}}}}}}},97:{l:{99:{l:{107:{l:{99:{l:{111:{l:{110:{l:{103:{l:{59:{c:[8780]}}}}}}}}},101:{l:{112:{l:{115:{l:{105:{l:{108:{l:{111:{l:{110:{l:{59:{c:[1014]}}}}}}}}}}}}}}},112:{l:{114:{l:{105:{l:{109:{l:{101:{l:{59:{c:[8245]}}}}}}}}}}},115:{l:{105:{l:{109:{l:{59:{c:[8765]},101:{l:{113:{l:{59:{c:[8909]}}}}}}}}}}}}}}},114:{l:{118:{l:{101:{l:{101:{l:{59:{c:[8893]}}}}}}},119:{l:{101:{l:{100:{l:{59:{c:[8965]},103:{l:{101:{l:{59:{c:[8965]}}}}}}}}}}}}}}},98:{l:{114:{l:{107:{l:{59:{c:[9141]},116:{l:{98:{l:{114:{l:{107:{l:{59:{c:[9142]}}}}}}}}}}}}}}},99:{l:{111:{l:{110:{l:{103:{l:{59:{c:[8780]}}}}}}},121:{l:{59:{c:[1073]}}}}},100:{l:{113:{l:{117:{l:{111:{l:{59:{c:[8222]}}}}}}}}},101:{l:{99:{l:{97:{l:{117:{l:{115:{l:{59:{c:[8757]},101:{l:{59:{c:[8757]}}}}}}}}}}},109:{l:{112:{l:{116:{l:{121:{l:{118:{l:{59:{c:[10672]}}}}}}}}}}},112:{l:{115:{l:{105:{l:{59:{c:[1014]}}}}}}},114:{l:{110:{l:{111:{l:{117:{l:{59:{c:[8492]}}}}}}}}},116:{l:{97:{l:{59:{c:[946]}}},104:{l:{59:{c:[8502]}}},119:{l:{101:{l:{101:{l:{110:{l:{59:{c:[8812]}}}}}}}}}}}}},102:{l:{114:{l:{59:{c:[120095]}}}}},105:{l:{103:{l:{99:{l:{97:{l:{112:{l:{59:{c:[8898]}}}}},105:{l:{114:{l:{99:{l:{59:{c:[9711]}}}}}}},117:{l:{112:{l:{59:{c:[8899]}}}}}}},111:{l:{100:{l:{111:{l:{116:{l:{59:{c:[10752]}}}}}}},112:{l:{108:{l:{117:{l:{115:{l:{59:{c:[10753]}}}}}}}}},116:{l:{105:{l:{109:{l:{101:{l:{115:{l:{59:{c:[10754]}}}}}}}}}}}}},115:{l:{113:{l:{99:{l:{117:{l:{112:{l:{59:{c:[10758]}}}}}}}}},116:{l:{97:{l:{114:{l:{59:{c:[9733]}}}}}}}}},116:{l:{114:{l:{105:{l:{97:{l:{110:{l:{103:{l:{108:{l:{101:{l:{100:{l:{111:{l:{119:{l:{110:{l:{59:{c:[9661]}}}}}}}}},117:{l:{112:{l:{59:{c:[9651]}}}}}}}}}}}}}}}}}}}}},117:{l:{112:{l:{108:{l:{117:{l:{115:{l:{59:{c:[10756]}}}}}}}}}}},118:{l:{101:{l:{101:{l:{59:{c:[8897]}}}}}}},119:{l:{101:{l:{100:{l:{103:{l:{101:{l:{59:{c:[8896]}}}}}}}}}}}}}}},107:{l:{97:{l:{114:{l:{111:{l:{119:{l:{59:{c:[10509]}}}}}}}}}}},108:{l:{97:{l:{99:{l:{107:{l:{108:{l:{111:{l:{122:{l:{101:{l:{110:{l:{103:{l:{101:{l:{59:{c:[10731]}}}}}}}}}}}}}}},115:{l:{113:{l:{117:{l:{97:{l:{114:{l:{101:{l:{59:{c:[9642]}}}}}}}}}}}}},116:{l:{114:{l:{105:{l:{97:{l:{110:{l:{103:{l:{108:{l:{101:{l:{59:{c:[9652]},100:{l:{111:{l:{119:{l:{110:{l:{59:{c:[9662]}}}}}}}}},108:{l:{101:{l:{102:{l:{116:{l:{59:{c:[9666]}}}}}}}}},114:{l:{105:{l:{103:{l:{104:{l:{116:{l:{59:{c:[9656]}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}},110:{l:{107:{l:{59:{c:[9251]}}}}}}},107:{l:{49:{l:{50:{l:{59:{c:[9618]}}},52:{l:{59:{c:[9617]}}}}},51:{l:{52:{l:{59:{c:[9619]}}}}}}},111:{l:{99:{l:{107:{l:{59:{c:[9608]}}}}}}}}},110:{l:{101:{l:{59:{c:[61,8421]},113:{l:{117:{l:{105:{l:{118:{l:{59:{c:[8801,8421]}}}}}}}}}}},111:{l:{116:{l:{59:{c:[8976]}}}}}}},111:{l:{112:{l:{102:{l:{59:{c:[120147]}}}}},116:{l:{59:{c:[8869]},116:{l:{111:{l:{109:{l:{59:{c:[8869]}}}}}}}}},119:{l:{116:{l:{105:{l:{101:{l:{59:{c:[8904]}}}}}}}}},120:{l:{68:{l:{76:{l:{59:{c:[9559]}}},82:{l:{59:{c:[9556]}}},108:{l:{59:{c:[9558]}}},114:{l:{59:{c:[9555]}}}}},72:{l:{59:{c:[9552]},68:{l:{59:{c:[9574]}}},85:{l:{59:{c:[9577]}}},100:{l:{59:{c:[9572]}}},117:{l:{59:{c:[9575]}}}}},85:{l:{76:{l:{59:{c:[9565]}}},82:{l:{59:{c:[9562]}}},108:{l:{59:{c:[9564]}}},114:{l:{59:{c:[9561]}}}}},86:{l:{59:{c:[9553]},72:{l:{59:{c:[9580]}}},76:{l:{59:{c:[9571]}}},82:{l:{59:{c:[9568]}}},104:{l:{59:{c:[9579]}}},108:{l:{59:{c:[9570]}}},114:{l:{59:{c:[9567]}}}}},98:{l:{111:{l:{120:{l:{59:{c:[10697]}}}}}}},100:{l:{76:{l:{59:{c:[9557]}}},82:{l:{59:{c:[9554]}}},108:{l:{59:{c:[9488]}}},114:{l:{59:{c:[9484]}}}}},104:{l:{59:{c:[9472]},68:{l:{59:{c:[9573]}}},85:{l:{59:{c:[9576]}}},100:{l:{59:{c:[9516]}}},117:{l:{59:{c:[9524]}}}}},109:{l:{105:{l:{110:{l:{117:{l:{115:{l:{59:{c:[8863]}}}}}}}}}}},112:{l:{108:{l:{117:{l:{115:{l:{59:{c:[8862]}}}}}}}}},116:{l:{105:{l:{109:{l:{101:{l:{115:{l:{59:{c:[8864]}}}}}}}}}}},117:{l:{76:{l:{59:{c:[9563]}}},82:{l:{59:{c:[9560]}}},108:{l:{59:{c:[9496]}}},114:{l:{59:{c:[9492]}}}}},118:{l:{59:{c:[9474]},72:{l:{59:{c:[9578]}}},76:{l:{59:{c:[9569]}}},82:{l:{59:{c:[9566]}}},104:{l:{59:{c:[9532]}}},108:{l:{59:{c:[9508]}}},114:{l:{59:{c:[9500]}}}}}}}}},112:{l:{114:{l:{105:{l:{109:{l:{101:{l:{59:{c:[8245]}}}}}}}}}}},114:{l:{101:{l:{118:{l:{101:{l:{59:{c:[728]}}}}}}},118:{l:{98:{l:{97:{l:{114:{l:{59:{c:[166]}},c:[166]}}}}}}}}},115:{l:{99:{l:{114:{l:{59:{c:[119991]}}}}},101:{l:{109:{l:{105:{l:{59:{c:[8271]}}}}}}},105:{l:{109:{l:{59:{c:[8765]},101:{l:{59:{c:[8909]}}}}}}},111:{l:{108:{l:{59:{c:[92]},98:{l:{59:{c:[10693]}}},104:{l:{115:{l:{117:{l:{98:{l:{59:{c:[10184]}}}}}}}}}}}}}}},117:{l:{108:{l:{108:{l:{59:{c:[8226]},101:{l:{116:{l:{59:{c:[8226]}}}}}}}}},109:{l:{112:{l:{59:{c:[8782]},69:{l:{59:{c:[10926]}}},101:{l:{59:{c:[8783]},113:{l:{59:{c:[8783]}}}}}}}}}}}}},99:{l:{97:{l:{99:{l:{117:{l:{116:{l:{101:{l:{59:{c:[263]}}}}}}}}},112:{l:{59:{c:[8745]},97:{l:{110:{l:{100:{l:{59:{c:[10820]}}}}}}},98:{l:{114:{l:{99:{l:{117:{l:{112:{l:{59:{c:[10825]}}}}}}}}}}},99:{l:{97:{l:{112:{l:{59:{c:[10827]}}}}},117:{l:{112:{l:{59:{c:[10823]}}}}}}},100:{l:{111:{l:{116:{l:{59:{c:[10816]}}}}}}},115:{l:{59:{c:[8745,65024]}}}}},114:{l:{101:{l:{116:{l:{59:{c:[8257]}}}}},111:{l:{110:{l:{59:{c:[711]}}}}}}}}},99:{l:{97:{l:{112:{l:{115:{l:{59:{c:[10829]}}}}},114:{l:{111:{l:{110:{l:{59:{c:[269]}}}}}}}}},101:{l:{100:{l:{105:{l:{108:{l:{59:{c:[231]}},c:[231]}}}}}}},105:{l:{114:{l:{99:{l:{59:{c:[265]}}}}}}},117:{l:{112:{l:{115:{l:{59:{c:[10828]},115:{l:{109:{l:{59:{c:[10832]}}}}}}}}}}}}},100:{l:{111:{l:{116:{l:{59:{c:[267]}}}}}}},101:{l:{100:{l:{105:{l:{108:{l:{59:{c:[184]}},c:[184]}}}}},109:{l:{112:{l:{116:{l:{121:{l:{118:{l:{59:{c:[10674]}}}}}}}}}}},110:{l:{116:{l:{59:{c:[162]},101:{l:{114:{l:{100:{l:{111:{l:{116:{l:{59:{c:[183]}}}}}}}}}}}},c:[162]}}}}},102:{l:{114:{l:{59:{c:[120096]}}}}},104:{l:{99:{l:{121:{l:{59:{c:[1095]}}}}},101:{l:{99:{l:{107:{l:{59:{c:[10003]},109:{l:{97:{l:{114:{l:{107:{l:{59:{c:[10003]}}}}}}}}}}}}}}},105:{l:{59:{c:[967]}}}}},105:{l:{114:{l:{59:{c:[9675]},69:{l:{59:{c:[10691]}}},99:{l:{59:{c:[710]},101:{l:{113:{l:{59:{c:[8791]}}}}},108:{l:{101:{l:{97:{l:{114:{l:{114:{l:{111:{l:{119:{l:{108:{l:{101:{l:{102:{l:{116:{l:{59:{c:[8634]}}}}}}}}},114:{l:{105:{l:{103:{l:{104:{l:{116:{l:{59:{c:[8635]}}}}}}}}}}}}}}}}}}}}},100:{l:{82:{l:{59:{c:[174]}}},83:{l:{59:{c:[9416]}}},97:{l:{115:{l:{116:{l:{59:{c:[8859]}}}}}}},99:{l:{105:{l:{114:{l:{99:{l:{59:{c:[8858]}}}}}}}}},100:{l:{97:{l:{115:{l:{104:{l:{59:{c:[8861]}}}}}}}}}}}}}}}}},101:{l:{59:{c:[8791]}}},102:{l:{110:{l:{105:{l:{110:{l:{116:{l:{59:{c:[10768]}}}}}}}}}}},109:{l:{105:{l:{100:{l:{59:{c:[10991]}}}}}}},115:{l:{99:{l:{105:{l:{114:{l:{59:{c:[10690]}}}}}}}}}}}}},108:{l:{117:{l:{98:{l:{115:{l:{59:{c:[9827]},117:{l:{105:{l:{116:{l:{59:{c:[9827]}}}}}}}}}}}}}}},111:{l:{108:{l:{111:{l:{110:{l:{59:{c:[58]},101:{l:{59:{c:[8788]},113:{l:{59:{c:[8788]}}}}}}}}}}},109:{l:{109:{l:{97:{l:{59:{c:[44]},116:{l:{59:{c:[64]}}}}}}},112:{l:{59:{c:[8705]},102:{l:{110:{l:{59:{c:[8728]}}}}},108:{l:{101:{l:{109:{l:{101:{l:{110:{l:{116:{l:{59:{c:[8705]}}}}}}}}},120:{l:{101:{l:{115:{l:{59:{c:[8450]}}}}}}}}}}}}}}},110:{l:{103:{l:{59:{c:[8773]},100:{l:{111:{l:{116:{l:{59:{c:[10861]}}}}}}}}},105:{l:{110:{l:{116:{l:{59:{c:[8750]}}}}}}}}},112:{l:{102:{l:{59:{c:[120148]}}},114:{l:{111:{l:{100:{l:{59:{c:[8720]}}}}}}},121:{l:{59:{c:[169]},115:{l:{114:{l:{59:{c:[8471]}}}}}},c:[169]}}}}},114:{l:{97:{l:{114:{l:{114:{l:{59:{c:[8629]}}}}}}},111:{l:{115:{l:{115:{l:{59:{c:[10007]}}}}}}}}},115:{l:{99:{l:{114:{l:{59:{c:[119992]}}}}},117:{l:{98:{l:{59:{c:[10959]},101:{l:{59:{c:[10961]}}}}},112:{l:{59:{c:[10960]},101:{l:{59:{c:[10962]}}}}}}}}},116:{l:{100:{l:{111:{l:{116:{l:{59:{c:[8943]}}}}}}}}},117:{l:{100:{l:{97:{l:{114:{l:{114:{l:{108:{l:{59:{c:[10552]}}},114:{l:{59:{c:[10549]}}}}}}}}}}},101:{l:{112:{l:{114:{l:{59:{c:[8926]}}}}},115:{l:{99:{l:{59:{c:[8927]}}}}}}},108:{l:{97:{l:{114:{l:{114:{l:{59:{c:[8630]},112:{l:{59:{c:[10557]}}}}}}}}}}},112:{l:{59:{c:[8746]},98:{l:{114:{l:{99:{l:{97:{l:{112:{l:{59:{c:[10824]}}}}}}}}}}},99:{l:{97:{l:{112:{l:{59:{c:[10822]}}}}},117:{l:{112:{l:{59:{c:[10826]}}}}}}},100:{l:{111:{l:{116:{l:{59:{c:[8845]}}}}}}},111:{l:{114:{l:{59:{c:[10821]}}}}},115:{l:{59:{c:[8746,65024]}}}}},114:{l:{97:{l:{114:{l:{114:{l:{59:{c:[8631]},109:{l:{59:{c:[10556]}}}}}}}}},108:{l:{121:{l:{101:{l:{113:{l:{112:{l:{114:{l:{101:{l:{99:{l:{59:{c:[8926]}}}}}}}}},115:{l:{117:{l:{99:{l:{99:{l:{59:{c:[8927]}}}}}}}}}}}}},118:{l:{101:{l:{101:{l:{59:{c:[8910]}}}}}}},119:{l:{101:{l:{100:{l:{103:{l:{101:{l:{59:{c:[8911]}}}}}}}}}}}}}}},114:{l:{101:{l:{110:{l:{59:{c:[164]}},c:[164]}}}}},118:{l:{101:{l:{97:{l:{114:{l:{114:{l:{111:{l:{119:{l:{108:{l:{101:{l:{102:{l:{116:{l:{59:{c:[8630]}}}}}}}}},114:{l:{105:{l:{103:{l:{104:{l:{116:{l:{59:{c:[8631]}}}}}}}}}}}}}}}}}}}}}}}}}}},118:{l:{101:{l:{101:{l:{59:{c:[8910]}}}}}}},119:{l:{101:{l:{100:{l:{59:{c:[8911]}}}}}}}}},119:{l:{99:{l:{111:{l:{110:{l:{105:{l:{110:{l:{116:{l:{59:{c:[8754]}}}}}}}}}}}}},105:{l:{110:{l:{116:{l:{59:{c:[8753]}}}}}}}}},121:{l:{108:{l:{99:{l:{116:{l:{121:{l:{59:{c:[9005]}}}}}}}}}}}}},100:{l:{65:{l:{114:{l:{114:{l:{59:{c:[8659]}}}}}}},72:{l:{97:{l:{114:{l:{59:{c:[10597]}}}}}}},97:{l:{103:{l:{103:{l:{101:{l:{114:{l:{59:{c:[8224]}}}}}}}}},108:{l:{101:{l:{116:{l:{104:{l:{59:{c:[8504]}}}}}}}}},114:{l:{114:{l:{59:{c:[8595]}}}}},115:{l:{104:{l:{59:{c:[8208]},118:{l:{59:{c:[8867]}}}}}}}}},98:{l:{107:{l:{97:{l:{114:{l:{111:{l:{119:{l:{59:{c:[10511]}}}}}}}}}}},108:{l:{97:{l:{99:{l:{59:{c:[733]}}}}}}}}},99:{l:{97:{l:{114:{l:{111:{l:{110:{l:{59:{c:[271]}}}}}}}}},121:{l:{59:{c:[1076]}}}}},100:{l:{59:{c:[8518]},97:{l:{103:{l:{103:{l:{101:{l:{114:{l:{59:{c:[8225]}}}}}}}}},114:{l:{114:{l:{59:{c:[8650]}}}}}}},111:{l:{116:{l:{115:{l:{101:{l:{113:{l:{59:{c:[10871]}}}}}}}}}}}}},101:{l:{103:{l:{59:{c:[176]}},c:[176]},108:{l:{116:{l:{97:{l:{59:{c:[948]}}}}}}},109:{l:{112:{l:{116:{l:{121:{l:{118:{l:{59:{c:[10673]}}}}}}}}}}}}},102:{l:{105:{l:{115:{l:{104:{l:{116:{l:{59:{c:[10623]}}}}}}}}},114:{l:{59:{c:[120097]}}}}},104:{l:{97:{l:{114:{l:{108:{l:{59:{c:[8643]}}},114:{l:{59:{c:[8642]}}}}}}}}},105:{l:{97:{l:{109:{l:{59:{c:[8900]},111:{l:{110:{l:{100:{l:{59:{c:[8900]},115:{l:{117:{l:{105:{l:{116:{l:{59:{c:[9830]}}}}}}}}}}}}}}},115:{l:{59:{c:[9830]}}}}}}},101:{l:{59:{c:[168]}}},103:{l:{97:{l:{109:{l:{109:{l:{97:{l:{59:{c:[989]}}}}}}}}}}},115:{l:{105:{l:{110:{l:{59:{c:[8946]}}}}}}},118:{l:{59:{c:[247]},105:{l:{100:{l:{101:{l:{59:{c:[247]},111:{l:{110:{l:{116:{l:{105:{l:{109:{l:{101:{l:{115:{l:{59:{c:[8903]}}}}}}}}}}}}}}}},c:[247]}}}}},111:{l:{110:{l:{120:{l:{59:{c:[8903]}}}}}}}}}}},106:{l:{99:{l:{121:{l:{59:{c:[1106]}}}}}}},108:{l:{99:{l:{111:{l:{114:{l:{110:{l:{59:{c:[8990]}}}}}}},114:{l:{111:{l:{112:{l:{59:{c:[8973]}}}}}}}}}}},111:{l:{108:{l:{108:{l:{97:{l:{114:{l:{59:{c:[36]}}}}}}}}},112:{l:{102:{l:{59:{c:[120149]}}}}},116:{l:{59:{c:[729]},101:{l:{113:{l:{59:{c:[8784]},100:{l:{111:{l:{116:{l:{59:{c:[8785]}}}}}}}}}}},109:{l:{105:{l:{110:{l:{117:{l:{115:{l:{59:{c:[8760]}}}}}}}}}}},112:{l:{108:{l:{117:{l:{115:{l:{59:{c:[8724]}}}}}}}}},115:{l:{113:{l:{117:{l:{97:{l:{114:{l:{101:{l:{59:{c:[8865]}}}}}}}}}}}}}}},117:{l:{98:{l:{108:{l:{101:{l:{98:{l:{97:{l:{114:{l:{119:{l:{101:{l:{100:{l:{103:{l:{101:{l:{59:{c:[8966]}}}}}}}}}}}}}}}}}}}}}}}}},119:{l:{110:{l:{97:{l:{114:{l:{114:{l:{111:{l:{119:{l:{59:{c:[8595]}}}}}}}}}}},100:{l:{111:{l:{119:{l:{110:{l:{97:{l:{114:{l:{114:{l:{111:{l:{119:{l:{115:{l:{59:{c:[8650]}}}}}}}}}}}}}}}}}}}}},104:{l:{97:{l:{114:{l:{112:{l:{111:{l:{111:{l:{110:{l:{108:{l:{101:{l:{102:{l:{116:{l:{59:{c:[8643]}}}}}}}}},114:{l:{105:{l:{103:{l:{104:{l:{116:{l:{59:{c:[8642]}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}},114:{l:{98:{l:{107:{l:{97:{l:{114:{l:{111:{l:{119:{l:{59:{c:[10512]}}}}}}}}}}}}},99:{l:{111:{l:{114:{l:{110:{l:{59:{c:[8991]}}}}}}},114:{l:{111:{l:{112:{l:{59:{c:[8972]}}}}}}}}}}},115:{l:{99:{l:{114:{l:{59:{c:[119993]}}},121:{l:{59:{c:[1109]}}}}},111:{l:{108:{l:{59:{c:[10742]}}}}},116:{l:{114:{l:{111:{l:{107:{l:{59:{c:[273]}}}}}}}}}}},116:{l:{100:{l:{111:{l:{116:{l:{59:{c:[8945]}}}}}}},114:{l:{105:{l:{59:{c:[9663]},102:{l:{59:{c:[9662]}}}}}}}}},117:{l:{97:{l:{114:{l:{114:{l:{59:{c:[8693]}}}}}}},104:{l:{97:{l:{114:{l:{59:{c:[10607]}}}}}}}}},119:{l:{97:{l:{110:{l:{103:{l:{108:{l:{101:{l:{59:{c:[10662]}}}}}}}}}}}}},122:{l:{99:{l:{121:{l:{59:{c:[1119]}}}}},105:{l:{103:{l:{114:{l:{97:{l:{114:{l:{114:{l:{59:{c:[10239]}}}}}}}}}}}}}}}}},101:{l:{68:{l:{68:{l:{111:{l:{116:{l:{59:{c:[10871]}}}}}}},111:{l:{116:{l:{59:{c:[8785]}}}}}}},97:{l:{99:{l:{117:{l:{116:{l:{101:{l:{59:{c:[233]}},c:[233]}}}}}}},115:{l:{116:{l:{101:{l:{114:{l:{59:{c:[10862]}}}}}}}}}}},99:{l:{97:{l:{114:{l:{111:{l:{110:{l:{59:{c:[283]}}}}}}}}},105:{l:{114:{l:{59:{c:[8790]},99:{l:{59:{c:[234]}},c:[234]}}}}},111:{l:{108:{l:{111:{l:{110:{l:{59:{c:[8789]}}}}}}}}},121:{l:{59:{c:[1101]}}}}},100:{l:{111:{l:{116:{l:{59:{c:[279]}}}}}}},101:{l:{59:{c:[8519]}}},102:{l:{68:{l:{111:{l:{116:{l:{59:{c:[8786]}}}}}}},114:{l:{59:{c:[120098]}}}}},103:{l:{59:{c:[10906]},114:{l:{97:{l:{118:{l:{101:{l:{59:{c:[232]}},c:[232]}}}}}}},115:{l:{59:{c:[10902]},100:{l:{111:{l:{116:{l:{59:{c:[10904]}}}}}}}}}}},108:{l:{59:{c:[10905]},105:{l:{110:{l:{116:{l:{101:{l:{114:{l:{115:{l:{59:{c:[9191]}}}}}}}}}}}}},108:{l:{59:{c:[8467]}}},115:{l:{59:{c:[10901]},100:{l:{111:{l:{116:{l:{59:{c:[10903]}}}}}}}}}}},109:{l:{97:{l:{99:{l:{114:{l:{59:{c:[275]}}}}}}},112:{l:{116:{l:{121:{l:{59:{c:[8709]},115:{l:{101:{l:{116:{l:{59:{c:[8709]}}}}}}},118:{l:{59:{c:[8709]}}}}}}}}},115:{l:{112:{l:{49:{l:{51:{l:{59:{c:[8196]}}},52:{l:{59:{c:[8197]}}}}},59:{c:[8195]}}}}}}},110:{l:{103:{l:{59:{c:[331]}}},115:{l:{112:{l:{59:{c:[8194]}}}}}}},111:{l:{103:{l:{111:{l:{110:{l:{59:{c:[281]}}}}}}},112:{l:{102:{l:{59:{c:[120150]}}}}}}},112:{l:{97:{l:{114:{l:{59:{c:[8917]},115:{l:{108:{l:{59:{c:[10723]}}}}}}}}},108:{l:{117:{l:{115:{l:{59:{c:[10865]}}}}}}},115:{l:{105:{l:{59:{c:[949]},108:{l:{111:{l:{110:{l:{59:{c:[949]}}}}}}},118:{l:{59:{c:[1013]}}}}}}}}},113:{l:{99:{l:{105:{l:{114:{l:{99:{l:{59:{c:[8790]}}}}}}},111:{l:{108:{l:{111:{l:{110:{l:{59:{c:[8789]}}}}}}}}}}},115:{l:{105:{l:{109:{l:{59:{c:[8770]}}}}},108:{l:{97:{l:{110:{l:{116:{l:{103:{l:{116:{l:{114:{l:{59:{c:[10902]}}}}}}},108:{l:{101:{l:{115:{l:{115:{l:{59:{c:[10901]}}}}}}}}}}}}}}}}}}},117:{l:{97:{l:{108:{l:{115:{l:{59:{c:[61]}}}}}}},101:{l:{115:{l:{116:{l:{59:{c:[8799]}}}}}}},105:{l:{118:{l:{59:{c:[8801]},68:{l:{68:{l:{59:{c:[10872]}}}}}}}}}}},118:{l:{112:{l:{97:{l:{114:{l:{115:{l:{108:{l:{59:{c:[10725]}}}}}}}}}}}}}}},114:{l:{68:{l:{111:{l:{116:{l:{59:{c:[8787]}}}}}}},97:{l:{114:{l:{114:{l:{59:{c:[10609]}}}}}}}}},115:{l:{99:{l:{114:{l:{59:{c:[8495]}}}}},100:{l:{111:{l:{116:{l:{59:{c:[8784]}}}}}}},105:{l:{109:{l:{59:{c:[8770]}}}}}}},116:{l:{97:{l:{59:{c:[951]}}},104:{l:{59:{c:[240]}},c:[240]}}},117:{l:{109:{l:{108:{l:{59:{c:[235]}},c:[235]}}},114:{l:{111:{l:{59:{c:[8364]}}}}}}},120:{l:{99:{l:{108:{l:{59:{c:[33]}}}}},105:{l:{115:{l:{116:{l:{59:{c:[8707]}}}}}}},112:{l:{101:{l:{99:{l:{116:{l:{97:{l:{116:{l:{105:{l:{111:{l:{110:{l:{59:{c:[8496]}}}}}}}}}}}}}}}}},111:{l:{110:{l:{101:{l:{110:{l:{116:{l:{105:{l:{97:{l:{108:{l:{101:{l:{59:{c:[8519]}}}}}}}}}}}}}}}}}}}}}}}}},102:{l:{97:{l:{108:{l:{108:{l:{105:{l:{110:{l:{103:{l:{100:{l:{111:{l:{116:{l:{115:{l:{101:{l:{113:{l:{59:{c:[8786]}}}}}}}}}}}}}}}}}}}}}}}}},99:{l:{121:{l:{59:{c:[1092]}}}}},101:{l:{109:{l:{97:{l:{108:{l:{101:{l:{59:{c:[9792]}}}}}}}}}}},102:{l:{105:{l:{108:{l:{105:{l:{103:{l:{59:{c:[64259]}}}}}}}}},108:{l:{105:{l:{103:{l:{59:{c:[64256]}}}}},108:{l:{105:{l:{103:{l:{59:{c:[64260]}}}}}}}}},114:{l:{59:{c:[120099]}}}}},105:{l:{108:{l:{105:{l:{103:{l:{59:{c:[64257]}}}}}}}}},106:{l:{108:{l:{105:{l:{103:{l:{59:{c:[102,106]}}}}}}}}},108:{l:{97:{l:{116:{l:{59:{c:[9837]}}}}},108:{l:{105:{l:{103:{l:{59:{c:[64258]}}}}}}},116:{l:{110:{l:{115:{l:{59:{c:[9649]}}}}}}}}},110:{l:{111:{l:{102:{l:{59:{c:[402]}}}}}}},111:{l:{112:{l:{102:{l:{59:{c:[120151]}}}}},114:{l:{97:{l:{108:{l:{108:{l:{59:{c:[8704]}}}}}}},107:{l:{59:{c:[8916]},118:{l:{59:{c:[10969]}}}}}}}}},112:{l:{97:{l:{114:{l:{116:{l:{105:{l:{110:{l:{116:{l:{59:{c:[10765]}}}}}}}}}}}}}}},114:{l:{97:{l:{99:{l:{49:{l:{50:{l:{59:{c:[189]}},c:[189]},51:{l:{59:{c:[8531]}}},52:{l:{59:{c:[188]}},c:[188]},53:{l:{59:{c:[8533]}}},54:{l:{59:{c:[8537]}}},56:{l:{59:{c:[8539]}}}}},50:{l:{51:{l:{59:{c:[8532]}}},53:{l:{59:{c:[8534]}}}}},51:{l:{52:{l:{59:{c:[190]}},c:[190]},53:{l:{59:{c:[8535]}}},56:{l:{59:{c:[8540]}}}}},52:{l:{53:{l:{59:{c:[8536]}}}}},53:{l:{54:{l:{59:{c:[8538]}}},56:{l:{59:{c:[8541]}}}}},55:{l:{56:{l:{59:{c:[8542]}}}}}}},115:{l:{108:{l:{59:{c:[8260]}}}}}}},111:{l:{119:{l:{110:{l:{59:{c:[8994]}}}}}}}}},115:{l:{99:{l:{114:{l:{59:{c:[119995]}}}}}}}}},103:{l:{69:{l:{59:{c:[8807]},108:{l:{59:{c:[10892]}}}}},97:{l:{99:{l:{117:{l:{116:{l:{101:{l:{59:{c:[501]}}}}}}}}},109:{l:{109:{l:{97:{l:{59:{c:[947]},100:{l:{59:{c:[989]}}}}}}}}},112:{l:{59:{c:[10886]}}}}},98:{l:{114:{l:{101:{l:{118:{l:{101:{l:{59:{c:[287]}}}}}}}}}}},99:{l:{105:{l:{114:{l:{99:{l:{59:{c:[285]}}}}}}},121:{l:{59:{c:[1075]}}}}},100:{l:{111:{l:{116:{l:{59:{c:[289]}}}}}}},101:{l:{59:{c:[8805]},108:{l:{59:{c:[8923]}}},113:{l:{59:{c:[8805]},113:{l:{59:{c:[8807]}}},115:{l:{108:{l:{97:{l:{110:{l:{116:{l:{59:{c:[10878]}}}}}}}}}}}}},115:{l:{59:{c:[10878]},99:{l:{99:{l:{59:{c:[10921]}}}}},100:{l:{111:{l:{116:{l:{59:{c:[10880]},111:{l:{59:{c:[10882]},108:{l:{59:{c:[10884]}}}}}}}}}}},108:{l:{59:{c:[8923,65024]},101:{l:{115:{l:{59:{c:[10900]}}}}}}}}}}},102:{l:{114:{l:{59:{c:[120100]}}}}},103:{l:{59:{c:[8811]},103:{l:{59:{c:[8921]}}}}},105:{l:{109:{l:{101:{l:{108:{l:{59:{c:[8503]}}}}}}}}},106:{l:{99:{l:{121:{l:{59:{c:[1107]}}}}}}},108:{l:{59:{c:[8823]},69:{l:{59:{c:[10898]}}},97:{l:{59:{c:[10917]}}},106:{l:{59:{c:[10916]}}}}},110:{l:{69:{l:{59:{c:[8809]}}},97:{l:{112:{l:{59:{c:[10890]},112:{l:{114:{l:{111:{l:{120:{l:{59:{c:[10890]}}}}}}}}}}}}},101:{l:{59:{c:[10888]},113:{l:{59:{c:[10888]},113:{l:{59:{c:[8809]}}}}}}},115:{l:{105:{l:{109:{l:{59:{c:[8935]}}}}}}}}},111:{l:{112:{l:{102:{l:{59:{c:[120152]}}}}}}},114:{l:{97:{l:{118:{l:{101:{l:{59:{c:[96]}}}}}}}}},115:{l:{99:{l:{114:{l:{59:{c:[8458]}}}}},105:{l:{109:{l:{59:{c:[8819]},101:{l:{59:{c:[10894]}}},108:{l:{59:{c:[10896]}}}}}}}}},116:{l:{59:{c:[62]},99:{l:{99:{l:{59:{c:[10919]}}},105:{l:{114:{l:{59:{c:[10874]}}}}}}},100:{l:{111:{l:{116:{l:{59:{c:[8919]}}}}}}},108:{l:{80:{l:{97:{l:{114:{l:{59:{c:[10645]}}}}}}}}},113:{l:{117:{l:{101:{l:{115:{l:{116:{l:{59:{c:[10876]}}}}}}}}}}},114:{l:{97:{l:{112:{l:{112:{l:{114:{l:{111:{l:{120:{l:{59:{c:[10886]}}}}}}}}}}},114:{l:{114:{l:{59:{c:[10616]}}}}}}},100:{l:{111:{l:{116:{l:{59:{c:[8919]}}}}}}},101:{l:{113:{l:{108:{l:{101:{l:{115:{l:{115:{l:{59:{c:[8923]}}}}}}}}},113:{l:{108:{l:{101:{l:{115:{l:{115:{l:{59:{c:[10892]}}}}}}}}}}}}}}},108:{l:{101:{l:{115:{l:{115:{l:{59:{c:[8823]}}}}}}}}},115:{l:{105:{l:{109:{l:{59:{c:[8819]}}}}}}}}}},c:[62]},118:{l:{101:{l:{114:{l:{116:{l:{110:{l:{101:{l:{113:{l:{113:{l:{59:{c:[8809,65024]}}}}}}}}}}}}}}},110:{l:{69:{l:{59:{c:[8809,65024]}}}}}}}}},104:{l:{65:{l:{114:{l:{114:{l:{59:{c:[8660]}}}}}}},97:{l:{105:{l:{114:{l:{115:{l:{112:{l:{59:{c:[8202]}}}}}}}}},108:{l:{102:{l:{59:{c:[189]}}}}},109:{l:{105:{l:{108:{l:{116:{l:{59:{c:[8459]}}}}}}}}},114:{l:{100:{l:{99:{l:{121:{l:{59:{c:[1098]}}}}}}},114:{l:{59:{c:[8596]},99:{l:{105:{l:{114:{l:{59:{c:[10568]}}}}}}},119:{l:{59:{c:[8621]}}}}}}}}},98:{l:{97:{l:{114:{l:{59:{c:[8463]}}}}}}},99:{l:{105:{l:{114:{l:{99:{l:{59:{c:[293]}}}}}}}}},101:{l:{97:{l:{114:{l:{116:{l:{115:{l:{59:{c:[9829]},117:{l:{105:{l:{116:{l:{59:{c:[9829]}}}}}}}}}}}}}}},108:{l:{108:{l:{105:{l:{112:{l:{59:{c:[8230]}}}}}}}}},114:{l:{99:{l:{111:{l:{110:{l:{59:{c:[8889]}}}}}}}}}}},102:{l:{114:{l:{59:{c:[120101]}}}}},107:{l:{115:{l:{101:{l:{97:{l:{114:{l:{111:{l:{119:{l:{59:{c:[10533]}}}}}}}}}}},119:{l:{97:{l:{114:{l:{111:{l:{119:{l:{59:{c:[10534]}}}}}}}}}}}}}}},111:{l:{97:{l:{114:{l:{114:{l:{59:{c:[8703]}}}}}}},109:{l:{116:{l:{104:{l:{116:{l:{59:{c:[8763]}}}}}}}}},111:{l:{107:{l:{108:{l:{101:{l:{102:{l:{116:{l:{97:{l:{114:{l:{114:{l:{111:{l:{119:{l:{59:{c:[8617]}}}}}}}}}}}}}}}}}}},114:{l:{105:{l:{103:{l:{104:{l:{116:{l:{97:{l:{114:{l:{114:{l:{111:{l:{119:{l:{59:{c:[8618]}}}}}}}}}}}}}}}}}}}}}}}}},112:{l:{102:{l:{59:{c:[120153]}}}}},114:{l:{98:{l:{97:{l:{114:{l:{59:{c:[8213]}}}}}}}}}}},115:{l:{99:{l:{114:{l:{59:{c:[119997]}}}}},108:{l:{97:{l:{115:{l:{104:{l:{59:{c:[8463]}}}}}}}}},116:{l:{114:{l:{111:{l:{107:{l:{59:{c:[295]}}}}}}}}}}},121:{l:{98:{l:{117:{l:{108:{l:{108:{l:{59:{c:[8259]}}}}}}}}},112:{l:{104:{l:{101:{l:{110:{l:{59:{c:[8208]}}}}}}}}}}}}},105:{l:{97:{l:{99:{l:{117:{l:{116:{l:{101:{l:{59:{c:[237]}},c:[237]}}}}}}}}},99:{l:{59:{c:[8291]},105:{l:{114:{l:{99:{l:{59:{c:[238]}},c:[238]}}}}},121:{l:{59:{c:[1080]}}}}},101:{l:{99:{l:{121:{l:{59:{c:[1077]}}}}},120:{l:{99:{l:{108:{l:{59:{c:[161]}},c:[161]}}}}}}},102:{l:{102:{l:{59:{c:[8660]}}},114:{l:{59:{c:[120102]}}}}},103:{l:{114:{l:{97:{l:{118:{l:{101:{l:{59:{c:[236]}},c:[236]}}}}}}}}},105:{l:{59:{c:[8520]},105:{l:{105:{l:{110:{l:{116:{l:{59:{c:[10764]}}}}}}},110:{l:{116:{l:{59:{c:[8749]}}}}}}},110:{l:{102:{l:{105:{l:{110:{l:{59:{c:[10716]}}}}}}}}},111:{l:{116:{l:{97:{l:{59:{c:[8489]}}}}}}}}},106:{l:{108:{l:{105:{l:{103:{l:{59:{c:[307]}}}}}}}}},109:{l:{97:{l:{99:{l:{114:{l:{59:{c:[299]}}}}},103:{l:{101:{l:{59:{c:[8465]}}},108:{l:{105:{l:{110:{l:{101:{l:{59:{c:[8464]}}}}}}}}},112:{l:{97:{l:{114:{l:{116:{l:{59:{c:[8465]}}}}}}}}}}},116:{l:{104:{l:{59:{c:[305]}}}}}}},111:{l:{102:{l:{59:{c:[8887]}}}}},112:{l:{101:{l:{100:{l:{59:{c:[437]}}}}}}}}},110:{l:{59:{c:[8712]},99:{l:{97:{l:{114:{l:{101:{l:{59:{c:[8453]}}}}}}}}},102:{l:{105:{l:{110:{l:{59:{c:[8734]},116:{l:{105:{l:{101:{l:{59:{c:[10717]}}}}}}}}}}}}},111:{l:{100:{l:{111:{l:{116:{l:{59:{c:[305]}}}}}}}}},116:{l:{59:{c:[8747]},99:{l:{97:{l:{108:{l:{59:{c:[8890]}}}}}}},101:{l:{103:{l:{101:{l:{114:{l:{115:{l:{59:{c:[8484]}}}}}}}}},114:{l:{99:{l:{97:{l:{108:{l:{59:{c:[8890]}}}}}}}}}}},108:{l:{97:{l:{114:{l:{104:{l:{107:{l:{59:{c:[10775]}}}}}}}}}}},112:{l:{114:{l:{111:{l:{100:{l:{59:{c:[10812]}}}}}}}}}}}}},111:{l:{99:{l:{121:{l:{59:{c:[1105]}}}}},103:{l:{111:{l:{110:{l:{59:{c:[303]}}}}}}},112:{l:{102:{l:{59:{c:[120154]}}}}},116:{l:{97:{l:{59:{c:[953]}}}}}}},112:{l:{114:{l:{111:{l:{100:{l:{59:{c:[10812]}}}}}}}}},113:{l:{117:{l:{101:{l:{115:{l:{116:{l:{59:{c:[191]}},c:[191]}}}}}}}}},115:{l:{99:{l:{114:{l:{59:{c:[119998]}}}}},105:{l:{110:{l:{59:{c:[8712]},69:{l:{59:{c:[8953]}}},100:{l:{111:{l:{116:{l:{59:{c:[8949]}}}}}}},115:{l:{59:{c:[8948]},118:{l:{59:{c:[8947]}}}}},118:{l:{59:{c:[8712]}}}}}}}}},116:{l:{59:{c:[8290]},105:{l:{108:{l:{100:{l:{101:{l:{59:{c:[297]}}}}}}}}}}},117:{l:{107:{l:{99:{l:{121:{l:{59:{c:[1110]}}}}}}},109:{l:{108:{l:{59:{c:[239]}},c:[239]}}}}}}},106:{l:{99:{l:{105:{l:{114:{l:{99:{l:{59:{c:[309]}}}}}}},121:{l:{59:{c:[1081]}}}}},102:{l:{114:{l:{59:{c:[120103]}}}}},109:{l:{97:{l:{116:{l:{104:{l:{59:{c:[567]}}}}}}}}},111:{l:{112:{l:{102:{l:{59:{c:[120155]}}}}}}},115:{l:{99:{l:{114:{l:{59:{c:[119999]}}}}},101:{l:{114:{l:{99:{l:{121:{l:{59:{c:[1112]}}}}}}}}}}},117:{l:{107:{l:{99:{l:{121:{l:{59:{c:[1108]}}}}}}}}}}},107:{l:{97:{l:{112:{l:{112:{l:{97:{l:{59:{c:[954]},118:{l:{59:{c:[1008]}}}}}}}}}}},99:{l:{101:{l:{100:{l:{105:{l:{108:{l:{59:{c:[311]}}}}}}}}},121:{l:{59:{c:[1082]}}}}},102:{l:{114:{l:{59:{c:[120104]}}}}},103:{l:{114:{l:{101:{l:{101:{l:{110:{l:{59:{c:[312]}}}}}}}}}}},104:{l:{99:{l:{121:{l:{59:{c:[1093]}}}}}}},106:{l:{99:{l:{121:{l:{59:{c:[1116]}}}}}}},111:{l:{112:{l:{102:{l:{59:{c:[120156]}}}}}}},115:{l:{99:{l:{114:{l:{59:{c:[120000]}}}}}}}}},108:{l:{65:{l:{97:{l:{114:{l:{114:{l:{59:{c:[8666]}}}}}}},114:{l:{114:{l:{59:{c:[8656]}}}}},116:{l:{97:{l:{105:{l:{108:{l:{59:{c:[10523]}}}}}}}}}}},66:{l:{97:{l:{114:{l:{114:{l:{59:{c:[10510]}}}}}}}}},69:{l:{59:{c:[8806]},103:{l:{59:{c:[10891]}}}}},72:{l:{97:{l:{114:{l:{59:{c:[10594]}}}}}}},97:{l:{99:{l:{117:{l:{116:{l:{101:{l:{59:{c:[314]}}}}}}}}},101:{l:{109:{l:{112:{l:{116:{l:{121:{l:{118:{l:{59:{c:[10676]}}}}}}}}}}}}},103:{l:{114:{l:{97:{l:{110:{l:{59:{c:[8466]}}}}}}}}},109:{l:{98:{l:{100:{l:{97:{l:{59:{c:[955]}}}}}}}}},110:{l:{103:{l:{59:{c:[10216]},100:{l:{59:{c:[10641]}}},108:{l:{101:{l:{59:{c:[10216]}}}}}}}}},112:{l:{59:{c:[10885]}}},113:{l:{117:{l:{111:{l:{59:{c:[171]}},c:[171]}}}}},114:{l:{114:{l:{59:{c:[8592]},98:{l:{59:{c:[8676]},102:{l:{115:{l:{59:{c:[10527]}}}}}}},102:{l:{115:{l:{59:{c:[10525]}}}}},104:{l:{107:{l:{59:{c:[8617]}}}}},108:{l:{112:{l:{59:{c:[8619]}}}}},112:{l:{108:{l:{59:{c:[10553]}}}}},115:{l:{105:{l:{109:{l:{59:{c:[10611]}}}}}}},116:{l:{108:{l:{59:{c:[8610]}}}}}}}}},116:{l:{59:{c:[10923]},97:{l:{105:{l:{108:{l:{59:{c:[10521]}}}}}}},101:{l:{59:{c:[10925]},115:{l:{59:{c:[10925,65024]}}}}}}}}},98:{l:{97:{l:{114:{l:{114:{l:{59:{c:[10508]}}}}}}},98:{l:{114:{l:{107:{l:{59:{c:[10098]}}}}}}},114:{l:{97:{l:{99:{l:{101:{l:{59:{c:[123]}}},107:{l:{59:{c:[91]}}}}}}},107:{l:{101:{l:{59:{c:[10635]}}},115:{l:{108:{l:{100:{l:{59:{c:[10639]}}},117:{l:{59:{c:[10637]}}}}}}}}}}}}},99:{l:{97:{l:{114:{l:{111:{l:{110:{l:{59:{c:[318]}}}}}}}}},101:{l:{100:{l:{105:{l:{108:{l:{59:{c:[316]}}}}}}},105:{l:{108:{l:{59:{c:[8968]}}}}}}},117:{l:{98:{l:{59:{c:[123]}}}}},121:{l:{59:{c:[1083]}}}}},100:{l:{99:{l:{97:{l:{59:{c:[10550]}}}}},113:{l:{117:{l:{111:{l:{59:{c:[8220]},114:{l:{59:{c:[8222]}}}}}}}}},114:{l:{100:{l:{104:{l:{97:{l:{114:{l:{59:{c:[10599]}}}}}}}}},117:{l:{115:{l:{104:{l:{97:{l:{114:{l:{59:{c:[10571]}}}}}}}}}}}}},115:{l:{104:{l:{59:{c:[8626]}}}}}}},101:{l:{59:{c:[8804]},102:{l:{116:{l:{97:{l:{114:{l:{114:{l:{111:{l:{119:{l:{59:{c:[8592]},116:{l:{97:{l:{105:{l:{108:{l:{59:{c:[8610]}}}}}}}}}}}}}}}}}}},104:{l:{97:{l:{114:{l:{112:{l:{111:{l:{111:{l:{110:{l:{100:{l:{111:{l:{119:{l:{110:{l:{59:{c:[8637]}}}}}}}}},117:{l:{112:{l:{59:{c:[8636]}}}}}}}}}}}}}}}}}}},108:{l:{101:{l:{102:{l:{116:{l:{97:{l:{114:{l:{114:{l:{111:{l:{119:{l:{115:{l:{59:{c:[8647]}}}}}}}}}}}}}}}}}}}}},114:{l:{105:{l:{103:{l:{104:{l:{116:{l:{97:{l:{114:{l:{114:{l:{111:{l:{119:{l:{59:{c:[8596]},115:{l:{59:{c:[8646]}}}}}}}}}}}}},104:{l:{97:{l:{114:{l:{112:{l:{111:{l:{111:{l:{110:{l:{115:{l:{59:{c:[8651]}}}}}}}}}}}}}}}}},115:{l:{113:{l:{117:{l:{105:{l:{103:{l:{97:{l:{114:{l:{114:{l:{111:{l:{119:{l:{59:{c:[8621]}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}},116:{l:{104:{l:{114:{l:{101:{l:{101:{l:{116:{l:{105:{l:{109:{l:{101:{l:{115:{l:{59:{c:[8907]}}}}}}}}}}}}}}}}}}}}}}}}},103:{l:{59:{c:[8922]}}},113:{l:{59:{c:[8804]},113:{l:{59:{c:[8806]}}},115:{l:{108:{l:{97:{l:{110:{l:{116:{l:{59:{c:[10877]}}}}}}}}}}}}},115:{l:{59:{c:[10877]},99:{l:{99:{l:{59:{c:[10920]}}}}},100:{l:{111:{l:{116:{l:{59:{c:[10879]},111:{l:{59:{c:[10881]},114:{l:{59:{c:[10883]}}}}}}}}}}},103:{l:{59:{c:[8922,65024]},101:{l:{115:{l:{59:{c:[10899]}}}}}}},115:{l:{97:{l:{112:{l:{112:{l:{114:{l:{111:{l:{120:{l:{59:{c:[10885]}}}}}}}}}}}}},100:{l:{111:{l:{116:{l:{59:{c:[8918]}}}}}}},101:{l:{113:{l:{103:{l:{116:{l:{114:{l:{59:{c:[8922]}}}}}}},113:{l:{103:{l:{116:{l:{114:{l:{59:{c:[10891]}}}}}}}}}}}}},103:{l:{116:{l:{114:{l:{59:{c:[8822]}}}}}}},115:{l:{105:{l:{109:{l:{59:{c:[8818]}}}}}}}}}}}}},102:{l:{105:{l:{115:{l:{104:{l:{116:{l:{59:{c:[10620]}}}}}}}}},108:{l:{111:{l:{111:{l:{114:{l:{59:{c:[8970]}}}}}}}}},114:{l:{59:{c:[120105]}}}}},103:{l:{59:{c:[8822]},69:{l:{59:{c:[10897]}}}}},104:{l:{97:{l:{114:{l:{100:{l:{59:{c:[8637]}}},117:{l:{59:{c:[8636]},108:{l:{59:{c:[10602]}}}}}}}}},98:{l:{108:{l:{107:{l:{59:{c:[9604]}}}}}}}}},106:{l:{99:{l:{121:{l:{59:{c:[1113]}}}}}}},108:{l:{59:{c:[8810]},97:{l:{114:{l:{114:{l:{59:{c:[8647]}}}}}}},99:{l:{111:{l:{114:{l:{110:{l:{101:{l:{114:{l:{59:{c:[8990]}}}}}}}}}}}}},104:{l:{97:{l:{114:{l:{100:{l:{59:{c:[10603]}}}}}}}}},116:{l:{114:{l:{105:{l:{59:{c:[9722]}}}}}}}}},109:{l:{105:{l:{100:{l:{111:{l:{116:{l:{59:{c:[320]}}}}}}}}},111:{l:{117:{l:{115:{l:{116:{l:{59:{c:[9136]},97:{l:{99:{l:{104:{l:{101:{l:{59:{c:[9136]}}}}}}}}}}}}}}}}}}},110:{l:{69:{l:{59:{c:[8808]}}},97:{l:{112:{l:{59:{c:[10889]},112:{l:{114:{l:{111:{l:{120:{l:{59:{c:[10889]}}}}}}}}}}}}},101:{l:{59:{c:[10887]},113:{l:{59:{c:[10887]},113:{l:{59:{c:[8808]}}}}}}},115:{l:{105:{l:{109:{l:{59:{c:[8934]}}}}}}}}},111:{l:{97:{l:{110:{l:{103:{l:{59:{c:[10220]}}}}},114:{l:{114:{l:{59:{c:[8701]}}}}}}},98:{l:{114:{l:{107:{l:{59:{c:[10214]}}}}}}},110:{l:{103:{l:{108:{l:{101:{l:{102:{l:{116:{l:{97:{l:{114:{l:{114:{l:{111:{l:{119:{l:{59:{c:[10229]}}}}}}}}}}},114:{l:{105:{l:{103:{l:{104:{l:{116:{l:{97:{l:{114:{l:{114:{l:{111:{l:{119:{l:{59:{c:[10231]}}}}}}}}}}}}}}}}}}}}}}}}}}}}},109:{l:{97:{l:{112:{l:{115:{l:{116:{l:{111:{l:{59:{c:[10236]}}}}}}}}}}}}},114:{l:{105:{l:{103:{l:{104:{l:{116:{l:{97:{l:{114:{l:{114:{l:{111:{l:{119:{l:{59:{c:[10230]}}}}}}}}}}}}}}}}}}}}}}}}},111:{l:{112:{l:{97:{l:{114:{l:{114:{l:{111:{l:{119:{l:{108:{l:{101:{l:{102:{l:{116:{l:{59:{c:[8619]}}}}}}}}},114:{l:{105:{l:{103:{l:{104:{l:{116:{l:{59:{c:[8620]}}}}}}}}}}}}}}}}}}}}}}}}},112:{l:{97:{l:{114:{l:{59:{c:[10629]}}}}},102:{l:{59:{c:[120157]}}},108:{l:{117:{l:{115:{l:{59:{c:[10797]}}}}}}}}},116:{l:{105:{l:{109:{l:{101:{l:{115:{l:{59:{c:[10804]}}}}}}}}}}},119:{l:{97:{l:{115:{l:{116:{l:{59:{c:[8727]}}}}}}},98:{l:{97:{l:{114:{l:{59:{c:[95]}}}}}}}}},122:{l:{59:{c:[9674]},101:{l:{110:{l:{103:{l:{101:{l:{59:{c:[9674]}}}}}}}}},102:{l:{59:{c:[10731]}}}}}}},112:{l:{97:{l:{114:{l:{59:{c:[40]},108:{l:{116:{l:{59:{c:[10643]}}}}}}}}}}},114:{l:{97:{l:{114:{l:{114:{l:{59:{c:[8646]}}}}}}},99:{l:{111:{l:{114:{l:{110:{l:{101:{l:{114:{l:{59:{c:[8991]}}}}}}}}}}}}},104:{l:{97:{l:{114:{l:{59:{c:[8651]},100:{l:{59:{c:[10605]}}}}}}}}},109:{l:{59:{c:[8206]}}},116:{l:{114:{l:{105:{l:{59:{c:[8895]}}}}}}}}},115:{l:{97:{l:{113:{l:{117:{l:{111:{l:{59:{c:[8249]}}}}}}}}},99:{l:{114:{l:{59:{c:[120001]}}}}},104:{l:{59:{c:[8624]}}},105:{l:{109:{l:{59:{c:[8818]},101:{l:{59:{c:[10893]}}},103:{l:{59:{c:[10895]}}}}}}},113:{l:{98:{l:{59:{c:[91]}}},117:{l:{111:{l:{59:{c:[8216]},114:{l:{59:{c:[8218]}}}}}}}}},116:{l:{114:{l:{111:{l:{107:{l:{59:{c:[322]}}}}}}}}}}},116:{l:{59:{c:[60]},99:{l:{99:{l:{59:{c:[10918]}}},105:{l:{114:{l:{59:{c:[10873]}}}}}}},100:{l:{111:{l:{116:{l:{59:{c:[8918]}}}}}}},104:{l:{114:{l:{101:{l:{101:{l:{59:{c:[8907]}}}}}}}}},105:{l:{109:{l:{101:{l:{115:{l:{59:{c:[8905]}}}}}}}}},108:{l:{97:{l:{114:{l:{114:{l:{59:{c:[10614]}}}}}}}}},113:{l:{117:{l:{101:{l:{115:{l:{116:{l:{59:{c:[10875]}}}}}}}}}}},114:{l:{80:{l:{97:{l:{114:{l:{59:{c:[10646]}}}}}}},105:{l:{59:{c:[9667]},101:{l:{59:{c:[8884]}}},102:{l:{59:{c:[9666]}}}}}}}},c:[60]},117:{l:{114:{l:{100:{l:{115:{l:{104:{l:{97:{l:{114:{l:{59:{c:[10570]}}}}}}}}}}},117:{l:{104:{l:{97:{l:{114:{l:{59:{c:[10598]}}}}}}}}}}}}},118:{l:{101:{l:{114:{l:{116:{l:{110:{l:{101:{l:{113:{l:{113:{l:{59:{c:[8808,65024]}}}}}}}}}}}}}}},110:{l:{69:{l:{59:{c:[8808,65024]}}}}}}}}},109:{l:{68:{l:{68:{l:{111:{l:{116:{l:{59:{c:[8762]}}}}}}}}},97:{l:{99:{l:{114:{l:{59:{c:[175]}},c:[175]}}},108:{l:{101:{l:{59:{c:[9794]}}},116:{l:{59:{c:[10016]},101:{l:{115:{l:{101:{l:{59:{c:[10016]}}}}}}}}}}},112:{l:{59:{c:[8614]},115:{l:{116:{l:{111:{l:{59:{c:[8614]},100:{l:{111:{l:{119:{l:{110:{l:{59:{c:[8615]}}}}}}}}},108:{l:{101:{l:{102:{l:{116:{l:{59:{c:[8612]}}}}}}}}},117:{l:{112:{l:{59:{c:[8613]}}}}}}}}}}}}},114:{l:{107:{l:{101:{l:{114:{l:{59:{c:[9646]}}}}}}}}}}},99:{l:{111:{l:{109:{l:{109:{l:{97:{l:{59:{c:[10793]}}}}}}}}},121:{l:{59:{c:[1084]}}}}},100:{l:{97:{l:{115:{l:{104:{l:{59:{c:[8212]}}}}}}}}},101:{l:{97:{l:{115:{l:{117:{l:{114:{l:{101:{l:{100:{l:{97:{l:{110:{l:{103:{l:{108:{l:{101:{l:{59:{c:[8737]}}}}}}}}}}}}}}}}}}}}}}}}},102:{l:{114:{l:{59:{c:[120106]}}}}},104:{l:{111:{l:{59:{c:[8487]}}}}},105:{l:{99:{l:{114:{l:{111:{l:{59:{c:[181]}},c:[181]}}}}},100:{l:{59:{c:[8739]},97:{l:{115:{l:{116:{l:{59:{c:[42]}}}}}}},99:{l:{105:{l:{114:{l:{59:{c:[10992]}}}}}}},100:{l:{111:{l:{116:{l:{59:{c:[183]}},c:[183]}}}}}}},110:{l:{117:{l:{115:{l:{59:{c:[8722]},98:{l:{59:{c:[8863]}}},100:{l:{59:{c:[8760]},117:{l:{59:{c:[10794]}}}}}}}}}}}}},108:{l:{99:{l:{112:{l:{59:{c:[10971]}}}}},100:{l:{114:{l:{59:{c:[8230]}}}}}}},110:{l:{112:{l:{108:{l:{117:{l:{115:{l:{59:{c:[8723]}}}}}}}}}}},111:{l:{100:{l:{101:{l:{108:{l:{115:{l:{59:{c:[8871]}}}}}}}}},112:{l:{102:{l:{59:{c:[120158]}}}}}}},112:{l:{59:{c:[8723]}}},115:{l:{99:{l:{114:{l:{59:{c:[120002]}}}}},116:{l:{112:{l:{111:{l:{115:{l:{59:{c:[8766]}}}}}}}}}}},117:{l:{59:{c:[956]},108:{l:{116:{l:{105:{l:{109:{l:{97:{l:{112:{l:{59:{c:[8888]}}}}}}}}}}}}},109:{l:{97:{l:{112:{l:{59:{c:[8888]}}}}}}}}}}},110:{l:{71:{l:{103:{l:{59:{c:[8921,824]}}},116:{l:{59:{c:[8811,8402]},118:{l:{59:{c:[8811,824]}}}}}}},76:{l:{101:{l:{102:{l:{116:{l:{97:{l:{114:{l:{114:{l:{111:{l:{119:{l:{59:{c:[8653]}}}}}}}}}}},114:{l:{105:{l:{103:{l:{104:{l:{116:{l:{97:{l:{114:{l:{114:{l:{111:{l:{119:{l:{59:{c:[8654]}}}}}}}}}}}}}}}}}}}}}}}}}}},108:{l:{59:{c:[8920,824]}}},116:{l:{59:{c:[8810,8402]},118:{l:{59:{c:[8810,824]}}}}}}},82:{l:{105:{l:{103:{l:{104:{l:{116:{l:{97:{l:{114:{l:{114:{l:{111:{l:{119:{l:{59:{c:[8655]}}}}}}}}}}}}}}}}}}}}},86:{l:{68:{l:{97:{l:{115:{l:{104:{l:{59:{c:[8879]}}}}}}}}},100:{l:{97:{l:{115:{l:{104:{l:{59:{c:[8878]}}}}}}}}}}},97:{l:{98:{l:{108:{l:{97:{l:{59:{c:[8711]}}}}}}},99:{l:{117:{l:{116:{l:{101:{l:{59:{c:[324]}}}}}}}}},110:{l:{103:{l:{59:{c:[8736,8402]}}}}},112:{l:{59:{c:[8777]},69:{l:{59:{c:[10864,824]}}},105:{l:{100:{l:{59:{c:[8779,824]}}}}},111:{l:{115:{l:{59:{c:[329]}}}}},112:{l:{114:{l:{111:{l:{120:{l:{59:{c:[8777]}}}}}}}}}}},116:{l:{117:{l:{114:{l:{59:{c:[9838]},97:{l:{108:{l:{59:{c:[9838]},115:{l:{59:{c:[8469]}}}}}}}}}}}}}}},98:{l:{115:{l:{112:{l:{59:{c:[160]}},c:[160]}}},117:{l:{109:{l:{112:{l:{59:{c:[8782,824]},101:{l:{59:{c:[8783,824]}}}}}}}}}}},99:{l:{97:{l:{112:{l:{59:{c:[10819]}}},114:{l:{111:{l:{110:{l:{59:{c:[328]}}}}}}}}},101:{l:{100:{l:{105:{l:{108:{l:{59:{c:[326]}}}}}}}}},111:{l:{110:{l:{103:{l:{59:{c:[8775]},100:{l:{111:{l:{116:{l:{59:{c:[10861,824]}}}}}}}}}}}}},117:{l:{112:{l:{59:{c:[10818]}}}}},121:{l:{59:{c:[1085]}}}}},100:{l:{97:{l:{115:{l:{104:{l:{59:{c:[8211]}}}}}}}}},101:{l:{59:{c:[8800]},65:{l:{114:{l:{114:{l:{59:{c:[8663]}}}}}}},97:{l:{114:{l:{104:{l:{107:{l:{59:{c:[10532]}}}}},114:{l:{59:{c:[8599]},111:{l:{119:{l:{59:{c:[8599]}}}}}}}}}}},100:{l:{111:{l:{116:{l:{59:{c:[8784,824]}}}}}}},113:{l:{117:{l:{105:{l:{118:{l:{59:{c:[8802]}}}}}}}}},115:{l:{101:{l:{97:{l:{114:{l:{59:{c:[10536]}}}}}}},105:{l:{109:{l:{59:{c:[8770,824]}}}}}}},120:{l:{105:{l:{115:{l:{116:{l:{59:{c:[8708]},115:{l:{59:{c:[8708]}}}}}}}}}}}}},102:{l:{114:{l:{59:{c:[120107]}}}}},103:{l:{69:{l:{59:{c:[8807,824]}}},101:{l:{59:{c:[8817]},113:{l:{59:{c:[8817]},113:{l:{59:{c:[8807,824]}}},115:{l:{108:{l:{97:{l:{110:{l:{116:{l:{59:{c:[10878,824]}}}}}}}}}}}}},115:{l:{59:{c:[10878,824]}}}}},115:{l:{105:{l:{109:{l:{59:{c:[8821]}}}}}}},116:{l:{59:{c:[8815]},114:{l:{59:{c:[8815]}}}}}}},104:{l:{65:{l:{114:{l:{114:{l:{59:{c:[8654]}}}}}}},97:{l:{114:{l:{114:{l:{59:{c:[8622]}}}}}}},112:{l:{97:{l:{114:{l:{59:{c:[10994]}}}}}}}}},105:{l:{59:{c:[8715]},115:{l:{59:{c:[8956]},100:{l:{59:{c:[8954]}}}}},118:{l:{59:{c:[8715]}}}}},106:{l:{99:{l:{121:{l:{59:{c:[1114]}}}}}}},108:{l:{65:{l:{114:{l:{114:{l:{59:{c:[8653]}}}}}}},69:{l:{59:{c:[8806,824]}}},97:{l:{114:{l:{114:{l:{59:{c:[8602]}}}}}}},100:{l:{114:{l:{59:{c:[8229]}}}}},101:{l:{59:{c:[8816]},102:{l:{116:{l:{97:{l:{114:{l:{114:{l:{111:{l:{119:{l:{59:{c:[8602]}}}}}}}}}}},114:{l:{105:{l:{103:{l:{104:{l:{116:{l:{97:{l:{114:{l:{114:{l:{111:{l:{119:{l:{59:{c:[8622]}}}}}}}}}}}}}}}}}}}}}}}}},113:{l:{59:{c:[8816]},113:{l:{59:{c:[8806,824]}}},115:{l:{108:{l:{97:{l:{110:{l:{116:{l:{59:{c:[10877,824]}}}}}}}}}}}}},115:{l:{59:{c:[10877,824]},115:{l:{59:{c:[8814]}}}}}}},115:{l:{105:{l:{109:{l:{59:{c:[8820]}}}}}}},116:{l:{59:{c:[8814]},114:{l:{105:{l:{59:{c:[8938]},101:{l:{59:{c:[8940]}}}}}}}}}}},109:{l:{105:{l:{100:{l:{59:{c:[8740]}}}}}}},111:{l:{112:{l:{102:{l:{59:{c:[120159]}}}}},116:{l:{59:{c:[172]},105:{l:{110:{l:{59:{c:[8713]},69:{l:{59:{c:[8953,824]}}},100:{l:{111:{l:{116:{l:{59:{c:[8949,824]}}}}}}},118:{l:{97:{l:{59:{c:[8713]}}},98:{l:{59:{c:[8951]}}},99:{l:{59:{c:[8950]}}}}}}}}},110:{l:{105:{l:{59:{c:[8716]},118:{l:{97:{l:{59:{c:[8716]}}},98:{l:{59:{c:[8958]}}},99:{l:{59:{c:[8957]}}}}}}}}}},c:[172]}}},112:{l:{97:{l:{114:{l:{59:{c:[8742]},97:{l:{108:{l:{108:{l:{101:{l:{108:{l:{59:{c:[8742]}}}}}}}}}}},115:{l:{108:{l:{59:{c:[11005,8421]}}}}},116:{l:{59:{c:[8706,824]}}}}}}},111:{l:{108:{l:{105:{l:{110:{l:{116:{l:{59:{c:[10772]}}}}}}}}}}},114:{l:{59:{c:[8832]},99:{l:{117:{l:{101:{l:{59:{c:[8928]}}}}}}},101:{l:{59:{c:[10927,824]},99:{l:{59:{c:[8832]},101:{l:{113:{l:{59:{c:[10927,824]}}}}}}}}}}}}},114:{l:{65:{l:{114:{l:{114:{l:{59:{c:[8655]}}}}}}},97:{l:{114:{l:{114:{l:{59:{c:[8603]},99:{l:{59:{c:[10547,824]}}},119:{l:{59:{c:[8605,824]}}}}}}}}},105:{l:{103:{l:{104:{l:{116:{l:{97:{l:{114:{l:{114:{l:{111:{l:{119:{l:{59:{c:[8603]}}}}}}}}}}}}}}}}}}},116:{l:{114:{l:{105:{l:{59:{c:[8939]},101:{l:{59:{c:[8941]}}}}}}}}}}},115:{l:{99:{l:{59:{c:[8833]},99:{l:{117:{l:{101:{l:{59:{c:[8929]}}}}}}},101:{l:{59:{c:[10928,824]}}},114:{l:{59:{c:[120003]}}}}},104:{l:{111:{l:{114:{l:{116:{l:{109:{l:{105:{l:{100:{l:{59:{c:[8740]}}}}}}},112:{l:{97:{l:{114:{l:{97:{l:{108:{l:{108:{l:{101:{l:{108:{l:{59:{c:[8742]}}}}}}}}}}}}}}}}}}}}}}}}},105:{l:{109:{l:{59:{c:[8769]},101:{l:{59:{c:[8772]},113:{l:{59:{c:[8772]}}}}}}}}},109:{l:{105:{l:{100:{l:{59:{c:[8740]}}}}}}},112:{l:{97:{l:{114:{l:{59:{c:[8742]}}}}}}},113:{l:{115:{l:{117:{l:{98:{l:{101:{l:{59:{c:[8930]}}}}},112:{l:{101:{l:{59:{c:[8931]}}}}}}}}}}},117:{l:{98:{l:{59:{c:[8836]},69:{l:{59:{c:[10949,824]}}},101:{l:{59:{c:[8840]}}},115:{l:{101:{l:{116:{l:{59:{c:[8834,8402]},101:{l:{113:{l:{59:{c:[8840]},113:{l:{59:{c:[10949,824]}}}}}}}}}}}}}}},99:{l:{99:{l:{59:{c:[8833]},101:{l:{113:{l:{59:{c:[10928,824]}}}}}}}}},112:{l:{59:{c:[8837]},69:{l:{59:{c:[10950,824]}}},101:{l:{59:{c:[8841]}}},115:{l:{101:{l:{116:{l:{59:{c:[8835,8402]},101:{l:{113:{l:{59:{c:[8841]},113:{l:{59:{c:[10950,824]}}}}}}}}}}}}}}}}}}},116:{l:{103:{l:{108:{l:{59:{c:[8825]}}}}},105:{l:{108:{l:{100:{l:{101:{l:{59:{c:[241]}},c:[241]}}}}}}},108:{l:{103:{l:{59:{c:[8824]}}}}},114:{l:{105:{l:{97:{l:{110:{l:{103:{l:{108:{l:{101:{l:{108:{l:{101:{l:{102:{l:{116:{l:{59:{c:[8938]},101:{l:{113:{l:{59:{c:[8940]}}}}}}}}}}}}},114:{l:{105:{l:{103:{l:{104:{l:{116:{l:{59:{c:[8939]},101:{l:{113:{l:{59:{c:[8941]}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}},117:{l:{59:{c:[957]},109:{l:{59:{c:[35]},101:{l:{114:{l:{111:{l:{59:{c:[8470]}}}}}}},115:{l:{112:{l:{59:{c:[8199]}}}}}}}}},118:{l:{68:{l:{97:{l:{115:{l:{104:{l:{59:{c:[8877]}}}}}}}}},72:{l:{97:{l:{114:{l:{114:{l:{59:{c:[10500]}}}}}}}}},97:{l:{112:{l:{59:{c:[8781,8402]}}}}},100:{l:{97:{l:{115:{l:{104:{l:{59:{c:[8876]}}}}}}}}},103:{l:{101:{l:{59:{c:[8805,8402]}}},116:{l:{59:{c:[62,8402]}}}}},105:{l:{110:{l:{102:{l:{105:{l:{110:{l:{59:{c:[10718]}}}}}}}}}}},108:{l:{65:{l:{114:{l:{114:{l:{59:{c:[10498]}}}}}}},101:{l:{59:{c:[8804,8402]}}},116:{l:{59:{c:[60,8402]},114:{l:{105:{l:{101:{l:{59:{c:[8884,8402]}}}}}}}}}}},114:{l:{65:{l:{114:{l:{114:{l:{59:{c:[10499]}}}}}}},116:{l:{114:{l:{105:{l:{101:{l:{59:{c:[8885,8402]}}}}}}}}}}},115:{l:{105:{l:{109:{l:{59:{c:[8764,8402]}}}}}}}}},119:{l:{65:{l:{114:{l:{114:{l:{59:{c:[8662]}}}}}}},97:{l:{114:{l:{104:{l:{107:{l:{59:{c:[10531]}}}}},114:{l:{59:{c:[8598]},111:{l:{119:{l:{59:{c:[8598]}}}}}}}}}}},110:{l:{101:{l:{97:{l:{114:{l:{59:{c:[10535]}}}}}}}}}}}}},111:{l:{83:{l:{59:{c:[9416]}}},97:{l:{99:{l:{117:{l:{116:{l:{101:{l:{59:{c:[243]}},c:[243]}}}}}}},115:{l:{116:{l:{59:{c:[8859]}}}}}}},99:{l:{105:{l:{114:{l:{59:{c:[8858]},99:{l:{59:{c:[244]}},c:[244]}}}}},121:{l:{59:{c:[1086]}}}}},100:{l:{97:{l:{115:{l:{104:{l:{59:{c:[8861]}}}}}}},98:{l:{108:{l:{97:{l:{99:{l:{59:{c:[337]}}}}}}}}},105:{l:{118:{l:{59:{c:[10808]}}}}},111:{l:{116:{l:{59:{c:[8857]}}}}},115:{l:{111:{l:{108:{l:{100:{l:{59:{c:[10684]}}}}}}}}}}},101:{l:{108:{l:{105:{l:{103:{l:{59:{c:[339]}}}}}}}}},102:{l:{99:{l:{105:{l:{114:{l:{59:{c:[10687]}}}}}}},114:{l:{59:{c:[120108]}}}}},103:{l:{111:{l:{110:{l:{59:{c:[731]}}}}},114:{l:{97:{l:{118:{l:{101:{l:{59:{c:[242]}},c:[242]}}}}}}},116:{l:{59:{c:[10689]}}}}},104:{l:{98:{l:{97:{l:{114:{l:{59:{c:[10677]}}}}}}},109:{l:{59:{c:[937]}}}}},105:{l:{110:{l:{116:{l:{59:{c:[8750]}}}}}}},108:{l:{97:{l:{114:{l:{114:{l:{59:{c:[8634]}}}}}}},99:{l:{105:{l:{114:{l:{59:{c:[10686]}}}}},114:{l:{111:{l:{115:{l:{115:{l:{59:{c:[10683]}}}}}}}}}}},105:{l:{110:{l:{101:{l:{59:{c:[8254]}}}}}}},116:{l:{59:{c:[10688]}}}}},109:{l:{97:{l:{99:{l:{114:{l:{59:{c:[333]}}}}}}},101:{l:{103:{l:{97:{l:{59:{c:[969]}}}}}}},105:{l:{99:{l:{114:{l:{111:{l:{110:{l:{59:{c:[959]}}}}}}}}},100:{l:{59:{c:[10678]}}},110:{l:{117:{l:{115:{l:{59:{c:[8854]}}}}}}}}}}},111:{l:{112:{l:{102:{l:{59:{c:[120160]}}}}}}},112:{l:{97:{l:{114:{l:{59:{c:[10679]}}}}},101:{l:{114:{l:{112:{l:{59:{c:[10681]}}}}}}},108:{l:{117:{l:{115:{l:{59:{c:[8853]}}}}}}}}},114:{l:{59:{c:[8744]},97:{l:{114:{l:{114:{l:{59:{c:[8635]}}}}}}},100:{l:{59:{c:[10845]},101:{l:{114:{l:{59:{c:[8500]},111:{l:{102:{l:{59:{c:[8500]}}}}}}}}},102:{l:{59:{c:[170]}},c:[170]},109:{l:{59:{c:[186]}},c:[186]}}},105:{l:{103:{l:{111:{l:{102:{l:{59:{c:[8886]}}}}}}}}},111:{l:{114:{l:{59:{c:[10838]}}}}},115:{l:{108:{l:{111:{l:{112:{l:{101:{l:{59:{c:[10839]}}}}}}}}}}},118:{l:{59:{c:[10843]}}}}},115:{l:{99:{l:{114:{l:{59:{c:[8500]}}}}},108:{l:{97:{l:{115:{l:{104:{l:{59:{c:[248]}},c:[248]}}}}}}},111:{l:{108:{l:{59:{c:[8856]}}}}}}},116:{l:{105:{l:{108:{l:{100:{l:{101:{l:{59:{c:[245]}},c:[245]}}}}},109:{l:{101:{l:{115:{l:{59:{c:[8855]},97:{l:{115:{l:{59:{c:[10806]}}}}}}}}}}}}}}},117:{l:{109:{l:{108:{l:{59:{c:[246]}},c:[246]}}}}},118:{l:{98:{l:{97:{l:{114:{l:{59:{c:[9021]}}}}}}}}}}},112:{l:{97:{l:{114:{l:{59:{c:[8741]},97:{l:{59:{c:[182]},108:{l:{108:{l:{101:{l:{108:{l:{59:{c:[8741]}}}}}}}}}},c:[182]},115:{l:{105:{l:{109:{l:{59:{c:[10995]}}}}},108:{l:{59:{c:[11005]}}}}},116:{l:{59:{c:[8706]}}}}}}},99:{l:{121:{l:{59:{c:[1087]}}}}},101:{l:{114:{l:{99:{l:{110:{l:{116:{l:{59:{c:[37]}}}}}}},105:{l:{111:{l:{100:{l:{59:{c:[46]}}}}}}},109:{l:{105:{l:{108:{l:{59:{c:[8240]}}}}}}},112:{l:{59:{c:[8869]}}},116:{l:{101:{l:{110:{l:{107:{l:{59:{c:[8241]}}}}}}}}}}}}},102:{l:{114:{l:{59:{c:[120109]}}}}},104:{l:{105:{l:{59:{c:[966]},118:{l:{59:{c:[981]}}}}},109:{l:{109:{l:{97:{l:{116:{l:{59:{c:[8499]}}}}}}}}},111:{l:{110:{l:{101:{l:{59:{c:[9742]}}}}}}}}},105:{l:{59:{c:[960]},116:{l:{99:{l:{104:{l:{102:{l:{111:{l:{114:{l:{107:{l:{59:{c:[8916]}}}}}}}}}}}}}}},118:{l:{59:{c:[982]}}}}},108:{l:{97:{l:{110:{l:{99:{l:{107:{l:{59:{c:[8463]},104:{l:{59:{c:[8462]}}}}}}},107:{l:{118:{l:{59:{c:[8463]}}}}}}}}},117:{l:{115:{l:{59:{c:[43]},97:{l:{99:{l:{105:{l:{114:{l:{59:{c:[10787]}}}}}}}}},98:{l:{59:{c:[8862]}}},99:{l:{105:{l:{114:{l:{59:{c:[10786]}}}}}}},100:{l:{111:{l:{59:{c:[8724]}}},117:{l:{59:{c:[10789]}}}}},101:{l:{59:{c:[10866]}}},109:{l:{110:{l:{59:{c:[177]}},c:[177]}}},115:{l:{105:{l:{109:{l:{59:{c:[10790]}}}}}}},116:{l:{119:{l:{111:{l:{59:{c:[10791]}}}}}}}}}}}}},109:{l:{59:{c:[177]}}},111:{l:{105:{l:{110:{l:{116:{l:{105:{l:{110:{l:{116:{l:{59:{c:[10773]}}}}}}}}}}}}},112:{l:{102:{l:{59:{c:[120161]}}}}},117:{l:{110:{l:{100:{l:{59:{c:[163]}},c:[163]}}}}}}},114:{l:{59:{c:[8826]},69:{l:{59:{c:[10931]}}},97:{l:{112:{l:{59:{c:[10935]}}}}},99:{l:{117:{l:{101:{l:{59:{c:[8828]}}}}}}},101:{l:{59:{c:[10927]},99:{l:{59:{c:[8826]},97:{l:{112:{l:{112:{l:{114:{l:{111:{l:{120:{l:{59:{c:[10935]}}}}}}}}}}}}},99:{l:{117:{l:{114:{l:{108:{l:{121:{l:{101:{l:{113:{l:{59:{c:[8828]}}}}}}}}}}}}}}},101:{l:{113:{l:{59:{c:[10927]}}}}},110:{l:{97:{l:{112:{l:{112:{l:{114:{l:{111:{l:{120:{l:{59:{c:[10937]}}}}}}}}}}}}},101:{l:{113:{l:{113:{l:{59:{c:[10933]}}}}}}},115:{l:{105:{l:{109:{l:{59:{c:[8936]}}}}}}}}},115:{l:{105:{l:{109:{l:{59:{c:[8830]}}}}}}}}}}},105:{l:{109:{l:{101:{l:{59:{c:[8242]},115:{l:{59:{c:[8473]}}}}}}}}},110:{l:{69:{l:{59:{c:[10933]}}},97:{l:{112:{l:{59:{c:[10937]}}}}},115:{l:{105:{l:{109:{l:{59:{c:[8936]}}}}}}}}},111:{l:{100:{l:{59:{c:[8719]}}},102:{l:{97:{l:{108:{l:{97:{l:{114:{l:{59:{c:[9006]}}}}}}}}},108:{l:{105:{l:{110:{l:{101:{l:{59:{c:[8978]}}}}}}}}},115:{l:{117:{l:{114:{l:{102:{l:{59:{c:[8979]}}}}}}}}}}},112:{l:{59:{c:[8733]},116:{l:{111:{l:{59:{c:[8733]}}}}}}}}},115:{l:{105:{l:{109:{l:{59:{c:[8830]}}}}}}},117:{l:{114:{l:{101:{l:{108:{l:{59:{c:[8880]}}}}}}}}}}},115:{l:{99:{l:{114:{l:{59:{c:[120005]}}}}},105:{l:{59:{c:[968]}}}}},117:{l:{110:{l:{99:{l:{115:{l:{112:{l:{59:{c:[8200]}}}}}}}}}}}}},113:{l:{102:{l:{114:{l:{59:{c:[120110]}}}}},105:{l:{110:{l:{116:{l:{59:{c:[10764]}}}}}}},111:{l:{112:{l:{102:{l:{59:{c:[120162]}}}}}}},112:{l:{114:{l:{105:{l:{109:{l:{101:{l:{59:{c:[8279]}}}}}}}}}}},115:{l:{99:{l:{114:{l:{59:{c:[120006]}}}}}}},117:{l:{97:{l:{116:{l:{101:{l:{114:{l:{110:{l:{105:{l:{111:{l:{110:{l:{115:{l:{59:{c:[8461]}}}}}}}}}}}}}}},105:{l:{110:{l:{116:{l:{59:{c:[10774]}}}}}}}}}}},101:{l:{115:{l:{116:{l:{59:{c:[63]},101:{l:{113:{l:{59:{c:[8799]}}}}}}}}}}},111:{l:{116:{l:{59:{c:[34]}},c:[34]}}}}}}},114:{l:{65:{l:{97:{l:{114:{l:{114:{l:{59:{c:[8667]}}}}}}},114:{l:{114:{l:{59:{c:[8658]}}}}},116:{l:{97:{l:{105:{l:{108:{l:{59:{c:[10524]}}}}}}}}}}},66:{l:{97:{l:{114:{l:{114:{l:{59:{c:[10511]}}}}}}}}},72:{l:{97:{l:{114:{l:{59:{c:[10596]}}}}}}},97:{l:{99:{l:{101:{l:{59:{c:[8765,817]}}},117:{l:{116:{l:{101:{l:{59:{c:[341]}}}}}}}}},100:{l:{105:{l:{99:{l:{59:{c:[8730]}}}}}}},101:{l:{109:{l:{112:{l:{116:{l:{121:{l:{118:{l:{59:{c:[10675]}}}}}}}}}}}}},110:{l:{103:{l:{59:{c:[10217]},100:{l:{59:{c:[10642]}}},101:{l:{59:{c:[10661]}}},108:{l:{101:{l:{59:{c:[10217]}}}}}}}}},113:{l:{117:{l:{111:{l:{59:{c:[187]}},c:[187]}}}}},114:{l:{114:{l:{59:{c:[8594]},97:{l:{112:{l:{59:{c:[10613]}}}}},98:{l:{59:{c:[8677]},102:{l:{115:{l:{59:{c:[10528]}}}}}}},99:{l:{59:{c:[10547]}}},102:{l:{115:{l:{59:{c:[10526]}}}}},104:{l:{107:{l:{59:{c:[8618]}}}}},108:{l:{112:{l:{59:{c:[8620]}}}}},112:{l:{108:{l:{59:{c:[10565]}}}}},115:{l:{105:{l:{109:{l:{59:{c:[10612]}}}}}}},116:{l:{108:{l:{59:{c:[8611]}}}}},119:{l:{59:{c:[8605]}}}}}}},116:{l:{97:{l:{105:{l:{108:{l:{59:{c:[10522]}}}}}}},105:{l:{111:{l:{59:{c:[8758]},110:{l:{97:{l:{108:{l:{115:{l:{59:{c:[8474]}}}}}}}}}}}}}}}}},98:{l:{97:{l:{114:{l:{114:{l:{59:{c:[10509]}}}}}}},98:{l:{114:{l:{107:{l:{59:{c:[10099]}}}}}}},114:{l:{97:{l:{99:{l:{101:{l:{59:{c:[125]}}},107:{l:{59:{c:[93]}}}}}}},107:{l:{101:{l:{59:{c:[10636]}}},115:{l:{108:{l:{100:{l:{59:{c:[10638]}}},117:{l:{59:{c:[10640]}}}}}}}}}}}}},99:{l:{97:{l:{114:{l:{111:{l:{110:{l:{59:{c:[345]}}}}}}}}},101:{l:{100:{l:{105:{l:{108:{l:{59:{c:[343]}}}}}}},105:{l:{108:{l:{59:{c:[8969]}}}}}}},117:{l:{98:{l:{59:{c:[125]}}}}},121:{l:{59:{c:[1088]}}}}},100:{l:{99:{l:{97:{l:{59:{c:[10551]}}}}},108:{l:{100:{l:{104:{l:{97:{l:{114:{l:{59:{c:[10601]}}}}}}}}}}},113:{l:{117:{l:{111:{l:{59:{c:[8221]},114:{l:{59:{c:[8221]}}}}}}}}},115:{l:{104:{l:{59:{c:[8627]}}}}}}},101:{l:{97:{l:{108:{l:{59:{c:[8476]},105:{l:{110:{l:{101:{l:{59:{c:[8475]}}}}}}},112:{l:{97:{l:{114:{l:{116:{l:{59:{c:[8476]}}}}}}}}},115:{l:{59:{c:[8477]}}}}}}},99:{l:{116:{l:{59:{c:[9645]}}}}},103:{l:{59:{c:[174]}},c:[174]}}},102:{l:{105:{l:{115:{l:{104:{l:{116:{l:{59:{c:[10621]}}}}}}}}},108:{l:{111:{l:{111:{l:{114:{l:{59:{c:[8971]}}}}}}}}},114:{l:{59:{c:[120111]}}}}},104:{l:{97:{l:{114:{l:{100:{l:{59:{c:[8641]}}},117:{l:{59:{c:[8640]},108:{l:{59:{c:[10604]}}}}}}}}},111:{l:{59:{c:[961]},118:{l:{59:{c:[1009]}}}}}}},105:{l:{103:{l:{104:{l:{116:{l:{97:{l:{114:{l:{114:{l:{111:{l:{119:{l:{59:{c:[8594]},116:{l:{97:{l:{105:{l:{108:{l:{59:{c:[8611]}}}}}}}}}}}}}}}}}}},104:{l:{97:{l:{114:{l:{112:{l:{111:{l:{111:{l:{110:{l:{100:{l:{111:{l:{119:{l:{110:{l:{59:{c:[8641]}}}}}}}}},117:{l:{112:{l:{59:{c:[8640]}}}}}}}}}}}}}}}}}}},108:{l:{101:{l:{102:{l:{116:{l:{97:{l:{114:{l:{114:{l:{111:{l:{119:{l:{115:{l:{59:{c:[8644]}}}}}}}}}}}}},104:{l:{97:{l:{114:{l:{112:{l:{111:{l:{111:{l:{110:{l:{115:{l:{59:{c:[8652]}}}}}}}}}}}}}}}}}}}}}}}}},114:{l:{105:{l:{103:{l:{104:{l:{116:{l:{97:{l:{114:{l:{114:{l:{111:{l:{119:{l:{115:{l:{59:{c:[8649]}}}}}}}}}}}}}}}}}}}}}}},115:{l:{113:{l:{117:{l:{105:{l:{103:{l:{97:{l:{114:{l:{114:{l:{111:{l:{119:{l:{59:{c:[8605]}}}}}}}}}}}}}}}}}}}}},116:{l:{104:{l:{114:{l:{101:{l:{101:{l:{116:{l:{105:{l:{109:{l:{101:{l:{115:{l:{59:{c:[8908]}}}}}}}}}}}}}}}}}}}}}}}}}}},110:{l:{103:{l:{59:{c:[730]}}}}},115:{l:{105:{l:{110:{l:{103:{l:{100:{l:{111:{l:{116:{l:{115:{l:{101:{l:{113:{l:{59:{c:[8787]}}}}}}}}}}}}}}}}}}}}}}},108:{l:{97:{l:{114:{l:{114:{l:{59:{c:[8644]}}}}}}},104:{l:{97:{l:{114:{l:{59:{c:[8652]}}}}}}},109:{l:{59:{c:[8207]}}}}},109:{l:{111:{l:{117:{l:{115:{l:{116:{l:{59:{c:[9137]},97:{l:{99:{l:{104:{l:{101:{l:{59:{c:[9137]}}}}}}}}}}}}}}}}}}},110:{l:{109:{l:{105:{l:{100:{l:{59:{c:[10990]}}}}}}}}},111:{l:{97:{l:{110:{l:{103:{l:{59:{c:[10221]}}}}},114:{l:{114:{l:{59:{c:[8702]}}}}}}},98:{l:{114:{l:{107:{l:{59:{c:[10215]}}}}}}},112:{l:{97:{l:{114:{l:{59:{c:[10630]}}}}},102:{l:{59:{c:[120163]}}},108:{l:{117:{l:{115:{l:{59:{c:[10798]}}}}}}}}},116:{l:{105:{l:{109:{l:{101:{l:{115:{l:{59:{c:[10805]}}}}}}}}}}}}},112:{l:{97:{l:{114:{l:{59:{c:[41]},103:{l:{116:{l:{59:{c:[10644]}}}}}}}}},112:{l:{111:{l:{108:{l:{105:{l:{110:{l:{116:{l:{59:{c:[10770]}}}}}}}}}}}}}}},114:{l:{97:{l:{114:{l:{114:{l:{59:{c:[8649]}}}}}}}}},115:{l:{97:{l:{113:{l:{117:{l:{111:{l:{59:{c:[8250]}}}}}}}}},99:{l:{114:{l:{59:{c:[120007]}}}}},104:{l:{59:{c:[8625]}}},113:{l:{98:{l:{59:{c:[93]}}},117:{l:{111:{l:{59:{c:[8217]},114:{l:{59:{c:[8217]}}}}}}}}}}},116:{l:{104:{l:{114:{l:{101:{l:{101:{l:{59:{c:[8908]}}}}}}}}},105:{l:{109:{l:{101:{l:{115:{l:{59:{c:[8906]}}}}}}}}},114:{l:{105:{l:{59:{c:[9657]},101:{l:{59:{c:[8885]}}},102:{l:{59:{c:[9656]}}},108:{l:{116:{l:{114:{l:{105:{l:{59:{c:[10702]}}}}}}}}}}}}}}},117:{l:{108:{l:{117:{l:{104:{l:{97:{l:{114:{l:{59:{c:[10600]}}}}}}}}}}}}},120:{l:{59:{c:[8478]}}}}},115:{l:{97:{l:{99:{l:{117:{l:{116:{l:{101:{l:{59:{c:[347]}}}}}}}}}}},98:{l:{113:{l:{117:{l:{111:{l:{59:{c:[8218]}}}}}}}}},99:{l:{59:{c:[8827]},69:{l:{59:{c:[10932]}}},97:{l:{112:{l:{59:{c:[10936]}}},114:{l:{111:{l:{110:{l:{59:{c:[353]}}}}}}}}},99:{l:{117:{l:{101:{l:{59:{c:[8829]}}}}}}},101:{l:{59:{c:[10928]},100:{l:{105:{l:{108:{l:{59:{c:[351]}}}}}}}}},105:{l:{114:{l:{99:{l:{59:{c:[349]}}}}}}},110:{l:{69:{l:{59:{c:[10934]}}},97:{l:{112:{l:{59:{c:[10938]}}}}},115:{l:{105:{l:{109:{l:{59:{c:[8937]}}}}}}}}},112:{l:{111:{l:{108:{l:{105:{l:{110:{l:{116:{l:{59:{c:[10771]}}}}}}}}}}}}},115:{l:{105:{l:{109:{l:{59:{c:[8831]}}}}}}},121:{l:{59:{c:[1089]}}}}},100:{l:{111:{l:{116:{l:{59:{c:[8901]},98:{l:{59:{c:[8865]}}},101:{l:{59:{c:[10854]}}}}}}}}},101:{l:{65:{l:{114:{l:{114:{l:{59:{c:[8664]}}}}}}},97:{l:{114:{l:{104:{l:{107:{l:{59:{c:[10533]}}}}},114:{l:{59:{c:[8600]},111:{l:{119:{l:{59:{c:[8600]}}}}}}}}}}},99:{l:{116:{l:{59:{c:[167]}},c:[167]}}},109:{l:{105:{l:{59:{c:[59]}}}}},115:{l:{119:{l:{97:{l:{114:{l:{59:{c:[10537]}}}}}}}}},116:{l:{109:{l:{105:{l:{110:{l:{117:{l:{115:{l:{59:{c:[8726]}}}}}}}}},110:{l:{59:{c:[8726]}}}}}}},120:{l:{116:{l:{59:{c:[10038]}}}}}}},102:{l:{114:{l:{59:{c:[120112]},111:{l:{119:{l:{110:{l:{59:{c:[8994]}}}}}}}}}}},104:{l:{97:{l:{114:{l:{112:{l:{59:{c:[9839]}}}}}}},99:{l:{104:{l:{99:{l:{121:{l:{59:{c:[1097]}}}}}}},121:{l:{59:{c:[1096]}}}}},111:{l:{114:{l:{116:{l:{109:{l:{105:{l:{100:{l:{59:{c:[8739]}}}}}}},112:{l:{97:{l:{114:{l:{97:{l:{108:{l:{108:{l:{101:{l:{108:{l:{59:{c:[8741]}}}}}}}}}}}}}}}}}}}}}}},121:{l:{59:{c:[173]}},c:[173]}}},105:{l:{103:{l:{109:{l:{97:{l:{59:{c:[963]},102:{l:{59:{c:[962]}}},118:{l:{59:{c:[962]}}}}}}}}},109:{l:{59:{c:[8764]},100:{l:{111:{l:{116:{l:{59:{c:[10858]}}}}}}},101:{l:{59:{c:[8771]},113:{l:{59:{c:[8771]}}}}},103:{l:{59:{c:[10910]},69:{l:{59:{c:[10912]}}}}},108:{l:{59:{c:[10909]},69:{l:{59:{c:[10911]}}}}},110:{l:{101:{l:{59:{c:[8774]}}}}},112:{l:{108:{l:{117:{l:{115:{l:{59:{c:[10788]}}}}}}}}},114:{l:{97:{l:{114:{l:{114:{l:{59:{c:[10610]}}}}}}}}}}}}},108:{l:{97:{l:{114:{l:{114:{l:{59:{c:[8592]}}}}}}}}},109:{l:{97:{l:{108:{l:{108:{l:{115:{l:{101:{l:{116:{l:{109:{l:{105:{l:{110:{l:{117:{l:{115:{l:{59:{c:[8726]}}}}}}}}}}}}}}}}}}}}},115:{l:{104:{l:{112:{l:{59:{c:[10803]}}}}}}}}},101:{l:{112:{l:{97:{l:{114:{l:{115:{l:{108:{l:{59:{c:[10724]}}}}}}}}}}}}},105:{l:{100:{l:{59:{c:[8739]}}},108:{l:{101:{l:{59:{c:[8995]}}}}}}},116:{l:{59:{c:[10922]},101:{l:{59:{c:[10924]},115:{l:{59:{c:[10924,65024]}}}}}}}}},111:{l:{102:{l:{116:{l:{99:{l:{121:{l:{59:{c:[1100]}}}}}}}}},108:{l:{59:{c:[47]},98:{l:{59:{c:[10692]},97:{l:{114:{l:{59:{c:[9023]}}}}}}}}},112:{l:{102:{l:{59:{c:[120164]}}}}}}},112:{l:{97:{l:{100:{l:{101:{l:{115:{l:{59:{c:[9824]},117:{l:{105:{l:{116:{l:{59:{c:[9824]}}}}}}}}}}}}},114:{l:{59:{c:[8741]}}}}}}},113:{l:{99:{l:{97:{l:{112:{l:{59:{c:[8851]},115:{l:{59:{c:[8851,65024]}}}}}}},117:{l:{112:{l:{59:{c:[8852]},115:{l:{59:{c:[8852,65024]}}}}}}}}},115:{l:{117:{l:{98:{l:{59:{c:[8847]},101:{l:{59:{c:[8849]}}},115:{l:{101:{l:{116:{l:{59:{c:[8847]},101:{l:{113:{l:{59:{c:[8849]}}}}}}}}}}}}},112:{l:{59:{c:[8848]},101:{l:{59:{c:[8850]}}},115:{l:{101:{l:{116:{l:{59:{c:[8848]},101:{l:{113:{l:{59:{c:[8850]}}}}}}}}}}}}}}}}},117:{l:{59:{c:[9633]},97:{l:{114:{l:{101:{l:{59:{c:[9633]}}},102:{l:{59:{c:[9642]}}}}}}},102:{l:{59:{c:[9642]}}}}}}},114:{l:{97:{l:{114:{l:{114:{l:{59:{c:[8594]}}}}}}}}},115:{l:{99:{l:{114:{l:{59:{c:[120008]}}}}},101:{l:{116:{l:{109:{l:{110:{l:{59:{c:[8726]}}}}}}}}},109:{l:{105:{l:{108:{l:{101:{l:{59:{c:[8995]}}}}}}}}},116:{l:{97:{l:{114:{l:{102:{l:{59:{c:[8902]}}}}}}}}}}},116:{l:{97:{l:{114:{l:{59:{c:[9734]},102:{l:{59:{c:[9733]}}}}}}},114:{l:{97:{l:{105:{l:{103:{l:{104:{l:{116:{l:{101:{l:{112:{l:{115:{l:{105:{l:{108:{l:{111:{l:{110:{l:{59:{c:[1013]}}}}}}}}}}}}}}},112:{l:{104:{l:{105:{l:{59:{c:[981]}}}}}}}}}}}}}}}}},110:{l:{115:{l:{59:{c:[175]}}}}}}}}},117:{l:{98:{l:{59:{c:[8834]},69:{l:{59:{c:[10949]}}},100:{l:{111:{l:{116:{l:{59:{c:[10941]}}}}}}},101:{l:{59:{c:[8838]},100:{l:{111:{l:{116:{l:{59:{c:[10947]}}}}}}}}},109:{l:{117:{l:{108:{l:{116:{l:{59:{c:[10945]}}}}}}}}},110:{l:{69:{l:{59:{c:[10955]}}},101:{l:{59:{c:[8842]}}}}},112:{l:{108:{l:{117:{l:{115:{l:{59:{c:[10943]}}}}}}}}},114:{l:{97:{l:{114:{l:{114:{l:{59:{c:[10617]}}}}}}}}},115:{l:{101:{l:{116:{l:{59:{c:[8834]},101:{l:{113:{l:{59:{c:[8838]},113:{l:{59:{c:[10949]}}}}}}},110:{l:{101:{l:{113:{l:{59:{c:[8842]},113:{l:{59:{c:[10955]}}}}}}}}}}}}},105:{l:{109:{l:{59:{c:[10951]}}}}},117:{l:{98:{l:{59:{c:[10965]}}},112:{l:{59:{c:[10963]}}}}}}}}},99:{l:{99:{l:{59:{c:[8827]},97:{l:{112:{l:{112:{l:{114:{l:{111:{l:{120:{l:{59:{c:[10936]}}}}}}}}}}}}},99:{l:{117:{l:{114:{l:{108:{l:{121:{l:{101:{l:{113:{l:{59:{c:[8829]}}}}}}}}}}}}}}},101:{l:{113:{l:{59:{c:[10928]}}}}},110:{l:{97:{l:{112:{l:{112:{l:{114:{l:{111:{l:{120:{l:{59:{c:[10938]}}}}}}}}}}}}},101:{l:{113:{l:{113:{l:{59:{c:[10934]}}}}}}},115:{l:{105:{l:{109:{l:{59:{c:[8937]}}}}}}}}},115:{l:{105:{l:{109:{l:{59:{c:[8831]}}}}}}}}}}},109:{l:{59:{c:[8721]}}},110:{l:{103:{l:{59:{c:[9834]}}}}},112:{l:{49:{l:{59:{c:[185]}},c:[185]},50:{l:{59:{c:[178]}},c:[178]},51:{l:{59:{c:[179]}},c:[179]},59:{c:[8835]},69:{l:{59:{c:[10950]}}},100:{l:{111:{l:{116:{l:{59:{c:[10942]}}}}},115:{l:{117:{l:{98:{l:{59:{c:[10968]}}}}}}}}},101:{l:{59:{c:[8839]},100:{l:{111:{l:{116:{l:{59:{c:[10948]}}}}}}}}},104:{l:{115:{l:{111:{l:{108:{l:{59:{c:[10185]}}}}},117:{l:{98:{l:{59:{c:[10967]}}}}}}}}},108:{l:{97:{l:{114:{l:{114:{l:{59:{c:[10619]}}}}}}}}},109:{l:{117:{l:{108:{l:{116:{l:{59:{c:[10946]}}}}}}}}},110:{l:{69:{l:{59:{c:[10956]}}},101:{l:{59:{c:[8843]}}}}},112:{l:{108:{l:{117:{l:{115:{l:{59:{c:[10944]}}}}}}}}},115:{l:{101:{l:{116:{l:{59:{c:[8835]},101:{l:{113:{l:{59:{c:[8839]},113:{l:{59:{c:[10950]}}}}}}},110:{l:{101:{l:{113:{l:{59:{c:[8843]},113:{l:{59:{c:[10956]}}}}}}}}}}}}},105:{l:{109:{l:{59:{c:[10952]}}}}},117:{l:{98:{l:{59:{c:[10964]}}},112:{l:{59:{c:[10966]}}}}}}}}}}},119:{l:{65:{l:{114:{l:{114:{l:{59:{c:[8665]}}}}}}},97:{l:{114:{l:{104:{l:{107:{l:{59:{c:[10534]}}}}},114:{l:{59:{c:[8601]},111:{l:{119:{l:{59:{c:[8601]}}}}}}}}}}},110:{l:{119:{l:{97:{l:{114:{l:{59:{c:[10538]}}}}}}}}}}},122:{l:{108:{l:{105:{l:{103:{l:{59:{c:[223]}},c:[223]}}}}}}}}},116:{l:{97:{l:{114:{l:{103:{l:{101:{l:{116:{l:{59:{c:[8982]}}}}}}}}},117:{l:{59:{c:[964]}}}}},98:{l:{114:{l:{107:{l:{59:{c:[9140]}}}}}}},99:{l:{97:{l:{114:{l:{111:{l:{110:{l:{59:{c:[357]}}}}}}}}},101:{l:{100:{l:{105:{l:{108:{l:{59:{c:[355]}}}}}}}}},121:{l:{59:{c:[1090]}}}}},100:{l:{111:{l:{116:{l:{59:{c:[8411]}}}}}}},101:{l:{108:{l:{114:{l:{101:{l:{99:{l:{59:{c:[8981]}}}}}}}}}}},102:{l:{114:{l:{59:{c:[120113]}}}}},104:{l:{101:{l:{114:{l:{101:{l:{52:{l:{59:{c:[8756]}}},102:{l:{111:{l:{114:{l:{101:{l:{59:{c:[8756]}}}}}}}}}}}}},116:{l:{97:{l:{59:{c:[952]},115:{l:{121:{l:{109:{l:{59:{c:[977]}}}}}}},118:{l:{59:{c:[977]}}}}}}}}},105:{l:{99:{l:{107:{l:{97:{l:{112:{l:{112:{l:{114:{l:{111:{l:{120:{l:{59:{c:[8776]}}}}}}}}}}}}},115:{l:{105:{l:{109:{l:{59:{c:[8764]}}}}}}}}}}},110:{l:{115:{l:{112:{l:{59:{c:[8201]}}}}}}}}},107:{l:{97:{l:{112:{l:{59:{c:[8776]}}}}},115:{l:{105:{l:{109:{l:{59:{c:[8764]}}}}}}}}},111:{l:{114:{l:{110:{l:{59:{c:[254]}},c:[254]}}}}}}},105:{l:{108:{l:{100:{l:{101:{l:{59:{c:[732]}}}}}}},109:{l:{101:{l:{115:{l:{59:{c:[215]},98:{l:{59:{c:[8864]},97:{l:{114:{l:{59:{c:[10801]}}}}}}},100:{l:{59:{c:[10800]}}}},c:[215]}}}}},110:{l:{116:{l:{59:{c:[8749]}}}}}}},111:{l:{101:{l:{97:{l:{59:{c:[10536]}}}}},112:{l:{59:{c:[8868]},98:{l:{111:{l:{116:{l:{59:{c:[9014]}}}}}}},99:{l:{105:{l:{114:{l:{59:{c:[10993]}}}}}}},102:{l:{59:{c:[120165]},111:{l:{114:{l:{107:{l:{59:{c:[10970]}}}}}}}}}}},115:{l:{97:{l:{59:{c:[10537]}}}}}}},112:{l:{114:{l:{105:{l:{109:{l:{101:{l:{59:{c:[8244]}}}}}}}}}}},114:{l:{97:{l:{100:{l:{101:{l:{59:{c:[8482]}}}}}}},105:{l:{97:{l:{110:{l:{103:{l:{108:{l:{101:{l:{59:{c:[9653]},100:{l:{111:{l:{119:{l:{110:{l:{59:{c:[9663]}}}}}}}}},108:{l:{101:{l:{102:{l:{116:{l:{59:{c:[9667]},101:{l:{113:{l:{59:{c:[8884]}}}}}}}}}}}}},113:{l:{59:{c:[8796]}}},114:{l:{105:{l:{103:{l:{104:{l:{116:{l:{59:{c:[9657]},101:{l:{113:{l:{59:{c:[8885]}}}}}}}}}}}}}}}}}}}}}}}}},100:{l:{111:{l:{116:{l:{59:{c:[9708]}}}}}}},101:{l:{59:{c:[8796]}}},109:{l:{105:{l:{110:{l:{117:{l:{115:{l:{59:{c:[10810]}}}}}}}}}}},112:{l:{108:{l:{117:{l:{115:{l:{59:{c:[10809]}}}}}}}}},115:{l:{98:{l:{59:{c:[10701]}}}}},116:{l:{105:{l:{109:{l:{101:{l:{59:{c:[10811]}}}}}}}}}}},112:{l:{101:{l:{122:{l:{105:{l:{117:{l:{109:{l:{59:{c:[9186]}}}}}}}}}}}}}}},115:{l:{99:{l:{114:{l:{59:{c:[120009]}}},121:{l:{59:{c:[1094]}}}}},104:{l:{99:{l:{121:{l:{59:{c:[1115]}}}}}}},116:{l:{114:{l:{111:{l:{107:{l:{59:{c:[359]}}}}}}}}}}},119:{l:{105:{l:{120:{l:{116:{l:{59:{c:[8812]}}}}}}},111:{l:{104:{l:{101:{l:{97:{l:{100:{l:{108:{l:{101:{l:{102:{l:{116:{l:{97:{l:{114:{l:{114:{l:{111:{l:{119:{l:{59:{c:[8606]}}}}}}}}}}}}}}}}}}},114:{l:{105:{l:{103:{l:{104:{l:{116:{l:{97:{l:{114:{l:{114:{l:{111:{l:{119:{l:{59:{c:[8608]}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}},117:{l:{65:{l:{114:{l:{114:{l:{59:{c:[8657]}}}}}}},72:{l:{97:{l:{114:{l:{59:{c:[10595]}}}}}}},97:{l:{99:{l:{117:{l:{116:{l:{101:{l:{59:{c:[250]}},c:[250]}}}}}}},114:{l:{114:{l:{59:{c:[8593]}}}}}}},98:{l:{114:{l:{99:{l:{121:{l:{59:{c:[1118]}}}}},101:{l:{118:{l:{101:{l:{59:{c:[365]}}}}}}}}}}},99:{l:{105:{l:{114:{l:{99:{l:{59:{c:[251]}},c:[251]}}}}},121:{l:{59:{c:[1091]}}}}},100:{l:{97:{l:{114:{l:{114:{l:{59:{c:[8645]}}}}}}},98:{l:{108:{l:{97:{l:{99:{l:{59:{c:[369]}}}}}}}}},104:{l:{97:{l:{114:{l:{59:{c:[10606]}}}}}}}}},102:{l:{105:{l:{115:{l:{104:{l:{116:{l:{59:{c:[10622]}}}}}}}}},114:{l:{59:{c:[120114]}}}}},103:{l:{114:{l:{97:{l:{118:{l:{101:{l:{59:{c:[249]}},c:[249]}}}}}}}}},104:{l:{97:{l:{114:{l:{108:{l:{59:{c:[8639]}}},114:{l:{59:{c:[8638]}}}}}}},98:{l:{108:{l:{107:{l:{59:{c:[9600]}}}}}}}}},108:{l:{99:{l:{111:{l:{114:{l:{110:{l:{59:{c:[8988]},101:{l:{114:{l:{59:{c:[8988]}}}}}}}}}}},114:{l:{111:{l:{112:{l:{59:{c:[8975]}}}}}}}}},116:{l:{114:{l:{105:{l:{59:{c:[9720]}}}}}}}}},109:{l:{97:{l:{99:{l:{114:{l:{59:{c:[363]}}}}}}},108:{l:{59:{c:[168]}},c:[168]}}},111:{l:{103:{l:{111:{l:{110:{l:{59:{c:[371]}}}}}}},112:{l:{102:{l:{59:{c:[120166]}}}}}}},112:{l:{97:{l:{114:{l:{114:{l:{111:{l:{119:{l:{59:{c:[8593]}}}}}}}}}}},100:{l:{111:{l:{119:{l:{110:{l:{97:{l:{114:{l:{114:{l:{111:{l:{119:{l:{59:{c:[8597]}}}}}}}}}}}}}}}}}}},104:{l:{97:{l:{114:{l:{112:{l:{111:{l:{111:{l:{110:{l:{108:{l:{101:{l:{102:{l:{116:{l:{59:{c:[8639]}}}}}}}}},114:{l:{105:{l:{103:{l:{104:{l:{116:{l:{59:{c:[8638]}}}}}}}}}}}}}}}}}}}}}}}}},108:{l:{117:{l:{115:{l:{59:{c:[8846]}}}}}}},115:{l:{105:{l:{59:{c:[965]},104:{l:{59:{c:[978]}}},108:{l:{111:{l:{110:{l:{59:{c:[965]}}}}}}}}}}},117:{l:{112:{l:{97:{l:{114:{l:{114:{l:{111:{l:{119:{l:{115:{l:{59:{c:[8648]}}}}}}}}}}}}}}}}}}},114:{l:{99:{l:{111:{l:{114:{l:{110:{l:{59:{c:[8989]},101:{l:{114:{l:{59:{c:[8989]}}}}}}}}}}},114:{l:{111:{l:{112:{l:{59:{c:[8974]}}}}}}}}},105:{l:{110:{l:{103:{l:{59:{c:[367]}}}}}}},116:{l:{114:{l:{105:{l:{59:{c:[9721]}}}}}}}}},115:{l:{99:{l:{114:{l:{59:{c:[120010]}}}}}}},116:{l:{100:{l:{111:{l:{116:{l:{59:{c:[8944]}}}}}}},105:{l:{108:{l:{100:{l:{101:{l:{59:{c:[361]}}}}}}}}},114:{l:{105:{l:{59:{c:[9653]},102:{l:{59:{c:[9652]}}}}}}}}},117:{l:{97:{l:{114:{l:{114:{l:{59:{c:[8648]}}}}}}},109:{l:{108:{l:{59:{c:[252]}},c:[252]}}}}},119:{l:{97:{l:{110:{l:{103:{l:{108:{l:{101:{l:{59:{c:[10663]}}}}}}}}}}}}}}},118:{l:{65:{l:{114:{l:{114:{l:{59:{c:[8661]}}}}}}},66:{l:{97:{l:{114:{l:{59:{c:[10984]},118:{l:{59:{c:[10985]}}}}}}}}},68:{l:{97:{l:{115:{l:{104:{l:{59:{c:[8872]}}}}}}}}},97:{l:{110:{l:{103:{l:{114:{l:{116:{l:{59:{c:[10652]}}}}}}}}},114:{l:{101:{l:{112:{l:{115:{l:{105:{l:{108:{l:{111:{l:{110:{l:{59:{c:[1013]}}}}}}}}}}}}}}},107:{l:{97:{l:{112:{l:{112:{l:{97:{l:{59:{c:[1008]}}}}}}}}}}},110:{l:{111:{l:{116:{l:{104:{l:{105:{l:{110:{l:{103:{l:{59:{c:[8709]}}}}}}}}}}}}}}},112:{l:{104:{l:{105:{l:{59:{c:[981]}}}}},105:{l:{59:{c:[982]}}},114:{l:{111:{l:{112:{l:{116:{l:{111:{l:{59:{c:[8733]}}}}}}}}}}}}},114:{l:{59:{c:[8597]},104:{l:{111:{l:{59:{c:[1009]}}}}}}},115:{l:{105:{l:{103:{l:{109:{l:{97:{l:{59:{c:[962]}}}}}}}}},117:{l:{98:{l:{115:{l:{101:{l:{116:{l:{110:{l:{101:{l:{113:{l:{59:{c:[8842,65024]},113:{l:{59:{c:[10955,65024]}}}}}}}}}}}}}}}}},112:{l:{115:{l:{101:{l:{116:{l:{110:{l:{101:{l:{113:{l:{59:{c:[8843,65024]},113:{l:{59:{c:[10956,65024]}}}}}}}}}}}}}}}}}}}}},116:{l:{104:{l:{101:{l:{116:{l:{97:{l:{59:{c:[977]}}}}}}}}},114:{l:{105:{l:{97:{l:{110:{l:{103:{l:{108:{l:{101:{l:{108:{l:{101:{l:{102:{l:{116:{l:{59:{c:[8882]}}}}}}}}},114:{l:{105:{l:{103:{l:{104:{l:{116:{l:{59:{c:[8883]}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}},99:{l:{121:{l:{59:{c:[1074]}}}}},100:{l:{97:{l:{115:{l:{104:{l:{59:{c:[8866]}}}}}}}}},101:{l:{101:{l:{59:{c:[8744]},98:{l:{97:{l:{114:{l:{59:{c:[8891]}}}}}}},101:{l:{113:{l:{59:{c:[8794]}}}}}}},108:{l:{108:{l:{105:{l:{112:{l:{59:{c:[8942]}}}}}}}}},114:{l:{98:{l:{97:{l:{114:{l:{59:{c:[124]}}}}}}},116:{l:{59:{c:[124]}}}}}}},102:{l:{114:{l:{59:{c:[120115]}}}}},108:{l:{116:{l:{114:{l:{105:{l:{59:{c:[8882]}}}}}}}}},110:{l:{115:{l:{117:{l:{98:{l:{59:{c:[8834,8402]}}},112:{l:{59:{c:[8835,8402]}}}}}}}}},111:{l:{112:{l:{102:{l:{59:{c:[120167]}}}}}}},112:{l:{114:{l:{111:{l:{112:{l:{59:{c:[8733]}}}}}}}}},114:{l:{116:{l:{114:{l:{105:{l:{59:{c:[8883]}}}}}}}}},115:{l:{99:{l:{114:{l:{59:{c:[120011]}}}}},117:{l:{98:{l:{110:{l:{69:{l:{59:{c:[10955,65024]}}},101:{l:{59:{c:[8842,65024]}}}}}}},112:{l:{110:{l:{69:{l:{59:{c:[10956,65024]}}},101:{l:{59:{c:[8843,65024]}}}}}}}}}}},122:{l:{105:{l:{103:{l:{122:{l:{97:{l:{103:{l:{59:{c:[10650]}}}}}}}}}}}}}}},119:{l:{99:{l:{105:{l:{114:{l:{99:{l:{59:{c:[373]}}}}}}}}},101:{l:{100:{l:{98:{l:{97:{l:{114:{l:{59:{c:[10847]}}}}}}},103:{l:{101:{l:{59:{c:[8743]},113:{l:{59:{c:[8793]}}}}}}}}},105:{l:{101:{l:{114:{l:{112:{l:{59:{c:[8472]}}}}}}}}}}},102:{l:{114:{l:{59:{c:[120116]}}}}},111:{l:{112:{l:{102:{l:{59:{c:[120168]}}}}}}},112:{l:{59:{c:[8472]}}},114:{l:{59:{c:[8768]},101:{l:{97:{l:{116:{l:{104:{l:{59:{c:[8768]}}}}}}}}}}},115:{l:{99:{l:{114:{l:{59:{c:[120012]}}}}}}}}},120:{l:{99:{l:{97:{l:{112:{l:{59:{c:[8898]}}}}},105:{l:{114:{l:{99:{l:{59:{c:[9711]}}}}}}},117:{l:{112:{l:{59:{c:[8899]}}}}}}},100:{l:{116:{l:{114:{l:{105:{l:{59:{c:[9661]}}}}}}}}},102:{l:{114:{l:{59:{c:[120117]}}}}},104:{l:{65:{l:{114:{l:{114:{l:{59:{c:[10234]}}}}}}},97:{l:{114:{l:{114:{l:{59:{c:[10231]}}}}}}}}},105:{l:{59:{c:[958]}}},108:{l:{65:{l:{114:{l:{114:{l:{59:{c:[10232]}}}}}}},97:{l:{114:{l:{114:{l:{59:{c:[10229]}}}}}}}}},109:{l:{97:{l:{112:{l:{59:{c:[10236]}}}}}}},110:{l:{105:{l:{115:{l:{59:{c:[8955]}}}}}}},111:{l:{100:{l:{111:{l:{116:{l:{59:{c:[10752]}}}}}}},112:{l:{102:{l:{59:{c:[120169]}}},108:{l:{117:{l:{115:{l:{59:{c:[10753]}}}}}}}}},116:{l:{105:{l:{109:{l:{101:{l:{59:{c:[10754]}}}}}}}}}}},114:{l:{65:{l:{114:{l:{114:{l:{59:{c:[10233]}}}}}}},97:{l:{114:{l:{114:{l:{59:{c:[10230]}}}}}}}}},115:{l:{99:{l:{114:{l:{59:{c:[120013]}}}}},113:{l:{99:{l:{117:{l:{112:{l:{59:{c:[10758]}}}}}}}}}}},117:{l:{112:{l:{108:{l:{117:{l:{115:{l:{59:{c:[10756]}}}}}}}}},116:{l:{114:{l:{105:{l:{59:{c:[9651]}}}}}}}}},118:{l:{101:{l:{101:{l:{59:{c:[8897]}}}}}}},119:{l:{101:{l:{100:{l:{103:{l:{101:{l:{59:{c:[8896]}}}}}}}}}}}}},121:{l:{97:{l:{99:{l:{117:{l:{116:{l:{101:{l:{59:{c:[253]}},c:[253]}}}}},121:{l:{59:{c:[1103]}}}}}}},99:{l:{105:{l:{114:{l:{99:{l:{59:{c:[375]}}}}}}},121:{l:{59:{c:[1099]}}}}},101:{l:{110:{l:{59:{c:[165]}},c:[165]}}},102:{l:{114:{l:{59:{c:[120118]}}}}},105:{l:{99:{l:{121:{l:{59:{c:[1111]}}}}}}},111:{l:{112:{l:{102:{l:{59:{c:[120170]}}}}}}},115:{l:{99:{l:{114:{l:{59:{c:[120014]}}}}}}},117:{l:{99:{l:{121:{l:{59:{c:[1102]}}}}},109:{l:{108:{l:{59:{c:[255]}},c:[255]}}}}}}},122:{l:{97:{l:{99:{l:{117:{l:{116:{l:{101:{l:{59:{c:[378]}}}}}}}}}}},99:{l:{97:{l:{114:{l:{111:{l:{110:{l:{59:{c:[382]}}}}}}}}},121:{l:{59:{c:[1079]}}}}},100:{l:{111:{l:{116:{l:{59:{c:[380]}}}}}}},101:{l:{101:{l:{116:{l:{114:{l:{102:{l:{59:{c:[8488]}}}}}}}}},116:{l:{97:{l:{59:{c:[950]}}}}}}},102:{l:{114:{l:{59:{c:[120119]}}}}},104:{l:{99:{l:{121:{l:{59:{c:[1078]}}}}}}},105:{l:{103:{l:{114:{l:{97:{l:{114:{l:{114:{l:{59:{c:[8669]}}}}}}}}}}}}},111:{l:{112:{l:{102:{l:{59:{c:[120171]}}}}}}},115:{l:{99:{l:{114:{l:{59:{c:[120015]}}}}}}},119:{l:{106:{l:{59:{c:[8205]}}},110:{l:{106:{l:{59:{c:[8204]}}}}}}}}}};

},{}],20:[function(require,module,exports){
'use strict';

var UNICODE = require('../common/unicode');

//Aliases
var $ = UNICODE.CODE_POINTS;

//Utils

//OPTIMIZATION: these utility functions should not be moved out of this module. V8 Crankshaft will not inline
//this functions if they will be situated in another module due to context switch.
//Always perform inlining check before modifying this functions ('node --trace-inlining').
function isSurrogatePair(cp1, cp2) {
    return cp1 >= 0xD800 && cp1 <= 0xDBFF && cp2 >= 0xDC00 && cp2 <= 0xDFFF;
}

function getSurrogatePairCodePoint(cp1, cp2) {
    return (cp1 - 0xD800) * 0x400 + 0x2400 + cp2;
}

//Preprocessor
//NOTE: HTML input preprocessing
//(see: http://www.whatwg.org/specs/web-apps/current-work/multipage/parsing.html#preprocessing-the-input-stream)
var Preprocessor = module.exports = function () {
    this.html = null;

    this.pos = -1;
    this.lastGapPos = -1;

    this.gapStack = [];

    this.skipNextNewLine = false;

    this.lastChunkWritten = false;
    this.endOfChunkHit = false;
};


Preprocessor.prototype._addGap = function () {
    this.gapStack.push(this.lastGapPos);
    this.lastGapPos = this.pos;
};

Preprocessor.prototype._processHighRangeCodePoint = function (cp) {
    //NOTE: try to peek a surrogate pair
    if (this.pos !== this.lastCharPos) {
        var nextCp = this.html.charCodeAt(this.pos + 1);

        if (isSurrogatePair(cp, nextCp)) {
            //NOTE: we have a surrogate pair. Peek pair character and recalculate code point.
            this.pos++;
            cp = getSurrogatePairCodePoint(cp, nextCp);

            //NOTE: add gap that should be avoided during retreat
            this._addGap();
        }
    }

    // NOTE: we've hit the end of chunk, stop processing at this point
    else if (!this.lastChunkWritten) {
        this.endOfChunkHit = true;
        return $.EOF;
    }

    return cp;
};

Preprocessor.prototype.write = function (chunk, isLastChunk) {
    if (this.html)
        this.html += chunk;

    else
        this.html = chunk;

    this.lastCharPos = this.html.length - 1;
    this.endOfChunkHit = false;
    this.lastChunkWritten = isLastChunk;
};

Preprocessor.prototype.insertHtmlAtCurrentPos = function (chunk) {
    this.html = this.html.substring(0, this.pos + 1) +
                chunk +
                this.html.substring(this.pos + 1, this.html.length);

    this.lastCharPos = this.html.length - 1;
    this.endOfChunkHit = false;
};


Preprocessor.prototype.advance = function () {
    this.pos++;

    if (this.pos > this.lastCharPos) {
        if (!this.lastChunkWritten)
            this.endOfChunkHit = true;

        return $.EOF;
    }

    var cp = this.html.charCodeAt(this.pos);

    //NOTE: any U+000A LINE FEED (LF) characters that immediately follow a U+000D CARRIAGE RETURN (CR) character
    //must be ignored.
    if (this.skipNextNewLine && cp === $.LINE_FEED) {
        this.skipNextNewLine = false;
        this._addGap();
        return this.advance();
    }

    //NOTE: all U+000D CARRIAGE RETURN (CR) characters must be converted to U+000A LINE FEED (LF) characters
    if (cp === $.CARRIAGE_RETURN) {
        this.skipNextNewLine = true;
        return $.LINE_FEED;
    }

    this.skipNextNewLine = false;

    //OPTIMIZATION: first perform check if the code point in the allowed range that covers most common
    //HTML input (e.g. ASCII codes) to avoid performance-cost operations for high-range code points.
    return cp >= 0xD800 ? this._processHighRangeCodePoint(cp) : cp;
};

Preprocessor.prototype.retreat = function () {
    if (this.pos === this.lastGapPos) {
        this.lastGapPos = this.gapStack.pop();
        this.pos--;
    }

    this.pos--;
};


},{"../common/unicode":5}],21:[function(require,module,exports){
'use strict';

/**
 * @typedef {Object} TreeAdapter
 */

//Node construction

/**
 * Creates a document node.
 *
 * @function createDocument
 * @memberof TreeAdapter
 *
 * @returns {ASTNode<Document>} document
 *
 * @see {@link https://github.com/inikulin/parse5/blob/tree-adapter-docs-rev/lib/tree_adapters/default.js#L19|default implementation.}
 */
exports.createDocument = function () {
    return {
        nodeName: '#document',
        quirksMode: false,
        childNodes: []
    };
};

/**
 * Creates a document fragment node.
 *
 * @function createDocumentFragment
 * @memberof TreeAdapter
 *
 * @returns {ASTNode<DocumentFragment>} fragment
 *
 * @see {@link https://github.com/inikulin/parse5/blob/tree-adapter-docs-rev/lib/tree_adapters/default.js#L37|default implementation.}
 */
exports.createDocumentFragment = function () {
    return {
        nodeName: '#document-fragment',
        quirksMode: false,
        childNodes: []
    };
};


/**
 * Creates an element node.
 *
 * @function createElement
 * @memberof TreeAdapter
 *
 * @param {String} tagName - Tag name of the element.
 * @param {String} namespaceURI - Namespace of the element.
 * @param {Array}  attrs - Attribute name-value pair array.
 *                         Foreign attributes may contain `namespace` and `prefix` fields as well.
 *
 * @returns {ASTNode<Element>} element
 *
 * @see {@link https://github.com/inikulin/parse5/blob/tree-adapter-docs-rev/lib/tree_adapters/default.js#L61|default implementation.}
 */
exports.createElement = function (tagName, namespaceURI, attrs) {
    return {
        nodeName: tagName,
        tagName: tagName,
        attrs: attrs,
        namespaceURI: namespaceURI,
        childNodes: [],
        parentNode: null
    };
};


/**
 * Creates a comment node.
 *
 * @function createCommentNode
 * @memberof TreeAdapter
 *
 * @param {String} data - Comment text.
 *
 * @returns {ASTNode<CommentNode>} comment
 *
 * @see {@link https://github.com/inikulin/parse5/blob/tree-adapter-docs-rev/lib/tree_adapters/default.js#L85|default implementation.}
 */
exports.createCommentNode = function (data) {
    return {
        nodeName: '#comment',
        data: data,
        parentNode: null
    };
};

var createTextNode = function (value) {
    return {
        nodeName: '#text',
        value: value,
        parentNode: null
    };
};


//Tree mutation
/**
 * Appends a child node to the given parent node.
 *
 * @function appendChild
 * @memberof TreeAdapter
 *
 * @param {ASTNode} parentNode - Parent node.
 * @param {ASTNode} newNode -  Child node.
 *
 * @see {@link https://github.com/inikulin/parse5/blob/tree-adapter-docs-rev/lib/tree_adapters/default.js#L114|default implementation.}
 */
var appendChild = exports.appendChild = function (parentNode, newNode) {
    parentNode.childNodes.push(newNode);
    newNode.parentNode = parentNode;
};

/**
 * Inserts a child node to the given parent node before the given reference node.
 *
 * @function insertBefore
 * @memberof TreeAdapter
 *
 * @param {ASTNode} parentNode - Parent node.
 * @param {ASTNode} newNode -  Child node.
 * @param {ASTNode} referenceNode -  Reference node.
 *
 * @see {@link https://github.com/inikulin/parse5/blob/tree-adapter-docs-rev/lib/tree_adapters/default.js#L131|default implementation.}
 */
var insertBefore = exports.insertBefore = function (parentNode, newNode, referenceNode) {
    var insertionIdx = parentNode.childNodes.indexOf(referenceNode);

    parentNode.childNodes.splice(insertionIdx, 0, newNode);
    newNode.parentNode = parentNode;
};

/**
 * Sets the `<template>` element content element.
 *
 * @function setTemplateContent
 * @memberof TreeAdapter
 *
 * @param {ASTNode<TemplateElement>} templateElement - `<template>` element.
 * @param {ASTNode<DocumentFragment>} contentTemplate -  Content element.
 *
 * @see {@link https://github.com/inikulin/parse5/blob/tree-adapter-docs-rev/lib/tree_adapters/default.js#L149|default implementation.}
 */
exports.setTemplateContent = function (templateElement, contentElement) {
    templateElement.content = contentElement;
};


/**
 * Returns the `<template>` element content element.
 *
 * @function getTemplateContent
 * @memberof TreeAdapter
 *
 * @param {ASTNode<TemplateElement>} templateElement - `<template>` element.

 * @returns {ASTNode<DocumentFragment>}
 *
 * @see {@link https://github.com/inikulin/parse5/blob/tree-adapter-docs-rev/lib/tree_adapters/default.js#L166|default implementation.}
 */
exports.getTemplateContent = function (templateElement) {
    return templateElement.content;
};

/**
 * Sets the document type. If the `document` already contains a document type node, the `name`, `publicId` and `systemId`
 * properties of this node will be updated with the provided values. Otherwise, creates a new document type node
 * with the given properties and inserts it into the `document`.
 *
 * @function setDocumentType
 * @memberof TreeAdapter
 *
 * @param {ASTNode<Document>} document - Document node.
 * @param {String} name -  Document type name.
 * @param {String} publicId - Document type public identifier.
 * @param {String} systemId - Document type system identifier.
 *
 * @see {@link https://github.com/inikulin/parse5/blob/tree-adapter-docs-rev/lib/tree_adapters/default.js#L185|default implementation.}
 */
exports.setDocumentType = function (document, name, publicId, systemId) {
    var doctypeNode = null;

    for (var i = 0; i < document.childNodes.length; i++) {
        if (document.childNodes[i].nodeName === '#documentType') {
            doctypeNode = document.childNodes[i];
            break;
        }
    }

    if (doctypeNode) {
        doctypeNode.name = name;
        doctypeNode.publicId = publicId;
        doctypeNode.systemId = systemId;
    }

    else {
        appendChild(document, {
            nodeName: '#documentType',
            name: name,
            publicId: publicId,
            systemId: systemId
        });
    }
};

/**
 * Sets the document's quirks mode flag.
 *
 * @function setQuirksMode
 * @memberof TreeAdapter
 *
 * @param {ASTNode<Document>} document - Document node.
 *
 * @see {@link https://github.com/inikulin/parse5/blob/tree-adapter-docs-rev/lib/tree_adapters/default.js#L221|default implementation.}
 */
exports.setQuirksMode = function (document) {
    document.quirksMode = true;
};

/**
 * Determines if the document's quirks mode flag is set.
 *
 * @function isQuirksMode
 * @memberof TreeAdapter
 *
 * @param {ASTNode<Document>} document - Document node.

 * @returns {Boolean}
 *
 * @see {@link https://github.com/inikulin/parse5/blob/tree-adapter-docs-rev/lib/tree_adapters/default.js#L237|default implementation.}
 */
exports.isQuirksMode = function (document) {
    return document.quirksMode;
};

/**
 * Removes a node from its parent.
 *
 * @function detachNode
 * @memberof TreeAdapter
 *
 * @param {ASTNode} node - Node.

 * @see {@link https://github.com/inikulin/parse5/blob/tree-adapter-docs-rev/lib/tree_adapters/default.js#L251|default implementation.}
 */
exports.detachNode = function (node) {
    if (node.parentNode) {
        var idx = node.parentNode.childNodes.indexOf(node);

        node.parentNode.childNodes.splice(idx, 1);
        node.parentNode = null;
    }
};

/**
 * Inserts text into a node. If the last child of the node is a text node, the provided text will be appended to the
 * text node content. Otherwise, inserts a new text node with the given text.
 *
 *
 * @function insertText
 * @memberof TreeAdapter
 *
 * @param {ASTNode} parentNode - Node to insert text into.
 * @param {String} text - Text to insert.

 * @see {@link https://github.com/inikulin/parse5/blob/tree-adapter-docs-rev/lib/tree_adapters/default.js#L273|default implementation.}
 */
exports.insertText = function (parentNode, text) {
    if (parentNode.childNodes.length) {
        var prevNode = parentNode.childNodes[parentNode.childNodes.length - 1];

        if (prevNode.nodeName === '#text') {
            prevNode.value += text;
            return;
        }
    }

    appendChild(parentNode, createTextNode(text));
};

/**
 * Inserts text into a sibling node that goes before the reference node. If this sibling node is the text node,
 * the provided text will be appended to the text node content. Otherwise, inserts a new sibling text node with
 * the given text before the reference node.
 *
 *
 * @function insertTextBefore
 * @memberof TreeAdapter
 *
 * @param {ASTNode} parentNode - Node to insert text into.
 * @param {String} text - Text to insert.
 * @param {ASTNode} referenceNode - Node to insert text before.
 *
 * @see {@link https://github.com/inikulin/parse5/blob/tree-adapter-docs-rev/lib/tree_adapters/default.js#L301|default implementation.}
 */
exports.insertTextBefore = function (parentNode, text, referenceNode) {
    var prevNode = parentNode.childNodes[parentNode.childNodes.indexOf(referenceNode) - 1];

    if (prevNode && prevNode.nodeName === '#text')
        prevNode.value += text;
    else
        insertBefore(parentNode, createTextNode(text), referenceNode);
};

/**
 * Copies attributes to the given node. Only attributes that are not yet present in the node are copied.
 *
 * @function adoptAttributes
 * @memberof TreeAdapter
 *
 * @param {ASTNode} recipientNode - Node to copy attributes into.
 * @param {Array} attrs - Attributes to copy.

 * @see {@link https://github.com/inikulin/parse5/blob/tree-adapter-docs-rev/lib/tree_adapters/default.js#L321|default implementation.}
 */
exports.adoptAttributes = function (recipientNode, attrs) {
    var recipientAttrsMap = [];

    for (var i = 0; i < recipientNode.attrs.length; i++)
        recipientAttrsMap.push(recipientNode.attrs[i].name);

    for (var j = 0; j < attrs.length; j++) {
        if (recipientAttrsMap.indexOf(attrs[j].name) === -1)
            recipientNode.attrs.push(attrs[j]);
    }
};


//Tree traversing

/**
 * Returns the first child of the given node.
 *
 * @function getFirstChild
 * @memberof TreeAdapter
 *
 * @param {ASTNode} node - Node.
 *
 * @returns {ASTNode} firstChild
 *
 * @see {@link https://github.com/inikulin/parse5/blob/tree-adapter-docs-rev/lib/tree_adapters/default.js#L348|default implementation.}
 */
exports.getFirstChild = function (node) {
    return node.childNodes[0];
};

/**
 * Returns the given node's children in an array.
 *
 * @function getChildNodes
 * @memberof TreeAdapter
 *
 * @param {ASTNode} node - Node.
 *
 * @returns {Array} children
 *
 * @see {@link https://github.com/inikulin/parse5/blob/tree-adapter-docs-rev/lib/tree_adapters/default.js#L364|default implementation.}
 */
exports.getChildNodes = function (node) {
    return node.childNodes;
};

/**
 * Returns the given node's parent.
 *
 * @function getParentNode
 * @memberof TreeAdapter
 *
 * @param {ASTNode} node - Node.
 *
 * @returns {ASTNode} parent
 *
 * @see {@link https://github.com/inikulin/parse5/blob/tree-adapter-docs-rev/lib/tree_adapters/default.js#L380|default implementation.}
 */
exports.getParentNode = function (node) {
    return node.parentNode;
};

/**
 * Returns the given node's attributes in an array, in the form of name-value pairs.
 * Foreign attributes may contain `namespace` and `prefix` fields as well.
 *
 * @function getAttrList
 * @memberof TreeAdapter
 *
 * @param {ASTNode} node - Node.
 *
 * @returns {Array} attributes
 *
 * @see {@link https://github.com/inikulin/parse5/blob/tree-adapter-docs-rev/lib/tree_adapters/default.js#L397|default implementation.}
 */
exports.getAttrList = function (node) {
    return node.attrs;
};

//Node data

/**
 * Returns the given element's tag name.
 *
 * @function getTagName
 * @memberof TreeAdapter
 *
 * @param {ASTNode<Element>} element - Element.
 *
 * @returns {String} tagName
 *
 * @see {@link https://github.com/inikulin/parse5/blob/tree-adapter-docs-rev/lib/tree_adapters/default.js#L415|default implementation.}
 */
exports.getTagName = function (element) {
    return element.tagName;
};

/**
 * Returns the given element's namespace.
 *
 * @function getNamespaceURI
 * @memberof TreeAdapter
 *
 * @param {ASTNode<Element>} element - Element.
 *
 * @returns {String} namespaceURI
 *
 * @see {@link https://github.com/inikulin/parse5/blob/tree-adapter-docs-rev/lib/tree_adapters/default.js#L431|default implementation.}
 */
exports.getNamespaceURI = function (element) {
    return element.namespaceURI;
};

/**
 * Returns the given text node's content.
 *
 * @function getTextNodeContent
 * @memberof TreeAdapter
 *
 * @param {ASTNode<Text>} textNode - Text node.
 *
 * @returns {String} text
 *
 * @see {@link https://github.com/inikulin/parse5/blob/tree-adapter-docs-rev/lib/tree_adapters/default.js#L447|default implementation.}
 */
exports.getTextNodeContent = function (textNode) {
    return textNode.value;
};

/**
 * Returns the given comment node's content.
 *
 * @function getCommentNodeContent
 * @memberof TreeAdapter
 *
 * @param {ASTNode<Comment>} commentNode - Comment node.
 *
 * @returns {String} commentText
 *
 * @see {@link https://github.com/inikulin/parse5/blob/tree-adapter-docs-rev/lib/tree_adapters/default.js#L463|default implementation.}
 */
exports.getCommentNodeContent = function (commentNode) {
    return commentNode.data;
};

/**
 * Returns the given document type node's name.
 *
 * @function getDocumentTypeNodeName
 * @memberof TreeAdapter
 *
 * @param {ASTNode<DocumentType>} doctypeNode - Document type node.
 *
 * @returns {String} name
 *
 * @see {@link https://github.com/inikulin/parse5/blob/tree-adapter-docs-rev/lib/tree_adapters/default.js#L479|default implementation.}
 */
exports.getDocumentTypeNodeName = function (doctypeNode) {
    return doctypeNode.name;
};

/**
 * Returns the given document type node's public identifier.
 *
 * @function getDocumentTypeNodePublicId
 * @memberof TreeAdapter
 *
 * @param {ASTNode<DocumentType>} doctypeNode - Document type node.
 *
 * @returns {String} publicId
 *
 * @see {@link https://github.com/inikulin/parse5/blob/tree-adapter-docs-rev/lib/tree_adapters/default.js#L495|default implementation.}
 */
exports.getDocumentTypeNodePublicId = function (doctypeNode) {
    return doctypeNode.publicId;
};

/**
 * Returns the given document type node's system identifier.
 *
 * @function getDocumentTypeNodeSystemId
 * @memberof TreeAdapter
 *
 * @param {ASTNode<DocumentType>} doctypeNode - Document type node.
 *
 * @returns {String} systemId
 *
 * @see {@link https://github.com/inikulin/parse5/blob/tree-adapter-docs-rev/lib/tree_adapters/default.js#L511|default implementation.}
 */
exports.getDocumentTypeNodeSystemId = function (doctypeNode) {
    return doctypeNode.systemId;
};

//Node types
/**
 * Determines if the given node is a text node.
 *
 * @function isTextNode
 * @memberof TreeAdapter
 *
 * @param {ASTNode} node - Node.
 *
 * @returns {Boolean}
 *
 * @see {@link https://github.com/inikulin/parse5/blob/tree-adapter-docs-rev/lib/tree_adapters/default.js#L526|default implementation.}
 */
exports.isTextNode = function (node) {
    return node.nodeName === '#text';
};

/**
 * Determines if the given node is a comment node.
 *
 * @function isCommentNode
 * @memberof TreeAdapter
 *
 * @param {ASTNode} node - Node.
 *
 * @returns {Boolean}
 *
 * @see {@link https://github.com/inikulin/parse5/blob/tree-adapter-docs-rev/lib/tree_adapters/default.js#L544|default implementation.}
 */
exports.isCommentNode = function (node) {
    return node.nodeName === '#comment';
};

/**
 * Determines if the given node is a document type node.
 *
 * @function isDocumentTypeNode
 * @memberof TreeAdapter
 *
 * @param {ASTNode} node - Node.
 *
 * @returns {Boolean}
 *
 * @see {@link https://github.com/inikulin/parse5/blob/tree-adapter-docs-rev/lib/tree_adapters/default.js#L560|default implementation.}
 */
exports.isDocumentTypeNode = function (node) {
    return node.nodeName === '#documentType';
};

/**
 * Determines if the given node is an element.
 *
 * @function isElementNode
 * @memberof TreeAdapter
 *
 * @param {ASTNode} node - Node.
 *
 * @returns {Boolean}
 *
 * @see {@link https://github.com/inikulin/parse5/blob/tree-adapter-docs-rev/lib/tree_adapters/default.js#L576|default implementation.}
 */
exports.isElementNode = function (node) {
    return !!node.tagName;
};

},{}],22:[function(require,module,exports){
'use strict';

var doctype = require('../common/doctype');

//Conversion tables for DOM Level1 structure emulation
var nodeTypes = {
    element: 1,
    text: 3,
    cdata: 4,
    comment: 8
};

var nodePropertyShorthands = {
    tagName: 'name',
    childNodes: 'children',
    parentNode: 'parent',
    previousSibling: 'prev',
    nextSibling: 'next',
    nodeValue: 'data'
};

//Node
var Node = function (props) {
    for (var key in props) {
        if (props.hasOwnProperty(key))
            this[key] = props[key];
    }
};

Node.prototype = {
    get firstChild() {
        var children = this.children;

        return children && children[0] || null;
    },

    get lastChild() {
        var children = this.children;

        return children && children[children.length - 1] || null;
    },

    get nodeType() {
        return nodeTypes[this.type] || nodeTypes.element;
    }
};

Object.keys(nodePropertyShorthands).forEach(function (key) {
    var shorthand = nodePropertyShorthands[key];

    Object.defineProperty(Node.prototype, key, {
        get: function () {
            return this[shorthand] || null;
        },
        set: function (val) {
            this[shorthand] = val;
            return val;
        }
    });
});


//Node construction
exports.createDocument =
    exports.createDocumentFragment = function () {
        return new Node({
            type: 'root',
            name: 'root',
            parent: null,
            prev: null,
            next: null,
            children: []
        });
    };

exports.createElement = function (tagName, namespaceURI, attrs) {
    var attribs = {},
        attribsNamespace = {},
        attribsPrefix = {};

    for (var i = 0; i < attrs.length; i++) {
        var attrName = attrs[i].name;

        attribs[attrName] = attrs[i].value;
        attribsNamespace[attrName] = attrs[i].namespace;
        attribsPrefix[attrName] = attrs[i].prefix;
    }

    return new Node({
        type: tagName === 'script' || tagName === 'style' ? tagName : 'tag',
        name: tagName,
        namespace: namespaceURI,
        attribs: attribs,
        'x-attribsNamespace': attribsNamespace,
        'x-attribsPrefix': attribsPrefix,
        children: [],
        parent: null,
        prev: null,
        next: null
    });
};

exports.createCommentNode = function (data) {
    return new Node({
        type: 'comment',
        data: data,
        parent: null,
        prev: null,
        next: null
    });
};

var createTextNode = function (value) {
    return new Node({
        type: 'text',
        data: value,
        parent: null,
        prev: null,
        next: null
    });
};


//Tree mutation
var appendChild = exports.appendChild = function (parentNode, newNode) {
    var prev = parentNode.children[parentNode.children.length - 1];

    if (prev) {
        prev.next = newNode;
        newNode.prev = prev;
    }

    parentNode.children.push(newNode);
    newNode.parent = parentNode;
};

var insertBefore = exports.insertBefore = function (parentNode, newNode, referenceNode) {
    var insertionIdx = parentNode.children.indexOf(referenceNode),
        prev = referenceNode.prev;

    if (prev) {
        prev.next = newNode;
        newNode.prev = prev;
    }

    referenceNode.prev = newNode;
    newNode.next = referenceNode;

    parentNode.children.splice(insertionIdx, 0, newNode);
    newNode.parent = parentNode;
};

exports.setTemplateContent = function (templateElement, contentElement) {
    appendChild(templateElement, contentElement);
};

exports.getTemplateContent = function (templateElement) {
    return templateElement.children[0];
};

exports.setDocumentType = function (document, name, publicId, systemId) {
    var data = doctype.serializeContent(name, publicId, systemId),
        doctypeNode = null;

    for (var i = 0; i < document.children.length; i++) {
        if (document.children[i].type === 'directive' && document.children[i].name === '!doctype') {
            doctypeNode = document.children[i];
            break;
        }
    }

    if (doctypeNode) {
        doctypeNode.data = data;
        doctypeNode['x-name'] = name;
        doctypeNode['x-publicId'] = publicId;
        doctypeNode['x-systemId'] = systemId;
    }

    else {
        appendChild(document, new Node({
            type: 'directive',
            name: '!doctype',
            data: data,
            'x-name': name,
            'x-publicId': publicId,
            'x-systemId': systemId
        }));
    }

};

exports.setQuirksMode = function (document) {
    document.quirksMode = true;
};

exports.isQuirksMode = function (document) {
    return document.quirksMode;
};

exports.detachNode = function (node) {
    if (node.parent) {
        var idx = node.parent.children.indexOf(node),
            prev = node.prev,
            next = node.next;

        node.prev = null;
        node.next = null;

        if (prev)
            prev.next = next;

        if (next)
            next.prev = prev;

        node.parent.children.splice(idx, 1);
        node.parent = null;
    }
};

exports.insertText = function (parentNode, text) {
    var lastChild = parentNode.children[parentNode.children.length - 1];

    if (lastChild && lastChild.type === 'text')
        lastChild.data += text;
    else
        appendChild(parentNode, createTextNode(text));
};

exports.insertTextBefore = function (parentNode, text, referenceNode) {
    var prevNode = parentNode.children[parentNode.children.indexOf(referenceNode) - 1];

    if (prevNode && prevNode.type === 'text')
        prevNode.data += text;
    else
        insertBefore(parentNode, createTextNode(text), referenceNode);
};

exports.adoptAttributes = function (recipientNode, attrs) {
    for (var i = 0; i < attrs.length; i++) {
        var attrName = attrs[i].name;

        if (typeof recipientNode.attribs[attrName] === 'undefined') {
            recipientNode.attribs[attrName] = attrs[i].value;
            recipientNode['x-attribsNamespace'][attrName] = attrs[i].namespace;
            recipientNode['x-attribsPrefix'][attrName] = attrs[i].prefix;
        }
    }
};


//Tree traversing
exports.getFirstChild = function (node) {
    return node.children[0];
};

exports.getChildNodes = function (node) {
    return node.children;
};

exports.getParentNode = function (node) {
    return node.parent;
};

exports.getAttrList = function (node) {
    var attrList = [];

    for (var name in node.attribs) {
        if (node.attribs.hasOwnProperty(name)) {
            attrList.push({
                name: name,
                value: node.attribs[name],
                namespace: node['x-attribsNamespace'][name],
                prefix: node['x-attribsPrefix'][name]
            });
        }
    }

    return attrList;
};


//Node data
exports.getTagName = function (element) {
    return element.name;
};

exports.getNamespaceURI = function (element) {
    return element.namespace;
};

exports.getTextNodeContent = function (textNode) {
    return textNode.data;
};

exports.getCommentNodeContent = function (commentNode) {
    return commentNode.data;
};

exports.getDocumentTypeNodeName = function (doctypeNode) {
    return doctypeNode['x-name'];
};

exports.getDocumentTypeNodePublicId = function (doctypeNode) {
    return doctypeNode['x-publicId'];
};

exports.getDocumentTypeNodeSystemId = function (doctypeNode) {
    return doctypeNode['x-systemId'];
};


//Node types
exports.isTextNode = function (node) {
    return node.type === 'text';
};

exports.isCommentNode = function (node) {
    return node.type === 'comment';
};

exports.isDocumentTypeNode = function (node) {
    return node.type === 'directive' && node.name === '!doctype';
};

exports.isElementNode = function (node) {
    return !!node.attribs;
};

},{"../common/doctype":1}],23:[function(require,module,exports){
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */

var base64 = require('base64-js')
var ieee754 = require('ieee754')

exports.Buffer = Buffer
exports.SlowBuffer = Buffer
exports.INSPECT_MAX_BYTES = 50
Buffer.poolSize = 8192

/**
 * If `TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Use Object implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * Note:
 *
 * - Implementation must support adding new properties to `Uint8Array` instances.
 *   Firefox 4-29 lacked support, fixed in Firefox 30+.
 *   See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
 *
 *  - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
 *
 *  - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
 *    incorrect length in some situations.
 *
 * We detect these buggy browsers and set `TYPED_ARRAY_SUPPORT` to `false` so they will
 * get the Object implementation, which is slower but will work correctly.
 */
var TYPED_ARRAY_SUPPORT = (function () {
  try {
    var buf = new ArrayBuffer(0)
    var arr = new Uint8Array(buf)
    arr.foo = function () { return 42 }
    return 42 === arr.foo() && // typed array instances can be augmented
        typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
        new Uint8Array(1).subarray(1, 1).byteLength === 0 // ie10 has broken `subarray`
  } catch (e) {
    return false
  }
})()

/**
 * Class: Buffer
 * =============
 *
 * The Buffer constructor returns instances of `Uint8Array` that are augmented
 * with function properties for all the node `Buffer` API functions. We use
 * `Uint8Array` so that square bracket notation works as expected -- it returns
 * a single octet.
 *
 * By augmenting the instances, we can avoid modifying the `Uint8Array`
 * prototype.
 */
function Buffer (subject, encoding, noZero) {
  if (!(this instanceof Buffer))
    return new Buffer(subject, encoding, noZero)

  var type = typeof subject

  // Find the length
  var length
  if (type === 'number')
    length = subject > 0 ? subject >>> 0 : 0
  else if (type === 'string') {
    if (encoding === 'base64')
      subject = base64clean(subject)
    length = Buffer.byteLength(subject, encoding)
  } else if (type === 'object' && subject !== null) { // assume object is array-like
    if (subject.type === 'Buffer' && isArray(subject.data))
      subject = subject.data
    length = +subject.length > 0 ? Math.floor(+subject.length) : 0
  } else
    throw new Error('First argument needs to be a number, array or string.')

  var buf
  if (TYPED_ARRAY_SUPPORT) {
    // Preferred: Return an augmented `Uint8Array` instance for best performance
    buf = Buffer._augment(new Uint8Array(length))
  } else {
    // Fallback: Return THIS instance of Buffer (created by `new`)
    buf = this
    buf.length = length
    buf._isBuffer = true
  }

  var i
  if (TYPED_ARRAY_SUPPORT && typeof subject.byteLength === 'number') {
    // Speed optimization -- use set if we're copying from a typed array
    buf._set(subject)
  } else if (isArrayish(subject)) {
    // Treat array-ish objects as a byte array
    if (Buffer.isBuffer(subject)) {
      for (i = 0; i < length; i++)
        buf[i] = subject.readUInt8(i)
    } else {
      for (i = 0; i < length; i++)
        buf[i] = ((subject[i] % 256) + 256) % 256
    }
  } else if (type === 'string') {
    buf.write(subject, 0, encoding)
  } else if (type === 'number' && !TYPED_ARRAY_SUPPORT && !noZero) {
    for (i = 0; i < length; i++) {
      buf[i] = 0
    }
  }

  return buf
}

// STATIC METHODS
// ==============

Buffer.isEncoding = function (encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'binary':
    case 'base64':
    case 'raw':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true
    default:
      return false
  }
}

Buffer.isBuffer = function (b) {
  return !!(b != null && b._isBuffer)
}

Buffer.byteLength = function (str, encoding) {
  var ret
  str = str.toString()
  switch (encoding || 'utf8') {
    case 'hex':
      ret = str.length / 2
      break
    case 'utf8':
    case 'utf-8':
      ret = utf8ToBytes(str).length
      break
    case 'ascii':
    case 'binary':
    case 'raw':
      ret = str.length
      break
    case 'base64':
      ret = base64ToBytes(str).length
      break
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      ret = str.length * 2
      break
    default:
      throw new Error('Unknown encoding')
  }
  return ret
}

Buffer.concat = function (list, totalLength) {
  assert(isArray(list), 'Usage: Buffer.concat(list[, length])')

  if (list.length === 0) {
    return new Buffer(0)
  } else if (list.length === 1) {
    return list[0]
  }

  var i
  if (totalLength === undefined) {
    totalLength = 0
    for (i = 0; i < list.length; i++) {
      totalLength += list[i].length
    }
  }

  var buf = new Buffer(totalLength)
  var pos = 0
  for (i = 0; i < list.length; i++) {
    var item = list[i]
    item.copy(buf, pos)
    pos += item.length
  }
  return buf
}

Buffer.compare = function (a, b) {
  assert(Buffer.isBuffer(a) && Buffer.isBuffer(b), 'Arguments must be Buffers')
  var x = a.length
  var y = b.length
  for (var i = 0, len = Math.min(x, y); i < len && a[i] === b[i]; i++) {}
  if (i !== len) {
    x = a[i]
    y = b[i]
  }
  if (x < y) {
    return -1
  }
  if (y < x) {
    return 1
  }
  return 0
}

// BUFFER INSTANCE METHODS
// =======================

function hexWrite (buf, string, offset, length) {
  offset = Number(offset) || 0
  var remaining = buf.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }

  // must be an even number of digits
  var strLen = string.length
  assert(strLen % 2 === 0, 'Invalid hex string')

  if (length > strLen / 2) {
    length = strLen / 2
  }
  for (var i = 0; i < length; i++) {
    var byte = parseInt(string.substr(i * 2, 2), 16)
    assert(!isNaN(byte), 'Invalid hex string')
    buf[offset + i] = byte
  }
  return i
}

function utf8Write (buf, string, offset, length) {
  var charsWritten = blitBuffer(utf8ToBytes(string), buf, offset, length)
  return charsWritten
}

function asciiWrite (buf, string, offset, length) {
  var charsWritten = blitBuffer(asciiToBytes(string), buf, offset, length)
  return charsWritten
}

function binaryWrite (buf, string, offset, length) {
  return asciiWrite(buf, string, offset, length)
}

function base64Write (buf, string, offset, length) {
  var charsWritten = blitBuffer(base64ToBytes(string), buf, offset, length)
  return charsWritten
}

function utf16leWrite (buf, string, offset, length) {
  var charsWritten = blitBuffer(utf16leToBytes(string), buf, offset, length)
  return charsWritten
}

Buffer.prototype.write = function (string, offset, length, encoding) {
  // Support both (string, offset, length, encoding)
  // and the legacy (string, encoding, offset, length)
  if (isFinite(offset)) {
    if (!isFinite(length)) {
      encoding = length
      length = undefined
    }
  } else {  // legacy
    var swap = encoding
    encoding = offset
    offset = length
    length = swap
  }

  offset = Number(offset) || 0
  var remaining = this.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }
  encoding = String(encoding || 'utf8').toLowerCase()

  var ret
  switch (encoding) {
    case 'hex':
      ret = hexWrite(this, string, offset, length)
      break
    case 'utf8':
    case 'utf-8':
      ret = utf8Write(this, string, offset, length)
      break
    case 'ascii':
      ret = asciiWrite(this, string, offset, length)
      break
    case 'binary':
      ret = binaryWrite(this, string, offset, length)
      break
    case 'base64':
      ret = base64Write(this, string, offset, length)
      break
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      ret = utf16leWrite(this, string, offset, length)
      break
    default:
      throw new Error('Unknown encoding')
  }
  return ret
}

Buffer.prototype.toString = function (encoding, start, end) {
  var self = this

  encoding = String(encoding || 'utf8').toLowerCase()
  start = Number(start) || 0
  end = (end === undefined) ? self.length : Number(end)

  // Fastpath empty strings
  if (end === start)
    return ''

  var ret
  switch (encoding) {
    case 'hex':
      ret = hexSlice(self, start, end)
      break
    case 'utf8':
    case 'utf-8':
      ret = utf8Slice(self, start, end)
      break
    case 'ascii':
      ret = asciiSlice(self, start, end)
      break
    case 'binary':
      ret = binarySlice(self, start, end)
      break
    case 'base64':
      ret = base64Slice(self, start, end)
      break
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      ret = utf16leSlice(self, start, end)
      break
    default:
      throw new Error('Unknown encoding')
  }
  return ret
}

Buffer.prototype.toJSON = function () {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  }
}

Buffer.prototype.equals = function (b) {
  assert(Buffer.isBuffer(b), 'Argument must be a Buffer')
  return Buffer.compare(this, b) === 0
}

Buffer.prototype.compare = function (b) {
  assert(Buffer.isBuffer(b), 'Argument must be a Buffer')
  return Buffer.compare(this, b)
}

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function (target, target_start, start, end) {
  var source = this

  if (!start) start = 0
  if (!end && end !== 0) end = this.length
  if (!target_start) target_start = 0

  // Copy 0 bytes; we're done
  if (end === start) return
  if (target.length === 0 || source.length === 0) return

  // Fatal error conditions
  assert(end >= start, 'sourceEnd < sourceStart')
  assert(target_start >= 0 && target_start < target.length,
      'targetStart out of bounds')
  assert(start >= 0 && start < source.length, 'sourceStart out of bounds')
  assert(end >= 0 && end <= source.length, 'sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length)
    end = this.length
  if (target.length - target_start < end - start)
    end = target.length - target_start + start

  var len = end - start

  if (len < 100 || !TYPED_ARRAY_SUPPORT) {
    for (var i = 0; i < len; i++) {
      target[i + target_start] = this[i + start]
    }
  } else {
    target._set(this.subarray(start, start + len), target_start)
  }
}

function base64Slice (buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf)
  } else {
    return base64.fromByteArray(buf.slice(start, end))
  }
}

function utf8Slice (buf, start, end) {
  var res = ''
  var tmp = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; i++) {
    if (buf[i] <= 0x7F) {
      res += decodeUtf8Char(tmp) + String.fromCharCode(buf[i])
      tmp = ''
    } else {
      tmp += '%' + buf[i].toString(16)
    }
  }

  return res + decodeUtf8Char(tmp)
}

function asciiSlice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; i++) {
    ret += String.fromCharCode(buf[i])
  }
  return ret
}

function binarySlice (buf, start, end) {
  return asciiSlice(buf, start, end)
}

function hexSlice (buf, start, end) {
  var len = buf.length

  if (!start || start < 0) start = 0
  if (!end || end < 0 || end > len) end = len

  var out = ''
  for (var i = start; i < end; i++) {
    out += toHex(buf[i])
  }
  return out
}

function utf16leSlice (buf, start, end) {
  var bytes = buf.slice(start, end)
  var res = ''
  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256)
  }
  return res
}

Buffer.prototype.slice = function (start, end) {
  var len = this.length
  start = ~~start
  end = end === undefined ? len : ~~end

  if (start < 0) {
    start += len;
    if (start < 0)
      start = 0
  } else if (start > len) {
    start = len
  }

  if (end < 0) {
    end += len
    if (end < 0)
      end = 0
  } else if (end > len) {
    end = len
  }

  if (end < start)
    end = start

  if (TYPED_ARRAY_SUPPORT) {
    return Buffer._augment(this.subarray(start, end))
  } else {
    var sliceLen = end - start
    var newBuf = new Buffer(sliceLen, undefined, true)
    for (var i = 0; i < sliceLen; i++) {
      newBuf[i] = this[i + start]
    }
    return newBuf
  }
}

// `get` will be removed in Node 0.13+
Buffer.prototype.get = function (offset) {
  console.log('.get() is deprecated. Access using array indexes instead.')
  return this.readUInt8(offset)
}

// `set` will be removed in Node 0.13+
Buffer.prototype.set = function (v, offset) {
  console.log('.set() is deprecated. Access using array indexes instead.')
  return this.writeUInt8(v, offset)
}

Buffer.prototype.readUInt8 = function (offset, noAssert) {
  if (!noAssert) {
    assert(offset !== undefined && offset !== null, 'missing offset')
    assert(offset < this.length, 'Trying to read beyond buffer length')
  }

  if (offset >= this.length)
    return

  return this[offset]
}

function readUInt16 (buf, offset, littleEndian, noAssert) {
  if (!noAssert) {
    assert(typeof littleEndian === 'boolean', 'missing or invalid endian')
    assert(offset !== undefined && offset !== null, 'missing offset')
    assert(offset + 1 < buf.length, 'Trying to read beyond buffer length')
  }

  var len = buf.length
  if (offset >= len)
    return

  var val
  if (littleEndian) {
    val = buf[offset]
    if (offset + 1 < len)
      val |= buf[offset + 1] << 8
  } else {
    val = buf[offset] << 8
    if (offset + 1 < len)
      val |= buf[offset + 1]
  }
  return val
}

Buffer.prototype.readUInt16LE = function (offset, noAssert) {
  return readUInt16(this, offset, true, noAssert)
}

Buffer.prototype.readUInt16BE = function (offset, noAssert) {
  return readUInt16(this, offset, false, noAssert)
}

function readUInt32 (buf, offset, littleEndian, noAssert) {
  if (!noAssert) {
    assert(typeof littleEndian === 'boolean', 'missing or invalid endian')
    assert(offset !== undefined && offset !== null, 'missing offset')
    assert(offset + 3 < buf.length, 'Trying to read beyond buffer length')
  }

  var len = buf.length
  if (offset >= len)
    return

  var val
  if (littleEndian) {
    if (offset + 2 < len)
      val = buf[offset + 2] << 16
    if (offset + 1 < len)
      val |= buf[offset + 1] << 8
    val |= buf[offset]
    if (offset + 3 < len)
      val = val + (buf[offset + 3] << 24 >>> 0)
  } else {
    if (offset + 1 < len)
      val = buf[offset + 1] << 16
    if (offset + 2 < len)
      val |= buf[offset + 2] << 8
    if (offset + 3 < len)
      val |= buf[offset + 3]
    val = val + (buf[offset] << 24 >>> 0)
  }
  return val
}

Buffer.prototype.readUInt32LE = function (offset, noAssert) {
  return readUInt32(this, offset, true, noAssert)
}

Buffer.prototype.readUInt32BE = function (offset, noAssert) {
  return readUInt32(this, offset, false, noAssert)
}

Buffer.prototype.readInt8 = function (offset, noAssert) {
  if (!noAssert) {
    assert(offset !== undefined && offset !== null,
        'missing offset')
    assert(offset < this.length, 'Trying to read beyond buffer length')
  }

  if (offset >= this.length)
    return

  var neg = this[offset] & 0x80
  if (neg)
    return (0xff - this[offset] + 1) * -1
  else
    return this[offset]
}

function readInt16 (buf, offset, littleEndian, noAssert) {
  if (!noAssert) {
    assert(typeof littleEndian === 'boolean', 'missing or invalid endian')
    assert(offset !== undefined && offset !== null, 'missing offset')
    assert(offset + 1 < buf.length, 'Trying to read beyond buffer length')
  }

  var len = buf.length
  if (offset >= len)
    return

  var val = readUInt16(buf, offset, littleEndian, true)
  var neg = val & 0x8000
  if (neg)
    return (0xffff - val + 1) * -1
  else
    return val
}

Buffer.prototype.readInt16LE = function (offset, noAssert) {
  return readInt16(this, offset, true, noAssert)
}

Buffer.prototype.readInt16BE = function (offset, noAssert) {
  return readInt16(this, offset, false, noAssert)
}

function readInt32 (buf, offset, littleEndian, noAssert) {
  if (!noAssert) {
    assert(typeof littleEndian === 'boolean', 'missing or invalid endian')
    assert(offset !== undefined && offset !== null, 'missing offset')
    assert(offset + 3 < buf.length, 'Trying to read beyond buffer length')
  }

  var len = buf.length
  if (offset >= len)
    return

  var val = readUInt32(buf, offset, littleEndian, true)
  var neg = val & 0x80000000
  if (neg)
    return (0xffffffff - val + 1) * -1
  else
    return val
}

Buffer.prototype.readInt32LE = function (offset, noAssert) {
  return readInt32(this, offset, true, noAssert)
}

Buffer.prototype.readInt32BE = function (offset, noAssert) {
  return readInt32(this, offset, false, noAssert)
}

function readFloat (buf, offset, littleEndian, noAssert) {
  if (!noAssert) {
    assert(typeof littleEndian === 'boolean', 'missing or invalid endian')
    assert(offset + 3 < buf.length, 'Trying to read beyond buffer length')
  }

  return ieee754.read(buf, offset, littleEndian, 23, 4)
}

Buffer.prototype.readFloatLE = function (offset, noAssert) {
  return readFloat(this, offset, true, noAssert)
}

Buffer.prototype.readFloatBE = function (offset, noAssert) {
  return readFloat(this, offset, false, noAssert)
}

function readDouble (buf, offset, littleEndian, noAssert) {
  if (!noAssert) {
    assert(typeof littleEndian === 'boolean', 'missing or invalid endian')
    assert(offset + 7 < buf.length, 'Trying to read beyond buffer length')
  }

  return ieee754.read(buf, offset, littleEndian, 52, 8)
}

Buffer.prototype.readDoubleLE = function (offset, noAssert) {
  return readDouble(this, offset, true, noAssert)
}

Buffer.prototype.readDoubleBE = function (offset, noAssert) {
  return readDouble(this, offset, false, noAssert)
}

Buffer.prototype.writeUInt8 = function (value, offset, noAssert) {
  if (!noAssert) {
    assert(value !== undefined && value !== null, 'missing value')
    assert(offset !== undefined && offset !== null, 'missing offset')
    assert(offset < this.length, 'trying to write beyond buffer length')
    verifuint(value, 0xff)
  }

  if (offset >= this.length) return

  this[offset] = value
  return offset + 1
}

function writeUInt16 (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    assert(value !== undefined && value !== null, 'missing value')
    assert(typeof littleEndian === 'boolean', 'missing or invalid endian')
    assert(offset !== undefined && offset !== null, 'missing offset')
    assert(offset + 1 < buf.length, 'trying to write beyond buffer length')
    verifuint(value, 0xffff)
  }

  var len = buf.length
  if (offset >= len)
    return

  for (var i = 0, j = Math.min(len - offset, 2); i < j; i++) {
    buf[offset + i] =
        (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
            (littleEndian ? i : 1 - i) * 8
  }
  return offset + 2
}

Buffer.prototype.writeUInt16LE = function (value, offset, noAssert) {
  return writeUInt16(this, value, offset, true, noAssert)
}

Buffer.prototype.writeUInt16BE = function (value, offset, noAssert) {
  return writeUInt16(this, value, offset, false, noAssert)
}

function writeUInt32 (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    assert(value !== undefined && value !== null, 'missing value')
    assert(typeof littleEndian === 'boolean', 'missing or invalid endian')
    assert(offset !== undefined && offset !== null, 'missing offset')
    assert(offset + 3 < buf.length, 'trying to write beyond buffer length')
    verifuint(value, 0xffffffff)
  }

  var len = buf.length
  if (offset >= len)
    return

  for (var i = 0, j = Math.min(len - offset, 4); i < j; i++) {
    buf[offset + i] =
        (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff
  }
  return offset + 4
}

Buffer.prototype.writeUInt32LE = function (value, offset, noAssert) {
  return writeUInt32(this, value, offset, true, noAssert)
}

Buffer.prototype.writeUInt32BE = function (value, offset, noAssert) {
  return writeUInt32(this, value, offset, false, noAssert)
}

Buffer.prototype.writeInt8 = function (value, offset, noAssert) {
  if (!noAssert) {
    assert(value !== undefined && value !== null, 'missing value')
    assert(offset !== undefined && offset !== null, 'missing offset')
    assert(offset < this.length, 'Trying to write beyond buffer length')
    verifsint(value, 0x7f, -0x80)
  }

  if (offset >= this.length)
    return

  if (value >= 0)
    this.writeUInt8(value, offset, noAssert)
  else
    this.writeUInt8(0xff + value + 1, offset, noAssert)
  return offset + 1
}

function writeInt16 (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    assert(value !== undefined && value !== null, 'missing value')
    assert(typeof littleEndian === 'boolean', 'missing or invalid endian')
    assert(offset !== undefined && offset !== null, 'missing offset')
    assert(offset + 1 < buf.length, 'Trying to write beyond buffer length')
    verifsint(value, 0x7fff, -0x8000)
  }

  var len = buf.length
  if (offset >= len)
    return

  if (value >= 0)
    writeUInt16(buf, value, offset, littleEndian, noAssert)
  else
    writeUInt16(buf, 0xffff + value + 1, offset, littleEndian, noAssert)
  return offset + 2
}

Buffer.prototype.writeInt16LE = function (value, offset, noAssert) {
  return writeInt16(this, value, offset, true, noAssert)
}

Buffer.prototype.writeInt16BE = function (value, offset, noAssert) {
  return writeInt16(this, value, offset, false, noAssert)
}

function writeInt32 (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    assert(value !== undefined && value !== null, 'missing value')
    assert(typeof littleEndian === 'boolean', 'missing or invalid endian')
    assert(offset !== undefined && offset !== null, 'missing offset')
    assert(offset + 3 < buf.length, 'Trying to write beyond buffer length')
    verifsint(value, 0x7fffffff, -0x80000000)
  }

  var len = buf.length
  if (offset >= len)
    return

  if (value >= 0)
    writeUInt32(buf, value, offset, littleEndian, noAssert)
  else
    writeUInt32(buf, 0xffffffff + value + 1, offset, littleEndian, noAssert)
  return offset + 4
}

Buffer.prototype.writeInt32LE = function (value, offset, noAssert) {
  return writeInt32(this, value, offset, true, noAssert)
}

Buffer.prototype.writeInt32BE = function (value, offset, noAssert) {
  return writeInt32(this, value, offset, false, noAssert)
}

function writeFloat (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    assert(value !== undefined && value !== null, 'missing value')
    assert(typeof littleEndian === 'boolean', 'missing or invalid endian')
    assert(offset !== undefined && offset !== null, 'missing offset')
    assert(offset + 3 < buf.length, 'Trying to write beyond buffer length')
    verifIEEE754(value, 3.4028234663852886e+38, -3.4028234663852886e+38)
  }

  var len = buf.length
  if (offset >= len)
    return

  ieee754.write(buf, value, offset, littleEndian, 23, 4)
  return offset + 4
}

Buffer.prototype.writeFloatLE = function (value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert)
}

Buffer.prototype.writeFloatBE = function (value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert)
}

function writeDouble (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    assert(value !== undefined && value !== null, 'missing value')
    assert(typeof littleEndian === 'boolean', 'missing or invalid endian')
    assert(offset !== undefined && offset !== null, 'missing offset')
    assert(offset + 7 < buf.length,
        'Trying to write beyond buffer length')
    verifIEEE754(value, 1.7976931348623157E+308, -1.7976931348623157E+308)
  }

  var len = buf.length
  if (offset >= len)
    return

  ieee754.write(buf, value, offset, littleEndian, 52, 8)
  return offset + 8
}

Buffer.prototype.writeDoubleLE = function (value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert)
}

Buffer.prototype.writeDoubleBE = function (value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert)
}

// fill(value, start=0, end=buffer.length)
Buffer.prototype.fill = function (value, start, end) {
  if (!value) value = 0
  if (!start) start = 0
  if (!end) end = this.length

  assert(end >= start, 'end < start')

  // Fill 0 bytes; we're done
  if (end === start) return
  if (this.length === 0) return

  assert(start >= 0 && start < this.length, 'start out of bounds')
  assert(end >= 0 && end <= this.length, 'end out of bounds')

  var i
  if (typeof value === 'number') {
    for (i = start; i < end; i++) {
      this[i] = value
    }
  } else {
    var bytes = utf8ToBytes(value.toString())
    var len = bytes.length
    for (i = start; i < end; i++) {
      this[i] = bytes[i % len]
    }
  }

  return this
}

Buffer.prototype.inspect = function () {
  var out = []
  var len = this.length
  for (var i = 0; i < len; i++) {
    out[i] = toHex(this[i])
    if (i === exports.INSPECT_MAX_BYTES) {
      out[i + 1] = '...'
      break
    }
  }
  return '<Buffer ' + out.join(' ') + '>'
}

/**
 * Creates a new `ArrayBuffer` with the *copied* memory of the buffer instance.
 * Added in Node 0.12. Only available in browsers that support ArrayBuffer.
 */
Buffer.prototype.toArrayBuffer = function () {
  if (typeof Uint8Array !== 'undefined') {
    if (TYPED_ARRAY_SUPPORT) {
      return (new Buffer(this)).buffer
    } else {
      var buf = new Uint8Array(this.length)
      for (var i = 0, len = buf.length; i < len; i += 1) {
        buf[i] = this[i]
      }
      return buf.buffer
    }
  } else {
    throw new Error('Buffer.toArrayBuffer not supported in this browser')
  }
}

// HELPER FUNCTIONS
// ================

var BP = Buffer.prototype

/**
 * Augment a Uint8Array *instance* (not the Uint8Array class!) with Buffer methods
 */
Buffer._augment = function (arr) {
  arr._isBuffer = true

  // save reference to original Uint8Array get/set methods before overwriting
  arr._get = arr.get
  arr._set = arr.set

  // deprecated, will be removed in node 0.13+
  arr.get = BP.get
  arr.set = BP.set

  arr.write = BP.write
  arr.toString = BP.toString
  arr.toLocaleString = BP.toString
  arr.toJSON = BP.toJSON
  arr.equals = BP.equals
  arr.compare = BP.compare
  arr.copy = BP.copy
  arr.slice = BP.slice
  arr.readUInt8 = BP.readUInt8
  arr.readUInt16LE = BP.readUInt16LE
  arr.readUInt16BE = BP.readUInt16BE
  arr.readUInt32LE = BP.readUInt32LE
  arr.readUInt32BE = BP.readUInt32BE
  arr.readInt8 = BP.readInt8
  arr.readInt16LE = BP.readInt16LE
  arr.readInt16BE = BP.readInt16BE
  arr.readInt32LE = BP.readInt32LE
  arr.readInt32BE = BP.readInt32BE
  arr.readFloatLE = BP.readFloatLE
  arr.readFloatBE = BP.readFloatBE
  arr.readDoubleLE = BP.readDoubleLE
  arr.readDoubleBE = BP.readDoubleBE
  arr.writeUInt8 = BP.writeUInt8
  arr.writeUInt16LE = BP.writeUInt16LE
  arr.writeUInt16BE = BP.writeUInt16BE
  arr.writeUInt32LE = BP.writeUInt32LE
  arr.writeUInt32BE = BP.writeUInt32BE
  arr.writeInt8 = BP.writeInt8
  arr.writeInt16LE = BP.writeInt16LE
  arr.writeInt16BE = BP.writeInt16BE
  arr.writeInt32LE = BP.writeInt32LE
  arr.writeInt32BE = BP.writeInt32BE
  arr.writeFloatLE = BP.writeFloatLE
  arr.writeFloatBE = BP.writeFloatBE
  arr.writeDoubleLE = BP.writeDoubleLE
  arr.writeDoubleBE = BP.writeDoubleBE
  arr.fill = BP.fill
  arr.inspect = BP.inspect
  arr.toArrayBuffer = BP.toArrayBuffer

  return arr
}

var INVALID_BASE64_RE = /[^+\/0-9A-z]/g

function base64clean (str) {
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = stringtrim(str).replace(INVALID_BASE64_RE, '')
  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
  while (str.length % 4 !== 0) {
    str = str + '='
  }
  return str
}

function stringtrim (str) {
  if (str.trim) return str.trim()
  return str.replace(/^\s+|\s+$/g, '')
}

function isArray (subject) {
  return (Array.isArray || function (subject) {
    return Object.prototype.toString.call(subject) === '[object Array]'
  })(subject)
}

function isArrayish (subject) {
  return isArray(subject) || Buffer.isBuffer(subject) ||
      subject && typeof subject === 'object' &&
      typeof subject.length === 'number'
}

function toHex (n) {
  if (n < 16) return '0' + n.toString(16)
  return n.toString(16)
}

function utf8ToBytes (str) {
  var byteArray = []
  for (var i = 0; i < str.length; i++) {
    var b = str.charCodeAt(i)
    if (b <= 0x7F) {
      byteArray.push(b)
    } else {
      var start = i
      if (b >= 0xD800 && b <= 0xDFFF) i++
      var h = encodeURIComponent(str.slice(start, i+1)).substr(1).split('%')
      for (var j = 0; j < h.length; j++) {
        byteArray.push(parseInt(h[j], 16))
      }
    }
  }
  return byteArray
}

function asciiToBytes (str) {
  var byteArray = []
  for (var i = 0; i < str.length; i++) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF)
  }
  return byteArray
}

function utf16leToBytes (str) {
  var c, hi, lo
  var byteArray = []
  for (var i = 0; i < str.length; i++) {
    c = str.charCodeAt(i)
    hi = c >> 8
    lo = c % 256
    byteArray.push(lo)
    byteArray.push(hi)
  }

  return byteArray
}

function base64ToBytes (str) {
  return base64.toByteArray(str)
}

function blitBuffer (src, dst, offset, length) {
  for (var i = 0; i < length; i++) {
    if ((i + offset >= dst.length) || (i >= src.length))
      break
    dst[i + offset] = src[i]
  }
  return i
}

function decodeUtf8Char (str) {
  try {
    return decodeURIComponent(str)
  } catch (err) {
    return String.fromCharCode(0xFFFD) // UTF 8 invalid char
  }
}

/*
 * We have to make sure that the value is a valid integer. This means that it
 * is non-negative. It has no fractional component and that it does not
 * exceed the maximum allowed value.
 */
function verifuint (value, max) {
  assert(typeof value === 'number', 'cannot write a non-number as a number')
  assert(value >= 0, 'specified a negative value for writing an unsigned value')
  assert(value <= max, 'value is larger than maximum value for type')
  assert(Math.floor(value) === value, 'value has a fractional component')
}

function verifsint (value, max, min) {
  assert(typeof value === 'number', 'cannot write a non-number as a number')
  assert(value <= max, 'value larger than maximum allowed value')
  assert(value >= min, 'value smaller than minimum allowed value')
  assert(Math.floor(value) === value, 'value has a fractional component')
}

function verifIEEE754 (value, max, min) {
  assert(typeof value === 'number', 'cannot write a non-number as a number')
  assert(value <= max, 'value larger than maximum allowed value')
  assert(value >= min, 'value smaller than minimum allowed value')
}

function assert (test, message) {
  if (!test) throw new Error(message || 'Failed assertion')
}

},{"base64-js":24,"ieee754":25}],24:[function(require,module,exports){
var lookup = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';

;(function (exports) {
	'use strict';

  var Arr = (typeof Uint8Array !== 'undefined')
    ? Uint8Array
    : Array

	var PLUS   = '+'.charCodeAt(0)
	var SLASH  = '/'.charCodeAt(0)
	var NUMBER = '0'.charCodeAt(0)
	var LOWER  = 'a'.charCodeAt(0)
	var UPPER  = 'A'.charCodeAt(0)

	function decode (elt) {
		var code = elt.charCodeAt(0)
		if (code === PLUS)
			return 62 // '+'
		if (code === SLASH)
			return 63 // '/'
		if (code < NUMBER)
			return -1 //no match
		if (code < NUMBER + 10)
			return code - NUMBER + 26 + 26
		if (code < UPPER + 26)
			return code - UPPER
		if (code < LOWER + 26)
			return code - LOWER + 26
	}

	function b64ToByteArray (b64) {
		var i, j, l, tmp, placeHolders, arr

		if (b64.length % 4 > 0) {
			throw new Error('Invalid string. Length must be a multiple of 4')
		}

		// the number of equal signs (place holders)
		// if there are two placeholders, than the two characters before it
		// represent one byte
		// if there is only one, then the three characters before it represent 2 bytes
		// this is just a cheap hack to not do indexOf twice
		var len = b64.length
		placeHolders = '=' === b64.charAt(len - 2) ? 2 : '=' === b64.charAt(len - 1) ? 1 : 0

		// base64 is 4/3 + up to two characters of the original data
		arr = new Arr(b64.length * 3 / 4 - placeHolders)

		// if there are placeholders, only get up to the last complete 4 chars
		l = placeHolders > 0 ? b64.length - 4 : b64.length

		var L = 0

		function push (v) {
			arr[L++] = v
		}

		for (i = 0, j = 0; i < l; i += 4, j += 3) {
			tmp = (decode(b64.charAt(i)) << 18) | (decode(b64.charAt(i + 1)) << 12) | (decode(b64.charAt(i + 2)) << 6) | decode(b64.charAt(i + 3))
			push((tmp & 0xFF0000) >> 16)
			push((tmp & 0xFF00) >> 8)
			push(tmp & 0xFF)
		}

		if (placeHolders === 2) {
			tmp = (decode(b64.charAt(i)) << 2) | (decode(b64.charAt(i + 1)) >> 4)
			push(tmp & 0xFF)
		} else if (placeHolders === 1) {
			tmp = (decode(b64.charAt(i)) << 10) | (decode(b64.charAt(i + 1)) << 4) | (decode(b64.charAt(i + 2)) >> 2)
			push((tmp >> 8) & 0xFF)
			push(tmp & 0xFF)
		}

		return arr
	}

	function uint8ToBase64 (uint8) {
		var i,
			extraBytes = uint8.length % 3, // if we have 1 byte left, pad 2 bytes
			output = "",
			temp, length

		function encode (num) {
			return lookup.charAt(num)
		}

		function tripletToBase64 (num) {
			return encode(num >> 18 & 0x3F) + encode(num >> 12 & 0x3F) + encode(num >> 6 & 0x3F) + encode(num & 0x3F)
		}

		// go through the array every three bytes, we'll deal with trailing stuff later
		for (i = 0, length = uint8.length - extraBytes; i < length; i += 3) {
			temp = (uint8[i] << 16) + (uint8[i + 1] << 8) + (uint8[i + 2])
			output += tripletToBase64(temp)
		}

		// pad the end with zeros, but make sure to not forget the extra bytes
		switch (extraBytes) {
			case 1:
				temp = uint8[uint8.length - 1]
				output += encode(temp >> 2)
				output += encode((temp << 4) & 0x3F)
				output += '=='
				break
			case 2:
				temp = (uint8[uint8.length - 2] << 8) + (uint8[uint8.length - 1])
				output += encode(temp >> 10)
				output += encode((temp >> 4) & 0x3F)
				output += encode((temp << 2) & 0x3F)
				output += '='
				break
		}

		return output
	}

	exports.toByteArray = b64ToByteArray
	exports.fromByteArray = uint8ToBase64
}(typeof exports === 'undefined' ? (this.base64js = {}) : exports))

},{}],25:[function(require,module,exports){
exports.read = function(buffer, offset, isLE, mLen, nBytes) {
  var e, m,
      eLen = nBytes * 8 - mLen - 1,
      eMax = (1 << eLen) - 1,
      eBias = eMax >> 1,
      nBits = -7,
      i = isLE ? (nBytes - 1) : 0,
      d = isLE ? -1 : 1,
      s = buffer[offset + i];

  i += d;

  e = s & ((1 << (-nBits)) - 1);
  s >>= (-nBits);
  nBits += eLen;
  for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8);

  m = e & ((1 << (-nBits)) - 1);
  e >>= (-nBits);
  nBits += mLen;
  for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8);

  if (e === 0) {
    e = 1 - eBias;
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity);
  } else {
    m = m + Math.pow(2, mLen);
    e = e - eBias;
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen);
};

exports.write = function(buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c,
      eLen = nBytes * 8 - mLen - 1,
      eMax = (1 << eLen) - 1,
      eBias = eMax >> 1,
      rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0),
      i = isLE ? 0 : (nBytes - 1),
      d = isLE ? 1 : -1,
      s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0;

  value = Math.abs(value);

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0;
    e = eMax;
  } else {
    e = Math.floor(Math.log(value) / Math.LN2);
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--;
      c *= 2;
    }
    if (e + eBias >= 1) {
      value += rt / c;
    } else {
      value += rt * Math.pow(2, 1 - eBias);
    }
    if (value * c >= 2) {
      e++;
      c /= 2;
    }

    if (e + eBias >= eMax) {
      m = 0;
      e = eMax;
    } else if (e + eBias >= 1) {
      m = (value * c - 1) * Math.pow(2, mLen);
      e = e + eBias;
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
      e = 0;
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8);

  e = (e << mLen) | m;
  eLen += mLen;
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8);

  buffer[offset + i - d] |= s * 128;
};

},{}],26:[function(require,module,exports){
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

function EventEmitter() {
  this._events = this._events || {};
  this._maxListeners = this._maxListeners || undefined;
}
module.exports = EventEmitter;

// Backwards-compat with node 0.10.x
EventEmitter.EventEmitter = EventEmitter;

EventEmitter.prototype._events = undefined;
EventEmitter.prototype._maxListeners = undefined;

// By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.
EventEmitter.defaultMaxListeners = 10;

// Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.
EventEmitter.prototype.setMaxListeners = function(n) {
  if (!isNumber(n) || n < 0 || isNaN(n))
    throw TypeError('n must be a positive number');
  this._maxListeners = n;
  return this;
};

EventEmitter.prototype.emit = function(type) {
  var er, handler, len, args, i, listeners;

  if (!this._events)
    this._events = {};

  // If there is no 'error' event listener then throw.
  if (type === 'error') {
    if (!this._events.error ||
        (isObject(this._events.error) && !this._events.error.length)) {
      er = arguments[1];
      if (er instanceof Error) {
        throw er; // Unhandled 'error' event
      } else {
        throw TypeError('Uncaught, unspecified "error" event.');
      }
      return false;
    }
  }

  handler = this._events[type];

  if (isUndefined(handler))
    return false;

  if (isFunction(handler)) {
    switch (arguments.length) {
      // fast cases
      case 1:
        handler.call(this);
        break;
      case 2:
        handler.call(this, arguments[1]);
        break;
      case 3:
        handler.call(this, arguments[1], arguments[2]);
        break;
      // slower
      default:
        len = arguments.length;
        args = new Array(len - 1);
        for (i = 1; i < len; i++)
          args[i - 1] = arguments[i];
        handler.apply(this, args);
    }
  } else if (isObject(handler)) {
    len = arguments.length;
    args = new Array(len - 1);
    for (i = 1; i < len; i++)
      args[i - 1] = arguments[i];

    listeners = handler.slice();
    len = listeners.length;
    for (i = 0; i < len; i++)
      listeners[i].apply(this, args);
  }

  return true;
};

EventEmitter.prototype.addListener = function(type, listener) {
  var m;

  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  if (!this._events)
    this._events = {};

  // To avoid recursion in the case that type === "newListener"! Before
  // adding it to the listeners, first emit "newListener".
  if (this._events.newListener)
    this.emit('newListener', type,
              isFunction(listener.listener) ?
              listener.listener : listener);

  if (!this._events[type])
    // Optimize the case of one listener. Don't need the extra array object.
    this._events[type] = listener;
  else if (isObject(this._events[type]))
    // If we've already got an array, just append.
    this._events[type].push(listener);
  else
    // Adding the second element, need to change to array.
    this._events[type] = [this._events[type], listener];

  // Check for listener leak
  if (isObject(this._events[type]) && !this._events[type].warned) {
    var m;
    if (!isUndefined(this._maxListeners)) {
      m = this._maxListeners;
    } else {
      m = EventEmitter.defaultMaxListeners;
    }

    if (m && m > 0 && this._events[type].length > m) {
      this._events[type].warned = true;
      console.error('(node) warning: possible EventEmitter memory ' +
                    'leak detected. %d listeners added. ' +
                    'Use emitter.setMaxListeners() to increase limit.',
                    this._events[type].length);
      if (typeof console.trace === 'function') {
        // not supported in IE 10
        console.trace();
      }
    }
  }

  return this;
};

EventEmitter.prototype.on = EventEmitter.prototype.addListener;

EventEmitter.prototype.once = function(type, listener) {
  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  var fired = false;

  function g() {
    this.removeListener(type, g);

    if (!fired) {
      fired = true;
      listener.apply(this, arguments);
    }
  }

  g.listener = listener;
  this.on(type, g);

  return this;
};

// emits a 'removeListener' event iff the listener was removed
EventEmitter.prototype.removeListener = function(type, listener) {
  var list, position, length, i;

  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  if (!this._events || !this._events[type])
    return this;

  list = this._events[type];
  length = list.length;
  position = -1;

  if (list === listener ||
      (isFunction(list.listener) && list.listener === listener)) {
    delete this._events[type];
    if (this._events.removeListener)
      this.emit('removeListener', type, listener);

  } else if (isObject(list)) {
    for (i = length; i-- > 0;) {
      if (list[i] === listener ||
          (list[i].listener && list[i].listener === listener)) {
        position = i;
        break;
      }
    }

    if (position < 0)
      return this;

    if (list.length === 1) {
      list.length = 0;
      delete this._events[type];
    } else {
      list.splice(position, 1);
    }

    if (this._events.removeListener)
      this.emit('removeListener', type, listener);
  }

  return this;
};

EventEmitter.prototype.removeAllListeners = function(type) {
  var key, listeners;

  if (!this._events)
    return this;

  // not listening for removeListener, no need to emit
  if (!this._events.removeListener) {
    if (arguments.length === 0)
      this._events = {};
    else if (this._events[type])
      delete this._events[type];
    return this;
  }

  // emit removeListener for all listeners on all events
  if (arguments.length === 0) {
    for (key in this._events) {
      if (key === 'removeListener') continue;
      this.removeAllListeners(key);
    }
    this.removeAllListeners('removeListener');
    this._events = {};
    return this;
  }

  listeners = this._events[type];

  if (isFunction(listeners)) {
    this.removeListener(type, listeners);
  } else {
    // LIFO order
    while (listeners.length)
      this.removeListener(type, listeners[listeners.length - 1]);
  }
  delete this._events[type];

  return this;
};

EventEmitter.prototype.listeners = function(type) {
  var ret;
  if (!this._events || !this._events[type])
    ret = [];
  else if (isFunction(this._events[type]))
    ret = [this._events[type]];
  else
    ret = this._events[type].slice();
  return ret;
};

EventEmitter.listenerCount = function(emitter, type) {
  var ret;
  if (!emitter._events || !emitter._events[type])
    ret = 0;
  else if (isFunction(emitter._events[type]))
    ret = 1;
  else
    ret = emitter._events[type].length;
  return ret;
};

function isFunction(arg) {
  return typeof arg === 'function';
}

function isNumber(arg) {
  return typeof arg === 'number';
}

function isObject(arg) {
  return typeof arg === 'object' && arg !== null;
}

function isUndefined(arg) {
  return arg === void 0;
}

},{}],27:[function(require,module,exports){
if (typeof Object.create === 'function') {
  // implementation from standard node.js 'util' module
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    ctor.prototype = Object.create(superCtor.prototype, {
      constructor: {
        value: ctor,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
  };
} else {
  // old school shim for old browsers
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    var TempCtor = function () {}
    TempCtor.prototype = superCtor.prototype
    ctor.prototype = new TempCtor()
    ctor.prototype.constructor = ctor
  }
}

},{}],28:[function(require,module,exports){
module.exports = Array.isArray || function (arr) {
  return Object.prototype.toString.call(arr) == '[object Array]';
};

},{}],29:[function(require,module,exports){
// shim for using process in browser

var process = module.exports = {};

process.nextTick = (function () {
    var canSetImmediate = typeof window !== 'undefined'
    && window.setImmediate;
    var canPost = typeof window !== 'undefined'
    && window.postMessage && window.addEventListener
    ;

    if (canSetImmediate) {
        return function (f) { return window.setImmediate(f) };
    }

    if (canPost) {
        var queue = [];
        window.addEventListener('message', function (ev) {
            var source = ev.source;
            if ((source === window || source === null) && ev.data === 'process-tick') {
                ev.stopPropagation();
                if (queue.length > 0) {
                    var fn = queue.shift();
                    fn();
                }
            }
        }, true);

        return function nextTick(fn) {
            queue.push(fn);
            window.postMessage('process-tick', '*');
        };
    }

    return function nextTick(fn) {
        setTimeout(fn, 0);
    };
})();

process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;

process.binding = function (name) {
    throw new Error('process.binding is not supported');
}

// TODO(shtylman)
process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};

},{}],30:[function(require,module,exports){
module.exports = require("./lib/_stream_duplex.js")

},{"./lib/_stream_duplex.js":31}],31:[function(require,module,exports){
(function (process){
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// a duplex stream is just a stream that is both readable and writable.
// Since JS doesn't have multiple prototypal inheritance, this class
// prototypally inherits from Readable, and then parasitically from
// Writable.

module.exports = Duplex;

/*<replacement>*/
var objectKeys = Object.keys || function (obj) {
  var keys = [];
  for (var key in obj) keys.push(key);
  return keys;
}
/*</replacement>*/


/*<replacement>*/
var util = require('core-util-is');
util.inherits = require('inherits');
/*</replacement>*/

var Readable = require('./_stream_readable');
var Writable = require('./_stream_writable');

util.inherits(Duplex, Readable);

forEach(objectKeys(Writable.prototype), function(method) {
  if (!Duplex.prototype[method])
    Duplex.prototype[method] = Writable.prototype[method];
});

function Duplex(options) {
  if (!(this instanceof Duplex))
    return new Duplex(options);

  Readable.call(this, options);
  Writable.call(this, options);

  if (options && options.readable === false)
    this.readable = false;

  if (options && options.writable === false)
    this.writable = false;

  this.allowHalfOpen = true;
  if (options && options.allowHalfOpen === false)
    this.allowHalfOpen = false;

  this.once('end', onend);
}

// the no-half-open enforcer
function onend() {
  // if we allow half-open state, or if the writable side ended,
  // then we're ok.
  if (this.allowHalfOpen || this._writableState.ended)
    return;

  // no more data can be written.
  // But allow more writes to happen in this tick.
  process.nextTick(this.end.bind(this));
}

function forEach (xs, f) {
  for (var i = 0, l = xs.length; i < l; i++) {
    f(xs[i], i);
  }
}

}).call(this,require('_process'))
},{"./_stream_readable":33,"./_stream_writable":35,"_process":29,"core-util-is":36,"inherits":27}],32:[function(require,module,exports){
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// a passthrough stream.
// basically just the most minimal sort of Transform stream.
// Every written chunk gets output as-is.

module.exports = PassThrough;

var Transform = require('./_stream_transform');

/*<replacement>*/
var util = require('core-util-is');
util.inherits = require('inherits');
/*</replacement>*/

util.inherits(PassThrough, Transform);

function PassThrough(options) {
  if (!(this instanceof PassThrough))
    return new PassThrough(options);

  Transform.call(this, options);
}

PassThrough.prototype._transform = function(chunk, encoding, cb) {
  cb(null, chunk);
};

},{"./_stream_transform":34,"core-util-is":36,"inherits":27}],33:[function(require,module,exports){
(function (process){
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

module.exports = Readable;

/*<replacement>*/
var isArray = require('isarray');
/*</replacement>*/


/*<replacement>*/
var Buffer = require('buffer').Buffer;
/*</replacement>*/

Readable.ReadableState = ReadableState;

var EE = require('events').EventEmitter;

/*<replacement>*/
if (!EE.listenerCount) EE.listenerCount = function(emitter, type) {
  return emitter.listeners(type).length;
};
/*</replacement>*/

var Stream = require('stream');

/*<replacement>*/
var util = require('core-util-is');
util.inherits = require('inherits');
/*</replacement>*/

var StringDecoder;

util.inherits(Readable, Stream);

function ReadableState(options, stream) {
  options = options || {};

  // the point at which it stops calling _read() to fill the buffer
  // Note: 0 is a valid value, means "don't call _read preemptively ever"
  var hwm = options.highWaterMark;
  this.highWaterMark = (hwm || hwm === 0) ? hwm : 16 * 1024;

  // cast to ints.
  this.highWaterMark = ~~this.highWaterMark;

  this.buffer = [];
  this.length = 0;
  this.pipes = null;
  this.pipesCount = 0;
  this.flowing = false;
  this.ended = false;
  this.endEmitted = false;
  this.reading = false;

  // In streams that never have any data, and do push(null) right away,
  // the consumer can miss the 'end' event if they do some I/O before
  // consuming the stream.  So, we don't emit('end') until some reading
  // happens.
  this.calledRead = false;

  // a flag to be able to tell if the onwrite cb is called immediately,
  // or on a later tick.  We set this to true at first, becuase any
  // actions that shouldn't happen until "later" should generally also
  // not happen before the first write call.
  this.sync = true;

  // whenever we return null, then we set a flag to say
  // that we're awaiting a 'readable' event emission.
  this.needReadable = false;
  this.emittedReadable = false;
  this.readableListening = false;


  // object stream flag. Used to make read(n) ignore n and to
  // make all the buffer merging and length checks go away
  this.objectMode = !!options.objectMode;

  // Crypto is kind of old and crusty.  Historically, its default string
  // encoding is 'binary' so we have to make this configurable.
  // Everything else in the universe uses 'utf8', though.
  this.defaultEncoding = options.defaultEncoding || 'utf8';

  // when piping, we only care about 'readable' events that happen
  // after read()ing all the bytes and not getting any pushback.
  this.ranOut = false;

  // the number of writers that are awaiting a drain event in .pipe()s
  this.awaitDrain = 0;

  // if true, a maybeReadMore has been scheduled
  this.readingMore = false;

  this.decoder = null;
  this.encoding = null;
  if (options.encoding) {
    if (!StringDecoder)
      StringDecoder = require('string_decoder/').StringDecoder;
    this.decoder = new StringDecoder(options.encoding);
    this.encoding = options.encoding;
  }
}

function Readable(options) {
  if (!(this instanceof Readable))
    return new Readable(options);

  this._readableState = new ReadableState(options, this);

  // legacy
  this.readable = true;

  Stream.call(this);
}

// Manually shove something into the read() buffer.
// This returns true if the highWaterMark has not been hit yet,
// similar to how Writable.write() returns true if you should
// write() some more.
Readable.prototype.push = function(chunk, encoding) {
  var state = this._readableState;

  if (typeof chunk === 'string' && !state.objectMode) {
    encoding = encoding || state.defaultEncoding;
    if (encoding !== state.encoding) {
      chunk = new Buffer(chunk, encoding);
      encoding = '';
    }
  }

  return readableAddChunk(this, state, chunk, encoding, false);
};

// Unshift should *always* be something directly out of read()
Readable.prototype.unshift = function(chunk) {
  var state = this._readableState;
  return readableAddChunk(this, state, chunk, '', true);
};

function readableAddChunk(stream, state, chunk, encoding, addToFront) {
  var er = chunkInvalid(state, chunk);
  if (er) {
    stream.emit('error', er);
  } else if (chunk === null || chunk === undefined) {
    state.reading = false;
    if (!state.ended)
      onEofChunk(stream, state);
  } else if (state.objectMode || chunk && chunk.length > 0) {
    if (state.ended && !addToFront) {
      var e = new Error('stream.push() after EOF');
      stream.emit('error', e);
    } else if (state.endEmitted && addToFront) {
      var e = new Error('stream.unshift() after end event');
      stream.emit('error', e);
    } else {
      if (state.decoder && !addToFront && !encoding)
        chunk = state.decoder.write(chunk);

      // update the buffer info.
      state.length += state.objectMode ? 1 : chunk.length;
      if (addToFront) {
        state.buffer.unshift(chunk);
      } else {
        state.reading = false;
        state.buffer.push(chunk);
      }

      if (state.needReadable)
        emitReadable(stream);

      maybeReadMore(stream, state);
    }
  } else if (!addToFront) {
    state.reading = false;
  }

  return needMoreData(state);
}



// if it's past the high water mark, we can push in some more.
// Also, if we have no data yet, we can stand some
// more bytes.  This is to work around cases where hwm=0,
// such as the repl.  Also, if the push() triggered a
// readable event, and the user called read(largeNumber) such that
// needReadable was set, then we ought to push more, so that another
// 'readable' event will be triggered.
function needMoreData(state) {
  return !state.ended &&
         (state.needReadable ||
          state.length < state.highWaterMark ||
          state.length === 0);
}

// backwards compatibility.
Readable.prototype.setEncoding = function(enc) {
  if (!StringDecoder)
    StringDecoder = require('string_decoder/').StringDecoder;
  this._readableState.decoder = new StringDecoder(enc);
  this._readableState.encoding = enc;
};

// Don't raise the hwm > 128MB
var MAX_HWM = 0x800000;
function roundUpToNextPowerOf2(n) {
  if (n >= MAX_HWM) {
    n = MAX_HWM;
  } else {
    // Get the next highest power of 2
    n--;
    for (var p = 1; p < 32; p <<= 1) n |= n >> p;
    n++;
  }
  return n;
}

function howMuchToRead(n, state) {
  if (state.length === 0 && state.ended)
    return 0;

  if (state.objectMode)
    return n === 0 ? 0 : 1;

  if (n === null || isNaN(n)) {
    // only flow one buffer at a time
    if (state.flowing && state.buffer.length)
      return state.buffer[0].length;
    else
      return state.length;
  }

  if (n <= 0)
    return 0;

  // If we're asking for more than the target buffer level,
  // then raise the water mark.  Bump up to the next highest
  // power of 2, to prevent increasing it excessively in tiny
  // amounts.
  if (n > state.highWaterMark)
    state.highWaterMark = roundUpToNextPowerOf2(n);

  // don't have that much.  return null, unless we've ended.
  if (n > state.length) {
    if (!state.ended) {
      state.needReadable = true;
      return 0;
    } else
      return state.length;
  }

  return n;
}

// you can override either this method, or the async _read(n) below.
Readable.prototype.read = function(n) {
  var state = this._readableState;
  state.calledRead = true;
  var nOrig = n;
  var ret;

  if (typeof n !== 'number' || n > 0)
    state.emittedReadable = false;

  // if we're doing read(0) to trigger a readable event, but we
  // already have a bunch of data in the buffer, then just trigger
  // the 'readable' event and move on.
  if (n === 0 &&
      state.needReadable &&
      (state.length >= state.highWaterMark || state.ended)) {
    emitReadable(this);
    return null;
  }

  n = howMuchToRead(n, state);

  // if we've ended, and we're now clear, then finish it up.
  if (n === 0 && state.ended) {
    ret = null;

    // In cases where the decoder did not receive enough data
    // to produce a full chunk, then immediately received an
    // EOF, state.buffer will contain [<Buffer >, <Buffer 00 ...>].
    // howMuchToRead will see this and coerce the amount to
    // read to zero (because it's looking at the length of the
    // first <Buffer > in state.buffer), and we'll end up here.
    //
    // This can only happen via state.decoder -- no other venue
    // exists for pushing a zero-length chunk into state.buffer
    // and triggering this behavior. In this case, we return our
    // remaining data and end the stream, if appropriate.
    if (state.length > 0 && state.decoder) {
      ret = fromList(n, state);
      state.length -= ret.length;
    }

    if (state.length === 0)
      endReadable(this);

    return ret;
  }

  // All the actual chunk generation logic needs to be
  // *below* the call to _read.  The reason is that in certain
  // synthetic stream cases, such as passthrough streams, _read
  // may be a completely synchronous operation which may change
  // the state of the read buffer, providing enough data when
  // before there was *not* enough.
  //
  // So, the steps are:
  // 1. Figure out what the state of things will be after we do
  // a read from the buffer.
  //
  // 2. If that resulting state will trigger a _read, then call _read.
  // Note that this may be asynchronous, or synchronous.  Yes, it is
  // deeply ugly to write APIs this way, but that still doesn't mean
  // that the Readable class should behave improperly, as streams are
  // designed to be sync/async agnostic.
  // Take note if the _read call is sync or async (ie, if the read call
  // has returned yet), so that we know whether or not it's safe to emit
  // 'readable' etc.
  //
  // 3. Actually pull the requested chunks out of the buffer and return.

  // if we need a readable event, then we need to do some reading.
  var doRead = state.needReadable;

  // if we currently have less than the highWaterMark, then also read some
  if (state.length - n <= state.highWaterMark)
    doRead = true;

  // however, if we've ended, then there's no point, and if we're already
  // reading, then it's unnecessary.
  if (state.ended || state.reading)
    doRead = false;

  if (doRead) {
    state.reading = true;
    state.sync = true;
    // if the length is currently zero, then we *need* a readable event.
    if (state.length === 0)
      state.needReadable = true;
    // call internal read method
    this._read(state.highWaterMark);
    state.sync = false;
  }

  // If _read called its callback synchronously, then `reading`
  // will be false, and we need to re-evaluate how much data we
  // can return to the user.
  if (doRead && !state.reading)
    n = howMuchToRead(nOrig, state);

  if (n > 0)
    ret = fromList(n, state);
  else
    ret = null;

  if (ret === null) {
    state.needReadable = true;
    n = 0;
  }

  state.length -= n;

  // If we have nothing in the buffer, then we want to know
  // as soon as we *do* get something into the buffer.
  if (state.length === 0 && !state.ended)
    state.needReadable = true;

  // If we happened to read() exactly the remaining amount in the
  // buffer, and the EOF has been seen at this point, then make sure
  // that we emit 'end' on the very next tick.
  if (state.ended && !state.endEmitted && state.length === 0)
    endReadable(this);

  return ret;
};

function chunkInvalid(state, chunk) {
  var er = null;
  if (!Buffer.isBuffer(chunk) &&
      'string' !== typeof chunk &&
      chunk !== null &&
      chunk !== undefined &&
      !state.objectMode) {
    er = new TypeError('Invalid non-string/buffer chunk');
  }
  return er;
}


function onEofChunk(stream, state) {
  if (state.decoder && !state.ended) {
    var chunk = state.decoder.end();
    if (chunk && chunk.length) {
      state.buffer.push(chunk);
      state.length += state.objectMode ? 1 : chunk.length;
    }
  }
  state.ended = true;

  // if we've ended and we have some data left, then emit
  // 'readable' now to make sure it gets picked up.
  if (state.length > 0)
    emitReadable(stream);
  else
    endReadable(stream);
}

// Don't emit readable right away in sync mode, because this can trigger
// another read() call => stack overflow.  This way, it might trigger
// a nextTick recursion warning, but that's not so bad.
function emitReadable(stream) {
  var state = stream._readableState;
  state.needReadable = false;
  if (state.emittedReadable)
    return;

  state.emittedReadable = true;
  if (state.sync)
    process.nextTick(function() {
      emitReadable_(stream);
    });
  else
    emitReadable_(stream);
}

function emitReadable_(stream) {
  stream.emit('readable');
}


// at this point, the user has presumably seen the 'readable' event,
// and called read() to consume some data.  that may have triggered
// in turn another _read(n) call, in which case reading = true if
// it's in progress.
// However, if we're not ended, or reading, and the length < hwm,
// then go ahead and try to read some more preemptively.
function maybeReadMore(stream, state) {
  if (!state.readingMore) {
    state.readingMore = true;
    process.nextTick(function() {
      maybeReadMore_(stream, state);
    });
  }
}

function maybeReadMore_(stream, state) {
  var len = state.length;
  while (!state.reading && !state.flowing && !state.ended &&
         state.length < state.highWaterMark) {
    stream.read(0);
    if (len === state.length)
      // didn't get any data, stop spinning.
      break;
    else
      len = state.length;
  }
  state.readingMore = false;
}

// abstract method.  to be overridden in specific implementation classes.
// call cb(er, data) where data is <= n in length.
// for virtual (non-string, non-buffer) streams, "length" is somewhat
// arbitrary, and perhaps not very meaningful.
Readable.prototype._read = function(n) {
  this.emit('error', new Error('not implemented'));
};

Readable.prototype.pipe = function(dest, pipeOpts) {
  var src = this;
  var state = this._readableState;

  switch (state.pipesCount) {
    case 0:
      state.pipes = dest;
      break;
    case 1:
      state.pipes = [state.pipes, dest];
      break;
    default:
      state.pipes.push(dest);
      break;
  }
  state.pipesCount += 1;

  var doEnd = (!pipeOpts || pipeOpts.end !== false) &&
              dest !== process.stdout &&
              dest !== process.stderr;

  var endFn = doEnd ? onend : cleanup;
  if (state.endEmitted)
    process.nextTick(endFn);
  else
    src.once('end', endFn);

  dest.on('unpipe', onunpipe);
  function onunpipe(readable) {
    if (readable !== src) return;
    cleanup();
  }

  function onend() {
    dest.end();
  }

  // when the dest drains, it reduces the awaitDrain counter
  // on the source.  This would be more elegant with a .once()
  // handler in flow(), but adding and removing repeatedly is
  // too slow.
  var ondrain = pipeOnDrain(src);
  dest.on('drain', ondrain);

  function cleanup() {
    // cleanup event handlers once the pipe is broken
    dest.removeListener('close', onclose);
    dest.removeListener('finish', onfinish);
    dest.removeListener('drain', ondrain);
    dest.removeListener('error', onerror);
    dest.removeListener('unpipe', onunpipe);
    src.removeListener('end', onend);
    src.removeListener('end', cleanup);

    // if the reader is waiting for a drain event from this
    // specific writer, then it would cause it to never start
    // flowing again.
    // So, if this is awaiting a drain, then we just call it now.
    // If we don't know, then assume that we are waiting for one.
    if (!dest._writableState || dest._writableState.needDrain)
      ondrain();
  }

  // if the dest has an error, then stop piping into it.
  // however, don't suppress the throwing behavior for this.
  function onerror(er) {
    unpipe();
    dest.removeListener('error', onerror);
    if (EE.listenerCount(dest, 'error') === 0)
      dest.emit('error', er);
  }
  // This is a brutally ugly hack to make sure that our error handler
  // is attached before any userland ones.  NEVER DO THIS.
  if (!dest._events || !dest._events.error)
    dest.on('error', onerror);
  else if (isArray(dest._events.error))
    dest._events.error.unshift(onerror);
  else
    dest._events.error = [onerror, dest._events.error];



  // Both close and finish should trigger unpipe, but only once.
  function onclose() {
    dest.removeListener('finish', onfinish);
    unpipe();
  }
  dest.once('close', onclose);
  function onfinish() {
    dest.removeListener('close', onclose);
    unpipe();
  }
  dest.once('finish', onfinish);

  function unpipe() {
    src.unpipe(dest);
  }

  // tell the dest that it's being piped to
  dest.emit('pipe', src);

  // start the flow if it hasn't been started already.
  if (!state.flowing) {
    // the handler that waits for readable events after all
    // the data gets sucked out in flow.
    // This would be easier to follow with a .once() handler
    // in flow(), but that is too slow.
    this.on('readable', pipeOnReadable);

    state.flowing = true;
    process.nextTick(function() {
      flow(src);
    });
  }

  return dest;
};

function pipeOnDrain(src) {
  return function() {
    var dest = this;
    var state = src._readableState;
    state.awaitDrain--;
    if (state.awaitDrain === 0)
      flow(src);
  };
}

function flow(src) {
  var state = src._readableState;
  var chunk;
  state.awaitDrain = 0;

  function write(dest, i, list) {
    var written = dest.write(chunk);
    if (false === written) {
      state.awaitDrain++;
    }
  }

  while (state.pipesCount && null !== (chunk = src.read())) {

    if (state.pipesCount === 1)
      write(state.pipes, 0, null);
    else
      forEach(state.pipes, write);

    src.emit('data', chunk);

    // if anyone needs a drain, then we have to wait for that.
    if (state.awaitDrain > 0)
      return;
  }

  // if every destination was unpiped, either before entering this
  // function, or in the while loop, then stop flowing.
  //
  // NB: This is a pretty rare edge case.
  if (state.pipesCount === 0) {
    state.flowing = false;

    // if there were data event listeners added, then switch to old mode.
    if (EE.listenerCount(src, 'data') > 0)
      emitDataEvents(src);
    return;
  }

  // at this point, no one needed a drain, so we just ran out of data
  // on the next readable event, start it over again.
  state.ranOut = true;
}

function pipeOnReadable() {
  if (this._readableState.ranOut) {
    this._readableState.ranOut = false;
    flow(this);
  }
}


Readable.prototype.unpipe = function(dest) {
  var state = this._readableState;

  // if we're not piping anywhere, then do nothing.
  if (state.pipesCount === 0)
    return this;

  // just one destination.  most common case.
  if (state.pipesCount === 1) {
    // passed in one, but it's not the right one.
    if (dest && dest !== state.pipes)
      return this;

    if (!dest)
      dest = state.pipes;

    // got a match.
    state.pipes = null;
    state.pipesCount = 0;
    this.removeListener('readable', pipeOnReadable);
    state.flowing = false;
    if (dest)
      dest.emit('unpipe', this);
    return this;
  }

  // slow case. multiple pipe destinations.

  if (!dest) {
    // remove all.
    var dests = state.pipes;
    var len = state.pipesCount;
    state.pipes = null;
    state.pipesCount = 0;
    this.removeListener('readable', pipeOnReadable);
    state.flowing = false;

    for (var i = 0; i < len; i++)
      dests[i].emit('unpipe', this);
    return this;
  }

  // try to find the right one.
  var i = indexOf(state.pipes, dest);
  if (i === -1)
    return this;

  state.pipes.splice(i, 1);
  state.pipesCount -= 1;
  if (state.pipesCount === 1)
    state.pipes = state.pipes[0];

  dest.emit('unpipe', this);

  return this;
};

// set up data events if they are asked for
// Ensure readable listeners eventually get something
Readable.prototype.on = function(ev, fn) {
  var res = Stream.prototype.on.call(this, ev, fn);

  if (ev === 'data' && !this._readableState.flowing)
    emitDataEvents(this);

  if (ev === 'readable' && this.readable) {
    var state = this._readableState;
    if (!state.readableListening) {
      state.readableListening = true;
      state.emittedReadable = false;
      state.needReadable = true;
      if (!state.reading) {
        this.read(0);
      } else if (state.length) {
        emitReadable(this, state);
      }
    }
  }

  return res;
};
Readable.prototype.addListener = Readable.prototype.on;

// pause() and resume() are remnants of the legacy readable stream API
// If the user uses them, then switch into old mode.
Readable.prototype.resume = function() {
  emitDataEvents(this);
  this.read(0);
  this.emit('resume');
};

Readable.prototype.pause = function() {
  emitDataEvents(this, true);
  this.emit('pause');
};

function emitDataEvents(stream, startPaused) {
  var state = stream._readableState;

  if (state.flowing) {
    // https://github.com/isaacs/readable-stream/issues/16
    throw new Error('Cannot switch to old mode now.');
  }

  var paused = startPaused || false;
  var readable = false;

  // convert to an old-style stream.
  stream.readable = true;
  stream.pipe = Stream.prototype.pipe;
  stream.on = stream.addListener = Stream.prototype.on;

  stream.on('readable', function() {
    readable = true;

    var c;
    while (!paused && (null !== (c = stream.read())))
      stream.emit('data', c);

    if (c === null) {
      readable = false;
      stream._readableState.needReadable = true;
    }
  });

  stream.pause = function() {
    paused = true;
    this.emit('pause');
  };

  stream.resume = function() {
    paused = false;
    if (readable)
      process.nextTick(function() {
        stream.emit('readable');
      });
    else
      this.read(0);
    this.emit('resume');
  };

  // now make it start, just in case it hadn't already.
  stream.emit('readable');
}

// wrap an old-style stream as the async data source.
// This is *not* part of the readable stream interface.
// It is an ugly unfortunate mess of history.
Readable.prototype.wrap = function(stream) {
  var state = this._readableState;
  var paused = false;

  var self = this;
  stream.on('end', function() {
    if (state.decoder && !state.ended) {
      var chunk = state.decoder.end();
      if (chunk && chunk.length)
        self.push(chunk);
    }

    self.push(null);
  });

  stream.on('data', function(chunk) {
    if (state.decoder)
      chunk = state.decoder.write(chunk);

    // don't skip over falsy values in objectMode
    //if (state.objectMode && util.isNullOrUndefined(chunk))
    if (state.objectMode && (chunk === null || chunk === undefined))
      return;
    else if (!state.objectMode && (!chunk || !chunk.length))
      return;

    var ret = self.push(chunk);
    if (!ret) {
      paused = true;
      stream.pause();
    }
  });

  // proxy all the other methods.
  // important when wrapping filters and duplexes.
  for (var i in stream) {
    if (typeof stream[i] === 'function' &&
        typeof this[i] === 'undefined') {
      this[i] = function(method) { return function() {
        return stream[method].apply(stream, arguments);
      }}(i);
    }
  }

  // proxy certain important events.
  var events = ['error', 'close', 'destroy', 'pause', 'resume'];
  forEach(events, function(ev) {
    stream.on(ev, self.emit.bind(self, ev));
  });

  // when we try to consume some more bytes, simply unpause the
  // underlying stream.
  self._read = function(n) {
    if (paused) {
      paused = false;
      stream.resume();
    }
  };

  return self;
};



// exposed for testing purposes only.
Readable._fromList = fromList;

// Pluck off n bytes from an array of buffers.
// Length is the combined lengths of all the buffers in the list.
function fromList(n, state) {
  var list = state.buffer;
  var length = state.length;
  var stringMode = !!state.decoder;
  var objectMode = !!state.objectMode;
  var ret;

  // nothing in the list, definitely empty.
  if (list.length === 0)
    return null;

  if (length === 0)
    ret = null;
  else if (objectMode)
    ret = list.shift();
  else if (!n || n >= length) {
    // read it all, truncate the array.
    if (stringMode)
      ret = list.join('');
    else
      ret = Buffer.concat(list, length);
    list.length = 0;
  } else {
    // read just some of it.
    if (n < list[0].length) {
      // just take a part of the first list item.
      // slice is the same for buffers and strings.
      var buf = list[0];
      ret = buf.slice(0, n);
      list[0] = buf.slice(n);
    } else if (n === list[0].length) {
      // first list is a perfect match
      ret = list.shift();
    } else {
      // complex case.
      // we have enough to cover it, but it spans past the first buffer.
      if (stringMode)
        ret = '';
      else
        ret = new Buffer(n);

      var c = 0;
      for (var i = 0, l = list.length; i < l && c < n; i++) {
        var buf = list[0];
        var cpy = Math.min(n - c, buf.length);

        if (stringMode)
          ret += buf.slice(0, cpy);
        else
          buf.copy(ret, c, 0, cpy);

        if (cpy < buf.length)
          list[0] = buf.slice(cpy);
        else
          list.shift();

        c += cpy;
      }
    }
  }

  return ret;
}

function endReadable(stream) {
  var state = stream._readableState;

  // If we get here before consuming all the bytes, then that is a
  // bug in node.  Should never happen.
  if (state.length > 0)
    throw new Error('endReadable called on non-empty stream');

  if (!state.endEmitted && state.calledRead) {
    state.ended = true;
    process.nextTick(function() {
      // Check that we didn't get one last unshift.
      if (!state.endEmitted && state.length === 0) {
        state.endEmitted = true;
        stream.readable = false;
        stream.emit('end');
      }
    });
  }
}

function forEach (xs, f) {
  for (var i = 0, l = xs.length; i < l; i++) {
    f(xs[i], i);
  }
}

function indexOf (xs, x) {
  for (var i = 0, l = xs.length; i < l; i++) {
    if (xs[i] === x) return i;
  }
  return -1;
}

}).call(this,require('_process'))
},{"_process":29,"buffer":23,"core-util-is":36,"events":26,"inherits":27,"isarray":28,"stream":42,"string_decoder/":37}],34:[function(require,module,exports){
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.


// a transform stream is a readable/writable stream where you do
// something with the data.  Sometimes it's called a "filter",
// but that's not a great name for it, since that implies a thing where
// some bits pass through, and others are simply ignored.  (That would
// be a valid example of a transform, of course.)
//
// While the output is causally related to the input, it's not a
// necessarily symmetric or synchronous transformation.  For example,
// a zlib stream might take multiple plain-text writes(), and then
// emit a single compressed chunk some time in the future.
//
// Here's how this works:
//
// The Transform stream has all the aspects of the readable and writable
// stream classes.  When you write(chunk), that calls _write(chunk,cb)
// internally, and returns false if there's a lot of pending writes
// buffered up.  When you call read(), that calls _read(n) until
// there's enough pending readable data buffered up.
//
// In a transform stream, the written data is placed in a buffer.  When
// _read(n) is called, it transforms the queued up data, calling the
// buffered _write cb's as it consumes chunks.  If consuming a single
// written chunk would result in multiple output chunks, then the first
// outputted bit calls the readcb, and subsequent chunks just go into
// the read buffer, and will cause it to emit 'readable' if necessary.
//
// This way, back-pressure is actually determined by the reading side,
// since _read has to be called to start processing a new chunk.  However,
// a pathological inflate type of transform can cause excessive buffering
// here.  For example, imagine a stream where every byte of input is
// interpreted as an integer from 0-255, and then results in that many
// bytes of output.  Writing the 4 bytes {ff,ff,ff,ff} would result in
// 1kb of data being output.  In this case, you could write a very small
// amount of input, and end up with a very large amount of output.  In
// such a pathological inflating mechanism, there'd be no way to tell
// the system to stop doing the transform.  A single 4MB write could
// cause the system to run out of memory.
//
// However, even in such a pathological case, only a single written chunk
// would be consumed, and then the rest would wait (un-transformed) until
// the results of the previous transformed chunk were consumed.

module.exports = Transform;

var Duplex = require('./_stream_duplex');

/*<replacement>*/
var util = require('core-util-is');
util.inherits = require('inherits');
/*</replacement>*/

util.inherits(Transform, Duplex);


function TransformState(options, stream) {
  this.afterTransform = function(er, data) {
    return afterTransform(stream, er, data);
  };

  this.needTransform = false;
  this.transforming = false;
  this.writecb = null;
  this.writechunk = null;
}

function afterTransform(stream, er, data) {
  var ts = stream._transformState;
  ts.transforming = false;

  var cb = ts.writecb;

  if (!cb)
    return stream.emit('error', new Error('no writecb in Transform class'));

  ts.writechunk = null;
  ts.writecb = null;

  if (data !== null && data !== undefined)
    stream.push(data);

  if (cb)
    cb(er);

  var rs = stream._readableState;
  rs.reading = false;
  if (rs.needReadable || rs.length < rs.highWaterMark) {
    stream._read(rs.highWaterMark);
  }
}


function Transform(options) {
  if (!(this instanceof Transform))
    return new Transform(options);

  Duplex.call(this, options);

  var ts = this._transformState = new TransformState(options, this);

  // when the writable side finishes, then flush out anything remaining.
  var stream = this;

  // start out asking for a readable event once data is transformed.
  this._readableState.needReadable = true;

  // we have implemented the _read method, and done the other things
  // that Readable wants before the first _read call, so unset the
  // sync guard flag.
  this._readableState.sync = false;

  this.once('finish', function() {
    if ('function' === typeof this._flush)
      this._flush(function(er) {
        done(stream, er);
      });
    else
      done(stream);
  });
}

Transform.prototype.push = function(chunk, encoding) {
  this._transformState.needTransform = false;
  return Duplex.prototype.push.call(this, chunk, encoding);
};

// This is the part where you do stuff!
// override this function in implementation classes.
// 'chunk' is an input chunk.
//
// Call `push(newChunk)` to pass along transformed output
// to the readable side.  You may call 'push' zero or more times.
//
// Call `cb(err)` when you are done with this chunk.  If you pass
// an error, then that'll put the hurt on the whole operation.  If you
// never call cb(), then you'll never get another chunk.
Transform.prototype._transform = function(chunk, encoding, cb) {
  throw new Error('not implemented');
};

Transform.prototype._write = function(chunk, encoding, cb) {
  var ts = this._transformState;
  ts.writecb = cb;
  ts.writechunk = chunk;
  ts.writeencoding = encoding;
  if (!ts.transforming) {
    var rs = this._readableState;
    if (ts.needTransform ||
        rs.needReadable ||
        rs.length < rs.highWaterMark)
      this._read(rs.highWaterMark);
  }
};

// Doesn't matter what the args are here.
// _transform does all the work.
// That we got here means that the readable side wants more data.
Transform.prototype._read = function(n) {
  var ts = this._transformState;

  if (ts.writechunk !== null && ts.writecb && !ts.transforming) {
    ts.transforming = true;
    this._transform(ts.writechunk, ts.writeencoding, ts.afterTransform);
  } else {
    // mark that we need a transform, so that any data that comes in
    // will get processed, now that we've asked for it.
    ts.needTransform = true;
  }
};


function done(stream, er) {
  if (er)
    return stream.emit('error', er);

  // if there's nothing in the write buffer, then that means
  // that nothing more will ever be provided
  var ws = stream._writableState;
  var rs = stream._readableState;
  var ts = stream._transformState;

  if (ws.length)
    throw new Error('calling transform done when ws.length != 0');

  if (ts.transforming)
    throw new Error('calling transform done when still transforming');

  return stream.push(null);
}

},{"./_stream_duplex":31,"core-util-is":36,"inherits":27}],35:[function(require,module,exports){
(function (process){
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// A bit simpler than readable streams.
// Implement an async ._write(chunk, cb), and it'll handle all
// the drain event emission and buffering.

module.exports = Writable;

/*<replacement>*/
var Buffer = require('buffer').Buffer;
/*</replacement>*/

Writable.WritableState = WritableState;


/*<replacement>*/
var util = require('core-util-is');
util.inherits = require('inherits');
/*</replacement>*/

var Stream = require('stream');

util.inherits(Writable, Stream);

function WriteReq(chunk, encoding, cb) {
  this.chunk = chunk;
  this.encoding = encoding;
  this.callback = cb;
}

function WritableState(options, stream) {
  options = options || {};

  // the point at which write() starts returning false
  // Note: 0 is a valid value, means that we always return false if
  // the entire buffer is not flushed immediately on write()
  var hwm = options.highWaterMark;
  this.highWaterMark = (hwm || hwm === 0) ? hwm : 16 * 1024;

  // object stream flag to indicate whether or not this stream
  // contains buffers or objects.
  this.objectMode = !!options.objectMode;

  // cast to ints.
  this.highWaterMark = ~~this.highWaterMark;

  this.needDrain = false;
  // at the start of calling end()
  this.ending = false;
  // when end() has been called, and returned
  this.ended = false;
  // when 'finish' is emitted
  this.finished = false;

  // should we decode strings into buffers before passing to _write?
  // this is here so that some node-core streams can optimize string
  // handling at a lower level.
  var noDecode = options.decodeStrings === false;
  this.decodeStrings = !noDecode;

  // Crypto is kind of old and crusty.  Historically, its default string
  // encoding is 'binary' so we have to make this configurable.
  // Everything else in the universe uses 'utf8', though.
  this.defaultEncoding = options.defaultEncoding || 'utf8';

  // not an actual buffer we keep track of, but a measurement
  // of how much we're waiting to get pushed to some underlying
  // socket or file.
  this.length = 0;

  // a flag to see when we're in the middle of a write.
  this.writing = false;

  // a flag to be able to tell if the onwrite cb is called immediately,
  // or on a later tick.  We set this to true at first, becuase any
  // actions that shouldn't happen until "later" should generally also
  // not happen before the first write call.
  this.sync = true;

  // a flag to know if we're processing previously buffered items, which
  // may call the _write() callback in the same tick, so that we don't
  // end up in an overlapped onwrite situation.
  this.bufferProcessing = false;

  // the callback that's passed to _write(chunk,cb)
  this.onwrite = function(er) {
    onwrite(stream, er);
  };

  // the callback that the user supplies to write(chunk,encoding,cb)
  this.writecb = null;

  // the amount that is being written when _write is called.
  this.writelen = 0;

  this.buffer = [];

  // True if the error was already emitted and should not be thrown again
  this.errorEmitted = false;
}

function Writable(options) {
  var Duplex = require('./_stream_duplex');

  // Writable ctor is applied to Duplexes, though they're not
  // instanceof Writable, they're instanceof Readable.
  if (!(this instanceof Writable) && !(this instanceof Duplex))
    return new Writable(options);

  this._writableState = new WritableState(options, this);

  // legacy.
  this.writable = true;

  Stream.call(this);
}

// Otherwise people can pipe Writable streams, which is just wrong.
Writable.prototype.pipe = function() {
  this.emit('error', new Error('Cannot pipe. Not readable.'));
};


function writeAfterEnd(stream, state, cb) {
  var er = new Error('write after end');
  // TODO: defer error events consistently everywhere, not just the cb
  stream.emit('error', er);
  process.nextTick(function() {
    cb(er);
  });
}

// If we get something that is not a buffer, string, null, or undefined,
// and we're not in objectMode, then that's an error.
// Otherwise stream chunks are all considered to be of length=1, and the
// watermarks determine how many objects to keep in the buffer, rather than
// how many bytes or characters.
function validChunk(stream, state, chunk, cb) {
  var valid = true;
  if (!Buffer.isBuffer(chunk) &&
      'string' !== typeof chunk &&
      chunk !== null &&
      chunk !== undefined &&
      !state.objectMode) {
    var er = new TypeError('Invalid non-string/buffer chunk');
    stream.emit('error', er);
    process.nextTick(function() {
      cb(er);
    });
    valid = false;
  }
  return valid;
}

Writable.prototype.write = function(chunk, encoding, cb) {
  var state = this._writableState;
  var ret = false;

  if (typeof encoding === 'function') {
    cb = encoding;
    encoding = null;
  }

  if (Buffer.isBuffer(chunk))
    encoding = 'buffer';
  else if (!encoding)
    encoding = state.defaultEncoding;

  if (typeof cb !== 'function')
    cb = function() {};

  if (state.ended)
    writeAfterEnd(this, state, cb);
  else if (validChunk(this, state, chunk, cb))
    ret = writeOrBuffer(this, state, chunk, encoding, cb);

  return ret;
};

function decodeChunk(state, chunk, encoding) {
  if (!state.objectMode &&
      state.decodeStrings !== false &&
      typeof chunk === 'string') {
    chunk = new Buffer(chunk, encoding);
  }
  return chunk;
}

// if we're already writing something, then just put this
// in the queue, and wait our turn.  Otherwise, call _write
// If we return false, then we need a drain event, so set that flag.
function writeOrBuffer(stream, state, chunk, encoding, cb) {
  chunk = decodeChunk(state, chunk, encoding);
  if (Buffer.isBuffer(chunk))
    encoding = 'buffer';
  var len = state.objectMode ? 1 : chunk.length;

  state.length += len;

  var ret = state.length < state.highWaterMark;
  // we must ensure that previous needDrain will not be reset to false.
  if (!ret)
    state.needDrain = true;

  if (state.writing)
    state.buffer.push(new WriteReq(chunk, encoding, cb));
  else
    doWrite(stream, state, len, chunk, encoding, cb);

  return ret;
}

function doWrite(stream, state, len, chunk, encoding, cb) {
  state.writelen = len;
  state.writecb = cb;
  state.writing = true;
  state.sync = true;
  stream._write(chunk, encoding, state.onwrite);
  state.sync = false;
}

function onwriteError(stream, state, sync, er, cb) {
  if (sync)
    process.nextTick(function() {
      cb(er);
    });
  else
    cb(er);

  stream._writableState.errorEmitted = true;
  stream.emit('error', er);
}

function onwriteStateUpdate(state) {
  state.writing = false;
  state.writecb = null;
  state.length -= state.writelen;
  state.writelen = 0;
}

function onwrite(stream, er) {
  var state = stream._writableState;
  var sync = state.sync;
  var cb = state.writecb;

  onwriteStateUpdate(state);

  if (er)
    onwriteError(stream, state, sync, er, cb);
  else {
    // Check if we're actually ready to finish, but don't emit yet
    var finished = needFinish(stream, state);

    if (!finished && !state.bufferProcessing && state.buffer.length)
      clearBuffer(stream, state);

    if (sync) {
      process.nextTick(function() {
        afterWrite(stream, state, finished, cb);
      });
    } else {
      afterWrite(stream, state, finished, cb);
    }
  }
}

function afterWrite(stream, state, finished, cb) {
  if (!finished)
    onwriteDrain(stream, state);
  cb();
  if (finished)
    finishMaybe(stream, state);
}

// Must force callback to be called on nextTick, so that we don't
// emit 'drain' before the write() consumer gets the 'false' return
// value, and has a chance to attach a 'drain' listener.
function onwriteDrain(stream, state) {
  if (state.length === 0 && state.needDrain) {
    state.needDrain = false;
    stream.emit('drain');
  }
}


// if there's something in the buffer waiting, then process it
function clearBuffer(stream, state) {
  state.bufferProcessing = true;

  for (var c = 0; c < state.buffer.length; c++) {
    var entry = state.buffer[c];
    var chunk = entry.chunk;
    var encoding = entry.encoding;
    var cb = entry.callback;
    var len = state.objectMode ? 1 : chunk.length;

    doWrite(stream, state, len, chunk, encoding, cb);

    // if we didn't call the onwrite immediately, then
    // it means that we need to wait until it does.
    // also, that means that the chunk and cb are currently
    // being processed, so move the buffer counter past them.
    if (state.writing) {
      c++;
      break;
    }
  }

  state.bufferProcessing = false;
  if (c < state.buffer.length)
    state.buffer = state.buffer.slice(c);
  else
    state.buffer.length = 0;
}

Writable.prototype._write = function(chunk, encoding, cb) {
  cb(new Error('not implemented'));
};

Writable.prototype.end = function(chunk, encoding, cb) {
  var state = this._writableState;

  if (typeof chunk === 'function') {
    cb = chunk;
    chunk = null;
    encoding = null;
  } else if (typeof encoding === 'function') {
    cb = encoding;
    encoding = null;
  }

  if (typeof chunk !== 'undefined' && chunk !== null)
    this.write(chunk, encoding);

  // ignore unnecessary end() calls.
  if (!state.ending && !state.finished)
    endWritable(this, state, cb);
};


function needFinish(stream, state) {
  return (state.ending &&
          state.length === 0 &&
          !state.finished &&
          !state.writing);
}

function finishMaybe(stream, state) {
  var need = needFinish(stream, state);
  if (need) {
    state.finished = true;
    stream.emit('finish');
  }
  return need;
}

function endWritable(stream, state, cb) {
  state.ending = true;
  finishMaybe(stream, state);
  if (cb) {
    if (state.finished)
      process.nextTick(cb);
    else
      stream.once('finish', cb);
  }
  state.ended = true;
}

}).call(this,require('_process'))
},{"./_stream_duplex":31,"_process":29,"buffer":23,"core-util-is":36,"inherits":27,"stream":42}],36:[function(require,module,exports){
(function (Buffer){
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// NOTE: These type checking functions intentionally don't use `instanceof`
// because it is fragile and can be easily faked with `Object.create()`.
function isArray(ar) {
  return Array.isArray(ar);
}
exports.isArray = isArray;

function isBoolean(arg) {
  return typeof arg === 'boolean';
}
exports.isBoolean = isBoolean;

function isNull(arg) {
  return arg === null;
}
exports.isNull = isNull;

function isNullOrUndefined(arg) {
  return arg == null;
}
exports.isNullOrUndefined = isNullOrUndefined;

function isNumber(arg) {
  return typeof arg === 'number';
}
exports.isNumber = isNumber;

function isString(arg) {
  return typeof arg === 'string';
}
exports.isString = isString;

function isSymbol(arg) {
  return typeof arg === 'symbol';
}
exports.isSymbol = isSymbol;

function isUndefined(arg) {
  return arg === void 0;
}
exports.isUndefined = isUndefined;

function isRegExp(re) {
  return isObject(re) && objectToString(re) === '[object RegExp]';
}
exports.isRegExp = isRegExp;

function isObject(arg) {
  return typeof arg === 'object' && arg !== null;
}
exports.isObject = isObject;

function isDate(d) {
  return isObject(d) && objectToString(d) === '[object Date]';
}
exports.isDate = isDate;

function isError(e) {
  return isObject(e) &&
      (objectToString(e) === '[object Error]' || e instanceof Error);
}
exports.isError = isError;

function isFunction(arg) {
  return typeof arg === 'function';
}
exports.isFunction = isFunction;

function isPrimitive(arg) {
  return arg === null ||
         typeof arg === 'boolean' ||
         typeof arg === 'number' ||
         typeof arg === 'string' ||
         typeof arg === 'symbol' ||  // ES6 symbol
         typeof arg === 'undefined';
}
exports.isPrimitive = isPrimitive;

function isBuffer(arg) {
  return Buffer.isBuffer(arg);
}
exports.isBuffer = isBuffer;

function objectToString(o) {
  return Object.prototype.toString.call(o);
}
}).call(this,require("buffer").Buffer)
},{"buffer":23}],37:[function(require,module,exports){
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

var Buffer = require('buffer').Buffer;

var isBufferEncoding = Buffer.isEncoding
  || function(encoding) {
       switch (encoding && encoding.toLowerCase()) {
         case 'hex': case 'utf8': case 'utf-8': case 'ascii': case 'binary': case 'base64': case 'ucs2': case 'ucs-2': case 'utf16le': case 'utf-16le': case 'raw': return true;
         default: return false;
       }
     }


function assertEncoding(encoding) {
  if (encoding && !isBufferEncoding(encoding)) {
    throw new Error('Unknown encoding: ' + encoding);
  }
}

var StringDecoder = exports.StringDecoder = function(encoding) {
  this.encoding = (encoding || 'utf8').toLowerCase().replace(/[-_]/, '');
  assertEncoding(encoding);
  switch (this.encoding) {
    case 'utf8':
      // CESU-8 represents each of Surrogate Pair by 3-bytes
      this.surrogateSize = 3;
      break;
    case 'ucs2':
    case 'utf16le':
      // UTF-16 represents each of Surrogate Pair by 2-bytes
      this.surrogateSize = 2;
      this.detectIncompleteChar = utf16DetectIncompleteChar;
      break;
    case 'base64':
      // Base-64 stores 3 bytes in 4 chars, and pads the remainder.
      this.surrogateSize = 3;
      this.detectIncompleteChar = base64DetectIncompleteChar;
      break;
    default:
      this.write = passThroughWrite;
      return;
  }

  this.charBuffer = new Buffer(6);
  this.charReceived = 0;
  this.charLength = 0;
};


StringDecoder.prototype.write = function(buffer) {
  var charStr = '';
  var offset = 0;

  // if our last write ended with an incomplete multibyte character
  while (this.charLength) {
    // determine how many remaining bytes this buffer has to offer for this char
    var i = (buffer.length >= this.charLength - this.charReceived) ?
                this.charLength - this.charReceived :
                buffer.length;

    // add the new bytes to the char buffer
    buffer.copy(this.charBuffer, this.charReceived, offset, i);
    this.charReceived += (i - offset);
    offset = i;

    if (this.charReceived < this.charLength) {
      // still not enough chars in this buffer? wait for more ...
      return '';
    }

    // get the character that was split
    charStr = this.charBuffer.slice(0, this.charLength).toString(this.encoding);

    // lead surrogate (D800-DBFF) is also the incomplete character
    var charCode = charStr.charCodeAt(charStr.length - 1);
    if (charCode >= 0xD800 && charCode <= 0xDBFF) {
      this.charLength += this.surrogateSize;
      charStr = '';
      continue;
    }
    this.charReceived = this.charLength = 0;

    // if there are no more bytes in this buffer, just emit our char
    if (i == buffer.length) return charStr;

    // otherwise cut off the characters end from the beginning of this buffer
    buffer = buffer.slice(i, buffer.length);
    break;
  }

  var lenIncomplete = this.detectIncompleteChar(buffer);

  var end = buffer.length;
  if (this.charLength) {
    // buffer the incomplete character bytes we got
    buffer.copy(this.charBuffer, 0, buffer.length - lenIncomplete, end);
    this.charReceived = lenIncomplete;
    end -= lenIncomplete;
  }

  charStr += buffer.toString(this.encoding, 0, end);

  var end = charStr.length - 1;
  var charCode = charStr.charCodeAt(end);
  // lead surrogate (D800-DBFF) is also the incomplete character
  if (charCode >= 0xD800 && charCode <= 0xDBFF) {
    var size = this.surrogateSize;
    this.charLength += size;
    this.charReceived += size;
    this.charBuffer.copy(this.charBuffer, size, 0, size);
    this.charBuffer.write(charStr.charAt(charStr.length - 1), this.encoding);
    return charStr.substring(0, end);
  }

  // or just emit the charStr
  return charStr;
};

StringDecoder.prototype.detectIncompleteChar = function(buffer) {
  // determine how many bytes we have to check at the end of this buffer
  var i = (buffer.length >= 3) ? 3 : buffer.length;

  // Figure out if one of the last i bytes of our buffer announces an
  // incomplete char.
  for (; i > 0; i--) {
    var c = buffer[buffer.length - i];

    // See http://en.wikipedia.org/wiki/UTF-8#Description

    // 110XXXXX
    if (i == 1 && c >> 5 == 0x06) {
      this.charLength = 2;
      break;
    }

    // 1110XXXX
    if (i <= 2 && c >> 4 == 0x0E) {
      this.charLength = 3;
      break;
    }

    // 11110XXX
    if (i <= 3 && c >> 3 == 0x1E) {
      this.charLength = 4;
      break;
    }
  }

  return i;
};

StringDecoder.prototype.end = function(buffer) {
  var res = '';
  if (buffer && buffer.length)
    res = this.write(buffer);

  if (this.charReceived) {
    var cr = this.charReceived;
    var buf = this.charBuffer;
    var enc = this.encoding;
    res += buf.slice(0, cr).toString(enc);
  }

  return res;
};

function passThroughWrite(buffer) {
  return buffer.toString(this.encoding);
}

function utf16DetectIncompleteChar(buffer) {
  var incomplete = this.charReceived = buffer.length % 2;
  this.charLength = incomplete ? 2 : 0;
  return incomplete;
}

function base64DetectIncompleteChar(buffer) {
  var incomplete = this.charReceived = buffer.length % 3;
  this.charLength = incomplete ? 3 : 0;
  return incomplete;
}

},{"buffer":23}],38:[function(require,module,exports){
module.exports = require("./lib/_stream_passthrough.js")

},{"./lib/_stream_passthrough.js":32}],39:[function(require,module,exports){
exports = module.exports = require('./lib/_stream_readable.js');
exports.Readable = exports;
exports.Writable = require('./lib/_stream_writable.js');
exports.Duplex = require('./lib/_stream_duplex.js');
exports.Transform = require('./lib/_stream_transform.js');
exports.PassThrough = require('./lib/_stream_passthrough.js');

},{"./lib/_stream_duplex.js":31,"./lib/_stream_passthrough.js":32,"./lib/_stream_readable.js":33,"./lib/_stream_transform.js":34,"./lib/_stream_writable.js":35}],40:[function(require,module,exports){
module.exports = require("./lib/_stream_transform.js")

},{"./lib/_stream_transform.js":34}],41:[function(require,module,exports){
module.exports = require("./lib/_stream_writable.js")

},{"./lib/_stream_writable.js":35}],42:[function(require,module,exports){
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

module.exports = Stream;

var EE = require('events').EventEmitter;
var inherits = require('inherits');

inherits(Stream, EE);
Stream.Readable = require('readable-stream/readable.js');
Stream.Writable = require('readable-stream/writable.js');
Stream.Duplex = require('readable-stream/duplex.js');
Stream.Transform = require('readable-stream/transform.js');
Stream.PassThrough = require('readable-stream/passthrough.js');

// Backwards-compat with node 0.4.x
Stream.Stream = Stream;



// old-style streams.  Note that the pipe method (the only relevant
// part of this class) is overridden in the Readable class.

function Stream() {
  EE.call(this);
}

Stream.prototype.pipe = function(dest, options) {
  var source = this;

  function ondata(chunk) {
    if (dest.writable) {
      if (false === dest.write(chunk) && source.pause) {
        source.pause();
      }
    }
  }

  source.on('data', ondata);

  function ondrain() {
    if (source.readable && source.resume) {
      source.resume();
    }
  }

  dest.on('drain', ondrain);

  // If the 'end' option is not supplied, dest.end() will be called when
  // source gets the 'end' or 'close' events.  Only dest.end() once.
  if (!dest._isStdio && (!options || options.end !== false)) {
    source.on('end', onend);
    source.on('close', onclose);
  }

  var didOnEnd = false;
  function onend() {
    if (didOnEnd) return;
    didOnEnd = true;

    dest.end();
  }


  function onclose() {
    if (didOnEnd) return;
    didOnEnd = true;

    if (typeof dest.destroy === 'function') dest.destroy();
  }

  // don't leave dangling pipes when there are errors.
  function onerror(er) {
    cleanup();
    if (EE.listenerCount(this, 'error') === 0) {
      throw er; // Unhandled stream error in pipe.
    }
  }

  source.on('error', onerror);
  dest.on('error', onerror);

  // remove all the event listeners that were added.
  function cleanup() {
    source.removeListener('data', ondata);
    dest.removeListener('drain', ondrain);

    source.removeListener('end', onend);
    source.removeListener('close', onclose);

    source.removeListener('error', onerror);
    dest.removeListener('error', onerror);

    source.removeListener('end', cleanup);
    source.removeListener('close', cleanup);

    dest.removeListener('close', cleanup);
  }

  source.on('end', cleanup);
  source.on('close', cleanup);

  dest.on('close', cleanup);

  dest.emit('pipe', source);

  // Allow for unix-like usage: A.pipe(B).pipe(C)
  return dest;
};

},{"events":26,"inherits":27,"readable-stream/duplex.js":30,"readable-stream/passthrough.js":38,"readable-stream/readable.js":39,"readable-stream/transform.js":40,"readable-stream/writable.js":41}],43:[function(require,module,exports){
module.exports = function isBuffer(arg) {
  return arg && typeof arg === 'object'
    && typeof arg.copy === 'function'
    && typeof arg.fill === 'function'
    && typeof arg.readUInt8 === 'function';
}
},{}],44:[function(require,module,exports){
(function (process,global){
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

var formatRegExp = /%[sdj%]/g;
exports.format = function(f) {
  if (!isString(f)) {
    var objects = [];
    for (var i = 0; i < arguments.length; i++) {
      objects.push(inspect(arguments[i]));
    }
    return objects.join(' ');
  }

  var i = 1;
  var args = arguments;
  var len = args.length;
  var str = String(f).replace(formatRegExp, function(x) {
    if (x === '%%') return '%';
    if (i >= len) return x;
    switch (x) {
      case '%s': return String(args[i++]);
      case '%d': return Number(args[i++]);
      case '%j':
        try {
          return JSON.stringify(args[i++]);
        } catch (_) {
          return '[Circular]';
        }
      default:
        return x;
    }
  });
  for (var x = args[i]; i < len; x = args[++i]) {
    if (isNull(x) || !isObject(x)) {
      str += ' ' + x;
    } else {
      str += ' ' + inspect(x);
    }
  }
  return str;
};


// Mark that a method should not be used.
// Returns a modified function which warns once by default.
// If --no-deprecation is set, then it is a no-op.
exports.deprecate = function(fn, msg) {
  // Allow for deprecating things in the process of starting up.
  if (isUndefined(global.process)) {
    return function() {
      return exports.deprecate(fn, msg).apply(this, arguments);
    };
  }

  if (process.noDeprecation === true) {
    return fn;
  }

  var warned = false;
  function deprecated() {
    if (!warned) {
      if (process.throwDeprecation) {
        throw new Error(msg);
      } else if (process.traceDeprecation) {
        console.trace(msg);
      } else {
        console.error(msg);
      }
      warned = true;
    }
    return fn.apply(this, arguments);
  }

  return deprecated;
};


var debugs = {};
var debugEnviron;
exports.debuglog = function(set) {
  if (isUndefined(debugEnviron))
    debugEnviron = process.env.NODE_DEBUG || '';
  set = set.toUpperCase();
  if (!debugs[set]) {
    if (new RegExp('\\b' + set + '\\b', 'i').test(debugEnviron)) {
      var pid = process.pid;
      debugs[set] = function() {
        var msg = exports.format.apply(exports, arguments);
        console.error('%s %d: %s', set, pid, msg);
      };
    } else {
      debugs[set] = function() {};
    }
  }
  return debugs[set];
};


/**
 * Echos the value of a value. Trys to print the value out
 * in the best way possible given the different types.
 *
 * @param {Object} obj The object to print out.
 * @param {Object} opts Optional options object that alters the output.
 */
/* legacy: obj, showHidden, depth, colors*/
function inspect(obj, opts) {
  // default options
  var ctx = {
    seen: [],
    stylize: stylizeNoColor
  };
  // legacy...
  if (arguments.length >= 3) ctx.depth = arguments[2];
  if (arguments.length >= 4) ctx.colors = arguments[3];
  if (isBoolean(opts)) {
    // legacy...
    ctx.showHidden = opts;
  } else if (opts) {
    // got an "options" object
    exports._extend(ctx, opts);
  }
  // set default options
  if (isUndefined(ctx.showHidden)) ctx.showHidden = false;
  if (isUndefined(ctx.depth)) ctx.depth = 2;
  if (isUndefined(ctx.colors)) ctx.colors = false;
  if (isUndefined(ctx.customInspect)) ctx.customInspect = true;
  if (ctx.colors) ctx.stylize = stylizeWithColor;
  return formatValue(ctx, obj, ctx.depth);
}
exports.inspect = inspect;


// http://en.wikipedia.org/wiki/ANSI_escape_code#graphics
inspect.colors = {
  'bold' : [1, 22],
  'italic' : [3, 23],
  'underline' : [4, 24],
  'inverse' : [7, 27],
  'white' : [37, 39],
  'grey' : [90, 39],
  'black' : [30, 39],
  'blue' : [34, 39],
  'cyan' : [36, 39],
  'green' : [32, 39],
  'magenta' : [35, 39],
  'red' : [31, 39],
  'yellow' : [33, 39]
};

// Don't use 'blue' not visible on cmd.exe
inspect.styles = {
  'special': 'cyan',
  'number': 'yellow',
  'boolean': 'yellow',
  'undefined': 'grey',
  'null': 'bold',
  'string': 'green',
  'date': 'magenta',
  // "name": intentionally not styling
  'regexp': 'red'
};


function stylizeWithColor(str, styleType) {
  var style = inspect.styles[styleType];

  if (style) {
    return '\u001b[' + inspect.colors[style][0] + 'm' + str +
           '\u001b[' + inspect.colors[style][1] + 'm';
  } else {
    return str;
  }
}


function stylizeNoColor(str, styleType) {
  return str;
}


function arrayToHash(array) {
  var hash = {};

  array.forEach(function(val, idx) {
    hash[val] = true;
  });

  return hash;
}


function formatValue(ctx, value, recurseTimes) {
  // Provide a hook for user-specified inspect functions.
  // Check that value is an object with an inspect function on it
  if (ctx.customInspect &&
      value &&
      isFunction(value.inspect) &&
      // Filter out the util module, it's inspect function is special
      value.inspect !== exports.inspect &&
      // Also filter out any prototype objects using the circular check.
      !(value.constructor && value.constructor.prototype === value)) {
    var ret = value.inspect(recurseTimes, ctx);
    if (!isString(ret)) {
      ret = formatValue(ctx, ret, recurseTimes);
    }
    return ret;
  }

  // Primitive types cannot have properties
  var primitive = formatPrimitive(ctx, value);
  if (primitive) {
    return primitive;
  }

  // Look up the keys of the object.
  var keys = Object.keys(value);
  var visibleKeys = arrayToHash(keys);

  if (ctx.showHidden) {
    keys = Object.getOwnPropertyNames(value);
  }

  // IE doesn't make error fields non-enumerable
  // http://msdn.microsoft.com/en-us/library/ie/dww52sbt(v=vs.94).aspx
  if (isError(value)
      && (keys.indexOf('message') >= 0 || keys.indexOf('description') >= 0)) {
    return formatError(value);
  }

  // Some type of object without properties can be shortcutted.
  if (keys.length === 0) {
    if (isFunction(value)) {
      var name = value.name ? ': ' + value.name : '';
      return ctx.stylize('[Function' + name + ']', 'special');
    }
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    }
    if (isDate(value)) {
      return ctx.stylize(Date.prototype.toString.call(value), 'date');
    }
    if (isError(value)) {
      return formatError(value);
    }
  }

  var base = '', array = false, braces = ['{', '}'];

  // Make Array say that they are Array
  if (isArray(value)) {
    array = true;
    braces = ['[', ']'];
  }

  // Make functions say that they are functions
  if (isFunction(value)) {
    var n = value.name ? ': ' + value.name : '';
    base = ' [Function' + n + ']';
  }

  // Make RegExps say that they are RegExps
  if (isRegExp(value)) {
    base = ' ' + RegExp.prototype.toString.call(value);
  }

  // Make dates with properties first say the date
  if (isDate(value)) {
    base = ' ' + Date.prototype.toUTCString.call(value);
  }

  // Make error with message first say the error
  if (isError(value)) {
    base = ' ' + formatError(value);
  }

  if (keys.length === 0 && (!array || value.length == 0)) {
    return braces[0] + base + braces[1];
  }

  if (recurseTimes < 0) {
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    } else {
      return ctx.stylize('[Object]', 'special');
    }
  }

  ctx.seen.push(value);

  var output;
  if (array) {
    output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
  } else {
    output = keys.map(function(key) {
      return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
    });
  }

  ctx.seen.pop();

  return reduceToSingleString(output, base, braces);
}


function formatPrimitive(ctx, value) {
  if (isUndefined(value))
    return ctx.stylize('undefined', 'undefined');
  if (isString(value)) {
    var simple = '\'' + JSON.stringify(value).replace(/^"|"$/g, '')
                                             .replace(/'/g, "\\'")
                                             .replace(/\\"/g, '"') + '\'';
    return ctx.stylize(simple, 'string');
  }
  if (isNumber(value))
    return ctx.stylize('' + value, 'number');
  if (isBoolean(value))
    return ctx.stylize('' + value, 'boolean');
  // For some reason typeof null is "object", so special case here.
  if (isNull(value))
    return ctx.stylize('null', 'null');
}


function formatError(value) {
  return '[' + Error.prototype.toString.call(value) + ']';
}


function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
  var output = [];
  for (var i = 0, l = value.length; i < l; ++i) {
    if (hasOwnProperty(value, String(i))) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          String(i), true));
    } else {
      output.push('');
    }
  }
  keys.forEach(function(key) {
    if (!key.match(/^\d+$/)) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          key, true));
    }
  });
  return output;
}


function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
  var name, str, desc;
  desc = Object.getOwnPropertyDescriptor(value, key) || { value: value[key] };
  if (desc.get) {
    if (desc.set) {
      str = ctx.stylize('[Getter/Setter]', 'special');
    } else {
      str = ctx.stylize('[Getter]', 'special');
    }
  } else {
    if (desc.set) {
      str = ctx.stylize('[Setter]', 'special');
    }
  }
  if (!hasOwnProperty(visibleKeys, key)) {
    name = '[' + key + ']';
  }
  if (!str) {
    if (ctx.seen.indexOf(desc.value) < 0) {
      if (isNull(recurseTimes)) {
        str = formatValue(ctx, desc.value, null);
      } else {
        str = formatValue(ctx, desc.value, recurseTimes - 1);
      }
      if (str.indexOf('\n') > -1) {
        if (array) {
          str = str.split('\n').map(function(line) {
            return '  ' + line;
          }).join('\n').substr(2);
        } else {
          str = '\n' + str.split('\n').map(function(line) {
            return '   ' + line;
          }).join('\n');
        }
      }
    } else {
      str = ctx.stylize('[Circular]', 'special');
    }
  }
  if (isUndefined(name)) {
    if (array && key.match(/^\d+$/)) {
      return str;
    }
    name = JSON.stringify('' + key);
    if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
      name = name.substr(1, name.length - 2);
      name = ctx.stylize(name, 'name');
    } else {
      name = name.replace(/'/g, "\\'")
                 .replace(/\\"/g, '"')
                 .replace(/(^"|"$)/g, "'");
      name = ctx.stylize(name, 'string');
    }
  }

  return name + ': ' + str;
}


function reduceToSingleString(output, base, braces) {
  var numLinesEst = 0;
  var length = output.reduce(function(prev, cur) {
    numLinesEst++;
    if (cur.indexOf('\n') >= 0) numLinesEst++;
    return prev + cur.replace(/\u001b\[\d\d?m/g, '').length + 1;
  }, 0);

  if (length > 60) {
    return braces[0] +
           (base === '' ? '' : base + '\n ') +
           ' ' +
           output.join(',\n  ') +
           ' ' +
           braces[1];
  }

  return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
}


// NOTE: These type checking functions intentionally don't use `instanceof`
// because it is fragile and can be easily faked with `Object.create()`.
function isArray(ar) {
  return Array.isArray(ar);
}
exports.isArray = isArray;

function isBoolean(arg) {
  return typeof arg === 'boolean';
}
exports.isBoolean = isBoolean;

function isNull(arg) {
  return arg === null;
}
exports.isNull = isNull;

function isNullOrUndefined(arg) {
  return arg == null;
}
exports.isNullOrUndefined = isNullOrUndefined;

function isNumber(arg) {
  return typeof arg === 'number';
}
exports.isNumber = isNumber;

function isString(arg) {
  return typeof arg === 'string';
}
exports.isString = isString;

function isSymbol(arg) {
  return typeof arg === 'symbol';
}
exports.isSymbol = isSymbol;

function isUndefined(arg) {
  return arg === void 0;
}
exports.isUndefined = isUndefined;

function isRegExp(re) {
  return isObject(re) && objectToString(re) === '[object RegExp]';
}
exports.isRegExp = isRegExp;

function isObject(arg) {
  return typeof arg === 'object' && arg !== null;
}
exports.isObject = isObject;

function isDate(d) {
  return isObject(d) && objectToString(d) === '[object Date]';
}
exports.isDate = isDate;

function isError(e) {
  return isObject(e) &&
      (objectToString(e) === '[object Error]' || e instanceof Error);
}
exports.isError = isError;

function isFunction(arg) {
  return typeof arg === 'function';
}
exports.isFunction = isFunction;

function isPrimitive(arg) {
  return arg === null ||
         typeof arg === 'boolean' ||
         typeof arg === 'number' ||
         typeof arg === 'string' ||
         typeof arg === 'symbol' ||  // ES6 symbol
         typeof arg === 'undefined';
}
exports.isPrimitive = isPrimitive;

exports.isBuffer = require('./support/isBuffer');

function objectToString(o) {
  return Object.prototype.toString.call(o);
}


function pad(n) {
  return n < 10 ? '0' + n.toString(10) : n.toString(10);
}


var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',
              'Oct', 'Nov', 'Dec'];

// 26 Feb 16:19:34
function timestamp() {
  var d = new Date();
  var time = [pad(d.getHours()),
              pad(d.getMinutes()),
              pad(d.getSeconds())].join(':');
  return [d.getDate(), months[d.getMonth()], time].join(' ');
}


// log is just a thin wrapper to console.log that prepends a timestamp
exports.log = function() {
  console.log('%s - %s', timestamp(), exports.format.apply(exports, arguments));
};


/**
 * Inherit the prototype methods from one constructor into another.
 *
 * The Function.prototype.inherits from lang.js rewritten as a standalone
 * function (not on Function.prototype). NOTE: If this file is to be loaded
 * during bootstrapping this function needs to be rewritten using some native
 * functions as prototype setup using normal JavaScript does not work as
 * expected during bootstrapping (see mirror.js in r114903).
 *
 * @param {function} ctor Constructor function which needs to inherit the
 *     prototype.
 * @param {function} superCtor Constructor function to inherit prototype from.
 */
exports.inherits = require('inherits');

exports._extend = function(origin, add) {
  // Don't do anything if add isn't an object
  if (!add || !isObject(add)) return origin;

  var keys = Object.keys(add);
  var i = keys.length;
  while (i--) {
    origin[keys[i]] = add[keys[i]];
  }
  return origin;
};

function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

}).call(this,require('_process'),typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./support/isBuffer":43,"_process":29,"inherits":27}]},{},[6])(6)
});