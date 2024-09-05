import React from "react"
import { useState, useEffect } from 'react'
import Pages from "../utilities/Pages"
import { Link } from "react-router-dom";
import './style.css';
function CurriculumV(){
    return (
        <div className="a4-page justify-center">
            <div className="flex flex-col h-screen bg-white-500">
                <div className="flex justify-start">
                    <div className="flex flex-col ml-4 mt-8">
                        <h1 className="text-heading font-bold">Ashwin Sarith</h1>
                        <h1 className="text-subheading">Software Developer</h1>
                    </div>
                </div>

                <div className="flex items-center justify-center m-4">
                    <hr className="w-screen h-[0.15rem] bg-blue-300" />
                </div>

                <div className="flex justify-center">
                    <div className="flex flex-row items-center">
                        <h1 className="text-body">Country: Singapore, Southeast Asia</h1>
                        <h1 className="text-body ml-3">Email: ash.sarith@gmail.com</h1>
                        <h1 className="text-body ml-3">Phone: +65 9237 0112</h1>
                    </div>
                </div>

                <div className="flex items-center justify-center m-4">
                    <hr className="w-screen h-[0.15rem] bg-blue-300 mt-2" />
                </div>

                <div className="flex flex-row justify-between px-1">
                    <div className="flex flex-col ">
                        <div className="flex flex-col m-5">
                            <h1 className="flex justify-start text-subheading">Key Skills</h1>
                            <ul className="list-disc ml-8">
                                <li className="text-body">Java Development</li>
                                <li className="text-body">Git</li>
                                <li className="text-body">UI design</li>
                                <li className="text-body">Python Automations</li>
                            </ul>
                        </div>

                        <div className="flex flex-col m-4">
                            <h1 className="flex justify-left text-subheading">FDM Training</h1>
                            <h2 className="text-body font-bold">
                                Software Development (inc. Dev Ops tools), Training Programme, Singapore
                            </h2>
                            <p className="text-body">Nov 2023 – March 2024</p>
                            <ul className="list-disc ml-8">
                                <li className="text-body">Professional Skills</li>
                                <li className="text-body">SQL</li>
                                <li className="text-body">Unix</li>
                                <li className="text-body">OOD Java (Git, Jenkins, Maven)</li>
                                <li className="text-body">Database Access in Java (JDBC, JPA/Hibernate)</li>
                                <li className="text-body">Web Development in Java (Servlets, JSPs)</li>
                                <li className="text-body">Spring Framework</li>
                                <li className="text-body">
                                    Group software development project (Docker, Jira, Selenium and Jenkins)
                                </li>
                                <li className="text-body">Agile Project Management (APM)</li>
                            </ul>
                        </div>

                        <div className="flex flex-col m-4">
                            <h1 className="flex justify-left text-subheading">Education</h1>
                            <h2 className="text-body font-bold">BSc in Computer Science</h2>
                            <p className="text-body">Monash University</p>
                            <p className="text-body">Mar 2019 – May 2023</p>
                            <p className="text-body">
                                Subjects included: Algorithms and data structures, OOP, Project Management, and Networking.
                            </p>
                            <p className="text-body">
                                Project: Developed a gamified lesson plan to improve engagement in Year 1 students trying to learn python.
                            </p>
                        </div>

                        <div className="flex flex-col m-4">
                            <h1 className="flex justify-left text-subheading">Languages</h1>
                            <p className="text-body">English, Malayalam</p>
                        </div>

                        <div className="flex flex-col m-4">
                            <h1 className="flex justify-left text-subheading">Interests & Activities</h1>
                            <ul className="list-disc ml-8">
                                <li className="text-body">Volunteering – Save the Children India</li>
                                <li className="text-body">Interests – Music Production</li>
                                <li className="text-body">Sports – Badminton</li>
                            </ul>
                        </div>
                    </div>

                    
                </div>

            </div>
        </div>
    );
}

export default CurriculumV;
