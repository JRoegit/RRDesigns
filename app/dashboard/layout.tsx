import "@/app/globals.css";
import Link from "next/link";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-full">
        <div className="p-6 flex flex-row gap-4  w-full">
            <Link className="px-4 py-2 bg-rrteal text-white border-b-2 border-b-black/30 text-lg font-bold rounded-md" href={"/dashboard/upload"}>Upload Item</Link>
            <Link className="px-4 py-2 bg-rrteal text-white border-b-2 border-b-black/30 text-lg font-bold rounded-md" href={"/dashboard/edit"}>Edit Items</Link>
        </div>
          {children}
    </div>
  );
}
