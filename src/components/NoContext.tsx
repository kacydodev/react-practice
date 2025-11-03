import { useEffect, useState } from 'react';

// Test for no refresh on context changes
export default function NoContextComponent() {
	const [message, setMessage] = useState('');

	useEffect(() => {
		const timer = setTimeout(() => {
			setMessage(`refreshed 2 secs ago`);
		}, 2000);

		return () => clearTimeout(timer);
	}, []);

	return (
		<div className='p-3 bg-blue-500'>
			<h3>Child component</h3>
			<small
				className={`${message ? 'block' : 'hidden'} italic text-slate-300`}
			>
				{message}
			</small>
		</div>
	);
}
