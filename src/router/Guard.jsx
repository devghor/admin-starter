function Guard({ children }) {
  // const { authenticated } = useAuth();
  // if (!authenticated) {
  // return <Navigate to={pathEnum.auth.login.path} />;
  // }
  return <div>{children}</div>;
}

export default Guard;
