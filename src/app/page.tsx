import AppNavigation from "@/components/AppNavigation";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black text-white lg:pl-24"> {/* lg:pl-24 adds left padding on large screens */}
      <AppNavigation /> {/* renders the sidebar on desktop and bottom navigation on mobile */}
    </div> 
  );
}

