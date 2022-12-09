import { get } from "http";
import { readFileSync } from "node:fs";

const elves = readFileSync("day01.txt", { encoding: "utf-8" })
    .trim()
    .split("\n\n");

function getTotalCaloriesPerElf() {

    const totalCaloriesPerElf = elves.map((elf) => {
        const calories = elf.split("\n").map(Number);
        return calories.reduce((previous, current) => previous + current, 0);
    });

    console.log(Math.max( ... totalCaloriesPerElf));
}

getTotalCaloriesPerElf();