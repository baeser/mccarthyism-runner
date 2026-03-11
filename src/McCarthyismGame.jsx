import { useState, useRef } from "react";
import {
  CHARACTERS,
  SCENARIOS,
  VERDICT_TEMPLATES,
  computeVerdictType,
  pickRandom,
  shuffleAndTake,
} from "./gameData.js";

const ARCHETYPES = ["informer", "resister", "bystander"];

// ─── PERSONALIZATION ─────────────────────────────────────────────────────────
// Replace template variables in scenario text with actual character details.

function personalizeText(text, character) {
  if (!text || !character) return text;
  return text
    .replace(/\{name\}/g, character.name)
    .replace(/\{shortName\}/g, character.shortName)
    .replace(/\{occupation\}/g, character.occupation.toLowerCase())
    .replace(/\{workplace\}/g, character.workplace)
    .replace(/\{location\}/g, character.location);
}

function personalizeScenario(scenario, character) {
  return {
    ...scenario,
    headline: personalizeText(scenario.headline, character),
    scene: personalizeText(scenario.scene, character),
    situation: personalizeText(scenario.situation, character),
    choices: scenario.choices.map((choice) => ({
      ...choice,
      text: personalizeText(choice.text, character),
      outcome: {
        ...choice.outcome,
        narrative: personalizeText(choice.outcome.narrative, character),
        consequences: choice.outcome.consequences.map((c) =>
          personalizeText(c, character)
        ),
      },
    })),
  };
}

const HISTORICAL_FACTS = [
  "Senator Joseph McCarthy claimed in 1950 that he had a list of 205 known Communists working in the State Department.",
  "The Hollywood Ten were blacklisted after refusing to testify before HUAC in 1947.",
  "The House Un-American Activities Committee (HUAC) investigated suspected Communist influence in American institutions.",
  "Playwright Arthur Miller wrote 'The Crucible' in 1953 as an allegory for McCarthyism, using the Salem witch trials.",
  "Actors, directors, and writers who refused to cooperate with HUAC were placed on a 'blacklist' — unable to find work.",
  "Ethel and Julius Rosenberg were executed in 1953, accused of passing atomic secrets to the Soviet Union.",
  "Edward R. Murrow's 1954 broadcast on CBS directly challenged McCarthy, helping turn public opinion against him.",
  "McCarthyism destroyed careers based on accusation alone — the burden of proof was often reversed.",
  "Friendly witnesses who 'named names' could save their careers — but at the cost of ruining others.",
  "The term 'Fifth Amendment Communist' was used to smear those who invoked their constitutional right to silence.",
];

