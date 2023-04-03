module.exports = ({ env }) => ({
    proxy: true,
    url: env('https://solemare.herokuapp.com/'), // Sets the public URL of the application.
    app: { 
      keys: env.array('APP_KEYS')
    },
});