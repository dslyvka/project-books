import { useSpring, animated } from 'react-spring';

export const PageAnimation = ({ children }) => {
  const fadeIn = useSpring({
    opacity: 1,
    marginTop: 0,
    from: { opacity: 0, marginTop: -5 },
  });

  return <animated.div style={fadeIn}>{children}</animated.div>;
};
