// ─── PRE-WRITTEN GAME CONTENT ──────────────────────────────────────────────
// All characters, scenarios, outcomes, and verdicts are self-contained.
// No API calls needed — everything runs locally in the browser.

export const CHARACTERS = {
  informer: [
    {
      name: "Robert Kessler",
      age: 38,
      occupation: "Screenwriter",
      location: "Hollywood, California",
      backstory:
        "Robert wrote three successful comedies for Paramount in the late 1940s. In college at NYU, he attended a handful of Communist Party meetings out of intellectual curiosity — something he barely remembers. Now a colleague has named him in testimony before HUAC, and the studio has quietly stopped returning his calls.",
      loyaltySuspicion: 30,
      integrity: 70,
      archetype: "informer",
      archetypeHint:
        "You know the names of people who attended those meetings with you. Sharing them could save your career — but destroy theirs.",
    },
    {
      name: "Margaret Doyle",
      age: 34,
      occupation: "High School English Teacher",
      location: "Passaic, New Jersey",
      backstory:
        "Peggy joined the teachers' union in 1946 because they fought for better pay. The union is now listed as a Communist front organization. She has two young children and a husband who works at the shipyard. The school board is under pressure to identify 'disloyal' teachers.",
      loyaltySuspicion: 25,
      integrity: 75,
      archetype: "informer",
      archetypeHint:
        "Your principal has hinted that if you can name other union members who held 'radical views,' your job will be safe.",
    },
    {
      name: "Arthur Brennan",
      age: 45,
      occupation: "Radio Producer",
      location: "New York, New York",
      backstory:
        "Arthur produced some of the most popular radio dramas of the 1940s. He hired talented actors and writers without asking about their politics. Now two of his former writers are on the blacklist, and FBI agents have started visiting his office, asking questions about his hiring decisions.",
      loyaltySuspicion: 35,
      integrity: 65,
      archetype: "informer",
      archetypeHint:
        "The FBI has made it clear: cooperate and name the 'subversives' you hired, or watch your network cancel every one of your shows.",
    },
  ],
  resister: [
    {
      name: "Eleanor Marsh",
      age: 42,
      occupation: "Stage Actress",
      location: "New York, New York",
      backstory:
        "Eleanor was briefly a member of the Communist Party in the 1930s, drawn by its stance against fascism during the Spanish Civil War. She left the party in 1939. She has performed on Broadway for two decades and believes the First Amendment protects her right to her past beliefs.",
      loyaltySuspicion: 35,
      integrity: 90,
      archetype: "resister",
      archetypeHint:
        "You believe that testifying — even to clear your own name — legitimizes a process that violates the Constitution.",
    },
    {
      name: "Samuel Washington",
      age: 36,
      occupation: "Newspaper Reporter",
      location: "Chicago, Illinois",
      backstory:
        "Sam is a Black journalist who has covered civil rights and labor organizing for the Chicago Defender. HUAC considers civil rights activism suspiciously close to Communist influence. His editor is under pressure from advertisers to distance the paper from 'controversial' reporters.",
      loyaltySuspicion: 30,
      integrity: 85,
      archetype: "resister",
      archetypeHint:
        "You have seen how accusations destroy lives. You refuse to participate in a system that punishes people for their beliefs.",
    },
    {
      name: "Dr. Helen Novak",
      age: 50,
      occupation: "Physics Professor",
      location: "Berkeley, California",
      backstory:
        "Helen signed a petition against nuclear weapons testing in 1950, alongside dozens of her colleagues. The University of California now requires a loyalty oath from all faculty. Several professors who refused have already been fired. Helen has spent 22 years building her research program.",
      loyaltySuspicion: 25,
      integrity: 95,
      archetype: "resister",
      archetypeHint:
        "You believe that signing a loyalty oath under coercion betrays the academic freedom that makes science possible.",
    },
  ],
  bystander: [
    {
      name: "Frank Moretti",
      age: 29,
      occupation: "Postal Worker",
      location: "Pittsburgh, Pennsylvania",
      backstory:
        "Frank is a quiet man who served in the Army during the war and now sorts mail at the downtown post office. His brother-in-law, Tony, was just arrested for distributing Communist pamphlets. Frank has never been political, but as a federal employee, he is now under scrutiny by association.",
      loyaltySuspicion: 15,
      integrity: 80,
      archetype: "bystander",
      archetypeHint:
        "You just want to do your job and raise your family, but your brother-in-law's arrest has put a target on your back.",
    },
    {
      name: "Dorothy Chen",
      age: 33,
      occupation: "Public Librarian",
      location: "Los Angeles, California",
      backstory:
        "Dorothy runs the circulation desk at the Los Angeles Public Library. The city council has demanded the removal of books by authors suspected of Communist sympathies. Dorothy is not political, but she studied library science because she believes in free access to information.",
      loyaltySuspicion: 10,
      integrity: 85,
      archetype: "bystander",
      archetypeHint:
        "You never expected your job shelving books to become a political minefield, but the Red Scare has reached your quiet corner of the world.",
    },
    {
      name: "James Kowalski",
      age: 41,
      occupation: "Factory Foreman",
      location: "Detroit, Michigan",
      backstory:
        "Jimmy has worked at the Ford assembly plant for eighteen years and recently made foreman. His union, the UAW, is under investigation by HUAC. He has never attended a political meeting in his life, but some of his best workers are union activists now being called 'subversives.'",
      loyaltySuspicion: 10,
      integrity: 75,
      archetype: "bystander",
      archetypeHint:
        "Management wants you to identify union 'troublemakers.' You just want to build cars and go home to your family.",
    },
  ],
};

// ─── SCENARIOS ──────────────────────────────────────────────────────────────
// 6 per archetype. Each playthrough randomly picks 4.
// Outcomes are embedded in each choice so no API is needed.

