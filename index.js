//Accepts four extents in the form of arrays, the two first are considered the domain, the other two the range.
module.exports = (domainX, domainY, rangeX, rangeY) => {
  //Computes length of an extent
  const getLength = range => range[1] - range[0];
  //Compute ratio of each extent
  const rangeRatio = getLength(rangeY) / getLength(rangeX);
  const domainRatio = getLength(domainY) / getLength(domainX);
  //Compute proportion between ratios
  const ratioOfRatios = domainRatio / rangeRatio;
  //Increases an extent on each side the specified amount
  const increase = (domain, amount, invert = false) => {
    ////invert the proportion if smaller than one, so that we always increase
    const newLength = getLength(domain) * (amount < 1 ? 1 / amount : amount);
    //Compute the difference wiht the old length
    const diffLength = newLength - getLength(domain);
    //PreCompute the new end of the extent
    const newTotal = domain[0] + newLength;
    //Offset half the difference between lengths to center the old extent in the new one
    return [domain[0] - diffLength / 2, newTotal - diffLength / 2];
  };
  //One of x or y will return the old value
  let x = domainX;
  let y = domainY;

  //If the ratio of ratios is positive, increase Y, otherwise, x
  if (ratioOfRatios < 1) y = increase(domainY, ratioOfRatios, true);
  else x = increase(domainX, ratioOfRatios);

  //Return new extents in an object
  return { x, y };
};
