import React, { useEffect, useState } from "react";
import Grid from "./Grid/Grid";
import "./Projects.css";

function Projects() {
    return (
        <div className="bg-[#040404] items-center flex flex-col">
            <h1 className="text-[#EAEAEA] font-Inter font-semibold my-5">Dante Castelao 2023</h1>
            <div className="w-[920px]">
                <div className="flex items-center justify-center h-[50px] w-full rounded-[10px] bg-gradient p-4 mb-5 mt-2">
                </div>
                <Grid/>
                <div className="flex h-[50px] items-center w-full flex-row justify-between rounded-[10px] bg-[#101010] p-4 my-5">
                </div>
            </div>
        </div>
    );
}

export default Projects;

