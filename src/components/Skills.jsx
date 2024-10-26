import { motion } from 'framer-motion';

const skillsData = [
  { name: 'HTML', percentage: 90 },
  { name: 'CSS', percentage: 85 },
  { name: 'JavaScript', percentage: 80 },
  { name: 'React', percentage: 75 },
  { name: 'Tailwind CSS', percentage: 80 },
  { name: 'Flutter', percentage: 90 },
  { name: 'Dart', percentage: 90 },
  { name: 'Node.js', percentage: 80 },
  { name: 'MongoDB', percentage: 80 },
  { name: 'Express', percentage: 90 },
];

const Skills = () => {
  return (
    <div className="max-w-4xl mx-auto p-10">
      <p className="text-center text-4xl font-bold">Skills</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        {skillsData.map((skill, index) => (
          <motion.div 
            key={index}
            className="flex flex-col items-center text-center"
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5, delay: index * 0.1 }} 
            viewport={{ once: true }} 
          >
            <span className="text-6xl">{skill.name}</span>
            <div className="relative w-64 h-4 bg-gray-300 rounded-full mt-2">
              <motion.div
                className="absolute h-full bg-blue-600 rounded-full"
                initial={{ width: 0 }} // Start with 0 width
                whileInView={{ width: `${skill.percentage}%` }} 
                transition={{ duration: 0.5 }} 
                viewport={{ once:true }}
              />
            </div>
            <p className="mt-2 text-lg font-semibold">{skill.percentage}%</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
