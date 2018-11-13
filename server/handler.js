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
