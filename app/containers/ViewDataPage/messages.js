/*
 * FeaturePage Messages
 *
 * This contains all the text for the FeaturePage component.
 */
import { defineMessages } from 'react-intl';

export default defineMessages({
  header: {
    id: 'boilerplate.containers.ProjectPage.header',
    defaultMessage: 'Projects!!',
  },
  purpose: {
    id: 'boilerplate.components.ViewDataPage.purpose',
    defaultMessage: 'Wind and lidar turbulence profiles from 40 m to 220 m above the surface.',
  },
  quality: {
    id: 'boilerplate.components.ViewDataPage.purpose',
    defaultMessage: 'These two-minute-averaged data files consider the 1 Hz line-of-sight measurements that pass the -22 dB CNR quality control threshold.',
  },
  references: {
    id: 'boilerplate.components.ViewDataPage.purpose',
    defaultMessage: 'Lundquist, J. K., M. Churchfield, S. Lee, and A. Clifton. 2015. Quantifying Error of Lidar and Sodar Doppler Beam Swinging Measurements of Wind Turbine Wakes using Computational Fluid Dynamics. Atmos. Meas. Tech., 8, 907-920, 2015, doi: 10.5194/amt-8-907-2015.' +
    'Rhodes, M. E., and J. K. Lundquist. 2013. The Effect of Wind Turbine Wakes on Summertime Midwest Atmospheric Wind Profiles. Bound.-Layer Meteor., 149, 85-103. doi: 10.1007/s10546-013-9834-x.',
  },
  scaffoldingHeader: {
    id: 'boilerplate.containers.FeaturePage.scaffolding.header',
    defaultMessage: 'Project',
  },
  scaffoldingMessage: {
    id: 'boilerplate.containers.FeaturePage.scaffolding.message',
    defaultMessage: `Automate the creation of components, containers, routes, selectors
  and sagas - and their tests - right from the CLI!`,
  },
  feedbackHeader: {
    id: 'boilerplate.containers.FeaturePage.feedback.header',
    defaultMessage: 'Instant feedback',
  },
  feedbackMessage: {
    id: 'boilerplate.containers.FeaturePage.feedback.message',
    defaultMessage: `
      Enjoy the best DX and code your app at the speed of thought! Your
    saved changes to the CSS and JS are reflected instantaneously
    without refreshing the page. Preserve application state even when
    you update something in the underlying code!
    `,
  },
  stateManagementHeader: {
    id: 'boilerplate.containers.FeaturePage.state_management.header',
    defaultMessage: 'Predictable state management',
  },
  stateManagementMessages: {
    id: 'boilerplate.containers.FeaturePage.state_management.message',
    defaultMessage: `
      Unidirectional data flow allows for change logging and time travel
    debugging.
    `,
  },
  javascriptHeader: {
    id: 'boilerplate.containers.FeaturePage.javascript.header',
    defaultMessage: 'Next generation JavaScript',
  },
  javascriptMessage: {
    id: 'boilerplate.containers.FeaturePage.javascript.message',
    defaultMessage: `Use template strings, object destructuring, arrow functions, JSX
    syntax and more, today.`,
  },
  cssHeader: {
    id: 'boilerplate.containers.FeaturePage.css.header',
    defaultMessage: 'Features',
  },
  cssMessage: {
    id: 'boilerplate.containers.FeaturePage.css.message',
    defaultMessage: 'Next generation CSS',
  },
  routingHeader: {
    id: 'boilerplate.containers.FeaturePage.routing.header',
    defaultMessage: 'Industry-standard routing',
  },
  routingMessage: {
    id: 'boilerplate.containers.FeaturePage.routing.message',
    defaultMessage: `
      Write composable CSS that's co-located with your components for
    complete modularity. Unique generated class names keep the
    specificity low while eliminating style clashes. Ship only the
    styles that are on the page for the best performance.
    `,
  },
  networkHeader: {
    id: 'boilerplate.containers.FeaturePage.network.header',
    defaultMessage: 'Offline-first',
  },
  networkMessage: {
    id: 'boilerplate.containers.FeaturePage.network.message',
    defaultMessage: `
      The next frontier in performant web apps: availability without a
      network connection from the instant your users load the app.
    `,
  },
  intlHeader: {
    id: 'boilerplate.containers.FeaturePage.internationalization.header',
    defaultMessage: 'Complete i18n Standard Internationalization & Pluralization',
  },
  intlMessage: {
    id: 'boilerplate.containers.FeaturePage.internationalization.message',
    defaultMessage: 'Scalable apps need to support multiple languages, easily add and support multiple languages with `react-intl`.',
  },

  listItemHeader: {
    id: 'boilerplate.containers.FeaturePage.lists.message',
    defaultMessage: 'Powerful Reducers',
  },

  listItemMessage: {
    id: 'boilerplate.containers.FeaturePage.lists.message',
    defaultMessage: 'Dynamically changing pages with powerful reducers, that optimize the code to the most granular level possible.',
  },
});
