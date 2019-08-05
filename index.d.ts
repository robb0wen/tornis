/**
 * Subscribes a function to the 'watched functions' list.
 * Watched functions will be automatically called on update
 * @param {Function} callback The function to call on update
 * @param {Boolean} callOnWatch Call the function on subscribe? defaults to true
 */
export function watchViewport(
  callback: TornisWatcher,
  callOnWatch?: boolean
): void

/**
 * Unsubscribe a function from the 'watched functions' list
 * @param {Function} callback The function to be removed
 */
export function unwatchViewport(cb: TornisWatcher): void
/**
 * Returns a copy of the store data, formatted for public use
 */
export function getViewportState(): TornisUpdateValues

type TornisWatcher = (u: TornisUpdateValues) => any

export interface TornisUpdateValues {
  scroll: {
    changed: Boolean
    left: number
    right: number
    top: number
    bottom: number
    velocity: {
      x: number
      y: number
    }
  }
  size: {
    changed: Boolean
    x: number
    y: number
    docY: number
  }
  mouse: {
    changed: Boolean
    x: number
    y: number
    velocity: {
      x: number
      y: number
    }
  }
  position: {
    changed: Boolean
    left: number
    right: number
    top: number
    bottom: number
    velocity: {
      x: number
      y: number
    }
  }
  orientation: {
    changed: Boolean,
    alpha: number,
    beta: number,
    gamma: number
  }
}
