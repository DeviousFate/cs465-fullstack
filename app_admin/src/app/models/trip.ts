export interface Trip {
    _id: string; // MongoDB document ID
    code: string;
    name: string;
    length: string;
    start: string;
    resort: string;
    perPerson: string;
    image: string;
    description: string;
}