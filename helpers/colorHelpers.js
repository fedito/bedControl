export const color5 = (bedsFree, bedsTotal) => {
  let percentaje = 0;
  if (bedsTotal != 0) {
    percentaje = (bedsFree / bedsTotal) * 10;
  }
  if (percentaje === 0) {
    return "black";
  }
  if (percentaje <= 1) {
    return "red";
  }
  if (percentaje <= 2) {
    return "tomato";
  }
  if (percentaje <= 3) {
    return "orange";
  }
  if (percentaje <= 4) {
    return "gold";
  }
  return "green";
};

export const color3 = (bedsFree, bedsTotal) => {
  let percentaje = 0;
  if (bedsTotal != 0) {
    percentaje = (bedsFree / bedsTotal) * 10;
  }
  if (percentaje === 0) {
    return "black";
  }
  if (percentaje < 1) {
    return "red";
  }
  if (percentaje < 4) {
    return "yellow";
  }
  return "green";
};

export const color2 = (bedsFree, bedsTotal) => {
  let percentaje = 0;
  if (bedsTotal != 0) {
    percentaje = (bedsFree / bedsTotal) * 10;
  }
  if (percentaje === 0) {
    return "black";
  }
  if (percentaje < 1) {
    return "red";
  }
  return "green";
};
