function Guard({ children }) {
  // const { authenticated } = useAuth();
  // if (!authenticated) {
  // return <Navigate to={pathConstant.AUTH_LOGIN.path} />;
  // }
  return <div>{children}</div>;
}

export default Guard;
