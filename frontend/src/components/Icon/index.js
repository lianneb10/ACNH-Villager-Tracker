import { villagerIcons } from "../../utils/api";

export function Icons(props) {
    return (
        <img alt="" src={villagerIcons(props.name)}/>
    );
}