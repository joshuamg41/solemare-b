module.exports = ({ env }) => ({
    proxy: true,
    url: env('solemare.heroku.com'), // Sets the public URL of the application.
    app: { 
      keys: env.array('APP_KEYS')
    },
});