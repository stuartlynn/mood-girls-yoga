import { getAllClassTypes, getAllClasses } from "../../lib/api";
import { Header } from "../../components/header";
import slugify from "slugify";

const ClassDetails = ({ classDetails }) => {
  return (
    <section>
      <h3>{classDetails.title}</h3>
      <p>{classDetails.description}</p>
      <p>Total Participants: {classDetails.numberOfParticipants}</p>
      <p>Total Youth Tickers: {classDetails.numberOfYouthSpaces}</p>
    </section>
  );
};

export default function Class({ classes }) {
  console.log("classes ", classes);
  return (
    <div className="bg-background w-screen h-screen">
      <Header />
      <main>
        {classes.length === 0 && (
          <p>No classes of this type are scheduled, check back later</p>
        )}
        {classes.map(specificClass => (
          <ClassDetails classDetails={specificClass} />
        ))}
      </main>
    </div>
  );
}

export async function getStaticPaths() {
  const classes = await getAllClassTypes();
  const paths = {
    paths: classes.map(c => `/classes/${slugify(c.title)}`),
    fallback: false
  };
  console.log("paths ", paths);
  return paths;
}

export async function getStaticProps() {
  const classes = await getAllClasses();

  return {
    props: { classes }
  };
}
