import { useNavigate } from 'react-router-dom';
import { httpClient } from '../lib';
import { appConstant, endpointConstant } from '../constants';

function useAuth() {
  const navigate = useNavigate();

  const signIn = async (values) => {
    try {
      const resp = await httpClient.post(endpointConstant.loginPost, values);
      if (resp.data) {
        const redirectUrl = appConstant.redirectUrlKey;
        navigate(redirectUrl || appConstant.authenticatedEntryPath);
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
      const resp = await httpClient.post(endpointConstant.registerPost, values);
      if (resp.data) {
        const redirectUrl = appConstant.redirectUrlKey;
        navigate(redirectUrl || appConstant.authenticatedEntryPath);
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
    navigate(appConstant.unAuthenticatedEntryPath);
  };

  const signOut = async () => {
    await httpClient.post(endpointConstant.logoutPost);
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
