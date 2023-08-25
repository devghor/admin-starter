const paths = Object.freeze({
  home: {
    label: 'Home',
    path: '/',
  },
  dashboard: {
    label: 'Dashboard',
    path: '/',
  },
  acl: {
    roles: {
      label: 'Roles',
      path: '/acl/roles',
    },
    permissions: {
      label: 'Permissions',
      path: '/acl/permissions',
    },
    userRoles: {
      label: 'User Roles',
      path: '/acl/user-roles',
    },
  },
  auth: {
    login: {
      label: 'Login',
      path: '/login',
    },
    register: {
      label: 'Register',
      path: '/register',
    },
  },
});

export default paths;
