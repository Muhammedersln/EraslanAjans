const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-surface/80 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <span className="text-accent text-2xl font-bold tracking-tight hover:text-primary transition-colors">
              Eraslan Ajans
            </span>
          </div>
          
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              {["Home", "Hakkımızda", "Servisler", "İletişim"].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-darktext hover:text-accent px-1 py-2 text-sm font-medium transition-colors relative group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <button className="bg-accent text-white px-6 py-2 rounded-full text-sm font-semibold shadow-sm hover:bg-primary transition-all duration-300 hover:shadow-md active:scale-95">
              Bize Ulaşın !
            </button>
            
            {/* Mobile menu button */}
            <div className="md:hidden">
              <button className="text-darktext hover:text-accent p-2">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
  