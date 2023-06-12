import { getAllClassTypes } from "../lib/api";
import { Header } from "../components/header";

export default function Index({ allClassTypes }) {
  return (
    <div className="bg-background w-screen h-screen">
      <Header />
      <main>
        <h2>Classes</h2>
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const getAllClassTypes = await getAllClassTypes();

  return {
    props: { allClassTypes }
  };
}
