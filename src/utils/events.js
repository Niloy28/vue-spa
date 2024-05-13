const events = new Map()

export default {
  /**
   * Add a callback function to be called when the specified event is emitted.
   *
   * @param {string} eventName - The name of the event.
   * @param {Function} callback - The callback function to be called when the event is emitted.
   */
  $on(eventName, callback) {
    // If the event has not been registered yet, create an array to store the callbacks
    if (!events.has(eventName)) {
      events.set(eventName, [])
    }
    // Add the callback to the array of callbacks associated with the event
    events.get(eventName).push(callback)
  },
  /**
   * Remove a callback function from the array of callbacks associated with the event.
   *
   * @param {string} eventName - The name of the event.
   * @param {Function} callback - The callback function to be removed from the array of callbacks associated with the event.
   */
  $off(eventName, callback) {
    // If the event has not been registered yet, do nothing
    if (!events.has(eventName)) {
      return
    }
    // Find the index of the callback to be removed in the array of callbacks associated with the event
    const index = events.get(eventName).indexOf(callback)
    // If the callback is found, remove it from the array of callbacks
    if (index > -1) {
      events.get(eventName).splice(index, 1)
    }
  },
  /**
   * Emit the specified event and call all the callback functions associated with that event.
   *
   * @param {string} eventName - The name of the event to be emitted.
   * @param {...*} args - The arguments to be passed to each of the callback functions.
   */
  $emit(eventName, ...args) {
    // If the event has not been registered yet, do nothing
    if (!events.has(eventName)) {
      return
    }

    // Call each of the callback functions associated with the event
    events.get(eventName).forEach((callback) => {
      callback(...args)
    })
  }
}
