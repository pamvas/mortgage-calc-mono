// import { render } from '@testing-library/react';

// import SharedUi from './shared-ui';

// describe('SharedUi', () => {
//   it('should render successfully', () => {
//     const { baseElement } = render(<SharedUi />);
//     expect(baseElement).toBeTruthy();
//   });
// });

import { render } from '@testing-library/react';

import MortgageCalc from './mortgageCalc';

describe('MortgageCalc', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MortgageCalc />);
    expect(baseElement).toBeTruthy();
  });
});