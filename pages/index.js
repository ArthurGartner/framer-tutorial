import Image from "next/image";
import { Inter } from "next/font/google";
import BasicsOfMotion from "@/components/BasicsOfMotion";
import Gestures from "@/components/Gestures";
import AnimationControls from "@/components/AnimationControls";
import ViewBasedAnimations from "@/components/ViewBasedAnimations";
import ScrollAnimations from "@/components/ScrollAnimations";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      {/* <BasicsOfMotion /> */}
      {/* <Gestures /> */}
      {/* <AnimationControls /> */}
      {/* <ViewBasedAnimations /> */}
      <ScrollAnimations />
    </div>
  );
}
