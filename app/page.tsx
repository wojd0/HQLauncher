import InstancesGrid from "@/components/ui/instances/InstancesGrid";
import { HiMiniPlus } from "react-icons/hi2";

export default function Home() {
    return (
        <div className="flex flex-col w-full h-full overflow-y-auto gap-48">
            <div className="section-style flex gap-32 h-fit px-64 py-8">
                <a
                    href="/"
                    className="flex gap-8 place-items-center hover-active-effect"
                >
                    <HiMiniPlus className="w-[22px] h-[22px]" />
                    <p className="text-white text-sub">Create Instance</p>
                </a>
                <button className="flex gap-8 place-items-center hover-active-effect">
                    <HiMiniPlus className="w-[22px] h-[22px]" />
                    <p className="text-white text-sub">Create Group</p>
                </button>
            </div>
            <InstancesGrid />
        </div>
    );
}
