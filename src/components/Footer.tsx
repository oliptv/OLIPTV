const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-0 right-0 z-50 bg-[hsl(0_40%_18%)] border-t border-[hsl(0_30%_25%)]">
      <div className="container mx-auto px-4 md:px-6 py-3 md:py-5">
        <div className="flex items-center justify-between">
          {/* Copyright - Left */}
          <span className="text-[10px] md:text-xs text-muted-foreground hidden sm:block">
            © 2026 OLIPTV. Reserved
          </span>
          
          {/* PayPal - Center */}
          <a
            href="https://www.paypal.com/donate/?hosted_button_id=SZ3W97CMRK7SS"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 md:gap-2 px-4 md:px-8 py-2 md:py-3 bg-gold hover:bg-gold/90 text-background font-semibold rounded-lg transition-all duration-300 animate-pulse-glow text-sm md:text-lg mx-auto sm:mx-0"
          >
            <svg className="w-4 h-4 md:w-6 md:h-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944 2.72A.773.773 0 0 1 5.7 2.1h6.832c2.278 0 4.135.77 4.852 2.72.303.826.379 1.728.237 2.704-.467 3.194-2.727 4.896-5.808 4.896H9.406l-1.084 6.855a.641.641 0 0 1-.633.54h-1.91a.32.32 0 0 0-.316.37l-.387 1.152zm7.548-15.438c-.046.307-.104.614-.175.922-.533 2.267-2.078 3.35-4.445 3.35h-.954a.773.773 0 0 0-.763.66l-.8 5.069a.32.32 0 0 0 .316.37h2.09c.307 0 .572-.22.619-.526l.571-3.627a.773.773 0 0 1 .762-.66h.483c2.65 0 4.652-1.607 5.178-4.444.226-1.22.09-2.218-.456-2.93-.6-.78-1.667-1.184-3.026-1.184h-.4z"/>
            </svg>
            A Coffee PayPal
          </a>
          
          {/* Empty spacer for balance - hidden on mobile */}
          <span className="text-[10px] md:text-xs text-transparent select-none hidden sm:block">
            © 2026 OLIPTV. Reserved
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
