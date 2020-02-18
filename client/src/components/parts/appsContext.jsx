import React from "react";

import Svg from "./svgs.jsx";

var AppsContext = ({ appID }) => {
  if (appID === 0)
    //SDC
    return (
      <div id="apps-context">
        <div id="apps-detail">
          <div id="apps-detail-icons">
            <a
              title="open the repo"
              href="https://github.com/RealExpensiveItems/Forest-SDC_Lite"
              target="_blank"
            >
              <Svg name="github" fill="#0073b1" height="20" />
            </a>
          </div>
          <p>
            In this project, I was assigned to design a high quality back end
            service for a takeout website. As required, 10 million objects were
            seeded into my database. My task was to deploy and fortify the
            server to handle as much traffic as possible.
          </p>
          <img
            className="shadow"
            src="https://fortissimo.s3-us-west-1.amazonaws.com/porthub/sdc-note.jpg"
          />
          <p>
            In order to benchmarking sql database and nosql database. I picked
            Postgres and MongoDB for this project. I first start with generating
            seeding files. It took me about 6 minutes to import my JSON file
            into MongoDB or copy from csv into Postgres. Although query time
            from Postgres is about 10% faster than MongoDB on my collection, I
            still choose MongoDB to deploy since it’s handling nested objects
            simpler and easier to set up on the EC2 instance. Then I tried
            multiple ways to optimize the query efficiency for my Mongo
            collection. The average query time was reduced to 4 ms from 10
            seconds.
          </p>
          <p>
            The last step I took was running Nginx as the reverse proxy server.
            I tried adding more t2.micro instances to the proxy and using
            Loader.io testing their performance. At the end, my service was able
            to handle 3.1krps with 0.3% error rate and 210ms average response
            time while 3 instances were supporting it.
          </p>
        </div>
      </div>
    );
  if (appID === 1)
    //UNO
    return (
      <div id="apps-context">
        <div id="apps-detail">
          <div id="apps-detail-icons">
            <a
              title="open the repo"
              href="https://github.com/Late1nAutumn/herokuma"
              target="_blank"
            >
              <Svg name="github" fill="#0073b1" height="20" />
            </a>
            <a
              title="open the app"
              href="https://lateinautumn.herokuapp.com/"
              target="_blank"
            >
              <Svg name="link" fill="#0073b1" height="20" />
            </a>
            <a title="sprint project">
              <Svg name="fast" fill="#0073b1" height="20" />
            </a>
            <a title="socket.io">
              <Svg name="socket.io" fill="#0073b1" bgColor="#f5f5f5" height="20" />
            </a>
          </div>
          <p>
            During my study at Hack Reactor, one of the students gave us a
            presentation about Socket.io. Since Socket.io is able to bring a
            connection allowing the server actively broadcasting messages to all
            connected clients, I was so excited to try this feature out. My
            classmates used to play UNO a lot while we were waiting for our data
            to be seeded into the database. Then I think, hey, why can’t I build
            a UNO game with Socket.io, so we can play UNO without leaving our
            seats?
          </p>
          <p>
            Due to the fact that I still had another project to finish before
            the deadline, I don’t have too much spare time for this app. I
            focused only on minimum requirements and finished them within 4
            days. The game mechanism supports all basic UNO rules. It allows
            played cards to be shuffled back to the deck. Skip cards, reverse
            cards and wildcards are working correctly. Drawing cards can only be
            followed by another draw card. The draw button also takes
            accumulated drawing penalties into count.
          </p>
          <p>
            Throughout the development, the thinking process is totally
            different from when I was designing other applications. Although the
            server and the clients have different states to handle, lots of them
            still need to be synchronized. In the meantime, I wrote all the game
            logic onto the server side to avoid cheating. The game logic might
            be simple for humans, but there are so many details and conflicts
            need to be considered to build the system. All the event emitters
            and listeners must be put to delicate places, or all the variables
            will run into wrong status.
          </p>
          <p>
            After I finished this game, we students have tested it for over 100
            rounds. Though there’s still some tiny problem to the connection,
            the gaming process is fluent and everyone enjoys it.
          </p>
        </div>
      </div>
    );
  if (appID === 2)
    //MVP
    return (
      <div id="apps-context">
        <div id="apps-detail">
          <div id="apps-detail-icons">
            <a title="teamwork">
              <Svg name="group" fill="#0073b1" height="20" />
            </a>
            <a title="sprint project">
              <Svg name="fast" fill="#0073b1" height="20" />
            </a>
            <a title="react-native">
              <Svg name="react" fill="#0073b1" height="20" />
            </a>
          </div>
          <p>
            MVPrescription is our team’s MVP (Minimum Viable Product) Project.
            MVP project is asking us to implement the most fundamental features
            of a full-stack application within 5 days. As all our team members
            showed great interest on react-native, we decided to build a
            prescription helper as a phone app.
          </p>
          <p>
            Once the users input the medicine they are taking, our app will send
            requests to APIs supported by FDA. Users will get directions, dose
            and side effects of the medicine. After adding medicine into their
            collections, users can set alarms to remind themselves when medicine
            time comes.
          </p>
          <p>
            In this project, I’m responsible for building the view displaying
            medicine info and establishing a live database to store users’
            medicine collection. React-native is easy to learn, the challenge I
            met in this project is planning. Since we only have 5 days on this
            project and none of us has touched react-native before, the plan we
            made at the beginning ran into some problems. In the meantime, as we
            tried FDA’s API, we didn’t find some medicine information we need
            from the data retrieved. Thus we had to cut some of our features.
            That also changed our database schema and brought some trouble when
            we dock our front end to the back end.
          </p>
          <p>
            Eventually we finished our MVP successfully. No trouble was made
            when we merge our branch to the master. And our front end
            collaborated with my server smoothly.
          </p>
        </div>
      </div>
    );
};

export default AppsContext;
