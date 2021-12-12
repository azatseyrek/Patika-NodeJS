const circleArea = (r) => {
  return Math.PI.toFixed(2) * r * r;
};

const circleCircumference = (r) => {
  return 2 * Math.PI.toFixed(2) * r;
};


module.exports = {
    circleArea,
    circleCircumference
}

