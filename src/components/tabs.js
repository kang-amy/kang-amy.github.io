import {
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
  Box,
} from "@chakra-ui/react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";

const TabsContent = () => {
  return (
    <div className="tab-main">
      <Tabs variant="enclosed" w={"70%"}>
        <TabList mb="1em">
          <Tab>OpenText</Tab>
          <Tab>Waterloop</Tab>
          <Tab>TDSB</Tab>
          <Tab>Solvr.io</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <b>Software Engineering Intern @ OpenText</b>
            <br></br>
            <i>Richmond Hill, ON // jan 2023 - apr 2023</i>
            <br />
            {/* Worked to ship full-stack features and packages for SaaS case
            management software using React/Redux, TypeScript, SpringBoot and
            Postgres. Introduced a new UI search modal and database operator to
            allow users to search and filter through cases. Reduced API response
            times up to <b>80%</b> by using dynamically fetched React
            components. */}
            {points[0]}
          </TabPanel>
          <TabPanel>
            <b>Software Project Lead @ Waterloop</b>
            <br></br>
            <i>Waterloo, ON // jan 2023 - present</i>
            {points[1]}
          </TabPanel>
          <TabPanel>
            <b>Web Developer @ TDSB</b>
            <br></br>
            <i>Toronto, ON // may 2022 - aug 2022</i>
            {points[2]}
          </TabPanel>
          <TabPanel>
            <b>Backend Developer @ Solvr.io</b>
            <br></br>
            <i>Toronto, ON // jan 2022 - jul 2022</i>
            {points[3]}
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  );
};

const points = [
  <UnorderedList>
    <ListItem>
      Owned development of user-facing packages and features in building a case
      management SaaS software
    </ListItem>
    <ListItem>
      Engineered fullstack customizable search engine using React/Redux,
      TypeScript, SpringBoot and Postgres, introducing new UI search modal and
      database search operator, allowing users to filter through cases
    </ListItem>
    <ListItem>
      Reduced API response times up to 80% by introducing new dynamically loaded
      React components
    </ListItem>
    <ListItem>
      Led cross-organizatinal initiative of redesigning internal onboarding
      procedures and resources for new hires
    </ListItem>
  </UnorderedList>,
  <UnorderedList>
    <ListItem>
      Led a team of 3 engineers to design and build an internal applicant
      tracking system for recruitment and analysis, hosting 80+ users using
      React, Node and Postgres, persisting data to database using Express
    </ListItem>
    <ListItem>
      Implemented client-side integration to handle Google Authentication API
      workflow and authentication
    </ListItem>
    <ListItem>
      Coordinated with UX/UI designers to deliver user-friendly interfaces based
      on user feedback
    </ListItem>
  </UnorderedList>,
  <UnorderedList>
    <ListItem>
      Redesigned data storage workflow of business vendors to improve user
      accessibility to databases of over 1000+ businesses by building CMS
      software module using C#, ASP.NET and SQL
    </ListItem>
    <ListItem>
      Reduced on-page login time by 40% through refactoring full stack MVC code
      of vendor module, building 3 page views to provide CRUD functionality and
      user authentication ensuring AODA compliance
    </ListItem>
    <ListItem>
      Maintained of public, internal, and school servers using Docker and Linux
      for over 3000+ daily users
    </ListItem>
  </UnorderedList>,
  <UnorderedList>
    <ListItem>
      Developed backend API for student-founded tutoring app with 500+ users
      using Node.js and Postgres
    </ListItem>
    <ListItem>
      Collaborated with 2 student engineers to integrate features including
      payment gateway and in-app cha
    </ListItem>
  </UnorderedList>,
];

export default TabsContent;