const typewriterCSS = `
@import url('https://fonts.googleapis.com/css2?family=Special+Elite&family=Courier+Prime:ital,wght@0,400;0,700;1,400&display=swap');

* { box-sizing: border-box; margin: 0; padding: 0; }

body { background: #1a1410; }

.game-root {
  min-height: 100vh;
  background: #1a1410;
  font-family: 'Courier Prime', monospace;
  color: #d4c5a0;
  position: relative;
  overflow: hidden;
}

.noise-overlay {
  position: fixed; inset: 0; pointer-events: none; z-index: 0;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E");
  opacity: 0.4;
}

.scanlines {
  position: fixed; inset: 0; pointer-events: none; z-index: 1;
  background: repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.03) 2px, rgba(0,0,0,0.03) 4px);
}

.content-wrap {
  position: relative; z-index: 2;
  max-width: 780px;
  margin: 0 auto;
  padding: 24px 20px 60px;
}

/* HEADER */
.masthead {
  text-align: center;
  border-top: 3px double #8b6914;
  border-bottom: 3px double #8b6914;
  padding: 10px 0 14px;
  margin-bottom: 28px;
}
.masthead-eyebrow {
  font-size: 10px; letter-spacing: 4px; text-transform: uppercase;
  color: #8b6914; margin-bottom: 6px;
}
.masthead-title {
  font-family: 'Special Elite', cursive;
  font-size: clamp(22px, 5vw, 42px);
  color: #e8d5a3;
  line-height: 1.1;
  text-shadow: 2px 2px 8px rgba(0,0,0,0.6);
}
.masthead-subtitle {
  font-size: 11px; letter-spacing: 2px; color: #9a8060; margin-top: 6px;
}

/* PAPER CARD */
.paper-card {
  background: #f5ead6;
  color: #2a1f0e;
  border-radius: 2px;
  padding: 28px 32px;
  margin-bottom: 20px;
  box-shadow: 4px 4px 20px rgba(0,0,0,0.5), inset 0 0 60px rgba(139,105,20,0.08);
  position: relative;
  border: 1px solid #c8a96e;
}
.paper-card::before {
  content: '';
  position: absolute; inset: 0;
  background: repeating-linear-gradient(0deg, transparent, transparent 24px, rgba(139,105,20,0.07) 24px, rgba(139,105,20,0.07) 25px);
  border-radius: 2px;
  pointer-events: none;
}

.stamp {
  position: absolute;
  top: 16px; right: 16px;
  border: 3px solid;
  padding: 4px 10px;
  font-family: 'Special Elite', cursive;
  font-size: 13px;
  letter-spacing: 2px;
  text-transform: uppercase;
  transform: rotate(8deg);
  opacity: 0.75;
}
.stamp.red { color: #8b1a1a; border-color: #8b1a1a; }
.stamp.blue { color: #1a3a6b; border-color: #1a3a6b; }
.stamp.green { color: #1a5c2a; border-color: #1a5c2a; }

.section-label {
  font-size: 9px; letter-spacing: 3px; text-transform: uppercase;
  color: #7a5c2e; margin-bottom: 6px; font-weight: 700;
}
.character-name {
  font-family: 'Special Elite', cursive;
  font-size: 26px;
  color: #1a0f00;
  margin-bottom: 4px;
}
.character-meta {
  font-size: 12px; color: #6b4e2a; margin-bottom: 16px;
  display: flex; gap: 20px; flex-wrap: wrap;
}
.character-bio {
  font-size: 14px; line-height: 1.8; color: #2a1f0e;
  border-top: 1px solid #c8a96e; padding-top: 14px;
}

/* ARCHETYPE BADGE */
.archetype-badge {
  display: inline-block;
  padding: 3px 12px;
  font-size: 10px; letter-spacing: 2px; text-transform: uppercase;
  font-weight: 700;
  margin-bottom: 14px;
}
.archetype-badge.informer { background: #8b1a1a; color: #f5e6d3; }
.archetype-badge.resister { background: #1a3a6b; color: #ddeeff; }
.archetype-badge.bystander { background: #3a3020; color: #d4c5a0; border: 1px solid #8b6914; }

/* SCENARIO */
.scenario-text {
  font-size: 15px; line-height: 1.9; color: #2a1f0e;
  margin-bottom: 20px;
}

.choices-label {
  font-size: 9px; letter-spacing: 3px; text-transform: uppercase;
  color: #7a5c2e; margin-bottom: 10px; font-weight: 700;
}

.choice-btn {
  display: block; width: 100%;
  background: transparent;
  border: 1px solid #a07840;
  color: #2a1f0e;
  font-family: 'Courier Prime', monospace;
  font-size: 14px;
  text-align: left;
  padding: 12px 16px;
  margin-bottom: 10px;
  cursor: pointer;
  transition: all 0.18s ease;
  line-height: 1.5;
  border-radius: 1px;
}
.choice-btn:hover {
  background: #a07840;
  color: #f5ead6;
  border-color: #a07840;
  transform: translateX(4px);
}
.choice-btn:disabled { opacity: 0.5; cursor: not-allowed; }

/* OUTCOME */
.outcome-box {
  border-left: 4px solid #8b1a1a;
  padding: 14px 16px;
  background: rgba(139,26,26,0.06);
  margin-bottom: 16px;
  font-size: 14px; line-height: 1.8;
}
.outcome-box.positive { border-color: #1a5c2a; background: rgba(26,92,42,0.06); }
.outcome-box.neutral { border-color: #8b6914; background: rgba(139,105,20,0.06); }

.consequence-list {
  list-style: none;
  margin-bottom: 16px;
}
.consequence-list li {
  font-size: 13px; padding: 4px 0;
  padding-left: 16px; position: relative; color: #3a2a10;
}
.consequence-list li::before { content: '\\25B8 '; position: absolute; left: 0; color: #8b6914; }

/* FACT BOX */
.fact-box {
  background: #2a1f0e;
  border: 1px solid #8b6914;
  padding: 14px 18px;
  margin-bottom: 20px;
  color: #d4c5a0;
}
.fact-box-label {
  font-size: 9px; letter-spacing: 3px; text-transform: uppercase;
  color: #8b6914; margin-bottom: 6px;
}
.fact-box-text { font-size: 13px; line-height: 1.7; font-style: italic; }

/* SCORE / LOYALTY METER */
.meter-wrap { margin-bottom: 18px; }
.meter-label {
  font-size: 9px; letter-spacing: 3px; text-transform: uppercase;
  color: #7a5c2e; margin-bottom: 6px;
  display: flex; justify-content: space-between;
}
.meter-bar {
  height: 8px;
  background: #c8a96e;
  border-radius: 0;
  overflow: hidden;
}
.meter-fill {
  height: 100%;
  transition: width 0.5s ease;
}
.meter-fill.suspicion { background: linear-gradient(90deg, #8b6914, #8b1a1a); }
.meter-fill.integrity { background: linear-gradient(90deg, #1a5c2a, #1a3a6b); }

/* BUTTONS */
.btn-primary {
  font-family: 'Courier Prime', monospace;
  font-size: 13px; letter-spacing: 2px; text-transform: uppercase;
  background: #8b6914; color: #f5ead6;
  border: none; padding: 12px 28px;
  cursor: pointer; margin-top: 8px;
  transition: background 0.2s;
}
.btn-primary:hover { background: #a07828; }
.btn-secondary {
  font-family: 'Courier Prime', monospace;
  font-size: 12px; letter-spacing: 2px; text-transform: uppercase;
  background: transparent; color: #8b6914;
  border: 1px solid #8b6914; padding: 10px 24px;
  cursor: pointer; margin-top: 8px; margin-left: 10px;
  transition: all 0.2s;
}
.btn-secondary:hover { background: rgba(139,105,20,0.1); }

/* FINAL SUMMARY */
.final-verdict {
  font-family: 'Special Elite', cursive;
  font-size: 22px; text-align: center;
  color: #1a0f00; margin-bottom: 16px;
  line-height: 1.3;
}
.verdict-stamp {
  text-align: center; margin-bottom: 20px;
}

/* WELCOME SCREEN */
.welcome-art {
  text-align: center; padding: 10px 0 20px;
  font-family: 'Special Elite', cursive;
  font-size: 14px;
  color: #6b4e2a;
  line-height: 1.6;
  white-space: pre;
  overflow: hidden;
}
.intro-text {
  font-size: 14px; line-height: 1.9; color: #2a1f0e;
  margin-bottom: 20px;
}

/* DIVIDER */
.divider {
  border: none; border-top: 1px solid #c8a96e;
  margin: 18px 0;
}

/* TURN COUNTER */
.turn-header {
  display: flex; justify-content: space-between; align-items: center;
  margin-bottom: 18px;
}
.turn-counter {
  font-size: 10px; letter-spacing: 2px; text-transform: uppercase; color: #8b6914;
}

/* HEADLINE */
.newspaper-hed {
  font-family: 'Special Elite', cursive;
  font-size: 18px; color: #1a0f00;
  border-bottom: 2px solid #1a0f00;
  padding-bottom: 6px; margin-bottom: 12px;
  line-height: 1.3;
}

/* STAT CHANGE INDICATORS */
.stat-change {
  font-size: 11px; font-weight: 700; letter-spacing: 1px;
  padding: 2px 8px; border-radius: 2px; margin-left: 8px;
}
.stat-change.up { color: #8b1a1a; background: rgba(139,26,26,0.1); }
.stat-change.down { color: #1a5c2a; background: rgba(26,92,42,0.1); }
.stat-change.up.integrity { color: #1a5c2a; background: rgba(26,92,42,0.1); }
.stat-change.down.integrity { color: #8b1a1a; background: rgba(139,26,26,0.1); }

@keyframes fadeIn { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: translateY(0); } }
.fade-in { animation: fadeIn 0.4s ease forwards; }
`;

