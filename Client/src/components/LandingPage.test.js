import LandingPage from './LandingPage.jsx';
import { render } from '@testing-library/react';

describe('Includes elements for landing page', () => {
  test('Includes title', () => {
    const { queryByTestId } = render(
      <LandingPage />
    );
    expect(queryByTestId(/title/i).textContent).toBe('Developers Institute Chess Club');
  });

  test('Inludes logo', () => {
    const { queryByTestId } = render(
      <LandingPage />
    );
    expect(queryByTestId(/logo/i)).toBeTruthy();
  });

  test('Includes latest activities section', () => {
    const { queryByTestId } = render(
      <LandingPage />
    );
    expect(queryByTestId(/activities/i).textContent).toBe('Latest Club Activities');
  });

  test('Includes latest game', () => {
    const { queryByTestId } = render(
      <LandingPage />
    );
    expect(queryByTestId(/latest-game/i).textContent).toBe('Latest Game');
  });

  test('Includes club activities schedule', () => {
    const { queryByTestId } = render(
      <LandingPage />
    );
    expect(queryByTestId(/schedule/i).textContent).toBe('Club Activities Schedule');
  });
})