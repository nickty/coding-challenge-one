import {
  fireEvent,
  queryByAttribute,
  render,
  screen,
  waitForElementToBeRemoved,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { EsportsTitle, loadTournaments } from './api/tournamentsApi';
import App from './App';

test('displays the spinner while loading', async () => {
  // TODO: Implement me (verify that the spinner component is rendered while tournaments are being loaded).
  const { getByAltText } = render(<App />);
  const loadingSpinner = getByAltText('Spinner');
  expect(loadingSpinner).toBeVisible();
});

test('hides the spinner when not loading', async () => {
  // TODO: Implement me (verify that the spinner component is not rendered when tournaments are not being loaded).
  const { getByAltText } = render(<App />);
  const loadingSpinner = getByAltText('Spinner');
  await waitForElementToBeRemoved(loadingSpinner);
  expect(loadingSpinner).not.toBeVisible();
});

test.each([
  [[EsportsTitle.CSGO]],
  [[EsportsTitle.LOL]],
  [[EsportsTitle.DOTA2]],
  [[EsportsTitle.CSGO, EsportsTitle.DOTA2]],
  [[EsportsTitle.CSGO, EsportsTitle.LOL, EsportsTitle.DOTA2]],
])('loads the tournaments for selected titles %p', async (titles) => {
  // TODO: Implement me (verify that the titles for the checked inputs are requested from the API).

  const onChange = jest.fn();
  const { container } = render(
    <input type="checkbox" onChange={() => onChange(titles)} />
  );
  const checkbox = container.firstChild as HTMLInputElement;

  fireEvent.click(checkbox);

  expect(onChange).toHaveBeenCalledTimes(1);
  expect(onChange).toHaveBeenCalledWith(titles);
});
