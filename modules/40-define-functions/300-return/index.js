import { getParentFor } from 'hexlet-basics/got';

// BEGIN
const getParentNamesTotalLength = (child) => {
  const mother = getParentFor(child, 'mother');
  const father = getParentFor(child, 'father');
  return mother.length + father.length;
};
// END

export default getParentNamesTotalLength;
