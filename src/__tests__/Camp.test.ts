import Camp from "../Camp";

describe("Camp osztály teszt (egy tábor)", () => {
    const camp = new Camp("6\t26\t7\t10\tGIOSY\tfoci");

    it("Camp osztálypéldány ellenőrzése", async () => {
        expect(camp).toBeInstanceOf(Camp);
    });

    it("Tábor kezdő dátumának ellenőrzése", async () => {
        expect(camp.startMonth).toBe(6);
        expect(camp.startDay).toBe(26);
        expect(camp.startDate).toBe("6.26");
    });

    it("Résztvevők számának ellenőrzése", async () => {
        expect(camp.participantCount).toBe(5);
    });

    it("Tábor kategóriájának ellenőrzése", async () => {
        expect(camp.category).toBe("foci");
    });
});
