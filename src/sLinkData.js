import mitsuru from "./imgs/imgs/mitsuru2.png"

const sLinkData = [
    {
        name:"Mitsuru Kirijo",
        arcana:"Empress",
        route:"m",
        sprite: mitsuru,
        guide: {
            unlock:"Rank six Academics (Genius) + 1st place in an exam. Starts 21/11 -> Tuesday, Thursday and Saturday.",
            location:"1°st floor Faculty Office",
            gifts:"Goggle-Eye Idol / Japanese Doll",
            ranks: [
                [
                    {
                        q:"Please tell me what the etiquette here is. Are there any customs I need to follow...?",
                        a: ["All options are correct"]
                    },
                    {
                        q:"...Does that make me strange?",
                        a: ["All options are correct"]
                    }
                ],
                [
                    {
                        q:"> Mitsuru seems nervous.",
                        a:[
                            "Is this your first time?  (+2/+1)",
                            "Can you eat with your hands?  (+0/+0)"
                        ]
                    }
                ],
                [
                    {
                        q:"> Mitsuru seems dejected.",
                        a:[
                            "Treat her to takoyaki  (+0/+0)",
                            "Ask her to treat you  (+2/+1)"
                        ]
                    },
                    {
                        q:"Perhaps he's just maturing...",
                        a:[
                            "Does that make you sad?  (+0/+0)",
                            "Does that make you happy?  (+3/+2)"
                        ]
                    },
                    {
                        q:"I can't explain why, though...",
                        a:[
                            "Maybe you're in love.  (+2/+1)",
                            "Maybe you're anxious. (+2/+1)",
                            "Maybe you're sad.  (+0/+0)"
                        ]
                    },
                    {
                        q:"Sorry for subjecting you to my incoherent ramblings... Please forget what I just said.",
                        a:[
                            "Cheer her on  (+0/+0)",
                            "Agree to forget about it  (+2/+1)"
                        ]
                    }
                ]
            ],
            reward:"Alilat"
        }
    },
    {
        name:"Maiko Oohashi",
        arcana:"Hanged",
        route:"m",
        sprite:"",
        guide: {
            unlock:"",
            location:"",
            gifts:"",
            ranks: [
                "Automatic",
                "Sure, Let's go > Anything x2",
                "Anything > Don't worry, he'll be there",
                "I'm happy for you/Nobody could forget you",
                "That's terrible > That isn't true",
                "Calm down/Sounds like a plan > You don't need that stuff",
                "Anything > Anything",
                "Hamburgers > Yeah, you did good > Choose your dad",
                "We're friends forever",
                 "Automatic"],
            reward:"Attis"
        }
    },
    {
        name:"Yuko Nishiwaki",
        arcana:"Strength",
        route:"m",
        sprite:"",
        guide: {
            unlock:"",
            location:"",
            gifts:"",
            ranks: ["Automatic", 
                "What happened? > I agree > That's true",
                "Not really > Anything > Let's go",
                "Anything x2 > No worries > I'm honored",
                "Anything > Do you know him? < It's up to you",
                "Let's hope for the best",
                "Are you relieved? > Sure",
                "Anything > A boy/A girl",
                "Forget about what? > An instructor",
                 "Automatic"],
            reward:"Siegfried"
        }
    },
    {
        name:"Fuuka Yamagishi",
        arcana:"Priestess",
        route:"m",
        sprite:"",
        guide: {
            unlock:"Rank 2 Courage (Ordinary)",
            location:"2° Classroom Floor",
            gifts:"IN DOUBT por lo de abajo",
            ranks: ["Automatic",
                "Sure",
                "I believe in you > Anything",
                "Anything > Oh, I don't think so",
                "You did a great job > Anything",
                "Okay",
                "Anything > Anything",
                "Anything > I want to be with you too",
                "Anything > Anything",
                "Automatic"],
            reward:""
        }
    },
    {
        name:"",
        arcana:"",
        route:"",
        sprite:"",
        guide: {
            unlock:"",
            location:"",
            gifts:"",
            ranks: [],
            reward:""
        }
    },
    {
        name:"",
        arcana:"",
        route:"",
        sprite:"",
        guide: {
            unlock:"",
            location:"",
            gifts:"",
            ranks: [],
            reward:""
        }
    },
    {
        name:"",
        arcana:"",
        route:"",
        sprite:"",
        guide: {
            unlock:"",
            location:"",
            gifts:"",
            ranks: [],
            reward:""
        }
    },
    {
        name:"",
        arcana:"",
        route:"",
        sprite:"",
        guide: {
            unlock:"",
            location:"",
            gifts:"",
            ranks: [],
            reward:""
        }
    },
    {
        name:"",
        arcana:"",
        route:"",
        sprite:"",
        guide: {
            unlock:"",
            location:"",
            gifts:"",
            ranks: [],
            reward:""
        }
    },
    {
        name:"",
        arcana:"",
        route:"",
        sprite:"",
        guide: {
            unlock:"",
            location:"",
            gifts:"",
            ranks: [],
            reward:""
        }
    },
    {
        name:"",
        arcana:"",
        route:"",
        sprite:"",
        guide: {
            unlock:"",
            location:"",
            gifts:"",
            ranks: [],
            reward:""
        }
    },
    {
        name:"",
        arcana:"",
        route:"",
        sprite:"",
        guide: {
            unlock:"",
            location:"",
            gifts:"",
            ranks: [],
            reward:""
        }
    }
]

export default sLinkData;