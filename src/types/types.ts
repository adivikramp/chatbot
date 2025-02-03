import { Session } from "next-auth";

export interface WebPage {
    title: string;
    url: string;
    imgSrc: string;
    status: string;
}

export interface FailureUIProps {
    handleTestIntegration: () => void;
}

export interface MobileNavProps {
    session: Session | null,
    signOutAction: () => void
}