export const roomSet = room => ({
  type: 'ROOM_SET',
  payload: room,
});

export const roomDELETE = () => {
  return {
    type: 'ROOM_DELETE',
  };
};
