const apiConfig = {
  baseUrl: import.meta.env.VITE_API_BASE_URL,
  timeOut: 60000,
  tokenType: 'Bearer',
  headerAtuhKey: 'Authorization',
  userKey: 'user',
  accessTokenKey: 'access_token',
  refreshTokenkey: 'refresh_token',
};

export default apiConfig;
