import HeaderCard from "../HeaderCard/HeaderCard.jsx";
import FooterCard from "../FooterCard/FooterCard.jsx";
import cardStyles from "./style.module.css";
import {useEffect} from "react";


export default function Card(props) {
    const { title = {}, body = {}, userId = {} } = props.data;

    useEffect(() => {
        console.log('card mounted successfully');

        return () => {
            console.log('card unmounted successfully');
        }
    }, []);

    return (
        <>
            <div className={cardStyles.card}>
                <HeaderCard  styles='header-card'><p>{title}</p></HeaderCard>
                <p className="body">{body}</p>
                <FooterCard  styles="footer-card"><p>{userId}</p></FooterCard>
            </div>
        </>
    )
}