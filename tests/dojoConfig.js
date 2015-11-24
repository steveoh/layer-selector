/* global JasmineFaviconReporter, jasmineRequire */
window.dojoConfig = {
    baseUrl: '../bower_components',
    packages: [
        'dojo',
        'dijit',
        'dojox',
        'esri',
        {
            name: 'layer-selector',
            location: '../../'
        }, {
            name: 'stubmodule',
            main: 'stub-module'
        }
    ],
    has: {'dojo-undef-api': true}
};

// for jasmine-favicon-reporter
try {
    jasmine.getEnv().addReporter(new JasmineFaviconReporter());
    jasmine.getEnv().addReporter(new jasmineRequire.JSReporter2());
} catch (e) {

}