import 'whatwg-fetch';
import deepAssign from 'deep-assign';

/**
 * Parses the JSON returned by a network request
 *
 * @param  {object} response A response from a network request
 *
 * @return {object}          The parsed JSON from the request
 */
function parseJSON(response) {
  return response.json();
}

/**
 * Checks if a network request came back fine, and throws an error if not
 *
 * @param  {object} response   A response from a network request
 *
 * @return {object|undefined} Returns either the response, or throws an error
 */
function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  const error = new Error(response.statusText);
  error.response = response;
  throw error;
}

export function getJsonPostOptions(options) {
  const newOptions = deepAssign(options, {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });
  newOptions.body = JSON.stringify(options.body);
  return newOptions;
}

/**
 * Requests a URL, returning a promise
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 *
 * @return {object}           The response data
 */
export default function request(url, options) {
  let updatedOptions = options;
  if (options && options.method === 'POST') {
    updatedOptions = getJsonPostOptions(options);
  }
  return fetch(url, updatedOptions)
    .then(checkStatus)
    .then(parseJSON);
}
