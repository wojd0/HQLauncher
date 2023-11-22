import InstanceGroup from "./InstanceGroup";

export default function InstancesGrid() {
  return (
    <div className="section-style w-full h-full flex flex-col gap-64 max-[1500px]:h-fit overflow-y-auto p-64">
      <InstanceGroup />
    </div>
  );
}
