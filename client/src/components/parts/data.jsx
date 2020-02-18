const DATA = {
  app: [
    {
      name: "System Design Capstone",
      describle: "Building up backend service for a frontend app",
      intro:
        "·  Establishing and compare efficiency between Postgres and MongoDB\n" +
        "·  Optimized single querying time from 3-9 seconds to 70ms in MongoDB\n" +
        "·  Deploying database on AWS EC2 instances. Expanding maximum RPS from 1.15k to 3.1k using NGINX as load balancer combining 3 t2.micro instances, with a 0.3% error rate and 210ms average responding time",
    },
    {
      name: "Realtime Playground",
      describle: "Multiplayer Uno card game connected by socket.io",
      intro:
        "·  Implemented the minimum gameplay requirement within 4 days starting from scratch\n" +
        "·  Deployed on Heroku allowing 3-12 players gaming while more clients are spectating\n" +
        "·  All game logics are run on the server to avoid clients cheating\n"+
        "·  Supporting all basic Uno game logic and tested for 100+ rounds",
    },
    {
      name: "MVPrescription",
      describle: "A medicine alarm app linked with FDA APIs",
      intro:
        "·  Building up backend service for a frontend app\n" +
        "·  Study React-native from scratch and finish the sprint within 5 days\n" +
        "·  Storing user info on Google Firebase, achieve and parse medicine information from FDA",
    }
    // { name: "Presentation Hub", },
  ],
  skill: [
    {
      name: "React.js",
      level: "Intermediate",
      img:
        "https://fortissimo.s3-us-west-1.amazonaws.com/porthub/wa-react.png"
    },
    {
      name: "CSS",
      level: "Intermediate",
      img:
        "https://fortissimo.s3-us-west-1.amazonaws.com/porthub/wa-css.jpg"
    },
    {
      name: "Node.js",
      level: "Beginner",
      img:
        "https://fortissimo.s3-us-west-1.amazonaws.com/porthub/wa-node.jpg"
    },
    {
      name: "React Native",
      level: "Beginner",
      img:
        "https://fortissimo.s3-us-west-1.amazonaws.com/porthub/wa-reactnative.png"
    },
    {
      name: "AWS",
      level: "Beginner",
      img:
        "https://fortissimo.s3-us-west-1.amazonaws.com/porthub/wa-aws.jpg"
    },
    {
      name: "NGINX",
      level: "Beginner",
      img:
        "https://fortissimo.s3-us-west-1.amazonaws.com/porthub/wa-nginx.jpg"
    },
    {
      name: "MongoDB",
      level: "Intermediate",
      img:
        "https://fortissimo.s3-us-west-1.amazonaws.com/porthub/wa-mongo.png"
    }
  ],
  journey: [
    {
      event: "Born in Shanghai, China",
      time: "Aug. 1992"
    },
    {
      event: "Start coding with Pascal",
      time: "2005"
    },
    {
      event:
        "Attending several Hackathons and\n" +
        "winning prizes including NOI, ACM etc.",
      time: "2005 - 2010"
    },
    {
      event:
        "Graduate from East China University of Science and Technology.\n" +
        "Major in Mathematics and Applied Mathematics\n" +
        "Minor in Finance Management",
      time: "2015"
    },
    {
      event: "Recieved my US Green Card",
      time: "2017"
    },
    {
      event:
        "Earn master degree in Brunel University London.\n" +
        "Major in Banking and Finance",
      time: "2017"
    },
    {
      event: "Start my life in America",
      time: "2018"
    },
    {
      event: "Studying full-stack web development in Hack Reactor",
      time: "Sep. 2019"
    },
    {
      event: "Software Engineer Immersive Resident in Hack Reactor",
      time: "Nov. 2019 - Present"
    }
  ],
  personalNarrative:
    "I’ve dreamed of working in the tech field for a long time! Since middle school, I’ve attended several hackathons like NOI, ACM, etc. These experiences gave me a strong logical thinking, and a prudential work style." +
    "\n\nRecently I joined an immersive program to study building full-stack applications and high traffic backend support with RESTful API. And now, I'm ready to face more new challenges!",
  openToJobs: true
};
export default DATA;
