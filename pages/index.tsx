import { NextPage, GetServerSideProps } from "next";

//* layout *//
import { PrincipalLayout } from "../layouts";

//* components *//
import { Cart } from "../components";

//* database *//
import { getInitialPokemons, getPokemonByName } from "../database";

//* interfaces *//
import { IPokemon, IPokemons } from "../interfaces";

interface HomePageProps {
  pokemons: string[];
}

const HomePage: NextPage<HomePageProps> = ({ pokemons }) => {
  return (
    <PrincipalLayout
      title="Pokemon Home"
      description="Pagina principal de la prueba de pokemon app"
    >
      <article className="min-h-screen flex flex-wrap gap-5 justify-center pt-5 bg-yellow-300">
        {pokemons.map((pokemon) => (
          <Cart key={pokemon} name={pokemon} />
        ))}
      </article>
    </PrincipalLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const { results }: IPokemons = await getInitialPokemons();
  let pokemons: string[] = [];

  for (let i = 0; i < results.length; i++) {
    const pokemon = await getPokemonByName(results[i].name);
    pokemons.push(pokemon.name);
  }

  return {
    props: {
      pokemons: pokemons,
    },
  };
};

export default HomePage;
