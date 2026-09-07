import {
  ageCriteria,
  schoolSongLyrics,
  type PageContent,
} from "./content";

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
        text: "The campus stretches over 95 Kanals. Every detail on the campus has been carefully undertaken — flooring with anti-skid tiles, antibacterial wall paints, soundproof classrooms, a Wi-Fi-enabled campus, centralized air conditioning, a semi-Olympic size swimming pool, a spacious auditorium, and a food court are a few of the allusions. Sports facilities vis-a-vis lawn tennis, basketball, volleyball, and football courts have been created on international standards.",
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
        text: "The school motto HIGHER STRONGER BRIGHTER takes its core idea from a quest for excellence, an insatiable thirst for knowledge and a limitless craving for the latest.",
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
    title: "Director's message",
    lead: "Official message will be published soon.",
    blocks: [
      {
        type: "note",
        text: "The Director’s message will be added here shortly. Please check back later, or contact the school office for more information.",
      },
    ],
  },
  principal: {
    eyebrow: "Know us",
    title: "Principal's message",
    lead: "Official message will be published soon.",
    blocks: [
      {
        type: "note",
        text: "The Principal’s message will be added here shortly. Please check back later, or contact the school office for more information.",
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
        text: "The school is affiliated to the Central Board of Secondary Education under affiliation no. 730129. English is the medium of instruction. The establishment works with a single objective: holistic education.",
      },
      {
        type: "p",
        text: "Explore our teaching methodology, academic calendar and book list to understand how learning is planned across the year.",
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
        text: "The school employs competent faculty members qualified to accomplish the mission and goals of the institution. When determining acceptable qualifications of its faculty, the school gives primary consideration to the educational qualifications and also attaches great importance to competence, effectiveness, and capacity, including related work experiences in the field, professional degrees and certifications, honors and awards, continuous documented excellence in teaching, or other demonstrated competencies and achievements that contribute to effective teaching and student learning outcomes.",
      },
      {
        type: "p",
        text: "The management encourages the faculty to upgrade their specialization and pursue any research work to develop their talents further.",
      },
    ],
  },
  calendar: {
    eyebrow: "Academics",
    title: "Academic calendar",
    lead: "Official calendar will be published soon.",
    blocks: [
      {
        type: "note",
        text: "The academic calendar for the current session will be added here shortly. Please check back later, or confirm dates with the school office and the ERP parent portal.",
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
        text: "At GD Goenka Kupwara, study tours are planned as focused learning journeys, not day trips for their own sake. Each outing is chosen to deepen what students are already exploring in class — history that can be walked through, science that can be observed up close, and industries that show how ideas become work.",
      },
      {
        type: "p",
        text: "Students travel with teachers who prepare them beforehand and guide reflection afterwards. They learn to ask better questions, notice detail, and work as a group away from the familiar rhythm of the timetable.",
      },
      {
        type: "h2",
        text: "What students take away",
      },
      {
        type: "list",
        items: [
          "Stronger links between classroom topics and real places",
          "Confidence in new settings, with clear safety and supervision",
          "Curiosity, observation skills and respectful public behaviour",
          "Shared memories that build class spirit and belonging",
        ],
      },
      {
        type: "p",
        text: "Destinations and dates are shared with families in advance, with attention to age group, distance and learning goals. For the latest schedule, please check school circulars or speak with the class teacher.",
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
};
