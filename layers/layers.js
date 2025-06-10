var wms_layers = [];


        var lyr_OpenStreetMapde_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap.de',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap contributors, under ODbL</a>',
                url: 'https://b.tile.openstreetmap.de/{z}/{x}/{y}.png'
            })
        });

        var lyr_GoogleSatelite_1 = new ol.layer.Tile({
            'title': 'Google Satelite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://www.google.com/maps/vt?lyrs=s@180&gl=cn&x={x}&y={y}&z={z}'
            })
        });

        var lyr_ESRISatelite_2 = new ol.layer.Tile({
            'title': 'ESRI Satelite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://services.arcgisonline.com/arcgis/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}.png'
            })
        });

        var lyr_ESRIGrenzen_3 = new ol.layer.Tile({
            'title': 'ESRI Grenzen',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/Reference/World_Boundaries_and_Places/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_SternfahrtenOffen_4 = new ol.format.GeoJSON();
var features_SternfahrtenOffen_4 = format_SternfahrtenOffen_4.readFeatures(json_SternfahrtenOffen_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SternfahrtenOffen_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SternfahrtenOffen_4.addFeatures(features_SternfahrtenOffen_4);
var lyr_SternfahrtenOffen_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SternfahrtenOffen_4, 
                style: style_SternfahrtenOffen_4,
                popuplayertitle: "Sternfahrten Offen",
                interactive: true,
                title: '<img src="styles/legend/SternfahrtenOffen_4.png" /> Sternfahrten Offen'
            });
var format_Sternfahrten20112025_5 = new ol.format.GeoJSON();
var features_Sternfahrten20112025_5 = format_Sternfahrten20112025_5.readFeatures(json_Sternfahrten20112025_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sternfahrten20112025_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sternfahrten20112025_5.addFeatures(features_Sternfahrten20112025_5);
var lyr_Sternfahrten20112025_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sternfahrten20112025_5, 
                style: style_Sternfahrten20112025_5,
                popuplayertitle: "Sternfahrten 2011-2025",
                interactive: true,
    title: 'Sternfahrten 2011-2025<br />\
    <img src="styles/legend/Sternfahrten20112025_5_0.png" /> Sternfahrt 2011 - Ahrensfelde<br />\
    <img src="styles/legend/Sternfahrten20112025_5_1.png" /> Sternfahrt 2012 - Ahrensfelde<br />\
    <img src="styles/legend/Sternfahrten20112025_5_2.png" /> Sternfahrt 2014 - Stettin<br />\
    <img src="styles/legend/Sternfahrten20112025_5_3.png" /> Sternfahrt 2015 - Strausberg<br />\
    <img src="styles/legend/Sternfahrten20112025_5_4.png" /> Sternfahrt 2016 - Oranienburg<br />\
    <img src="styles/legend/Sternfahrten20112025_5_5.png" /> Sternfahrt 2017 - Frankfurt<br />\
    <img src="styles/legend/Sternfahrten20112025_5_6.png" /> Sternfahrt 2018 - Nauen<br />\
    <img src="styles/legend/Sternfahrten20112025_5_7.png" /> Sternfahrt 2019 - Stettin<br />\
    <img src="styles/legend/Sternfahrten20112025_5_8.png" /> Sternfahrt 2021 - Alt-Tempelhof<br />\
    <img src="styles/legend/Sternfahrten20112025_5_9.png" /> Sternfahrt 2022 - Brandenburg<br />\
    <img src="styles/legend/Sternfahrten20112025_5_10.png" /> Sternfahrt 2023 - Leipzig<br />\
    <img src="styles/legend/Sternfahrten20112025_5_11.png" /> Sternfahrt 2024 - Dessau<br />\
    <img src="styles/legend/Sternfahrten20112025_5_12.png" /> Sternfahrt 2025 - Königs Wusterhausen<br />'
        });
var format_Fotos_6 = new ol.format.GeoJSON();
var features_Fotos_6 = format_Fotos_6.readFeatures(json_Fotos_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Fotos_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Fotos_6.addFeatures(features_Fotos_6);
var lyr_Fotos_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Fotos_6, 
                style: style_Fotos_6,
                popuplayertitle: "Fotos",
                interactive: true,
                title: '<img src="styles/legend/Fotos_6.png" /> Fotos'
            });
var group_Hintergrundkarten = new ol.layer.Group({
                                layers: [lyr_OpenStreetMapde_0,lyr_GoogleSatelite_1,lyr_ESRISatelite_2,lyr_ESRIGrenzen_3,],
                                fold: "open",
                                title: "Hintergrundkarten"});

lyr_OpenStreetMapde_0.setVisible(true);lyr_GoogleSatelite_1.setVisible(true);lyr_ESRISatelite_2.setVisible(true);lyr_ESRIGrenzen_3.setVisible(true);lyr_SternfahrtenOffen_4.setVisible(false);lyr_Sternfahrten20112025_5.setVisible(true);lyr_Fotos_6.setVisible(true);
var layersList = [group_Hintergrundkarten,lyr_SternfahrtenOffen_4,lyr_Sternfahrten20112025_5,lyr_Fotos_6];
lyr_SternfahrtenOffen_4.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', });
lyr_Sternfahrten20112025_5.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'Datum': 'Datum', 'Länge': 'Länge', });
lyr_Fotos_6.set('fieldAliases', {'fid': 'fid', 'photo': 'photo', 'filename': 'filename', 'directory': 'directory', 'altitude': 'altitude', 'direction': 'direction', 'rotation': 'rotation', 'longitude': 'longitude', 'latitude': 'latitude', 'timestamp': 'timestamp', });
lyr_SternfahrtenOffen_4.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', });
lyr_Sternfahrten20112025_5.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'Datum': 'DateTime', 'Länge': 'TextEdit', });
lyr_Fotos_6.set('fieldImages', {'fid': 'TextEdit', 'photo': 'ExternalResource', 'filename': 'TextEdit', 'directory': 'ExternalResource', 'altitude': 'TextEdit', 'direction': 'TextEdit', 'rotation': 'Range', 'longitude': 'TextEdit', 'latitude': 'TextEdit', 'timestamp': 'DateTime', });
lyr_SternfahrtenOffen_4.set('fieldLabels', {'fid': 'hidden field', 'Name': 'no label', });
lyr_Sternfahrten20112025_5.set('fieldLabels', {'fid': 'hidden field', 'Name': 'no label', 'Datum': 'inline label - always visible', 'Länge': 'inline label - always visible', });
lyr_Fotos_6.set('fieldLabels', {'fid': 'hidden field', 'photo': 'no label', 'filename': 'no label', 'directory': 'hidden field', 'altitude': 'hidden field', 'direction': 'hidden field', 'rotation': 'hidden field', 'longitude': 'hidden field', 'latitude': 'hidden field', 'timestamp': 'hidden field', });
lyr_Fotos_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});