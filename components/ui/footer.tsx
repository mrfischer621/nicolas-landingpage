import { Button } from "@/components/ui/button"
import { Heart, Linkedin, User } from "lucide-react"

interface FooterProps {
  logo: React.ReactNode
  brandName: string
  socialLinks: Array<{
    icon: React.ReactNode
    href: string
    label: string
  }>
  address: string[]
  copyright: {
    text: string
    madeWith?: string
    email?: string
    phone?: string
  }
}

export function Footer({
  logo,
  brandName,
  socialLinks,
  address,
  copyright,
}: FooterProps) {
  return (
    <footer className="pb-6 pt-16 lg:pb-8 lg:pt-24 border-t border-border">
      <div className="px-4 lg:px-8 max-w-5xl mx-auto">
        <div className="md:flex md:items-start md:justify-between">
          <a
            href="/"
            className="flex items-center gap-x-2"
            aria-label={brandName}
          >
            {logo}
            <span className="font-bold text-xl">{brandName}</span>
          </a>
          <ul className="flex list-none mt-6 md:mt-0 space-x-3">
            {socialLinks.map((link, i) => (
              <li key={i}>
                <Button
                  variant="secondary"
                  size="icon"
                  className="h-10 w-10 rounded-full"
                  asChild
                >
                  <a href={link.href} target="_blank" rel="noopener noreferrer" aria-label={link.label}>
                    {link.icon}
                  </a>
                </Button>
              </li>
            ))}
          </ul>
        </div>

        <div className="border-t mt-6 pt-6 md:mt-4 md:pt-8 lg:grid lg:grid-cols-10">
          {/* Address */}
          <div className="lg:col-[4/11] lg:flex lg:justify-end">
            <ul className="list-none flex flex-col gap-1">
              {address.map((line, i) => (
                <li key={i} className="text-sm text-muted-foreground">
                  {line}
                </li>
              ))}
            </ul>
          </div>

          {/* Copyright + contact */}
          <div className="mt-6 text-sm leading-6 text-muted-foreground lg:mt-0 lg:row-[1/3] lg:col-[1/4]">
            <div className="flex items-center gap-1 flex-wrap">
              <span>{copyright.text}</span>
              {copyright.madeWith && (
                <>
                  <span>·</span>
                  <span className="flex items-center gap-1">
                    {copyright.madeWith}
                    <Heart className="h-4 w-4 fill-blue-500 text-blue-500" />
                  </span>
                </>
              )}
            </div>
            {copyright.email && (
              <div>
                <a href={`mailto:${copyright.email}`} className="hover:text-foreground transition-colors">
                  {copyright.email}
                </a>
              </div>
            )}
            {copyright.phone && (
              <div>
                <a href={`tel:${copyright.phone.replace(/\s/g, '')}`} className="hover:text-foreground transition-colors">
                  {copyright.phone}
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </footer>
  )
}
