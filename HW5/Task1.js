function removeElement(array, item) {
  const index = array.indexOf(item);
  if (index > -1) {
    array.splice(index, 1);
  }
  return arr;
}

const arr = [1,2,3,4,5];
console.log(removeElement(arr,5));