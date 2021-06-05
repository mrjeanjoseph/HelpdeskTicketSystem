export interface Ticket {
    [x: string]: any;
    id: number;
    ticketName: string;
    status: boolean;
    issue: string;
    openedBy: string;    
}