const findById = (targets, { id }) => {
  return targets.filter(v => v.id === id);
};

module.exports = {
  findById
};
