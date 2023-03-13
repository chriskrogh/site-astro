export const TECHNOLOGIES = [
  "Android",
  "Apollo",
  "AWS",
  "Azure",
  "C#",
  "CSS",
  "Chai",
  "Cypress",
  "Docker",
  ".NET",
  "Ethers",
  "Express",
  "Figma",
  "GCP",
  "GraphQL",
  "Hardhat",
  "HTML",
  "Ionic",
  "Java",
  "JavaScript",
  "Jest",
  "Kotlin",
  "Ktor",
  "Kubernetes",
  "MongoDB",
  "MySQL",
  "NextJS",
  "NodeJS",
  "Postgres",
  "Python",
  "React",
  "React Query",
  "React Native",
  "Redis",
  "Relay",
  "Solidity",
  "Swift",
  "Travis CI",
  "TypeScript",
] as const;

type TechInfo = {
  icon: string;
  link: string;
};

export const TECH_INFO: Record<(typeof TECHNOLOGIES)[number], TechInfo> = {
  ["Android"]: {
    icon: "mdi:android",
    link: "https://developer.android.com/",
  },
  ["Apollo"]: {
    icon: "simple-icons:apollographql",
    link: "https://www.apollographql.com/",
  },
  ["AWS"]: {
    icon: "mdi:aws",
    link: "https://aws.amazon.com/",
  },
  ["Azure"]: {
    icon: "mdi:microsoft-azure",
    link: "https://azure.microsoft.com/",
  },
  ["C#"]: {
    icon: "teenyicons:c-sharp-outline",
    link: "https://github.com/dotnet/csharplang",
  },
  ["CSS"]: {
    icon: "mdi:css-3",
    link: "https://www.w3.org/TR/CSS/#css",
  },
  ["Chai"]: {
    icon: "mdi:chai",
    link: "https://www.chaijs.com/",
  },
  ["Cypress"]: {
    icon: "simple-icons:cypress",
    link: "https://www.cypress.io/",
  },
  ["Docker"]: {
    icon: "mdi:docker",
    link: "https://www.docker.com/",
  },
  [".NET"]: {
    icon: "simple-icons:dotnet",
    link: "https://dotnet.microsoft.com/",
  },
  ["Ethers"]: {
    icon: "mdi:ethers",
    link: "https://docs.ethers.io/",
  },
  ["Express"]: {
    icon: "simple-icons:express",
    link: "http://expressjs.com/",
  },
  ["Figma"]: {
    icon: "mdi:figma",
    link: "https://www.figma.com/",
  },
  ["GCP"]: {
    icon: "mdi:google-cloud",
    link: "https://cloud.google.com/",
  },
  ["GraphQL"]: {
    icon: "mdi:graphql",
    link: "https://graphql.org/",
  },
  ["Hardhat"]: {
    icon: "mdi:hardhat",
    link: "https://hardhat.org/",
  },
  ["HTML"]: {
    icon: "mdi:html-5",
    link: "https://html.com/html5/",
  },
  ["Ionic"]: {
    icon: "mdi:ionic",
    link: "https://ionicframework.com/",
  },
  ["Java"]: {
    icon: "mdi:language-java",
    link: "https://www.java.com/",
  },
  ["JavaScript"]: {
    icon: "mdi:language-javascript",
    link: "https://www.javascript.com/",
  },
  ["Jest"]: {
    icon: "simple-icons:jest",
    link: "https://jestjs.io/",
  },
  ["Kotlin"]: {
    icon: "mdi:kotlin",
    link: "https://kotlinlang.org/",
  },
  ["Ktor"]: {
    icon: "mdi:ktor",
    link: "https://ktor.io/",
  },
  ["Kubernetes"]: {
    icon: "mdi:kubernetes",
    link: "https://kubernetes.io/",
  },
  ["MongoDB"]: {
    icon: "mdi:mongodb",
    link: "https://www.mongodb.com/",
  },
  ["MySQL"]: {
    icon: "mdi:mysql",
    link: "https://www.mysql.com/",
  },
  ["NextJS"]: {
    icon: "mdi:nextjs",
    link: "https://nextjs.org/",
  },
  ["NodeJS"]: {
    icon: "mdi:nodejs",
    link: "https://nodejs.org/",
  },
  ["Postgres"]: {
    icon: "simple-icons:postgresql",
    link: "https://www.postgresql.org/",
  },
  ["Python"]: {
    icon: "mdi:python",
    link: "https://www.python.org/",
  },
  ["React"]: {
    icon: "simple-icons:react",
    link: "https://reactjs.org/",
  },
  ["React Query"]: {
    icon: "react-query",
    link: "https://tanstack.com/query/latest",
  },
  ["React Native"]: {
    icon: "simple-icons:react",
    link: "https://reactnative.dev/",
  },
  ["Redis"]: {
    icon: "mdi:redis",
    link: "https://redis.io/",
  },
  ["Relay"]: {
    icon: "mdi:relay",
    link: "https://relay.dev/",
  },
  ["Solidity"]: {
    icon: "mdi:solidity",
    link: "https://soliditylang.org/",
  },
  ["Swift"]: {
    icon: "mdi:swift",
    link: "https://developer.apple.com/swift/",
  },
  ["Travis CI"]: {
    icon: "mdi:travis-ci",
    link: "https://www.travis-ci.com/",
  },
  ["TypeScript"]: {
    icon: "mdi:language-typescript",
    link: "https://www.typescriptlang.org/",
  },
};
