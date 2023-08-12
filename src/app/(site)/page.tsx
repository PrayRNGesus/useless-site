import MouseAddon from "../components/MouseAddon";
import PagePicker from "../components/PagePicker";

export default function Home() {
    return (
        <main className="h-screen w-full overflow-hidden">
            <PagePicker />
            <MouseAddon />
        </main>
    )
}
