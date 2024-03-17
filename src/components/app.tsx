import {JSX} from 'react';
import Main from './main/main.tsx';
import CardInfo from '../common/card-info.ts';

export default function App(props: {cards: CardInfo[]}): JSX.Element {
  return (
    <Main cards={props.cards}/>
  );
}
