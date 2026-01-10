export default function Footer() {
  return (
    <section style={{ paddingTop: "20px", paddingBottom: "20px" }}>
      <p
        style={{
          fontSize: "var(--fs-0)",
          textAlign: "center",
          margin: "0",
          padding: "0",
        }}
      >
        Deisgned and built by{" "}
        <a
          href="https://github.com/jordnlnn/"
          target="_blank"
          rel="noreferrer"
          style={{ textDecoration: "none" }}
        >
          Jordan Goldtooth
        </a>{" "}
        &hearts;
      </p>
    </section>
  );
}
