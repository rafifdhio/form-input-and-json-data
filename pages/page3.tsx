import type { NextPage } from "next";
import { useRouter } from "next/router";

const Page3: NextPage = () => {
  const { query } = useRouter();
  const { json } = query;
  return (
    <div style={{ padding: 14,}}>
      <div>Wizard 3</div>

      <hr />

      <div>SIAP KIRIM:</div>
      <br />
      <div
        style={{
          fontSize: 9,
          border: "1px solid #ccc",
          borderRadius: "6px",
          padding: 8,
          backgroundColor: "#ccc",
          overflow: "scroll",
        }}
      >
        {json}
      </div>
    </div>
  );
};

export default Page3;
