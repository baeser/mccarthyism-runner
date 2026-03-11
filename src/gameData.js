// ─── PRE-WRITTEN GAME CONTENT ──────────────────────────────────────────────
// All characters, scenarios, outcomes, and verdicts are self-contained.
// No API calls needed — everything runs locally in the browser.
//
// Scenario text uses template variables: {name}, {shortName}, {occupation},
// {workplace}, {location} — replaced at runtime with the player's character.

export const CHARACTERS = {
  informer: [
    {
      name: "Robert Kessler",
      shortName: "Robert",
      age: 38,
      occupation: "Screenwriter",
      workplace: "the studio",
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
      shortName: "Peggy",
      age: 34,
      occupation: "High School English Teacher",
      workplace: "the school",
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
      shortName: "Arthur",
      age: 45,
      occupation: "Radio Producer",
      workplace: "the radio station",
      location: "New York, New York",
      backstory:
        "Arthur produced some of the most popular radio dramas of the 1940s. He hired talented actors and writers without asking about their politics. Now two of his former writers are on the blacklist, and FBI agents have started visiting his office, asking questions about his hiring decisions.",
      loyaltySuspicion: 35,
      integrity: 65,
      archetype: "informer",
      archetypeHint:
        "The FBI has made it clear: cooperate and name the 'subversives' you hired, or watch your career disappear.",
    },
  ],
  resister: [
    {
      name: "Eleanor Marsh",
      shortName: "Eleanor",
      age: 42,
      occupation: "Stage Actress",
      workplace: "the theater",
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
      shortName: "Sam",
      age: 36,
      occupation: "Newspaper Reporter",
      workplace: "the newspaper",
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
      shortName: "Helen",
      age: 50,
      occupation: "Physics Professor",
      workplace: "the university",
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
      shortName: "Frank",
      age: 29,
      occupation: "Postal Worker",
      workplace: "the post office",
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
      shortName: "Dorothy",
      age: 33,
      occupation: "Public Librarian",
      workplace: "the library",
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
      shortName: "Jimmy",
      age: 41,
      occupation: "Factory Foreman",
      workplace: "the factory",
      location: "Detroit, Michigan",
      backstory:
        "Jimmy has worked at the Ford assembly plant for eighteen years and recently made foreman. His union, the UAW, is under investigation by HUAC. He has never attended a political meeting in his life, but some of his best workers are union activists now being called 'subversives.'",
      loyaltySuspicion: 10,
      integrity: 75,
      archetype: "bystander",
      archetypeHint:
        "Management wants you to identify 'troublemakers.' You just want to build cars and go home to your family.",
    },
  ],
};

// ─── SCENARIOS ──────────────────────────────────────────────────────────────
// 6 per archetype. Each playthrough randomly picks 4.
// Outcomes are embedded in each choice so no API is needed.
// Text uses {name}, {shortName}, {occupation}, {workplace}, {location} templates.

