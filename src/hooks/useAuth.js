import { useNavigate } from 'react-router-dom';
import { httpClient } from '../lib';
import { appConfig } from '../config';
import { endpointEnum } from '../enums';

function useAuth() {
  const navigate = useNavigate();

  const signIn = async (values) => {
    try {
      const resp = await httpClient.post(endpointEnum.loginPost, values);
      if (resp.data) {
        const redirectUrl = appConfig.redirectUrlKey;
        navigate(redirectUrl || appConfig.authenticatedEntryPath);
        return {
          status: 'success',
          message: '',
        };
      }
    } catch (errors) {
      return {
        status: 'failed',
        message: errors?.response?.data?.error,
      };
    }
  };

  const signUp = async (values) => {
    try {
      const resp = await httpClient.post(endpointEnum.registerPost, values);
      if (resp.data) {
        const redirectUrl = appConfig.redirectUrlKey;
        navigate(redirectUrl || appConfig.authenticatedEntryPath);
        return {
          status: 'success',
          message: '',
        };
      }
    } catch (errors) {
      return {
        status: 'failed',
        message: errors?.response?.data?.message || errors?.toString(),
      };
    }
  };

  const handleSignOut = () => {
    navigate(appConfig.unAuthenticatedEntryPath);
  };

  const signOut = async () => {
    await httpClient.post(endpointEnum.logoutPost);
    handleSignOut();
  };

  return {
    authenticated: true,
    signIn,
    signUp,
    signOut,
  };
}

export default useAuth;
