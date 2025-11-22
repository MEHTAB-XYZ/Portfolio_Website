import React from 'react';
import { FaPython, FaJava, FaReact, FaHtml5, FaCss3Alt, FaGitAlt, FaDatabase, FaGithub } from 'react-icons/fa';
import { SiJavascript, SiTypescript, SiTensorflow, SiKeras, SiScikitlearn, SiPandas, SiMongodb, SiFirebase, SiMysql } from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';
import './Skills.css';

const Skills = () => {
    const skillCategories = [
        {
            title: "Languages",
            skills: [
                { name: "Python", icon: <FaPython /> },
                { name: "C", icon: null },
                { name: "JavaScript", icon: <SiJavascript /> },
                { name: "TypeScript", icon: <SiTypescript /> },
                { name: "Java", icon: <FaJava /> },
                { name: "SQL", icon: <FaDatabase /> },
            ]
        },
        {
            title: "Web/Mobile",
            skills: [
                { name: "React.js", icon: <FaReact /> },
                { name: "React Native", icon: <FaReact /> },
                { name: "HTML", icon: <FaHtml5 /> },
                { name: "CSS", icon: <FaCss3Alt /> },
            ]
        },
        {
            title: "AI/ML",
            skills: [
                { name: "Machine Learning", icon: null },
                { name: "Deep Learning", icon: null },
                { name: "NLP", icon: null },
                { name: "TensorFlow", icon: <SiTensorflow /> },
                { name: "Keras", icon: <SiKeras /> },
                { name: "Scikit-learn", icon: <SiScikitlearn /> },
                { name: "Pandas", icon: <SiPandas /> },
            ]
        },
        {
            title: "Databases",
            skills: [
                { name: "MySQL", icon: <SiMysql /> },
                { name: "Firebase", icon: <SiFirebase /> },
                { name: "MongoDB", icon: <SiMongodb /> },
            ]
        },
        {
            title: "Tools",
            skills: [
                { name: "Git", icon: <FaGitAlt /> },
                { name: "GitHub", icon: <FaGithub /> },
                { name: "Colab", icon: null },
                { name: "Kaggle", icon: null },
                { name: "VS Code", icon: <VscVscode /> },
                { name: "Power BI", icon: null },
            ]
        }
    ];

    return (
        <section id="skills" className="skills-section">
            <div className="container">
                <h2 className="section-title">Skills</h2>

                <div className="skills-grid">
                    {skillCategories.map((category, index) => (
                        <div key={index} className="skill-category">
                            <h3 className="category-title">{category.title}</h3>
                            <div className="skill-list">
                                {category.skills.map((skill, idx) => (
                                    <div key={idx} className="skill-item">
                                        {skill.icon && <span className="skill-icon">{skill.icon}</span>}
                                        <span className="skill-name">{skill.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
