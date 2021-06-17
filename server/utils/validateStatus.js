function validateStatus(res) {
  if (res.ok) {
    return res;
  } else {
    throw new Error(res.statusText);
  }
}

module.exports = {
  validateStatus
}