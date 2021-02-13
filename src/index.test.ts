// import { mocked } from 'ts-jest/utils';
// import { mean } from './mean';
// import { sum } from './sum';
//
// jest.mock('./sum');
// it.only('return mean value of 1 and 2', () => {
//     mocked(sum).mockReturnValue(3);
//     expect(mean(1, 2)).toBe(1.5);
//     expect(sum).toHaveBeenCalled();
// });

import * as helpers from "./index"

it.only('return mean value of 1 and 2', () => {
    jest.spyOn(helpers, 'sum').mockReturnValue(3)
    expect(helpers.mean(1, 2)).toBe(1.5);
    expect(helpers.sum).toHaveBeenCalled();
});
