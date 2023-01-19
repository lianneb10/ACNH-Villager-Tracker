import { villagerNameToId } from '../../utils/api';
import '../../pages/Island/island.css';

export function Photos(props) {
	return (
		<img 
			className = 'villager-image'
			alt=''
            width='200em'
			src={
				'https://acnhapi.com/v1a/images/villagers/' +
				villagerNameToId(props.name)
			}
		/>
	);
}
