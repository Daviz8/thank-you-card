/* eslint-disable @next/next/no-img-element */
"use client";

import { useEffect, useState, FC } from "react";
import confetti from "canvas-confetti";
import { useRouter } from "next/navigation";

interface Content {
  title: string;
  description: string;
  ImageUrl: string;
  phone: string;
}

interface ContentCardProps {
  title: string;
  description: string;
  ImageUrl: string;
  phone: string;
}

const ContentCard: FC<ContentCardProps> = ({title,description,ImageUrl, phone,}) => {
  return (
    <div className="flex flex-col items-center max-w-2xl mx-auto p-6 text-center">
      <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-indigo-500 shadow-md">
        <img
          src={ImageUrl}
          alt="Appreciation Avatar"
          className="object-cover w-32 h-32"
        />
      </div>

      <h1 className="mt-6 text-3xl font-bold text-gray-900">
        {title}
      </h1>

      <p className="mt-4 text-gray-600 leading-relaxed">
        {description}
      </p>

      {/* hidden phone for debug if needed */}
      <span className="hidden">{phone}</span>
    </div>
  );
};

const Contents: Content[] = 
[

   {
    title: "Uche Juan Augustine",
    description: "As we prepare to watch a ball drop and pretend that the fundamental laws of space-time care about a calendar some guys in robes finalised in 1582 😏, I wanted to take a second to specially thank you, My father, for being a good friend, Leader, Pastor and Life Coach. Your Impact is a blessing to my life and the generation you are called to sir. This is a direct message and tribute for the year 2025. Thank for things that 'etc' can not summarize sir. God grant you your desires sir and may they begin to manifest even before the year 2026. so funny backstory I actually had this silly idea during your last sermon when you said we should appreciate everyonne that has been a blessing to us this year 😂. Thank you sir for reading through. My name is Okoro Ezichi David and I love you sir from the depth of my being 😌",
    ImageUrl: '/images/pache.png',
    phone: "08037252665",
  },


  {
    title: "Valentina Lawrence",
    description: "As we prepare to watch a ball drop and pretend that the fundamental laws of space-time care about a calendar some guys in robes finalised in 1582 😏, I wanted to take a second to specially thank you, Valentina Lawrence, for being a good friend in the year 2025. You may not know this, but you've given me some life-syncing counsel from time to time even though we don't talk all the time. I'm actually in the process of understanding you (baby steps), but I want you to take this as a tribute for the year 2025. Memories were shared and I'm glad you were a part of them. Thank you, dear.",
    ImageUrl: '/images/valentina.png',
    phone: "07047452529",
  },
  {
    title: "Edwina Oluchi Ornuchukwu Donald",
    description: "As we prepare to watch a ball drop and pretend that the fundamental laws of space-time care about a calendar some guys in robes finalised in 1582 😏, I wanted to take a second to  specially thank you, Edwina. You're a friend very dear to my heart; we've had so many episodes this year but I'm grateful you stayed with this crazy version of me. I intentionally had a goal to make a female friend close to me this year; I almost didn't pull through, but I made a conscious effort to make sure it happened. Thank you for showing me that family is everything and thank you for entrusting your vulnerability to me. I love you and would love to see what 2026 holds for you and for us. This is a tribute message to you.",
    ImageUrl: '/images/edwina.png',
    phone: "08166651591"
  },
  {
    title: "Gideon Washington",
    description: "As we prepare to watch a ball drop and pretend that the fundamental laws of space-time care about a calendar some guys in robes finalised in 1582 😏, I wanted to take a second to  specially thank you  my mentor and friend, Gideon Washington. I'm not really the most empathetic person, but you showed me how to be broken even in the midst of crisis. Words are not enough to  thank you, sir; I can only summarise my experience with a heartbeat, and in a heartbeat, I'm grateful for every good seed you've sown this year, 2025. Next year is going to be bigger and better. Thank you for the life lessons. I'm waiting for you to write a book; maybe you'll title it 'The Streets' 😂. Thank you for being a soul winner, and thank you for everything else that cannot be put into writing. God bless you.",
    ImageUrl: '/images/gideon.png',
    phone: "08067036840"
  },
  {
    title: "Damowei Goodluck",
    description: "As we prepare to watch a ball drop and pretend that the fundamental laws of space-time care about a calendar some guys in robes finalised in 1582 😏, I wanted to take a second to  specially thank you, Mr Damowei, for pushing me to grow as a developer. It's been a year working with you and you have been a blessing. This is a tribute to the baddest CTO I know 😅. Thank you for helping me become accountable for every line of code and thank you for linking me up to your circle. Happy New Year in advance.",
    ImageUrl: '/images/damowei.png',
    phone: "09032137908"
  },
  {
    title: "Dr Kachi Adeshina",
    description: "As we prepare to watch a ball drop and pretend that the fundamental laws of space-time care about a calendar some guys in robes finalised in 1582 😏, I wanted to take a second to  specially thank you, Dr Kachi, for being a good friend.",
    ImageUrl: '/images/kachi.png',
    phone: "09038201234"
  },
  {
    title: "Jessica David",
    description: "As we prepare to watch a ball drop and pretend that the fundamental laws of space-time care about a calendar some guys in robes finalised in 1582 😏, I wanted to take a second to  specially thank you for being a good friend. Take this as a tribute from me; I see how you believe in what I do and how you genuinely check up on me, and I pray that the New Year brings good tidings, IJN.",
    ImageUrl: '/images/jessica.png',
    phone: "07068554257"
  },
  {
    title: "Nathaniel Jones",
    description: "As we prepare to watch a ball drop and pretend that the fundamental laws of space-time care about a calendar some guys in robes finalised in 1582 😏, I wanted to take a second to  specially thank you, Nathaniel, for being a good friend over the years. This is a tribute to a great man who has impacted a young man. Cheers to a New Year in advance and I pray for a change of story for you in Jesus' name.",
    ImageUrl: '/images/nathaneil.png',
    phone: "09159602240"
  },
  {
    title: "Victor Nebolisa",
    description: "As we prepare to watch a ball drop and pretend that the fundamental laws of space-time care about a calendar some guys in robes finalised in 1582 😏, I wanted to take a second to  specially thank you for being a good friend. This is a tribute to you; thank you for always coming through when I need help with my gadgets, even when it's not convenient for you. Thank you for putting in the effort to stay transparent in your craft and I pray from my heart that God blesses you tremendously.",
    ImageUrl: '/images/nebolisa.png',
    phone: "08121346724"
  },
  {
    title: "Peter",
    description: "As we prepare to watch a ball drop and pretend that the fundamental laws of space-time care about a calendar some guys in robes finalised in 1582 😏, I wanted to take a second to  specially thank you, Peter. You were the first tech bro I met; you may not know this, but you are the reason I started doing this programming stuff. Nobody sold the dream better in year one; you were the first person I heard explain what programming was all about. I'm grateful for that 30-minute conversation that changed my life. I wish I had started earlier, but nevertheless, I want you to take this as a tribute for being a good friend and I would love for you to plan 2026 very well. God bless you, bro.",
    ImageUrl: '/images/peter.png',
    phone: "07087151106"
  },
  {
    title: "Terkuma Benjamin",
    description: "As we prepare to watch a ball drop and pretend that the fundamental laws of space-time care about a calendar some guys in robes finalised in 1582 😏, I wanted to take a second to specially thank you, Tkay, for seeing me through the year. Thank you for being a bro, and thank you for the recommendations. I'm grateful for how you entrusted me with your brand deals this year; I'm looking forward to working with you and doing more with you. God bless you, Tkay, and Happy New Year in advance.",
    ImageUrl: '/images/tkay.png',
    phone: "07026258192"
  },
  {
    title: "Somadina Nnmelchi",
    description: "As we prepare to watch a ball drop and pretend that the fundamental laws of space-time care about a calendar some guys in robes finalised in 1582 😏, I wanted to take a second to  specially thank you, Somadina, for being a good friend. Thank you for carrying me along on every Obleee 😭. I'm grateful for the bro-bonding time spent. Take this as a tribute for the good times well spent. I pray God rewards you double for the good things you do for people. You are indeed one of a kind. Thank you, Somadina, and yes, I am waiting to see our wife! 😂",
    ImageUrl: '/images/somadina.png',
    phone: "08130504853"
  },
  {
    title: "Mr Ifeanyi Judah",
    description: "As we prepare to watch a ball drop and pretend that the fundamental laws of space-time care about a calendar some guys in robes finalised in 1582 😏, I wanted to take a second to  specially thank you, sir, for your counsel, your sermons, your teachings, and the insightful conversations I learn from. You've been a blessing from a distance. This is a tribute to you, sir, for 2025 and times past. God bless you, sir.",
    ImageUrl: '/images/judah.png',
    phone: "08064040279"
  },
  {
    title: "Mrs Onome Richard",
    description: "As we prepare to watch a ball drop and pretend that the fundamental laws of space-time care about a calendar some guys in robes finalised in 1582 😏, I wanted to take a second to  specially thank you, ma, for everything you put me through this year in my place of service. Thank you for the care, love, and concern in making sure that I am never missing in my place of service. This is a tribute to the best MD I know. God bless you, ma.",
    ImageUrl: '/images/onome.png',
    phone: "07063292489"
  },
  {
    title: "Dr UC",
    description: "As we prepare to watch a ball drop and pretend that the fundamental laws of space-time care about a calendar some guys in robes finalised in 1582 😏, I wanted to take a second to  specially thank you, Dr Uche, for coming through for me. To be honest, you literally took my matters upon yourself. This is just an anonymous medium to say thank you. Thank you for the gifts that were a direct necessity for me, thank you for housing me, and thank you for everything else that cannot be put into words. Take this as a tribute for the year 2025, and I pray God grants you your desires.",
    ImageUrl: '/images/uc.png',
    phone: "09032626372"
  },
  {
    title: "Victor",
    description: "As we prepare to watch a ball drop and pretend that the fundamental laws of space-time care about a calendar some guys in robes finalised in 1582 😏, I wanted to take a second to  specially thank you, Ezeburuburu 😂, for being my wingman on this media journey. This is a tribute to you for the good seeds you've sown in my life and a big thank you for making things easy for me. You are a leader and a good person. God bless you, bro.",
    ImageUrl: '/images/victor.png',
    phone: "08133959248"
  },
  {
    title: "Dr Raphael Ben",
    description: "As we prepare to watch a ball drop and pretend that the fundamental laws of space-time care about a calendar some guys in robes finalised in 1582 😏, I wanted to take a second to  specially thank you, Mr Clarity, for helping me discover my uniqueness this year. Thank you, sir, for being an encyclopaedia to all my questions. This is a tribute to you, sir, and I am grateful you were a big part of my year. Happy New Year in advance, sir.",
    ImageUrl: '/images/rapheal.png',
    phone: "09034067143"
  },
    {
    title: "Alfred",
    description: "As we prepare to watch a ball drop and pretend that the fundamental laws of space-time care about a calendar some guys in robes finalised in 1582 😏, I wanted to take a second to  specially thank you alfred for being my most unseeming wingman, You carried me along your craft, business and also brought deals for me. Thank you for the recoomendations, the business advice and the good time spent. This is a tribute to you, and I am grateful you were a big part of my year. Happy New Year in advance, bro.",
    ImageUrl: '/images/alfred.png',
    phone: "08186937289"
  }
];


export default function Home() {
  //To call the phone number from the form page store it inside a state and render it using UseEffect
  const [validatedPhone, setValidatedPhone] = useState<string | null>(null);
  const router = useRouter();
  useEffect(() => {
    const phone = localStorage.getItem("validatedPhone");

    if (!phone) {
      router.push("/");
      return;
    }
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setValidatedPhone(phone);
  }, [router]);


  // 🎉 Confetti animation
  useEffect(() => {
    confetti({
      particleCount: 180,
      spread: 90,
      origin: { y: 0.6 },
    });
  }, []);

  if (!validatedPhone) return null;

  const matchedContent = Contents.find((content) => content.phone === validatedPhone);
  if (!matchedContent) return null;

  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-50">
      <ContentCard
        title={matchedContent.title}
        description={matchedContent.description}
        ImageUrl={matchedContent.ImageUrl}
        phone={matchedContent.phone}
      />
    </section>
  );
}
