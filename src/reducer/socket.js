export default (state = null, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'SOCKET_SET': return payload;
    case 'SOCKET_DELETE': return null;
    default: return state;
  }
};
