"use strict";

const http = require("http");
const plugin = {};

plugin.register = function(server, options, next) {
    server.route({
        method : 'GET',
        path : '/transactions',
        handler : (request, reply) => {
            const requestOptions = {
                host: "localhost",
                path: "/transactions",
                port: "8000"
            };

            const req = http.get(requestOptions, res => {
                const chunks = [];
                res
                    .on('data', chunk => {
                        chunks.push(chunk);
                    })
                    .on('end', () => {
                        const body = Buffer.concat(chunks);
                        const results = JSON.parse(body);
                        return reply(results);
                    });
            });

            req.on('error', err=>{
                console.log(`error => ${err}`);
                return reply(`error => ${err}`);
            })
        }
    });
    next();
};

plugin.register.attributes = {
    name : "transactionsPlugin",
    version : "0.0.1"
}

module.exports = plugin;