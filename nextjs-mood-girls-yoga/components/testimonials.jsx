export const Testemonial = ({ testemonial }) => {
  console.log("testemonial ", testemonial);
  return (
    <div
      aria-label={`Testemonial from ${testemonial.personName}`}
      className="w-80 mx-5 border-accent-1 border-solid"
    >
      <p className="text-3xl font-bold my-5">{testemonial.quote}</p>
      <p className="italic">"{testemonial.personName}"</p>
    </div>
  );
};

export const Testemonials = ({ testemonials }) => {
  return (
    <section className="w-full flex flex-row overflow-x-auto my-20">
      {testemonials.map(testemonial => (
        <Testemonial testemonial={testemonial} />
      ))}
    </section>
  );
};
