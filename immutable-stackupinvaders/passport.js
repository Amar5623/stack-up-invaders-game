window.passport = new window.immutable.passport.Passport({
  baseConfig: new window.immutable.config.ImmutableConfiguration({
    environment: window.immutable.config.Environment.SANDBOX,
  }),
  clientId: 't3os2WJ5dsqzLOG6eoH11QWUTunEKoOC',
  redirectUri: 'https://mainly-cheerful-javelin.ngrok-free.app/',
  logoutRedirectUri: 'https://mainly-cheerful-javelin.ngrok-free.app/logout.html',
  audience: 'platform_api',
  scope: 'openid offline_access email transact'
  });

