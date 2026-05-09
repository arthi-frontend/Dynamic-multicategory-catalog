import { motion } from "framer-motion";

function HeroSection() {
  return (
    <section className="hero-section">

      <motion.div
        className="hero-content"

        initial={{
          opacity: 0,
          y: 40,
        }}

        animate={{
          opacity: 1,
          y: 0,
        }}

        transition={{
          duration: 0.8,
        }}
      >

        <h1>
          Explore Premium
          <span>
            {" "}
            Tech & Vehicles
          </span>
        </h1>

        <p>
          Discover world-class cars,
          bikes, smartphones, and
          computers in one beautifully
          designed catalog experience.
        </p>

      </motion.div>

    </section>
  );
}

export default HeroSection;