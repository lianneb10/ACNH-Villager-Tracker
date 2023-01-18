import axios from 'axios';
import { useState, useEffect } from 'react';
import { villagerNameToId } from '../../utils/api';

export function Info(props) {
    const [villagerInfo, setVillagerInfo] = useState(null);

		useEffect(() => {
			axios
				.get(
					`https://acnhapi.com/v1a/villagers/${villagerNameToId(props.name)}`
				)
				.then((response) => setVillagerInfo(response.data));
		}, [props.name]);
	return (
		<div className="villager-hold">
			{villagerInfo === null ? (
				<p>Loading info...</p>
			) : (
				<p>Species: {villagerInfo.species}</p>
			)}
		</div>
	);
}
