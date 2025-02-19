import {Accordion as Accordions, AccordionItem} from "@heroui/react";
import s from './Accordion.module.scss'
import { FAQ } from "@/shared/constants/faq";
import { div } from "framer-motion/m";

export const Accordion = () => {
    return (
        <>
            <h1>Часто задаваемые вопросы</h1>
            <Accordions className={s.accordion}>
                {FAQ.map((faq, index) => (
                    <AccordionItem key={index} aria-label={faq.question} title={faq.question}>
                        <p>{faq.answer}</p>
                    </AccordionItem>
                ))}
            </Accordions>
        </>
    );
}