// ─── COMPONENTS ──────────────────────────────────────────────────────────────

function Meter({ label, value, type, max = 100, change }) {
  const changeLabel = change != null && change !== 0
    ? (change > 0 ? `+${change}` : `${change}`)
    : null;
  const changeDir = change > 0 ? "up" : "down";
  return (
    <div className="meter-wrap">
      <div className="meter-label">
        <span>
          {label}
          {changeLabel && (
            <span className={`stat-change ${changeDir} ${type}`}>
              {changeLabel}
            </span>
          )}
        </span>
        <span>{Math.round(value)}/{max}</span>
      </div>
      <div className="meter-bar">
        <div
          className={`meter-fill ${type}`}
          style={{ width: `${Math.min(100, Math.max(0, (value / max) * 100))}%` }}
        />
      </div>
    </div>
  );
}

// ─── SCREENS ─────────────────────────────────────────────────────────────────

function WelcomeScreen({ onStart }) {
  return (
    <div className="fade-in">
      <div className="paper-card">
        <div className="stamp red">CONFIDENTIAL</div>
        <div className="welcome-art">{`
  ██████╗ ███████╗██████╗     ███████╗ ██████╗ █████╗ ██████╗ ███████╗
  ██╔══██╗██╔════╝██╔══██╗    ██╔════╝██╔════╝██╔══██╗██╔══██╗██╔════╝
  ██████╔╝█████╗  ██║  ██║    ███████╗██║     ███████║██████╔╝█████╗
  ██╔══██╗██╔══╝  ██║  ██║    ╚════██║██║     ██╔══██║██╔══██╗██╔══╝
  ██║  ██║███████╗██████╔╝    ███████║╚██████╗██║  ██║██║  ██║███████╗
        `.trim()}</div>
        <div className="newspaper-hed">Are You Now, or Have You Ever Been...?</div>
        <p className="intro-text">
          It is 1953. Senator Joseph McCarthy has convinced America that Communist spies lurk in every office, every neighborhood, every family. The House Un-American Activities Committee summons citizens to testify. Name names — or face ruin.
        </p>
        <p className="intro-text">
          In this simulation, you will inhabit a real American life from this era. You will face impossible choices: betray a colleague to save yourself, stand on principle and lose everything, or try to stay invisible while the storm rages around you.
        </p>
        <p className="intro-text">
          <strong>Every session is different.</strong> You will be assigned a new character — with a new name, occupation, and story. Your choices shape their fate. There are no easy answers. That is the point.
        </p>
        <hr className="divider" />
        <p style={{ fontSize: 12, color: "#6b4e2a", fontStyle: "italic", marginBottom: 16 }}>
          Based on real events, 1950–1956. Inspired by the testimonies of the Hollywood Ten, Lillian Hellman, and thousands of ordinary Americans whose lives were upended by suspicion.
        </p>
        <button className="btn-primary" onClick={onStart}>Begin Your Assignment</button>
      </div>
      <div className="fact-box">
        <div className="fact-box-label">Historical Context</div>
        <p className="fact-box-text">{HISTORICAL_FACTS[Math.floor(Math.random() * HISTORICAL_FACTS.length)]}</p>
      </div>
    </div>
  );
}

