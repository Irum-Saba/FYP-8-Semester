import React from "react";
import unity from "../../images/cunity.jfif";
import Unity from "../../images/unity.jfif";
import Unreal from "../../images/unreal.jfif";
import Pygame from "../../images/pygame.jfif";
import GameDev from "../../images/gamedevp.jfif";
import Javascript from "../../images/JS.jfif";
// import pygame from "../../images/pygame.png";
import Navbar from "../../components/Navbar";
import "./courses.css";
const Courses = () => {
  const tools = [
    {
      name: "C# Unity",
      description:
        "  Unity C# Scripting Tutorial For Beginners-Learn C# For Unity Game Development Complete C# Course. ",
      url: "https://www.youtube.com/watch?v=VEnZzwW_OJM",
      Image: `${unity}`,
    },
    {
      name: "Learn Unity",
      description:
        "Learn to develop games using the Unity game engine in this complete course for beginners. This course will get you up and running with Unity. Free game assets included!",
      url: "https://www.youtube.com/watch?v=gB1F9G0JXOo",
      Image: `${Unity}`,
    },
    {
      name: "Unreal Engine",
      description:
        "Unreal Engine is the world’s most open and advanced real-time 3D creation tool for photoreal visuals and immersive experiences.",
      url: "https://www.youtube.com/watch?v=07mqToYxY3g",
      Image: `${Unreal}`,
    },

    {
      name: "Pygame Tutorial for Beginners",
      description:
        "Learn how to use Pygame to code games with Python. In this full tutorial course, you will learn Pygame by building a space invaders game. The course will help you understand the main game development concepts like moving characters, shooting bullets, and more.",
        url: "https://www.youtube.com/watch?v=FfWpgLFMI7w",
      Image: `${Pygame}`,
    },

    {
      name: "Game development",
      description: "All about Game development | What to study, jobs, packages? Simply Explained",
      url: "https://www.youtube.com/watch?v=rJ1iA-33fss",
      Image: `${GameDev}`,
    },
    {
      name: "JavaScript Game Development Course for Beginners",
      description:
        "Learn to make 2D games with HTML, CSS & plain vanilla JavaScript, no frameworks and no libraries! From sprite animation to state management, in this series of projects you will learn everything you need to make your own 2D animated games! We will go step by step explaining each technique on a small standalone codebase and then we will use everything we learned to make a single final game.",
      url: "https://www.youtube.com/watch?v=GFO_txvwK_c",
      Image: `${Javascript}`,
    },
    // {
    //   name: "Godot Engine AI",
    //   description:
    //     "Godot Engine is an open-source game engine that provides built-in AI functionalities such as pathfinding, behavior trees, and navigation meshes, allowing developers to create AI-driven game characters and systems.",
    //   url: "https://godotengine.org/",
    //   Image: `${godot}`,
    // },
    // {
    //   name: "Pygame AI",
    //   description:
    //     "Pygame is a Python library that provides a set of tools for game development. While not specifically an AI-focused tool, Pygame can be used to implement and experiment with various AI techniques in game development.",
    //   url: "https://www.pygame.org/",
    //   Image: `${pygame}`,
    // },
  ];
  return (
    <>
      <Navbar />
      <ul className="circles">
        <h1 className="toolsHeading">Game Development and Digital Art Courses</h1>
        <p className="text-center para">
          Lean Basic, Intermediate and advance level courses related digital arts and game
          development, and get certificates after learning.
        </p>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
      <div className="postercard-container">
        {tools.map((tool, index) => (
          <div className="postercard" key={index}>
            <img src={tool.Image} alt={tool.name} />
            <h2>{tool.name}</h2>
            <p className="toolDesc">{tool.description}</p>
            <a href={tool.url} target="_blank" rel="noopener noreferrer">
              Learn More
            </a>
          </div>
        ))}
      </div>
    </>
  );
};

export default Courses;
