import { NextPage, GetServerSideProps } from "next";

//* components *//
import { Cart } from "../components";

//* database *//
import { getInitialPokemons } from "../database";

//* interfaces *//
import { IPokemon, IPokemons } from "../interfaces";
import { PrincipalLayout } from "../layouts";

interface HomePageProps {
  pokemons: IPokemon[];
}

const HomePage: NextPage<HomePageProps> = ({ pokemons }) => {
  return (
    <PrincipalLayout
      title="Pokemon Home"
      description="Pagina principal de la prueba de pokemon app"
    >
      <article className="flex flex-wrap gap-5 justify-center pt-5 bg-yellow-300">
        {pokemons.map((pokemon) => (
          <Cart key={pokemon.name} name={pokemon.name} />
        ))}
      </article>
    </PrincipalLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const { results: pokemons }: IPokemons = await getInitialPokemons();

  return {
    props: {
      pokemons: pokemons,
    },
  };
};

export default HomePage;
