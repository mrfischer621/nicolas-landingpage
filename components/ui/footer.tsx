import { Heart } from "lucide-react"

export function Footer() {
  return (
    <footer className="w-full border-t border-border mt-8 self-stretch">
      <div className="w-full max-w-5xl mx-auto py-10">

        {/* Top row: left empty, right: Name + LinkedIn */}
        <div className="flex justify-between items-start w-full">

          {/* Left: contact + tagline */}
          <div className="text-sm leading-6 text-muted-foreground">
            <div className="flex items-center gap-1.5 flex-wrap">
              <span>Made with pragmatism</span>
              <Heart className="h-4 w-4 fill-blue-500 text-blue-500 shrink-0" />
            </div>
            <div>
              <a href="mailto:nicolas.fischer@fian.ch" className="hover:text-foreground transition-colors">
                nicolas.fischer@fian.ch
              </a>
            </div>
            <div>
              <a href="tel:+41772326465" className="hover:text-foreground transition-colors">
                +41 77 232 64 65
              </a>
            </div>
          </div>

          {/* Right: Name + Address + LinkedIn */}
          <div className="flex flex-col items-end gap-3 text-sm text-muted-foreground">
            <a
              href="https://www.linkedin.com/in/nicolas-fischer-756589197"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
            <div className="text-right">
              <p className="font-medium text-foreground">Nicolas Fischer</p>
              <p>Allmendweg 37</p>
              <p>8500 Frauenfeld</p>
            </div>
          </div>

        </div>
      </div>
    </footer>
  )
}
