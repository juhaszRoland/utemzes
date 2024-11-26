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

    getMusicCampStartDates(category: string): string[] {
        const musicCamps = this.#camps.filter(camp => camp.category === category);

        if (musicCamps.length === 0) {
            return [`Nem volt ${category} tábor.`];
        } else {
            return musicCamps.map(camp => `\nZenei tábor keződik ${camp.startMonth}. hó ${camp.startDay}. napján`);
        }
    }

    getMostPopularCamps(): string[] {
        const maxParticipants = Math.max(...this.#camps.map(camp => camp.participantCount));
        const popularCamps = this.#camps.filter(camp => camp.participantCount === maxParticipants);

        return popularCamps.map(camp => `${camp.startDate} - ${camp.category}`);
    }

    sorszam(month: number, day: number): number {
        const daysInJune = 30;
        const daysInJuly = 31;
        const startOfSummer = 16;

        let dayOfSummer = 0;

        if (month === 6) {
            dayOfSummer = day - startOfSummer + 1;
        } else if (month === 7) {
            dayOfSummer = daysInJune - startOfSummer + 1 + day;
        } else if (month === 8) {
            dayOfSummer = daysInJune - startOfSummer + 1 + daysInJuly + day;
        }

        return dayOfSummer;
    }
}