export const SCENARIOS = {
  informer: [
    {
      headline: "HUAC Subpoena Arrives at Your Door",
      scene:
        "A man in a gray suit hands you an envelope on your front porch. Your neighbors watch from behind their curtains. Inside is a subpoena to appear before the House Un-American Activities Committee in Washington.",
      situation:
        "The committee wants you to testify about people you knew at political meetings years ago. Your lawyer says cooperation is your safest path. But cooperation means giving names — names of people who could lose everything.",
      choices: [
        {
          id: "A",
          text: "Cooperate fully with the committee. Provide the names they want to hear and denounce your past associations.",
          alignment: "cooperative",
          riskLevel: "low",
          outcome: {
            narrative:
              "You sit before the committee under bright lights and read a prepared statement denouncing communism. Then you give them three names. The committee chairman thanks you for your patriotism. As you leave the hearing room, you feel the weight of what you have done settle over you like a fog.",
            consequences: [
              "HUAC marks you as a 'friendly witness'",
              "Three former associates are now under investigation",
              "Your immediate career prospects improve",
            ],
            suspicionChange: -15,
            integrityChange: -20,
            tone: "negative",
            historicalNote:
              "Director Elia Kazan named eight former colleagues before HUAC in 1952, a decision that divided Hollywood and haunted him for the rest of his life.",
          },
        },
        {
          id: "B",
          text: "Invoke the Fifth Amendment and refuse to answer questions about other people.",
          alignment: "defiant",
          riskLevel: "high",
          outcome: {
            narrative:
              "You sit rigidly in the witness chair and repeat the same phrase: 'I respectfully decline to answer on the grounds that it may incriminate me.' The committee members exchange knowing looks. The phrase 'Fifth Amendment Communist' will follow you home.",
            consequences: [
              "The committee holds you in contempt",
              "Your employer receives a call from Washington within hours",
              "Your name appears in the next morning's newspapers",
            ],
            suspicionChange: 20,
            integrityChange: 5,
            tone: "negative",
            historicalNote:
              "Invoking the Fifth Amendment was legal, but the public often treated it as an admission of guilt. Senator McCarthy coined the term 'Fifth Amendment Communist' to smear those who used this constitutional right.",
          },
        },
        {
          id: "C",
          text: "Testify about your own past but firmly refuse to discuss anyone else. 'I will not be an informer.'",
          alignment: "neutral",
          riskLevel: "medium",
          outcome: {
            narrative:
              "You acknowledge your own brief involvement but draw a hard line when they ask about others. 'I am not going to name names,' you say. The committee is not satisfied, but your willingness to discuss yourself buys you some goodwill — for now.",
            consequences: [
              "The committee pressures your employer to fire you",
              "Some colleagues quietly respect your stance",
              "You remain under active investigation",
            ],
            suspicionChange: 10,
            integrityChange: -5,
            tone: "neutral",
            historicalNote:
              "Playwright Lillian Hellman wrote to HUAC: 'I cannot and will not cut my conscience to fit this year's fashions.' She testified about herself but refused to name others.",
          },
        },
      ],
    },
    {
      headline: "Boss Demands You Prove Your Loyalty",
      scene:
        "Your supervisor calls you into a closed-door meeting. On the desk is a list of employees who belong to the union. He slides it toward you with a pen.",
      situation:
        "The company is cooperating with an FBI investigation. Your boss wants you to circle the names of anyone you know who has 'radical sympathies.' He reminds you that your own position is not guaranteed.",
      choices: [
        {
          id: "A",
          text: "Circle several names — people you have heard express left-leaning opinions at lunch or union meetings.",
          alignment: "cooperative",
          riskLevel: "low",
          outcome: {
            narrative:
              "You circle five names with a trembling hand. Your boss nods approvingly and locks the list in his desk. Within two weeks, three of those people are called into HR and told their services are no longer needed. One of them, a single mother, stops you in the parking lot with tears in her eyes.",
            consequences: [
              "Three coworkers lose their jobs based on your identifications",
              "Your position at the company is secured",
              "Word quietly spreads about what you did",
            ],
            suspicionChange: -10,
            integrityChange: -18,
            tone: "negative",
            historicalNote:
              "Thousands of Americans lost their jobs during the Red Scare not because of any illegal activity, but because a coworker or acquaintance identified them as having 'sympathies.'",
          },
        },
        {
          id: "B",
          text: "Refuse to circle any names. Tell your boss this feels like a witch hunt.",
          alignment: "defiant",
          riskLevel: "high",
          outcome: {
            narrative:
              "Your boss stares at you for a long moment, then takes back the list. 'I see,' he says coldly. The next week, your assignments dry up. You hear from a friend in accounting that your name has been added to a different kind of list.",
            consequences: [
              "Your boss reports your refusal to cooperate",
              "You are moved to less desirable assignments",
              "The FBI adds a note to your file",
            ],
            suspicionChange: 15,
            integrityChange: 8,
            tone: "neutral",
            historicalNote:
              "Many companies maintained their own internal blacklists during the 1950s, firing or demoting employees who refused to participate in loyalty screenings.",
          },
        },
        {
          id: "C",
          text: "Tell your boss you honestly don't know anyone's political beliefs and cannot help.",
          alignment: "neutral",
          riskLevel: "medium",
          outcome: {
            narrative:
              "You play ignorant, claiming you never discuss politics at work. Your boss seems skeptical but accepts your answer — for now. You leave the meeting knowing you have only delayed the inevitable. The list is still in his desk.",
            consequences: [
              "Your boss remains suspicious of your loyalty",
              "You avoid directly harming anyone — this time",
              "The pressure to cooperate will return",
            ],
            suspicionChange: 5,
            integrityChange: -3,
            tone: "neutral",
            historicalNote:
              "Playing ignorant was a common survival strategy during the Red Scare, but it often only postponed the moment of reckoning rather than preventing it.",
          },
        },
      ],
    },
    {
      headline: "FBI Agents Ask About an Old Friend",
      scene:
        "Two FBI agents arrive at your home on a Saturday morning. They show their badges and ask to come inside. Your spouse watches nervously from the kitchen doorway.",
      situation:
        "The agents want to know about your college friend, David, who you have not spoken to in years. They say David is under investigation. They hint that your own 'situation' could improve if you help them build their case.",
      choices: [
        {
          id: "A",
          text: "Tell them everything you remember about David — meetings he attended, things he said, people he knew.",
          alignment: "cooperative",
          riskLevel: "low",
          outcome: {
            narrative:
              "You spend an hour telling the agents about David's college activities. They write everything down in small notebooks, asking follow-up questions. When they leave, they shake your hand warmly. You close the door and realize you may have just helped send an old friend to prison.",
            consequences: [
              "The FBI uses your testimony to build a case against David",
              "Agents note you as cooperative in their files",
              "Your spouse asks if David will be alright — you cannot answer",
            ],
            suspicionChange: -12,
            integrityChange: -15,
            tone: "negative",
            historicalNote:
              "FBI Director J. Edgar Hoover relied heavily on personal testimonies to build cases. Many friendships were destroyed when people learned that old acquaintances had informed on them.",
          },
        },
        {
          id: "B",
          text: "Tell the agents you will not discuss another person behind their back and ask them to leave your home.",
          alignment: "defiant",
          riskLevel: "high",
          outcome: {
            narrative:
              "The agents exchange a glance. One of them says, 'We were hoping you would be more helpful.' They leave without another word, but you notice a black car parked across the street for the rest of the week. Your mail starts arriving already opened.",
            consequences: [
              "The FBI begins surveillance of your household",
              "Your mail is monitored",
              "You are flagged as potentially uncooperative",
            ],
            suspicionChange: 18,
            integrityChange: 8,
            tone: "negative",
            historicalNote:
              "The FBI under Hoover routinely surveilled, wiretapped, and opened the mail of citizens who refused to cooperate with investigations — often without warrants.",
          },
        },
        {
          id: "C",
          text: "Share only vague, unhelpful information. Claim your memory of David is poor.",
          alignment: "neutral",
          riskLevel: "medium",
          outcome: {
            narrative:
              "You offer the agents nothing useful — vague dates, uncertain recollections, hazy memories. They press you, but you maintain that you simply cannot remember. They leave frustrated. You know they may come back.",
            consequences: [
              "The agents are dissatisfied but have nothing to act on",
              "You avoid directly harming David",
              "The FBI may return with more pointed questions",
            ],
            suspicionChange: 5,
            integrityChange: -2,
            tone: "neutral",
            historicalNote:
              "Some witnesses gave deliberately unhelpful testimony as a middle ground — technically cooperating without providing actionable information. This strategy carried its own risks.",
          },
        },
      ],
    },
    {
      headline: "The Studio Offers You a Way Back In",
      scene:
        "A studio executive invites you to lunch at a quiet restaurant in Beverly Hills. He orders for both of you without asking. Over steak, he gets to the point.",
      situation:
        "The executive says the studio wants to hire you back — you are talented and they need you. But first, you must publish a public statement in the trade papers denouncing communism and naming anyone you knew who was involved. 'Think of it as a cleansing,' he says.",
      choices: [
        {
          id: "A",
          text: "Agree to write the public statement. Name four people you knew from political gatherings years ago.",
          alignment: "cooperative",
          riskLevel: "medium",
          outcome: {
            narrative:
              "Your statement runs in Variety and The Hollywood Reporter. You call yourself a 'dupe' who was 'misled by Communist propaganda.' The four people you named are immediately blacklisted. One of them — a set designer with three kids — calls you at home, sobbing. The studio gives you a two-picture deal.",
            consequences: [
              "Four people are added to the Hollywood blacklist",
              "You receive a lucrative new contract",
              "The guilt manifests as insomnia and drinking",
            ],
            suspicionChange: -15,
            integrityChange: -20,
            tone: "negative",
            historicalNote:
              "Screenwriter Budd Schulberg named fifteen former associates in his HUAC testimony. He continued working in Hollywood while those he named could not find employment for years.",
          },
        },
        {
          id: "B",
          text: "Refuse the deal. Tell the executive you will not build your comeback on other people's ruin.",
          alignment: "defiant",
          riskLevel: "high",
          outcome: {
            narrative:
              "The executive shakes his head slowly. 'You're making a mistake,' he says. You walk out of the restaurant into blinding sunlight. Within a month, every studio in town knows you are 'difficult.' Your agent drops you. You start looking for work outside the industry.",
            consequences: [
              "You are effectively blacklisted from Hollywood",
              "Your income drops dramatically",
              "A small circle of fellow resisters respects your decision",
            ],
            suspicionChange: 15,
            integrityChange: 10,
            tone: "neutral",
            historicalNote:
              "Screenwriter Dalton Trumbo, one of the Hollywood Ten, was blacklisted and imprisoned. He survived by writing under pseudonyms for a fraction of his former pay.",
          },
        },
        {
          id: "C",
          text: "Ask if you can write the statement denouncing communism but without naming specific people.",
          alignment: "neutral",
          riskLevel: "medium",
          outcome: {
            narrative:
              "The executive considers your proposal and makes some calls. He comes back with a compromise: you can write a general denunciation, but you must meet privately with a HUAC investigator and answer questions 'off the record.' You suspect nothing said to HUAC is truly off the record.",
            consequences: [
              "You publish a watered-down denunciation",
              "A private HUAC meeting is scheduled",
              "Your return to work is delayed and uncertain",
            ],
            suspicionChange: 0,
            integrityChange: -8,
            tone: "neutral",
            historicalNote:
              "Some actors and writers tried to find middle ground by denouncing communism in general while refusing to name individuals. This strategy rarely satisfied the committees.",
          },
        },
      ],
    },
    {
      headline: "Your Neighbor Asks a Dangerous Question",
      scene:
        "At a block party, your neighbor Bill pulls you aside near the garage. He keeps his voice low. He says his son's teacher is rumored to be 'one of them' and asks if you have heard anything.",
      situation:
        "You happen to know that the teacher, Mrs. Alvarez, attended a civil rights meeting last year. Bill is the type who would call the school board — or worse, the FBI. What you say next could determine her fate.",
      choices: [
        {
          id: "A",
          text: "Tell Bill what you know about the meeting. It might protect your own reputation to appear vigilant.",
          alignment: "cooperative",
          riskLevel: "low",
          outcome: {
            narrative:
              "Bill nods gravely and thanks you for 'looking out for the community.' Three days later, Mrs. Alvarez is suspended pending an investigation. Her students make cards asking her to come back. She never does.",
            consequences: [
              "Mrs. Alvarez loses her teaching position",
              "You are seen as a reliable, patriotic neighbor",
              "You avoid any suspicion falling on yourself",
            ],
            suspicionChange: -8,
            integrityChange: -15,
            tone: "negative",
            historicalNote:
              "Teachers were particularly vulnerable during the Red Scare. In New York City alone, over 300 public school teachers were fired or forced to resign between 1950 and 1953.",
          },
        },
        {
          id: "B",
          text: "Tell Bill to mind his own business. Accusing teachers based on rumors is dangerous.",
          alignment: "defiant",
          riskLevel: "medium",
          outcome: {
            narrative:
              "Bill steps back, startled by your sharpness. 'I thought you were a patriot,' he mutters. After that, Bill stops waving at you from across the street. You notice him watching your house more carefully. You wonder what he is writing down.",
            consequences: [
              "Bill becomes suspicious of you",
              "Mrs. Alvarez keeps her job — for now",
              "Your relationship with your neighbors grows tense",
            ],
            suspicionChange: 10,
            integrityChange: 5,
            tone: "neutral",
            historicalNote:
              "Neighborhood informants were a key part of the surveillance culture of the 1950s. The FBI actively encouraged citizens to report 'suspicious' behavior by their neighbors.",
          },
        },
        {
          id: "C",
          text: "Say you have not heard anything and change the subject back to the block party.",
          alignment: "neutral",
          riskLevel: "low",
          outcome: {
            narrative:
              "You shrug and steer the conversation toward the potato salad. Bill seems unsatisfied but lets it drop. You go home feeling uneasy. Mrs. Alvarez is safe for now, but you know Bill will keep asking around until he finds someone willing to talk.",
            consequences: [
              "Mrs. Alvarez remains safe for the moment",
              "Bill continues his informal investigation",
              "You avoid involvement but feel the moral tension",
            ],
            suspicionChange: 2,
            integrityChange: -2,
            tone: "neutral",
            historicalNote:
              "The culture of suspicion extended into every neighborhood. Ordinary Americans faced daily choices about whether to report, ignore, or protect their neighbors.",
          },
        },
      ],
    },
    {
      headline: "Union Meeting Minutes Could Save You",
      scene:
        "You find a box of old union meeting minutes in your basement. The handwritten pages contain names, dates, and notes about political discussions from years ago.",
      situation:
        "An FBI investigator has been pressing you for 'evidence' of Communist activity in your former union. These minutes could be exactly what he wants. Handing them over would prove your cooperation — but the names in those pages belong to real people with families.",
      choices: [
        {
          id: "A",
          text: "Turn the minutes over to the FBI investigator. This is your ticket to safety.",
          alignment: "cooperative",
          riskLevel: "low",
          outcome: {
            narrative:
              "The investigator leafs through the pages with barely contained excitement. 'This is very helpful,' he says. Over the following months, six people named in those minutes receive subpoenas. Two lose their jobs. You receive a letter from the FBI thanking you for your 'service to the nation.'",
            consequences: [
              "Six former union members are subpoenaed",
              "The FBI considers your case resolved",
              "You carry the knowledge of what those pages caused",
            ],
            suspicionChange: -18,
            integrityChange: -20,
            tone: "negative",
            historicalNote:
              "Union membership lists and meeting records were prized by investigators. The Taft-Hartley Act of 1947 required union leaders to sign affidavits swearing they were not Communists.",
          },
        },
        {
          id: "B",
          text: "Burn the minutes in your backyard that night. Those names will never reach the FBI.",
          alignment: "defiant",
          riskLevel: "high",
          outcome: {
            narrative:
              "You watch the pages curl and blacken in the firepit behind your house. The names dissolve into ash. You feel a weight lift, but a new fear settles in — what if someone saw? What if the investigator finds out you destroyed potential evidence?",
            consequences: [
              "The evidence is permanently destroyed",
              "You risk obstruction charges if discovered",
              "The people named in those minutes are protected",
            ],
            suspicionChange: 8,
            integrityChange: 10,
            tone: "neutral",
            historicalNote:
              "Some Americans quietly destroyed documents, letters, and membership cards to protect themselves and others from investigation. This act of defiance carried serious legal risks.",
          },
        },
        {
          id: "C",
          text: "Hide the minutes somewhere safe. You are not ready to hand them over or destroy them.",
          alignment: "neutral",
          riskLevel: "medium",
          outcome: {
            narrative:
              "You wrap the box in a blanket and hide it in the attic crawl space. The investigator calls again the following week, asking if you have found 'anything useful.' You say no. The box sits above your head every night like a ticking clock.",
            consequences: [
              "The evidence remains hidden but intact",
              "The FBI continues to press you for information",
              "You live with the anxiety of a secret that could surface",
            ],
            suspicionChange: 5,
            integrityChange: -5,
            tone: "neutral",
            historicalNote:
              "Living with hidden secrets was psychologically devastating for many during the McCarthy era. The constant fear of discovery took a lasting toll on mental health.",
          },
        },
      ],
    },
  ],
  resister: [
    {
      headline: "The Committee Demands Your Testimony",
      scene:
        "The hearing room is small and overheated. Camera bulbs flash. Behind a long table, the committee members shuffle papers with your name on them. Your lawyer sits beside you, visibly nervous.",
      situation:
        "The committee chairman asks you directly: 'Are you now, or have you ever been, a member of the Communist Party?' Your answer will be printed in every newspaper in the country by tomorrow morning.",
      choices: [
        {
          id: "A",
          text: "Answer honestly that you were once a member but left years ago. Refuse to discuss anyone else.",
          alignment: "neutral",
          riskLevel: "medium",
          outcome: {
            narrative:
              "You speak clearly into the microphone: 'I was a member. I am not ashamed of it. But I will not discuss anyone but myself.' The committee presses harder, but you hold your ground. The newspapers call you 'defiant but forthcoming.'",
            consequences: [
              "Your honesty is noted but does not satisfy the committee",
              "You avoid contempt charges — barely",
              "Your employer faces pressure to dismiss you",
            ],
            suspicionChange: 10,
            integrityChange: 3,
            tone: "neutral",
            historicalNote:
              "Playwright Arthur Miller testified before HUAC in 1956, discussing his own past but refusing to name others. He was convicted of contempt of Congress, though the conviction was later overturned.",
          },
        },
        {
          id: "B",
          text: "Invoke the First Amendment. Tell the committee they have no right to ask about your beliefs.",
          alignment: "defiant",
          riskLevel: "high",
          outcome: {
            narrative:
              "You lean into the microphone and say: 'The First Amendment protects my right to believe whatever I choose. This committee has no authority to investigate my thoughts.' The room erupts. The chairman bangs his gavel and threatens you with contempt of Congress.",
            consequences: [
              "You face contempt of Congress charges",
              "Your statement is quoted in newspapers nationwide",
              "Civil liberties organizations rally to your defense",
            ],
            suspicionChange: 25,
            integrityChange: 10,
            tone: "negative",
            historicalNote:
              "The Hollywood Ten invoked the First Amendment rather than the Fifth. All ten were found guilty of contempt of Congress and sentenced to prison terms of six months to one year.",
          },
        },
        {
          id: "C",
          text: "Read a prepared statement criticizing the committee, then walk out of the hearing.",
          alignment: "defiant",
          riskLevel: "high",
          outcome: {
            narrative:
              "You unfold a typed page and begin reading: 'This committee represents everything the founders of this nation warned us about.' Before you finish, the chairman orders the microphone cut. You stand, fold your statement, and walk out while cameras flash. It is the last time many doors will open for you.",
            consequences: [
              "You are cited for contempt of Congress",
              "Your dramatic exit becomes a symbol of resistance",
              "Your career in your field is effectively over",
            ],
            suspicionChange: 25,
            integrityChange: 10,
            tone: "negative",
            historicalNote:
              "Writer Ring Lardner Jr. told HUAC: 'I could answer the way you want, but I would hate myself in the morning.' He was blacklisted and imprisoned for contempt.",
          },
        },
      ],
    },
    {
      headline: "Your University Demands a Loyalty Oath",
      scene:
        "A memo arrives in your faculty mailbox. All professors must sign a loyalty oath swearing they are not now and have never been members of the Communist Party. Those who refuse will be terminated.",
      situation:
        "You have 30 days to sign. Several colleagues have already signed, calling it a 'meaningless formality.' Others are organizing a protest. Your tenure, your research, and your students all hang in the balance.",
      choices: [
        {
          id: "A",
          text: "Refuse to sign on principle and join the faculty protest.",
          alignment: "defiant",
          riskLevel: "high",
          outcome: {
            narrative:
              "You join thirty-one other faculty members in refusing the oath. The university fires all of you within the month. Your lab is locked. Your graduate students are reassigned. Twenty years of research sits behind a door you can no longer open.",
            consequences: [
              "You are terminated from the university",
              "Your research program is dismantled",
              "You become part of a landmark academic freedom case",
            ],
            suspicionChange: 20,
            integrityChange: 10,
            tone: "negative",
            historicalNote:
              "In 1950, the University of California fired 31 faculty members who refused to sign a loyalty oath. The California Supreme Court later ruled the oath unconstitutional, but many of the fired professors never returned.",
          },
        },
        {
          id: "B",
          text: "Sign the oath under protest, adding a written statement that you consider it unconstitutional.",
          alignment: "neutral",
          riskLevel: "medium",
          outcome: {
            narrative:
              "You sign the oath but attach a statement calling it 'a violation of academic freedom.' The administration accepts your signature and ignores your statement. Your colleagues who refused are fired. You keep your job but feel the compromise like a splinter under your skin.",
            consequences: [
              "You keep your position",
              "Your protest statement has no practical effect",
              "Some colleagues view your signing as a betrayal",
            ],
            suspicionChange: -5,
            integrityChange: -10,
            tone: "neutral",
            historicalNote:
              "Many faculty members signed loyalty oaths while privately disagreeing, reasoning that they could do more good by staying in their positions than by sacrificing their careers on principle.",
          },
        },
        {
          id: "C",
          text: "Resign quietly before the deadline. Leave on your own terms rather than submit or be fired.",
          alignment: "defiant",
          riskLevel: "medium",
          outcome: {
            narrative:
              "You clean out your office on a Sunday when the halls are empty. You leave your key with the department secretary and a note for your students. The local paper runs a small story. A colleague at a less prominent university offers you a visiting position at half your former salary.",
            consequences: [
              "You leave with your integrity intact",
              "Your career takes a significant step backward",
              "You avoid the public spectacle of firing or hearings",
            ],
            suspicionChange: 5,
            integrityChange: 5,
            tone: "neutral",
            historicalNote:
              "Some academics quietly relocated to smaller institutions or left the country entirely rather than face loyalty oaths. Many ended up in Mexico, England, or Canada.",
          },
        },
      ],
    },
    {
      headline: "A Blacklisted Friend Asks for Help",
      scene:
        "Late one evening, there is a quiet knock on your door. It is your friend Richard, an actor who was blacklisted six months ago. He looks thin and exhausted. He asks if he can stay for a few days.",
      situation:
        "Harboring someone on the blacklist could draw FBI attention to your home. Richard has been sleeping in his car. He has no money and no prospects. Your neighbors have already noticed the strange car parked on your street.",
      choices: [
        {
          id: "A",
          text: "Take Richard in without hesitation. He is your friend and he needs help.",
          alignment: "defiant",
          riskLevel: "high",
          outcome: {
            narrative:
              "You make up the sofa and heat a can of soup. Richard eats in silence, then breaks down crying. He stays for two weeks. A neighbor mentions to the mailman that you have a 'visitor.' Within days, an unfamiliar car begins parking across the street.",
            consequences: [
              "Richard has shelter and food while he regroups",
              "FBI surveillance of your home increases",
              "Your neighbors begin to whisper",
            ],
            suspicionChange: 15,
            integrityChange: 8,
            tone: "neutral",
            historicalNote:
              "Many blacklisted artists survived only through the secret generosity of friends who risked their own reputations to provide food, money, and shelter.",
          },
        },
        {
          id: "B",
          text: "Help Richard discreetly — give him money and the name of a safe place to stay, but he cannot stay here.",
          alignment: "neutral",
          riskLevel: "medium",
          outcome: {
            narrative:
              "You press forty dollars into Richard's hand and give him the address of a boarding house run by a sympathetic widow. He thanks you with tears in his eyes and disappears into the night. You lock the door and wonder if forty dollars is enough to ease your conscience.",
            consequences: [
              "Richard has temporary resources",
              "You maintain distance from direct association",
              "You help without fully committing to the risk",
            ],
            suspicionChange: 3,
            integrityChange: 0,
            tone: "neutral",
            historicalNote:
              "Underground networks of sympathizers quietly funneled money and resources to blacklisted individuals. These acts of solidarity were small but meaningful.",
          },
        },
        {
          id: "C",
          text: "Tell Richard you are sorry but you cannot risk it. You have your own family to protect.",
          alignment: "cooperative",
          riskLevel: "low",
          outcome: {
            narrative:
              "Richard nods slowly. He does not look surprised — just tired. 'I understand,' he says, though his voice says otherwise. He walks back to his car. You watch his taillights disappear down the street and close the door. You feel safe. You do not feel good.",
            consequences: [
              "Richard is turned away and remains homeless",
              "Your household stays off the FBI radar",
              "The friendship is effectively over",
            ],
            suspicionChange: -5,
            integrityChange: -12,
            tone: "negative",
            historicalNote:
              "The blacklist was designed to isolate its targets socially as well as professionally. Many blacklisted individuals found that former friends were too afraid to help them.",
          },
        },
      ],
    },
    {
      headline: "Your Lawyer Says to Cooperate",
      scene:
        "Your attorney meets you in a dimly lit diner. He orders coffee and speaks in a low voice. He has been talking to the committee's counsel.",
      situation:
        "Your lawyer says the committee will accept a closed-door session if you provide just two or three names — people who are already known to the FBI. 'They just want it on the record,' he says. 'No one will be hurt.' You are not sure you believe that.",
      choices: [
        {
          id: "A",
          text: "Reject your lawyer's advice. You will not name names, even in a closed session.",
          alignment: "defiant",
          riskLevel: "high",
          outcome: {
            narrative:
              "Your lawyer shakes his head and says he cannot protect you from what comes next. You tell him you understand. Over the following weeks, the committee issues a public subpoena. Your name is on the front page. Your resolve is tested daily, but it holds.",
            consequences: [
              "You face a public hearing without legal cover",
              "Your stance becomes widely known",
              "Legal fees mount with no resolution in sight",
            ],
            suspicionChange: 20,
            integrityChange: 10,
            tone: "negative",
            historicalNote:
              "Many witnesses who refused to cooperate found that their lawyers could do little to protect them. Some attorneys were themselves investigated for representing 'subversives.'",
          },
        },
        {
          id: "B",
          text: "Consider the offer. Ask your lawyer to confirm that the names are truly already known and that no additional harm will come to them.",
          alignment: "neutral",
          riskLevel: "medium",
          outcome: {
            narrative:
              "Your lawyer makes inquiries and reports back: the people are indeed already under investigation. But you know that an additional name on the record adds weight to a case. 'Already known' does not mean 'already safe.' You agonize over the decision for days.",
            consequences: [
              "You remain undecided, buying time",
              "The committee grows impatient",
              "The moral weight of the decision keeps you awake at night",
            ],
            suspicionChange: 5,
            integrityChange: -5,
            tone: "neutral",
            historicalNote:
              "The argument that naming 'already known' individuals caused no harm was common but misleading. Each additional witness who named someone strengthened the case against them.",
          },
        },
        {
          id: "C",
          text: "Fire your lawyer and represent yourself. You do not want anyone negotiating away your principles.",
          alignment: "defiant",
          riskLevel: "high",
          outcome: {
            narrative:
              "Your lawyer looks stunned when you dismiss him. You walk out of the diner alone. Representing yourself before HUAC is a bold move that the press calls either 'courageous' or 'foolish,' depending on the paper. You spend nights in the library studying constitutional law.",
            consequences: [
              "You have no legal representation before the committee",
              "Your self-representation attracts media attention",
              "You are fully exposed to the committee's pressure tactics",
            ],
            suspicionChange: 15,
            integrityChange: 8,
            tone: "neutral",
            historicalNote:
              "Paul Robeson represented himself before HUAC in 1956, delivering one of the most famous confrontations in the committee's history. His passport was revoked, effectively ending his international career.",
          },
        },
      ],
    },
    {
      headline: "The Newspaper Prints Your Name",
      scene:
        "You open the morning paper and see your name in a list of 'suspected subversives' published alongside a HUAC press release. Your phone begins to ring. It does not stop all day.",
      situation:
        "Reporters want a comment. Your employer wants an explanation. Your mother is crying. A sympathetic journalist offers to write a profile that would let you 'tell your side' — but any public statement could be used against you.",
      choices: [
        {
          id: "A",
          text: "Give the sympathetic journalist an interview. Speak publicly about your beliefs and the injustice of the committee.",
          alignment: "defiant",
          riskLevel: "high",
          outcome: {
            narrative:
              "The profile runs on Sunday with a photograph of you at your desk. You speak eloquently about constitutional rights and the danger of political persecution. Half the letters to the editor call you a hero. The other half call you a traitor. The FBI clips the article for your file.",
            consequences: [
              "Your public stance inspires some and angers others",
              "The FBI adds the interview to your growing file",
              "Your employer faces increased pressure to let you go",
            ],
            suspicionChange: 15,
            integrityChange: 8,
            tone: "neutral",
            historicalNote:
              "Journalist Edward R. Murrow risked his career to challenge McCarthy on television in 1954. His broadcasts helped turn public opinion, but he faced intense professional pressure.",
          },
        },
        {
          id: "B",
          text: "Refuse all comment. Say nothing to anyone and wait for the storm to pass.",
          alignment: "neutral",
          riskLevel: "medium",
          outcome: {
            narrative:
              "You unplug the phone and draw the curtains. For three days you live in silence. The story fades from the front page, replaced by other names, other accusations. But the damage is done — your name is in the public record now, and silence is often read as guilt.",
            consequences: [
              "The immediate media attention fades",
              "Your silence is interpreted differently by different people",
              "The accusation remains on your permanent record",
            ],
            suspicionChange: 5,
            integrityChange: 0,
            tone: "neutral",
            historicalNote:
              "For many accused individuals, the publication of their name was itself the punishment. Employment, social standing, and personal relationships were damaged regardless of whether formal charges were ever filed.",
          },
        },
        {
          id: "C",
          text: "Issue a brief written statement affirming your loyalty to the United States without addressing specific accusations.",
          alignment: "neutral",
          riskLevel: "low",
          outcome: {
            narrative:
              "You draft a careful three-sentence statement that your lawyer approves. It says you are a loyal American who has never done anything to harm your country. It satisfies no one — not the committee, not the press, and not your own sense of justice.",
            consequences: [
              "Your statement is seen as evasive by both sides",
              "It provides no ammunition but also no vindication",
              "The ambiguity of your position grows",
            ],
            suspicionChange: 3,
            integrityChange: -5,
            tone: "neutral",
            historicalNote:
              "Carefully worded public statements were a common but often ineffective strategy. The committee and the press preferred clear cooperation or dramatic defiance to ambiguity.",
          },
        },
      ],
    },
    {
      headline: "Contempt Charges Loom Over Your Head",
      scene:
        "Your lawyer calls from a payphone. His voice is strained. The committee has voted to refer you for contempt of Congress. You could face a year in federal prison.",
      situation:
        "There is still time to reverse course — if you agree to testify and provide names, the contempt referral will be withdrawn. Your family begs you to reconsider. Your children do not understand why you might go away.",
      choices: [
        {
          id: "A",
          text: "Hold firm. Accept the contempt charges. You will not break your principles even to stay out of prison.",
          alignment: "defiant",
          riskLevel: "high",
          outcome: {
            narrative:
              "You are convicted of contempt of Congress and sentenced to six months in federal prison. Your family visits on Sundays. You read books and write letters. When you emerge, you are thinner and grayer, but you have not given a single name.",
            consequences: [
              "You serve six months in federal prison",
              "Your family endures financial hardship and social stigma",
              "You become a symbol of principled resistance",
            ],
            suspicionChange: 20,
            integrityChange: 10,
            tone: "negative",
            historicalNote:
              "All ten members of the Hollywood Ten served prison sentences for contempt of Congress. Director Edward Dmytryk later cooperated with the committee after his release; the other nine did not.",
          },
        },
        {
          id: "B",
          text: "Waver. Ask your lawyer to negotiate — maybe you can give them something small without betraying anyone important.",
          alignment: "neutral",
          riskLevel: "medium",
          outcome: {
            narrative:
              "Your lawyer enters negotiations. The committee wants at least two names. You spend sleepless nights trying to think of someone — anyone — whose naming would cause the least harm. There is no such person. Every name belongs to someone's parent, someone's friend.",
            consequences: [
              "Negotiations stall as you cannot find a 'harmless' name to give",
              "The contempt referral remains pending",
              "Your resolve is shaken but not broken",
            ],
            suspicionChange: 8,
            integrityChange: -8,
            tone: "neutral",
            historicalNote:
              "The psychological pressure of facing prison led many witnesses to break. Director Edward Dmytryk, initially one of the Hollywood Ten, eventually cooperated and named twenty-six people.",
          },
        },
        {
          id: "C",
          text: "Flee. A friend in Mexico has offered you a place to stay until this madness passes.",
          alignment: "defiant",
          riskLevel: "high",
          outcome: {
            narrative:
              "You pack a single suitcase and drive south in the middle of the night. You cross the border at Tijuana and find your way to a small town where no one knows your name. America feels very far away. You wonder if you will ever go back.",
            consequences: [
              "You become a fugitive from Congress",
              "You are safe from prison but exiled from your life",
              "Your family must decide whether to follow you",
            ],
            suspicionChange: 25,
            integrityChange: 5,
            tone: "negative",
            historicalNote:
              "Several blacklisted Americans fled to Mexico or Europe. Screenwriter Hugo Butler and his family lived in Mexico for years, while actor and singer Paul Robeson had his passport revoked to prevent him from traveling abroad.",
          },
        },
      ],
    },
  ],
  bystander: [
    {
      headline: "Your Coworker Is Accused in the Break Room",
      scene:
        "The break room goes silent when your coworker Ed walks in. Yesterday, the FBI visited the office asking about him. Ed pours his coffee with shaking hands. Everyone avoids his eyes — except your supervisor, who is watching to see who talks to him.",
      situation:
        "Ed has been a good colleague for five years. You have no idea if the accusations are true. Talking to him could mark you as an associate. Ignoring him makes you feel like a coward.",
      choices: [
        {
          id: "A",
          text: "Sit with Ed at lunch like you always do. You will not shun a man based on rumors.",
          alignment: "defiant",
          riskLevel: "medium",
          outcome: {
            narrative:
              "You carry your tray to Ed's table. He looks up, surprised and grateful. You talk about baseball. Your supervisor watches and makes a note. By Friday, you are called in and asked about your 'relationship' with Ed. 'He's my colleague,' you say. 'We eat lunch.'",
            consequences: [
              "Your supervisor notes your association with Ed",
              "Ed feels less alone during his ordeal",
              "You are now on the periphery of the investigation",
            ],
            suspicionChange: 10,
            integrityChange: 5,
            tone: "neutral",
            historicalNote:
              "Guilt by association was a cornerstone of McCarthyism. Simply being friends with an accused person could trigger an investigation into your own background.",
          },
        },
        {
          id: "B",
          text: "Avoid Ed like everyone else. You have a family to think about.",
          alignment: "cooperative",
          riskLevel: "low",
          outcome: {
            narrative:
              "You take your lunch to a different table and do not meet Ed's eyes. You tell yourself it is the smart thing to do. Ed eats alone for the rest of the week. On Friday, he cleans out his desk. He does not say goodbye to anyone.",
            consequences: [
              "Ed is isolated and eventually forced out",
              "You remain safely invisible",
              "The guilt sits in your stomach like a stone",
            ],
            suspicionChange: -5,
            integrityChange: -10,
            tone: "negative",
            historicalNote:
              "Social isolation was one of the most devastating effects of accusation. Many accused individuals reported that the abandonment by friends and colleagues was worse than the formal consequences.",
          },
        },
        {
          id: "C",
          text: "Quietly check in with Ed after work, away from the office where no one is watching.",
          alignment: "neutral",
          riskLevel: "low",
          outcome: {
            narrative:
              "You wait until the parking lot is empty and catch Ed at his car. 'Are you okay?' you ask. Ed's eyes fill with tears. He tells you it is all a misunderstanding. You offer a few words of support but look over your shoulder the whole time.",
            consequences: [
              "Ed appreciates the gesture, however small",
              "You avoid being seen associating with him publicly",
              "You feel the uncomfortable gap between caution and courage",
            ],
            suspicionChange: 2,
            integrityChange: 0,
            tone: "neutral",
            historicalNote:
              "Private acts of kindness sustained many accused individuals when public support was too dangerous. These quiet gestures were rarely recorded by history.",
          },
        },
      ],
    },
    {
      headline: "A Loyalty Petition Circulates at Work",
      scene:
        "A petition appears on the bulletin board in the break room. It calls on the company to 'rid itself of subversive elements' and pledges the signers' loyalty to America. Most of your coworkers have already signed.",
      situation:
        "The petition does not name anyone specifically, but everyone knows it is aimed at the union organizers on the factory floor. Signing feels like joining a mob. Not signing feels like painting a target on your back.",
      choices: [
        {
          id: "A",
          text: "Sign the petition. It is just words on paper, and not signing will cause you more trouble than it is worth.",
          alignment: "cooperative",
          riskLevel: "low",
          outcome: {
            narrative:
              "You add your name to the growing list. It takes three seconds. The rest of the day, you try not to think about what those words will be used to justify. A week later, management uses the petition as evidence of 'employee support' when they fire four union organizers.",
            consequences: [
              "Your signature is used to legitimize the firings",
              "You avoid any suspicion",
              "Four coworkers lose their jobs with your name on the justification",
            ],
            suspicionChange: -8,
            integrityChange: -12,
            tone: "negative",
            historicalNote:
              "Loyalty petitions and pledges were commonly used by employers to create a paper trail of 'voluntary' employee cooperation, which was then used to justify purges.",
          },
        },
        {
          id: "B",
          text: "Refuse to sign and encourage others not to sign either. This is a witch hunt.",
          alignment: "defiant",
          riskLevel: "high",
          outcome: {
            narrative:
              "You tell your coworkers the petition is being used to fire people for their beliefs, not their work. Some nod in agreement but sign anyway. Management hears about your vocal opposition and calls you in for a 'chat about your attitude.'",
            consequences: [
              "You are flagged as a potential troublemaker by management",
              "A few coworkers privately thank you",
              "Your job security decreases significantly",
            ],
            suspicionChange: 15,
            integrityChange: 8,
            tone: "neutral",
            historicalNote:
              "Workers who vocally opposed loyalty measures were often the next targets. The line between defending others and becoming a target yourself was razor-thin.",
          },
        },
        {
          id: "C",
          text: "Simply avoid the bulletin board. Do not sign, but do not make a scene about it either.",
          alignment: "neutral",
          riskLevel: "medium",
          outcome: {
            narrative:
              "You walk past the petition every day, pretending not to notice it. A coworker asks why you have not signed yet. 'I just haven't gotten around to it,' you say. She gives you a look that says she does not believe you.",
            consequences: [
              "Your absence from the petition is eventually noticed",
              "You avoid active participation in either direction",
              "Quiet suspicion builds among some colleagues",
            ],
            suspicionChange: 5,
            integrityChange: -2,
            tone: "neutral",
            historicalNote:
              "Inaction was rarely neutral during the Red Scare. Not signing a loyalty pledge was often interpreted as a political statement in itself.",
          },
        },
      ],
    },
    {
      headline: "The FBI Wants You to Become an Informant",
      scene:
        "An FBI agent meets you at a coffee shop. He is polite, even friendly. He buys you a cup and slides a card across the table with his phone number on it.",
      situation:
        "The agent says they are not interested in you — they want information about your neighbors and coworkers. He says many patriotic Americans help the Bureau this way. All you have to do is report anything 'unusual' you see or hear.",
      choices: [
        {
          id: "A",
          text: "Agree to help. It seems harmless, and having the FBI as a friend seems safer than having them as an enemy.",
          alignment: "cooperative",
          riskLevel: "low",
          outcome: {
            narrative:
              "You take the card and agree to call if you notice anything. Over the next few months, you make a few calls — reporting a neighbor's late-night visitors, a coworker's subscription to a left-leaning magazine. Each call feels smaller than the last. You are becoming someone you do not recognize.",
            consequences: [
              "You become a confidential FBI informant",
              "Your reports affect people who trust you",
              "The FBI considers you an asset and leaves you alone",
            ],
            suspicionChange: -15,
            integrityChange: -18,
            tone: "negative",
            historicalNote:
              "The FBI maintained a vast network of civilian informants during the 1950s. Many ordinary Americans reported on their neighbors, coworkers, and even family members.",
          },
        },
        {
          id: "B",
          text: "Decline firmly. Tell the agent you are not interested in spying on your neighbors.",
          alignment: "defiant",
          riskLevel: "medium",
          outcome: {
            narrative:
              "The agent's friendly demeanor cools noticeably. 'That's your right,' he says, but his tone suggests this is not the last you will hear from the Bureau. You leave the coffee shop feeling exposed. The card sits in your pocket. You throw it away at home but remember the number anyway.",
            consequences: [
              "The FBI notes your refusal to cooperate",
              "You maintain your independence",
              "You may receive less friendly visits in the future",
            ],
            suspicionChange: 10,
            integrityChange: 8,
            tone: "neutral",
            historicalNote:
              "Refusing the FBI's request for cooperation was a risky choice. Agents sometimes retaliated by opening investigations into those who declined to help.",
          },
        },
        {
          id: "C",
          text: "Take the card but do not commit. Say you will think about it.",
          alignment: "neutral",
          riskLevel: "low",
          outcome: {
            narrative:
              "You pocket the card with a noncommittal nod. The agent seems satisfied — for now. The card sits in your wallet for weeks, a quiet reminder of the choice you have not yet made. The agent calls once to check in. You let it ring.",
            consequences: [
              "The FBI expects a future commitment from you",
              "You buy time but no resolution",
              "The pressure to decide grows slowly",
            ],
            suspicionChange: 0,
            integrityChange: -3,
            tone: "neutral",
            historicalNote:
              "Many Americans kept FBI agents' cards 'just in case,' living in a gray zone between cooperation and refusal that defined much of ordinary life during the Red Scare.",
          },
        },
      ],
    },
    {
      headline: "City Council Votes to Ban 'Subversive' Books",
      scene:
        "The city council passes an ordinance requiring public institutions to remove books by authors on a 'subversive' list. Your supervisor hands you the list. It includes Mark Twain and Thomas Jefferson.",
      situation:
        "You are told to pull dozens of books from the shelves by the end of the week. Some are classics. Some are written by people you admire. Refusing could cost you your job. Complying feels like a betrayal of everything your institution stands for.",
      choices: [
        {
          id: "A",
          text: "Pull the books as ordered. It is not your decision — you are just following instructions.",
          alignment: "cooperative",
          riskLevel: "low",
          outcome: {
            narrative:
              "You wheel a cart through the stacks, pulling books one by one. A regular patron — an elderly man who comes every Tuesday — watches you with confusion. 'Why are you taking those away?' he asks. 'Orders,' you say, unable to meet his eyes.",
            consequences: [
              "Dozens of books are removed from public access",
              "You follow orders and keep your job",
              "Patrons notice the gaps on the shelves",
            ],
            suspicionChange: -5,
            integrityChange: -15,
            tone: "negative",
            historicalNote:
              "Book banning was widespread during the McCarthy era. The State Department even removed books from overseas libraries, and some communities held book burnings.",
          },
        },
        {
          id: "B",
          text: "Refuse publicly. Tell your supervisor and the press that banning books is un-American.",
          alignment: "defiant",
          riskLevel: "high",
          outcome: {
            narrative:
              "You stand in front of the shelves and announce that you will not remove a single book. A reporter from the local paper is there, tipped off by a colleague. Your photograph runs on the front page under the headline: 'Librarian Defies Council.' The council fires you the next day.",
            consequences: [
              "You are fired from your position",
              "Your story receives local and national attention",
              "The book ban becomes a public controversy",
            ],
            suspicionChange: 20,
            integrityChange: 10,
            tone: "neutral",
            historicalNote:
              "Some librarians risked their careers to resist book bans. The American Library Association adopted its Freedom to Read statement in 1953, declaring opposition to censorship.",
          },
        },
        {
          id: "C",
          text: "Remove the books from the shelves but quietly move them to a back room instead of destroying them.",
          alignment: "neutral",
          riskLevel: "medium",
          outcome: {
            narrative:
              "You clear the shelves as ordered, but instead of disposing of the books, you stack them neatly in the basement storage room. They are technically removed from circulation but not destroyed. If anyone asks, the books are 'being catalogued.' It is a small act of preservation.",
            consequences: [
              "The books are preserved but hidden from the public",
              "You comply with the letter of the order while subverting its intent",
              "Discovery could mean termination and worse",
            ],
            suspicionChange: 2,
            integrityChange: 3,
            tone: "neutral",
            historicalNote:
              "Some librarians quietly preserved banned books by reclassifying them or storing them out of sight. These acts of quiet resistance saved many works from destruction.",
          },
        },
      ],
    },
    {
      headline: "Your Brother-in-Law's Arrest Makes the Paper",
      scene:
        "The morning paper has your brother-in-law Tony's mugshot on page three. He has been arrested for distributing Communist literature. Your wife is in the kitchen, crying. Your phone rings — it is your supervisor.",
      situation:
        "Your boss is calling to ask about your 'family connections.' As a federal employee, any association with a suspected Communist puts your security clearance at risk. Your wife wants you to stand by her brother. Your boss wants you to distance yourself publicly.",
      choices: [
        {
          id: "A",
          text: "Tell your boss you have had nothing to do with your brother-in-law's activities and will cooperate fully with any investigation.",
          alignment: "cooperative",
          riskLevel: "low",
          outcome: {
            narrative:
              "You assure your boss of your complete loyalty and offer to answer any questions. You sign an affidavit distancing yourself from Tony. Your wife watches you write the statement at the kitchen table. 'He's my brother,' she says quietly. You do not look up.",
            consequences: [
              "Your security clearance is preserved",
              "Your relationship with your wife becomes strained",
              "Tony's family feels abandoned",
            ],
            suspicionChange: -10,
            integrityChange: -12,
            tone: "negative",
            historicalNote:
              "The Red Scare often forced families apart. Relatives of accused individuals were pressured to publicly denounce their own family members to protect their careers.",
          },
        },
        {
          id: "B",
          text: "Stand by Tony publicly. Tell your boss that family comes first and Tony deserves due process.",
          alignment: "defiant",
          riskLevel: "high",
          outcome: {
            narrative:
              "You tell your boss that your brother-in-law is innocent until proven guilty and that you will not disown him. There is a long silence on the phone. 'I respect that,' your boss says, 'but I can't protect you.' Your security review is scheduled for next month.",
            consequences: [
              "Your security clearance is put under review",
              "Your wife is grateful for your loyalty",
              "Your federal career is now at serious risk",
            ],
            suspicionChange: 18,
            integrityChange: 8,
            tone: "neutral",
            historicalNote:
              "Federal employees were particularly vulnerable to guilt by association. Executive Order 9835, signed by Truman in 1947, established loyalty reviews for all federal workers.",
          },
        },
        {
          id: "C",
          text: "Say as little as possible to your boss. Do not denounce Tony, but do not defend him either.",
          alignment: "neutral",
          riskLevel: "medium",
          outcome: {
            narrative:
              "You tell your boss you do not have much contact with your brother-in-law and that you would rather not discuss personal family matters. Your boss accepts this for now but warns you that the matter may come up again. You hang up feeling like you are standing on a tightrope.",
            consequences: [
              "Your boss is unsatisfied but does not push further immediately",
              "Your position is neither secure nor immediately threatened",
              "The issue will resurface at your next security review",
            ],
            suspicionChange: 5,
            integrityChange: -3,
            tone: "neutral",
            historicalNote:
              "Trying to stay neutral about a family member's arrest was nearly impossible during the Red Scare. The FBI expected clear denunciation, and anything less was treated with suspicion.",
          },
        },
      ],
    },
    {
      headline: "Town Hall Meeting Turns Into an Inquisition",
      scene:
        "A town hall meeting about school funding has been hijacked by a local McCarthy supporter named Henderson. He stands at the microphone, red-faced, waving a list of 'known Communists' who he says are teaching your children.",
      situation:
        "Henderson points at the school principal, Mrs. Ortiz, and demands she be fired. The crowd is agitated. Mrs. Ortiz, who has served the school for 15 years, stands frozen near the back. Someone shouts, 'Are you going to let Communists teach our kids?' The room looks around for someone to say something.",
      choices: [
        {
          id: "A",
          text: "Stand up and defend Mrs. Ortiz. Tell the crowd that Henderson is spreading fear, not facts.",
          alignment: "defiant",
          riskLevel: "high",
          outcome: {
            narrative:
              "You stand and your voice cracks at first but steadies. 'Mrs. Ortiz has taught our children for fifteen years,' you say. 'This man has a list, but I have never seen him at a single school event.' The room splits — some applaud, others boo. Henderson turns his attention to you. 'And who are you? What are you hiding?'",
            consequences: [
              "Henderson adds your name to his informal list",
              "Mrs. Ortiz thanks you afterward with tears in her eyes",
              "Some neighbors admire your courage; others avoid you",
            ],
            suspicionChange: 12,
            integrityChange: 8,
            tone: "neutral",
            historicalNote:
              "Local McCarthy supporters wielded enormous power in small communities. Standing up to them in public was one of the most dangerous things an ordinary American could do.",
          },
        },
        {
          id: "B",
          text: "Stay silent. This is not your fight, and getting involved will only make things worse.",
          alignment: "cooperative",
          riskLevel: "low",
          outcome: {
            narrative:
              "You sit in your folding chair and stare at your hands while Henderson rages. Mrs. Ortiz looks around the room for support and finds only averted eyes. The school board votes to suspend her pending an investigation. You drive home in silence.",
            consequences: [
              "Mrs. Ortiz is suspended from her position",
              "You remain invisible and safe",
              "The culture of fear in your town grows stronger",
            ],
            suspicionChange: -3,
            integrityChange: -10,
            tone: "negative",
            historicalNote:
              "The silence of ordinary citizens was what allowed McCarthyism to thrive. Many later said their greatest regret was not speaking up when they had the chance.",
          },
        },
        {
          id: "C",
          text: "Quietly approach Mrs. Ortiz after the meeting and offer to help her find a lawyer.",
          alignment: "neutral",
          riskLevel: "low",
          outcome: {
            narrative:
              "After the meeting, you catch Mrs. Ortiz in the parking lot. She is shaking. You give her the name of an attorney who has handled these cases. 'Thank you,' she whispers. It is not enough — but it is something.",
            consequences: [
              "Mrs. Ortiz has legal support for her defense",
              "You avoid public exposure",
              "Your help is private but meaningful",
            ],
            suspicionChange: 0,
            integrityChange: 3,
            tone: "neutral",
            historicalNote:
              "Small, private acts of support helped many accused individuals survive. While these acts did not stop McCarthyism, they preserved human dignity in its darkest moments.",
          },
        },
      ],
    },
    {
      headline: "Management Asks You to Report on the Union",
      scene:
        "Your plant manager calls you into his office. The door is closed. On his desk is a file marked 'CONFIDENTIAL — UAW Local 600.' He taps it with his finger.",
      situation:
        "The plant manager wants you to keep an eye on union meetings and report back on what is discussed and who attends. He says the company is 'cooperating with federal authorities.' He reminds you that your promotion to senior foreman depends on being 'a team player.'",
      choices: [
        {
          id: "A",
          text: "Agree to report on union meetings. A promotion would change your family's life.",
          alignment: "cooperative",
          riskLevel: "low",
          outcome: {
            narrative:
              "You attend the next union meeting with a small notebook in your jacket pocket. You write down names and topics. You hand the notes to your plant manager the next morning. He reads them with satisfaction. 'Good work,' he says. The promotion comes through three months later. The notes lead to six workers being questioned by the FBI.",
            consequences: [
              "Six union members are called in for FBI questioning",
              "You receive your promotion and a raise",
              "You attend every meeting knowing you are the reason people are afraid",
            ],
            suspicionChange: -12,
            integrityChange: -20,
            tone: "negative",
            historicalNote:
              "Companies frequently used management-level employees to infiltrate and report on union activities. The UAW in particular was targeted by both corporate and federal investigations in the early 1950s.",
          },
        },
        {
          id: "B",
          text: "Refuse outright. Tell the plant manager that spying on your own workers is wrong.",
          alignment: "defiant",
          riskLevel: "high",
          outcome: {
            narrative:
              "The plant manager's expression hardens. 'I thought you were management material,' he says. You are passed over for the promotion. Worse, your assignments shift to the least desirable shifts. The message is clear: there is a cost for saying no.",
            consequences: [
              "Your promotion is denied",
              "You are moved to undesirable shifts",
              "The union workers never know what you did for them",
            ],
            suspicionChange: 10,
            integrityChange: 8,
            tone: "neutral",
            historicalNote:
              "Workers who refused to cooperate with management surveillance often faced retaliation. The protections for whistleblowers that exist today did not exist in the 1950s.",
          },
        },
        {
          id: "C",
          text: "Agree, but attend meetings and report only vague, useless information.",
          alignment: "neutral",
          riskLevel: "medium",
          outcome: {
            narrative:
              "You attend the union meetings and submit reports filled with meaningless details — who brought the coffee, how long the meeting lasted, what the weather was like. Your plant manager grows frustrated. 'I need names and topics,' he says. You are running out of ways to be unhelpful without being caught.",
            consequences: [
              "Your reports protect the union members — for now",
              "Management grows suspicious of your usefulness",
              "The charade cannot last forever",
            ],
            suspicionChange: 3,
            integrityChange: 0,
            tone: "neutral",
            historicalNote:
              "Some informants deliberately provided useless intelligence to protect their colleagues while appearing to cooperate. This double game was stressful and dangerous if discovered.",
          },
        },
      ],
    },
  ],
};

