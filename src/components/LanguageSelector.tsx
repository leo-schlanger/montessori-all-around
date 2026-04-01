import { useState, useRef, useEffect, useCallback } from "react";
import { ChevronDown, Globe, Check } from "lucide-react";
import { useTranslation } from "react-i18next";
import { languages, type LanguageCode } from "../locales";

export function LanguageSelector() {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [focusedIndex, setFocusedIndex] = useState(-1);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const currentLanguage = languages.find(
    (lang) => lang.code === i18n.language
  ) || languages[0];

  const currentIndex = languages.findIndex(
    (lang) => lang.code === currentLanguage.code
  );

  // Click outside handler
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        setFocusedIndex(-1);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Keyboard navigation
  const handleKeyDown = useCallback((event: React.KeyboardEvent) => {
    if (!isOpen) {
      if (event.key === "Enter" || event.key === " " || event.key === "ArrowDown") {
        event.preventDefault();
        setIsOpen(true);
        setFocusedIndex(currentIndex);
      }
      return;
    }

    switch (event.key) {
      case "Escape":
        event.preventDefault();
        setIsOpen(false);
        setFocusedIndex(-1);
        buttonRef.current?.focus();
        break;
      case "ArrowDown":
        event.preventDefault();
        setFocusedIndex((prev) => (prev + 1) % languages.length);
        break;
      case "ArrowUp":
        event.preventDefault();
        setFocusedIndex((prev) => (prev - 1 + languages.length) % languages.length);
        break;
      case "Home":
        event.preventDefault();
        setFocusedIndex(0);
        break;
      case "End":
        event.preventDefault();
        setFocusedIndex(languages.length - 1);
        break;
      case "Enter":
      case " ":
        event.preventDefault();
        if (focusedIndex >= 0) {
          handleLanguageChange(languages[focusedIndex].code);
        }
        break;
    }
  }, [isOpen, focusedIndex, currentIndex]);

  const handleLanguageChange = (code: LanguageCode) => {
    i18n.changeLanguage(code);
    setIsOpen(false);
    setFocusedIndex(-1);
    buttonRef.current?.focus();
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      setFocusedIndex(currentIndex);
    } else {
      setFocusedIndex(-1);
    }
  };

  return (
    <div className="relative" ref={dropdownRef} onKeyDown={handleKeyDown}>
      <button
        ref={buttonRef}
        onClick={toggleDropdown}
        className="flex items-center gap-1.5 sm:gap-2 px-2 sm:px-3 py-2 rounded-lg hover:bg-white/50 transition-colors text-cinza-texto font-inter text-sm min-h-[44px] min-w-[44px] justify-center sm:justify-start"
        aria-label={t("common.selectLanguage")}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        aria-controls="language-listbox"
      >
        <Globe className="w-4 h-4 flex-shrink-0" />
        <span className="text-base sm:text-sm">{currentLanguage.flag}</span>
        <span className="hidden md:inline">{currentLanguage.code.toUpperCase()}</span>
        <ChevronDown className={`w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform flex-shrink-0 ${isOpen ? "rotate-180" : ""}`} />
      </button>

      {isOpen && (
        <div
          id="language-listbox"
          role="listbox"
          aria-label={t("common.selectLanguage")}
          aria-activedescendant={focusedIndex >= 0 ? `lang-${languages[focusedIndex].code}` : undefined}
          className="absolute right-0 mt-2 w-52 sm:w-48 bg-white rounded-xl shadow-lg border border-cinza-texto/10 py-2 z-50"
          style={{
            animation: "fadeInSlide 0.2s ease-out"
          }}
        >
          {languages.map((language, index) => (
            <button
              key={language.code}
              id={`lang-${language.code}`}
              role="option"
              aria-selected={currentLanguage.code === language.code}
              onClick={() => handleLanguageChange(language.code)}
              className={`w-full flex items-center gap-3 px-4 py-3 sm:py-2.5 text-left transition-colors min-h-[48px] sm:min-h-0 ${
                currentLanguage.code === language.code
                  ? "bg-coral/10 text-coral"
                  : "text-cinza-texto hover:bg-bege-fundo"
              } ${focusedIndex === index ? "ring-2 ring-inset ring-coral/50" : ""}`}
            >
              <span className="text-xl sm:text-lg">{language.flag}</span>
              <span className="font-inter text-base sm:text-sm flex-1">{language.name}</span>
              {currentLanguage.code === language.code && (
                <Check className="w-4 h-4 text-coral flex-shrink-0" aria-hidden="true" />
              )}
            </button>
          ))}
        </div>
      )}

      <style>{`
        @keyframes fadeInSlide {
          from {
            opacity: 0;
            transform: translateY(-8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
