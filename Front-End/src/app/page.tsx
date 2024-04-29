import HomeSec from "@/components/HomeSec";
import 'transition-style';
import React from 'react';

const Home: React.FC = () => {
  return (
    <div transition-style="in:wipe:right" style={{ paddingTop: "1px" }}>
      <HomeSec />
    </div >
  );
}

export default Home;