function CharacterScreen({ character, onBegin }) {
  const stampColor = character.archetype === "informer" ? "red" : character.archetype === "resister" ? "blue" : "green";
  const stampText = character.archetype === "informer" ? "FRIENDLY WITNESS" : character.archetype === "resister" ? "UNCOOPERATIVE" : "UNDER WATCH";

  return (
    <div className="fade-in">
      <div className="paper-card">
        <div className={`stamp ${stampColor}`}>{stampText}</div>
        <div className="section-label">Your Assignment — FBI File #MCR-{Math.floor(Math.random() * 9000 + 1000)}</div>
        <div className={`archetype-badge ${character.archetype}`}>{character.archetype}</div>
        <div className="character-name">{character.name}</div>
        <div className="character-meta">
          <span>Age {character.age}</span>
          <span>{character.occupation}</span>
          <span>{character.location}</span>
        </div>
        <Meter label="HUAC Suspicion Level" value={character.loyaltySuspicion} type="suspicion" />
        <Meter label="Personal Integrity" value={character.integrity} type="integrity" />
        <hr className="divider" />
        <div className="section-label">Background</div>
        <p className="character-bio">{character.backstory}</p>
        <hr className="divider" />
        <div className="section-label">Your Situation</div>
        <p className="character-bio" style={{ fontStyle: "italic" }}>{character.archetypeHint}</p>
      </div>
      <div className="fact-box">
        <div className="fact-box-label">Did You Know?</div>
        <p className="fact-box-text">{HISTORICAL_FACTS[Math.floor(Math.random() * HISTORICAL_FACTS.length)]}</p>
      </div>
      <button className="btn-primary" onClick={onBegin}>Enter the Red Scare — Turn 1 of 4</button>
    </div>
  );
}

