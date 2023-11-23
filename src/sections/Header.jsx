import { Facebook, Github, Linkedin, MailPlus } from "lucide-react"
import { Typewriter } from "react-simple-typewriter"
export const Header = () => {
    return (
        <>
            <section className="page-header__content">
                <h1 className="page-header__main-heading font-bold">Hussain Rizvi</h1>
                <h2 className="font-bold">
                    <Typewriter
                        words={["Frontend Developer", "Backend Developer"]}
                        cursor={"|"}
                        delaySpeed={1000}
                    />
                </h2>
                <div
                    className="text-sm text-poppins"
                >I build accessible, inclusive products and digital experiences for the web.</div>
            </section>
            <section className="page-header__links"></section>
            <section className="page-header__icons">

                <MailPlus className="page-header__icon-svg" />
                <Linkedin className="" />
                <Github className="" />
                <Facebook className="" />

            </section>
        </>
    )
}
