/**
 * Only work for client side
 */
export default function getWindowProp<Key extends keyof typeof window>(
  key: Key
): (typeof window)[Key] | undefined {
  if (typeof window === 'undefined') return;
  if (!(key in window)) return;

  return window[key];
}
