var config = {};

config.server = {
        port: process.env.PORT || 3000
    };

config.mongoDb =  {
        url: process.env.MONGOURL
    };

module.exports = config;