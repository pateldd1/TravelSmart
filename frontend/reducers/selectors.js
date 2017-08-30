import { values } from 'lodash';

//This will select all of the values within any object. In this case, we have
//an object that the id is nested twice and takeon outside of the hash to use as a key
//for constant lookup time. All of the objects are in a nested form like this so this
//select is universal.

export const selectAll = (object) => {
  return _.values(object)
}
