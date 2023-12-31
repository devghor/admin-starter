const endpoints = Object.freeze({
  // roles
  rolesGet: '/roles',
  rolesPut: (id) => `/roles/${id}`,
  rolesPost: '/roles',
  rolesDelete: (id) => `/roles/${id}`,
  rolesAssignGet: (id) => `/roles/assign/${id}`,

  // auth
  loginPost: '/login',
  registerPost: '/register',
  logoutPost: '/logout',
});

export default endpoints;
