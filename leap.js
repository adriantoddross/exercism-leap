"use strict";

export const isLeap = (year) => {
  /*
    If statement: (year % 4 === 0) return true;
    else if (year % 100 === 0) return false... unless (year % 400 === 0) is true
    Else return false;
  */

  if (year % 4 === 0 && year % 100 !== 0) {
    return true;
  } else if (year % 100 !== 0 && year % 400 === 0) {
    return true;
  } else {
    return false;
  }
};
