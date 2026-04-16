import { useState } from "react";
export default function SkillCard({ skill, index, visible }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div style={{ display: "contents" }}>
      <style>
        {`
          .skill-card {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 8px;
                    border: 1.5px solid #e2e8f0;
                    border-radius: 16px;
                    padding: 20px 16px 16px;
                    min-width: 108px;
                    flex: 1 1 100px;
                    max-width: 130px;
                    cursor: default;
                    transition: border-color 0.25s, box-shadow 0.25s, transform 0.25s;
                    opacity: 0;
                    transform: translateY(20px);
                    animation: none;
                  }
                  .skill-card.show {
                    animation: fadeUp 0.5s ease forwards;
                  }
                  @keyframes fadeUp {
                    to { opacity: 1; transform: translateY(0); }
                  }
           
                  .skill-card:hover {
                    border-color: var(--accent);
                    box-shadow: 0 8px 32px -8px color-mix(in srgb, var(--accent) 30%, transparent);
                    transform: translateY(-4px);
                    background: var(--bg);
                  }
           
                  .skill-icon-wrap {
                    font-size: 38px;
                    transition: color 0.25s, transform 0.25s;
                    line-height: 1;
                  }
                  .skill-card:hover .skill-icon-wrap { transform: scale(1.12); }
           
                  .skill-label {
                    font-family: 'Syne', sans-serif;
                    font-size: 12px;
                    font-weight: 700;
                    color: #334155;
                    letter-spacing: 0.04em;
                  }
           
                  .skill-bar {
                    width: 100%;
                    height: 3px;
                    background: #e2e8f0;
                    border-radius: 999px;
                    overflow: hidden;
                  }
                  .skill-bar-fill {
                    height: 100%;
                    width: 0%;
                    border-radius: 999px;
                    transition: width 0.8s cubic-bezier(0.4,0,0.2,1);
                  }
                  .skill-card:hover .skill-bar-fill { width: 85%; }`}
      </style>

      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          "--accent": skill.accent,
          "--bg": skill.bg,
          animationDelay: `${index * 80}ms`,
        }}
        className={`skill-card ${visible ? "show" : ""}`}
      >
        <div
          className="skill-icon-wrap"
          style={{ color: hovered ? skill.accent : "#94a3b8" }}
        >
          <skill.Icon />
        </div>
        <span className="skill-label">{skill.name}</span>
        <div className="skill-bar">
          <div
            className="skill-bar-fill"
            style={{ background: skill.accent }}
          />
        </div>
      </div>
    </div>
  );
}
