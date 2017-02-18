import _ from 'lodash';
import {
  envs,
  getServerBase,
  makeApiPath,
  paths,
  BACKEND_DEV_ROOT,
  LOCAL_DEV_ROOT,
  PROD_ROOT,
} from '../index';

describe('apiRoutes', () => {
  it('getServerBase should return the a string with \'/\'for any env', () => {
    _.forOwn(envs, (env) => expect(getServerBase(env)).toMatch(new RegExp('/')));
  });

  describe('getServerBase', () => {
    it('should return appropriate base for DEVELOPMENT', () => {
      expect(getServerBase(envs.DEVELOPMENT)).toEqual(LOCAL_DEV_ROOT);
    });
    it('should return appropriate base for TESTING', () => {
      expect(getServerBase(envs.TESTING)).toEqual(LOCAL_DEV_ROOT);
    });
    it('should return appropriate base for BACKEND_DEVELOPMENT', () => {
      expect(getServerBase(envs.BACKEND_DEVELOPMENT)).toEqual(BACKEND_DEV_ROOT);
    });
    it('should default to PROD_DEV_ROOT', () => {
      expect(getServerBase(envs.PRODUCTION)).toEqual(PROD_ROOT);
    });
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
