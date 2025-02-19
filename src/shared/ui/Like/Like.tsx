import { useState } from "react";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import s from './Like.module.scss';

export const Like = () => {
    const [liked, setLiked] = useState(false);
    const [count, setCount] = useState(0);

  const handleLike = () => {
    setLiked(!liked);
    setCount((prev) => (liked ? prev - 1 : prev + 1));
  };

  return (
    <motion.button
      whileTap={{ scale: 0.9 }}
      className={s.button}
      onClick={handleLike}
    >
      <motion.div
        initial={{ scale: 1 }}
        animate={{ scale: liked ? 1.2 : 1 }}
        transition={{ duration: 0.3 }}
        className={`${s.iconWrapper} ${liked ? s.liked : s.unliked}`}
      >
        <Heart
          className={`${s.icon} ${liked ? s.iconLiked : s.iconUnliked}`}
          fill={liked ? "currentColor" : "none"}
        />
      </motion.div>
      <span className={s.count}>{count}</span>
    </motion.button>
  );
}