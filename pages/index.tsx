/* eslint-disable @next/next/no-img-element */
// mengambil library yang ada di next JS
import type { NextPage } from "next";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { useEffect, useMemo, useState } from "react";

// dynamic import untuk mengimport sebuah component secara client-site
const Viewer = dynamic(() => import("react-viewer"), { ssr: false });

//mendeklarasikan statement 
const Page1: NextPage = () => {
//useRouter untuk mendapatkan value URL query dari system routing
  const router = useRouter();
  const [nik, setNik] = useState("");
  const [nama, setNama] = useState("");
  const [jenisKelamin, setJenisKelamin] = useState("");
  const [tanggalLahir, setTanggalLahir] = useState("");
  const [alamat, setAlamat] = useState("");
  const [kota, setKota] = useState("");

//untuk komputasi value data json,diubah menjadi string
  const dataJson = useMemo(() => {
    return JSON.stringify({
      nik,
      nama,
      jenisKelamin,
      tanggalLahir,
      alamat,
      kota,
    });
  }, [nik, nama, jenisKelamin, tanggalLahir, alamat, kota]);

//
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

      <div style={{ padding: 14 ,alignItems: "center",
        justifyContent: "center",
        //flexWrap: "wrap",
        //display: "flex",
        textAlign: "center",
        maxWidth : "700px",
        width : "100%",
        //padding : "30px 30px",
        borderRadius : "25px",
        background: "linear-gradient(135deg, #05073a, blue)",
        position: "fixed",
            border: "3px solid blue",
            // width: "200px",
            height: "430px",
            top: "90px",
            marginBottom: "100px",
            left: "340px",
            right: "100px",
            fontSize: "15px",
            color: "white",
            // fontWeigh: "500",
          }}>
        <div style={{ marginBottom: 10, color: "white" }}>
          <b>N.I.K.</b>
          <br />
          <input
          style={{
                  width: "300px", borderRadius: "12px"}}
            type="text"
            value={nik}
            onChange={(e) => {
              setNik(e.target.value);
            }}
          />
        </div>


        <div style={{ marginBottom: 10, color: "white"}}>
          <b><label>Nama</label></b>
          <br />
          <input style={{
                  width: "300px", borderRadius: "12px"}}
            value={nama}
            type="text"
            onChange={(e) => {
              setNama(e.target.value);
            }}
          />
        </div>

        <div style={{ marginBottom: 10, color: "white" }}>
          <b><label>Jenis Kelamin</label></b>
          <br />
          <select style={{
                  width: "300px", padding: "1.5px" }}
            onChange={(e) => {
              setJenisKelamin(e.target.value);
            }}
            value={jenisKelamin}
          >
            <option disabled selected>
              (Pilih)
            </option>
            <option value="Laki-Laki">Laki-Laki</option>
            <option value="Perempuan">Perempuan</option>
          </select>
        </div>

        <div style={{ marginBottom: 10, color: "white" }}>
          <b>Tanggal Lahir</b>
          <br />
          <input style={{
                  width: "300px" , padding: "1px"}}
            type="date"
            value={tanggalLahir}
            onChange={(e) => {
              setTanggalLahir(e.target.value);
            }}
          />
        </div>

        <div style={{ marginBottom: 10, color: "white" }}>
          <b><label>Alamat</label></b>
          <br />
          <input style={{
                  width: "300px" , borderRadius: "12px"}}
            type="text"
            value={alamat}
            onChange={(e) => {
              setAlamat(e.target.value);
            }}
          />
        </div>

        <div style={{color: "white" }}>
          <b><label>Kota</label></b>
          <br/>
          <input style={{
                  width: "300px" ,borderRadius: "12px"}}
            type="text"
            value={kota}
            onChange={(e) => {
              setKota(e.target.value);
            }}
          />
        </div>
        <br />
        <button
          onClick={() => {
            router.push(`/page2?json=${dataJson}`);
          }}
          style={{
            //width: "100%",
            backgroundColor: "rgba(255,200,200,0.5)",
            alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        width: "200px",
            height: "30px",
            //bottom: "5px",
            left: "900px",
            right: "150px",
          }}
        >
          <b>NEXT</b>
        </button>
        <br/>
      </div>
      
      </div>

      /* <div
        style={{
          position: "fixed",
            //border: "1px solid blue",
            //backgroundColor: "rgba(255,200,200,0.5)",  
            width: "200px",
            height: "60px",
            bottom: "10px",
            left: "400px",
            right: "150px",
        }}
      >
        <button
          onClick={() => {
            router.push(`/page2?json=${dataJson}`);
          }}
          style={{
            width: "100%",
            backgroundColor: "rgba(255,200,200,0.5)",
          }}
        >
          NEXT
        </button>
      </div> */
  );
};

export default Page1;
