var connect = require('connect'),
    gzipStatic = require('connect-gzip-static'),
    serveStatic = require('serve-static'),
    history = require('connect-history-api-fallback'),
    {createProxyMiddleware} = require('http-proxy-middleware'),
    argv = require('yargs').argv,
    path = require('path'),
    connectExtensions = require('nodejs-connect-extensions');

require('dotenv').config();

var app = connect();

connectExtensions.extendConnectUse(app);

const wwwroot = path.join(__dirname, "wwwroot");
const proxyUrlFile = path.join(__dirname, 'proxyUrl.js');
var proxyUrl = "http://127.0.0.1:8080";

function isRequireAvailable(path)
{
    try
    {
        require.resolve(path);
    }
    catch(e)
    {
        return false;
    }

    return true;
}

if(isRequireAvailable(proxyUrlFile))
{
    proxyUrl = require(proxyUrlFile);
}

if(process.env.SERVER_PROXY_HOST)
{
    proxyUrl = process.env.SERVER_PROXY_HOST;
}

console.log(`Using proxy url '${proxyUrl}'`);

//enable webpack only if run with --webpack param
if(!!argv.webpack)
{
    //WEBPACK 5 DEV SERVER
    app.use(createProxyMiddleware(['/bin'],
    {
        target: 'http://localhost:9000',
        ws: true
    }));

    // var webpack = require('webpack'),
    //     webpackConfig = require('./webpack.config.js')[0]({hmr: true, dll: true, aot: true, css: true}),
    //     webpackDev = require('webpack-dev-middleware'),
    //     hmr = require("webpack-hot-middleware");

    // var compiler = webpack(webpackConfig);

    // //enables webpack dev middleware
    // app.use(webpackDev(compiler,
    // {
    //     publicPath: webpackConfig.output.publicPath,
    // }));

    // app.use(hmr(compiler));
}

//custom rest api
require('./server.rest')(app);

//enable html5 routing
app.use(history());

//return static files
app.use(gzipStatic(wwwroot, 
                   {
                       maxAge: '1d',
                       setHeaders: function setCustomCacheControl (res, path) 
                       {
                           if (serveStatic.mime.lookup(path) === 'text/html') 
                           {
                               // Custom Cache-Control for HTML files
                               res.setHeader('Cache-Control', 'public, max-age=0');
                           }
                       }
                   }));

console.log("Listening on port 8888 => http://localhost:8888");
//create node.js http server and listen on port
app.listen(8888);