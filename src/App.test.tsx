import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

describe('<App />', () => {
	it('renders the Homepage route', () => {
		render(
			<MemoryRouter initialEntries={['/']}>
				<App />
			</MemoryRouter>,
		);

		// Assuming that your Homepage component renders a unique text or element.
		// Replace 'Unique text from Homepage' with an actual unique text or element from your Homepage component.
		expect(screen.getByText('Unique text from Homepage')).toBeInTheDocument();
	});

	it('renders the ReservationPage route', () => {
		render(
			<MemoryRouter initialEntries={['/reservation']}>
				<App />
			</MemoryRouter>,
		);

		// Assuming that your ReservationPage component renders a unique text or element.
		// Replace 'Unique text from ReservationPage' with an actual unique text or element from your ReservationPage component.
		expect(screen.getByText('Unique text from ReservationPage')).toBeInTheDocument();
	});
});
