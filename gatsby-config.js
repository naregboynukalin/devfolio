module.exports = {
  siteMetadata: {
    // Site URL for when it goes live
    siteUrl: `https://elastic-meninsky-aa7c74.netlify.app/`,
    // Your Name
    name: 'Nareg Boynukalın',
    // Main Site Title
    title: `Nareg Boynukalın | Data Engineer Candidate`,
    // Description that goes under your name in main bio
    description: `Data Engineer based in Bakirkoy,Istanbul`,
    // Optional: Github account URL
    github: `https://github.com/naregboynukalin`,
    // Optional: LinkedIn account URL
    linkedin: `https://www.linkedin.com/in/naregboynukalin/`,
    // Content of the About Me section
    about: `I'm a 3rd grade Computer Engineering student of Bahçeşehir University. At the end of the 1st year, I had 4 months of summer internship experience in the Digital Marketing department and during the second year , I had 5 months of internship experience in the Software Development department. I aim to gain as much internship experience as possible in order to involve myself in the sector as quickly as possible until I graduate. Apart from the projects at school, I constantly improve myself in the field of Data Engineering, which is my career goal, and develop open source projects. I have a very high interest in learning new skills, following technology and gaining new experiences. `,
    // Optional: List your projects, they must have `name` and `description`. `link` is optional.
    projects: [
      {
        name: 'Plagiarism Detector',
        description:
          'A Java application that makes comparisons between two texts, finds the first 5 sentences that are most similar and calculates the general similarity. ',
        link: 'https://github.com/naregboynukalin/Java-Plagiarism-Detector',
      },
      {
        name: 'Machine Learning Projects',
        description:
          'There are two ML projects which are "Breast Cancer Prediction" and " Vehicle Fuel Consumption Prediction". Few ML techniques used such as KNN,ElasticNet,XGBoost etc. ',
        link: 'https://github.com/naregboynukalin/Machine-Learning-Projects',
      },
      {
        name: 'Whiteboard Application',
        description:
          'Whiteboard application built with Java swing library, GUI and network. There are two server and client files running on same machine. Server draws some shapes and client sees them synchronously on the whiteboard. Also they can communicate via chatbox.',
        link: 'https://github.com/naregboynukalin/WhiteBoard-App-Java',
      },
      {
        name: 'P2P File Sharing Application',
        description:
          'A P2P App developed using Python Socket Programming. Clients on the same network are detected and file transferred over the Hamachi network.',
        link: 'https://github.com/naregboynukalin/P2P-App-w-Python',
      },
      {
        name: 'Weather Application',
        description:
          'Application that performs weather data transfer over API using React JS library.',
        link: 'https://github.com/naregboynukalin/React-WeatherApp',
      },
    ],
    // Optional: List your experience, they must have `name` and `description`. `link` is optional.
    experience: [
      {
        name: 'Ozak Global Holding',
        description: 'Software Development Intern,  Nov 2019 - Mar 2020',
        tasks: 'Performing information update operations by writing various queries on relational databases with MSSQL. Creating activity reports and similar in-house reports with SSRS and presenting them to managers. Creating a website with ASP.NET and making the database association of the site',
        link: 'https://www.ozakglobal.com',
      },
      {
        name: 'Orka Holding',
        description: 'Digital Marketing Intern, May 2019 - Sep 2019',
        tasks: 'Using the Odito infrastructure, which provides the internal audits of the DS Damat and Damat Tween brands in total of nearly 400 stores. Designing campaigns and mailings by using the Euromessage service, which is an e-commerce service. Taking over the management of Google Analytics and Google My Business accounts',
        link: 'https://www.orkaholding.com.tr',
      },
    ],
    // Optional: List your skills, they must have `name` and `description`.
    skills: [
      {
        name: 'Languages & Frameworks',
        description:
          'Python, Java, Javascript, SQL, NoSQL',
      },
      {
        name: 'Databases',
        description: 'MongoDB, Oracle PL/SQL, MySQL',
      },
      {
        name: 'Other',
        description:
          'Linux, GCP, ETL, Software Design and Architecture, SDLC',
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
              wrapperStyle: `margin: 0 0 30px;`,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `ADD YOUR TRACKING ID HERE`, // Optional Google Analytics
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `devfolio`,
        short_name: `devfolio`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`, // This color appears on mobile
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
  ],
};
