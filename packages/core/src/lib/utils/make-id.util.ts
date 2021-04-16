import type { ThreeIntersection } from '@angular-three/core/typings';

/**
 * Generate a random Id or an Event's uuid
 *
 * @param {ThreeIntersection} event
 *
 * @internal
 * @private
 */
export function makeId(event?: ThreeIntersection) {
  if (event) {
    return (event.eventObject || event.object).uuid + '/' + event.index;
  }

  return id();
}

const cache: { [id: string]: boolean | undefined } = {};

/**
 * Generates a short id.
 *
 * Description:
 *  A 5-character alphanumeric sequence (364 = 1.6 million)
 *  This should only be used for JavaScript specific models.
 *  http://stackoverflow.com/questions/6248666/how-to-generate-short-uid-like-ax4j9z-in-js
 *
 *  Example: `aebgf`
 */
export function id(): string {
  let newId = (
    '0000' + ((Math.random() * Math.pow(36, 4)) << 0).toString(36)
  ).slice(-4);

  newId = `a${newId}`;

  // ensure not already used
  if (!cache[newId]) {
    cache[newId] = true;
    return newId;
  }

  return id();
}
