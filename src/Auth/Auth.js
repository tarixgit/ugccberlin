import auth0 from 'auth0-js';
import axios from 'axios';
import decode from 'jwt-decode';
const ID_TOKEN_KEY = 'id_token';
const ACCESS_TOKEN_KEY = 'access_token';
const config = require('../../config/config.json');

//TODO: make this as component
let auth = new auth0.WebAuth({
    // domain: config.auth0config.domain,
    // clientID: config.auth0config.clientID,
    // redirectUri: config.auth0config.redirectUri,
    // audience: config.auth0config.audience,
    // responseType: config.auth0config.responseType,
    // scope: config.auth0config.scope
    domain: config.auth0config.domain,
    clientID: '8PVgyYFg79jOQoN4tDZlQWZma2MhRtE1',
    redirectUri: config.auth0config.redirectUri,
    audience: config.auth0config.audience,
    responseType: config.auth0config.responseType,
    scope: config.auth0config.scope

    });
/*
clientID: clientID,
  domain: domain,
  responseType: 'code token',
  callbackURL:
    window.location.protocol +
    '//' +
    window.location.host +
    pathPrefix +
    auth0Config.redirectPath
*/
export function login() {
    auth.authorize();
}

export function logout() {
    clearIdToken();
    clearAccessToken();
}

if (localStorage.getItem('id_token')) {
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('id_token')
}

export function requireAuth(nextState, replace) {
    if (!isLoggedIn()) {
        replace({pathname: '/'});
    }
}

export function getIdToken() {
    return localStorage.getItem(ID_TOKEN_KEY);
}

export function getAccessToken() {
    return localStorage.getItem(ACCESS_TOKEN_KEY);
}

function clearIdToken() {
    localStorage.removeItem(ID_TOKEN_KEY);
}

function clearAccessToken() {
    localStorage.removeItem(ACCESS_TOKEN_KEY);
}

// Helper function that will allow us to extract the access_token and id_token
function getParameterByName(name) {
    let match = RegExp('[#&]' + name + '=([^&]*)').exec(window.location.hash);
    return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
}

// Get and store access_token in local storage
export function setAccessToken() {
    let accessToken = getParameterByName('access_token');
    localStorage.setItem(ACCESS_TOKEN_KEY, accessToken);
}

// Get and store id_token in local storage
export function setIdToken() {
    let idToken = getParameterByName('id_token');
    localStorage.setItem(ID_TOKEN_KEY, idToken);
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('id_token')
}

export function isLoggedIn() {
    const idToken = getIdToken();
    return !!idToken && !isTokenExpired(idToken);
}

function getTokenExpirationDate(encodedToken) {
    const token = decode(encodedToken);
    if (!token.exp) { return null; }

    const date = new Date(0);
    date.setUTCSeconds(token.exp);

    return date;
}

function isTokenExpired(token) {
    const expirationDate = getTokenExpirationDate(token);
    return expirationDate < new Date();
}
