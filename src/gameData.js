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
    {
      name: "Vivian Lazar",
      shortName: "Vivian",
      age: 31,
      occupation: "Jazz Singer",
      workplace: "the club",
      location: "New York, New York",
      backstory:
        "Vivian sang at benefit concerts for labor unions and civil rights organizations throughout the late 1940s. She never joined any political party, but her name appeared on the program for a fundraiser later identified as a Communist front. Now the nightclub owners who once fought to book her won't return her calls.",
      loyaltySuspicion: 30,
      integrity: 72,
      archetype: "informer",
      archetypeHint:
        "You performed alongside people whose names are now on the blacklist. Telling investigators who organized those concerts could clear your name.",
    },
    {
      name: "Harold Rosen",
      shortName: "Harold",
      age: 52,
      occupation: "Government Clerk",
      workplace: "the agency",
      location: "Washington, D.C.",
      backstory:
        "Harold has worked for the State Department for twenty-three years, processing visa applications with quiet efficiency. In 1938, he donated ten dollars to the Abraham Lincoln Brigade, a group that fought fascism in Spain — a cause that now marks him as a security risk under President Truman's loyalty program.",
      loyaltySuspicion: 35,
      integrity: 68,
      archetype: "informer",
      archetypeHint:
        "Your loyalty board hearing is in three weeks. Naming other State Department employees with 'questionable' associations could save your pension.",
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
    {
      name: "Rev. Thomas Carter",
      shortName: "Thomas",
      age: 48,
      occupation: "Methodist Minister",
      workplace: "the church",
      location: "Baltimore, Maryland",
      backstory:
        "Thomas has preached against racial segregation and economic injustice for two decades. His sermons quoting the Gospel's call to serve the poor have drawn the attention of HUAC investigators, who see his social justice work as evidence of Communist influence within the clergy.",
      loyaltySuspicion: 30,
      integrity: 92,
      archetype: "resister",
      archetypeHint:
        "You answer to God, not to a congressional committee. But your congregation is frightened, and the bishop is urging caution.",
    },
    {
      name: "Rosa Gutierrez",
      shortName: "Rosa",
      age: 37,
      occupation: "Union Organizer",
      workplace: "the union hall",
      location: "San Antonio, Texas",
      backstory:
        "Rosa organized garment workers in the Rio Grande Valley, fighting for fair wages and safe conditions. The union's success drew national attention — and HUAC's scrutiny. As a Mexican-American woman, she faces both political persecution and racial prejudice. The committee wants her membership rolls.",
      loyaltySuspicion: 35,
      integrity: 88,
      archetype: "resister",
      archetypeHint:
        "Your union members trusted you with their names. The committee demands those names. Handing them over would betray everyone who fought beside you.",
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
    {
      name: "Nurse Betty Halverson",
      shortName: "Betty",
      age: 27,
      occupation: "Hospital Nurse",
      workplace: "the hospital",
      location: "Minneapolis, Minnesota",
      backstory:
        "Betty graduated from nursing school in 1950 and works the night shift at Hennepin County General. She has never been political — her life is bedpans, charts, and double shifts. But her roommate from nursing school just appeared on the front page, accused of passing information to Soviet agents. The FBI wants to talk.",
      loyaltySuspicion: 10,
      integrity: 82,
      archetype: "bystander",
      archetypeHint:
        "You barely knew your roommate's politics. But guilt by association doesn't require guilt — just association.",
    },
    {
      name: "George Nakamura",
      shortName: "George",
      age: 44,
      occupation: "Hardware Store Owner",
      workplace: "the store",
      location: "Sacramento, California",
      backstory:
        "George spent three years in a Japanese internment camp during the war, then rebuilt his life from nothing. He now owns a small hardware store and coaches Little League. When a local veterans' group begins compiling a list of 'un-American' business owners, George recognizes the pattern all too well.",
      loyaltySuspicion: 12,
      integrity: 78,
      archetype: "bystander",
      archetypeHint:
        "You survived the internment camps. You know what happens when a government decides certain people are the enemy. But speaking up could cost you everything — again.",
    },
  ],
};

