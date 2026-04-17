import Link from "next/link";

function Footer() {
  return (
    <div className="grid grid-cols-4 pt-7 pl-10 bg-[#2c2421] w-full h-full">
      <div>
        <p className="text-xl mb-4">Navigation</p>
        <ul className="text-base mb-1">
          <li>
            <Link href="/" className="mb-1">
              Home
            </Link>
          </li>
          <li>
            <Link href="/artists" className="mb-1">
              Artists
            </Link>
          </li>
          <li>
            <Link href="/events" className="mb-1">
              Events
            </Link>
          </li>
          <li>
            <Link href="/about" className="mb-1">
              About
            </Link>
          </li>
          <li>
            <Link href="/contact" className="mb-1">
              Contact
            </Link>
          </li>
        </ul>
      </div>

      <div>
        <p className="text-xl mb-4">Contact</p>
        <ul className="text-base mb-1">
          <li className="mb-1">
            <Link href="mailto:artbloc@outlook.com" target="_blank">
              Email
            </Link>
          </li>
          <li className="mb-1">
            <Link
              href="https://www.instagram.com/artblocstudio/"
              target="_blank"
            >
              Instagram
            </Link>
          </li>
          <li className="mb-1">
            <Link
              href="https://www.facebook.com/profile.php?id=61579428009401"
              target="_blank"
            >
              Facebook
            </Link>
          </li>
        </ul>
      </div>

      <div>
        <p className="text-xl mb-4">Address</p>

        <p className="text-base mb-1">TBD</p>
      </div>
    </div>
  );
}

export default Footer;
