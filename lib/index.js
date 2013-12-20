/**
 * Node.js API client for Apostle.io
 *
 * @package apostle
 * @author Andrew Sliwinski <andrewsliwinski@acm.org>
 */

/**
 * Dependencies
 */
var hyperquest = require('hyperquest');

/**
 * Sends the provided POST body to the apostle API using hyperquest.
 *
 * @param {string} API key
 * @param {object} Apostle message body
 *
 * @return {error}
 */
function send (key, container, callback) {
    var body = JSON.stringify(container);
    var req = hyperquest('http://deliver.apostle.io', {
        method: 'POST',
        headers: {
            'Authorization': 'Bearer ' + key,
            'Content-Type': 'application/json',
            'Content-Length': Buffer.byteLength(body)
        }
    });

    // Write body
    req.write(body);
    req.end();

    // Event handlers
    req.on('error', callback);
    req.on('response', function (res) {
        var buffer = '';

        res.on('data', function (chunk) {
            buffer += chunk.toString();
        });

        res.on('end', function () {
            callback(null, JSON.parse(buffer));
        });
    });
}

/**
 * Export
 */
module.exports = function (key) {

    /**
     * Delivers an email using the specified paramaters to apostle.
     *
     * @param {object}
     *      - email {string} Email address of the reciepient
     *      - template {string} Template ID
     *      - values {object, optional} Object containing any needed values
     *
     * @return {error}
     */
    return function (args, callback) {
        // Validate / parse arguments
        if (typeof args.email === 'undefined') return callback('Invalid');
        if (typeof args.template === 'undefined') return callback('Invalid');
        if (typeof args.values === 'undefined') args.values = {};

        // Build up post body
        var container       = { recipients: {} };
        var body            = {
            data: args.values,
            template_id: args.template
        };
        container.recipients[args.email] = body;

        // Deliver
        send(key, container, callback);
    };

};