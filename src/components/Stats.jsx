import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import AnimatedCounter from "../components/AnimatedCounter";

const statsData = [
  { 
    label: "Participants", 
    value: 1500,
    gradient: "from-cyan-500/20 to-blue-500/20",
    icon: "👥",
    description: "Active developers & gamers"
  },
  { 
    label: "Colleges", 
    value: 50,
    gradient: "from-emerald-500/20 to-teal-500/20",
    icon: "🏫",
    description: "Participating institutions"
  },
  { 
    label: "Events", 
    value: 15,
    gradient: "from-violet-500/20 to-purple-500/20",
    icon: "🎪",
    description: "Competitions & workshops"
  },
  { 
    label: "Audience", 
    value: 3000,
    gradient: "from-rose-500/20 to-pink-500/20",
    icon: "👁️",
    description: "Live stream viewers"
  },
];

// Particle Network Component
const ParticleNetwork = () => {
  const [particles, setParticles] = useState([]);
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  
  useEffect(() => {
    // Initialize particles
    const initialParticles = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      radius: 2 + Math.random() * 2,
      color: i % 3 === 0 ? 'rgba(34, 211, 238, 0.7)' : 
              i % 3 === 1 ? 'rgba(168, 85, 247, 0.7)' : 
              'rgba(99, 102, 241, 0.7)'
    }));
    setParticles(initialParticles);
    
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    
    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw particles
      setParticles(prev => prev.map(p => {
        let newX = p.x + p.vx;
        let newY = p.y + p.vy;
        
        // Bounce off edges
        if (newX < 0 || newX > 100) p.vx *= -1;
        if (newY < 0 || newY > 100) p.vy *= -1;
        
        return {
          ...p,
          x: newX < 0 ? 0 : newX > 100 ? 100 : newX,
          y: newY < 0 ? 0 : newY > 100 ? 100 : newY
        };
      }));
      
      // Draw particles
      particles.forEach(p => {
        const x = (p.x / 100) * canvas.width;
        const y = (p.y / 100) * canvas.height;
        
        // Draw particle
        ctx.beginPath();
        ctx.arc(x, y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();
        
        // Draw glow
        ctx.beginPath();
        ctx.arc(x, y, p.radius * 2, 0, Math.PI * 2);
        const gradient = ctx.createRadialGradient(x, y, p.radius, x, y, p.radius * 3);
        gradient.addColorStop(0, p.color.replace('0.7', '0.3'));
        gradient.addColorStop(1, 'transparent');
        ctx.fillStyle = gradient;
        ctx.fill();
      });
      
      // Draw connections
      particles.forEach((p1, i) => {
        const x1 = (p1.x / 100) * canvas.width;
        const y1 = (p1.y / 100) * canvas.height;
        
        particles.slice(i + 1).forEach(p2 => {
          const x2 = (p2.x / 100) * canvas.width;
          const y2 = (p2.y / 100) * canvas.height;
          
          const distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
          
          if (distance < 150) { // Connection distance
            const opacity = 1 - (distance / 150);
            
            // Draw connection line
            ctx.beginPath();
            ctx.moveTo(x1, y1);
            ctx.lineTo(x2, y2);
            ctx.strokeStyle = `rgba(99, 102, 241, ${opacity * 0.2})`;
            ctx.lineWidth = 1;
            ctx.stroke();
            
            // Draw animated pulse along the line
            if (Math.random() > 0.98) {
              const progress = Math.sin(Date.now() / 1000) * 0.5 + 0.5;
              const pulseX = x1 + (x2 - x1) * progress;
              const pulseY = y1 + (y2 - y1) * progress;
              
              ctx.beginPath();
              ctx.arc(pulseX, pulseY, 2, 0, Math.PI * 2);
              ctx.fillStyle = 'rgba(255, 255, 255, 0.6)';
              ctx.fill();
            }
          }
        });
      });
      
      animationRef.current = requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [particles.length]);
  
  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none opacity-40"
    />
  );
};

