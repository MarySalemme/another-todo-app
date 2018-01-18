/* global expect, it, describe */

import types from '../constants';
import { reducer, initialState } from '.';

describe('Reducer', () => {
  const todoText = 'test';

  it('Should return the initial state when no action is passed', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  describe('SubmitTodo', () => {
    it('Should return the correct state', () => {
      const action = {
        type: types.SUBMIT_TODO,
        id: 1,
        text: todoText,
      };

      const expectedState = {
        todos: [
          {
            id: 1,
            text: todoText,
          },
        ],
      };

      expect(reducer(undefined, action)).toEqual(expectedState);
    });
  });
});
