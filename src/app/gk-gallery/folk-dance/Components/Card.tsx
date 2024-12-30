import { HTMLMotionProps, motion } from "framer-motion";

function Card({
  open,
  title,
  subtitle,
  color,
  ...rest
}: {
  open: boolean;
  title: string;
  subtitle: string;
  color: string;
} & HTMLMotionProps<"div">) {
  return (
    <motion.div
      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
      layout
      className={
        `flex flex-col content-start items-start cursor-pointer overflow-hidden p-4` +
        (open
          ? ` p-8 rounded-2xl ${color}`
          : ` mx-4 bg-zinc-900 text-zinc-500 rounded-lg`)
      }
      {...rest}
    >
      <motion.h2
        className={open ? "text-3xl mb-1" : "text-2xl text-blue-800"}
        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
        layout
      >
        {title}
      </motion.h2>
      <motion.hr/>
      <motion.p
        className={"font-sans" + (open ? " font-sans opacity-60 text-black text-xl font-bold" : "")}
        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
        layout
      >
        {subtitle}
      </motion.p>

  
    </motion.div>
  );
}

export default Card;