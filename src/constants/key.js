export const baseUrl = 'http://localhost:8080';
export const SECRET = '926D96C90030DD58429D2751AC1BDBBC';
export const ACCESS_TOKEN = "token";
export const OAUTH2_REDIRECT_URI = 'http://localhost:3000//oauth2/redirect';

export const GOOGLE_AUTH_URL = baseUrl + '/oauth2/authorize/google?redirect_uri='+OAUTH2_REDIRECT_URI;
export const FACEBOOK_AUTH_URL = baseUrl + '/oauth2/authorize/facebook?redirect_uri='+OAUTH2_REDIRECT_URI;
export const GITHUB_AUTH_URL = baseUrl + '/oauth2/authorize/github?redirect_uri='+OAUTH2_REDIRECT_URI;