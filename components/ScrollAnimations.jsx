import { useScroll, motion, useSpring } from "framer-motion";
import React from "react";

const ScrollAnimations = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress);

  return (
    <>
      <motion.div
        style={{
          scaleX: scaleX,
          background: "blue",
          transformOrigin: "left",
          position: "sticky",
          bottom: 0,
          width: "100%",
          height: "20px",
        }}
      />
      <div
        style={{
          maxWidth: "700px",
          margin: "auto",
          padding: "1.2rem",
        }}
      >
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque id
          iaculis augue. Suspendisse potenti. Donec dolor ex, convallis quis
          sodales at, feugiat eget tortor. Interdum et malesuada fames ac ante
          ipsum primis in faucibus. Morbi fringilla sodales neque, at dignissim
          dolor malesuada sed. Nullam orci ligula, feugiat id malesuada ac,
          lobortis ac risus. Donec vitae ipsum nisi. Vivamus aliquet dolor ac
          diam tempor fringilla. Aliquam commodo dolor ut lacinia facilisis.
          Aenean nibh ipsum, convallis at semper aliquet, venenatis quis odio.
          Nunc posuere auctor massa et tristique. Donec eu nibh ut arcu
          pellentesque ullamcorper. Fusce eu magna justo. Nam pulvinar
          ullamcorper quam, at cursus augue vehicula nec.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque id
          iaculis augue. Suspendisse potenti. Donec dolor ex, convallis quis
          sodales at, feugiat eget tortor. Interdum et malesuada fames ac ante
          ipsum primis in faucibus. Morbi fringilla sodales neque, at dignissim
          dolor malesuada sed. Nullam orci ligula, feugiat id malesuada ac,
          lobortis ac risus. Donec vitae ipsum nisi. Vivamus aliquet dolor ac
          diam tempor fringilla. Aliquam commodo dolor ut lacinia facilisis.
          Aenean nibh ipsum, convallis at semper aliquet, venenatis quis odio.
          Nunc posuere auctor massa et tristique. Donec eu nibh ut arcu
          pellentesque ullamcorper. Fusce eu magna justo. Nam pulvinar
          ullamcorper quam, at cursus augue vehicula nec.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque id
          iaculis augue. Suspendisse potenti. Donec dolor ex, convallis quis
          sodales at, feugiat eget tortor. Interdum et malesuada fames ac ante
          ipsum primis in faucibus. Morbi fringilla sodales neque, at dignissim
          dolor malesuada sed. Nullam orci ligula, feugiat id malesuada ac,
          lobortis ac risus. Donec vitae ipsum nisi. Vivamus aliquet dolor ac
          diam tempor fringilla. Aliquam commodo dolor ut lacinia facilisis.
          Aenean nibh ipsum, convallis at semper aliquet, venenatis quis odio.
          Nunc posuere auctor massa et tristique. Donec eu nibh ut arcu
          pellentesque ullamcorper. Fusce eu magna justo. Nam pulvinar
          ullamcorper quam, at cursus augue vehicula nec.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque id
          iaculis augue. Suspendisse potenti. Donec dolor ex, convallis quis
          sodales at, feugiat eget tortor. Interdum et malesuada fames ac ante
          ipsum primis in faucibus. Morbi fringilla sodales neque, at dignissim
          dolor malesuada sed. Nullam orci ligula, feugiat id malesuada ac,
          lobortis ac risus. Donec vitae ipsum nisi. Vivamus aliquet dolor ac
          diam tempor fringilla. Aliquam commodo dolor ut lacinia facilisis.
          Aenean nibh ipsum, convallis at semper aliquet, venenatis quis odio.
          Nunc posuere auctor massa et tristique. Donec eu nibh ut arcu
          pellentesque ullamcorper. Fusce eu magna justo. Nam pulvinar
          ullamcorper quam, at cursus augue vehicula nec.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque id
          iaculis augue. Suspendisse potenti. Donec dolor ex, convallis quis
          sodales at, feugiat eget tortor. Interdum et malesuada fames ac ante
          ipsum primis in faucibus. Morbi fringilla sodales neque, at dignissim
          dolor malesuada sed. Nullam orci ligula, feugiat id malesuada ac,
          lobortis ac risus. Donec vitae ipsum nisi. Vivamus aliquet dolor ac
          diam tempor fringilla. Aliquam commodo dolor ut lacinia facilisis.
          Aenean nibh ipsum, convallis at semper aliquet, venenatis quis odio.
          Nunc posuere auctor massa et tristique. Donec eu nibh ut arcu
          pellentesque ullamcorper. Fusce eu magna justo. Nam pulvinar
          ullamcorper quam, at cursus augue vehicula nec.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque id
          iaculis augue. Suspendisse potenti. Donec dolor ex, convallis quis
          sodales at, feugiat eget tortor. Interdum et malesuada fames ac ante
          ipsum primis in faucibus. Morbi fringilla sodales neque, at dignissim
          dolor malesuada sed. Nullam orci ligula, feugiat id malesuada ac,
          lobortis ac risus. Donec vitae ipsum nisi. Vivamus aliquet dolor ac
          diam tempor fringilla. Aliquam commodo dolor ut lacinia facilisis.
          Aenean nibh ipsum, convallis at semper aliquet, venenatis quis odio.
          Nunc posuere auctor massa et tristique. Donec eu nibh ut arcu
          pellentesque ullamcorper. Fusce eu magna justo. Nam pulvinar
          ullamcorper quam, at cursus augue vehicula nec.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque id
          iaculis augue. Suspendisse potenti. Donec dolor ex, convallis quis
          sodales at, feugiat eget tortor. Interdum et malesuada fames ac ante
          ipsum primis in faucibus. Morbi fringilla sodales neque, at dignissim
          dolor malesuada sed. Nullam orci ligula, feugiat id malesuada ac,
          lobortis ac risus. Donec vitae ipsum nisi. Vivamus aliquet dolor ac
          diam tempor fringilla. Aliquam commodo dolor ut lacinia facilisis.
          Aenean nibh ipsum, convallis at semper aliquet, venenatis quis odio.
          Nunc posuere auctor massa et tristique. Donec eu nibh ut arcu
          pellentesque ullamcorper. Fusce eu magna justo. Nam pulvinar
          ullamcorper quam, at cursus augue vehicula nec.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque id
          iaculis augue. Suspendisse potenti. Donec dolor ex, convallis quis
          sodales at, feugiat eget tortor. Interdum et malesuada fames ac ante
          ipsum primis in faucibus. Morbi fringilla sodales neque, at dignissim
          dolor malesuada sed. Nullam orci ligula, feugiat id malesuada ac,
          lobortis ac risus. Donec vitae ipsum nisi. Vivamus aliquet dolor ac
          diam tempor fringilla. Aliquam commodo dolor ut lacinia facilisis.
          Aenean nibh ipsum, convallis at semper aliquet, venenatis quis odio.
          Nunc posuere auctor massa et tristique. Donec eu nibh ut arcu
          pellentesque ullamcorper. Fusce eu magna justo. Nam pulvinar
          ullamcorper quam, at cursus augue vehicula nec.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque id
          iaculis augue. Suspendisse potenti. Donec dolor ex, convallis quis
          sodales at, feugiat eget tortor. Interdum et malesuada fames ac ante
          ipsum primis in faucibus. Morbi fringilla sodales neque, at dignissim
          dolor malesuada sed. Nullam orci ligula, feugiat id malesuada ac,
          lobortis ac risus. Donec vitae ipsum nisi. Vivamus aliquet dolor ac
          diam tempor fringilla. Aliquam commodo dolor ut lacinia facilisis.
          Aenean nibh ipsum, convallis at semper aliquet, venenatis quis odio.
          Nunc posuere auctor massa et tristique. Donec eu nibh ut arcu
          pellentesque ullamcorper. Fusce eu magna justo. Nam pulvinar
          ullamcorper quam, at cursus augue vehicula nec.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque id
          iaculis augue. Suspendisse potenti. Donec dolor ex, convallis quis
          sodales at, feugiat eget tortor. Interdum et malesuada fames ac ante
          ipsum primis in faucibus. Morbi fringilla sodales neque, at dignissim
          dolor malesuada sed. Nullam orci ligula, feugiat id malesuada ac,
          lobortis ac risus. Donec vitae ipsum nisi. Vivamus aliquet dolor ac
          diam tempor fringilla. Aliquam commodo dolor ut lacinia facilisis.
          Aenean nibh ipsum, convallis at semper aliquet, venenatis quis odio.
          Nunc posuere auctor massa et tristique. Donec eu nibh ut arcu
          pellentesque ullamcorper. Fusce eu magna justo. Nam pulvinar
          ullamcorper quam, at cursus augue vehicula nec.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque id
          iaculis augue. Suspendisse potenti. Donec dolor ex, convallis quis
          sodales at, feugiat eget tortor. Interdum et malesuada fames ac ante
          ipsum primis in faucibus. Morbi fringilla sodales neque, at dignissim
          dolor malesuada sed. Nullam orci ligula, feugiat id malesuada ac,
          lobortis ac risus. Donec vitae ipsum nisi. Vivamus aliquet dolor ac
          diam tempor fringilla. Aliquam commodo dolor ut lacinia facilisis.
          Aenean nibh ipsum, convallis at semper aliquet, venenatis quis odio.
          Nunc posuere auctor massa et tristique. Donec eu nibh ut arcu
          pellentesque ullamcorper. Fusce eu magna justo. Nam pulvinar
          ullamcorper quam, at cursus augue vehicula nec.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque id
          iaculis augue. Suspendisse potenti. Donec dolor ex, convallis quis
          sodales at, feugiat eget tortor. Interdum et malesuada fames ac ante
          ipsum primis in faucibus. Morbi fringilla sodales neque, at dignissim
          dolor malesuada sed. Nullam orci ligula, feugiat id malesuada ac,
          lobortis ac risus. Donec vitae ipsum nisi. Vivamus aliquet dolor ac
          diam tempor fringilla. Aliquam commodo dolor ut lacinia facilisis.
          Aenean nibh ipsum, convallis at semper aliquet, venenatis quis odio.
          Nunc posuere auctor massa et tristique. Donec eu nibh ut arcu
          pellentesque ullamcorper. Fusce eu magna justo. Nam pulvinar
          ullamcorper quam, at cursus augue vehicula nec.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque id
          iaculis augue. Suspendisse potenti. Donec dolor ex, convallis quis
          sodales at, feugiat eget tortor. Interdum et malesuada fames ac ante
          ipsum primis in faucibus. Morbi fringilla sodales neque, at dignissim
          dolor malesuada sed. Nullam orci ligula, feugiat id malesuada ac,
          lobortis ac risus. Donec vitae ipsum nisi. Vivamus aliquet dolor ac
          diam tempor fringilla. Aliquam commodo dolor ut lacinia facilisis.
          Aenean nibh ipsum, convallis at semper aliquet, venenatis quis odio.
          Nunc posuere auctor massa et tristique. Donec eu nibh ut arcu
          pellentesque ullamcorper. Fusce eu magna justo. Nam pulvinar
          ullamcorper quam, at cursus augue vehicula nec.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque id
          iaculis augue. Suspendisse potenti. Donec dolor ex, convallis quis
          sodales at, feugiat eget tortor. Interdum et malesuada fames ac ante
          ipsum primis in faucibus. Morbi fringilla sodales neque, at dignissim
          dolor malesuada sed. Nullam orci ligula, feugiat id malesuada ac,
          lobortis ac risus. Donec vitae ipsum nisi. Vivamus aliquet dolor ac
          diam tempor fringilla. Aliquam commodo dolor ut lacinia facilisis.
          Aenean nibh ipsum, convallis at semper aliquet, venenatis quis odio.
          Nunc posuere auctor massa et tristique. Donec eu nibh ut arcu
          pellentesque ullamcorper. Fusce eu magna justo. Nam pulvinar
          ullamcorper quam, at cursus augue vehicula nec.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque id
          iaculis augue. Suspendisse potenti. Donec dolor ex, convallis quis
          sodales at, feugiat eget tortor. Interdum et malesuada fames ac ante
          ipsum primis in faucibus. Morbi fringilla sodales neque, at dignissim
          dolor malesuada sed. Nullam orci ligula, feugiat id malesuada ac,
          lobortis ac risus. Donec vitae ipsum nisi. Vivamus aliquet dolor ac
          diam tempor fringilla. Aliquam commodo dolor ut lacinia facilisis.
          Aenean nibh ipsum, convallis at semper aliquet, venenatis quis odio.
          Nunc posuere auctor massa et tristique. Donec eu nibh ut arcu
          pellentesque ullamcorper. Fusce eu magna justo. Nam pulvinar
          ullamcorper quam, at cursus augue vehicula nec.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque id
          iaculis augue. Suspendisse potenti. Donec dolor ex, convallis quis
          sodales at, feugiat eget tortor. Interdum et malesuada fames ac ante
          ipsum primis in faucibus. Morbi fringilla sodales neque, at dignissim
          dolor malesuada sed. Nullam orci ligula, feugiat id malesuada ac,
          lobortis ac risus. Donec vitae ipsum nisi. Vivamus aliquet dolor ac
          diam tempor fringilla. Aliquam commodo dolor ut lacinia facilisis.
          Aenean nibh ipsum, convallis at semper aliquet, venenatis quis odio.
          Nunc posuere auctor massa et tristique. Donec eu nibh ut arcu
          pellentesque ullamcorper. Fusce eu magna justo. Nam pulvinar
          ullamcorper quam, at cursus augue vehicula nec.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque id
          iaculis augue. Suspendisse potenti. Donec dolor ex, convallis quis
          sodales at, feugiat eget tortor. Interdum et malesuada fames ac ante
          ipsum primis in faucibus. Morbi fringilla sodales neque, at dignissim
          dolor malesuada sed. Nullam orci ligula, feugiat id malesuada ac,
          lobortis ac risus. Donec vitae ipsum nisi. Vivamus aliquet dolor ac
          diam tempor fringilla. Aliquam commodo dolor ut lacinia facilisis.
          Aenean nibh ipsum, convallis at semper aliquet, venenatis quis odio.
          Nunc posuere auctor massa et tristique. Donec eu nibh ut arcu
          pellentesque ullamcorper. Fusce eu magna justo. Nam pulvinar
          ullamcorper quam, at cursus augue vehicula nec.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque id
          iaculis augue. Suspendisse potenti. Donec dolor ex, convallis quis
          sodales at, feugiat eget tortor. Interdum et malesuada fames ac ante
          ipsum primis in faucibus. Morbi fringilla sodales neque, at dignissim
          dolor malesuada sed. Nullam orci ligula, feugiat id malesuada ac,
          lobortis ac risus. Donec vitae ipsum nisi. Vivamus aliquet dolor ac
          diam tempor fringilla. Aliquam commodo dolor ut lacinia facilisis.
          Aenean nibh ipsum, convallis at semper aliquet, venenatis quis odio.
          Nunc posuere auctor massa et tristique. Donec eu nibh ut arcu
          pellentesque ullamcorper. Fusce eu magna justo. Nam pulvinar
          ullamcorper quam, at cursus augue vehicula nec.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque id
          iaculis augue. Suspendisse potenti. Donec dolor ex, convallis quis
          sodales at, feugiat eget tortor. Interdum et malesuada fames ac ante
          ipsum primis in faucibus. Morbi fringilla sodales neque, at dignissim
          dolor malesuada sed. Nullam orci ligula, feugiat id malesuada ac,
          lobortis ac risus. Donec vitae ipsum nisi. Vivamus aliquet dolor ac
          diam tempor fringilla. Aliquam commodo dolor ut lacinia facilisis.
          Aenean nibh ipsum, convallis at semper aliquet, venenatis quis odio.
          Nunc posuere auctor massa et tristique. Donec eu nibh ut arcu
          pellentesque ullamcorper. Fusce eu magna justo. Nam pulvinar
          ullamcorper quam, at cursus augue vehicula nec.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque id
          iaculis augue. Suspendisse potenti. Donec dolor ex, convallis quis
          sodales at, feugiat eget tortor. Interdum et malesuada fames ac ante
          ipsum primis in faucibus. Morbi fringilla sodales neque, at dignissim
          dolor malesuada sed. Nullam orci ligula, feugiat id malesuada ac,
          lobortis ac risus. Donec vitae ipsum nisi. Vivamus aliquet dolor ac
          diam tempor fringilla. Aliquam commodo dolor ut lacinia facilisis.
          Aenean nibh ipsum, convallis at semper aliquet, venenatis quis odio.
          Nunc posuere auctor massa et tristique. Donec eu nibh ut arcu
          pellentesque ullamcorper. Fusce eu magna justo. Nam pulvinar
          ullamcorper quam, at cursus augue vehicula nec.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque id
          iaculis augue. Suspendisse potenti. Donec dolor ex, convallis quis
          sodales at, feugiat eget tortor. Interdum et malesuada fames ac ante
          ipsum primis in faucibus. Morbi fringilla sodales neque, at dignissim
          dolor malesuada sed. Nullam orci ligula, feugiat id malesuada ac,
          lobortis ac risus. Donec vitae ipsum nisi. Vivamus aliquet dolor ac
          diam tempor fringilla. Aliquam commodo dolor ut lacinia facilisis.
          Aenean nibh ipsum, convallis at semper aliquet, venenatis quis odio.
          Nunc posuere auctor massa et tristique. Donec eu nibh ut arcu
          pellentesque ullamcorper. Fusce eu magna justo. Nam pulvinar
          ullamcorper quam, at cursus augue vehicula nec.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque id
          iaculis augue. Suspendisse potenti. Donec dolor ex, convallis quis
          sodales at, feugiat eget tortor. Interdum et malesuada fames ac ante
          ipsum primis in faucibus. Morbi fringilla sodales neque, at dignissim
          dolor malesuada sed. Nullam orci ligula, feugiat id malesuada ac,
          lobortis ac risus. Donec vitae ipsum nisi. Vivamus aliquet dolor ac
          diam tempor fringilla. Aliquam commodo dolor ut lacinia facilisis.
          Aenean nibh ipsum, convallis at semper aliquet, venenatis quis odio.
          Nunc posuere auctor massa et tristique. Donec eu nibh ut arcu
          pellentesque ullamcorper. Fusce eu magna justo. Nam pulvinar
          ullamcorper quam, at cursus augue vehicula nec.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque id
          iaculis augue. Suspendisse potenti. Donec dolor ex, convallis quis
          sodales at, feugiat eget tortor. Interdum et malesuada fames ac ante
          ipsum primis in faucibus. Morbi fringilla sodales neque, at dignissim
          dolor malesuada sed. Nullam orci ligula, feugiat id malesuada ac,
          lobortis ac risus. Donec vitae ipsum nisi. Vivamus aliquet dolor ac
          diam tempor fringilla. Aliquam commodo dolor ut lacinia facilisis.
          Aenean nibh ipsum, convallis at semper aliquet, venenatis quis odio.
          Nunc posuere auctor massa et tristique. Donec eu nibh ut arcu
          pellentesque ullamcorper. Fusce eu magna justo. Nam pulvinar
          ullamcorper quam, at cursus augue vehicula nec.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque id
          iaculis augue. Suspendisse potenti. Donec dolor ex, convallis quis
          sodales at, feugiat eget tortor. Interdum et malesuada fames ac ante
          ipsum primis in faucibus. Morbi fringilla sodales neque, at dignissim
          dolor malesuada sed. Nullam orci ligula, feugiat id malesuada ac,
          lobortis ac risus. Donec vitae ipsum nisi. Vivamus aliquet dolor ac
          diam tempor fringilla. Aliquam commodo dolor ut lacinia facilisis.
          Aenean nibh ipsum, convallis at semper aliquet, venenatis quis odio.
          Nunc posuere auctor massa et tristique. Donec eu nibh ut arcu
          pellentesque ullamcorper. Fusce eu magna justo. Nam pulvinar
          ullamcorper quam, at cursus augue vehicula nec.
        </p>
      </div>
    </>
  );
};

export default ScrollAnimations;
