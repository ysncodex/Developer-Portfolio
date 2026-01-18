import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaHome, FaExclamationTriangle } from 'react-icons/fa';
import './NotFound.css';

const NotFound = () => {
  return (
    <section className="notfound-section" id="notfound">
      <div className="notfound-container">
        <motion.div
          className="notfound-content"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="notfound-icon"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          >
            <FaExclamationTriangle />
          </motion.div>
          
          <motion.h1
            className="notfound-title"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            404
          </motion.h1>
          
          <motion.h2
            className="notfound-subtitle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Page Not Found
          </motion.h2>
          
          <motion.p
            className="notfound-description"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            The page you're looking for doesn't exist or has been moved.
          </motion.p>
          
          <motion.div
            className="notfound-actions"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <Link to="/" className="button button--primary">
              <FaHome />
              <span>Back to Home</span>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default NotFound;
