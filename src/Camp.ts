export default class Camp {
    #startMonth: number;
    #startDay: number;
    #endMonth: number;
    #endDay: number;
    #nameLetters: string;
    #category: string;

    constructor(sor: string) {
        const m: string[] = sor.split("\t");

        if (m.length !== 6) {
            throw new Error("A bemeneti sor nem megfelelő formátumú.");
        }

        this.#startMonth = parseInt(m[0]);
        this.#startDay = parseInt(m[1]);
        this.#endMonth = parseInt(m[2]);
        this.#endDay = parseInt(m[3]);

        this.#nameLetters = m[4];
        this.#category = m[5];
    }
}
