import axios from "axios";
// import "antd/dist/antd.css";
import { useEffect, useState } from "react";
import Button from "antd/lib/button/button";
import ClipLoader from "react-spinners/ClipLoader";

/* eslint-disable */

function Drag({ ocrText, setOcrText }) {
  const [loading, setLoading] = useState(false);
  const [custom, setCustom] = useState(false);
  const [img, setImg] = useState("");

  const handleImg = async (e) => {
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "regenci");
    const res = await fetch(
      "https://api.cloudinary.com/v1_1/stef703/image/upload",
      {
        method: "POST",
        body: data,
      }
    );
    const file = await res.json();
    setImg(file.secure_url);
  };
  const options = {
    method: "GET",
    url: "https://ocrly-image-to-text.p.rapidapi.com/",
    params: {
      imageurl: img,
      filename: "sample.jpg",
    },
    headers: {
      "x-rapidapi-key": "17347d2d18msh98e6045854a6b5bp16f82ejsnaa7d6ff4b413",
      "x-rapidapi-host": "ocrly-image-to-text.p.rapidapi.com",
    },
  };
  const runOcr = () => {
    if (img !== "") {
      axios
        .request(options)
        .then(function (response) {
          setOcrText(response.data);
        })
        .catch(function (error) {
          console.error(error);
        });
      setLoading(true);
      setTimeout(() => {
        setCustom(true);
      }, 500);
    }
  };
  useEffect(() => {
    if (ocrText !== "") {
      setLoading(false);
    }
  }, [ocrText]);

  return (
    <div style={{ display: "flex", width: "100%" }}>
      <input type="file" onChange={(e) => handleImg(e)} />
      <div style={{ margin: "0 40px" }}>
        {!loading && !custom ? (
          <Button onClick={runOcr}>Convert</Button>
        ) : (
          <ClipLoader color="dodgerblue" loading={loading} size={50} />
        )}
        {custom && !loading ? (
          <Button onClick={() => window.location.reload(false)}>Reset</Button>
        ) : null}
      </div>
    </div>
  );
}
export default Drag;
