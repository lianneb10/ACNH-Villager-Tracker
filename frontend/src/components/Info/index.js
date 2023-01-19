import axios from 'axios';
import { useState, useEffect } from 'react';
import { villagerNameToId } from '../../utils/api';
import '../../pages/Island/island.css'

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
				<>
				<div className= "villager-info">
				<p>Species: {villagerInfo.species}</p>
				<p>Catchphrase: "{villagerInfo["catch-phrase"]}"</p>
				<p>Birthday: {villagerInfo["birthday-string"]}</p>
				<p>Gender: {villagerInfo.gender}</p>
				<p>Personality: {villagerInfo.personality}</p>
				</div>
				</>

			)}
		</div>
	);
}
