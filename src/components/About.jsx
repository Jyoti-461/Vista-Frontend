import { motion } from "framer-motion";
import VerticalImageScroll from "./VerticalImageScroll";

const eventImages = Array.from({ length: 9 }, (_, i) =>
  `/about/event/${i + 1}.jpg`
);

const collegeImages = Array.from({ length: 9 }, (_, i) =>
  `/about/college/${i + 1}.jpg`
);

const About = () => {
  return (
    <section
      id="about"
      className="py-24 px-6 bg-white dark:bg-black transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto space-y-28">

        {/* ===== ABOUT COLLEGE ===== */}
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
              About TIMSCDR 🏢
            </h2>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Thakur Institute of Management Studies, Career Development & Research
              (TIMSCDR) 
              <br></br>is an autonomous institute known for academic excellence
              and innovation-driven learning.
              Thakur Institute of Management Studies, Career Development & Research (TIMSCDR),
               an autonomous and linguistic minority institute, proudly presents Tech-Verse-Vista
                2026—a dynamic fusion of technical brilliance, cultural expression, and sporting 
                enthusiasm.
            </p>
          </motion.div>

          {/* Images */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <VerticalImageScroll images={collegeImages} speed={60} />
          </motion.div>
        </div>

        {/* ===== ABOUT EVENT ===== */}
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Images */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <VerticalImageScroll images={eventImages} speed={60} />
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
              About TechVerse Vista 📜
            </h2>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
  We are proudly celebrating the <strong>26th edition</strong> of our Technical Fest,
  continuing a legacy of excellence spanning over <strong>20 years</strong>.
  <strong> TechVerse Vista 2026</strong> is TIMSCDR’s flagship techno-cultural festival,
  bringing together innovation, creativity, and collaboration.
  The TIMSCDR Technical Fest was established in <strong>2006</strong>.
</p>

<p className="text-gray-600 dark:text-gray-400 leading-relaxed">
  Tech + Verse + Vista represents technology, a universe of ideas,
  and a forward-looking vision that shapes tomorrow.
</p>

          </motion.div>
        </div>

        

      </div>
    </section>
  );
};

export default About;
