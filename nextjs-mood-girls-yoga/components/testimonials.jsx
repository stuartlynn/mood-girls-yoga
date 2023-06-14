export const Testemonial = ({ testemonial }) => {
  return (
    <div
      aria-label={`Testemonial from ${testemonial.personName}`}
      className=" w-full md:w-80 md:mx-5 "
    >
      <p className="text-3xl font-bold my-5">{testemonial.quote}</p>
      {testemonial.personName && <p className="italic">"{testemonial.personName}"</p>}
    </div>
  );
};

function shuffle(testimonials) {
  let shuffled = testimonials
    .map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);
  return shuffled;
}

export const Testemonials = ({ testemonials }) => {
  const testimonialSample = shuffle(testemonials).slice(0, 3);
  return (
    <section className="w-full md:flex flex-row overflow-x-auto md:my-20">
      {testimonialSample.map(testemonial => (
        <Testemonial testemonial={testemonial} />
      ))}
    </section>
  );
};
