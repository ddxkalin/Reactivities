import { Profile } from "./profile";

export interface Activity {
    id: string;
    description: string;
    title: string;
    date: Date | null;
    category: string;
    city: string;
    venue: string;
    hostUsername?: string;
    isCancelled?: boolean;
    isGoing?: boolean;
    isHost?: boolean;
    host?: Profile;
    attendees?: Profile[];
}