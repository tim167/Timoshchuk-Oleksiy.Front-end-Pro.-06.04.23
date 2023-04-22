function pow(num, degree) {
  if (degree == 1) {
    return num;
  } else {
    return num * pow(num, degree - 1);
  }
}

alert( pow(2, 5) );