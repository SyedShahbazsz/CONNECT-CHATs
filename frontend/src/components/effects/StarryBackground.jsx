// import React, { useCallback } from "react";
// import Particles from "react-tsparticles";
// import { loadFull } from "tsparticles";

// const StarryBackground = () => {
//   const particlesInit = useCallback(async (engine) => {
//     await loadFull(engine);
//   }, []);

//   return (
//     <Particles
//       id="tsparticles"
//       init={particlesInit}
//       style={{ position: "absolute", zIndex: 1 }}
//       options={{
//         fullScreen: { enable: true },
//         background: { color: { value: "transparent" } },
//         particles: {
//           number: {
//             value: 100,
//             density: { enable: true, area: 800 },
//           },
//           color: { value: "#ffffff" },
//           shape: { type: "circle" },
//           opacity: {
//             value: 0.5,
//             random: false,
//           },
//           size: {
//             value: 1.5,
//             random: true,
//           },
//           move: {
//             enable: true,
//             speed: 0.6,
//             direction: "none",
//             outModes: { default: "out" },
//           },
//         },
//         interactivity: {
//           events: {
//             onHover: {
//               enable: true,
//               mode: "repulse",
//             },
//             onClick: {
//               enable: true,
//               mode: "push",
//             },
//           },
//           modes: {
//             repulse: {
//               distance: 100,
//               duration: 0.4,
//             },
//             push: {
//               quantity: 4,
//             },
//           },
//         },
//         detectRetina: true,
//       }}
//     />
//   );
// };

// export default StarryBackground;

