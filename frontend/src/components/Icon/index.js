import { villagerNameToId } from "../../utils/api";

export function Icons(props) {
    return <img alt='' src={'https://acnhapi.com/v1a/icons/villagers/' + villagerNameToId (props.name)} />;
}