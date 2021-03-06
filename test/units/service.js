﻿var assert = require('assert'),
    cli = require('../../lib');

describe('service', function() {

    it('should be able to configure a value and get an updated config.', function(done) {
        cli.arguments = ['set', 'protocol','http'];
        cli.service.execute(function(err) {
	        assert.ifError(err);

            cli.store.get('protocol', function(err, value) {
                assert.ifError(err);
                assert.equal(value, 'http');

                cli.store.getAll(function(err, config) {
                    assert.ifError(err);

                    assert.equal(config['protocol'], 'http');
                    done();
                });
            });
    	});
    });

});