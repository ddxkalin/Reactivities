export interface Activity {
    id: string;
    description: string;
    title: string;
    date: Date | null;
    category: string;
    city: string;
    venue: string;
}