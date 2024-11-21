export function setupInactivityTimer(logout: () => void) {
  let inactivityTimer: NodeJS.Timeout;

  // Set inactivity limit to 30 minutes (in milliseconds)
  const INACTIVITY_LIMIT = 30 * 60 * 1000;
  // const INACTIVITY_LIMIT = 10 * 1000;


  function resetInactivityTimer() {
    // Update the last activity timestamp in localStorage
    localStorage.setItem('lastActivity', Date.now().toString());

    // Clear any existing timer
    if (inactivityTimer) clearTimeout(inactivityTimer);

    // Set a new timer
    inactivityTimer = setTimeout(checkInactivity, INACTIVITY_LIMIT);
  }

  function checkInactivity() {
    const lastActivity = parseInt(localStorage.getItem('lastActivity') || '0', 10);
    const currentTime = Date.now();

    // Check if the user has been inactive beyond the limit
    if (currentTime - lastActivity >= INACTIVITY_LIMIT) {
      logout();
    }
  }

  // Add event listeners to reset the timer on user activity
  const events = ['mousemove', 'keypress', 'click', 'touchstart'];
  events.forEach(event => window.addEventListener(event, resetInactivityTimer));

  // Initialize the inactivity timer
  resetInactivityTimer();

  // Clean up event listeners on page unload
  window.addEventListener('beforeunload', () => {
    events.forEach(event => window.removeEventListener(event, resetInactivityTimer));
    if (inactivityTimer) clearTimeout(inactivityTimer);
  });

  // On page load, check if the user was inactive during reload
  window.addEventListener('load', () => {
    const lastActivity = parseInt(localStorage.getItem('lastActivity') || '0', 10);
    const currentTime = Date.now();

    if (currentTime - lastActivity >= INACTIVITY_LIMIT) {
      logout();
    } else {
      resetInactivityTimer();
    }
  });
}
