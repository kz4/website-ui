// These are the pages you can go to.
// They are all wrapped in the App component, which should contain the navbar etc
// See http://blog.mxstbr.com/2016/01/react-apps-with-pages for more information
// about the code splitting business
import { paths } from 'config';
import { getAsyncInjectors } from './utils/asyncInjectors';

const errorLoading = (err) => {
  console.error('Dynamic page loading failed', err); // eslint-disable-line no-console
};

const loadModule = (cb) => (componentModule) => {
  cb(null, componentModule.default);
};

export default function createRoutes(store) {
  // create reusable async injectors using getAsyncInjectors factory
  const { injectReducer, injectSagas } = getAsyncInjectors(store);

  return [
    {
      path: paths.appPaths.home.path,
      name: 'home',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          import('containers/HomePage/reducer'),
          import('containers/HomePage/sagas'),
          import('containers/HomePage'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, sagas, component]) => {
          injectReducer('home', reducer.default);
          injectSagas(sagas.default);

          renderRoute(component);
        });
        importModules.catch(errorLoading);
      },
    }, {
      path: paths.appPaths.login.path,
      name: 'login',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          import('containers/LoginPage/reducer'),
          import('containers/LoginPage/sagas'),
          import('containers/LoginPage'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, sagas, component]) => {
          // TODO change to login, this is probably why the store was in home :P
          injectReducer('login', reducer.default);
          injectSagas(sagas.default);

          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      path: paths.appPaths.register.path,
      name: 'register',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          import('containers/RegisterPage/reducer'),
          import('containers/RegisterPage/sagas'),
          import('containers/RegisterPage'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, sagas, component]) => {
          injectReducer('register', reducer.default);
          injectSagas(sagas.default);

          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      path: '/features',
      name: 'features',
      getComponent(nextState, cb) {
        import('containers/FeaturePage')
          .then(loadModule(cb))
          .catch(errorLoading);
      },
    }, {

      path: '/projects/:projectId',
      name: 'projects',
      getComponent(nextState, cb) {
       const importModules = Promise.all([
          import('containers/ProjectPage/actions'),
          import('containers/ProjectPage/reducer'),
          import('containers/ProjectPage/sagas'),
          import('containers/ProjectPage'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([actions, reducer, sagas, component]) => {
          injectReducer('project', reducer.default);
          injectSagas(sagas.default);

          renderRoute(component);
          store.dispatch(actions.makeFetchProjectAction(nextState.params.projectId))

        });

        importModules.catch(errorLoading);

      },
    },{
      path: '/viewData',
      name: 'view data',
      getComponent(nextState, cb) {
        import('containers/ViewDataPage')
          .then(loadModule(cb))
          .catch(errorLoading);
      },
    }, {
      path: '/EditProject',
      name: 'createEditProjectPage',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          import('containers/CreateEditProjectPage/reducer'),
          import('containers/CreateEditProjectPage/sagas'),
          import('containers/CreateEditProjectPage'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, sagas, component]) => {
          injectReducer('createEditProjectPage', reducer.default);
          injectSagas(sagas.default);
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      path: '*',
      name: 'notfound',
      getComponent(nextState, cb) {
        import('containers/NotFoundPage')
          .then(loadModule(cb))
          .catch(errorLoading);
      },
    },
  ];
}
