/**
 * Test the request function
 */

import request, { getJsonPostOptions } from '../request';

describe('request', () => {
  // Before each test, stub the fetch function
  beforeEach(() => {
    window.fetch = jest.fn();
  });

  describe('stubbing successful response', () => {
    // Before each test, pretend we got a successful response
    beforeEach(() => {
      const res = new Response('{"hello":"world"}', {
        status: 200,
        headers: {
          'Content-type': 'application/json',
        },
      });

      window.fetch.mockReturnValue(Promise.resolve(res));
    });

    it('should format the response correctly', (done) => {
      request('/thisurliscorrect')
        .catch(done)
        .then((json) => {
          expect(json.hello).toBe('world');
          done();
        });
    });


    it('should return an correct options (e.g. headers) if options.method==\'POST\'', (done) => {
      const someUrl = '/thisurliscorrect';
      const passedOptions = {
        method: 'POST',
        headers: {
          foo: 'bar',
        },
        someOtherKey: 'value',
      };
      const expectedOptions = {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          foo: 'bar',
        },
        someOtherKey: 'value',
      };
      request(someUrl, passedOptions)
        .catch(done)
        .then(() => {
          expect(window.fetch).toHaveBeenLastCalledWith(someUrl, expectedOptions);
          done();
        });
    });
  });

  describe('stubbing error response', () => {
    // Before each test, pretend we got an unsuccessful response
    beforeEach(() => {
      const res = new Response('', {
        status: 404,
        statusText: 'Not Found',
        headers: {
          'Content-type': 'application/json',
        },
      });

      window.fetch.mockReturnValue(Promise.resolve(res));
    });

    it('should catch errors', (done) => {
      request('/thisdoesntexist')
        .catch((err) => {
          expect(err.response.status).toBe(404);
          expect(err.response.statusText).toBe('Not Found');
          done();
        });
    });
  });

  describe('getJsonPostOptions', () => {
    it('should deep assign values, e.g. headers', () => {
      const input = {
        headers: {
          foo: 'bar',
        },
      };
      const expected = {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          foo: 'bar',
        },
      };
      expect(getJsonPostOptions(input)).toEqual(expected);
    });
  });
});
