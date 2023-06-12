import { Header } from "../../components/header";
import { getAllClassTypes } from "../../lib/api";
import Link from "next/link";
import slugify from "slugify";

const ClassCardHorizontal = ({ classType }) => {
  return (
    <Link
      href={`/classes/${slugify(classType.title)}`}
      class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
    >
      <img
        class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
        src={classType.image}
        alt=""
      />
      <div class="flex flex-col justify-between p-4 leading-normal">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {classType.title}
        </h5>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {classType.description}
        </p>
      </div>
    </Link>
  );
};

const ClassCard = ({ classType }) => {
  return (
    <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a href={`/classes/${classType.title}`}>
        <img class="rounded-t-lg" src={classType.image} alt="" />
      </a>
      <div class="p-5">
        <a href="#">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {classType.title}
          </h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {classType.description}.
        </p>
        <a
          href="#"
          class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Class Schedule
          <svg
            aria-hidden="true"
            class="w-4 h-4 ml-2 -mr-1"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </a>
      </div>
    </div>
  );
};
export default function Index({ allClassTypes }) {
  return (
    <div className="bg-background w-screen h-screen">
      <Header />
      <main className="m-10">
        <h2 className="text-accent-3 text-2xl font-bold">Types of class we offer</h2>
        <div className="flex flex-row gap-10 my-10">
          {allClassTypes.map(classType => (
            <ClassCardHorizontal classType={classType} />
          ))}
        </div>
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const allClassTypes = await getAllClassTypes();

  return {
    props: { allClassTypes }
  };
}
