import Rust from "@/components/Rust";
import Instance from "./Instance";

export default function InstanceGroup() {
  return (
    <div className="flex flex-col gap-32" id="Main">
      <div className="flex gap-16 align-middle place-items-center">
        <h3 className="text-3 font-medium">Main Instances</h3>
      </div>
      <div className="flex flex-wrap gap-32">
        <Instance id={0} imageUrl="/instances/1.png" name="Instance!" />
      </div>
      <Rust />
      <div className="h-screen"></div>
    </div>
  );
}
