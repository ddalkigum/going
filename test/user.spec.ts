import app from '../src/app';
import assert from 'assert';
import http from 'http';

describe('GET /', function () {
  beforeAll(function () {
    const port = 3000;
    app.set('port', port);
    const server = http.createServer(app);
    server.listen(port);
  });

  it('success server created', function (done) {
    http
      .get({ host: '127.0.0.1', port: 3000 }, function (response) {
        assert.deepStrictEqual(response.statusCode, 200);
        done();
      })
      .on('error', function (e) {
        throw new Error(e);
      });
  });
});
