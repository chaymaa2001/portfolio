import { React } from "react";
const Footer = () => {
  return (
    <footer className="bg-light text-center text-lg-start">
      <p className="text-center p-3">
        {" "}
        Created By Chaimae Souhaib © {new Date().getFullYear()}{" "}
      </p>
    </footer>
  );
};
export { Footer };
