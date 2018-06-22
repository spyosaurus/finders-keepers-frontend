import socketReducer from '../reducer/socket';

describe('Testing the socketReducer', () => {
  const testState = {
    birdDog: 'Woof',
  };
  test('testing the default state functionality', () => {
    const testAction = {
      type: '', // not specified
      payload: testState.profile,
    };
    expect(socketReducer(testState, testAction)).toEqual(testState);
  });

  test('testing the socket set functionality', () => {
    const testAction = {
      type: 'SOCKET_SET',
      payload: testState.profile,
    };
    expect(socketReducer(testState, testAction)).toEqual(testState.profile);
  });
  test('testing the Socket delete functionality', () => {
    const testAction = {
      type: 'SOCKET_DELETE',
      payload: testState.profile,
    };
    expect(socketReducer(testState, testAction)).toBeNull();
  });
});