function ScenarioScreen({ character, scenario, turn, suspicion, integrity, onChoice }) {
  return (
    <div className="fade-in">
      <div className="turn-header">
        <div className="turn-counter">Turn {turn} of 4</div>
        <div className="turn-counter">{character.name} · {character.occupation}</div>
      </div>
      <div className="paper-card">
        <div className="newspaper-hed">{scenario.headline}</div>
        <Meter label="Suspicion Level" value={suspicion} type="suspicion" />
        <Meter label="Integrity" value={integrity} type="integrity" />
        <hr className="divider" />
        <div className="section-label">The Scene</div>
        <p className="scenario-text">{scenario.scene}</p>
        <div className="section-label">Your Situation</div>
        <p className="scenario-text">{scenario.situation}</p>
        <hr className="divider" />
        <div className="choices-label">What do you do?</div>
        {scenario.choices.map((choice) => (
          <button
            key={choice.id}
            className="choice-btn"
            onClick={() => onChoice(choice)}
          >
            <strong>{choice.id}.</strong> {choice.text}
          </button>
        ))}
      </div>
    </div>
  );
}

function OutcomeScreen({ character, outcome, turn, suspicion, integrity, onContinue, isLastTurn }) {
  const fact = useRef(HISTORICAL_FACTS[Math.floor(Math.random() * HISTORICAL_FACTS.length)]).current;
  return (
    <div className="fade-in">
      <div className="paper-card">
        <div className="section-label">The Aftermath — {character.shortName}'s Story Continues</div>
        <div className={`outcome-box ${outcome.tone}`}>
          <p>{outcome.narrative}</p>
        </div>
        <ul className="consequence-list">
          {outcome.consequences.map((c, i) => <li key={i}>{c}</li>)}
        </ul>
        <hr className="divider" />
        <Meter label="Suspicion Level" value={suspicion} type="suspicion" change={outcome.suspicionChange} />
        <Meter label="Integrity" value={integrity} type="integrity" change={outcome.integrityChange} />
      </div>
      <div className="fact-box">
        <div className="fact-box-label">Historical Connection</div>
        <p className="fact-box-text">{outcome.historicalNote}</p>
      </div>
      <button className="btn-primary" onClick={onContinue}>
        {isLastTurn ? "See Your Final Verdict" : `Continue to Turn ${turn + 1}`}
      </button>
    </div>
  );
}

function FinalScreen({ character, summary, onPlayAgain }) {
  const verdictColors = {
    destroyed: "#8b1a1a",
    survived: "#1a5c2a",
    compromised: "#6b4e00",
    heroic: "#1a3a6b",
  };
  const color = verdictColors[summary.verdictType] || "#2a1f0e";

  return (
    <div className="fade-in">
      <div className="paper-card">
        <div className="stamp red">CASE CLOSED</div>
        <div className="section-label">Final Verdict — {character.name}</div>
        <div className="verdict-stamp">
          <span style={{
            fontFamily: "'Special Elite', cursive",
            fontSize: 28, color,
            display: "inline-block",
            border: `3px solid ${color}`,
            padding: "6px 20px",
            transform: "rotate(-2deg)",
          }}>
            {summary.verdictType.toUpperCase()}
          </span>
        </div>
        <p className="final-verdict">{summary.verdict}</p>
        <hr className="divider" />
        <div className="section-label">Epilogue</div>
        <p className="scenario-text">{summary.epilogue}</p>
        <hr className="divider" />
        <div className="section-label">For Reflection</div>
        <p className="scenario-text" style={{ fontStyle: "italic" }}>{summary.reflection}</p>
        <hr className="divider" />
        <div className="section-label">Historical Parallel</div>
        <p className="scenario-text">{summary.historicalParallel}</p>
      </div>
      <div className="fact-box">
        <div className="fact-box-label">Learn More</div>
        <p className="fact-box-text">
          The McCarthyism era destroyed thousands of careers and lives based on little more than accusation and suspicion. Research the Hollywood Ten, Lillian Hellman, Paul Robeson, or Arthur Miller to learn more about real people who faced these choices.
        </p>
      </div>
      <button className="btn-primary" onClick={onPlayAgain}>Play Again — New Character</button>
    </div>
  );
}

