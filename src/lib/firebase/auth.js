// Standalone AI Analytics repository auth adapter.
// The production Trade Avata application can replace this adapter with its
// Firebase auth implementation without changing the Analytics page.
export function watchAuth(callback) {
  callback(null);
  return () => {};
}
