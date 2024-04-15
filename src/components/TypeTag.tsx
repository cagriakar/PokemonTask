import Tag from './Tag';

const typeColorSchema = {
  normal: '#A8A77A',
  fire: '#EE8130',
  water: '#6390F0',
  electric: '#F7D02C',
  grass: '#7AC74C',
  ice: '#96D9D6',
  fighting: '#C22E28',
  poison: '#A33EA1',
  ground: '#E2BF65',
  flying: '#A98FF3',
  psychic: '#F95587',
  bug: '#A6B91A',
  rock: '#B6A136',
  ghost: '#735797',
  dragon: '#6F35FC',
  dark: '#705746',
  steel: '#B7B7CE',
  fairy: '#D685AD',
  undefined: '#fff'
} as const;

const typeColorTextSchema = {
  normal: '#4d4d32',
  fire: '#5e2d08',
  water: '#0b2d74',
  electric: '#7b6304',
  grass: '#37611f',
  ice: '#225e5b',
  fighting: '#fff',
  poison: '#fff',
  ground: '#6b5314',
  flying: '#280c73',
  psychic: '#7b0428',
  bug: '#50590d',
  rock: '#62571d',
  ghost: '#fff',
  dragon: '#fff',
  dark: '#fff',
  steel: '#34344c',
  fairy: '#602040',
  undefined: '#fff'
} as const;

type Props = {
  type: string;
};

export default function TypeTag({ type }: Props) {
  return (
    <Tag
      text={type}
      styleContainer={{ backgroundColor: typeColorSchema[type as keyof typeof typeColorSchema] }}
      styleText={{ color: typeColorTextSchema[type as keyof typeof typeColorTextSchema] }}
    />
  );
}
