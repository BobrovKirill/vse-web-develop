export default function FooterCard (props) {
    return (
        <>
            <div className={props.styles}>
                {props.children}
            </div>
        </>
    )
}