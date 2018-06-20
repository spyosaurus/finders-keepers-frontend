export default (state = null, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'ROOM SET': return payload;
    case 'ROOM_DELETE': return null;
    default: return state;
  }
};
