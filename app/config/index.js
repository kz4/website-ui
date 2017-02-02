const trueEnv = process.env.NODE_ENV;
const envs = {
  PRODUCTION: 'production',
  DEVELOPMENT: 'development',
  TESTING: 'testing',
};

export { envs };

export default function getConfig(env = trueEnv) {
  let serverApi;

  // I'm not sure what these will need to be, so making all of them '/' for now.
  switch (env) {
    case (envs.DEVELOPMENT):
      serverApi = '/api';
      break;
    case (envs.TESTING):
      serverApi = '/api';
      break;
    default:
      serverApi = '/api';
      break;
  }
  return {
    serverApi,
  };
}
