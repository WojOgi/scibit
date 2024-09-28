export default function Header() {
  return (
    <>
      <h1>SciBit - Are Scientists Interested in Bitcoin?</h1>
      <section>
        <p>
          The graphs below give a rough impression on{" "}
          <b>how popular Bitcoin-related topics are among scientists</b> working
          at various institutions around the world.
        </p>
        <p>
          The data is based on the number of peer-reviewed articles in the
          <b>Scopus database</b> that mention the term "Bitcoin" in their title,
          abstract, or keywords. The numbers of publications are aggregated
          across all relevant scientific disciplines:{" "}
          <b>
            Computer Science, Economics, Finance, Business, Management,
            Mathematics, Decision Sciences, Social Sciences, and others.
          </b>
        </p>
        <p>
          Graphs are powered by
          <a href={"https://recharts.org/"} target={"_blank"}>
            {" "}
            Recharts.org
          </a>
          .
        </p>
      </section>
    </>
  );
}
