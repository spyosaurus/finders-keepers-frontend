export default (state = null, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'HOST_SET': {
      return payload; }
    case 'HOST_DELETE': return null;
    default: return state;
  }
};
  
