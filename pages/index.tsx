import LaunchAppButton from "./components/LaunchAppButton";
import ManifestoText from "./components/ManifestoText";
import ManifestoTitle from "./components/ManifestoTitle";

export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="max-w-prose font-jetbrains p-6 rounded-lg bg-white">
        <ManifestoTitle title="Open Papers Protocol Manifesto" />
        <br />
        <ManifestoText />
        <br />
        <LaunchAppButton />
      </div>
    </div>

  )
}
