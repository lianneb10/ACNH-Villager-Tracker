import { villagerNameToId } from '../../utils/api';

export function Photos(props) {
	return (
		<img
			alt=''
            width='200px'
			src={
				'https://acnhapi.com/v1a/images/villagers/' +
				villagerNameToId(props.name)
			}
		/>
	);
}
