import HeaderCard from "../HeaderCard/HeaderCard.jsx";
import FooterCard from "../FooterCard/FooterCard.jsx";


export default function Card(props) {
    const { header = {}, body = {}, footer = {} } = props.data;
    return (
        <>
            <div className="card">
                <HeaderCard  styles={header.className}><p>{header.content}</p></HeaderCard>
                <p className={body.className}>{body.content}</p>
                <FooterCard  styles={footer.className}><p>{footer.content}</p></FooterCard>
            </div>
        </>
    )
}