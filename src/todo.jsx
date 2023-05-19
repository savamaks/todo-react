export function Frag(props) {
    const arrTexts = props.arrTexts;
    const todo = arrTexts.map((num) => <div key={num.toString()}>{num}</div>);
    return <>{todo}</>;
}
export const arrTexts = [];