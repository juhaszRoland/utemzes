import fs from "fs"; // https://nodejs.org/docs/latest-v14.x/api/fs.html
import http from "http"; // https://nodejs.org/docs/latest-v14.x/api/http.html
import Solution from "./Solution";
import url from "url"; // https://nodejs.org/docs/latest-v14.x/api/url.html

export default function content(req: http.IncomingMessage, res: http.ServerResponse): void {
    // favicon.ico kérés kiszolgálása:
    if (req.url === "/favicon.ico") {
        res.writeHead(200, { "Content-Type": "image/x-icon" });
        fs.createReadStream("favicon.ico").pipe(res);
        return;
    }
    // Weboldal inicializálása + head rész:
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    res.write("<!DOCTYPE html>");
    res.write("<html lang='hu'>");
    res.write("<head>");
    res.write("<meta charset='utf-8'>");
    res.write("<style>input, pre {font-family:monospace; font-size:1em; font-weight:bold;}</style>");
    res.write("<meta name='viewport' content='width=device-width, initial-scale=1.0'>");
    res.write("<title>Jedlik Ts Template</title>");
    res.write("</head>");
    res.write("<body><form><pre>");
    const params = new url.URL(req.url as string, `http://${req.headers.host}/`).searchParams;

    // Kezd a kódolást innen -->

    res.write("Csapatmunka - Juhász Roland & Horváth Márk ÜtemzésFeladat (2024/2025)\n");

    const so: Solution = new Solution("taborok.txt");
    res.write(`2. feladat: \nAz adatsorok száma: ${so.campsNumber}`);
    res.write(`\nAz először rögzített tábor témája: ${so.firstCampCategory}`);
    res.write(`\nAz utoljára rögzített tábor témája: ${so.lastCampCategory}`);
    res.write(`\n3. feladat: ${so.getMusicCampStartDates("zenei")}`);

    res.write("\n4. feladat: \nA legnépszerűbbek:\n");
    res.write(so.getMostPopularCamps().join("\n"));

    let iMonth: number = parseInt(params.get("iMonth") as string);
    if (isNaN(iMonth)) {
        iMonth = 8;
    }
    let iDay: number = parseInt(params.get("iDay") as string);
    if (isNaN(iDay)) {
        iDay = 1;
    }
    res.write("\n6. feladat:");
    res.write(`\n<label>hó: <input type='number' name='iMonth' value=${iMonth} style='max-width:100px;' onChange='this.form.submit();'></label>\n`);
    res.write(`<label>nap: <input type='number' name='iDay' value=${iDay} style='max-width:100px;' onChange='this.form.submit();'></label>\n`);
    res.write(`\nEkkor éppen ${undefined} tábor tart\n`);
    res.write("</pre></form></body></html>");
    res.end();
}
