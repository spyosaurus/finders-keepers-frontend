import authReducer from '../reducer/auth';

describe('Testing the authReducer', () => {
  const testState = {
    birdDog: 'Woof',
  };
  test('testing the default state functionality', () => {
    const testAction = {
      type: '', // not specified
      payload: testState.profile,
    };
    expect(authReducer(testState, testAction)).toEqual(testState);
  });

  test('testing the Set Token functionality', () => {
    const testAction = {
      type: 'TOKEN_SET',
      payload: testState.profile,
    };
    expect(authReducer(testState, testAction)).toEqual(testState.profile);
  });
  test('testing the Token delete functionality', () => {
    const testAction = {
      type: 'TOKEN_DELETE',
      payload: testState.profile,
    };
    expect(authReducer(testState, testAction)).toBeNull();
  });
});
