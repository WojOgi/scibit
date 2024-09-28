export default function Header() {
  return (
    <>
      <h1>SciBit - Are Scientists Interested in Bitcoin?</h1>
      <section>
        <p>
          The graphs below give a rough impression on how popular
          Bitcoin-related topics are among scientists working at various
          institutions around the world.
        </p>
        <p>
          The data is based on the number of peer-reviewed articles in the
          Scopus database that mention the term "Bitcoin" in their title,
          abstract, or keywords. The numbers of publications are aggregated
          across all relevant scientific disciplines: Computer Science,
          Economics, Finance, Business, Management, Mathematics, Decision
          Sciences, Social Sciences, etc.
        </p>
      </section>
      <h2
        style={{
          display: "flex",
          justifyContent: "flex-end",
          fontSize: "20px",
        }}
      >
        Number of publications referencing "Bitcoin" (left) Normalized by a
        population (right)
      </h2>
    </>
  );
}