// ─── MAIN GAME ────────────────────────────────────────────────────────────────

export default function McCarthyismGame() {
  const [phase, setPhase] = useState("welcome");
  const [character, setCharacter] = useState(null);
  const [scenarios, setScenarios] = useState([]);
  const [currentScenario, setCurrentScenario] = useState(null);
  const [outcome, setOutcome] = useState(null);
  const [summary, setSummary] = useState(null);
  const [turn, setTurn] = useState(1);
  const [suspicion, setSuspicion] = useState(0);
  const [integrity, setIntegrity] = useState(80);
  const [history, setHistory] = useState([]);

  const MAX_TURNS = 4;

  function startGame() {
    const archetype = ARCHETYPES[Math.floor(Math.random() * ARCHETYPES.length)];
    const char = pickRandom(CHARACTERS[archetype]);
    const gameScenarios = shuffleAndTake(SCENARIOS[archetype], MAX_TURNS);

    setCharacter(char);
    setScenarios(gameScenarios);
    setSuspicion(char.loyaltySuspicion);
    setIntegrity(char.integrity);
    setTurn(1);
    setHistory([]);
    setOutcome(null);
    setSummary(null);
    setPhase("character");
  }

  function beginScenarios() {
    setCurrentScenario(personalizeScenario(scenarios[0], character));
    setPhase("scenario");
  }

  function handleChoice(choice) {
    const out = choice.outcome;
    const newSuspicion = Math.min(100, Math.max(0, suspicion + out.suspicionChange));
    const newIntegrity = Math.min(100, Math.max(0, integrity + out.integrityChange));
    setSuspicion(newSuspicion);
    setIntegrity(newIntegrity);
    setHistory([...history, `Turn ${turn}: ${choice.text.substring(0, 60)}...`]);
    setOutcome(out);
    setPhase("outcome");
  }

  function continueGame() {
    const nextTurn = turn + 1;
    if (nextTurn > MAX_TURNS) {
      const verdictType = computeVerdictType(suspicion, integrity);
      const template = pickRandom(VERDICT_TEMPLATES[verdictType]);
      setSummary({ ...template, verdictType });
      setPhase("final");
    } else {
      setTurn(nextTurn);
      setCurrentScenario(personalizeScenario(scenarios[nextTurn - 1], character));
      setPhase("scenario");
    }
  }

  function resetGame() {
    setPhase("welcome");
    setCharacter(null);
    setScenarios([]);
    setCurrentScenario(null);
    setOutcome(null);
    setSummary(null);
    setTurn(1);
    setSuspicion(0);
    setIntegrity(80);
    setHistory([]);
  }

  return (
    <>
      <style>{typewriterCSS}</style>
      <div className="game-root">
        <div className="noise-overlay" />
        <div className="scanlines" />
        <div className="content-wrap">
          <div className="masthead">
            <div className="masthead-eyebrow">Educational Simulation · American History</div>
            <div className="masthead-title">The Red Scare</div>
            <div className="masthead-subtitle">A McCarthyism Experience · 1950–1956</div>
          </div>

          {phase === "welcome" && <WelcomeScreen onStart={startGame} />}

          {phase === "character" && character && (
            <CharacterScreen character={character} onBegin={beginScenarios} />
          )}

          {phase === "scenario" && currentScenario && (
            <ScenarioScreen
              character={character}
              scenario={currentScenario}
              turn={turn}
              suspicion={suspicion}
              integrity={integrity}
              onChoice={handleChoice}
            />
          )}

          {phase === "outcome" && outcome && (
            <OutcomeScreen
              character={character}
              outcome={outcome}
              turn={turn}
              suspicion={suspicion}
              integrity={integrity}
              onContinue={continueGame}
              isLastTurn={turn >= MAX_TURNS}
            />
          )}

          {phase === "final" && summary && (
            <FinalScreen character={character} summary={summary} onPlayAgain={resetGame} />
          )}
        </div>
      </div>
    </>
  );
}
