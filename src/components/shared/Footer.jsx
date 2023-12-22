import { Facebook, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <div>
      <footer className="footer items-center p-4  text-black bg-gray-100">
        <aside className="items-center grid-flow-col mx-auto md:mx-0">
          <img src="/logo.png" className="size-10" alt="" />
          <p>Copyright © 2023 - All right reserved BY Tame Task</p>
        </aside>
        <nav className="grid-flow-col gap-4 place-self-center md:justify-self-end">
          <a
            href="https://twitter.com/sabbir_offc"
            target="_blank"
            rel="noreferrer"
          >
            <Twitter />
          </a>
          <a
            href="https://www.linkedin.com/in/sabbiroffc/"
            target="_blank"
            rel="noreferrer"
          >
            <Linkedin />
          </a>
          <a
            href="https://www.facebook.com/sabbir.offc"
            target="_blank"
            rel="noreferrer"
          >
            <Facebook />
          </a>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
