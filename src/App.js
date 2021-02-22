import React, { useState } from "react";
import Drag from "./components/Drag";
import { Breadcrumb, Layout } from "antd";
import "antd/dist/antd.css";
import Sidebar from "./components/Sidebar";
import TextArea from "antd/lib/input/TextArea";

function App() {
  const { Content, Footer } = Layout;
  const [ocrText, setOcrText] = useState("");
  return (
    <Layout className="app">
      <Sidebar />
      <Content style={{ padding: "0 50px" }}>
        <Breadcrumb style={{ margin: "16px 0" }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>OCR</Breadcrumb.Item>
        </Breadcrumb>
        <div className="site-layout-content">
          <Drag ocrText={ocrText} setOcrText={setOcrText} />
          <TextArea style={{marginTop: "40px", resize: "none",height: "400px"}} value={ocrText}/>
        </div>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Copyright &copy;{new Date().getFullYear()} under{" "}
        <a href="https://regenci.netlify.app" rel="noreferrer" target="_blank">
          Regenci Inc.
        </a>{" "}
        developed by{" "}
        <a
          href="https://stefanportfolio.netlify.app"
          rel="noreferrer"
          target="_blank"
        >
          Golban Stefan
        </a>
      </Footer>
    </Layout>
  );
}

export default App;
