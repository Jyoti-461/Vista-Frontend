import { motion } from "framer-motion";
import {
  FaLaptopCode,
  FaGamepad,
  FaCrosshairs,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const events = [
  {
    title: "Web-a-Thon",
    description:
      "Build innovative UI/UX with Complex Clustering Problem Statement under time pressure with your team.",
    icon: <FaLaptopCode />,
    image: "/about/event/hackathon.png",
    route: "/events/webathon",
    gradient: "from-cyan-500/20 to-blue-500/20",
    depth: "depth-layer-3",
    stats: [
      { value: "20+", label: "Participants" },
      { value: "₹3.5K", label: "Prize Pool" },
      { value: "4h+", label: "Duration" }
    ]
  },
  {
    title: "BGMI E-Sports",
    description:
      "Battle it out in intense BGMI matches showcasing strategy, teamwork, and survival skills.",
    icon: <FaGamepad />,
    image: "/about/event/bgmi.png",
    route: "/events/bgmi",
    gradient: "from-green-500/20 to-emerald-500/20",
    depth: "depth-layer-2",
    stats: [
      { value: "20+", label: "Teams" },
      { value: "₹5K", label: "Prize Pool" },
      { value: "3h+", label: "Duration" }
    ]
  },
  {
    title: "Valorant E-Sports",
    description:
      "Battle it out in intense 5v5 Valorant matches showcasing powers, teamwork, and elimination skills.",
   icon: <FaCrosshairs />,
   image: "/about/event/valorant.png",
  route: "/events/valorant",
  gradient: "from-red-500/20 to-pink-500/20",
  depth: "depth-layer-4",
  stats: [
    { value: "12+", label: "Teams" },
    { value: "₹5K", label: "Prize Pool" },
    { value: "3h+", label: "Duration" }
  ]
  },
];

const Events = () => {
  const navigate = useNavigate();

  return (
    <motion.section
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      id="events"
      className="relative py-8 overflow-hidden bg-lightbg dark:bg-darkbg transition-colors duration-500"
    >
      {/* Volumetric Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-gradient-to-r from-cyan-500/10 to-purple-500/10 animate-volumetric-flow-x blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-gradient-to-r from-blue-500/10 to-pink-500/10 animate-volumetric-flow-y blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gradient-to-r from-primary/5 to-indigo-500/5 animate-volumetric-swarm blur-3xl" />
      </div>

      {/* Particle Effects */}
      <div className="absolute inset-0 particle-container">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-2 h-2 rounded-full ${
              i % 2 === 0 ? 'bg-cyan-400/40' : 'bg-purple-400/40'
            }`}
            style={{
              left: `${20 + i * 25}%`,
              top: `${30 + i * 10}%`,
              animation: `volumetric-fog ${15 + i * 2}s ease-in-out infinite`,
              transformStyle: 'preserve-3d'
            }}
          />
        ))}
      </div>

      <div className="relative z-10">
        <div className="text-center mb-16">
          {/* Animated Heading with Depth */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="inline-block"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-gray-200 volumetric-text">
              TechVerse Vista{" "}
              <span className="text-primary drop-shadow-[0_0_15px_rgba(99,102,241,0.8)] animate-pulse-glow">
                Events
              </span>
            </h2>
            <div className="h-1 w-32 mx-auto bg-gradient-to-r from-transparent via-primary to-transparent animate-gradient-shift" />
          </motion.div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-lg text-gray-600 dark:text-gray-400 mt-6 max-w-2xl mx-auto px-4"
          >
            Dive into immersive experiences where technology meets entertainment. 
            Each event is a journey through innovation and excitement.
          </motion.p>
        </div>

        {/* Cards Grid with Staggered Animation */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3
              }
            }
          }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4"
        >
          {events.map((event, index) => (
            <EventCard
              key={index}
              index={index}
              {...event}
              onClick={() => navigate(event.route)}
            />
          ))}
        </motion.div>

        {/* Floating CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="text-center mt-16"
        >
          
        </motion.div>
      </div>

      {/* Light Beams */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent animate-light-beam-volumetric" />
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-500/30 to-transparent animate-light-beam-volumetric" style={{ animationDelay: '1s' }} />
    </motion.section>
  );
};

const EventCard = ({ title, description, icon, image, gradient, depth, onClick, index, stats }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, rotateX: 10 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      whileHover={{ 
        y: -15,
        scale: 1.03,
        transition: { 
          type: "spring", 
          stiffness: 300,
          damping: 15
        }
      }}
      viewport={{ once: true }}
      transition={{ 
        duration: 0.6,
        delay: index * 0.1,
        ease: "backOut"
      }}
      className={`relative group cursor-pointer ${depth} depth-hover`}
      onClick={onClick}
    >
      {/* Glow Effect */}
      <div className={`absolute -inset-0.5 bg-gradient-to-r ${gradient} rounded-3xl blur opacity-0 group-hover:opacity-70 transition duration-500 animate-bloom-pulse`} />
      
      {/* Card Container */}
      <div className="relative volumetric-glass rounded-2xl overflow-hidden transform-style-3d h-full">
        {/* Image with Parallax Effect */}
        <motion.div 
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.4 }}
          className="relative h-48 w-full overflow-hidden"
        >
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transform-gpu"
          />
          {/* Gradient Overlay */}
          <div className={`absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent ${gradient}`} />
          
          {/* Floating Icon */}
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-4 right-4 text-4xl text-white/90 neon-primary"
          >
            {icon}
          </motion.div>
          
          {/* Title Overlay */}
          <div className="absolute bottom-4 left-4 right-4">
            <h3 className="text-2xl font-bold text-white drop-shadow-lg">
              {title}
            </h3>
            <div className="h-0.5 w-12 bg-gradient-to-r from-white to-transparent mt-2" />
          </div>
        </motion.div>

        {/* Card Content */}
        <div className="p-6 transform-style-3d">
          {/* Description */}
          <motion.p
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            transition={{ delay: 0.3 + index * 0.1 }}
            className="text-sm mb-6 text-gray-600 dark:text-gray-300 leading-relaxed"
          >
            {description}
          </motion.p>

          {/* Stats/Features - UNIQUE FOR EACH EVENT */}
          <div className="flex items-center justify-between mb-6">
            {stats.map((stat, statIndex) => (
              <div key={statIndex} className="text-center">
                <div className="text-2xl font-bold text-primary">{stat.value}</div>
                <div className="text-xs text-gray-500 dark:text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Animated CTA Button */}
          <motion.div
            whileHover={{ x: 5 }}
            className="inline-flex items-center text-primary font-medium group/cta"
          >
            <span className="relative">
               View Details
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-purple-500 group-hover/cta:w-full transition-all duration-300" />
            </span>
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
              className="ml-2"
            >
              →
            </motion.div>
          </motion.div>

          {/* Particle Dots */}
          <div className="absolute bottom-4 right-4 flex space-x-1">
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                animate={{ scale: [1, 1.5, 1] }}
                transition={{ 
                  duration: 1.5, 
                  repeat: Infinity,
                  delay: i * 0.3,
                  ease: "easeInOut"
                }}
                className={`w-1.5 h-1.5 rounded-full ${i % 2 === 0 ? 'bg-cyan-400' : 'bg-purple-400'}`}
              />
            ))}
          </div>
        </div>

        {/* Edge Glow */}
        <div className="absolute -inset-px rounded-2xl bg-gradient-to-r from-transparent via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />
        
        {/* Hover Light Effect */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />
      </div>

      {/* Shadow */}
      <motion.div 
        initial={{ opacity: 0.3, y: 10 }}
        whileHover={{ opacity: 0.5, y: 20, scale: 1.05 }}
        className="absolute inset-0 bg-black/20 blur-xl rounded-2xl -z-10"
      />
    </motion.div>
  );
};

export default Events;