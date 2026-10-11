import './Footer.css';

export default function Footer({ storeName, contact }) {
  return (
    <footer className="footer">
      <p className="footer-store">{storeName} © 2026</p>
      <p className="footer-contact">Contact: {contact}</p>
    </footer>
  );
}
