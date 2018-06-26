import roomReducer from '../reducer/room';

describe('Testing the roomReducer', () => {
  const testState = {
    birdDog: 'Woof',
  };
  test('testing the default state functionality', () => {
    const testAction = {
      type: '',
      payload: testState.profile,
    };
    expect(roomReducer(testState, testAction)).toEqual(testState);
  });

  test('testing the room set functionality', () => {
    const testAction = {
      type: 'ROOM_SET',
      payload: testState.profile,
    };
    expect(roomReducer(testState, testAction)).toEqual(testState.profile);
  });
  test('testing the Room delete functionality', () => {
    const testAction = {
      type: 'ROOM_DELETE',
      payload: testState.profile,
    };
    expect(roomReducer(testState, testAction)).toBeNull();
  });
});
