export default (state = null, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'ROOM_SET': {
      console.log('ROOM SET PAYLOAD', payload);
      return payload; }
    case 'ROOM_DELETE': return null;
    default: return state;
  }
};
