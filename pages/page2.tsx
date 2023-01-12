/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { useMemo, useState } from "react";

const Viewer = dynamic(() => import("react-viewer"), { ssr: false });

const Page2: NextPage = () => {
  const router = useRouter();
  const { query } = router;
  const [pasFoto, setPasFoto] = useState("");
  const [isPreviewFoto, setIsPreviewFoto] = useState(false);

  const onPilihFoto = (e: any) => {
    const fileFoto = e.target.files[0];
    const fileReader = new FileReader();
    fileReader.readAsDataURL(fileFoto);
    fileReader.onloadend = () => {
      const urlFileFoto = fileReader.result;
      setPasFoto(urlFileFoto + "");
    };
  };

  const dataJson = useMemo(() => {
    const jsonNya = JSON.parse(query.json as string);
    return JSON.stringify({
      ...jsonNya,
      pasFoto,
    });
  }, [pasFoto, query]);

  return (
<div
      style={{
        background: "linear-gradient(135deg, #05073a, #dc0606ca)",
        backgroundSize: "cover",
        alignItems: "center",
        backgroundAttachment: "fixed",
        height: "100vh",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          backgroundColor: "blueviolet",
          height: "50px",
          color: "white",
        }}
      >
        <img
          src="https://i2.wp.com/enablr.id/wp-content/uploads/2022/01/Hori_tagline@1x.png?resize=323%2C84&ssl=1i"
          alt=""
          style={{
            height: "40px",
            objectFit: "contain",
          }}
        />
      </div>

      <div style={{
          color: "white", 
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center"}}>
        <label>Foto ktp</label>
        <input onChange={onPilihFoto} type="file" accept=".jpeg,.jpg,.png" />
      </div>

      {pasFoto && (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <img
            alt=""
            onClick={() => {
              setIsPreviewFoto(true);
            }}
            src={pasFoto}
            style={{
              height: 400,
              width: 800,
              objectFit: "cover",
              cursor: "pointer",
            }}
          />
        </div>
      )}

      <Viewer
        visible={isPreviewFoto}
        onClose={() => {
          setIsPreviewFoto(false);
        }}
        images={[{ src: pasFoto, alt: "" }]}
      />
      <div style={{display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center"}}>
        <button
          onClick={() => {
            router.push(`/page3?json=${dataJson}`);
          }}
        >
          NEXT
        </button>
      </div>
    </div>
  );
};

export default Page2;
