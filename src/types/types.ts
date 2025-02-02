export interface WebPage {
    title: string;
    url: string;
    imgSrc: string;
    status: string;
}

export interface FailureUIProps {
    handleTestIntegration: () => void;
}