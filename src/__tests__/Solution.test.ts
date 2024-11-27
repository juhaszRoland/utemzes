import Solution from "../Solution";

describe("Soluiton osztály tesztek", () => {
    const instance = new Solution("taborok.txt");

    it("Megoldás osztálypéldány ellenőrzése", async () => {
        expect(instance).toBeInstanceOf(Solution);
    });

    it("Első tábor kategóriájának ellenőrzése", async () => {
        expect(instance.firstCampCategory).toBe("foci");
    });

    it("Legnépszerűbb tábor ellenőrzése", async () => {
        const expected = ["8.27 - fotos"];
        expect(instance.getMostPopularCamps()).toEqual(expected);
    });

    it("Nem létező kategória zenei tábor kezdődátuma", async () => {
        const result = instance.getMusicCampStartDates("Nincs ilyen kategória");
        expect(result).toEqual(["Nem volt Nincs ilyen kategória tábor."]);
    });
});
