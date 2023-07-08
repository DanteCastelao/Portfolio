import React, { useEffect, useState } from "react";
import Grid from "./Grid/Grid";
import "./Projects.css";

function Projects() {
    return (
        <div className="bg-[#040404] items-center flex flex-col">
            <h1 className="text-[#EAEAEA] my-8 font-bold font-Inter">Dante Castelao</h1>
            <div className="w-[920px]">
                <div className="flex h-[50px] items-center w-full flex-row justify-between rounded-[10px] bg-[#101010] p-4 mb-5">
                </div>
                <Grid/>
                <div className="flex h-[50px] items-center w-full flex-row justify-between rounded-[10px] bg-[#101010] p-4 my-5">
                </div>
            </div>
        </div>
    );
}

export default Projects;

