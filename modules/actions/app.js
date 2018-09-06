import { createAction } from './utils';
import AppConstants from '../constants';
import { getAppInfo as fetchAppInfo } from '../../utils/app';
import { getMappings } from '../../utils/mappings';
import { getCredentials } from '../../utils';

/**
 * To fetch app details
 * @param {string} appId
 */
export function getAppInfo(appId) {
	return (dispatch) => {
		dispatch(createAction(AppConstants.APP.GET_INFO));
		return fetchAppInfo(appId)
			.then(res => dispatch(createAction(AppConstants.APP.GET_INFO_SUCCESS, res)))
			.catch(error => dispatch(createAction(AppConstants.APP.GET_INFO_ERROR, null, error)));
	};
}

export function getAppMappings(appName, credentials, url) {
	return (dispatch) => {
		dispatch(createAction(AppConstants.APP.GET_MAPPINGS));
		return getMappings(appName, credentials, url)
			.then(res => dispatch(createAction(AppConstants.APP.GET_MAPPINGS_SUCCESS, res)))
			.catch(error => dispatch(createAction(AppConstants.APP.GET_MAPPINGS_ERROR, null, error)));
	};
}

export function getAppCredentials(appId) {
	return (dispatch) => {
		dispatch(createAction(AppConstants.APP.GET_CREDENTIALS));
		return getCredentials(appId)
			.then(res => dispatch(createAction(AppConstants.APP.GET_CREDENTIALS_SUCCESS, res)))
			.catch(error => dispatch(createAction(AppConstants.APP.GET_CREDENTIALS_ERROR, null, error)));
	};
}