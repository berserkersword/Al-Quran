export interface DatasInterface {
    code?: number;
    status: string;
    data: DataInterface[]
}
export interface DataInterface {
    identifier: string;
    language: string;
    name: string;
    englishName: string;
    format: string;
    type: string;
    direction: string;
}
export interface Surahs {
    code: number;
    status: string;
    data: {
        edition: DataInterface;
        surahs: Sura[]
    }
}
export interface Sura {
    number: number;
    name: string;
    englishName: string;
    englishNameTranslation: string;
    revelationType: string;
    ayahs: Ayat[]
}
export interface Ayat {
    number: number;
    text: string;
    audio: string;
    numbeInrSura: number;
    juz: number;
    manzil: number;
    page: number;
    ruku: number
    hizbQuarter: number;
    sajda: boolean;
}