// ─── SCENARIOS ──────────────────────────────────────────────────────────────
// 10 per archetype. Each playthrough randomly picks 4.
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
            storyTag: "named_names",
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
            storyTag: "defied_committee",
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
            storyTag: "hedged_bets",
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
            storyTag: "named_names",
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
            storyTag: "defied_committee",
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
              "The boss pencils a question mark next to {shortName}'s name on the list",
              "No coworkers are fired — this week",
              "A second meeting is scheduled for next Tuesday, and the boss won't accept ignorance twice",
            ],
            suspicionChange: 5,
            integrityChange: -3,
            tone: "neutral",
            historicalNote:
              "Playing ignorant was a common survival strategy during the Red Scare, but it often only postponed the moment of reckoning rather than preventing it.",
            storyTag: "hedged_bets",
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
            storyTag: "named_names",
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
            storyTag: "defied_committee",
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
              "The agents leave with a notebook full of nothing — but they note {shortName}'s evasiveness",
              "David remains free, unaware of how close the FBI came to his door",
              "Two weeks later the agents return, this time with David's photograph and more specific questions",
            ],
            suspicionChange: 5,
            integrityChange: -2,
            tone: "neutral",
            historicalNote:
              "Some witnesses gave deliberately unhelpful testimony as a middle ground — technically cooperating without providing actionable information. This strategy carried its own risks.",
            storyTag: "hedged_bets",
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
            storyTag: "named_names",
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
            storyTag: "defied_committee",
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
              "The denunciation runs in the Sunday paper — tepid enough to satisfy no one",
              "An investigator named Collins calls to schedule a Tuesday meeting at the federal building",
              "The colleague says the general statement 'isn't enough' and stops returning calls",
            ],
            suspicionChange: 0,
            integrityChange: -8,
            tone: "neutral",
            historicalNote:
              "Some actors and writers tried to find middle ground by denouncing communism in general while refusing to name individuals. This strategy rarely satisfied the committees.",
            storyTag: "hedged_bets",
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
            storyTag: "named_names",
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
            storyTag: "resisted_pressure",
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
              "Mrs. Alvarez continues teaching her Monday poetry class — for now",
              "Bill walks away unsatisfied and is seen the next morning talking to the school board chairman",
              "{shortName} catches Mrs. Alvarez's eye at the grocery store and can't hold the gaze",
            ],
            suspicionChange: 2,
            integrityChange: -2,
            tone: "neutral",
            historicalNote:
              "The culture of suspicion extended into every neighborhood. Ordinary Americans faced daily choices about whether to report, ignore, or protect their neighbors.",
            storyTag: "hedged_bets",
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
            storyTag: "named_names",
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
            storyTag: "defied_committee",
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
            storyTag: "hedged_bets",
          },
        },
      ],
    },
    {
      headline: "A Childhood Friend Writes {shortName} a Letter",
      scene:
        "A letter arrives with no return address. Inside, {shortName}'s childhood friend Danny — now living under a false name in Canada — begs for help. He needs money wired to a Western Union in Montreal. The FBI may be monitoring {shortName}'s mail.",
      situation:
        "Danny and {shortName} grew up on the same block. Danny was always the idealist — attending rallies, handing out flyers. Now he's a fugitive. Helping him is a federal offense. But he was {shortName}'s closest friend for twenty years.",
      choices: [
        {
          id: "A",
          text: "Turn the letter over to the FBI. It proves you have nothing to hide and are willing to cooperate.",
          alignment: "cooperative",
          riskLevel: "low",
          outcome: {
            narrative:
              "{shortName} places the letter in an envelope and drives it to the FBI field office. The agent reads it carefully, nods, and asks if Danny ever mentioned any other names. {shortName} watches them photocopy the letter, knowing Danny will soon have nowhere left to run.",
            consequences: [
              "Danny's location is compromised",
              "{shortName} demonstrates loyalty to investigators",
              "The FBI considers {shortName} a cooperative witness",
            ],
            suspicionChange: -15,
            integrityChange: -18,
            tone: "negative",
            historicalNote:
              "Many friendships were destroyed during the Red Scare. Some people informed on childhood friends, college roommates, and even family members to protect themselves.",
            storyTag: "named_names",
          },
        },
        {
          id: "B",
          text: "Burn the letter immediately. You never received it.",
          alignment: "defiant",
          riskLevel: "high",
          outcome: {
            narrative:
              "{shortName} holds the letter over the kitchen sink, strikes a match, and watches Danny's handwriting curl into ash. If the FBI was monitoring the mail, they already know. But they can't prove what a pile of ash once said.",
            consequences: [
              "The letter is gone, but the postmark from Montreal is already logged in an FBI mail cover report",
              "Danny is safe — he'll send another letter in three months, from a different city",
              "{shortName} flinches every time the mailman comes to the door",
            ],
            suspicionChange: 12,
            integrityChange: 8,
            tone: "neutral",
            historicalNote:
              "The FBI's mail surveillance program, known as 'mail covers,' monitored correspondence of suspected Communists and their associates throughout the 1950s.",
            storyTag: "defied_committee",
          },
        },
        {
          id: "C",
          text: "Send the money anonymously through a third party. Help Danny without creating a direct connection.",
          alignment: "neutral",
          riskLevel: "medium",
          outcome: {
            narrative:
              "{shortName} gives cash to a trusted acquaintance who asks no questions. The money reaches Montreal three days later. Danny is safe for now. But {shortName} has entered a conspiracy, however small, and the acquaintance now knows something dangerous.",
            consequences: [
              "Danny wires a one-word reply through the acquaintance: 'Safe'",
              "The acquaintance — a bartender named Sal — now knows enough to destroy {shortName} if he ever talks",
              "{shortName} has committed a federal offense: aiding a fugitive across international lines",
            ],
            suspicionChange: 5,
            integrityChange: -3,
            tone: "neutral",
            historicalNote:
              "Underground networks helped some blacklisted Americans escape to Mexico, Canada, and Europe. These networks relied on ordinary people willing to take extraordinary risks.",
            storyTag: "hedged_bets",
          },
        },
      ],
    },
    {
      headline: "{shortName} Is Offered a Deal at the Hearing",
      scene:
        "During a recess in the hearing, the committee's chief counsel pulls {shortName}'s lawyer aside. When the lawyer returns, his face is pale. 'They're offering a deal,' he says. 'Executive session. Closed doors. Just confirm five names they already have.'",
      situation:
        "The names are people the committee has already identified. Confirming them would add little new information — but it would make {shortName} a cooperative witness, eligible for clearance. Refusing means a public hearing with cameras and reporters.",
      choices: [
        {
          id: "A",
          text: "Accept the deal. If they already have the names, confirming them is a formality — and it saves your career.",
          alignment: "cooperative",
          riskLevel: "low",
          outcome: {
            narrative:
              "{shortName} nods. In the closed session, the five names come easily. The committee counsel shakes {shortName}'s hand afterward. 'You did the right thing.' But walking to the car, {shortName} realizes that 'confirming' and 'informing' are the same act dressed in different clothes.",
            consequences: [
              "Five people are formally confirmed as suspects",
              "{shortName}'s name is quietly cleared",
              "The moral distinction between confirming and informing dissolves",
            ],
            suspicionChange: -18,
            integrityChange: -15,
            tone: "negative",
            historicalNote:
              "HUAC often used 'executive sessions' to pressure reluctant witnesses into naming names, promising confidentiality that was rarely maintained.",
            storyTag: "named_names",
          },
        },
        {
          id: "B",
          text: "Reject the deal. If naming names is wrong in public, it's wrong behind closed doors too.",
          alignment: "defiant",
          riskLevel: "high",
          outcome: {
            narrative:
              "'No deal,' {shortName} tells the lawyer. The public hearing begins the next morning. The cameras flash. The questions are hostile. {shortName}'s name makes the evening news. But the five names stay safe — at least from {shortName}'s lips.",
            consequences: [
              "{shortName} faces a hostile public hearing",
              "The five people are not confirmed by {shortName}",
              "Media coverage damages {shortName}'s reputation",
            ],
            suspicionChange: 20,
            integrityChange: 10,
            tone: "negative",
            historicalNote:
              "Director Elia Kazan's decision to name names in a closed session in 1952 haunted him for the rest of his life, provoking a famous controversy when he received an honorary Oscar in 1999.",
            storyTag: "defied_committee",
          },
        },
        {
          id: "C",
          text: "Ask the lawyer to negotiate — you'll testify about yourself, but not about anyone else, in exchange for no contempt charges.",
          alignment: "neutral",
          riskLevel: "medium",
          outcome: {
            narrative:
              "The negotiation takes two hours. {shortName} testifies about personal involvement — meetings attended, pamphlets read, donations made. It's humiliating but contained. The committee accepts it, for now. But the counsel warns the lawyer: 'We may call your client back.'",
            consequences: [
              "{shortName} admits to personal involvement publicly",
              "No names are given, but the door isn't fully closed",
              "The committee reserves the right to recall {shortName}",
            ],
            suspicionChange: 8,
            integrityChange: -5,
            tone: "neutral",
            historicalNote:
              "Playwright Arthur Miller took this approach in 1956, testifying about himself but refusing to name others. He was convicted of contempt, though the conviction was later overturned.",
            storyTag: "hedged_bets",
          },
        },
      ],
    },
    {
      headline: "{shortName}'s Spouse Threatens to Leave",
      scene:
        "The investigation has consumed everything. {shortName} comes home to find a suitcase by the door. 'I can't live like this anymore,' the words hang in the air. 'Either you cooperate and end this, or I'm taking the children to my mother's.'",
      situation:
        "The strain of surveillance, lost income, and social isolation has broken the family apart. Cooperating with the committee would likely end the investigation and save the marriage. But it would mean betraying former friends and colleagues.",
      choices: [
        {
          id: "A",
          text: "Promise to cooperate. Your family comes first — you'll call the committee's lawyer tomorrow.",
          alignment: "cooperative",
          riskLevel: "low",
          outcome: {
            narrative:
              "{shortName} makes the call. Within a week, a meeting is arranged. The names come out over coffee in a government office. The investigation ends. The family stays together. But at dinner, {shortName} finds it difficult to meet anyone's eyes, knowing the cost of this peace.",
            consequences: [
              "The family remains intact",
              "Former colleagues are named to investigators",
              "{shortName} carries a private shame that never fully lifts",
            ],
            suspicionChange: -12,
            integrityChange: -20,
            tone: "negative",
            historicalNote:
              "Many who cooperated with HUAC described the pressure from family members as the deciding factor. The personal toll of the investigations extended far beyond the individuals targeted.",
            storyTag: "named_names",
          },
        },
        {
          id: "B",
          text: "Let them go. You won't buy your family's safety with someone else's freedom.",
          alignment: "defiant",
          riskLevel: "high",
          outcome: {
            narrative:
              "The car pulls away. The house is quiet. {shortName} sits at the kitchen table for a long time. The decision feels both terrible and necessary. In the weeks that follow, the loneliness is crushing — but so would have been the alternative.",
            consequences: [
              "The family separates",
              "{shortName}'s principles remain intact",
              "The personal cost of resistance becomes devastatingly real",
            ],
            suspicionChange: 10,
            integrityChange: 12,
            tone: "negative",
            historicalNote:
              "The Red Scare destroyed countless marriages and families. Some spouses supported the resistance; others couldn't bear the consequences. Both choices carried lifelong costs.",
            storyTag: "defied_committee",
          },
        },
        {
          id: "C",
          text: "Ask for more time. Beg for patience. Say you're trying to find another way out.",
          alignment: "neutral",
          riskLevel: "medium",
          outcome: {
            narrative:
              "The suitcase goes back in the closet, but the tension doesn't leave. {shortName} has bought a few more weeks, perhaps. The committee's deadline hasn't changed. Now there are two clocks ticking — one in Washington, one at home.",
            consequences: [
              "The suitcase goes back in the closet — but it stays packed",
              "The children sense the tension and start having nightmares",
              "The committee's next hearing date is circled on the kitchen calendar in red",
            ],
            suspicionChange: 3,
            integrityChange: -2,
            tone: "neutral",
            historicalNote:
              "The psychological toll of prolonged investigation was immense. Many targets reported anxiety, insomnia, and depression as the uncertainty dragged on for months or years.",
            storyTag: "hedged_bets",
          },
        },
      ],
    },
    {
      headline: "The Blacklist Comes for {shortName}'s Livelihood",
      scene:
        "A phone call from {shortName}'s employer is brief and apologetic. 'It's out of my hands.' {shortName} has been placed on the industry blacklist. No one at {workplace} will hire a suspected Communist sympathizer. The savings will last two months, maybe three.",
      situation:
        "A well-connected friend offers a lifeline: a meeting with a fixer who can get {shortName}'s name removed from the blacklist — for a price. Not money. Names. Three former colleagues who were at those meetings in the 1940s.",
      choices: [
        {
          id: "A",
          text: "Meet the fixer. Three names to save your livelihood seems like a grim but practical trade.",
          alignment: "cooperative",
          riskLevel: "low",
          outcome: {
            narrative:
              "The meeting happens in a hotel lobby. The fixer writes the names on a napkin and slides it into his pocket. Two weeks later, {shortName}'s phone rings — a job offer. The relief is overwhelming. The guilt arrives later, slowly, and stays.",
            consequences: [
              "{shortName} is removed from the blacklist",
              "Three former colleagues face new investigations",
              "Employment resumes, but trust in the industry is shattered",
            ],
            suspicionChange: -15,
            integrityChange: -18,
            tone: "negative",
            historicalNote:
              "The entertainment industry blacklist was enforced not by law but by informal agreement among studio executives, network heads, and sponsors. 'Fixers' who claimed to clear names operated in a gray market of fear.",
            storyTag: "named_names",
          },
        },
        {
          id: "B",
          text: "Refuse the meeting. Find work outside your field — drive a cab, wait tables, anything. You won't sell anyone out.",
          alignment: "defiant",
          riskLevel: "high",
          outcome: {
            narrative:
              "{shortName} hangs up the phone and stares at the classifieds. A dishwashing job downtown. Night watchman at a warehouse. It's humiliating after years of professional work. But no one else gets hurt. The first shift starts at midnight.",
            consequences: [
              "{shortName} loses a professional career",
              "No former colleagues are endangered",
              "A new, diminished life begins from scratch",
            ],
            suspicionChange: 8,
            integrityChange: 10,
            tone: "neutral",
            historicalNote:
              "Many blacklisted professionals took menial jobs to survive. Some writers worked under pseudonyms. Dalton Trumbo, one of the Hollywood Ten, wrote screenplays under fake names for a fraction of his former pay.",
            storyTag: "defied_committee",
          },
        },
        {
          id: "C",
          text: "Take the meeting but give only names of people who have already been publicly identified. Don't add anyone new to the list.",
          alignment: "neutral",
          riskLevel: "medium",
          outcome: {
            narrative:
              "The fixer listens, nods, and says he'll 'see what he can do.' A month passes. Then a partial reprieve — some freelance work, nothing steady. {shortName} is off the worst of the blacklist but not fully cleared. The fixer calls again: 'I need fresh names for the full clearance.'",
            consequences: [
              "A few freelance assignments trickle in — enough to cover rent, not enough to feel safe",
              "The fixer calls on a Wednesday: 'I need three fresh names for the full clearance. You know how this works.'",
              "{shortName} realizes that half-measures only buy half-freedom",
            ],
            suspicionChange: 0,
            integrityChange: -8,
            tone: "neutral",
            historicalNote:
              "The blacklist operated on a spectrum. Some were 'graylisted' — not fully blacklisted but limited to smaller jobs. Climbing back often required increasingly larger acts of cooperation.",
            storyTag: "hedged_bets",
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
              "The committee chairman tells the press that {shortName} was 'forthcoming but incomplete'",
              "A contempt vote fails by a single margin — but the file stays open",
              "{shortName}'s employer receives a hand-delivered letter from the committee the next morning",
            ],
            suspicionChange: 10,
            integrityChange: 3,
            tone: "neutral",
            historicalNote:
              "Playwright Arthur Miller testified before HUAC in 1956, discussing his own past but refusing to name others. He was convicted of contempt of Congress, though the conviction was later overturned.",
            storyTag: "sought_middle_ground",
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
            storyTag: "defied_committee",
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
            storyTag: "defied_committee",
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
            storyTag: "defied_committee",
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
              "{shortName}'s desk remains, but two empty offices down the hall belong to colleagues who refused",
              "The written protest is filed in a cabinet no one opens — it changes nothing",
              "A colleague who was fired leaves a note in {shortName}'s mailbox: 'I thought you were one of us'",
            ],
            suspicionChange: -5,
            integrityChange: -10,
            tone: "neutral",
            historicalNote:
              "Many employees signed loyalty oaths while privately disagreeing, reasoning that they could do more good by staying in their positions than by sacrificing their careers on principle.",
            storyTag: "sought_middle_ground",
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
              "{shortName} walks out of {workplace} for the last time carrying twenty-two years of work in a cardboard box",
              "A smaller organization in a neighboring state offers a position at half the salary — it feels like exile",
              "The resignation makes page six of the local paper; colleagues clip it and say nothing",
            ],
            suspicionChange: 5,
            integrityChange: 5,
            tone: "neutral",
            historicalNote:
              "Some professionals quietly relocated to smaller institutions or left the country entirely rather than face loyalty oaths. Many ended up in Mexico, England, or Canada.",
            storyTag: "stood_ground",
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
            storyTag: "defied_committee",
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
              "Richard checks into Mrs. Garza's boarding house on Maple Street under a false name",
              "{shortName}'s forty dollars buys three weeks of survival — then Richard will need more",
              "The envelope with the money has {shortName}'s fingerprints on it, sitting in Richard's coat pocket",
            ],
            suspicionChange: 3,
            integrityChange: 0,
            tone: "neutral",
            historicalNote:
              "Underground networks of sympathizers quietly funneled money and resources to blacklisted individuals. These acts of solidarity were small but meaningful.",
            storyTag: "sought_middle_ground",
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
            storyTag: "capitulated",
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
            storyTag: "defied_committee",
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
              "The lawyer calls every morning at eight asking for a decision — each call shorter and more impatient than the last",
              "The committee's chief counsel sends a letter: {shortName} has fourteen days to respond or face a public subpoena",
              "At 3 a.m., {shortName} writes two lists on a napkin — reasons to cooperate and reasons not to — and throws both away",
            ],
            suspicionChange: 5,
            integrityChange: -5,
            tone: "neutral",
            historicalNote:
              "The argument that naming 'already known' individuals caused no harm was common but misleading. Each additional witness who named someone strengthened the case against them.",
            storyTag: "sought_middle_ground",
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
            storyTag: "defied_committee",
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
            storyTag: "defied_committee",
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
              "By Thursday, a new scandal pushes {shortName}'s name off the front page",
              "The landlord leaves a note under the door asking to 'discuss the lease' — silence didn't make {shortName} invisible",
              "The accusation is now clipped and filed in an FBI folder that will follow {shortName} for decades",
            ],
            suspicionChange: 5,
            integrityChange: 0,
            tone: "neutral",
            historicalNote:
              "For many accused individuals, the publication of their name was itself the punishment. Employment, social standing, and personal relationships were damaged regardless of whether formal charges were ever filed.",
            storyTag: "sought_middle_ground",
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
              "The committee's press office calls the statement 'carefully worded' — which everyone understands as an accusation",
              "Supporters wish {shortName} had said more; critics say the statement proves there's something to hide",
              "{shortName}'s lawyer says it was the right move, but his voice lacks conviction",
            ],
            suspicionChange: 3,
            integrityChange: -5,
            tone: "neutral",
            historicalNote:
              "Carefully worded public statements were a common but often ineffective strategy. The committee and the press preferred clear cooperation or dramatic defiance to ambiguity.",
            storyTag: "sought_middle_ground",
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
            storyTag: "defied_committee",
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
              "The lawyer brings back a list of names — {shortName} recognizes every face and cannot circle a single one",
              "The contempt vote is postponed one week while the committee waits for {shortName}'s answer",
              "{shortName} drives past the federal courthouse every day on the way to work, imagining what the inside of a cell looks like",
            ],
            suspicionChange: 8,
            integrityChange: -8,
            tone: "neutral",
            historicalNote:
              "The psychological pressure of facing prison led many witnesses to break. Director Edward Dmytryk, initially one of the Hollywood Ten, eventually cooperated and named twenty-six people.",
            storyTag: "sought_middle_ground",
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
            storyTag: "defied_committee",
          },
        },
      ],
    },
    {
      headline: "{shortName}'s Passport Is Revoked",
      scene:
        "A letter from the State Department arrives: {shortName}'s passport application has been denied on national security grounds. A speaking engagement in London, a possible teaching position in Paris — all closed off. The borders of {shortName}'s world have suddenly shrunk.",
      situation:
        "The State Department offers an appeal process, but it requires signing a sworn affidavit of loyalty and submitting to an interview about past associations. {shortName}'s lawyer says the appeal is unlikely to succeed without 'demonstrating cooperation.'",
      choices: [
        {
          id: "A",
          text: "Challenge the revocation in court. Make it a public case about the right to travel.",
          alignment: "defiant",
          riskLevel: "high",
          outcome: {
            narrative:
              "{shortName}'s lawyers file suit in federal court. The case draws attention — newspaper editorials, letters from abroad. The State Department digs in. The legal battle will take years and cost thousands. But {shortName}'s name becomes a symbol of the fight for civil liberties.",
            consequences: [
              "A landmark legal challenge begins",
              "Years of litigation ahead with uncertain outcome",
              "{shortName} becomes a public figure in the civil liberties movement",
            ],
            suspicionChange: 18,
            integrityChange: 10,
            tone: "neutral",
            historicalNote:
              "Paul Robeson's passport was revoked in 1950 and not returned until 1958 after the Supreme Court ruled in Kent v. Dulles that the right to travel is protected by the Fifth Amendment.",
            storyTag: "defied_committee",
          },
        },
        {
          id: "B",
          text: "Submit the affidavit and attend the interview. You need to travel for work, and this is the only way.",
          alignment: "cooperative",
          riskLevel: "medium",
          outcome: {
            narrative:
              "The interview room is small and windowless. The questions are pointed: 'Were you ever a member? Do you know anyone who is?' {shortName} answers carefully, affirming loyalty, denying current associations. The passport arrives three months later. The cost is invisible but real.",
            consequences: [
              "{shortName}'s travel rights are restored",
              "A sworn loyalty affidavit is now on file",
              "The precedent of government control over travel is accepted",
            ],
            suspicionChange: -10,
            integrityChange: -12,
            tone: "negative",
            historicalNote:
              "The State Department revoked or denied passports to hundreds of Americans during the McCarthy era, including scientists, artists, and activists deemed security risks.",
            storyTag: "capitulated",
          },
        },
        {
          id: "C",
          text: "Accept it quietly. Focus on work you can do at home and wait for the political climate to change.",
          alignment: "neutral",
          riskLevel: "low",
          outcome: {
            narrative:
              "{shortName} puts the letter in a drawer and tries to move forward. The London engagement is cancelled. The Paris opportunity goes to someone else. Life contracts, becomes smaller. Friends abroad write asking why {shortName} never visits. The replies grow shorter.",
            consequences: [
              "The London lecture goes to a younger colleague who signed the loyalty oath without hesitation",
              "A letter from a professor in Paris — 'We were so looking forward to your visit' — sits unanswered on the desk",
              "{shortName} starts taking long drives to the coast, staring at the ocean that now marks the edge of a shrinking world",
            ],
            suspicionChange: 5,
            integrityChange: -3,
            tone: "neutral",
            historicalNote:
              "Many Americans quietly accepted passport restrictions rather than risk the exposure of an appeal. The chilling effect extended far beyond those formally denied travel.",
            storyTag: "sought_middle_ground",
          },
        },
      ],
    },
    {
      headline: "A Former Ally Testifies Against {shortName}",
      scene:
        "The morning paper carries a headline that turns {shortName}'s stomach. A former colleague — someone {shortName} trusted — has testified before the committee and named {shortName} as a Communist Party member. The phone begins ringing. Reporters want a comment.",
      situation:
        "{shortName} is now publicly named. The accusation is false — or at best a distortion. But denying it means attacking a former friend. The committee has offered {shortName} a chance to 'respond' by testifying. {shortName}'s lawyer warns this is a trap.",
      choices: [
        {
          id: "A",
          text: "Testify and directly contradict the accusation. Set the record straight under oath.",
          alignment: "neutral",
          riskLevel: "medium",
          outcome: {
            narrative:
              "{shortName} sits before the committee and speaks firmly: the testimony was false, the characterization distorted. But the committee isn't interested in corrections — they pivot immediately to new questions. 'If you weren't a member, who was?' The trap springs shut.",
            consequences: [
              "{shortName} publicly denies the accusation",
              "The committee uses the testimony to press for new names",
              "Public perception is divided — some believe the denial, others don't",
            ],
            suspicionChange: 10,
            integrityChange: 3,
            tone: "neutral",
            historicalNote:
              "Appearing before HUAC to deny accusations often backfired. The committee frequently used denial testimony as leverage to demand names of 'actual' Communists.",
            storyTag: "sought_middle_ground",
          },
        },
        {
          id: "B",
          text: "Refuse to testify. Issue a public statement calling the accusation a lie and the committee unconstitutional.",
          alignment: "defiant",
          riskLevel: "high",
          outcome: {
            narrative:
              "{shortName}'s statement is reprinted in sympathetic newspapers: 'I will not dignify a kangaroo court with my presence.' The committee votes to cite {shortName} for contempt. Supporters rally, but so do enemies. The battle lines harden.",
            consequences: [
              "A contempt citation becomes likely",
              "{shortName}'s public statement rallies supporters",
              "The former ally's betrayal goes unanswered in the official record",
            ],
            suspicionChange: 22,
            integrityChange: 10,
            tone: "negative",
            historicalNote:
              "Lillian Hellman's famous letter to HUAC declared: 'I cannot and will not cut my conscience to fit this year's fashions.' She avoided naming names but was blacklisted for years.",
            storyTag: "defied_committee",
          },
        },
        {
          id: "C",
          text: "Reach out to the former ally privately. Try to understand why they named you and ask them to recant.",
          alignment: "neutral",
          riskLevel: "medium",
          outcome: {
            narrative:
              "The meeting happens in a park, both wearing sunglasses. The former ally is ashamed but firm: 'They had my name. I had to give them something.' The plea to recant is met with fear: 'They'll come after me again.' {shortName} leaves understanding the machine better — and hating it more.",
            consequences: [
              "The former ally slides the sunglasses back on and walks away without looking back — that friendship is a ghost now",
              "{shortName} sees clearly how the machine works: the committee breaks one person, who breaks the next, who breaks the next",
              "The accusation remains in the Congressional Record, uncorrected, where historians will read it for decades",
            ],
            suspicionChange: 8,
            integrityChange: 0,
            tone: "neutral",
            historicalNote:
              "The chain of informing was self-perpetuating. Those who named names often did so because they were named first. The committee weaponized personal relationships to generate an ever-expanding web of accusations.",
            storyTag: "sought_middle_ground",
          },
        },
      ],
    },
    {
      headline: "{shortName}'s Children Face Consequences at School",
      scene:
        "The children come home in tears. A classmate told them their parent is a 'Red.' The teacher separated them at lunch. Other parents have asked that the children be moved to a different classroom. The school principal wants a meeting.",
      situation:
        "The investigation has reached {shortName}'s family. Protecting the children means either fighting the school publicly — which will draw more attention — or pulling them out and finding an alternative. Or giving the committee what they want to make it all stop.",
      choices: [
        {
          id: "A",
          text: "March into the school and demand the principal protect your children from harassment.",
          alignment: "defiant",
          riskLevel: "high",
          outcome: {
            narrative:
              "{shortName} stands in the principal's office, voice shaking with anger: 'These are children.' The principal is sympathetic but powerless. 'Parents are calling. The school board is involved.' The meeting achieves nothing except another item in the growing file.",
            consequences: [
              "The confrontation is noted by school administrators",
              "The children's situation does not improve",
              "{shortName}'s reputation as 'difficult' grows",
            ],
            suspicionChange: 12,
            integrityChange: 8,
            tone: "negative",
            historicalNote:
              "Children of accused Americans suffered enormously. Many were bullied, ostracized, and forced to change schools. Some didn't learn the full truth about their parents' ordeal until decades later.",
            storyTag: "defied_committee",
          },
        },
        {
          id: "B",
          text: "Quietly transfer the children to a new school where no one knows the family name.",
          alignment: "neutral",
          riskLevel: "low",
          outcome: {
            narrative:
              "New uniforms, new backpacks, a twenty-minute bus ride across town. The children ask why they have to leave their friends. {shortName} has no good answer. At the new school, they are told to use their mother's maiden name. It works, for now. But the lie weighs on everyone.",
            consequences: [
              "The children are shielded temporarily",
              "The family lives under a partial false identity",
              "The dislocation adds to the family's emotional burden",
            ],
            suspicionChange: 0,
            integrityChange: -5,
            tone: "neutral",
            historicalNote:
              "Some blacklisted families moved to new cities and assumed new identities to protect their children. The secrecy created lasting psychological scars across generations.",
            storyTag: "sought_middle_ground",
          },
        },
        {
          id: "C",
          text: "This is the breaking point. Call the committee's lawyer and agree to cooperate — anything to protect your children.",
          alignment: "cooperative",
          riskLevel: "low",
          outcome: {
            narrative:
              "The words come out faster than expected. {shortName} is tired — tired of the fight, tired of the fear. The children don't deserve this. Within days, the meeting is arranged. The names are given. The investigation closes. The children return to a normal school life. {shortName} does not.",
            consequences: [
              "The children are protected from further harassment",
              "Former colleagues are named to the committee",
              "{shortName}'s resistance ends in capitulation",
            ],
            suspicionChange: -15,
            integrityChange: -20,
            tone: "negative",
            historicalNote:
              "Actor Sterling Hayden later said his decision to cooperate with HUAC was driven by fear for his family. He called it 'the most shameful thing I ever did' and regretted it for the rest of his life.",
            storyTag: "capitulated",
          },
        },
      ],
    },
    {
      headline: "An Underground Newspaper Asks {shortName} to Write",
      scene:
        "A mimeographed newsletter arrives in a plain envelope. It's an underground publication — uncensored voices challenging McCarthyism. An unsigned note asks {shortName} to contribute an essay. The newsletter circulates secretly among sympathizers nationwide.",
      situation:
        "Writing for the underground press would give {shortName} a voice when every other outlet has gone silent. But if the FBI traces it back, the consequences would be severe. The essay could inspire others — or it could become evidence in a prosecution.",
      choices: [
        {
          id: "A",
          text: "Write the essay under a pseudonym. Your words matter, and someone needs to speak the truth.",
          alignment: "defiant",
          riskLevel: "high",
          outcome: {
            narrative:
              "{shortName} writes through the night. The essay is angry and eloquent — a defense of conscience, a condemnation of fear. It appears in the next issue under the name 'Prometheus.' Copies circulate in union halls, church basements, and college dormitories. The FBI opens a new file: 'Identify Prometheus.'",
            consequences: [
              "The essay inspires readers across the country",
              "The FBI launches an investigation to identify the author",
              "{shortName} has a secret second life as a dissident voice",
            ],
            suspicionChange: 8,
            integrityChange: 12,
            tone: "neutral",
            historicalNote:
              "Underground newspapers like 'I.F. Stone's Weekly' and various mimeographed newsletters provided alternative viewpoints during the McCarthy era, often at great personal risk to their publishers.",
            storyTag: "defied_committee",
          },
        },
        {
          id: "B",
          text: "Decline. The risk is too great, and you can't help anyone from prison.",
          alignment: "neutral",
          riskLevel: "low",
          outcome: {
            narrative:
              "{shortName} burns the newsletter and the note. It's the prudent choice. But that night, lying in bed, the words that could have been written loop endlessly. Someone else will write the essay, or no one will. {shortName} wonders which is worse.",
            consequences: [
              "The next issue of the newsletter runs with a blank space where {shortName}'s essay would have been",
              "A note at the bottom reads: 'A contributor was unable to participate. We understand.'",
              "Months later, {shortName} finds the burned note's ashes still in the sink — a small monument to the words unwritten",
            ],
            suspicionChange: 0,
            integrityChange: -5,
            tone: "neutral",
            historicalNote:
              "Self-censorship was perhaps McCarthyism's most effective weapon. Many who were never investigated still chose silence over the risk of attention.",
            storyTag: "sought_middle_ground",
          },
        },
        {
          id: "C",
          text: "Write the essay under your real name. If you believe these words, stand behind them openly.",
          alignment: "defiant",
          riskLevel: "high",
          outcome: {
            narrative:
              "The essay runs with {shortName}'s full name — a declaration of defiance. The reaction is immediate. Supporters send letters of admiration. The committee announces it will investigate the newsletter's distribution. {shortName} becomes a target, but also a symbol.",
            consequences: [
              "{shortName} becomes a public voice against McCarthyism",
              "The committee escalates its investigation",
              "The essay becomes a rallying point for civil liberties defenders",
            ],
            suspicionChange: 25,
            integrityChange: 12,
            tone: "negative",
            historicalNote:
              "Some resisters chose to be public about their defiance. Pete Seeger continued performing openly, and Arthur Miller wrote 'The Crucible' as a thinly veiled allegory of McCarthyism while under investigation.",
            storyTag: "defied_committee",
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
            storyTag: "showed_solidarity",
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
            storyTag: "went_along",
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
              "Ed grips {shortName}'s hand in the dark parking lot and whispers, 'You're the only one who asked'",
              "No one from {workplace} sees the conversation — but {shortName} checks the rearview mirror three times on the drive home",
              "Ed cleans out his desk by Friday anyway; the kindness didn't save his job, but he remembers who showed up",
            ],
            suspicionChange: 2,
            integrityChange: 0,
            tone: "neutral",
            historicalNote:
              "Private acts of kindness sustained many accused individuals when public support was too dangerous. These quiet gestures were rarely recorded by history.",
            storyTag: "kept_head_down",
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
            storyTag: "went_along",
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
            storyTag: "spoke_up",
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
              "A coworker draws a circle around the blank space where {shortName}'s name should be and tapes it to the break room wall",
              "The boss mentions 'full participation' in the next staff meeting, eyes lingering on {shortName}",
              "Two weeks later a second petition circulates — this one asks for signatures supporting the firings that the first petition caused",
            ],
            suspicionChange: 5,
            integrityChange: -2,
            tone: "neutral",
            historicalNote:
              "Inaction was rarely neutral during the Red Scare. Not signing a loyalty pledge was often interpreted as a political statement in itself.",
            storyTag: "kept_head_down",
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
            storyTag: "went_along",
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
            storyTag: "showed_solidarity",
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
              "The agent's card — 'Special Agent R. Hendricks, Federal Bureau of Investigation' — sits in {shortName}'s wallet like a splinter",
              "Hendricks calls the following Thursday at dinnertime: 'Just checking in. Have you noticed anything worth sharing?'",
              "{shortName} lets the phone ring six times before picking up, says 'nothing yet,' and hangs up with shaking hands",
            ],
            suspicionChange: 0,
            integrityChange: -3,
            tone: "neutral",
            historicalNote:
              "Many Americans kept FBI agents' cards 'just in case,' living in a gray zone between cooperation and refusal that defined much of ordinary life during the Red Scare.",
            storyTag: "kept_head_down",
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
            storyTag: "went_along",
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
            storyTag: "spoke_up",
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
            storyTag: "kept_head_down",
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
            storyTag: "went_along",
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
            storyTag: "spoke_up",
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
              "The boss hangs up but calls back two days later: 'The front office is asking about your family situation'",
              "Tony's wife sends a letter asking why {shortName} hasn't visited the jail — the silence cuts both ways",
              "A coworker clips Tony's mugshot from the paper and leaves it on {shortName}'s desk without a note",
            ],
            suspicionChange: 5,
            integrityChange: -3,
            tone: "neutral",
            historicalNote:
              "Trying to stay neutral about a family member's arrest was nearly impossible during the Red Scare. The FBI expected clear denunciation, and anything less was treated with suspicion.",
            storyTag: "kept_head_down",
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
            storyTag: "spoke_up",
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
            storyTag: "went_along",
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
            storyTag: "kept_head_down",
          },
        },
      ],
    },
    {
      headline: "{shortName} Is Asked to Join the Loyalty Committee",
      scene:
        "The community's newly formed Americanism Committee wants {shortName} as a member. 'We need good, trustworthy people,' the chairman says over coffee. The committee reviews local residents for 'un-American' activities and reports findings to the city council.",
      situation:
        "Joining gives {shortName} power — the power to protect friends and neighbors from false accusations. But it also means participating in a system that investigates people for their beliefs. The chairman is waiting for an answer.",
      choices: [
        {
          id: "A",
          text: "Join the committee. From the inside, you can steer it away from witch hunts and protect people.",
          alignment: "neutral",
          riskLevel: "medium",
          outcome: {
            narrative:
              "{shortName} attends the first meeting. The other members are earnest, frightened people who see Communists behind every curtain. {shortName} manages to table a motion to investigate the public library. But the next meeting brings a new target: the Unitarian church. The committee has a momentum of its own, and {shortName} is now part of it.",
            consequences: [
              "{shortName} has limited influence inside the committee",
              "Some investigations are slowed but not stopped",
              "{shortName} is now publicly associated with the loyalty system",
            ],
            suspicionChange: -10,
            integrityChange: -8,
            tone: "neutral",
            historicalNote:
              "Local loyalty committees sprang up across America in the early 1950s. Some participants joined hoping to moderate the process from within, but most found the committees took on a life of their own.",
            storyTag: "kept_head_down",
          },
        },
        {
          id: "B",
          text: "Decline firmly. You won't sit in judgment of your neighbors.",
          alignment: "defiant",
          riskLevel: "high",
          outcome: {
            narrative:
              "'I appreciate the offer, but I'm not comfortable deciding who's a good American and who isn't.' The chairman's smile fades. 'That's a surprising answer, {shortName}. Most people are eager to show their patriotism.' The implication hangs in the air: refusing to hunt makes you look like prey.",
            consequences: [
              "{shortName} is viewed with suspicion for declining",
              "The committee operates without {shortName}'s moderating voice",
              "{shortName}'s refusal becomes a topic of neighborhood gossip",
            ],
            suspicionChange: 12,
            integrityChange: 10,
            tone: "neutral",
            historicalNote:
              "Refusing to participate in loyalty programs was itself treated as suspicious. The logic of McCarthyism demanded that loyal Americans prove their loyalty through active participation.",
            storyTag: "spoke_up",
          },
        },
        {
          id: "C",
          text: "Say you're too busy with work and family. Don't commit one way or the other.",
          alignment: "neutral",
          riskLevel: "low",
          outcome: {
            narrative:
              "The chairman nods understandingly. 'Of course, family comes first. But the offer stands.' {shortName} walks home relieved but uneasy. The committee will make decisions that affect real people — and {shortName} chose comfort over conscience. The question of whether that was wisdom or cowardice has no easy answer.",
            consequences: [
              "The chairman nods politely, but his secretary stops saying hello at the grocery store",
              "The committee's first official act is to investigate the Unitarian church — a place {shortName}'s neighbor attends with her children",
              "{shortName} reads about it in the paper over breakfast and pushes the eggs around the plate, appetite gone",
            ],
            suspicionChange: 2,
            integrityChange: -2,
            tone: "neutral",
            historicalNote:
              "The 'silent majority' of Americans neither actively supported nor opposed McCarthyism. Historians debate whether their passivity enabled the worst excesses or simply reflected the impossible pressures of the era.",
            storyTag: "kept_head_down",
          },
        },
      ],
    },
    {
      headline: "{shortName}'s Child Comes Home With Questions",
      scene:
        "{shortName}'s ten-year-old comes home from school upset. The teacher showed a filmstrip about 'enemies within America' and asked students to report any 'suspicious talk' they hear at home. The child looks up and asks: 'Are we suspicious, Daddy?'",
      situation:
        "The loyalty education program is reaching into schools across {location}. Children are being taught to fear — and to inform. {shortName} must decide what to tell a frightened child about a world that is teaching them to distrust their own neighbors.",
      choices: [
        {
          id: "A",
          text: "Sit your child down and explain, carefully, that the filmstrip was wrong — that good Americans don't spy on each other.",
          alignment: "defiant",
          riskLevel: "high",
          outcome: {
            narrative:
              "{shortName} holds the child close and speaks quietly about what America is supposed to mean — fairness, decency, not judging people without evidence. The child seems reassured. But the next day at school, during sharing time, the child says: 'My parent told me the filmstrip was wrong.' The teacher writes a note. The principal calls.",
            consequences: [
              "The child repeats {shortName}'s words at school",
              "The principal schedules a meeting about 'concerning attitudes'",
              "{shortName}'s parenting is now under scrutiny",
            ],
            suspicionChange: 12,
            integrityChange: 8,
            tone: "neutral",
            historicalNote:
              "Cold War education programs like 'Duck and Cover' and loyalty filmstrips were common in American schools during the 1950s. Children were taught that Communists could be hiding anywhere — even next door.",
            storyTag: "spoke_up",
          },
        },
        {
          id: "B",
          text: "Tell your child the teacher is right and that everyone must be watchful. It's safer if the child believes what the school teaches.",
          alignment: "cooperative",
          riskLevel: "low",
          outcome: {
            narrative:
              "'Your teacher knows best,' {shortName} says, and the child nods solemnly. That night, {shortName} overhears the child questioning a sibling: 'Have you ever heard Mom say anything about Communists?' The culture of suspicion has entered the living room. {shortName} created it.",
            consequences: [
              "The child begins monitoring family conversations",
              "{shortName} reinforces the climate of fear in the home",
              "A small piece of childhood innocence is sacrificed",
            ],
            suspicionChange: -5,
            integrityChange: -12,
            tone: "negative",
            historicalNote:
              "The FBI distributed materials encouraging children to report 'subversive' conversations. Some families were investigated based on statements made by their own children at school.",
            storyTag: "went_along",
          },
        },
        {
          id: "C",
          text: "Change the subject. Make dinner, help with homework — pretend the question was never asked.",
          alignment: "neutral",
          riskLevel: "low",
          outcome: {
            narrative:
              "{shortName} says 'Don't worry about all that' and puts on a pot of soup. The child goes quiet. But the question hangs in the air for days. At {workplace}, {shortName} hears that other parents got the same questions. Nobody knows what to say either.",
            consequences: [
              "The child learns that some questions shouldn't be asked",
              "{shortName} avoids the issue but doesn't resolve it",
              "The silence teaches its own lesson about fear",
            ],
            suspicionChange: 0,
            integrityChange: -5,
            tone: "neutral",
            historicalNote:
              "Many parents struggled with how to discuss McCarthyism with their children. The silence itself became a form of education — teaching children that certain topics were dangerous.",
            storyTag: "kept_head_down",
          },
        },
      ],
    },
    {
      headline: "A Customer Boycott Threatens {workplace}",
      scene:
        "A group calling itself the 'Patriotic Citizens Council' has posted flyers outside {workplace} accusing the business of employing 'known subversives.' Customers are crossing the street to avoid the entrance. The owner is panicking.",
      situation:
        "The 'subversive' in question is {shortName}'s coworker Ruth, whose husband was called before HUAC last month. Ruth herself has done nothing wrong. The owner says someone has to go — Ruth, or the business. {shortName} is asked to deliver the message.",
      choices: [
        {
          id: "A",
          text: "Refuse to deliver the message. Tell the owner that firing Ruth for her husband's politics is wrong.",
          alignment: "defiant",
          riskLevel: "high",
          outcome: {
            narrative:
              "The owner's face hardens. 'Then you can join her,' he says. {shortName} walks out of the office, finds Ruth at her desk, and tells her what happened. They leave {workplace} together. The flyers stay up. Two people are now out of work instead of one.",
            consequences: [
              "{shortName} loses the job at {workplace}",
              "Ruth is fired regardless",
              "The Patriotic Citizens Council claims another victory",
            ],
            suspicionChange: 15,
            integrityChange: 10,
            tone: "negative",
            historicalNote:
              "Organized boycotts and pressure campaigns were common tools of anti-Communist groups. Organizations like the American Legion maintained lists of 'un-American' businesses and demanded firings.",
            storyTag: "spoke_up",
          },
        },
        {
          id: "B",
          text: "Deliver the message. It's the owner's decision, not yours. You're just the messenger.",
          alignment: "cooperative",
          riskLevel: "low",
          outcome: {
            narrative:
              "{shortName} walks to Ruth's desk and can barely get the words out. Ruth nods slowly, as if she expected it. She packs her things in a grocery bag. At the door, she turns: 'They'll come for someone else next, you know.' The flyers come down. Business returns to normal. The empty desk stays empty.",
            consequences: [
              "Ruth is fired and leaves quietly",
              "{shortName}'s job is secure",
              "The precedent is set: fear works",
            ],
            suspicionChange: -8,
            integrityChange: -15,
            tone: "negative",
            historicalNote:
              "Guilt by association extended to spouses, family members, and anyone connected to accused individuals. Thousands of people lost jobs not for anything they did, but for who they were married to or related to.",
            storyTag: "went_along",
          },
        },
        {
          id: "C",
          text: "Suggest the owner give Ruth a leave of absence until things calm down — not a firing, just time away.",
          alignment: "neutral",
          riskLevel: "medium",
          outcome: {
            narrative:
              "The owner considers it, then agrees — it's easier than an outright firing. Ruth is told to stay home 'until further notice.' She accepts it with hollow eyes. The flyers come down. Months pass. The leave of absence becomes permanent. No one says the word 'fired,' but Ruth never comes back.",
            consequences: [
              "Ruth is removed without being formally fired",
              "The euphemism of 'leave' hides the reality",
              "{shortName} finds the compromise satisfying no one",
            ],
            suspicionChange: 2,
            integrityChange: -5,
            tone: "neutral",
            historicalNote:
              "Many employers found euphemisms for politically motivated firings — 'reorganizations,' 'leaves of absence,' 'budget cuts' — to avoid the appearance of blacklisting while achieving the same result.",
            storyTag: "kept_head_down",
          },
        },
      ],
    },
    {
      headline: "An Anonymous Tip Arrives About {shortName}'s Neighbor",
      scene:
        "A typed, unsigned letter appears in {shortName}'s mailbox. It accuses the neighbor down the street — Mr. Kovic, a quiet retired schoolteacher — of being a former Communist. The letter urges {shortName} to 'do the patriotic thing' and report him.",
      situation:
        "Mr. Kovic is 68 years old and spends his days gardening and reading. {shortName} has no idea if the accusation is true. The letter could be from a genuine concerned citizen, a neighborhood grudge, or even a test from the FBI. Doing nothing might be noted. Reporting might destroy an innocent man.",
      choices: [
        {
          id: "A",
          text: "Throw the letter away. You won't participate in anonymous accusations against a harmless old man.",
          alignment: "defiant",
          riskLevel: "medium",
          outcome: {
            narrative:
              "{shortName} tears the letter in half and drops it in the trash. Mr. Kovic waves from his garden the next morning, unaware of how close the world came to crashing down on him. But two other neighbors received the same letter. The question is whether they threw theirs away too.",
            consequences: [
              "Mr. Kovic remains safe — from {shortName}'s direction, at least",
              "Other neighbors may have received and acted on the same letter",
              "{shortName} worries about being seen as uncooperative if others reported",
            ],
            suspicionChange: 5,
            integrityChange: 5,
            tone: "neutral",
            historicalNote:
              "Anonymous tips were a major source of FBI investigations during the McCarthy era. Many were motivated by personal grudges, neighborhood disputes, or racial and ethnic prejudice rather than genuine security concerns.",
            storyTag: "showed_solidarity",
          },
        },
        {
          id: "B",
          text: "Bring the letter to the local FBI office. You don't know if it's true, but it's not your place to decide — let the professionals handle it.",
          alignment: "cooperative",
          riskLevel: "low",
          outcome: {
            narrative:
              "The FBI agent thanks {shortName} and files the letter. Three days later, two men in suits knock on Mr. Kovic's door. He answers in his gardening gloves. The investigation that follows takes six months. Mr. Kovic is eventually cleared, but his health deteriorates from the stress. He stops gardening.",
            consequences: [
              "Mr. Kovic endures a six-month investigation",
              "He is cleared but never fully recovers",
              "{shortName} is recorded as a cooperative citizen",
            ],
            suspicionChange: -10,
            integrityChange: -10,
            tone: "negative",
            historicalNote:
              "The FBI received thousands of anonymous tips per week during the peak of McCarthyism. Most led to investigations of innocent people, but the investigations themselves caused lasting damage regardless of outcome.",
            storyTag: "went_along",
          },
        },
        {
          id: "C",
          text: "Go talk to Mr. Kovic directly. Show him the letter and warn him that someone in the neighborhood is targeting him.",
          alignment: "neutral",
          riskLevel: "medium",
          outcome: {
            narrative:
              "Mr. Kovic reads the letter with trembling hands. He sits down heavily. 'I was a member,' he says quietly. 'Forty years ago. I was twenty-two.' He thanks {shortName} and spends the rest of the week burning old papers. Two months later, his house goes up for sale. He moves to live with his daughter in another state.",
            consequences: [
              "Mr. Kovic learns he is targeted and decides to flee",
              "{shortName} now knows a dangerous secret",
              "A neighbor is displaced from his home by fear",
            ],
            suspicionChange: 3,
            integrityChange: 2,
            tone: "neutral",
            historicalNote:
              "Many Americans with distant connections to left-wing politics lived in constant fear of exposure. Some relocated, changed names, or cut ties with anyone who might draw attention.",
            storyTag: "showed_solidarity",
          },
        },
      ],
    },
    {
      headline: "The Union Vote at {workplace} Turns Political",
      scene:
        "The workers at {workplace} are voting on whether to keep their union affiliation. Management has warned that the union's 'Communist ties' could bring federal investigators to {location}. The vote is tomorrow. {shortName} hasn't decided which way to go.",
      situation:
        "The union has been good to the workers — fair pay, safety standards, holiday time. But HUAC has been targeting unions nationwide. A 'yes' vote to keep the union could put everyone on a list. A 'no' vote means losing protections that took years to win.",
      choices: [
        {
          id: "A",
          text: "Vote to keep the union. The workers need it, and you won't let fear take away what you fought for.",
          alignment: "defiant",
          riskLevel: "high",
          outcome: {
            narrative:
              "{shortName} marks the ballot and drops it in the box with a steady hand. The vote passes — barely. The next week, a man from the regional HUAC office visits {workplace} and asks for the membership rolls. Management cooperates. Every worker who voted 'yes' is now potentially on a list. {shortName} included.",
            consequences: [
              "The union survives the vote",
              "HUAC requests the membership rolls",
              "Every union member at {workplace} is now under potential scrutiny",
            ],
            suspicionChange: 15,
            integrityChange: 8,
            tone: "neutral",
            historicalNote:
              "The Taft-Hartley Act of 1947 required union leaders to sign affidavits swearing they were not Communists. Unions that refused were stripped of legal protections, leaving their members vulnerable.",
            storyTag: "spoke_up",
          },
        },
        {
          id: "B",
          text: "Vote to dissolve the union. It's not worth the risk to you or your coworkers.",
          alignment: "cooperative",
          riskLevel: "low",
          outcome: {
            narrative:
              "The dissolution passes by twelve votes. The next morning, management announces a new schedule — longer hours, no overtime premium. The safety committee is disbanded. {shortName} realizes the union wasn't just about politics. It was the only leverage the workers had. Now it's gone.",
            consequences: [
              "The union is dissolved",
              "Worker protections are immediately rolled back",
              "Management uses the anti-Communist climate to consolidate power",
            ],
            suspicionChange: -5,
            integrityChange: -12,
            tone: "negative",
            historicalNote:
              "McCarthyism was used by some employers as a tool to break unions and roll back labor protections. The conflation of union organizing with Communism undermined decades of workers' rights gains.",
            storyTag: "went_along",
          },
        },
        {
          id: "C",
          text: "Don't vote at all. Skip the meeting and let others decide.",
          alignment: "neutral",
          riskLevel: "low",
          outcome: {
            narrative:
              "{shortName} stays home, watching the clock. The vote is close — it could have gone either way. The union survives by three votes. {shortName} is relieved, then ashamed. The result was decided by people willing to show up. {shortName} was not one of them.",
            consequences: [
              "The union narrowly survives without {shortName}'s vote",
              "{shortName} avoids being on any list",
              "The abdication of responsibility settles in quietly",
            ],
            suspicionChange: 0,
            integrityChange: -8,
            tone: "neutral",
            historicalNote:
              "Voter abstention during critical union and civic votes surged during the McCarthy era as Americans feared that any form of participation could draw scrutiny.",
            storyTag: "kept_head_down",
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

// ─── BRIDGE TEXTS ─────────────────────────────────────────────────────────
// Shown as "Previously…" at the start of each scenario after the first.
// Selected by the most recent storyTag. Per-archetype for narrative fit.
// Text uses the same {shortName}, {workplace}, {location} templates.

export const BRIDGE_TEXTS = {
  informer: {
    named_names: [
      "In the weeks since giving names, {shortName} avoids the old haunts near {workplace}. One of the people named has already lost a job. Another won't answer the phone. The guilt sits like a stone in {shortName}'s chest — but the investigators have stopped calling, and that silence is its own kind of relief.",
      "The names {shortName} provided have done their work. Two subpoenas were issued last week. A former colleague's wife called the house in tears before hanging up. {shortName} unplugged the phone for three days.",
      "{shortName} passes one of the named colleagues on the street in {location}. They make eye contact. Neither speaks. The colleague crosses to the other side. {shortName} keeps walking, faster now, as if outrunning the choice is still possible.",
    ],
    defied_committee: [
      "Since refusing to cooperate, {shortName}'s world has contracted. The phone at {workplace} doesn't ring anymore. Old friends are polite but distant. A letter from the committee sits unopened on the kitchen table — {shortName} already knows what it says.",
      "The decision to resist has not gone unnoticed. {shortName}'s name appeared in a column listing 'uncooperative witnesses.' At {workplace}, assignments have dried up. The landlord mentioned that 'someone from the government' came asking questions.",
      "{shortName} reads about another witness who cooperated and kept their job. The temptation to reconsider flickers — then dies. The cost of defiance is steep, but {shortName} can still look in the mirror.",
    ],
    resisted_pressure: [
      "{shortName} has been walking a tightrope — not fully cooperating, not fully resisting. The FBI agents haven't returned, but they haven't closed the file either. Every knock on the door sends {shortName}'s heart racing.",
      "The middle ground is getting narrower. {shortName}'s boss at {workplace} has started asking pointed questions again. The investigators want more than what {shortName} gave them. Silence is starting to look like defiance.",
    ],
    hedged_bets: [
      "{shortName} has managed to avoid committing fully to either side. But the strategy of delay and deflection is wearing thin. At {workplace}, people are choosing sides, and the neutral ground {shortName} occupies is shrinking by the day.",
      "The fence-sitting can't last forever. {shortName} overhears two colleagues at {workplace} debating who can be trusted. Both of them glance at {shortName} with the same uncertain expression. In this climate, ambiguity is its own kind of suspicion.",
      "Another week of half-answers and evasions. {shortName} told the investigator nothing useful, but the man left his card again. 'When you're ready to talk,' he said. The card sits on the nightstand, impossible to ignore.",
    ],
  },
  resister: {
    defied_committee: [
      "The contempt citation hangs over {shortName} like a guillotine blade. The lawyer says the case could take years. Meanwhile, {workplace} has 'regretfully' suspended {shortName} without pay. A solidarity fund from colleagues covers rent — barely.",
      "Since the confrontation with the committee, {shortName}'s name has become a symbol. Letters arrive from strangers — some full of admiration, others full of threats. {shortName} reads them all at the kitchen table in {location}, trying to separate courage from recklessness.",
      "{shortName}'s defiance made the papers. At {workplace}, some whisper support in the hallways. Others won't make eye contact. The committee has scheduled another round of hearings, and {shortName}'s lawyer warns that this time, they won't be as patient.",
    ],
    stood_ground: [
      "{shortName} held firm but at a cost. The professional world that once embraced {shortName} has grown cold. Invitations stop arriving. Projects are reassigned. The quiet erosion of a career is almost worse than a dramatic firing — it's death by a thousand small cuts.",
      "Standing ground has earned {shortName} respect from a small circle and suspicion from everyone else. A colleague at {workplace} passes a note: 'Be careful. They're building a file.' {shortName} crumples it and throws it away, then retrieves it. Better to know.",
    ],
    sought_middle_ground: [
      "{shortName}'s attempt at compromise has satisfied no one. The committee sees evasion; supporters see weakness. {shortName} sits in the apartment in {location}, caught between two fires, wondering if there was ever a middle path at all.",
      "The negotiated testimony bought time but not safety. The committee's counsel called again — 'just a few follow-up questions.' {shortName}'s lawyer advises caution. The follow-up questions are never just questions.",
      "Neither side trusts {shortName} now. The committee thinks the testimony was evasive. Fellow resisters think it was a sellout. At {workplace}, {shortName} eats lunch alone, which is its own kind of answer.",
    ],
    capitulated: [
      "The decision to cooperate has brought a hollow peace. The investigation is closed, the job is safe, but {shortName} catches sideways glances from colleagues at {workplace} who know what cooperation cost. A former friend left a single word on {shortName}'s answering machine: 'Judas.'",
      "{shortName}'s cooperation bought survival but not peace. The people who were named have scattered — fired, blacklisted, one reportedly fled to Mexico. {shortName} reads about them in the paper and feels the walls of the apartment in {location} closing in.",
    ],
  },
  bystander: {
    went_along: [
      "Going along with the loyalty measures felt pragmatic at the time. But {shortName} has noticed the atmosphere at {workplace} changing — people speak in whispers now, watch what they say, avoid certain topics. The world got a little smaller, and {shortName} helped make it that way.",
      "{shortName} signed what needed signing and stayed quiet when silence was expected. Life continues, but there's a new heaviness at {workplace}. The colleague who was fired hasn't been replaced. The empty desk is a daily reminder.",
      "The path of least resistance led here: a job, a paycheck, a growing unease. {shortName} went along, and things are fine — except for the look on Ed's face when security escorted him out. That look visits {shortName} at 3 a.m.",
    ],
    spoke_up: [
      "Speaking up has painted a target on {shortName}'s back. At {workplace}, the supervisor has started scheduling extra 'performance reviews.' A neighbor mentioned that someone was asking questions about {shortName}'s 'affiliations.' In {location}, word travels fast.",
      "{shortName}'s act of courage at {workplace} has not been forgotten — by anyone. Supporters slip notes of thanks. But the regional manager visited last week, and the conversation was less about performance and more about 'loyalty.' The message was clear.",
      "Since standing up, {shortName} has become the person others come to in whispers. 'Were you really the one who...?' Yes. {shortName} was. And the cost is becoming clearer every day — fewer shifts, colder greetings, a sense of being watched.",
    ],
    showed_solidarity: [
      "{shortName}'s quiet act of solidarity hasn't gone unnoticed. At {workplace}, someone left an anonymous note in {shortName}'s locker: 'We see what you did.' Whether it was a thank-you or a warning is impossible to tell.",
      "Helping from the shadows has its own weight. {shortName} checks over both shoulders now before doing anything that might be considered 'sympathetic.' At {workplace} in {location}, the line between decency and danger has never felt thinner.",
    ],
    kept_head_down: [
      "Keeping a low profile has kept {shortName} safe — so far. But the investigations at {workplace} are spreading. More names, more interviews, more empty desks. {shortName} walks past them every morning, eyes forward, stomach tight.",
      "{shortName} has perfected the art of being invisible. Don't volunteer. Don't comment. Don't linger near the wrong people at {workplace}. It's exhausting, this constant calibration of normalcy. But the alternative — being noticed — is worse.",
      "Another week of keeping quiet. {shortName} watched a coworker get called into the office and not come back. No one asked where they went. That silence, {shortName} realizes, is the sound of everyone keeping their head down at once.",
    ],
  },
};

// ─── STORY CODAS ──────────────────────────────────────────────────────────
// Appended to the verdict epilogue based on accumulated storyTags.
// These tie the specific choices back into the ending.

export const STORY_CODAS = {
  // Informer tags
  named_names:
    "The names {shortName} gave to investigators followed both parties for years. Some of the people named never worked in their profession again. One sent a letter, years later — not of forgiveness, but of explanation. {shortName} read it once and never opened it again.",
  hedged_bets:
    "{shortName}'s attempts to stay in the middle satisfied no one and protected nothing. The investigators saw evasion; the accused saw cowardice. In the end, the fence was not a safe place to sit — it was just a slower way of falling.",
  resisted_pressure:
    "{shortName}'s small acts of resistance — the vague answers, the convenient forgetfulness — may have shielded someone. There's no way to know for certain. But the risk was real, and the willingness to take it mattered.",

  // Resister tags
  defied_committee:
    "The defiance cost {shortName} dearly — years of blacklisting, lost income, fractured relationships. But when the McCarthy era finally ended and America began to reckon with what it had done, {shortName}'s refusal to cooperate stood as a testament to what conscience looks like under fire.",
  stood_ground:
    "{shortName}'s quiet resistance — firm but not theatrical — earned a different kind of legacy. Not headlines, but the steady respect of people who remembered what it cost to simply say no.",
  sought_middle_ground:
    "The middle path {shortName} tried to walk left no monument and earned no headlines. History rarely remembers the compromisers. But in the moment, with a family to feed and a career to save, the choices felt less like philosophy and more like survival.",
  capitulated:
    "The decision to cooperate never stopped haunting {shortName}. Years later, at a dinner party in {location}, someone mentioned the McCarthy era in passing. {shortName} set down a fork and left the room. Some wounds stay open.",

  // Bystander tags
  went_along:
    "Looking back, {shortName} could never pinpoint the exact moment when going along became complicity. It happened gradually — a signature here, a silence there — until the ordinary acts of compliance had built something {shortName} no longer recognized.",
  spoke_up:
    "The moment {shortName} spoke up changed everything. It cost a promotion, a few friendships, and several months of looking over one shoulder. But it also proved something: that ordinary people, in ordinary jobs, could choose not to be bystanders. And some of them did.",
  showed_solidarity:
    "{shortName}'s quiet acts of solidarity — a meal shared, a warning whispered, a hand extended when no one was watching — never made the history books. But they made the difference between despair and survival for the people who received them.",
  kept_head_down:
    "{shortName} survived by becoming invisible. It worked. But years later, when the grandchildren asked what it was like during the Red Scare, {shortName} found it difficult to answer. The truth — 'I kept my head down' — felt like both a confession and an excuse.",
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

// ─── PLAY-HISTORY MEMORY (localStorage) ────────────────────────────────────
// Tracks which scenarios and archetypes a student has already played so
// repeat sessions feel fresh. Falls back gracefully if localStorage is blocked.

const STORAGE_KEY = "redscare_play_history";

function loadHistory() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return JSON.parse(raw);
  } catch {
    /* private browsing or storage blocked — play without memory */
  }
  return { seenScenarios: [], playedArchetypes: [], totalRuns: 0 };
}

function saveHistory(history) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(history));
  } catch {
    /* silently ignore */
  }
}