export const SCENARIOS = {
  informer: [
    {
      headline: "HUAC Subpoena Arrives at {shortName}'s Door",
      scene:
        "A man in a gray suit hands {shortName} an envelope on the front porch. The neighbors watch from behind their curtains. Inside is a subpoena to appear before the House Un-American Activities Committee in Washington.",
      situation:
        "The committee wants {shortName} to testify about people from political meetings years ago. A lawyer says cooperation is the safest path — but cooperation means giving names. Names of people who could lose everything.",
      choices: [
        {
          id: "A",
          text: "Cooperate fully with the committee. Provide the names they want to hear and denounce your past associations.",
          alignment: "cooperative",
          riskLevel: "low",
          outcome: {
            narrative:
              "{shortName} sits before the committee under bright lights and reads a prepared statement denouncing communism. Then comes the list — three names. The committee chairman thanks {shortName} for this patriotism. Walking out of the hearing room, the weight of what just happened settles like a fog.",
            consequences: [
              "HUAC marks {shortName} as a 'friendly witness'",
              "Three former associates are now under investigation",
              "Immediate career prospects improve",
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
              "{shortName} sits rigidly in the witness chair and repeats the same phrase: 'I respectfully decline to answer on the grounds that it may incriminate me.' The committee members exchange knowing looks. The phrase 'Fifth Amendment Communist' will follow {shortName} home.",
            consequences: [
              "The committee holds {shortName} in contempt",
              "{shortName}'s employer receives a call from Washington within hours",
              "The name appears in the next morning's newspapers",
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
              "{shortName} acknowledges a brief past involvement but draws a hard line when they ask about others. 'I am not going to name names.' The committee is unsatisfied, but the willingness to discuss personal history buys some goodwill — for now.",
            consequences: [
              "The committee pressures {shortName}'s employer",
              "Some colleagues quietly respect the stance",
              "{shortName} remains under active investigation",
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
      headline: "The Boss at {workplace} Demands Loyalty",
      scene:
        "{shortName}'s supervisor calls a closed-door meeting at {workplace}. On the desk is a list of employees. The supervisor slides it across with a pen.",
      situation:
        "The company is cooperating with an FBI investigation. The boss wants {shortName} to circle the names of anyone with 'radical sympathies.' The reminder is blunt: {shortName}'s own position is not guaranteed.",
      choices: [
        {
          id: "A",
          text: "Circle several names — people you have heard express left-leaning opinions at work.",
          alignment: "cooperative",
          riskLevel: "low",
          outcome: {
            narrative:
              "{shortName} circles five names with a trembling hand. The boss nods approvingly and locks the list in the desk. Within two weeks, three of those people are called into the office and told their services are no longer needed. One of them — a single parent — stops {shortName} in the parking lot with tears streaming down.",
            consequences: [
              "Three coworkers lose their jobs based on {shortName}'s identifications",
              "{shortName}'s position at {workplace} is secured",
              "Word quietly spreads about what happened",
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
          text: "Refuse to circle any names. Tell the boss this feels like a witch hunt.",
          alignment: "defiant",
          riskLevel: "high",
          outcome: {
            narrative:
              "The boss stares at {shortName} for a long moment, then takes back the list. 'I see,' he says coldly. The next week, {shortName}'s assignments dry up. A friend in the front office whispers that {shortName}'s name has been added to a different kind of list.",
            consequences: [
              "The boss reports {shortName}'s refusal to cooperate",
              "{shortName} is moved to less desirable assignments",
              "The FBI adds a note to {shortName}'s file",
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
          text: "Tell the boss you honestly don't know anyone's political beliefs and cannot help.",
          alignment: "neutral",
          riskLevel: "medium",
          outcome: {
            narrative:
              "{shortName} plays ignorant, claiming to never discuss politics at work. The boss seems skeptical but accepts the answer — for now. {shortName} leaves the meeting knowing this has only delayed the inevitable. The list is still in that desk.",
            consequences: [
              "The boss remains suspicious of {shortName}'s loyalty",
              "{shortName} avoids directly harming anyone — this time",
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
      headline: "FBI Agents Ask {shortName} About an Old Friend",
      scene:
        "Two FBI agents arrive at {shortName}'s home on a Saturday morning. They show their badges and ask to come inside. From the kitchen doorway, a family member watches nervously.",
      situation:
        "The agents want to know about an old friend, David, who {shortName} hasn't spoken to in years. They say David is under investigation. They hint that {shortName}'s own 'situation' could improve with some cooperation.",
      choices: [
        {
          id: "A",
          text: "Tell them everything you remember about David — meetings he attended, things he said, people he knew.",
          alignment: "cooperative",
          riskLevel: "low",
          outcome: {
            narrative:
              "{shortName} spends an hour telling the agents about David's activities. They write everything down in small notebooks, asking follow-up questions. When they leave, they shake {shortName}'s hand warmly. The door closes. The realization settles in: an old friend might be going to prison because of this conversation.",
            consequences: [
              "The FBI uses {shortName}'s testimony to build a case against David",
              "Agents note {shortName} as cooperative in their files",
              "The friendship is almost certainly over",
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
          text: "Tell the agents you will not discuss another person behind their back and ask them to leave.",
          alignment: "defiant",
          riskLevel: "high",
          outcome: {
            narrative:
              "The agents exchange a glance. One of them says, 'We were hoping you would be more helpful.' They leave without another word, but {shortName} notices a black car parked across the street for the rest of the week. The mail starts arriving already opened.",
            consequences: [
              "The FBI begins surveillance of {shortName}'s household",
              "{shortName}'s mail is monitored",
              "{shortName} is flagged as potentially uncooperative",
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
          text: "Share only vague, unhelpful information. Claim your memory is poor.",
          alignment: "neutral",
          riskLevel: "medium",
          outcome: {
            narrative:
              "{shortName} offers the agents nothing useful — vague dates, uncertain recollections, hazy memories. They press harder, but {shortName} maintains the story. The agents leave frustrated. They will almost certainly come back.",
            consequences: [
              "The agents are dissatisfied but have nothing to act on",
              "{shortName} avoids directly harming David",
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
      headline: "An Offer to Come In From the Cold",
      scene:
        "A former colleague reaches out to {shortName} through a mutual friend. They meet at a quiet diner outside of town. The colleague now has connections — and a proposal.",
      situation:
        "The deal is simple: {shortName} can get back to work at {workplace} — contracts, assignments, a return to normal life. But first, there must be a public statement in the papers. Denounce communism. Name four or five people from the old days. 'Think of it as a cleansing,' the colleague says.",
      choices: [
        {
          id: "A",
          text: "Agree to the deal. Write the public statement and name people from political gatherings years ago.",
          alignment: "cooperative",
          riskLevel: "medium",
          outcome: {
            narrative:
              "{shortName}'s statement runs in the papers, calling the past associations a youthful mistake. Four people are named. Within days, all four are under investigation. One of them — a parent of three — calls {shortName} at home, sobbing. But the work starts flowing again.",
            consequences: [
              "Four people are placed under investigation",
              "{shortName} receives new work opportunities at {workplace}",
              "The guilt manifests as insomnia and drinking",
            ],
            suspicionChange: -15,
            integrityChange: -20,
            tone: "negative",
            historicalNote:
              "Screenwriter Budd Schulberg named fifteen former associates in his HUAC testimony. He continued working while those he named could not find employment for years.",
          },
        },
        {
          id: "B",
          text: "Refuse the deal. You will not build a comeback on other people's ruin.",
          alignment: "defiant",
          riskLevel: "high",
          outcome: {
            narrative:
              "The colleague shakes his head slowly. 'You're making a mistake,' he says. {shortName} walks out of the diner into blinding sunlight. Within a month, word spreads that {shortName} is 'difficult.' The phone stops ringing. New work will have to be found outside the old circles.",
            consequences: [
              "{shortName} is effectively shut out of {workplace}",
              "Income drops dramatically",
              "A small circle of fellow resisters respects the decision",
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
          text: "Ask if you can write a general statement against communism without naming specific people.",
          alignment: "neutral",
          riskLevel: "medium",
          outcome: {
            narrative:
              "The colleague considers {shortName}'s proposal and makes some calls. He comes back with a compromise: a general denunciation is acceptable, but {shortName} must also meet privately with an investigator and answer questions 'off the record.' Nothing said to investigators is truly off the record.",
            consequences: [
              "{shortName} publishes a watered-down denunciation",
              "A private meeting with investigators is scheduled",
              "The return to work is delayed and uncertain",
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
      headline: "{shortName}'s Neighbor Asks a Dangerous Question",
      scene:
        "At a block party, {shortName}'s neighbor Bill pulls them aside near the garage. He keeps his voice low. He says his son's teacher is rumored to be 'one of them' and asks if {shortName} has heard anything.",
      situation:
        "{shortName} happens to know that the teacher, Mrs. Alvarez, attended a civil rights meeting last year. Bill is the type who would call the school board — or worse, the FBI. What {shortName} says next could determine her fate.",
      choices: [
        {
          id: "A",
          text: "Tell Bill what you know about the meeting. It might protect your own reputation to appear vigilant.",
          alignment: "cooperative",
          riskLevel: "low",
          outcome: {
            narrative:
              "Bill nods gravely and thanks {shortName} for 'looking out for the community.' Three days later, Mrs. Alvarez is suspended pending an investigation. Her students make cards asking her to come back. She never does.",
            consequences: [
              "Mrs. Alvarez loses her teaching position",
              "{shortName} is seen as a reliable, patriotic neighbor",
              "Suspicion moves away from {shortName}",
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
              "Bill steps back, startled by {shortName}'s sharpness. 'I thought you were a patriot,' he mutters. After that, Bill stops waving from across the street. {shortName} notices him watching the house more carefully now.",
            consequences: [
              "Bill becomes suspicious of {shortName}",
              "Mrs. Alvarez keeps her job — for now",
              "{shortName}'s relationship with the neighbors grows tense",
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
          text: "Say you haven't heard anything and change the subject back to the block party.",
          alignment: "neutral",
          riskLevel: "low",
          outcome: {
            narrative:
              "{shortName} shrugs and steers the conversation toward the potato salad. Bill seems unsatisfied but lets it drop. Mrs. Alvarez is safe for now, but Bill will keep asking around until he finds someone willing to talk.",
            consequences: [
              "Mrs. Alvarez remains safe for the moment",
              "Bill continues his informal investigation",
              "{shortName} avoids involvement but feels the moral tension",
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
      headline: "Old Records Could Be {shortName}'s Ticket Out",
      scene:
        "{shortName} finds a box of old papers in the basement — sign-in sheets, handwritten notes, and letters from political gatherings attended years ago. The pages contain names, dates, and damning details.",
      situation:
        "An FBI investigator has been pressing {shortName} for 'evidence.' These papers could be exactly what he wants. Handing them over would prove cooperation — but the names in those pages belong to real people with families.",
      choices: [
        {
          id: "A",
          text: "Turn the papers over to the FBI investigator. This is your ticket to safety.",
          alignment: "cooperative",
          riskLevel: "low",
          outcome: {
            narrative:
              "The investigator leafs through the pages with barely contained excitement. 'This is very helpful,' he says. Over the following months, six people named in those records receive subpoenas. Two lose their jobs. {shortName} receives a letter from the FBI thanking them for 'service to the nation.'",
            consequences: [
              "Six people are subpoenaed based on {shortName}'s records",
              "The FBI considers {shortName}'s case resolved",
              "{shortName} carries the knowledge of what those pages caused",
            ],
            suspicionChange: -18,
            integrityChange: -20,
            tone: "negative",
            historicalNote:
              "Membership lists and meeting records were prized by investigators. The Taft-Hartley Act of 1947 required union leaders to sign affidavits swearing they were not Communists.",
          },
        },
        {
          id: "B",
          text: "Burn the records in the backyard that night. Those names will never reach the FBI.",
          alignment: "defiant",
          riskLevel: "high",
          outcome: {
            narrative:
              "{shortName} watches the pages curl and blacken in the firepit. The names dissolve into ash. A weight lifts — but a new fear settles in. What if someone saw? What if the investigator finds out evidence was destroyed?",
            consequences: [
              "The evidence is permanently destroyed",
              "{shortName} risks obstruction charges if discovered",
              "The people named in those records are protected",
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
          text: "Hide the papers somewhere safe. You're not ready to hand them over or destroy them.",
          alignment: "neutral",
          riskLevel: "medium",
          outcome: {
            narrative:
              "{shortName} wraps the box in a blanket and hides it in the attic crawl space. The investigator calls again the following week, asking if anything 'useful' has turned up. {shortName} says no. The box sits overhead every night like a ticking clock.",
            consequences: [
              "The evidence remains hidden but intact",
              "The FBI continues to press {shortName} for information",
              "{shortName} lives with the anxiety of a secret that could surface at any moment",
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
      headline: "The Committee Demands {shortName}'s Testimony",
      scene:
        "The hearing room is small and overheated. Camera bulbs flash. Behind a long table, the committee members shuffle papers with {name}'s name on them. A lawyer sits beside {shortName}, visibly nervous.",
      situation:
        "The committee chairman asks directly: 'Are you now, or have you ever been, a member of the Communist Party?' {shortName}'s answer will be printed in every newspaper in the country by tomorrow morning.",
      choices: [
        {
          id: "A",
          text: "Answer honestly that you were once a member but left years ago. Refuse to discuss anyone else.",
          alignment: "neutral",
          riskLevel: "medium",
          outcome: {
            narrative:
              "{shortName} speaks clearly into the microphone: 'I was a member. I am not ashamed of it. But I will not discuss anyone but myself.' The committee presses harder, but {shortName} holds firm. The newspapers call it 'defiant but forthcoming.'",
            consequences: [
              "{shortName}'s honesty is noted but does not satisfy the committee",
              "Contempt charges are narrowly avoided",
              "{shortName}'s employer faces pressure to act",
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
              "{shortName} leans into the microphone: 'The First Amendment protects my right to believe whatever I choose. This committee has no authority to investigate my thoughts.' The room erupts. The chairman bangs his gavel and threatens contempt of Congress.",
            consequences: [
              "{shortName} faces contempt of Congress charges",
              "The statement is quoted in newspapers nationwide",
              "Civil liberties organizations rally to {shortName}'s defense",
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
              "{shortName} unfolds a typed page and begins reading: 'This committee represents everything the founders of this nation warned us about.' Before the statement is finished, the chairman orders the microphone cut. {shortName} stands, folds the paper, and walks out while cameras flash. It is the last time many doors will open.",
            consequences: [
              "{shortName} is cited for contempt of Congress",
              "The dramatic exit becomes a symbol of resistance",
              "{shortName}'s career in {occupation} is effectively over",
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
      headline: "{shortName}'s Employer Demands a Loyalty Oath",
      scene:
        "A memo arrives at {workplace}. All employees must sign a loyalty oath swearing they are not now and have never been members of the Communist Party. Those who refuse will be terminated.",
      situation:
        "{shortName} has 30 days to sign. Several colleagues have already signed, calling it a 'meaningless formality.' Others are organizing a protest. {shortName}'s work, reputation, and livelihood all hang in the balance.",
      choices: [
        {
          id: "A",
          text: "Refuse to sign on principle and join colleagues who are protesting.",
          alignment: "defiant",
          riskLevel: "high",
          outcome: {
            narrative:
              "{shortName} joins a group of colleagues in refusing the oath. The employer fires all of them within the month. {shortName}'s office is locked. Years of work sit behind a door that can no longer be opened.",
            consequences: [
              "{shortName} is terminated from {workplace}",
              "Years of professional work are disrupted",
              "{shortName} becomes part of a landmark civil liberties case",
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
              "{shortName} signs the oath but attaches a statement calling it 'a violation of fundamental rights.' The administration accepts the signature and ignores the statement. Colleagues who refused are fired. {shortName} keeps the job but feels the compromise like a splinter under the skin.",
            consequences: [
              "{shortName} keeps the position at {workplace}",
              "The protest statement has no practical effect",
              "Some colleagues view the signing as a betrayal",
            ],
            suspicionChange: -5,
            integrityChange: -10,
            tone: "neutral",
            historicalNote:
              "Many employees signed loyalty oaths while privately disagreeing, reasoning that they could do more good by staying in their positions than by sacrificing their careers on principle.",
          },
        },
        {
          id: "C",
          text: "Resign quietly before the deadline. Leave on your own terms rather than submit or be fired.",
          alignment: "defiant",
          riskLevel: "medium",
          outcome: {
            narrative:
              "{shortName} cleans out the office on a Sunday when the halls are empty. A key is left with the secretary and a note for close colleagues. The local paper runs a small story. A contact at a less prominent organization offers a position at half the former salary.",
            consequences: [
              "{shortName} leaves with integrity intact",
              "Career takes a significant step backward",
              "The public spectacle of firing or hearings is avoided",
            ],
            suspicionChange: 5,
            integrityChange: 5,
            tone: "neutral",
            historicalNote:
              "Some professionals quietly relocated to smaller institutions or left the country entirely rather than face loyalty oaths. Many ended up in Mexico, England, or Canada.",
          },
        },
      ],
    },
    {
      headline: "A Blacklisted Friend Asks {shortName} for Help",
      scene:
        "Late one evening, there is a quiet knock at the door. It is {shortName}'s friend Richard, an actor who was blacklisted six months ago. He looks thin and exhausted. He asks if he can stay for a few days.",
      situation:
        "Harboring someone on the blacklist could draw FBI attention to {shortName}'s home. Richard has been sleeping in his car. He has no money and no prospects. The neighbors have already noticed the strange car parked on the street.",
      choices: [
        {
          id: "A",
          text: "Take Richard in without hesitation. He is your friend and he needs help.",
          alignment: "defiant",
          riskLevel: "high",
          outcome: {
            narrative:
              "{shortName} makes up the sofa and heats a can of soup. Richard eats in silence, then breaks down crying. He stays for two weeks. A neighbor mentions to the mailman that {shortName} has a 'visitor.' Within days, an unfamiliar car begins parking across the street.",
            consequences: [
              "Richard has shelter and food while he regroups",
              "FBI surveillance of {shortName}'s home increases",
              "The neighbors begin to whisper",
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
          text: "Help Richard discreetly — give him money and the name of a safe place, but he cannot stay here.",
          alignment: "neutral",
          riskLevel: "medium",
          outcome: {
            narrative:
              "{shortName} presses forty dollars into Richard's hand and gives him the address of a boarding house run by a sympathetic widow. Richard thanks {shortName} with tears in his eyes and disappears into the night. The door locks. Forty dollars against a guilty conscience.",
            consequences: [
              "Richard has temporary resources",
              "{shortName} maintains distance from direct association",
              "The help is real but limited",
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
          text: "Tell Richard you're sorry but you cannot risk it. You have your own family to protect.",
          alignment: "cooperative",
          riskLevel: "low",
          outcome: {
            narrative:
              "Richard nods slowly. He does not look surprised — just tired. 'I understand,' he says, though his voice says otherwise. {shortName} watches the taillights disappear down the street and closes the door. Safe. But not good.",
            consequences: [
              "Richard is turned away and remains without shelter",
              "{shortName}'s household stays off the FBI radar",
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
      headline: "{shortName}'s Lawyer Says to Cooperate",
      scene:
        "{shortName}'s attorney arranges a meeting in a dimly lit diner. Over coffee, the lawyer speaks in a low voice. There have been conversations with the committee's counsel.",
      situation:
        "The lawyer says the committee will accept a closed-door session if {shortName} provides just two or three names — people already known to the FBI. 'They just want it on the record,' the lawyer says. 'No one will be hurt.' {shortName} is not sure that's true.",
      choices: [
        {
          id: "A",
          text: "Reject the lawyer's advice. You will not name names, even in a closed session.",
          alignment: "defiant",
          riskLevel: "high",
          outcome: {
            narrative:
              "The lawyer shakes his head and says he cannot protect {shortName} from what comes next. Over the following weeks, the committee issues a public subpoena. {shortName}'s name is on the front page. The resolve is tested daily, but it holds.",
            consequences: [
              "{shortName} faces a public hearing without legal cover",
              "The stance becomes widely known",
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
          text: "Consider the offer. Ask the lawyer to confirm that naming these people truly won't cause additional harm.",
          alignment: "neutral",
          riskLevel: "medium",
          outcome: {
            narrative:
              "The lawyer makes inquiries and reports back: the people are already under investigation. But {shortName} knows that an additional name on the record adds weight to a case. 'Already known' does not mean 'already safe.' The agonizing continues for days.",
            consequences: [
              "{shortName} remains undecided, buying time",
              "The committee grows impatient",
              "The moral weight keeps {shortName} awake at night",
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
          text: "Fire the lawyer and represent yourself. You don't want anyone negotiating away your principles.",
          alignment: "defiant",
          riskLevel: "high",
          outcome: {
            narrative:
              "The lawyer looks stunned when {shortName} dismisses him. Representing yourself before HUAC is a bold move that the press calls either 'courageous' or 'foolish,' depending on the paper. {shortName} spends nights in the library studying constitutional law.",
            consequences: [
              "{shortName} has no legal representation before the committee",
              "Self-representation attracts media attention",
              "{shortName} is fully exposed to the committee's pressure tactics",
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
      headline: "The Newspaper Prints {shortName}'s Name",
      scene:
        "{shortName} opens the morning paper and sees a familiar name — {name} — in a list of 'suspected subversives' published alongside a HUAC press release. The phone begins to ring. It does not stop all day.",
      situation:
        "Reporters want a comment. {shortName}'s employer wants an explanation. Family members are calling in tears. A sympathetic journalist offers to write a profile where {shortName} can 'tell their side' — but any public statement could be used against them.",
      choices: [
        {
          id: "A",
          text: "Give the sympathetic journalist an interview. Speak publicly about your beliefs and the injustice of the committee.",
          alignment: "defiant",
          riskLevel: "high",
          outcome: {
            narrative:
              "The profile runs on Sunday with a photograph of {shortName} at work. The interview is eloquent — constitutional rights, the danger of political persecution. Half the letters to the editor call {shortName} a hero. The other half call {shortName} a traitor. The FBI clips the article for the file.",
            consequences: [
              "{shortName}'s public stance inspires some and angers others",
              "The FBI adds the interview to {shortName}'s growing file",
              "{shortName}'s employer faces increased pressure",
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
              "{shortName} unplugs the phone and draws the curtains. For three days, silence. The story fades from the front page, replaced by other names, other accusations. But the damage is done — {shortName}'s name is in the public record, and silence is often read as guilt.",
            consequences: [
              "The immediate media attention fades",
              "Silence is interpreted differently by different people",
              "The accusation remains on {shortName}'s permanent record",
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
          text: "Issue a brief written statement affirming your loyalty to the United States without addressing the accusations.",
          alignment: "neutral",
          riskLevel: "low",
          outcome: {
            narrative:
              "{shortName} drafts a careful three-sentence statement that a lawyer approves. It says {name} is a loyal American who has never done anything to harm the country. It satisfies no one — not the committee, not the press, and not {shortName}'s own sense of justice.",
            consequences: [
              "The statement is seen as evasive by both sides",
              "It provides no ammunition but also no vindication",
              "The ambiguity of {shortName}'s position deepens",
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
      headline: "Contempt Charges Loom Over {shortName}",
      scene:
        "The lawyer calls from a payphone, voice strained. The committee has voted to refer {shortName} for contempt of Congress. The penalty could be a year in federal prison.",
      situation:
        "There is still time to reverse course — if {shortName} agrees to testify and provide names, the contempt referral will be withdrawn. Family begs {shortName} to reconsider. The children do not understand why a parent might go away.",
      choices: [
        {
          id: "A",
          text: "Hold firm. Accept the contempt charges. You will not break your principles even to stay out of prison.",
          alignment: "defiant",
          riskLevel: "high",
          outcome: {
            narrative:
              "{shortName} is convicted of contempt of Congress and sentenced to six months in federal prison. Family visits on Sundays. {shortName} reads books and writes letters. Upon release — thinner and grayer — not a single name has been given.",
            consequences: [
              "{shortName} serves six months in federal prison",
              "Family endures financial hardship and social stigma",
              "{shortName} becomes a symbol of principled resistance",
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
          text: "Waver. Ask the lawyer to negotiate — maybe you can give them something small without truly betraying anyone.",
          alignment: "neutral",
          riskLevel: "medium",
          outcome: {
            narrative:
              "The lawyer enters negotiations. The committee wants at least two names. {shortName} spends sleepless nights trying to think of someone — anyone — whose naming would cause the least harm. There is no such person. Every name belongs to someone's parent, someone's friend.",
            consequences: [
              "Negotiations stall as {shortName} cannot find a 'harmless' name to give",
              "The contempt referral remains pending",
              "{shortName}'s resolve is shaken but not broken",
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
          text: "Flee. A friend in Mexico has offered a place to stay until this madness passes.",
          alignment: "defiant",
          riskLevel: "high",
          outcome: {
            narrative:
              "{shortName} packs a single suitcase and drives south in the middle of the night. The border crossing at Tijuana leads to a small town where no one knows the name {name}. America feels very far away. Will it ever be possible to go back?",
            consequences: [
              "{shortName} becomes a fugitive from Congress",
              "Safe from prison but exiled from everything familiar",
              "Family must decide whether to follow",
            ],
            suspicionChange: 25,
            integrityChange: 5,
            tone: "negative",
            historicalNote:
              "Several blacklisted Americans fled to Mexico or Europe. Screenwriter Hugo Butler and his family lived in Mexico for years, while Paul Robeson had his passport revoked to prevent foreign travel.",
          },
        },
      ],
    },
  ],
  bystander: [
    {
      headline: "{shortName}'s Coworker Is Accused",
      scene:
        "The break room at {workplace} goes silent when Ed walks in. Yesterday, the FBI visited asking about him. Ed pours his coffee with shaking hands. Everyone avoids his eyes — except the supervisor, who is watching to see who talks to him.",
      situation:
        "Ed has been a good colleague for five years. {shortName} has no idea if the accusations are true. Talking to Ed could mark {shortName} as an associate. Ignoring him feels cowardly.",
      choices: [
        {
          id: "A",
          text: "Sit with Ed at lunch like you always do. You will not shun a man based on rumors.",
          alignment: "defiant",
          riskLevel: "medium",
          outcome: {
            narrative:
              "{shortName} carries a tray to Ed's table. He looks up, surprised and grateful. They talk about baseball. The supervisor watches and makes a note. By Friday, {shortName} is called in and asked about the 'relationship' with Ed. 'He's my colleague,' {shortName} says. 'We eat lunch.'",
            consequences: [
              "The supervisor notes {shortName}'s association with Ed",
              "Ed feels less alone during his ordeal",
              "{shortName} is now on the periphery of the investigation",
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
              "{shortName} takes lunch to a different table and does not meet Ed's eyes. Ed eats alone for the rest of the week. On Friday, he cleans out his desk without saying goodbye to anyone.",
            consequences: [
              "Ed is isolated and eventually forced out",
              "{shortName} remains safely invisible",
              "The guilt sits like a stone",
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
          text: "Quietly check in with Ed after work, away from {workplace} where no one is watching.",
          alignment: "neutral",
          riskLevel: "low",
          outcome: {
            narrative:
              "{shortName} waits until the parking lot is empty and catches Ed at his car. 'Are you okay?' Ed's eyes fill with tears. He says it is all a misunderstanding. {shortName} offers a few words of support but keeps looking over one shoulder the whole time.",
            consequences: [
              "Ed appreciates the gesture, however small",
              "{shortName} avoids being seen publicly with Ed",
              "The gap between caution and courage feels uncomfortable",
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
      headline: "A Loyalty Petition Circulates at {workplace}",
      scene:
        "A petition appears on the bulletin board at {workplace}. It calls on the employer to 'rid itself of subversive elements' and pledges the signers' loyalty to America. Most of {shortName}'s coworkers have already signed.",
      situation:
        "The petition does not name anyone specifically, but everyone knows who it is aimed at. Signing feels like joining a mob. Not signing feels like painting a target on {shortName}'s back.",
      choices: [
        {
          id: "A",
          text: "Sign the petition. It's just words on paper, and not signing will cause more trouble than it's worth.",
          alignment: "cooperative",
          riskLevel: "low",
          outcome: {
            narrative:
              "{shortName} adds a name to the growing list. It takes three seconds. The rest of the day passes in a haze. A week later, management uses the petition as evidence of 'employee support' when they fire four people.",
            consequences: [
              "{shortName}'s signature is used to legitimize the firings",
              "{shortName} avoids any suspicion",
              "Four coworkers lose their jobs — with {shortName}'s name on the justification",
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
              "{shortName} tells coworkers the petition is being used to fire people for their beliefs, not their work. Some nod in agreement but sign anyway. Management hears about the vocal opposition and calls {shortName} in for 'a chat about attitude.'",
            consequences: [
              "{shortName} is flagged as a potential troublemaker by management",
              "A few coworkers privately say thank you",
              "Job security decreases significantly",
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
          text: "Simply avoid the bulletin board. Don't sign, but don't make a scene about it either.",
          alignment: "neutral",
          riskLevel: "medium",
          outcome: {
            narrative:
              "{shortName} walks past the petition every day, pretending not to notice it. Eventually a coworker asks why {shortName} hasn't signed. 'Just haven't gotten around to it,' {shortName} says. The look in return says: not believed.",
            consequences: [
              "{shortName}'s absence from the petition is eventually noticed",
              "Active participation in either direction is avoided",
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
      headline: "The FBI Wants {shortName} as an Informant",
      scene:
        "An FBI agent meets {shortName} at a coffee shop. He is polite, even friendly. He buys coffee and slides a card across the table with his phone number on it.",
      situation:
        "The agent says they are not interested in {shortName} — they want information about neighbors and coworkers. He says many patriotic Americans help the Bureau this way. All {shortName} has to do is report anything 'unusual.'",
      choices: [
        {
          id: "A",
          text: "Agree to help. It seems harmless, and having the FBI as a friend seems safer than having them as an enemy.",
          alignment: "cooperative",
          riskLevel: "low",
          outcome: {
            narrative:
              "{shortName} takes the card and agrees to call if anything unusual comes up. Over the next few months, {shortName} makes a few calls — reporting a neighbor's late-night visitors, a coworker's magazine subscription. Each call feels smaller than the last. {shortName} is becoming someone unrecognizable.",
            consequences: [
              "{shortName} becomes a confidential FBI informant",
              "Reports affect people who trust {shortName}",
              "The FBI considers {shortName} an asset and leaves {shortName} alone",
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
              "The agent's friendly demeanor cools noticeably. 'That's your right,' he says, but his tone suggests this is not the last {shortName} will hear from the Bureau. The card sits in {shortName}'s pocket. It gets thrown away at home — but the number stays memorized anyway.",
            consequences: [
              "The FBI notes {shortName}'s refusal to cooperate",
              "{shortName} maintains independence",
              "Less friendly visits may follow",
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
          text: "Take the card but don't commit. Say you'll think about it.",
          alignment: "neutral",
          riskLevel: "low",
          outcome: {
            narrative:
              "{shortName} pockets the card with a noncommittal nod. The agent seems satisfied — for now. The card sits in a wallet for weeks, a quiet reminder of the choice not yet made. The agent calls once to check in. {shortName} lets it ring.",
            consequences: [
              "The FBI expects a future commitment from {shortName}",
              "Time is bought but nothing is resolved",
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
      headline: "Orders Arrive to Purge 'Subversive' Material",
      scene:
        "A directive lands on the desk at {workplace}. Materials by authors on a government 'subversive' list must be removed. {shortName}'s supervisor hands over the list with a shrug. 'Orders from above,' he says.",
      situation:
        "{shortName} is told to comply by the end of the week. Some of the names on the list are respected writers. Refusing could cost {shortName} the job. Complying feels like a betrayal of basic principles.",
      choices: [
        {
          id: "A",
          text: "Follow orders and remove the materials. It's not your decision — you're just doing what you're told.",
          alignment: "cooperative",
          riskLevel: "low",
          outcome: {
            narrative:
              "{shortName} removes the items one by one, following the list. A regular who comes by every Tuesday watches in confusion. 'Why are you taking those away?' 'Orders,' {shortName} says, unable to meet the man's eyes.",
            consequences: [
              "Dozens of items are removed as ordered",
              "{shortName} follows instructions and keeps the job",
              "People at {workplace} notice what has disappeared",
            ],
            suspicionChange: -5,
            integrityChange: -15,
            tone: "negative",
            historicalNote:
              "Censorship was widespread during the McCarthy era. The State Department removed books from overseas libraries, and some communities held book burnings.",
          },
        },
        {
          id: "B",
          text: "Refuse publicly. Tell your supervisor and anyone who will listen that purging materials is un-American.",
          alignment: "defiant",
          riskLevel: "high",
          outcome: {
            narrative:
              "{shortName} announces a refusal to remove a single item. A reporter from the local paper, tipped off by a colleague, runs the story. {shortName}'s photograph appears on the front page. The employer fires {shortName} the next day.",
            consequences: [
              "{shortName} is fired from {workplace}",
              "The story receives local and national attention",
              "The purge becomes a public controversy",
            ],
            suspicionChange: 20,
            integrityChange: 10,
            tone: "neutral",
            historicalNote:
              "Some professionals risked their careers to resist censorship. The American Library Association adopted its Freedom to Read statement in 1953, declaring opposition to book banning.",
          },
        },
        {
          id: "C",
          text: "Remove the materials from view but quietly preserve them in a back room instead of destroying them.",
          alignment: "neutral",
          riskLevel: "medium",
          outcome: {
            narrative:
              "{shortName} clears the items as ordered, but instead of disposing of them, stacks them neatly in a storage room. They are technically removed but not destroyed. If anyone asks, they are 'being processed.' It is a small act of preservation.",
            consequences: [
              "The materials are preserved but hidden",
              "{shortName} complies with the letter of the order while subverting its intent",
              "Discovery could mean termination and worse",
            ],
            suspicionChange: 2,
            integrityChange: 3,
            tone: "neutral",
            historicalNote:
              "Some workers quietly preserved banned materials by reclassifying or storing them out of sight. These acts of quiet resistance saved many works from destruction.",
          },
        },
      ],
    },
    {
      headline: "A Family Member's Arrest Makes the Paper",
      scene:
        "The morning paper has a mugshot on page three — {shortName}'s brother-in-law Tony, arrested for distributing Communist literature. {shortName}'s spouse is in the kitchen, crying. The phone rings — it's the supervisor.",
      situation:
        "The boss is calling to ask about {shortName}'s 'family connections.' Any association with a suspected Communist puts {shortName}'s position at risk. The spouse wants loyalty to the family. The boss wants distance — publicly.",
      choices: [
        {
          id: "A",
          text: "Tell the boss you've had nothing to do with your brother-in-law's activities and will cooperate fully.",
          alignment: "cooperative",
          riskLevel: "low",
          outcome: {
            narrative:
              "{shortName} assures the boss of complete loyalty and offers to answer any questions. An affidavit distancing {shortName} from Tony is signed at the kitchen table. A spouse watches in silence. 'He's my brother,' the spouse says quietly. {shortName} does not look up.",
            consequences: [
              "{shortName}'s position at {workplace} is preserved",
              "The marriage is strained by the distance from family",
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
          text: "Stand by Tony publicly. Tell the boss that family comes first and Tony deserves due process.",
          alignment: "defiant",
          riskLevel: "high",
          outcome: {
            narrative:
              "{shortName} tells the boss that Tony is innocent until proven guilty and that family is family. There is a long silence on the phone. 'I respect that,' the boss says, 'but I can't protect you.' {shortName}'s position review is moved up.",
            consequences: [
              "{shortName}'s job is put under review",
              "The spouse is grateful for the loyalty",
              "{shortName}'s career is now at serious risk",
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
          text: "Say as little as possible. Don't denounce Tony, but don't defend him either.",
          alignment: "neutral",
          riskLevel: "medium",
          outcome: {
            narrative:
              "{shortName} tells the boss there isn't much contact with the brother-in-law and would rather not discuss personal family matters. The boss accepts this for now but warns that the matter may come up again. {shortName} hangs up feeling like a tightrope walker.",
            consequences: [
              "The boss is unsatisfied but doesn't push — yet",
              "{shortName}'s position is neither secure nor immediately threatened",
              "The issue will resurface",
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
        "A town hall meeting about school funding has been hijacked by a local McCarthy supporter named Henderson. He stands at the microphone, red-faced, waving a list of 'known Communists' he says are teaching the children.",
      situation:
        "Henderson points at the school principal, Mrs. Ortiz, and demands she be fired. The crowd is agitated. Mrs. Ortiz, who has served the school for 15 years, stands frozen near the back. Someone shouts, 'Are you going to let Communists teach our kids?' The room looks around for someone — anyone — to say something.",
      choices: [
        {
          id: "A",
          text: "Stand up and defend Mrs. Ortiz. Tell the crowd that Henderson is spreading fear, not facts.",
          alignment: "defiant",
          riskLevel: "high",
          outcome: {
            narrative:
              "{shortName} stands and speaks — voice cracking at first, then steadying. 'Mrs. Ortiz has taught our children for fifteen years. This man has a list, but I've never seen him at a single school event.' The room splits — some applaud, others boo. Henderson turns. 'And who are you? What are you hiding?'",
            consequences: [
              "Henderson adds {shortName}'s name to his informal list",
              "Mrs. Ortiz thanks {shortName} afterward with tears in her eyes",
              "Some neighbors admire the courage; others begin to avoid {shortName}",
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
              "{shortName} sits in a folding chair and stares at both hands while Henderson rages. Mrs. Ortiz looks around the room for support and finds only averted eyes. The school board votes to suspend her pending an investigation. The drive home is silent.",
            consequences: [
              "Mrs. Ortiz is suspended from her position",
              "{shortName} remains invisible and safe",
              "The culture of fear in the town grows stronger",
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
              "After the meeting, {shortName} catches Mrs. Ortiz in the parking lot. She is shaking. {shortName} gives her the name of an attorney who has handled these cases. 'Thank you,' she whispers. It is not enough — but it is something.",
            consequences: [
              "Mrs. Ortiz has legal support for her defense",
              "{shortName} avoids public exposure",
              "The help is private but meaningful",
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
