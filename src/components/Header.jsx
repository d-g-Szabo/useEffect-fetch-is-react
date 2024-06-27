import "./Header.css";
// importing from public folder
// import logo from "/assets/images/googlelogo_color_272x92dp.png";

export default function Header() {
  return (
    <>
      <header>
        <img
          src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
          alt="Google Logo"
        />
        <h1>Daniel&apos;s Burgers</h1>
        <nav>
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
          <a href="/testimonials">Testimonials</a>
        </nav>
      </header>
    </>
  );
}
