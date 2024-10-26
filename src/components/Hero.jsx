import { motion } from 'framer-motion';
import profileImage from '../images/profile.jpg';

const HeroText = () => (
  <motion.div 
    className="text-center md:text-left md:mr-12 mb-5 md:mb-0"
    initial={{ opacity: 0, y: -20 }} 
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }} 
    viewport={{ once: true }} 
  >
    <h1 className="text-4xl font-bold">Moheb Adel</h1>
    <h2 className="text-2xl text-gray-600">Full Stack Developer</h2>
    <p className="mt-4 font-serif font-bold">
      I&apos;m a passionate Full Stack Developer with expertise in Flutter, AI integration, and responsive design. 
      I love building modern, scalable applications.
    </p>
  </motion.div>
);

const HeroImage = () => (
  <motion.div 
    className="mt-0"
    initial={{ opacity: 0, scale: 0.8 }}
    whileInView={{ opacity: 1, scale: 1 }} 
    transition={{ duration: 0.5, delay: 0.2 }} 
    viewport={{ once: true }}
  >
    <img
      src={profileImage}
      alt="Moheb Adel"
      className="w-50 h-50 rounded-full"
    />
  </motion.div>
);

const Hero = () => {
  return (
    <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-center p-10 mb-10">
      <HeroText />
      <HeroImage />
    </div>
  );
};

export default Hero;
