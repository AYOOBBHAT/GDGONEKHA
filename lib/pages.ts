import {
  ageCriteria,
  mpdGeneral,
  mpdInfrastructure,
  schoolSongLyrics,
  type PageContent,
} from "./content";

export const pages: Record<string, PageContent> = {
  about: {
    eyebrow: "Know us",
    title: "The school",
    lead: "Education that prepares them to thrive. For life.",
    blocks: [
      {
        type: "p",
        text: "GD Goenka Kupwara is an endeavour of Anwar Sultana Charitable Trust. It is an initiative to impart quality education in an environment which is caring, stimulating and challenging. The school has ultramodern architecture with state-of-the-art technology. It rises above the confines of conventional teaching.",
      },
      {
        type: "p",
        text: "The campus stretches over 95 kanals. Every detail has been carefully undertaken — flooring with anti-skid tiles, antibacterial wall paints, soundproof classrooms, a Wi-Fi-enabled campus, centralized air-conditioning, a semi-Olympic size swimming pool, a spacious auditorium and a food court. Lawn tennis, basketball, volleyball and football courts have been created to international standards.",
      },
      {
        type: "p",
        text: "The school philosophy is based on treating each child in a manner that provides appropriate development programmes, so as to encourage not just learning but lifelong wisdom.",
      },
    ],
  },
  founder: {
    eyebrow: "Know us",
    title: "Our founder",
    lead: "A vision rooted not just in academics, but in the wellbeing, dignity and safety of every child.",
    blocks: [
      {
        type: "quote",
        text: "When I look back at the journey that began in 1994, I recall a simple yet powerful vision — one rooted not just in academics, but in the wellbeing, dignity and safety of every child.",
        cite: "Sh. Anjani Kumar Goenka",
        role: "Chairman, GD Goenka Group",
      },
      {
        type: "p",
        text: "GD Goenka was founded to raise the bar for school education in India. From the beginning, the group chose to lead, not follow. It was among the first to introduce GPS-enabled, air-conditioned school buses. Children drank mineral water long before it was common practice. Clinical psychiatrists were brought in to support emotional wellbeing when few schools spoke of mental health.",
      },
      {
        type: "p",
        text: "Every decision was guided by one belief: children deserve the best start in life, in every sense of the word. In an age of AI, rapid change and global challenges, the duty is to equip students with not just knowledge, but resilience, empathy and purpose.",
      },
    ],
  },
  vision: {
    eyebrow: "Know us",
    title: "Vision & mission",
    lead: "Thrive. For life.",
    blocks: [
      { type: "h2", text: "Vision" },
      {
        type: "p",
        text: "Each student should develop and mould their ambitions towards perfection. The goal is to support and nurture the student’s — and our own — natural desire to be lifelong learners. We anticipate creativity and initiative, enterprise and innovation, and cognitive strategies for progressive learning.",
      },
      {
        type: "p",
        text: "Our vision is to prepare and motivate students for a rapidly changing world, by instilling critical thinking, a global perspective and respect for honesty, loyalty, perseverance and compassion. Students will have success for today and be prepared for tomorrow.",
      },
      { type: "h2", text: "Mission" },
      {
        type: "p",
        text: "Empowering every student with confidence, compassion and curiosity to shape tomorrow.",
      },
      {
        type: "p",
        text: "The school motto — Higher Stronger Brighter — takes its core idea from a quest for excellence, an insatiable thirst for knowledge and a limitless craving for the latest.",
      },
      {
        type: "p",
        text: "The school aspires to be a national leader in developing educated contributors, career-ready learners and global citizens, and in generating a meaningful, high-impact partnership with society. The faculty, in partnership with parents, is committed to college and career readiness. Students are empowered to meet current and future challenges with social awareness, civic responsibility and personal growth.",
      },
    ],
  },
  song: {
    eyebrow: "Know us",
    title: "School song",
    lead: "Let the journey start with a song.",
    blocks: schoolSongLyrics.map((line) => ({ type: "p" as const, text: line })),
  },
  management: {
    eyebrow: "Know us",
    title: "The management",
    lead: "Governance that holds the school to its promise — safety, scholarship and character.",
    blocks: [
      {
        type: "p",
        text: "GD Goenka Public School Kupwara is an endeavour of Anwar Sultana Charitable Trust. The School Management Committee oversees the institution’s academic, administrative and pastoral life.",
      },
      {
        type: "p",
        text: "Parents are invited to be active members of the committee and to play a role in forming a more dynamic curriculum. The official committee document is published below.",
      },
    ],
  },
  pta: {
    eyebrow: "Know us",
    title: "Parent Teacher Body",
    lead: "A structured partnership between home and school.",
    blocks: [
      {
        type: "p",
        text: "The school’s endeavour is to ensure that the parents’ role in their child’s development is well-structured. Parents are invited to be active members of the school management committee and to play a vibrant role in forming a more dynamic and engaging curriculum.",
      },
      {
        type: "p",
        text: "Monthly parent–teacher sessions and mothers’ training are part of the school’s teaching mechanism. The relationship is not ceremonial. It is how a child is known fully — at home and in the classroom.",
      },
    ],
  },
  director: {
    eyebrow: "Know us",
    title: "Director's message",
    lead: "Creating opportunities, challenging minds, encouraging innovation.",
    blocks: [
      {
        type: "p",
        text: "With immense pride I welcome you to GD Goenka Public School’s website. You could be a parent, a student, a staff member or anyone interested in the learning environment of our school. I invite you to navigate this ‘online school’ to understand how we provide the best environment for little ones and young adults.",
      },
      {
        type: "p",
        text: "Right from its inception, the institution has marched forward to spread the light of education and pave the path of academic excellence. The key focus areas remain creating opportunities, challenging minds, encouraging innovation and sustaining excitement.",
      },
      {
        type: "p",
        text: "Our objective is to continue being recognised as a torch-bearer of leading education methods — an institution whose students define a future not only for themselves but for the world. The values and environment we provide are sustainable and see children through their formative years. The investment we put into children today will help them achieve greater heights.",
      },
      {
        type: "quote",
        text: "Thank you and stay blessed.",
        cite: "Raja Zubair Ahmed",
        role: "Director",
      },
    ],
  },
  principal: {
    eyebrow: "Know us",
    title: "Principal's message",
    lead: "Whatever guides a person closer to truth is education.",
    blocks: [
      {
        type: "p",
        text: "Dear Parents, thank you for visiting our website.",
      },
      {
        type: "p",
        text: "Whatever guides a person closer to truth is education. The education that facilitates this process then becomes liberating. If we truly aim to transform lives, a clear distinction between false knowledge and genuine knowledge must be drawn. Knowledge that teaches only the means of earning a livelihood is false; knowledge that imparts wisdom and enriches life beyond livelihood is true knowledge.",
      },
      {
        type: "p",
        text: "We must not focus solely on what a child needs to learn just to fit in with society. Instead, we should ask: what unique qualities does a child possess which could be honed to help them grow? Only then can we guide the emerging generation to shape society in accordance with their own aspirations — without imposing current norms onto them.",
      },
      {
        type: "p",
        text: "Education should imbue resilience, reveal values that serve as a roadmap, enrich the spirit and instil a love for one’s pursuits. It should teach what truly matters and how to lead a fulfilling life.",
      },
      {
        type: "p",
        text: "You do not have to get top scores in exams to be successful. Life is about more than monetary pursuits. As students become adults, they will not be defined by medals, but by the confidence, communication skills, trust and belief they cultivate.",
      },
      {
        type: "p",
        text: "Our primary objective is to nurture students who are academically proficient and also creative, tolerant, positive and self-assured — well-rounded individuals who respect others’ opinions and stand up for what they believe in. This, to me, embodies the essence of true education.",
      },
      {
        type: "quote",
        text: "Regards.",
        cite: "Sartaj Mir",
        role: "Principal — Masters in Public Administration (Jiwaji University); M.A. Political Science (Kashmir University); PG Diploma in Guidance & Counselling (AMU); B.Ed.; PGDCA",
      },
    ],
  },
  academics: {
    eyebrow: "Academics",
    title: "A curriculum that connects.",
    lead: "English-medium, co-educational, CBSE-affiliated — with activity, expression and thought at the centre.",
    blocks: [
      {
        type: "p",
        text: "The school is affiliated to the Central Board of Secondary Education under affiliation no. 730129. English is the medium of instruction. The establishment works with a single objective: holistic education.",
      },
      {
        type: "p",
        text: "An integrated curriculum teaches a unit across disciplines so children make connections. Activities, project work, presentations, educational trips and guest lectures make concept formation lasting. Monthly weeks — environment, literary, cultural, science, cosmic — give the year a rhythm beyond tests.",
      },
    ],
  },
  curriculum: {
    eyebrow: "Academics",
    title: "Curriculum",
    lead: "CBSE, integrated, thematic — and never only a textbook.",
    blocks: [
      {
        type: "p",
        text: "The school is an English-medium, co-educational secondary school affiliated to CBSE (affiliation no. 730129). The syllabus for subjects is as prescribed by CBSE.",
      },
      {
        type: "h2",
        text: "Nursery till Class I",
      },
      {
        type: "p",
        text: "An integrated, thematic and activity-based approach. For the youngest children, the play-way method is adopted. Classes are theme-designed so that learning happens by observation and doing, correlating knowledge across experiences. Individual attention makes learning a pleasurable pursuit.",
      },
      {
        type: "h2",
        text: "The teacher as coordinator",
      },
      {
        type: "p",
        text: "The teacher becomes a group coordinator — initiating work and nurturing students without the phobia of examinations and homework. Development of oral and written expression is emphasised. Home assignments are not a carry-over of class work but oriented towards honing individual talents.",
      },
      {
        type: "h2",
        text: "Co-curricular life",
      },
      {
        type: "p",
        text: "Western and Indian music and dance, instrumental music and related arts give a winning edge to personality. The aim is to imbibe application, analytical and creative skills.",
      },
    ],
  },
  teaching: {
    eyebrow: "Academics",
    title: "Teaching methodology",
    lead: "Qualified faculty, continuously developed.",
    blocks: [
      {
        type: "p",
        text: "The school employs competent faculty members qualified to accomplish the mission and goals of the institution. When determining acceptable qualifications, primary consideration is given to educational credentials, alongside competence, effectiveness and capacity — including related work experience, professional degrees and certifications, honours, documented excellence in teaching, and other demonstrated contributions to student learning.",
      },
      {
        type: "p",
        text: "Management encourages faculty to upgrade their specialisation and pursue research that develops their practice further. Capacity-building programmes — including 21st-century skills workshops — are part of school life.",
      },
    ],
  },
  exam: {
    eyebrow: "Academics",
    title: "Exam & evaluation",
    lead: "Assessment that identifies need, not merely records rank.",
    blocks: [
      {
        type: "p",
        text: "In each academic year the school holds tests with the following weightage. A student is promoted on the combined result of both terms.",
      },
      {
        type: "table",
        headers: ["Term I", "Weight", "Term II", "Weight"],
        rows: [
          ["PWT 1", "10%", "PWT 3", "10%"],
          ["PWT 2", "10%", "PWT 4", "10%"],
          ["Project & assignment", "10%", "Project & assignment", "10%"],
          ["T 1", "20%", "T 2", "40%"],
          ["Total", "50%", "Total", "50%"],
        ],
      },
      {
        type: "p",
        text: "The objective is not merely to record achievement but to identify weakness and strength, so instruction can be adapted. Minimum attendance for the annual examination is 75%, including attendance at a previous school if admitted on transfer. The Principal may condone shortage up to 15% in medical or extraordinary circumstances.",
      },
      {
        type: "h2",
        text: "Grading",
      },
      {
        type: "table",
        headers: ["Grade", "Range", "Descriptor"],
        rows: [
          ["A+", "91–100%", "Excellent"],
          ["A", "81–90%", "Very Good"],
          ["B+", "71–80%", "Good"],
          ["B", "61–70%", "Average"],
          ["C+", "51–60%", "Satisfactory"],
          ["C", "41–50%", "Fair"],
          ["D", "31–40%", "Poor"],
        ],
      },
      {
        type: "h2",
        text: "Pass percentage",
      },
      {
        type: "p",
        text: "Up to Class VIII: not less than 40% in each subject and 45% aggregate. A student failing in one or two subjects may be granted promotion if they have at least 30% in each failed subject and 35% aggregate.",
      },
      {
        type: "p",
        text: "Class IX and XI: not less than 35% in each subject and 40% aggregate. Promotion to Class XII requires a pass in both theory and practical in Class XI, separately.",
      },
      {
        type: "note",
        text: "This SOP is subject to revision to incorporate changing requirements and government guidelines.",
      },
    ],
  },
  tours: {
    eyebrow: "Beyond academics",
    title: "Study tours",
    lead: "Learning that leaves the classroom on purpose.",
    blocks: [
      {
        type: "p",
        text: "Study tours are an integral part of the educational approach, providing valuable opportunities to learn beyond the classroom. Tours are organised to complement the curriculum, allowing students to explore real-world applications of their studies.",
      },
      {
        type: "p",
        text: "By visiting museums, historical sites, nature reserves and various industries, students gain firsthand experience. Tours also encourage critical thinking, curiosity and social interaction — broadening horizons and making learning more engaging.",
      },
    ],
  },
  celebrations: {
    eyebrow: "Beyond academics",
    title: "Celebrations",
    lead: "Culture, calendar and community — lived together.",
    blocks: [
      {
        type: "p",
        text: "Celebrations are a vibrant part of school culture, bringing together students, teachers and staff to honour occasions throughout the year. National holidays, cultural festivals, school anniversaries and birthdays are marked with enthusiasm.",
      },
      {
        type: "p",
        text: "Each celebration is an opportunity to learn about traditions, express creativity and foster community. Cultural performances, music, dance and art allow students to showcase talent and appreciate diverse backgrounds — building unity, respect and belonging.",
      },
    ],
  },
  sports: {
    eyebrow: "Beyond academics",
    title: "Sports",
    lead: "Fitness, teamwork, discipline — and swimming as a life skill.",
    blocks: [
      {
        type: "p",
        text: "Sports are an essential part of school life, offering a wide range of activities that promote physical fitness, teamwork and discipline. The programme includes football, basketball, cricket and athletics, ensuring many opportunities to engage.",
      },
      {
        type: "p",
        text: "A highlight is swimming — not only a joy but an important life skill. The school’s swimming pool gives students the chance to learn and excel under trained instructors. Through sport, students develop healthy competition, perseverance and confidence.",
      },
      {
        type: "list",
        items: [
          "Athletics — track and field",
          "Basketball, football, cricket, volleyball",
          "Badminton, table tennis, lawn tennis",
          "Swimming, skating, splash pool, sand pit and outdoor play",
        ],
      },
    ],
  },
  pursuits: {
    eyebrow: "Beyond academics",
    title: "Goenkan Pursuits",
    lead: "The wider life of a Goenkan — art, skill, body and value.",
    blocks: [
      {
        type: "p",
        text: "Goenkan Pursuits gather the co-scholastic work of the school: the practices that form character beside the curriculum. Dance, drama, music, art and craft, group discussion, debate, elocution, exhibitions, photography and cultural events are organised as essential, not optional.",
      },
      {
        type: "h3",
        text: "Career counselling",
      },
      {
        type: "p",
        text: "Special sessions by educators and career counsellors provide motivation and guidance for choosing an appropriate path.",
      },
      {
        type: "h3",
        text: "Physical education",
      },
      {
        type: "p",
        text: "Basketball, football, cricket, indoor badminton, volleyball, table tennis and swimming support overall physical development.",
      },
      {
        type: "h3",
        text: "Value-based education",
      },
      {
        type: "p",
        text: "The school strives to imbibe values through the curriculum — building virtuous, ethical and responsible citizens.",
      },
    ],
  },
  houses: {
    eyebrow: "Beyond academics",
    title: "School houses",
    lead: "Four houses. One school. A life of belonging and contest.",
    blocks: [
      {
        type: "p",
        text: "The student body is organised into four houses: Teresa House, Radha Krishna House, Tagore House and Vivekananda House. Each house includes students from primary through senior years, creating a vertically integrated community. Students are assigned a house on joining and remain in it throughout their school career.",
      },
      {
        type: "p",
        text: "Each house is overseen by a Housemaster — an experienced educator who mentors students and selects House Captains, Assistant House Captains and Sports Captains. Captains organise events, lead peers and promote house spirit. Inter-house activities through the year foster healthy competition and camaraderie.",
      },
    ],
  },
  clubs: {
    eyebrow: "Beyond academics",
    title: "Clubs & integrated activities",
    lead: "Subjects meeting in one task — so learning feels like the world.",
    blocks: [
      {
        type: "p",
        text: "Integrated activities provide a holistic and interconnected learning experience. By combining subjects into a single activity, students make connections across disciplines. A project on environmental science might include geography, biology and art.",
      },
      {
        type: "p",
        text: "These activities promote critical thinking, teamwork and problem-solving as students research, plan and present together. Club life draws on dance, drama, music, debate, photography, art and cultural work — the same fabric as Goenkan Pursuits.",
      },
    ],
  },
  facilities: {
    eyebrow: "Facilities",
    title: "A campus designed around the child.",
    lead: "Infrastructure is not spectacle. It is how care becomes physical.",
    blocks: [
      {
        type: "p",
        text: "Anti-skid tiles, antibacterial wall paints, soundproof classrooms, Wi-Fi, centralized air-conditioning, a semi-Olympic swimming pool, a 300-seat auditorium and a food court. Sports courts for lawn tennis, basketball, volleyball and football at international standard.",
      },
      {
        type: "p",
        text: "Mandatory disclosure records 75 classrooms, laboratories including composite science, maths, robotics, English language and computer labs, a library, indoor and outdoor play, and a 350 sq. m auditorium.",
      },
    ],
  },
  stateOfArt: {
    eyebrow: "Facilities",
    title: "State of the art",
    lead: "Technology and fabric, held to a high standard.",
    blocks: [
      {
        type: "list",
        items: [
          "Wi-Fi enabled campus",
          "Centralized air-conditioning",
          "Soundproof classrooms",
          "Anti-skid flooring and antibacterial wall paints",
          "Semi-Olympic swimming pool",
          "300-seat auditorium",
          "Food court",
          "Robotics, language, science, maths and computer laboratories",
          "CCTV coverage of floors, classrooms, corridors and building perimeter",
        ],
      },
    ],
  },
  holistic: {
    eyebrow: "Facilities",
    title: "Holistic development",
    lead: "Mind, body, craft and character — in the same week.",
    blocks: [
      {
        type: "h3",
        text: "Co-scholastic activities",
      },
      {
        type: "p",
        text: "Dance, drama, music, art and craft, group discussions and debate, elocution, exhibitions, photography and cultural events.",
      },
      {
        type: "h3",
        text: "Career counselling",
      },
      {
        type: "p",
        text: "Sessions by educators and renowned career counsellors to guide appropriate options.",
      },
      {
        type: "h3",
        text: "Physical education",
      },
      {
        type: "p",
        text: "Basketball, football, cricket, indoor badminton, volleyball, table tennis and swimming.",
      },
      {
        type: "h3",
        text: "Excursion",
      },
      {
        type: "p",
        text: "Trips for leisure, education or physical purpose — extending the classroom.",
      },
      {
        type: "h3",
        text: "Value-based and skill-based learning",
      },
      {
        type: "p",
        text: "Virtuous, ethical citizenship, and practical skills that complement academic knowledge.",
      },
    ],
  },
  transport: {
    eyebrow: "Facilities",
    title: "Transport",
    lead: "GPS, CCTV and a female attendant on every bus.",
    blocks: [
      {
        type: "p",
        text: "The school offers comfortable buses on major routes in Kupwara. Each bus is fitted with GPS and CCTV cameras. Security is carefully managed. Each bus has a female attendant to take care of the children.",
      },
      { type: "h2", text: "Rules" },
      {
        type: "list",
        items: [
          "Routes are drawn after considering parental convenience; the school’s decision on routing, timing and pickup points is final. Students may not change buses to visit friends. Address or stop changes must be intimated in writing.",
          "A clear calendar month’s notice is required to discontinue transport. Discontinuation in the fourth quarter is not permitted. Mid-session enrolment requires bus charges and security for the entire session.",
          "Damage to bus fittings will be recovered from parents. Indiscipline may lead to debarment from the bus.",
          "Transport is a privilege, subject to availability, and may be withdrawn at the discretion of Management.",
          "Bus stops are allotted strictly as per the route plan. Confirm bus fare before registration.",
          "If a child is escorted to or from a stop by a minor servant, the facility may be withdrawn for up to three months.",
        ],
      },
      {
        type: "note",
        text: "For transport queries call 18008890880 or 9103854896.",
      },
    ],
  },
  infrastructure: {
    eyebrow: "Facilities",
    title: "Infrastructure",
    lead: "Figures from the school’s mandatory public disclosure.",
    blocks: [
      {
        type: "table",
        headers: ["Particular", "Detail"],
        rows: mpdInfrastructure,
      },
    ],
  },
  admissions: {
    eyebrow: "Admission",
    title: "A place in a serious classroom.",
    lead: "Integrity, energy, curiosity — and a seat that is earned, then confirmed.",
    blocks: [
      {
        type: "p",
        text: "The admissions team looks for students with integrity, energy and curiosity; a commitment to academic and personal growth; and an understanding of a rich multi-cultural environment. Highly motivated students from diverse backgrounds, with talents in activities and sports, are welcome.",
      },
      {
        type: "p",
        text: "Class size is limited to 24 students for Nursery and KG, and 30 for Class I and above. Admissions are currently indicated as open for Nursery to Class 6th — please confirm with the office.",
      },
    ],
  },
  procedure: {
    eyebrow: "Admission",
    title: "Procedure",
    lead: "Registration, interaction or aptitude, merit, then confirmation.",
    blocks: [
      { type: "h2", text: "1. Registration" },
      {
        type: "p",
        text: "Parents submit a non-refundable application form. Registration does not guarantee admission, which is subject to interaction with the Admission Team and Principal for Nursery to Class I, and an aptitude test for Grade II and above.",
      },
      {
        type: "list",
        items: [
          "Attested copy of birth certificate",
          "Copy of address proof",
          "2 passport photographs of the child and 1 each of the parents",
          "Previous session report card, or previous three session report cards with a legal transfer certificate",
          "Vaccination card",
          "Blood group card or report",
        ],
      },
      { type: "h2", text: "2. Interaction / aptitude test" },
      {
        type: "p",
        text: "Registered aspirants for Nursery, Jr. KG, Sr. KG and Class I are called for an interaction along with both parents or guardian.",
      },
      { type: "h2", text: "3. Merit list" },
      {
        type: "p",
        text: "After interaction or aptitude test, parents are informed of selection by telephone and mail.",
      },
      { type: "h2", text: "4. Confirmation and fee" },
      {
        type: "p",
        text: "Admission must be closed by payment of fee within 5 days from registration or selection. Students are admitted first-come, first-served depending on seat availability. Fees are not refunded. The school reserves the right to admissions; the Admission Committee’s decision is final.",
      },
      { type: "h2", text: "Class-wise age criteria for admission — 2025" },
      {
        type: "table",
        headers: ["Class", "Entry age", "Remarks"],
        rows: ageCriteria,
      },
    ],
  },
  fees: {
    eyebrow: "Admission",
    title: "Fee structure",
    lead: "Published fees are confirmed with the school and paid through the official portal.",
    blocks: [
      {
        type: "p",
        text: "The current session’s fee structure is maintained by the school office and through Mandatory Public Disclosure. Amounts are not reproduced here lest they fall out of date. Please use Online Fee Payment, or write to the school, for the applicable schedule.",
      },
      {
        type: "p",
        text: "Admission must be confirmed by fee payment within five days of selection. Fees are not refunded. Transport, if availed, follows separate rules and quarterly terms.",
      },
      {
        type: "note",
        text: "Pay fees at the official YouthConnekt ERP portal linked from this website’s header.",
      },
    ],
  },
  prospectus: {
    eyebrow: "Admission",
    title: "E-Prospectus",
    lead: "Read the school as it presents itself — then come and see it.",
    blocks: [
      {
        type: "p",
        text: "The official e-prospectus is published by the school. For the latest file, use the prospectus link on the existing school portal, or request a copy from the admissions desk at info@gdgoenkabaramulla.com.",
      },
    ],
  },
  withdrawal: {
    eyebrow: "Admission",
    title: "Withdrawal / Transfer Certificate",
    lead: "A calm, documented close when a family must leave.",
    blocks: [
      {
        type: "p",
        text: "Details of Transfer Certificates issued are maintained by the school. Families requiring a TC should write to the office with adequate notice. The official register of TCs is published by the school on its Transfer Certificate page.",
      },
      {
        type: "p",
        text: "Transport discontinuation requires a calendar month’s notice and is not permitted in the fourth quarter of the academic session.",
      },
    ],
  },
  bookList: {
    eyebrow: "Academics",
    title: "Book list",
    lead: "Nursery to Class VIII — as published for 2026.",
    blocks: [
      {
        type: "p",
        text: "The school publishes a book list for Nursery to Class 8. Download the official PDF from the school’s documents library, or collect a copy from the front desk.",
      },
    ],
  },
  calendar: {
    eyebrow: "Academics",
    title: "Academic calendar",
    lead: "The year, held in two terms — with weeks for science, culture, literature and the cosmos.",
    blocks: [
      {
        type: "p",
        text: "The school year is organised in two terms, with periodic tests, projects and term examinations as set out in Exam & Evaluation. Monthly thematic weeks — environment, literary, cultural, science, cosmic — give rhythm to the calendar.",
      },
      {
        type: "p",
        text: "The official calendar image is issued by the school each session. Confirm dates with the office and the ERP parent portal.",
      },
    ],
  },
  privacy: {
    eyebrow: "Legal",
    title: "Privacy policy",
    lead: "This website is a design proposal that presents publicly available school information.",
    blocks: [
      {
        type: "p",
        text: "Contact details, staff names and campus facts on this site are drawn from GD Goenka Public School Kupwara’s public pages. Children’s full photographs are not reproduced for birthday notices; initials are used instead.",
      },
      {
        type: "p",
        text: "Application forms on this proposal site do not transmit data to a server. For official applications, use the school’s ERP, email or campus office.",
      },
    ],
  },
  support: {
    eyebrow: "Help",
    title: "Support & parent tools",
    lead: "Fee payment, ERP, the school app and the helpdesk.",
    blocks: [
      {
        type: "h2",
        text: "Reception helpdesk",
      },
      {
        type: "p",
        text: "18008890880, 9103854896, 9103854897. Transport queries: 18008890880, 9103854896.",
      },
      {
        type: "h2",
        text: "Online fee payment",
      },
      {
        type: "p",
        text: "Fees are collected through the official YouthConnekt portal linked in the header.",
      },
      {
        type: "h2",
        text: "ERP / parent login",
      },
      {
        type: "p",
        text: "Parents and staff use the YouthConnekt ERP for circulars, records and related services.",
      },
      {
        type: "h2",
        text: "App link",
      },
      {
        type: "p",
        text: "The school publishes an Android application package from its existing website. Download only from the official school domain.",
      },
    ],
  },
  mpd: {
    eyebrow: "Know us",
    title: "Mandatory public disclosure",
    lead: "Affiliation, people, land and learning spaces — as filed.",
    blocks: [
      { type: "h2", text: "General information" },
      {
        type: "table",
        headers: ["Information", "Details"],
        rows: mpdGeneral,
      },
      { type: "h2", text: "Infrastructure" },
      {
        type: "table",
        headers: ["Information", "Details"],
        rows: mpdInfrastructure,
      },
      {
        type: "p",
        text: "Teacher–section ratio 1.5 : 1. Librarian: Ms. Huma Malik. Counsellor and wellness teacher: Ms. Sumaya Showkat, M.A. Psychology, PG Guidance & Counselling.",
      },
    ],
  },
};
