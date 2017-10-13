import fetch from 'node-fetch';
import createRouter from '../lib/router';

module.exports = () => {
    const router = createRouter();
    
    router.get('/hello', ctx => {
        console.log('coming here');
        return fetch('https://github.com/')
                .then(function(res) {
                    ctx.body = res.text();
                }).then(function(body) {
                    ctx.body = 'Check';
                    console.log(body);
                });
    });
            
    return router;
};

