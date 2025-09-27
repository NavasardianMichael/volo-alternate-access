import { useState, useRef, useEffect, useMemo } from 'react';
import { CheckIcon } from 'lucide-react';
import { SolidTriangleIcon } from './SolidTriangleIcon';

interface Person {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  courseName: string;
}

interface SearchableSelectProps {
  value: string;
  onValueChange: (value: string) => void;
  disabled?: boolean;
  people: Person[];
  placeholder?: string;
}

export function SearchableSelect({ 
  value, 
  onValueChange, 
  disabled = false, 
  people,
  placeholder = "Individual"
}: SearchableSelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [isSearchMode, setIsSearchMode] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Filter people based on search term
  const filteredPeople = useMemo(() => {
    if (!searchTerm) return people;
    
    const lowercaseSearch = searchTerm.toLowerCase();
    return people.filter(person => {
      const fullName = `${person.firstName} ${person.lastName}`.toLowerCase();
      const email = person.email.toLowerCase();
      return fullName.includes(lowercaseSearch) || email.includes(lowercaseSearch);
    });
  }, [people, searchTerm]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        setIsSearchMode(false);
        setSearchTerm('');
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [isOpen]);

  // Focus input when search mode is activated
  useEffect(() => {
    if (isSearchMode && inputRef.current) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 50);
    }
  }, [isSearchMode]);

  const handleSelect = (personId: string) => {
    onValueChange(personId);
    setIsOpen(false);
    setIsSearchMode(false);
    setSearchTerm('');
  };

  const handleTriggerClick = () => {
    if (!disabled) {
      setIsOpen(true);
      setIsSearchMode(true);
      setSearchTerm('');
    }
  };

  const selectedPerson = people.find(person => person.id.toString() === value);

  return (
    <div className="relative flex-1" ref={dropdownRef}>
      {/* Trigger - single consistent container */}
      <div className="data-[placeholder]:text-muted-foreground [&_svg:not([class*='text-'])]:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 dark:hover:bg-input/50 flex w-full items-center justify-between gap-2 rounded-none border-gray-400 border bg-input-background px-3 py-2 text-sm whitespace-nowrap transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 h-9 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 flex-1 text-left hover:bg-gray-50">
        
        {!isSearchMode ? (
          <button
            type="button"
            onClick={handleTriggerClick}
            disabled={disabled}
            className="flex-1 text-left bg-transparent border-0 outline-none h-full flex items-center"
            aria-haspopup="listbox"
            aria-expanded={isOpen}
          >
            <span className={`flex-1 text-left ${selectedPerson ? 'text-foreground' : 'text-muted-foreground'}`}>
              {selectedPerson 
                ? `${selectedPerson.firstName} ${selectedPerson.lastName} (${selectedPerson.email})`
                : (disabled ? "Select course first" : placeholder)
              }
            </span>
          </button>
        ) : (
          <input
            ref={inputRef}
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Begin typing to search"
            className="flex-1 text-left bg-transparent border-0 outline-none placeholder-muted-foreground text-foreground h-full"
          />
        )}
        
        <SolidTriangleIcon className="opacity-70 pointer-events-none shrink-0 size-3" />
      </div>

      {/* Dropdown Content - matching SelectContent exactly */}
      {isOpen && (
        <div 
          className="bg-white text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 absolute z-[9999] max-h-(--radix-select-content-available-height) min-w-[8rem] origin-(--radix-select-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-none border shadow-md standard-scrollbar"
          style={{
            top: '100%',
            left: 0,
            right: 0,
            width: '100%',
            backgroundColor: '#ffffff'
          }}
        >
          
          {/* Viewport - matching SelectPrimitive.Viewport exactly */}
          <div className="p-1">
            {filteredPeople.length > 0 ? (
              filteredPeople.map((person) => (
                <div
                  key={person.id}
                  onClick={() => handleSelect(person.id.toString())}
                  className="select-item-override rounded-none cursor-default relative flex w-full items-center gap-2 py-1.5 pr-8 pl-2 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
                  role="option"
                  aria-selected={value === person.id.toString()}
                >
                  <span className="absolute right-2 flex size-3.5 items-center justify-center">
                    {value === person.id.toString() && <CheckIcon className="size-4" />}
                  </span>
                  <span className="text-left flex-1">{person.firstName} {person.lastName} ({person.email})</span>
                </div>
              ))
            ) : (
              <div className="select-item-override rounded-none cursor-default relative flex w-full items-center gap-2 py-1.5 pr-8 pl-2 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 text-muted-foreground">
                <span className="text-left flex-1">{searchTerm ? "No people found" : "No individuals available"}</span>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}