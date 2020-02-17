const DATA = {
  app: [
    {
      name: "System Design Capstone",
      url: "",
      describle: "Building up backend service for a frontend app",
      intro:
        "·  Establishing and compare efficiency between Postgres and MongoDB\n" +
        "·  Optimized single querying time from 3-9 seconds to 70ms in MongoDB\n" +
        "·  Deploying database on AWS EC2 instances. Expanding maximum RPS from 1.15k to 3.1k using NGINX as load balancer combining 3 t2.micro instances, with a 0.3% error rate and 210ms average responding time",
      img: ""
    },
    {
      name: "Realtime Playground",
      url: "",
      describle: "Multiplayer Uno card game connected by socket.io",
      intro:
        "·  Implemented the minimum gameplay requirement within 4 days starting from scratch\n" +
        "·  Deployed on Heroku allowing 3-12 players gaming while more clients are spectating\n" +
        "·  All game logics are run on the server to avoid clients cheating\n"+
        "·  Supporting all basic Uno game logic and tested for 100+ rounds",
      img: ""
    },
    {
      name: "MVPrescription",
      url: "",
      describle: "A medicine alarm app linked with FDA APIs",
      intro:
        "·  Building up backend service for a frontend app\n" +
        "·  Study React-native from scratch and finish the sprint within 5 days\n" +
        "·  Storing user info on Google Firebase, achieve and parse medicine information from FDA",
      img: ""
    }
    // { name: "Presentation Hub", },
  ],
  skill: [
    {
      name: "React.js",
      level: "Intermediate",
      img:
        "https://booklovinmamas.com/wp-content/uploads/2017/06/react-context-api-4929b3703a1a7082d99b53eb1bbfc31f.png"
    },
    {
      name: "CSS",
      level: "Intermediate",
      img:
        "https://yazilon.com/wp-content/uploads/2019/03/css-kodu-kullanimi.jpg"
    },
    {
      name: "Node.js",
      level: "Beginner",
      img:
        "https://bs-uploads.toptal.io/blackfish-uploads/blog/post/seo/og_image_file/og_image/15921/secure-rest-api-in-nodejs-18f43b3033c239da5d2525cfd9fdc98f.png"
    },
    {
      name: "React Native",
      level: "Beginner",
      img:
        "https://images.yourstory.com/cs/1/0b2c0280-d1cb-11e8-80ab-ab91a6c851aa/ReactNative1547706744026.jpg?fm=png&auto=format"
    },
    {
      name: "AWS",
      level: "Beginner",
      img:
        "https://d33wubrfki0l68.cloudfront.net/0a7cc403e6c4913094a8c5b52e42fefb08109a7f/2047b/assets/img/posts/secure-aws-banner@2x.jpg"
    },
    {
      name: "NGINX",
      level: "Beginner",
      img:
        "https://zdnet3.cbsistatic.com/hub/i/2019/12/12/816d00eb-6dab-4108-9508-40a06c0d3712/nginx.png"
    },
    {
      name: "MongoDB",
      level: "Intermediate",
      img:
        "https://webassets.mongodb.com/_com_assets/cms/og-meta-image-01-vz0dwahmtr.png"
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
