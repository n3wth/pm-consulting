import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

/**
 * Animated Gradient Hero Background
 * Creates a subtle color-shifting gradient effect
 */
export function GradientHero({ children }: { children?: React.ReactNode }) {
  return (
    <motion.div
      className="relative w-full bg-gradient-to-br from-purple-600 via-indigo-500 to-blue-500"
      animate={{
        backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
      }}
      transition={{
        duration: 10,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      style={{
        backgroundSize: "200% 200%",
        willChange: "background-position",
      }}
    >
      {children}
    </motion.div>
  );
}

/**
 * Staggered Testimonial Cards Entrance
 * Cards slide up and fade in with staggered timing
 */
export function TestimonialCards({
  testimonials,
}: {
  testimonials: Array<{
    author: string;
    title: string;
    company: string;
    quote: string;
    metric?: string;
  }>;
}) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <motion.div
      ref={ref}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      {testimonials.map((testimonial, index) => (
        <motion.div
          key={index}
          className="bg-white rounded-lg shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow"
          variants={itemVariants}
        >
          <div className="mb-4 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full" />
          <blockquote className="text-gray-700 mb-4 italic">
            "{testimonial.quote}"
          </blockquote>
          <div className="space-y-1">
            <div className="font-semibold text-gray-900">{testimonial.author}</div>
            <div className="text-sm text-gray-600">
              {testimonial.title} • {testimonial.company}
            </div>
            {testimonial.metric && (
              <div className="text-sm font-semibold text-purple-600 pt-2">
                {testimonial.metric}
              </div>
            )}
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}

/**
 * Animated CTA Button
 * Scales up on hover with enhanced shadow
 */
export function CTAButton({
  children,
  onClick,
  variant = "primary",
  size = "md",
  className = "",
}: {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "tertiary";
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
}) {
  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-8 py-3 text-base",
    lg: "px-12 py-4 text-lg",
    xl: "px-16 py-5 text-xl",
  };

  const variantClasses = {
    primary:
      "bg-purple-600 text-white hover:bg-purple-700",
    secondary:
      "bg-gray-200 text-gray-900 hover:bg-gray-300",
    tertiary:
      "text-purple-600 hover:text-purple-700",
  };

  return (
    <motion.button
      onClick={onClick}
      className={`
        ${sizeClasses[size]}
        ${variantClasses[variant]}
        rounded-lg
        font-semibold
        transition-colors
        ${className}
      `}
      whileHover={{
        scale: 1.05,
        boxShadow: "0 20px 40px rgba(124, 58, 237, 0.3)",
      }}
      whileTap={{
        scale: 0.98,
      }}
      transition={{
        duration: 0.2,
      }}
    >
      {children}
    </motion.button>
  );
}

/**
 * Animated Counter for Metrics
 * Counts up when element comes into view
 */
export function MetricCounter({
  value,
  label,
  suffix = "",
  prefix = "",
}: {
  value: number;
  label: string;
  suffix?: string;
  prefix?: string;
}) {
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!inView) return;

    const interval = setInterval(() => {
      setCount((prev) => {
        if (prev >= value) {
          clearInterval(interval);
          return value;
        }
        return prev + Math.ceil(value / 50);
      });
    }, 30);

    return () => clearInterval(interval);
  }, [inView, value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="text-center"
    >
      <div className="text-4xl md:text-5xl font-bold text-purple-600 mb-2">
        {prefix}
        {count > value ? value : count}
        {suffix}
      </div>
      <div className="text-gray-600 text-lg">{label}</div>
    </motion.div>
  );
}

/**
 * Scroll Progress Indicator
 * Shows progress through page as user scrolls
 */
export function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = React.useState(0);

  React.useEffect(() => {
    const updateScrollProgress = () => {
      const scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrolled = window.scrollY;
      const scrollPercent = scrollHeight > 0 ? scrolled / scrollHeight : 0;
      setScrollProgress(scrollPercent);
    };

    window.addEventListener("scroll", updateScrollProgress);
    return () =>
      window.removeEventListener("scroll", updateScrollProgress);
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-600 to-indigo-500 origin-left"
      style={{
        scaleX: scrollProgress,
        willChange: "transform",
      }}
    />
  );
}