/**
 * Pick an archetype the student hasn't played yet. Once all three have been
 * played, reset the cycle so they can replay in a new random order.
 */
export function pickFreshArchetype(archetypes) {
  const history = loadHistory();
  const unplayed = archetypes.filter(
    (a) => !history.playedArchetypes.includes(a)
  );
  if (unplayed.length > 0) {
    return pickRandom(unplayed);
  }
  // All archetypes played — reset cycle, pick randomly
  history.playedArchetypes = [];
  saveHistory(history);
  return pickRandom(archetypes);
}

/**
 * Pick `count` scenarios from the archetype pool, prioritising ones the
 * student hasn't seen before. If there aren't enough unseen scenarios,
 * fill in with the least-recently-seen ones.
 */
export function pickFreshScenarios(archetype, count) {
  const history = loadHistory();
  const pool = SCENARIOS[archetype];
  const seen = new Set(history.seenScenarios);

  const unseen = pool.filter((s) => !seen.has(s.headline));
  const alreadySeen = pool.filter((s) => seen.has(s.headline));

  // Shuffle both groups
  const shuffledUnseen = [...unseen].sort(() => Math.random() - 0.5);
  const shuffledSeen = [...alreadySeen].sort(() => Math.random() - 0.5);

  // Prefer unseen, backfill with seen
  const picked = [...shuffledUnseen, ...shuffledSeen].slice(0, count);
  return picked;
}

/**
 * After a game ends, record which scenarios and archetype were played.
 */
export function recordPlaythrough(archetype, scenarioHeadlines) {
  const history = loadHistory();
  history.playedArchetypes.push(archetype);
  for (const h of scenarioHeadlines) {
    if (!history.seenScenarios.includes(h)) {
      history.seenScenarios.push(h);
    }
  }
  history.totalRuns += 1;
  saveHistory(history);
}

/**
 * Return stats for the "discovery" indicator: how many unique scenarios
 * the student has seen out of the total available.
 */
export function getDiscoveryStats() {
  const history = loadHistory();
  const totalScenarios = Object.values(SCENARIOS).reduce(
    (sum, arr) => sum + arr.length,
    0
  );
  return {
    seen: history.seenScenarios.length,
    total: totalScenarios,
    runs: history.totalRuns,
  };
}

/**
 * Clear all play history (useful for teacher reset).
 */
export function clearPlayHistory() {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch {
    /* ignore */
  }
}
