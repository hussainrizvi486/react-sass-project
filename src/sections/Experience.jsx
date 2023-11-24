import { RefrigeratorIcon } from "lucide-react"
import { LanguageCard } from "../components"

export const Experience = () => {
    return (
        <div className="page-section__wrapper">
            <div className="page-section__heading">
                EXPERIENCE
            </div>

            <div className="page-section__content">
                <WebsiteCard />
            </div>
        </div>
    )
}


const WebsiteCard = () => {
    return (

        <div className="website-card">
            <header className="website-card__header">
                March 2023 — Present
            </header>

            <div className="website-card_content">

                <div>
                    <h3>Codes Soft</h3>
                    <h4>Full Stack Developer</h4>
                </div>

                <p>
                    Deliver high-quality, robust production code for a diverse array of projects for clients including Harvard Business School, Everytown for Gun Safety, Pratt Institute, Koala Health, Vanderbilt University, The 19th News, and more. Provide leadership within engineering department through close collaboration, knowledge shares, and mentorship.
                </p>
                <div className="langs-row">
                    <LanguageCard label={"Python"} />
                    <LanguageCard label={"JavaScript"} />
                    <LanguageCard label={"Tailwind"} />
                    <LanguageCard label={"Frappe"} />
                    <LanguageCard label={"ERPNext"} />
                </div>
            </div>

        </div>
    )
}