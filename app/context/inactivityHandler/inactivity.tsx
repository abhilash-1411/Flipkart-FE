export function setupInactivityTimer(logout: () => void) {
  let inactivityTimer: NodeJS.Timeout;
  //30 min
  const INACTIVITY_LIMIT = 30 * 60 * 1000;

  // 30 seconds
  // const INACTIVITY_LIMIT = 10 * 1000;


  function resetInactivityTimer() {
    if (inactivityTimer) clearTimeout(inactivityTimer);
    inactivityTimer = setTimeout(logoutUser, INACTIVITY_LIMIT);
  }

  function logoutUser() {
    logout();
    window.location.href = '/login';
  }

  const events = ['mousemove', 'keypress', 'touchstart'];
  events.forEach(event => window.addEventListener(event, resetInactivityTimer));

  resetInactivityTimer();

  window.addEventListener('beforeunload', () => {
    events.forEach(event => window.removeEventListener(event, resetInactivityTimer));
    if (inactivityTimer) clearTimeout(inactivityTimer);
  });
}