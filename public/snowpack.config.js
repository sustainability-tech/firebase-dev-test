module.exports = {
  devOptions : {
    port : 8091,
  },
  routes: [{
    match : 'routes',
    src : '.*',
    dest : '/index.html'
  }],
  exclude : [
    '**/node_modules/**/*',
    '.git/**',
    '**/snowpack.crt',
    '**/snowpack.key',
    '**/package.json',
    '**/package-lock.json',
    '**/icomoon.json',
    '_snowpack',
    '**/snowpack.config.js',
  ],
  optimize : {
    bundle : true,
    minify : true,
  }
};
