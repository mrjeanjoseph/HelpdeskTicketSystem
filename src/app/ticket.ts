export interface Ticket {
    id: number;
    ticketName: string;
    status: boolean;
    issue: string;
    openedBy: string; 
}

export interface Bookmark {
    id: number;
    ticketId: number;
    bookmarkedBy: string;
}