export default (state = null, action) => {
  const { type, payload } = action;
  console.log('ACTION PAY', action.payload);
  console.log('ACTION TYPE', action.type);
  switch (type) {
    case 'SOCKET_SET': {
      console.log('REDUCER PAYLOAD', payload)
      return payload;
    }
    case 'SOCKET_DELETE': return null;
    default: return state;
  }
};
