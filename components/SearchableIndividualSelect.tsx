import { useState, useRef, useEffect, useMemo } from 'react';
import { ChevronDown } from 'lucide-react';

interface Person {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  courseName: string;
}

interface SearchableIndividualSelectProps {
  value: string;
  onValueChange: (value: string) => void;
  disabled?: boolean;
  people: Person[];
}

export function SearchableIndividualSelect({ 
  value, 
  onValueChange, 
  disabled = false, 
  people 
}: SearchableIndividualSelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
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
        setSearchTerm('');
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [isOpen]);

  // Focus input and set placeholder text when dropdown opens
  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 50);
    }
  }, [isOpen]);

  const handleSelect = (personId: string) => {
    onValueChange(personId);
    setIsOpen(false);
    setSearchTerm('');
  };

  const handleTriggerClick = () => {
    if (!disabled) {
      setIsOpen(true);
      setSearchTerm('');
    }
  };

  const selectedPerson = people.find(person => person.id.toString() === value);

  return (
    <div className="relative flex-1" ref={dropdownRef}>
      {/* Trigger Button */}
      <button
        type="button"
        onClick={handleTriggerClick}
        disabled={disabled}
        className="flex-1 text-left rounded-none border-gray-400 border-input data-[placeholder]:text-muted-foreground text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 dark:hover:bg-input/50 flex w-full items-center justify-between gap-2 border bg-input-background px-3 py-2 text-sm whitespace-nowrap transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 h-9 hover:bg-gray-50"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        <span className={`flex-1 text-left ${selectedPerson ? 'text-foreground' : 'text-muted-foreground'}`}>
          {selectedPerson 
            ? `${selectedPerson.firstName} ${selectedPerson.lastName} (${selectedPerson.email})`
            : (disabled ? "Select course first" : "Individual")
          }
        </span>
        <ChevronDown className="size-4 opacity-50 pointer-events-none shrink-0" />
      </button>

      {/* Dropdown Content */}
      {isOpen && (
        <div className="rounded-none bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-50 min-w-[8rem] overflow-x-hidden rounded-md border shadow-md absolute top-full left-0 right-0 w-full">
          
          {/* Search Input - becomes active and shows placeholder */}
          <div className="px-3 py-2">
            <input
              ref={inputRef}
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Begin typing to search"
              className="w-full px-0 py-1 text-sm border-0 outline-none bg-transparent placeholder-muted-foreground text-foreground"
            />
          </div>
          
          {/* People List with scrollbar */}
          <div 
            className="searchable-dropdown-content border-t border-gray-200"
            style={{
              maxHeight: '14rem',
              overflowY: 'auto',
              scrollbarWidth: 'thin',
              scrollbarColor: '#ccc #f5f5f5'
            }}
            role="listbox"
          >
            {filteredPeople.length > 0 ? (
              filteredPeople.map((person) => (
                <div
                  key={person.id}
                  onClick={() => handleSelect(person.id.toString())}
                  className="select-item-override rounded-none cursor-pointer"
                  role="option"
                  aria-selected={value === person.id.toString()}
                >
                  {person.firstName} {person.lastName} ({person.email})
                </div>
              ))
            ) : (
              <div className="select-item-override rounded-none text-muted-foreground cursor-default">
                {searchTerm ? "No people found" : "No individuals available"}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}