import { NextPage, GetServerSideProps } from "next";

//* layout *//
import { PrincipalLayout } from "../layouts";

//* components *//
import { Cart } from "../components";

//* database *//
import { getInitialPokemons } from "../database";

//* interfaces *//
import { IPokemon, IPokemons, Pokemon } from "../interfaces";

interface HomePageProps {
  pokemons: Pokemon[];
}

const HomePage: NextPage<HomePageProps> = ({ pokemons }) => {
  return (
    <PrincipalLayout
      title="Pokemon Home"
      description="Pagina principal de la prueba de pokemon app"
    >
      <article className="min-h-screen flex flex-wrap gap-5 justify-center pt-5 bg-yellow-300">
        {pokemons.map((pokemon) => (
          <Cart key={pokemon.name} name={pokemon.name} image={pokemon.image} />
        ))}
      </article>
    </PrincipalLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const { results }: IPokemons = await getInitialPokemons();
  let pokemons: Pokemon[] = results.map((pokemon, index) => ({
    name: pokemon.name,
    image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${
      index + 1
    }.png`,
  }));

  return {
    props: {
      pokemons: pokemons,
    },
  };
};

export default HomePage;