const Stats = () => {
  return (
    <section className="relative py-20 px-6 overflow-hidden">    {/*reduce height*/}
      {/* Particle Network Background */}
      <ParticleNetwork />
      
      {/* Subtle Grain Overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 400 400%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22 opacity=%220.04%22/%3E%3C/svg%3E')] pointer-events-none" />
      
      {/* Dark Gradient Overlay for better contrast */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/80 via-gray-900/40 to-purple-900/30 dark:from-gray-900/90 dark:via-gray-900/60 dark:to-purple-900/40" />
      
      {/* Animated Orbs for depth */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-gradient-to-r from-cyan-500/10 to-blue-500/10 animate-volumetric-flow-x blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 animate-volumetric-flow-y blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Animated Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-8"    //reduce gap
        >
          <div className="inline-block relative">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-3 text-gray-100 volumetric-text">
              TechVerse Vista{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 animate-pulse-glow">
                Impact
              </span>
            </h2>
            
            {/* Animated Underline */}
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3 }}
              className="h-1 mx-auto bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent rounded-full"
            />
          </div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="text-lg text-gray-300 mt-8 max-w-2xl mx-auto px-4"
          >
            Numbers that tell our story of innovation, community, and excellence in tech entertainment.
          </motion.p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {statsData.map((stat, index) => (
            <StatCard 
              key={index} 
              index={index}
              {...stat} 
            />
          ))}
        </div>

        
      </div>

      {/* Light Beams */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent animate-light-beam-volumetric" />
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-500/20 to-transparent animate-light-beam-volumetric" style={{ animationDelay: '1.5s' }} />
    </section>
  );
};

const StatCard = ({ label, value, gradient, icon, description, index }) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 40, 
      rotateX: 10,
      scale: 0.9 
    },
    visible: { 
      opacity: 1, 
      y: 0, 
      rotateX: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        delay: index * 0.15,
        ease: "backOut"
      }
    }
  };

  const iconVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: { 
      scale: 1, 
      rotate: 0,
      transition: {
        duration: 0.5,
        delay: index * 0.15 + 0.3,
        type: "spring",
        stiffness: 200
      }
    }
  };

  const counterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        delay: index * 0.15 + 0.4
      }
    }
  };

  return (
    <motion.div
      ref={ref}
      variants={cardVariants}
      initial="hidden"
      animate={controls}
      whileHover={{ 
        y: -10, 
        scale: 1.05,
        transition: { 
          type: "spring", 
          stiffness: 300,
          damping: 15
        }
      }}
      className={`relative group cursor-default transform-style-3d depth-hover ${index % 2 === 0 ? 'depth-layer-3' : 'depth-layer-2'}`}
    >
      {/* Card Glow Effect */}
      <div className={`absolute -inset-0.5 bg-gradient-to-r ${gradient} rounded-2xl blur opacity-0 group-hover:opacity-50 transition duration-500`} />
      
      {/* Glass Card Container */}
      <div className="relative volumetric-glass rounded-xl p-8 h-full overflow-hidden transform-style-3d">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 20% 30%, currentColor 1px, transparent 1px)`,
            backgroundSize: '20px 20px'
          }} />
        </div>

        {/* Floating Icon */}
        <motion.div
          variants={iconVariants}
          className="absolute top-4 right-4 text-4xl opacity-20"
        >
          {icon}
        </motion.div>

        {/* Animated Border */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.15 + 0.2 }}
          className="absolute inset-0 rounded-xl border border-white/10 group-hover:border-cyan-400/30 transition-colors duration-500"
        />

        {/* Content */}
        <div className="relative z-10">
          {/* Icon */}
          <motion.div
            variants={iconVariants}
            className="text-4xl mb-6"
          >
            {icon}
          </motion.div>

          {/* Counter Value */}
          <motion.div
            variants={counterVariants}
            className="text-5xl lg:text-6xl font-bold mb-4"
          >
            <div className="flex items-end">
              <div className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
                <AnimatedCounter value={value} />
              </div>
              <span className="text-cyan-400 text-3xl ml-2">+</span>
            </div>
          </motion.div>

          {/* Label */}
          <motion.h3
            variants={counterVariants}
            className="text-xl font-semibold mb-2 text-gray-100"
          >
            {label}
          </motion.h3>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15 + 0.6 }}
            className="text-sm text-gray-300"
          >
            {description}
          </motion.p>

          {/* Animated Progress Bar */}
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: index * 0.15 + 0.7, ease: "easeOut" }}
            className={`h-1 mt-6 rounded-full bg-gradient-to-r ${gradient}`}
          />
        </div>

        {/* Hover Effects */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition duration-500 rounded-xl" />
        
        {/* Particle Dots */}
        <div className="absolute bottom-4 left-4 flex space-x-1">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{
                delay: index * 0.15 + 0.8 + i * 0.1,
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className={`w-1.5 h-1.5 rounded-full ${i % 2 === 0 ? 'bg-cyan-400' : 'bg-purple-400'}`}
            />
          ))}
        </div>
      </div>

      {/* Shadow */}
      <motion.div 
        initial={{ opacity: 0.2, y: 10 }}
        whileHover={{ opacity: 0.4, y: 20 }}
        className="absolute inset-0 bg-black/20 blur-xl rounded-xl -z-10"
      />
    </motion.div>
  );
};

export default Stats;