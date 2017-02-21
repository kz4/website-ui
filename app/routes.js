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
    // {
    //   path: paths.appPaths.home.path,
    //   name: 'home',
    //   getComponent(nextState, cb) {
    //     const importModules = Promise.all([
    //       import('containers/HomePage/reducer'),
    //       import('containers/HomePage/sagas'),
    //       import('containers/HomePage'),
    //     ]);
    //
    //     const renderRoute = loadModule(cb);
    //
    //     importModules.then(([reducer, sagas, component]) => {
    //       injectReducer('home', reducer.default);
    //       injectSagas(sagas.default);
    //
    //       renderRoute(component);
    //     });
    //     importModules.catch(errorLoading);
    //   },
    // },
     {
      path: '/profile',
      name: 'profile',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          import('containers/ProfilePage/reducer'),
          import('containers/ProfilePage/sagas'),
          import('containers/ProfilePage'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, sagas, component]) => {
          injectReducer('profile', reducer.default);
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
    },
    {
      path: '/',
      name: 'landing',
      getComponent(nextState, cb) {
        import('containers/LandingPage')
          .then(loadModule(cb))
          .catch(errorLoading);
      },
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          import('containers/UserDashboard/reducer'),
          import('containers/UserDashboard/sagas'),
          import('containers/UserDashboard'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, sagas, component]) => {
          injectReducer('userConsole', reducer.default);
          injectSagas(sagas.default);
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },

      childRoutes: [
        {
          path: '/dashboard/profile',
          name: 'profile',
          getComponent(nextState, cb) {
            const importModules = Promise.all([
            import('containers/ProfilePage/reducer'),
            import('containers/ProfilePage/sagas'),
            import('containers/ProfilePage'),
          ]);

            const renderRoute = loadModule(cb);

            importModules.then(([reducer, sagas, component]) => {
              injectReducer('profile', reducer.default);
              injectSagas(sagas.default);
              renderRoute(component);
            });
            importModules.catch(errorLoading);
          },
        },
        {
          path: '/dashboard/dogs',
          name: 'dogs',
          getComponent(nextState, cb) {
            const importModules = Promise.all([
              import('containers/Dogs/reducer'),
              import('containers/Dogs/sagas'),
              import('containers/Dogs'),
            ]);

            const renderRoute = loadModule(cb);

            importModules.then(([reducer, sagas, component]) => {
              injectReducer('dogs', reducer.default);
              injectSagas(sagas.default);
              renderRoute(component);
            });
            importModules.catch(errorLoading);
          },
        },
        {
          path: '/dashboard/cats',
          name: 'cats',
          getComponent(nextState, cb) {
            const importModules = Promise.all([
              import('containers/Cats/reducer'),
              import('containers/Cats/sagas'),
              import('containers/Cats'),
            ]);

            const renderRoute = loadModule(cb);

            importModules.then(([reducer, sagas, component]) => {
              injectReducer('cats', reducer.default);
              injectSagas(sagas.default);
              renderRoute(component);
            });
            importModules.catch(errorLoading);
          },
        },
        {
          path: '/dashboard/projects',
          name: 'projects',
          getComponent(nextState, cb) {
            const importModules = Promise.all([
              import('containers/ProjectList/reducer'),
              import('containers/ProjectList/sagas'),
              import('containers/ProjectList'),
            ]);

            const renderRoute = loadModule(cb);

            importModules.then(([reducer, sagas, component]) => {
              injectReducer('projectsMaster', reducer.default);
              injectSagas(sagas.default);
              renderRoute(component);
            });
            importModules.catch(errorLoading);
          },
        },
      ],

    }, {

      path: '/projects',
      name: 'projects',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          import('containers/ProjectPage/reducer'),
          import('containers/ProjectPage/sagas'),
          import('containers/ProjectPage'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, sagas, component]) => {
          injectReducer('projectPage', reducer.default);
          injectSagas(sagas.default);
          renderRoute(component);
        });
        importModules.catch(errorLoading);
        // import('containers/ProjectPage')
        //   .then(loadModule(cb))
        //   .catch(errorLoading);

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
