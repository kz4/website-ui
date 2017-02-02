import getConfig, { envs } from '../index';

describe('apiRoutes', () => {
  const expectedAttributes = ['serverApi'];

  it('should have all the expected attributes for development env', () => {
    const devConfig = getConfig(envs.DEVELOPMENT);
    expectedAttributes.every((attr) => expect(devConfig[attr]).toBeDefined());
  });

  it('should have all the expected attributes for testing env', () => {
    const prodConfig = getConfig(envs.PRODUCTION);
    expectedAttributes.every((attr) => expect(prodConfig[attr]).toBeDefined());
  });

  it('should have all the expected attributes for production env', () => {
    const testConfig = getConfig(envs.TESTING);
    expectedAttributes.every((attr) => expect(testConfig[attr]).toBeDefined());
  });
});
