// import socket from '../reducer/socket';
// import socket-actions from '../actions/socket-actions';

// describe('socket', () => {

// })


// import { FETCH_DOG_SUCCESS } from '../../constants/actionTypes';

// export const initialState = {
//   url: '',
// };

// export default function dogReducer(state = initialState, action) {
//   switch (action.type) {
//     case FETCH_DOG_SUCCESS: {
//       return {
//         ...state,
//         url: action.payload.url,
//       }
//     }
//     default:
//       return state;
//   }
// }

// describe('dog reducer', () => {

//   it('returns initial state', () => {
//     expect(dogReducer(undefined, {})).toEqual({url: ''});
//   });

//   it('sets up fetched dog url', () => {
//     // given
//     const beforeState = {url: ''};
//     const action = {type: FETCH_DOG_SUCCESS, payload: {url: 'https://dog.ceo/api/img/someDog.jpg'}};
//     // when
//     const afterState = dogReducer(beforeState, action);
//     // then
//     expect(afterState).toEqual({url: 'https://dog.ceo/api/img/someDog.jpg'});
//   });
// });

