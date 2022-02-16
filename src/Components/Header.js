import email from "../Images/Mail.png";
function Header() {
  return (
    <main>
      <h4>Mirza Husic</h4>
      <h5>Electrical engineer</h5>
      <button>
        <img src={email} />
        <a className="email-link" href="mailto:mirza.huc@gmail.com">
          Email
        </a>
      </button>
    </main>
  );
}
export default Header;
