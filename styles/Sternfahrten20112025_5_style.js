var size = 0;
var placement = 'point';
function categories_Sternfahrten20112025_5(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                var valueStr = (value !== null && value !== undefined) ? value.toString() : 'default';
                switch(valueStr) {case 'Sternfahrt 2011 - Ahrensfelde':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(29,91,122,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 2.508}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Sternfahrt 2012 - Ahrensfelde':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(32,100,133,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 2.508}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Sternfahrt 2014 - Stettin':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(36,109,144,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 2.508}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Sternfahrt 2015 - Strausberg':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(40,118,155,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 2.508}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Sternfahrt 2016 - Oranienburg':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(43,127,166,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 2.508}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Sternfahrt 2017 - Frankfurt':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(47,136,177,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 2.508}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Sternfahrt 2018 - Nauen':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(50,145,189,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 2.508}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Sternfahrt 2019 - Stettin':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(54,155,200,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 2.508}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Sternfahrt 2021 - Alt-Tempelhof':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(58,164,211,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 2.508}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Sternfahrt 2022 - Brandenburg':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(61,173,222,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 2.508}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Sternfahrt 2023 - Leipzig':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(65,182,233,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 2.508}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Sternfahrt 2024 - Dessau':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(68,191,244,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 2.508}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Sternfahrt 2025 - Königs Wusterhausen':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(72,200,255,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 2.508}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_Sternfahrten20112025_5 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("Name");
    var labelText = "";
    size = 0;
    var labelFont = "10px, sans-serif";
    var labelFill = "#000000";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'line';
    if ("" !== null) {
        labelText = String("");
    }
    
var style = categories_Sternfahrten20112025_5(feature, value, size, resolution, labelText,
                          labelFont, labelFill, bufferColor,
                          bufferWidth, placement);

    return style;
};
