import React from "react";

const Footer = () => {
  return (
    <footer >
      
      <div>
        <div className="footer sm:footer-horizontal bg-neutral text-neutral-content grid-rows-2 p-10">
            {/* Services */}
                <nav>
                    <h6 className="footer-title">Services</h6>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>

                {/* Company */}
                <nav>
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>

                {/* Legal */}
                <nav>
                    <h6 className="footer-title">Legal</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>

                {/* Social */}
                <nav>
                    <h6 className="footer-title">Social</h6>
                    <a className="link link-hover">Twitter</a>
                    <a className="link link-hover">Instagram</a>
                    <a className="link link-hover">Facebook</a>
                    <a className="link link-hover">GitHub</a>
                </nav>

                {/* Explore */}
                <nav>
                    <h6 className="footer-title">Explore</h6>
                    <a className="link link-hover">Features</a>
                    <a className="link link-hover">Enterprise</a>
                    <a className="link link-hover">Security</a>
                    <a className="link link-hover">Pricing</a>
                </nav>

                {/* Apps */}
                <nav>
                    <h6 className="footer-title">Apps</h6>
                    <a className="link link-hover">Mac</a>
                    <a className="link link-hover">Windows</a>
                    <a className="link link-hover">iPhone</a>
                    <a className="link link-hover">Android</a>
                </nav>

        </div>
        <div className="sm:footer-horizontal bg-neutral text-neutral-content grid-rows-2 p-10 ">
            {/* Logo + Copyright */}
            <aside className=" flex justify-center items-center gap-3 mt-6">
                <svg
                width="36"
                height="36"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                className="fill-current"
                >
                <path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847" />
                </svg>

                <p>
                Copyright © {new Date().getFullYear()} - All right reserved
                </p>
            </aside>

            {/* Social Icons */}
            <nav className="col-span-full flex justify-center gap-4 mt-4">
                <a>
                {/* Twitter */}
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" className="fill-current text-white" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775..." />
                </svg>
                </a>

                <a>
                {/* YouTube */}
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" className="fill-current text-white" viewBox="0 0 24 24">
                    <path d="M19.615 3.184c-3.604-.246-11.631..." />
                </svg>
                </a>

                <a>
                {/* Facebook */}
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" className="fill-current text-white" viewBox="0 0 24 24">
                    <path d="M9 8h-3v4h3v12h5v-12h3.642..." />
                </svg>
                </a>
            </nav>
        </div>
      </div>

      

    </footer>
  );
};

export default Footer;