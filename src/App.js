import React, { useState } from "react";
import Header from "./components/Header";
import MainBanner from "./components/MainBanner";
import VideoPlayer from "./components/VideoPlayer";
import "./App.css";
import ModalVideoPlayer from "./components/ModalVideoPlayer/ModalVideoPlayer";
import VideoLink from "./components/ModalVideoPlayer/VideoLink";
import WhatWhereHow from "./components/WhatWhereHow";
import ModelViewer from "./components/ModelViewer";
function App() {
  const [modal, setModal] = useState(false);
  return (
    <div className="App">
      <ModalVideoPlayer visible={modal} setVisible={setModal}>
        <VideoLink />
      </ModalVideoPlayer>
      <Header />
      <MainBanner />
      <button onClick={() => setModal(true)}> тимчасова кнопка</button>
      <VideoPlayer />
      <WhatWhereHow />
      <ModelViewer />
    </div>
  );
}

export default App;
