jest.mock('../request');

import * as exam from '../exam';

it('works with promises', () => {
  expect.assertions(1);
  return exam.getExamByID(1).then(data => expect(data).toEqual('Prof. Paolo Gialli'));
});
