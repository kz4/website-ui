import _ from 'lodash';
import { envs, getServerBase, makeApiPath, paths } from '../index';

describe('apiRoutes', () => {
  it('getServerBase should return the a string with \'/\'for any env', () => {
    _.forOwn(envs, (env) => expect(getServerBase(env)).toMatch(new RegExp('/')));
  });

  it('makeApiPath should return a string with the passed path', () => {
    const passedPath = 'foo/bar';
    expect(makeApiPath(passedPath)).toMatch(new RegExp(passedPath));
  });

  it('paths should contain all expected paths', () => {
    const expectedPaths = ['api.auth.LOGIN'];
    expectedPaths.every((path) => expect(_.get(paths, path)).toBeDefined());
  });
});
