import React from "react";
import Layout from "../../components/Layout";
import { details, featured } from "../styles/project-details.module.css";

export default function projectDetails() {
  return (
    <Layout>
      <div className={details}>
        <h2>title</h2>
        <h3>stack</h3>
        <div className={featured}></div>

        {/* <div className={html} dangerouslySetInnerHTML={}/> */}
      </div>
    </Layout>
  );
}
