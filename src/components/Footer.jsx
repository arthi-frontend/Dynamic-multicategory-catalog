import { motion } from "framer-motion";

function Footer() {
  return (
    <motion.footer
  className="footer"

  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}

  transition={{ duration: 0.6 }}

  viewport={{ once: true }}
>

      <div className="footer-content">

        <div className="footer-left">

          <h3>Dynamic Catalog</h3>

          <p>
            A modern multi-category product
            catalog built with React,
            showcasing dynamic rendering
            and responsive UI.
          </p>

        </div>

        <div className="footer-right">

          <h4>Tech Stack</h4>

          <ul>
            <li>React JS</li>
            <li>React Router</li>
            <li>CSS</li>
            <li>Framer Motion</li>
          </ul>

        </div>

      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} Dynamic Catalog. All rights reserved.
      </div>

    </motion.footer>
  );
}

export default Footer;