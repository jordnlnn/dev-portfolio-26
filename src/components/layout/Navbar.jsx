export default function Navbar() {
  return (
    <header className="nav">
      <div className="nav__inner container">
        <a className="nav__brand">JG</a>

        <nav className="nav__links">
          <a href="#hero">Hero</a>
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  );
}
