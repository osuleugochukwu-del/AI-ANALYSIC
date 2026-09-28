// Standalone layout-preferences adapter.
// Uses localStorage in this staging repository. Production Trade Avata can
// replace these functions with Firestore-backed persistence.
export async function getAnalyticsPreferences(uid) {
  if (!uid || typeof localStorage === 'undefined') return null;
  try {
    return JSON.parse(localStorage.getItem('trade-avata-analytics-layout') || 'null');
  } catch {
    return null;
  }
}

export async function saveAnalyticsPreferences(uid, preferences) {
  if (!uid || typeof localStorage === 'undefined') return false;
  localStorage.setItem('trade-avata-analytics-layout', JSON.stringify(preferences || {}));
  return true;
}
