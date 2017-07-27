import { values } from 'lodash';

// export const yearsRange = () => {
//   const range = [];
//
//   for (let i = 2017; i >= 1905; i--) {
//     range.push(i);
//   }
//
//   return range;
// };

//This will select all of the values within any object. In this case, we have
//an object that the id is nested twice and takeon outside of the hash to use as a key
//for constant lookup time. All of the objects are in a nested form like this so this
//select is universal.

export const selectAll = (object) => {
  return _.values(object)
}

// export const trueAmenities = ( amenities ) => {
//   let result = [];
//   for (var key in amenities) {
//     if (amenities[key] === true) {
//       result.push(key);
//     }
//   }
//   return result;
// };
