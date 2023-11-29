// DownloadButton.js
import React from "react";
import "../../../public/image/";

const DownloadButton = () => {
  const handleDownload = () => {
    const downloadLink = document.createElement("a");
    downloadLink.href = "/"; // Adjust the path accordingly
    downloadLink.download = "your_cv.pdf"; // Replace with the desired file name
    downloadLink.click();
  };

  return <button onClick={handleDownload}>Download CV</button>;
};

export default DownloadButton;
