import HomeSec from "@/components/HomeSec";
import 'transition-style';

export default async function Home() {
  return (
    <div transition-style="in:wipe:right" style={{ paddingTop: "1px" }}>
      <HomeSec />
    </div >
  );
}
