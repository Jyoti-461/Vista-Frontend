import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

// Team data structure
const teamData = [
  // Core Committee
  { id: 1, name: "Anuj", council: "President", image: 1 },
  { id: 2, name: "Shubhankar Patil", council: "Vice President", image: 2 },
  { id: 3, name: "Aastik Deore", council: "Secretary", image: 3 },
  { id: 4, name: "Divya Sharma", council: "Treasurer", image: 4 },
  { id: 5, name: "Rohan Mehta", council: "Technical Head", image: 5 },
  { id: 6, name: "Priya Singh", council: "Events Head", image: 6 },
  { id: 7, name: "Arjun Patel", council: "Marketing Head", image: 7 },
  { id: 8, name: "Neha Gupta", council: "Design Head", image: 8 },
  { id: 9, name: "Vikram Joshi", council: "Sponsorship Head", image: 9 },
  
  // Technical Team
  { id: 10, name: "Siddharth Rao", council: "Web Development", image: 10 },
  { id: 11, name: "Ananya Reddy", council: "App Development", image: 11 },
  { id: 12, name: "Karan Malhotra", council: "DevOps", image: 12 },
  { id: 13, name: "Isha Patel", council: "UI/UX Designer", image: 13 },
  { id: 14, name: "Rajesh Kumar", council: "Database Manager", image: 14 },
  
  // Events Team
  { id: 15, name: "Pooja Sharma", council: "Event Coordinator", image: 15 },
  { id: 16, name: "Rahul Verma", council: "Logistics Head", image: 16 },
  { id: 17, name: "Simran Kaur", council: "Hospitality Head", image: 17 },
  { id: 18, name: "Amit Singh", council: "Stage Manager", image: 18 },
];

// Filter options
const councilFilters = [
  "All",
  "Core Committee",
  "Technical Team",
  "Digital Team"
];

// Council mapping
const councilCategories = {
  "President": "Core Committee",
  "Vice President": "Core Committee",
  "Secretary": "Core Committee",
  "Treasurer": "Core Committee",
  "Technical Head": "Core Committee",
  "Events Head": "Core Committee",
  "Marketing Head": "Core Committee",
  "Design Head": "Core Committee",
  "Sponsorship Head": "Core Committee",
  "Web Development": "Technical Team",
  "App Development": "Technical Team",
  "DevOps": "Technical Team",
  "UI/UX Designer": "Technical Team",
  "Database Manager": "Technical Team",
  "Event Coordinator": "Digital Team",
  "Logistics Head": "Digital Team",
  "Hospitality Head": "Digital Team",
  "Stage Manager": "Digital Team",
};

const TeamMembers = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [filteredTeam, setFilteredTeam] = useState(teamData);
  const containerRef = useRef(null);
  const controls = useAnimation();
  const isInView = useInView(containerRef, {
    once: true,
    amount: 0.1,
    margin: "-100px 0px"
  });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  useEffect(() => {
    if (activeFilter === "All") {
      setFilteredTeam(teamData);
    } else {
      const filtered = teamData.filter(member => 
        councilCategories[member.council] === activeFilter
      );
      setFilteredTeam(filtered);
    }
  }, [activeFilter]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  };

  return (
    <section
      id="Organisers"
      className="relative py-12 sm:py-16 md:py-20 overflow-hidden bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950 transition-colors duration-500"
      style={{ scrollMarginTop: '80px' }}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-primary/5 to-transparent" />
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-t from-purple-500/5 to-transparent" />
      </div>

      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(to right, #888 1px, transparent 1px),
                          linear-gradient(to bottom, #888 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-gray-100">
            Meet Our <span className="text-primary">Team</span>
          </h2>
          <div className="h-1 w-24 sm:w-32 mx-auto bg-gradient-to-r from-transparent via-primary to-transparent rounded-full" />
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mt-6 max-w-2xl mx-auto">
            The passionate individuals behind TechVerse Vista 2026 who work tirelessly to make this event a success.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-12"
        >
          {councilFilters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-lg text-sm sm:text-base font-medium transition-all duration-300 ${
                activeFilter === filter
                  ? 'bg-primary text-white shadow-lg'
                  : 'bg-white/80 dark:bg-gray-800/80 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
            >
              {filter}
            </button>
          ))}
        </motion.div>

        {/* Team Grid */}
        <motion.div
          ref={containerRef}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6"
        >
          {filteredTeam.map((member, index) => (
            <TeamCard
              key={member.id}
              member={member}
              index={index}
              isMobile={isMobile}
            />
          ))}
        </motion.div>

        {/* Empty State */}
        {filteredTeam.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-gray-500 dark:text-gray-400 text-lg">
              No team members found for this category.
            </p>
          </motion.div>
        )}

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 sm:mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 max-w-3xl mx-auto"
        >
          {[
            { value: teamData.length, label: "Team Members" },
            { value: "4+", label: "Core Committee" },
            { value: "5+", label: "Technical Team" },
            { value: "4+", label: "Events Team" },
          ].map((stat, idx) => (
            <div
              key={idx}
              className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-4 text-center border border-gray-200 dark:border-gray-700"
            >
              <div className="text-2xl sm:text-3xl font-bold text-primary">
                {stat.value}
              </div>
              <div className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const TeamCard = ({ member, index, isMobile }) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    amount: 0.1,
    margin: "-50px 0px"
  });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        delay: index * 0.05,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  };

  const hoverVariants = {
    rest: {
      y: 0,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    hover: {
      y: isMobile ? -2 : -5,
      scale: isMobile ? 1.02 : 1.05,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  return (
    <motion.div
      ref={ref}
      variants={cardVariants}
      initial="hidden"
      animate={controls}
      whileHover="hover"
     
      className="group relative"
      style={{ willChange: 'transform, opacity' }}
    >
      {/* Card */}
      <div className="relative bg-white dark:bg-gray-800/80 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
        {/* Image Container */}
        <div className="relative h-48 sm:h-56 w-full overflow-hidden">
          {/* Loading Skeleton */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 animate-pulse" />
          
          {/* Actual Image */}
          <img
            src={`/images/${member.image}.jpeg`}
            alt={member.name}
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            loading="lazy"
            onLoad={(e) => {
              e.target.style.opacity = 1;
            }}
            style={{ opacity: 0 }}
          />
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
          
          {/* Council Badge */}
          <div className="absolute top-3 right-3">
            <span className={`px-2 py-1 text-xs font-medium rounded-full ${
              councilCategories[member.council] === "Core Committee"
                ? "bg-primary/20 text-primary border border-primary/30"
                : councilCategories[member.council] === "Technical Team"
                ? "bg-blue-500/20 text-blue-400 border border-blue-500/30"
                : "bg-purple-500/20 text-purple-400 border border-purple-500/30"
            }`}>
              {councilCategories[member.council].split(' ')[0]}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-4">
          <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-1 truncate">
            {member.name}
          </h3>
          <p className="text-sm text-primary font-medium mb-3">
            {member.council}
          </p>
          
          
        </div>

        {/* Hover Effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      </div>

      {/* Glow Effect */}
      <div className="absolute -inset-0.5 bg-gradient-to-br from-primary/20 to-purple-500/20 rounded-xl blur opacity-0 group-hover:opacity-40 transition-opacity duration-300 -z-10" />
    </motion.div>
  );
};

export default TeamMembers;