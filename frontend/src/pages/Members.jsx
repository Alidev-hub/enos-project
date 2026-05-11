import { useState } from "react";
import "../styles/Members.css";
import bg from "../assets/home-bg.png";
import ali from "../assets/ali.png";
import nadir from "../assets/nadir.png";
import mariam from "../assets/mariam.png";
import m from "../assets/M.png";
import n from "../assets/N.png";
import a from "../assets/A.png";


export default function Team() {
    const members = [
        {
            name: "Ali",
            role: "Développeur",
            desc: "Sites web performants et sécurisés.",
            image: ali,
            bg: a,
        },
        {
            name: "Nadir",
            role: "Filmmaker",
            desc: "Vidéos captivantes et professionnelles.",
            image: nadir,
            bg: n,
        },
        {
            name: "Mariam",
            role: "Éditrice",
            desc: "Contenu vidéo moderne et attractif.",
            image: mariam,
            bg: m,
        },
    ];

    const [activeIndex, setActiveIndex] = useState(1);

    return (
        <div
            className="team"
            style={{ backgroundImage: `url(${bg})` }}
        >
            <div className="overlay"></div>
            <section className="team-section">
                <h2 className="team-title">Rencontrez notre équipe</h2>

                <div className="slider">
                    {members.map((member, index) => {
                        let position = "next";

                        if (index === activeIndex) position = "active";
                        else if (
                            index ===
                            (activeIndex === 0
                                ? members.length - 1
                                : activeIndex - 1)
                        )
                            position = "prev";

                        return (
                            <div
                                key={index}
                                className={`slide ${position}`}
                                onClick={() => setActiveIndex(index)}
                                style={{
                                    backgroundImage: `url(${member.bg})`,
                                }}
                            >
                                <div className="slide-image">
                                    <img src={member.image} alt={member.name} />
                                </div>

                                <div className="slide-info">
                                    <h3>{member.name}</h3>
                                    <span>{member.role}</span>
                                    <p>{member.desc}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </section>
        </div>
    );
}