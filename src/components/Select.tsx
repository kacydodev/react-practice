import * as Select from '@radix-ui/react-select';

const STATUS = ['draft', 'pending', 'paid'];

export default function DropdownMenu() {
	return (
		<>
			<Select.Root>
				<Select.Trigger>
					<Select.Value placeholder='select a value...' />
				</Select.Trigger>

				<Select.Portal>
					<Select.Content>
						{STATUS.map((item) => (
							<Select.Item key={item} value={item}>
								{item}
							</Select.Item>
						))}
					</Select.Content>
				</Select.Portal>
			</Select.Root>
		</>
	);
}
