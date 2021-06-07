export interface Ticket {
    [x: string]: any; // Look into why this is here
    id: number;
    ticketName: string;
    status: boolean;
    issue: string;
    openedBy: string;    
}