import { PrismaClient } from "@prisma/client";
import chalk from "chalk";

export const prismaClient = new PrismaClient({
  log: [
    {
      emit: "event",
      level: "query",
    },
    {
      emit: "event",
      level: "error",
    },
    {
      emit: "event",
      level: "warn",
    },
    {
      emit: "event",
      level: "info",
    },
  ],
});

prismaClient.$on("error", (e) => {
  console.log(chalk.bgRed(JSON.stringify(e)));
});

prismaClient.$on("warn", (e) => {
  console.log(chalk.bgYellow(JSON.stringify(e)));
});

prismaClient.$on("info", (e) => {
  console.log(chalk.bgBlueBright(JSON.stringify(e)));
});

prismaClient.$on("query", (e) => {
  console.log(chalk.bgGray(JSON.stringify(e)));
});
