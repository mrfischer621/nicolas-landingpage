import { BlurFade } from "@/components/ui/blur-fade"
import { Typewriter } from "@/components/ui/typewriter"
import { MagneticButton } from "@/components/ui/magnetic-button"
import { Component as MorphingCardStack } from "@/components/ui/morphing-card-stack"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Briefcase, Code2, LineChart, Users } from "lucide-react"

const services = [
  {
    id: "4",
    title: "Digitalisierung auf Abruf",
    description: "Du hast keine Energie für eine IT Stelle, möchtest aber punktuell einen Blick von aussen? Dafür bin ich zu haben.",
    icon: <Users className="h-5 w-5" />,
  },
  {
    id: "1",
    title: "Websites & Onlineshops",
    description: "Ich unterstütze dich bei deinem digitalen Auftritt und Verkaufssystemen.",
    icon: <Briefcase className="h-5 w-5" />,
  },
  {
    id: "2",
    title: "Tracking",
    description: "Ich helfe dir die digitalen Daten in deinem Unternehmen zu verstehen.",
    icon: <LineChart className="h-5 w-5" />,
  },
  {
    id: "3",
    title: "CRM / ERP Systeme",
    description: "Bei Anpassungen bei deinen Herzstücken bin ich zur Stelle.",
    icon: <Code2 className="h-5 w-5" />,
  },
]

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 py-12 sm:px-10 lg:px-16">

      {/* Main two-column layout */}
      <div className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* Left: Hero + Buttons */}
        <section id="header" className="flex flex-col gap-3 items-center text-center lg:items-start lg:text-left">
          <BlurFade delay={0.25} inView>
            <Avatar className="h-16 w-16 mb-2">
              <AvatarImage src="/nicolas.webp" alt="Nicolas Fischer" />
              <AvatarFallback>NF</AvatarFallback>
            </Avatar>
          </BlurFade>
          <BlurFade delay={0.25} inView>
            <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
              Hello World 👋
            </h2>
          </BlurFade>
          <BlurFade delay={0.25 * 2} inView>
            <span className="text-xl tracking-tighter text-muted-foreground sm:text-2xl">
              Wie gesagt, pragmatisch.
            </span>
          </BlurFade>
          <BlurFade delay={0.25 * 3} inView>
            <div className="flex flex-wrap gap-4 mt-2">
              <MagneticButton>
                <a
                  href="https://www.linkedin.com/in/nicolas-fischer-756589197"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-indigo-500 hover:bg-indigo-600 transition-colors px-8 text-base text-white py-3 rounded-full inline-block"
                >
                  Linkedin
                </a>
              </MagneticButton>
              <MagneticButton>
                <a
                  href="mailto:nicolas.fischer@fian.ch"
                  className="bg-indigo-500 hover:bg-indigo-600 transition-colors px-8 text-base text-white py-3 rounded-full inline-block"
                >
                  E-Mail
                </a>
              </MagneticButton>
            </div>
          </BlurFade>
        </section>

        {/* Right: Services */}
        <section id="services" className="flex flex-col items-center lg:items-end w-full">
          <BlurFade delay={0.25 * 4} inView>
            <h3 className="text-2xl font-bold tracking-tighter text-center lg:text-right mb-8 sm:text-3xl">
              Services
            </h3>
            <MorphingCardStack cards={services} defaultLayout="stack" />
          </BlurFade>
        </section>

      </div>
      {/* Full-width bottom tagline */}
      <div className="w-full max-w-5xl mt-16 border-t border-border pt-10 pb-4">
        <h2 className="font-semibold text-primary text-xl sm:text-2xl lg:text-3xl leading-snug">
          <Typewriter
            words={[
              "Wir schauen zuerst zusammen hin wo der digitale Schuh drückt. Danach finden wir die beste Lösung, welche zu eurem Budget und eurer Arbeitsweise passt.",
            ]}
            speed={40}
            cursor={true}
            cursorChar="|"
            loop={false}
          />
        </h2>
      </div>

    </main>
  )
}
