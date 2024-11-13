import Camp from "./Camp";
import fs from "fs";

export default class Solution {
    #camps: Camp[] = [];

    constructor(path: string) {
        try {
            const data = fs.readFileSync(path, "utf-8");
            data.split("\n").forEach(row => {
                const actRow: string = row.trim();
                if (actRow.length > 0) {
                    this.#camps.push(new Camp(actRow));
                }
            });
        } catch (error) {
            if (error instanceof Error) {
                console.error(`Hiba a fájl beolvasásakor: ${error.message}`);
            } else {
                console.error("Ismeretlen hiba történt.");
            }
        }
    }

    get campsNumber(): number {
        return this.#camps.length;
    }

    get firstCampCategory(): string {
        return this.#camps[0].category;
    }

    get lastCampCategory(): string | undefined {
        return this.#camps.length > 0 ? this.#camps[this.#camps.length - 1].category : undefined;
    }
}
