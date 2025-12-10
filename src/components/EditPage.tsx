import { Modal, Dialog } from 'react-aria-components';
import { useParams } from 'react-router';

interface EditPage {
	isOpen: boolean | undefined;
}

export function EditPage({ isOpen }: EditPage) {
	const { id } = useParams();
	console.log('id:', id);

	return (
		<Modal isDismissable isOpen={true} className='w-full h-full bg-red-500'>
			<Dialog className='absolute top-0 right-0 w-[50%] h-full bg-slate-200'>
				<p>Hello {id}</p>
			</Dialog>
		</Modal>
	);
}
