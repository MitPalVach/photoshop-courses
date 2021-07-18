import React, {useState} from 'react';
import {Button, Htag, P, Tag} from '../components';
import {Rating} from "../components/Rating/Rating";


export default function Home(): JSX.Element {
    const [rating, setRating] = useState<number>(3)


    return (
        <>
            <Htag tag='h1'>Курсы "Мастера ногтевого сервиса"</Htag>
            <Button appearance='primary' arrow='right'>Узнать</Button>
            <Button appearance='ghost' arrow='down'>Читать</Button>
            <P size='l'>Большой</P>
            <P>Средний</P>
            <P size='s'>Маленький</P>
            <Tag size='s'>Ghost</Tag>
            <Tag size='m' color='red'>Red</Tag>
            <Tag size='s' color='green'>Green</Tag>
            <Tag color='primary'>Primary</Tag>
            <Rating rating={rating} isEditable setRating={setRating}/>
        </>
    );
}
