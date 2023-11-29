import React from "react";
import "./view.scss";

type ViewProps = {
  children: React.ReactNode;
  name?: string;
  backgroundcolor?: string;
  title?: string;
  subTitle?: string;
  introText?: string;
  id?: string;
};

export const View: React.FC<ViewProps> = ({
  children,
  name,
  backgroundcolor,
  title,
  subTitle,
  introText,
  id,
}) => {
  return (
    <div
      id={id ?? ""}
      className={name ?? "view"}
      style={{ backgroundColor: backgroundcolor ?? "white" }}
    >
      {introText && (
        <div className="intro-text">
          <p>{introText ?? " "}</p>
        </div>
      )}
      {title && (
        <div className="title">
          <h1>{title ?? ""}</h1>
        </div>
      )}
      {subTitle && (
        <div className="subTitle">
          <h3>{subTitle ?? ""}</h3>
        </div>
      )}
      {children}
    </div>
  );
};
