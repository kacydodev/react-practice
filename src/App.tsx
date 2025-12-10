import { useState } from 'react';
import { Button, Dialog, DialogTrigger, Modal } from 'react-aria-components';
import { Link, Outlet, Route, Routes, useParams } from 'react-router';
import { EditPage } from './components/EditPage';

export default function App() {
	const [isOpen, setOpen] = useState(false);

	return (
		<Routes>
			<Route
				path='/'
				element={
					<main>
						<div className='w-fit flex flex-col gap-6'>
							<Link to='/edit/1' className='p-3 border border-slate-300'>
								button 1
							</Link>
							<Link to='/edit/2' className='p-3 border border-slate-300'>
								button 2
							</Link>
							<Link to='/edit/3' className='p-3 border border-slate-300'>
								button 3
							</Link>
							<Link to='/edit/4' className='p-3 border border-slate-300'>
								button 4
							</Link>
							<Link to='/edit/5' className='p-3 border border-slate-300'>
								button 5
							</Link>
							<Link to='/' className='p-3 border border-slate-300'>
								Home Page
							</Link>
						</div>
						<Outlet />
					</main>
				}
			>
				{/* <Route path='/edit/:id' element={<EditPage isOpen={isOpen} />} /> */}
				<Route path='/edit/:id' element={<></>} />
			</Route>
		</Routes>
	);
}
