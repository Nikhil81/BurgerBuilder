export const validateInput = (userName, password) => {
  if (!userName || !password) {
    return false;
  }
  return true;
};
