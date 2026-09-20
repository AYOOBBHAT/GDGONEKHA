import {
  ageCriteria,
  schoolSongLyrics,
  type PageContent,
} from "./content";
import {
  academicCalendarHeaders,
  academicCalendarRows,
} from "./academicCalendar";

export const pages: Record<string, PageContent> = {
  about: {
    eyebrow: "Know us",
    title: "The school",
    lead: "Education that prepares to Thrive. For life.",
    blocks: [
      {
        type: "p",
        text: "G D Goenka Kupwara is an endeavour of Symphony Educational Trust. It is an initiative to impart quality education in an environment, which is caring, stimulating, and challenging. The school has an ultramodern architecture with state-of-the-art technology. The school rises above the confines of conventional teaching.",
      },
      {
        type: "p",
        text: "The campus stretches over 45 Kanals. Every detail on the campus has been carefully undertaken — flooring with anti-skid tiles, antibacterial wall paints, soundproof classrooms, a Wi-Fi-enabled campus, a semi-Olympic size swimming pool, a 200-seat auditorium, and a food court are a few of the allusions. Sports facilities vis-a-vis lawn tennis, basketball, volleyball, and football courts have been created on international standards.",
      },
      {
        type: "p",
        text: "The school philosophy is based on treating each child in a manner that provides appropriate development programs, so as to encourage not just learning but lifelong wisdom.",
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
        text: "When I look back at the journey that began in 1994, I recall a simple yet powerful vision – one rooted not just in academics, but in the wellbeing, dignity and safety of every child...",
        cite: "Sh. Anjani Kumar Goenka",
        role: "Chairman, GD Goenka Group",
      },
      {
        type: "p",
        text: "GD Goenka was founded to raise the bar for school education in India. And from the very beginning, we chose to lead, not follow.",
      },
      {
        type: "p",
        text: "We were the first to introduce GPS-enabled, air-conditioned school buses – the iconic yellow buses that set a new benchmark in safety and comfort. We ensured children drank only mineral water, long before it became common practice. We brought in clinical psychiatrists to support emotional well-being, at a time when few were even speaking of mental health in schools. Every decision, every detail was guided by one belief: that our children deserve the best start in life, in every sense of the word.",
      },
      {
        type: "p",
        text: "Today, as I see GD Goenka grow across the country and beyond, I feel immense pride – but even more, a deep sense of responsibility. We must continue to evolve with the times while staying true to the values we began with. In an age of AI, rapid change and global challenges, our duty is to equip our students with not just knowledge, but resilience, empathy, and a sense of purpose.",
      },
      {
        type: "p",
        text: "Every child deserves an education that honours their individuality and prepares them to face the world with courage and confidence. At GD Goenka, we remain committed to that promise – every day, for every learner, in every classroom.",
      },
      {
        type: "quote",
        text: "Warm regards,",
        cite: "Sh. Anjani Kumar Goenka",
        role: "Chairman, GD Goenka Group",
      },
    ],
  },
  vision: {
    eyebrow: "Know us",
    title: "Vision & mission",
    lead: "Thrive. For Life.",
    blocks: [
      { type: "h2", text: "Vision" },
      {
        type: "p",
        text: "Thrive. For Life.",
      },
      {
        type: "p",
        text: "In our vision for the school, each and every student should develop and mould their ambitions towards perfection. The goal is to support and nurture the student’s and our own natural desire to be lifelong learners. We anticipate creativity and initiative, enterprise and innovation, and cognitive strategies for progressive learning. Our vision is to prepare and motivate our students for a rapidly changing world, by instilling in them critical thinking skills, a global perspective and a respect for core values of honesty, loyalty, perseverance and compassion. Students will have success for today and be prepared for tomorrow.",
      },
      { type: "h2", text: "Mission" },
      {
        type: "p",
        text: "Empowering every student with confidence, compassion and curiosity to shape tomorrow.",
      },
      {
        type: "p",
        text: "The brand essence Thrive. For Life. takes its core idea from a quest for excellence, an insatiable thirst for knowledge and a limitless craving for the latest.",
      },
      {
        type: "p",
        text: "Our school aspires to be a national leader in developing educated contributors, career ready learners and global citizens, and in generating a meaningful, high impact, progressive and sustainable partnership with society.",
      },
      {
        type: "p",
        text: "Our mission is to provide a safe haven where everyone is valued and respected. The faculty, in partnership with parents and families are fully committed to student’s college and career readiness. Students are empowered to meet current and future challenges to develop social awareness, civic responsibility and personal growth.",
      },
    ],
  },
  song: {
    eyebrow: "Know us",
    title: "School song",
    lead: "Let the journey start with a song.",
    blocks: schoolSongLyrics.map((line) => ({ type: "p" as const, text: line })),
  },
  director: {
    eyebrow: "Know us",
    title: "From the desk of the Director",
    lead: "Dear Students, Parents, and Esteemed Members of the GD Goenka Public School Handwara Community,",
    blocks: [
      {
        type: "p",
        text: "As we continue our journey of growth and excellence, I am pleased to share our unwavering commitment to providing a nurturing and inspiring environment for all who walk through our doors.",
      },
      {
        type: "p",
        text: "At GD Goenka Public School Handwara, we believe in empowering students to discover their potential, develop critical thinking skills, and grow into responsible and compassionate citizens of the world. Our academic programs are designed not only to challenge students intellectually, but also to foster personal growth, resilience, and a strong sense of community.",
      },
      {
        type: "p",
        text: "Our dedicated faculty and staff are the heart of this institution, working with passion and purpose to ensure each student is given the opportunity to succeed. We also believe that education extends beyond the classroom, which is why we offer a wide range of extracurricular activities that encourage students to explore their interests, hone their talents, and develop leadership skills.",
      },
      {
        type: "p",
        text: "The journey of learning is a partnership between students, teachers, parents, and the broader community. Together, we create an environment where curiosity is nurtured, creativity is celebrated, and every student is supported in reaching their highest potential.",
      },
      {
        type: "p",
        text: "I am incredibly proud of our school’s accomplishments and the strides we continue to make in shaping a bright future for our students. I look forward to the continued success we will achieve together as a community.",
      },
      {
        type: "p",
        text: "Warm regards,",
      },
      {
        type: "p",
        text: "Dr. Khalid Maqbool, Director, GD Goenka Public School Handwara",
      },
    ],
  },
  managingDirector: {
    eyebrow: "Know us",
    title: "From the desk of the Managing Director",
    lead: "Dear Parents, Students, and Visitors,",
    blocks: [
      {
        type: "p",
        text: "Welcome to GD Goenka Public School Handwara. It is with great enthusiasm that I reach out to our entire school community as we embark on another exciting chapter in our journey of learning, growth, and achievement. As the Managing Director of this vibrant institution, I am deeply committed to fostering an environment that not only focuses on academic excellence but also promotes personal development, creativity, and well-being for all our students.",
      },
      {
        type: "p",
        text: "At GD Goenka Public School Handwara, we understand that education is about more than just classroom lessons. It’s about preparing our students to be resilient, responsible, and engaged citizens in a rapidly changing world. We aim to provide a holistic education that combines rigorous academics with a broad range of extracurricular activities, creating opportunities for every child to explore their passions, build confidence, and develop lifelong skills.",
      },
      {
        type: "p",
        text: "Our dedicated team of educators works closely with students, encouraging them to push boundaries, ask questions, and think critically. We are also deeply committed to fostering a supportive and inclusive environment where every student feels valued and respected. We believe in the power of collaboration – between teachers, students, parents, and the wider community – to create a culture of success that benefits everyone.",
      },
      {
        type: "p",
        text: "The partnership between school and home is one of the cornerstones of our philosophy. We believe that the involvement of parents and guardians is integral to the academic and personal success of our students. Your continued support and active engagement are vital in helping us maintain the high standards that make GD Goenka Public School Handwara such a special place.",
      },
      {
        type: "p",
        text: "As we look ahead, I am excited about the many opportunities we have to grow, innovate, and strengthen our community. Together, we will continue to inspire our students to reach their fullest potential, overcome challenges, and become thoughtful, compassionate, and confident individuals ready to make a positive difference in the world.",
      },
      {
        type: "p",
        text: "Thank you for choosing GD Goenka Public School Handwara as the place where your child’s educational journey will unfold. I look forward to working alongside you to ensure that every student experiences the very best we have to offer.",
      },
      {
        type: "p",
        text: "Warm regards,",
      },
      {
        type: "p",
        text: "Imtiyaz Maqbool Bhat, Managing Director, GD Goenka Public School Handwara",
      },
    ],
  },
  principal: {
    eyebrow: "Know us",
    title: "Principal's message",
    lead: "Dear Parents, Students, and Well-Wishers,",
    blocks: [
      {
        type: "p",
        text: "It is my privilege and honor to welcome you to GD Goenka School, a place where education goes beyond classrooms, textbooks, and examinations. Our vision is to nurture young minds who are confident, compassionate, curious, responsible, and prepared to make a meaningful contribution to the world.",
      },
      {
        type: "p",
        text: "At GD Goenka Public School, we believe that every child is unique and possesses the potential to flourish. Our theme, “Thrive for Life,” beautifully reflects our commitment to providing an environment where every learner is encouraged not merely to succeed, but to grow, discover, contribute, and thrive throughout life. We endeavour to provide an enriching environment where academic excellence goes hand in hand with character, creativity, critical thinking, communication, collaboration, physical well-being, and emotional growth.",
      },
      {
        type: "p",
        text: "As a school, we also recognise that education is a partnership between the school, the child, and the family. With the trust and support of our parents and the dedication of our teachers and staff, we can create a nurturing environment where every child feels valued, heard, respected, and inspired to give their best.",
      },
      {
        type: "p",
        text: "I firmly believe that the finest education is built through a strong partnership between school, parents, teachers, and students. With mutual trust, open communication, and a shared commitment to the child’s well-being, we can create an environment in which every learner has the opportunity to thrive.",
      },
      {
        type: "p",
        text: "My vision is to build a school culture where every child feels a sense of belonging, every teacher feels empowered to inspire, and every learner is encouraged to dream with purpose. We want our students to leave our classrooms not only with knowledge, but also with the confidence and character to face life with courage, kindness, resilience, and responsibility.",
      },
      {
        type: "p",
        text: "As we move forward together, let us inspire our children to dream fearlessly, learn continuously, lead responsibly, and live purposefully.",
      },
      {
        type: "quote",
        text: "At GD Goenka School, we don't just prepare children for the future. We prepare them to thrive—throughout life.",
      },
      {
        type: "p",
        text: "I warmly welcome you to our school community and look forward to a wonderful journey of learning, growth, and excellence together.",
      },
      {
        type: "p",
        text: "With warm regards,",
      },
      {
        type: "p",
        text: "Principal, GD Goenka Public School",
      },
    ],
  },
  academics: {
    eyebrow: "Academics",
    title: "Academics",
    lead: "English-medium, co-educational, CBSE-affiliated — with activity, expression and thought at the centre.",
    blocks: [
      {
        type: "p",
        text: "The school is affiliated to the Central Board of Secondary Education. English is the medium of instruction. The establishment works with a single objective: holistic education.",
      },
      {
        type: "p",
        text: "Explore teaching methodology, the academic calendar, and the curriculum to see how learning is planned from Nursery through Class XII.",
      },
    ],
  },
  teaching: {
    eyebrow: "Academics",
    title: "Teaching methodology",
    lead: "Lessons that ask more of a child than memory — and stay with them after the bell.",
    blocks: [
      {
        type: "p",
        text: "At GD Goenka Public School Kupwara, teaching is planned for children who will live in Handwara, in Kashmir, and in a much wider world. Classes run in English. The curriculum follows CBSE. The method is ours: every period should leave a child a little more able to think, speak, try, and care.",
      },
      {
        type: "p",
        text: "We do not treat a textbook as the lesson. Teachers open with a question, a problem, a story, or a task that the class can actually do. Students talk in pairs and small groups before they write. They explain their reasoning aloud. They get the chance to be wrong without being diminished, then to try again with clearer thinking. Homework is meant to practise what was understood in school, not to teach the chapter for the first time at the dining table.",
      },
      { type: "h2", text: "What a Goenkan hour looks like" },
      {
        type: "list",
        items: [
          "Clear learning intention so the class knows what a good hour of work looks like",
          "Talk, reading, writing and making — not only copying from the board",
          "Checking for understanding during the period, not only at the test",
          "Support for children who need more time, and stretch for those who are ready",
          "Respect in the room: listening, turn-taking, and language that is kind as well as accurate",
        ],
      },
      { type: "h2", text: "Mind, body and character together" },
      {
        type: "p",
        text: "Academic strength sits beside laboratories, the library, sport, and the stage. Science, mathematics, computers, robotics and English language work happen in rooms built for that purpose. On the same campus, children train on football, basketball, tennis and volleyball courts, and in the swimming pool. Assemblies and performances in the auditorium give them a public voice. Clubs and house life ask them to lead, to cooperate, and to represent something larger than themselves.",
      },
      {
        type: "p",
        text: "We want graduates who can sit an examination with composure — and who can also collaborate, create, communicate, and keep their nerve when the answer is not in the book. That is the practical meaning of Thrive. For Life. in our classrooms.",
      },
      { type: "h2", text: "Teachers as craftspeople" },
      {
        type: "p",
        text: "Faculty are chosen for subject knowledge and for how they are with children. A good teacher here notices who is quiet, who is rushing, and who needs a different way in. Planning, marking and conversation with colleagues are part of the work, not extras. The school backs teachers to keep learning their craft — through observation, sharing of practice, and time to improve a unit after it has been taught.",
      },
      { type: "h2", text: "Parents in the loop" },
      {
        type: "p",
        text: "Children thrive when home and school tell the same story. Parent–teacher meetings, the ERP portal, and an open line to the office exist so families know what is being taught, how a child is getting on, and what to practise at home. We ask parents to be partners in routines, reading, and character — not spectators of a report card.",
      },
      {
        type: "quote",
        text: "We prepare children for more than the next class. We prepare them to keep learning when no one is grading them.",
      },
    ],
  },
  calendar: {
    eyebrow: "Academics",
    title: "Academic calendar",
    lead: "Yearly events for 2026 — examinations, celebrations, and holidays as published by the school.",
    blocks: [
      {
        type: "p",
        text: "The table below follows the official Yearly Events 2026 circular. Dates can shift with government orders or school notices; confirm with the office and the ERP parent portal when needed.",
      },
      {
        type: "table",
        headers: academicCalendarHeaders,
        rows: academicCalendarRows,
      },
    ],
  },
  mpd: {
    eyebrow: "Know us",
    title: "Mandatory public disclosure",
    lead: "Official documents and information published for transparency.",
    blocks: [
      {
        type: "p",
        text: "View the complete Mandatory Public Disclosure page for general information, certificates, and academic documents.",
      },
    ],
  },
  tours: {
    eyebrow: "Beyond academics",
    title: "Study tours",
    lead: "The world becomes the classroom — carefully planned, safely led.",
    blocks: [
      {
        type: "p",
        text: "At GD Goenka Kupwara, study tours are planned as focused learning journeys, not day trips for their own sake. Each outing is chosen to deepen what students are already exploring in class — history that can be walked through, science that can be observed up close, and landscape that can be trekked with teachers beside them.",
      },
      {
        type: "p",
        text: "Students travel with escort staff who prepare them beforehand and stay with them until they are handed back to parents. They learn to ask better questions, notice detail, and work as a group away from the familiar rhythm of the timetable.",
      },
    ],
  },
  celebrations: {
    eyebrow: "Beyond academics",
    title: "Celebrations",
    lead: "Moments that teach belonging, culture and joy.",
    blocks: [
      {
        type: "p",
        text: "Celebration is part of how a school remembers who it is. Across the year, GD Goenka Kupwara gathers students and staff for national days, cultural festivals, house events and school milestones — occasions that turn the campus into a shared stage of music, colour and conversation.",
      },
      {
        type: "p",
        text: "These days are designed with purpose. Younger children discover stories, songs and simple rituals; older students plan, perform and lead. Everyone learns that tradition can be honoured with warmth, and that difference can be welcomed without losing one’s own roots.",
      },
      {
        type: "h2",
        text: "How we celebrate",
      },
      {
        type: "list",
        items: [
          "Assemblies and performances that give every child a chance to participate",
          "Cultural programmes that introduce regional and national traditions with care",
          "House and class events that build teamwork beyond the classroom",
          "Community moments that bring parents into the life of the school",
        ],
      },
      {
        type: "p",
        text: "Above all, celebrations here are about presence — being together, noticing each other, and leaving the day with a clearer sense of school spirit.",
      },
    ],
  },
  sports: {
    eyebrow: "Beyond academics",
    title: "Sports",
    lead: "Strong bodies, steady minds, and the habit of fair play.",
    blocks: [
      {
        type: "p",
        text: "Sport at GD Goenka Kupwara is treated as essential schooling — not an afterthought. Regular practice builds stamina, focus and resilience, while matches teach students to compete hard, lose well and support a teammate under pressure.",
      },
      {
        type: "p",
        text: "The campus is equipped for both everyday play and structured coaching. From early years movement games to competitive school teams, every age group has a clear path into activity that feels energetic, safe and inclusive.",
      },
      {
        type: "h2",
        text: "On the field and in the pool",
      },
      {
        type: "list",
        items: [
          "Team sports — football, basketball, volleyball and cricket",
          "Racquet games — badminton, table tennis and lawn tennis",
          "Athletics and fitness for speed, strength and endurance",
          "Swimming as both recreation and a vital life skill",
          "Age-appropriate play spaces for the youngest learners",
        ],
      },
      {
        type: "p",
        text: "Trained instructors and PE faculty guide technique, warm-ups and safety. The aim is simple: students who leave school fitter in body, steadier in character, and ready to keep moving through life.",
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
    lead: "Compassion, Courage, Wisdom and Hope — four houses for the whole school, session 2026–2027.",
    blocks: [
      {
        type: "p",
        text: "GD Goenka Public School Kupwara runs an established house system. Every student belongs to one of four houses: Compassion (yellow), Courage (green), Wisdom (blue) and Hope (orange). The split is meant for team spirit, a place to belong, healthy competition, and a clear way to share duties.",
      },
      {
        type: "p",
        text: "Houses plan the weekly morning assembly in turn and help keep discipline at arrival and departure. Teachers are allotted to each house so teams can be managed through the year. Students stay in their house; placement follows class roll numbers as published in the House System Planner.",
      },
    ],
  },
  clubs: {
    eyebrow: "Beyond academics",
    title: "Clubs",
    lead: "Nine clubs for session 2026–27 — each with a teacher in-charge and a project students can finish, show, or serve with.",
    blocks: [
      {
        type: "p",
        text: "Clubs at GD Goenka Public School Kupwara are for making something real: a model, a campaign, an exhibition, a match, a service, a performance. They are not talking shops. Students join a club, take a role in a group, and work towards an outcome that other people can see.",
      },
      {
        type: "p",
        text: "The assignment of teachers and the activity plans follow the school’s club constitution for 2026–27, coordinated by Qurat Fayaz.",
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
        text: "Anti-skid tiles, antibacterial wall paints, soundproof classrooms, Wi-Fi, a semi-Olympic swimming pool, a 200-seat auditorium and a food court. Sports courts for lawn tennis, basketball, volleyball and football at international standard.",
      },
      {
        type: "p",
        text: "Mandatory disclosure records 40 classrooms, laboratories including composite science, maths, robotics, English language and computer labs, a library, indoor and outdoor play, and a 350 sq. m auditorium.",
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
          "Soundproof classrooms",
          "Anti-skid flooring and antibacterial wall paints",
          "Semi-Olympic swimming pool",
          "200-seat auditorium",
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
    lead: "Growing the whole child — mind, body, voice and values.",
    blocks: [
      {
        type: "p",
        text: "Academic success matters at GD Goenka Kupwara, but it is never the only measure. Holistic development means every student has room to try, fail, practise and shine — in arts, sport, conversation and character — within the same school week.",
      },
      {
        type: "p",
        text: "Programmes are age-aware and teacher-guided. Younger children explore through play, rhythm and simple craft. Older students take on performance, debate, leadership roles and longer projects that ask for discipline as well as imagination.",
      },
      {
        type: "h2",
        text: "What this looks like",
      },
      {
        type: "list",
        items: [
          "Creative expression through music, dance, drama, art and craft",
          "Spoken confidence via discussion, debate and elocution",
          "Physical growth through games, fitness and structured PE",
          "Guidance conversations that help students think about future pathways",
          "Value-led learning that builds respect, empathy and responsibility",
        ],
      },
      {
        type: "p",
        text: "The goal is a balanced Goenkan: curious in class, capable on the field or stage, and steady in how they treat others.",
      },
    ],
  },
  transport: {
    eyebrow: "Facilities",
    title: "Transport",
    lead: "Safe routes home — planned, monitored and attended.",
    blocks: [
      {
        type: "p",
        text: "School transport at GD Goenka Kupwara is organised so the journey feels as considered as the school day. Buses run on major local routes, with stops allotted according to the school’s route plan and seat availability.",
      },
      {
        type: "p",
        text: "Safety is built into the service: vehicles are monitored, journeys are supervised, and each bus carries a female attendant to look after students from pickup to drop. Families receive clear guidance on timing, stops and how to raise a transport query with the office.",
      },
      {
        type: "h2",
        text: "For parents",
      },
      {
        type: "list",
        items: [
          "Confirm your route, stop and fare with the transport desk before registering",
          "Share address or stop changes in writing so routes stay accurate",
          "Students should use only their allotted bus — switches for visits to friends are not allowed",
          "Give a full calendar month’s notice if you need to discontinue the service",
          "Help children practise calm boarding, respectful behaviour and seat discipline",
        ],
      },
      {
        type: "note",
        text: "Transport is subject to availability and may be reviewed if safety or discipline is compromised. For route queries, call the school helpdesk.",
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
      { type: "h2", text: "Class-wise age criteria for admission — 2027" },
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
        text: "The official e-prospectus for this campus is not published yet. You may request a copy from the admissions desk at gdgoenkahnd@gmail.com when it is available.",
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
  curriculum: {
    eyebrow: "Academics",
    title: "Curriculum",
    lead: "A CBSE path from Nursery to Class XII — English-medium, broad, and built to last after school.",
    blocks: [
      {
        type: "p",
        text: "The curriculum at GD Goenka Public School Kupwara is the map of what a child studies, in which order, and why. It follows the Central Board of Secondary Education. English is the language of the classroom. The aim is not a stuffed syllabus. It is a sequence that grows language, number, science, the arts, sport, and character together — so a student leaving Handwara can sit a board examination and also stand in the world with sense and heart.",
      },
      {
        type: "p",
        text: "How that map is taught is described on Teaching Methodology. When it is taught through the year is on the Academic Calendar. This page is the map itself.",
      },
      { type: "h2", text: "Early years" },
      {
        type: "p",
        text: "Nursery and Kindergarten are for settling, speaking, listening, and play that has a purpose. Children learn to hold a pencil, hear sounds in words, count what they can see, move with control, and share a room with others. Stories, rhymes, outdoor time, and simple making sit beside the first steps in literacy and numeracy. The day is short enough to protect energy, and regular enough to feel safe.",
      },
      { type: "h2", text: "Primary" },
      {
        type: "p",
        text: "In the primary years, reading, writing and mathematics take a firmer shape. Environmental studies open the window onto the living world and the neighbourhood. Art, music, and physical education are not extras; they train attention and confidence. Children begin to work as a group, to finish a task, and to explain what they did. Assessment is frequent and light enough to guide teaching, not only to rank a child.",
      },
      { type: "h2", text: "Middle school" },
      {
        type: "p",
        text: "Subjects deepen. Languages, mathematics, science and social science are taught as disciplines with their own habits of mind. Laboratories for science, mathematics, computers, robotics and English language give students a place to try ideas with their hands, not only on paper. Subject enrichment, book fairs, house work and clubs sit on the same calendar as unit tests, so a child’s year is not only examination weeks.",
      },
      { type: "h2", text: "Secondary and senior secondary" },
      {
        type: "p",
        text: "From Class IX onward the CBSE programme prepares students for board-level work: clearer writing, stronger reasoning, timed practice, and honest revision. Term examinations and internal assessments — multiple assessment, portfolios, subject enrichment — are part of that preparation, not a surprise at the end. We want young people who can handle a paper with composure, and who have also trained the body, the voice, and the habit of working with others.",
      },
      { type: "h2", text: "What sits around the syllabus" },
      {
        type: "list",
        items: [
          "Sport and swimming as weekly discipline, not a once-a-year sports day",
          "Assemblies and the auditorium as places to speak in public",
          "Clubs, houses and celebrations as practice in belonging and leadership",
          "Study tours when they can make a chapter real — such as a planned night camp",
          "A parent partnership so home and school keep the same expectations",
        ],
      },
      {
        type: "p",
        text: "Prescribed books and notebooks for each class are issued by the school office for the session. Collect the current list from the front desk if you need it in print.",
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
        text: "School helpdesk: 8492980030. For admissions and transport queries, call the school office or write to gdgoenkahnd@gmail.com.",
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
};
