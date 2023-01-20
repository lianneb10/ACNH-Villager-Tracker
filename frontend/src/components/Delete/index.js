import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { deleteVillager } from "../../utils/api";

export default function Delete(props) {
const [deletePopUp, setDeletePopUp] = useState(false);
const navigate = useNavigate();
 let { id } = useParams();

return (
	<div className='delete-villager'>
		{!deletePopUp ? (
			<button
				id='delete-btn'
				className='btn btn-danger '
				onClick={setDeletePopUp}>
				Delete {props.villager.name}
			</button>
		) : null}
		{deletePopUp ? (
			<div className='delete-popup'>
				<p>Are you sure you wish to delete this villager?</p>
				<button
					id='delete-btn'
					className='btn btn-danger '
					onClick={async () => {
						await deleteVillager(props.villager._id);
						props.refresh();
                        navigate(`/island/${id}`)
					}}>
					Yes
				</button>
				<button
					id='edit-btn'
					className='btn btn-danger '
					onClick={() => {
						setDeletePopUp(false);
					}}>
					No
				</button>
			</div>
		) : null}
	</div>
);
}
