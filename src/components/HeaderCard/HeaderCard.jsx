export default function HeaderCard(props) {
    return (
        <>
            <div className={props.styles}>
                {props.children}
            </div>
        </>
    )
}