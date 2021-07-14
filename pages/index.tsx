import React from 'react';
import {Button, Htag, P, Tag} from '../components';


export default function Home(): JSX.Element {
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
            <Tag color='primary'>Blue</Tag>
        </>
    );
}