// ─── FINAL VERDICTS ─────────────────────────────────────────────────────────
// Computed from final suspicion and integrity levels.

export const VERDICT_TEMPLATES = {
  destroyed: [
    {
      verdict: "Blacklisted and forgotten — another life consumed by the Red Scare.",
      epilogue:
        "In the years that followed, all doors closed. Former friends crossed the street to avoid eye contact. Job applications were returned unopened. The accusation followed like a shadow, permanent and inescapable. It was years before steady work returned — and the lost time never did.",
      reflection:
        "McCarthyism did not require guilt to destroy a life. The accusation itself was the punishment, and no amount of innocence could undo it.",
      historicalParallel:
        "Like schoolteacher Goldie Watson of Philadelphia, who was fired in 1954 for refusing to answer questions about her political beliefs, many lost everything without ever being charged with a crime.",
    },
    {
      verdict: "Career destroyed, reputation shattered — the committee took everything.",
      epilogue:
        "The hearings ended, but the consequences did not. Employment was impossible in the old field. A new life had to be built from scratch, in a new city, under the weight of a name that now meant only one thing: suspect.",
      reflection:
        "The Red Scare showed how quickly a society can turn on its own members when fear overrides evidence and accusation replaces due process.",
      historicalParallel:
        "Like actor Philip Loeb, who was fired from The Goldbergs after being blacklisted and died in obscurity in 1955, many talented Americans saw their life's work erased by suspicion alone.",
    },
  ],
  survived: [
    {
      verdict: "Battered but still standing — survival came at a cost, but survive they did.",
      epilogue:
        "The storm eventually passed. Senator McCarthy was censured in 1954, and the committee's power slowly waned. Life returned to something like normal — but the scars remained. Trust, once broken by the era, was never fully rebuilt.",
      reflection:
        "Survival during McCarthyism often meant compromise. The question students should ask is: what is the difference between compromise and complicity?",
      historicalParallel:
        "Like journalist I.F. Stone, who was shunned by mainstream media but survived by publishing his own newsletter, some found unconventional paths through the Red Scare.",
    },
    {
      verdict: "Weathered the storm through caution, luck, and the passage of time.",
      epilogue:
        "When the McCarthy era finally ended, life resumed its rhythm — but the memory of those years cast a long shadow. The experience left a permanent wariness, a reluctance to speak freely that never fully faded.",
      reflection:
        "Many Americans survived McCarthyism by keeping their heads down. Their stories raise the question: when does self-preservation become silent complicity?",
      historicalParallel:
        "Like the thousands of federal employees who kept their jobs by saying nothing, survival often meant a private compromise that the public never saw.",
    },
  ],
  compromised: [
    {
      verdict: "They survived — but at a price that can never be repaid.",
      epilogue:
        "The names given in testimony led to ruined lives. There were letters of apology that were never sent, phone calls that were never made. The career continued, but the person behind it was fundamentally changed.",
      reflection:
        "McCarthyism forced people to choose between their own survival and the lives of others. The compromises made during this era reveal how systems of fear can corrupt even well-intentioned people.",
      historicalParallel:
        "Like director Elia Kazan, who named names and won an Oscar but was haunted by his decision for decades, the informers of the McCarthy era carried their choices to the grave.",
    },
    {
      verdict: "The career was saved. The conscience was not.",
      epilogue:
        "Work continued, paychecks arrived, and outwardly life looked the same. But something had broken inside. The faces of the people who were named appeared in dreams. Some of them eventually reached out — not to forgive, but to ask: why?",
      reflection:
        "The most painful legacy of McCarthyism may be the moral injuries it inflicted on those who cooperated. Students should consider: can a system make good people do terrible things?",
      historicalParallel:
        "Like actor Sterling Hayden, who cooperated with HUAC and later called it the most shameful thing he ever did, many informers lived with deep regret for the rest of their lives.",
    },
  ],
  heroic: [
    {
      verdict: "They refused to bend — and history proved them right.",
      epilogue:
        "The years of hardship were real: lost jobs, broken friendships, financial ruin. But when the fever broke and America looked back at what it had done, those who refused to participate in the persecution were remembered as the ones who kept their honor intact.",
      reflection:
        "Standing on principle during McCarthyism required extraordinary courage. These stories remind us that doing the right thing and doing the safe thing are often very different choices.",
      historicalParallel:
        "Like playwright Lillian Hellman, who told HUAC she would not 'cut her conscience to fit this year's fashions,' those who resisted paid a heavy price but preserved their integrity.",
    },
    {
      verdict: "Principled to the end — they chose conscience over comfort.",
      epilogue:
        "Prison, blacklisting, exile — the cost was staggering. But in the long view of history, the resisters were vindicated. Their names are remembered not with shame, but with respect. The accusers are remembered very differently.",
      reflection:
        "McCarthyism teaches us that courage is not the absence of fear — it is acting according to one's principles despite the fear. What would you have done?",
      historicalParallel:
        "Like Pete Seeger, who was blacklisted for years after refusing to cooperate with HUAC but continued to perform and eventually saw his reputation fully restored, principled resistance sometimes wins in the end.",
    },
  ],
};

// ─── HELPER: COMPUTE VERDICT TYPE ──────────────────────────────────────────

export function computeVerdictType(suspicion, integrity) {
  if (suspicion >= 70 && integrity < 40) return "destroyed";
  if (integrity >= 70 && suspicion < 40) return "heroic";
  if (integrity < 50 && suspicion < 50) return "compromised";
  if (suspicion >= 60) return "destroyed";
  if (integrity >= 60) return "survived";
  return "compromised";
}

// ─── HELPER: PICK RANDOM ITEMS ─────────────────────────────────────────────

export function pickRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

export function shuffleAndTake(arr, count) {
  const shuffled = [...arr].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}
