import Featured from "@/component/Featured";
import Offer from "@/component/Offer";
import Slider from "@/component/Slider";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Slider />
      <Featured />
      <Offer />
    </div>
  );
}
 