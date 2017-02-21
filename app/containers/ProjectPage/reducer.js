/*
 *
 * UserConsole reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
  EDIT_TEXT_AREA,
  IS_EDITABLE_ACTION,
} from './constants';

const initialState = fromJS({
  isEditable: false,
  overview: 'A 2014 study estimated that U.S. offshore wind energy could generate enough power' +
  ' for 17 million homes. More than a dozen offshore wind farms are in various stages of ' +
  'development in the United States. The demonstration projects in Virginia and New Jersey ' +
  'receive funding from the U.S. Department of Energy (DOE).',
  objective: 'How much electricity could ocean winds generate if they were harnessed? The DOE is' +
  ' attempting to answer that question with help from two massive 20,000-pound buoys deployed to' +
  ' measure offshore winds near Virginia Beach, Virginia and soon to the site of a proposed wind' +
  ' farm off the Atlantic City, New Jersey shore.Purchased by the DOE\'s Office of Energy' +
  ' Efficiency and Renewable Energy (EERE), the instrument-laden buoy deployed in Virginia was ' +
  'briefly commissioned at PNNL Marine Sciences Laboratory, operated by Battelle for DOE, at the ' +
  'mouth of Sequim Bay in Washington\'s Puget Sound.',
  instruments: 'Both high-tech buoys use lidar (light detection and ranging) and other ' +
  'meteorological and oceanographic instruments that measure wind speed and direction and record ' +
  'air and sea temperature, barometric pressure, relative humidity, wave height and period, ' +
  'water conductivity, and subsurface ocean currents. The buoys will gather data to help ' +
  'characterize offshore winds. The information will help validate wind-resource models used ' +
  'to estimate the potential for generating energy from U.S. ocean winds.Data from the buoys ' +
  'also will be used to gain a better understanding of air-sea interactions and their impact ' +
  'on the potential for producing wind energy with turbines. Ultimately, the goal is to encourage ' +
  'private investment in large-scale offshore wind energy development.'
});

function userConsoleReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    case EDIT_TEXT_AREA:
      return state.set(action.field, action.value);
    case IS_EDITABLE_ACTION:
      return state.set('isEditable', !state.get('isEditable'));
    default:
      return state;
  }
}

export default userConsoleReducer;
