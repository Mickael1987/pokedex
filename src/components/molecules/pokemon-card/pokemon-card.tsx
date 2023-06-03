export interface PokemonCardProps {
	title: string;
}

export default function PokemonCard(props: PokemonCardProps) {
  return <><h1>{ props.title }</h1></>;
}
