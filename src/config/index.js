'use strict';

module.exports = {
    port: 1000,
    version: '1.0',
    ROUTES: {
        
        'api/1.0/content': {
            port: 8080,
            url: 'http://localhost',
            uri: 'gateway/1.0/'
        },

        'api/1.0/upload': {
            port: 8080,
            url: 'http://localhost',
            uri: 'gateway/1.0/'
        }
    }
};