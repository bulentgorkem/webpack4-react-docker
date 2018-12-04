const handler = require('serve-handler');

module.exports = async (request, response) => {
  await handler(request, response, {
    public: 'dist',
    headers: [
      {
        source: '**/*.@(jpg|css|jpeg|gif|png)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=7200'
          }
        ]
      },
      {
        source: '*.js',
        headers: [
          {
            key: 'Content-Encoding',
            value: 'gzip'
          }
        ]
      },
      {
        source: '404.html',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=300'
          }
        ]
      }
    ]
  });
};
