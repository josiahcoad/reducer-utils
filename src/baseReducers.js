/**
 * @file Abstraction of the logic for common reducers that update the global store:
 * replace, add, setAll, remove objects for a particular field in the global store e.g. 'users'
 */


export const replaceObject = (oldState, object) => ({
    /**
     * @param object - the new object that
     * will be relace the old one with the same id.
     * Note: if multiple have objects in the state's data array
     * have the same id, all of them will be replaced with the new object.
     */
    ...oldState,
    data: oldState.data.map(item => (item.id === object.id ? object : item)),
});

export const addObject = (oldState, object) => ({
    /**
     * @param object - the new object that will be added to the state's data array.
     * Note: object can be a list of objects that will be added the state's data array.
     */
    ...oldState,
    data: oldState.data.concat(object),
});

export const setAllObjects = (oldState, objects) => ({
    /**
     * @param objects - the array of the new objects that
     * will be set as the state's new data array.
     */
    ...oldState,
    data: objects,
});

export const removeObject = (oldState, object) => ({
    /**
     * @param object - the new object that will be removed from
     * the state's data array that has the same object.id.
     * Note: if multiple have objects in the state's data array
     * have the same id, all of them will be removed
     */
    ...oldState,
    data: oldState.data.filter(item => item.id !== object.id),
});

