import HeaderCard from "../HeaderCard/HeaderCard.jsx";
import FooterCard from "../FooterCard/FooterCard.jsx";
import cardStyles from "./style.module.css";
import {useEffect} from "react";


export default function Card(props) {
    const { header = {}, body = {}, footer = {} } = props.data;

    useEffect(() => {
        console.log('card mounted successfully');

        return () => {
            console.log('card unmounted successfully');
        }
    }, []);

    return (
        <>
            <div className={cardStyles.card}>
                <HeaderCard  styles={header.className}><p>{header.content}</p></HeaderCard>
                <p className={body.className}>{body.content}</p>
                <FooterCard  styles={footer.className}><p>{footer.content}</p></FooterCard>
            </div>
        </>
    )
}