import React from "react";
import "../App.css";
import { BiArrowBack } from "react-icons/bi";
import { Link } from "react-router-dom";
import TabsContent from "../components/tabs";

export default function Experience() {
  return (
    <div className="App">
      <div className="border">
        <br />
        <Link to="/" className="text-link">
          back to home
        </Link>
      </div>
      <div className="Main">
        <header className="App-header">
          <p className="font-link">Experience</p>
        </header>
        <TabsContent></TabsContent>
      </div>
    </div>
  );
}
