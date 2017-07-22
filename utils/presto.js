const presto = require('presto-client');
const _ = require('underscore');

let client;
let option;

function getClient(host, port, catalog, schema) {
    if(!client) {
        client = new presto.Client(option);
    }
    return client;
}

exports.getClient = getClient;
exports.getTables = function(cb) {
    getClient().execute('show tables', function(err, data, columns) {
	       cb(err, data, columns);
    });
};

exports.query = function(q, cb) {
    getClient().execute(q, function(err, data, columns) {
	       cb(err, data, columns);
    });
};

exports.setOption = function(host, port, catalog, schema) {
    let opt = {user: 'presto-client2'};
    if(host) opt.host = host;
    if(port) opt.port = port;
    if(catalog) opt.catalog = catalog;
    if(schema) opt.schema = schema;
    option = opt;
};
