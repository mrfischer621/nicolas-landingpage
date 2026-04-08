import { Heart } from "lucide-react"

export function Footer() {
  return (
    <footer className="pb-6 pt-16 lg:pb-8 lg:pt-24 border-t border-border">
      <div className="px-6 sm:px-10 lg:px-16 max-w-5xl mx-auto">

        {/* Top row: LinkedIn only */}
        <div className="md:flex md:items-start md:justify-end">
          <a
            href="https://www.linkedin.com/in/nicolas-fischer-756589197"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-colors mt-6 md:mt-0"
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
        </div>

        {/* Divider + bottom */}
        <div className="border-t mt-6 pt-6 md:mt-4 md:pt-8 lg:grid lg:grid-cols-10">

          {/* Address */}
          <div className="lg:col-[4/11] lg:flex lg:justify-end mb-6 lg:mb-0">
            <div className="text-sm text-muted-foreground">
              <p>Allmendweg 37</p>
              <p>8500 Frauenfeld</p>
            </div>
          </div>

          {/* Copyright + contact */}
          <div className="text-sm leading-6 text-muted-foreground lg:row-[1/3] lg:col-[1/4]">
            <div className="flex items-center gap-1 flex-wrap">
              <span>© 2026 Nicolas Fischer</span>
              <span>·</span>
              <span className="flex items-center gap-1">
                Made with love and a (little bit) with AI
                <Heart className="h-4 w-4 fill-blue-500 text-blue-500" />
              </span>
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

        </div>
      </div>
    </footer>
  )
}
