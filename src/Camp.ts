export default class Camp {
    startMonth: number;
    startDay: number;
    private endMonth: number;
    private endDay: number;
    private nameLetters: string;
    category: string;

    constructor(row: string) {
        const parts: string[] = row.split("\t");

        if (parts.length !== 6) {
            throw new Error("A bemeneti sor nem megfelelő formátumú.");
        }

        this.startMonth = parseInt(parts[0]);
        this.startDay = parseInt(parts[1]);
        this.endMonth = parseInt(parts[2]);
        this.endDay = parseInt(parts[3]);

        this.nameLetters = parts[4];
        this.category = parts[5];
    }

    get participantCount(): number {
        return this.nameLetters.length;
    }

    get startDate(): string {
        return `${this.startMonth}.${this.startDay}`;
    }
}
