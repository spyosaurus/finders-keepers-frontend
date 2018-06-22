export const hostSet = host => ({
  type: 'HOST_SET',
  payload: host,
});
  
export const hostDELETE = () => {
  return {
    type: 'HOST_DELETE',
  };
};
  
