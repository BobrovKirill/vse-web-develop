export default function HeaderCard(props) {
    console.log(props);
    return (
        <>
            <div className={props.styles}>
                {props.children}
            </div>
        </>
    )
}