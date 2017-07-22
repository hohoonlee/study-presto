let express = require('express');
let presto  = require('../utils/presto');
let router = express.Router();

router.post('/tables', function(req, res, next) {
    presto.setOption(req.body.host, req.body.port, req.body.catalog, req.body.schema);
    presto.getTables(function(err, data, cols) {
        if(err) {
            res.status(500).json({'err':err});
        }else {
            res.status(200).json({'list':data,'cols':cols});
        }
    });
});

router.post('/query', function(req, res, next) {
    var q = req.body.q;
    //console.log(q, q.length);
    q = q.trim();
    if(q.lastIndexOf(';') === q.length-1) q = q.substring(0, q.length -1);
    // console.log(q, q.length);

    presto.query(q, function(err, data, cols) {
        if(err) {
            res.status(500).json({'err':err});
        }else {
            res.status(200).json({'list':data,'cols':cols});
        }
    });
});

module.exports = router;
