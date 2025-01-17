import Approach from "@/components/Approach"
import Clients from "@/components/Clients"
import Experience from "@/components/Experience"
import { FloatingNav } from "@/components/FloatingNav"
import Footer from "@/components/Footer"
import Hero from "@/components/Hero"
import RecentProjects from "@/components/RecentProjects"
import Grid from "@/components/ui/Grid"
import { navItems } from "@/data"

export default function Home() {
    return (
        <main className="relative bg-black-100 flex justify-center items-center flex-col overflow,-hidden mx-auto sm:px-10 text-white px-5">
            <div className="max-w-7xl w-full ">
                <FloatingNav navItems={navItems} />
                <Hero />
                <Grid />
                <RecentProjects />
                <Clients />
                <Experience />
                <Approach />
                <Footer />
            </div>
        </main>
    )
}
