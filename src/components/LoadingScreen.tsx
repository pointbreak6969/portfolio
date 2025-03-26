"use client";
import { motion } from "framer-motion";
import { Github, CodeXml, User } from "lucide-react";

export default function LoadingScreen() {
  const iconVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: { 
        type: "spring",
        stiffness: 260,
        damping: 20
      }
    },
    hover: { 
      scale: 1.15, 
      rotate: [0, -5, 5, -5, 0],
      color: "#d8b4fe", // purple-300
      transition: {
        duration: 0.3,
        rotate: { duration: 0.5 }
      }
    }
  };

  // Container animation for staggered children
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  return (
    <motion.div
      className="fixed inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-primary to-primary/90 text-primary-foreground"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.5 }}
        className="text-center px-4"
      >
        <motion.div 
          className="flex items-center justify-center space-x-6 text-6xl mb-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            variants={iconVariants}
            whileHover="hover"
            className="p-2 rounded-lg bg-primary-foreground/10 backdrop-blur-sm"
          >
            <CodeXml className="text-purple-200" />
          </motion.div>
          
          <motion.div
            variants={iconVariants}
            whileHover="hover" 
            className="p-2 rounded-lg bg-primary-foreground/10 backdrop-blur-sm"
          >
            <User className="text-blue-200" />
          </motion.div>
          
          <motion.div
            variants={iconVariants}
            whileHover="hover"
            className="p-2 rounded-lg bg-primary-foreground/10 backdrop-blur-sm"
          >
            <Github className="text-green-200" />
          </motion.div>
        </motion.div>

        <motion.h1 
          className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary-foreground to-purple-200"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.5 }}
        >
          Welcome to my Portfolio
        </motion.h1>

        <motion.div 
          className="flex justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
        >
          <div className="loading-dots flex space-x-3">
            {[0, 1, 2].map((dot) => (
              <motion.div
                key={dot}
                className="h-3 w-3 rounded-full bg-gradient-to-r from-primary-foreground to-purple-300"
                initial={{ opacity: 0.3, scale: 0.8 }}
                animate={{ 
                  opacity: [0.3, 1, 0.3], 
                  scale: [0.8, 1.2, 0.8]
                }}
                transition={{
                  duration: 1.5,
                  repeat: Number.POSITIVE_INFINITY,
                  delay: dot * 0.2,
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}