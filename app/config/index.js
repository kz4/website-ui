const trueEnv = process.env.CONFIG_ENV || process.env.NODE_ENV;
const envs = {
  DEVELOPMENT: 'development',
  BACKEND_DEVELOPMENT: 'backend-development',
  PRODUCTION: 'production',
  TESTING: 'testing',
};

export const BACKEND_DEV_ROOT = 'https://06wl8i4mb2.execute-api.us-east-1.amazonaws.com/dev';
export const LOCAL_DEV_ROOT = '/api';
export const PROD_ROOT = LOCAL_DEV_ROOT;

function getServerBase(env = trueEnv) {
  switch (env) {
    case (envs.DEVELOPMENT):
      return LOCAL_DEV_ROOT;
    case (envs.TESTING):
      return LOCAL_DEV_ROOT;
    case (envs.BACKEND_DEVELOPMENT):
      return BACKEND_DEV_ROOT;
    default:
      return PROD_ROOT;
  }
}

function makeApiPath(path) {
  console.log('makeAPI env', trueEnv);
  const serverBase = getServerBase();
  return `${serverBase}/${path}`;
}

const paths = {
  api: {
    auth: {
      // TODO add base
      LOGIN: makeApiPath('auth/login'),
      REGISTER: makeApiPath('auth/register'),
      SAVE: makeApiPath('auth/save'),
    },
    project: {
      base: 'project',
      getById: (id) => makeApiPath(`${paths.api.project.base}/${id}`),
      updateById: (id) => makeApiPath(`${paths.api.project.base}/update`),
    }
  },
  appPaths: {
    home: {
      path: '/',
    },
    login: {
      path: '/login',
    },
    register: {
      path: '/register',
    },
    user: {
      path: '/user',
    },
    save: {
      path: '/project/update'
    },
    project: {
      base: 'projects',
      getById: (id) => `${paths.appPaths.project.base}/${id}`,
    },
  },
};

export { envs, paths, makeApiPath, getServerBase };
