import { useState } from 'react';
import { Button } from './components/ui/button';
import { Select, SelectContent, SelectItem, SelectValue } from './components/ui/select';
import { CustomSelectTrigger } from './components/CustomSelectTrigger';
import { SearchableSelect } from './components/SearchableSelect';
import { SolidTriangleIcon } from './components/SolidTriangleIcon';

// Course options
const courseOptions = [
  'Breakthrough Execution Program',
  'Breakthrough Intensive', 
  'Executive Challenge Course',
  'Executive Mastery'
];

// Mock data for demonstration
const mockPeople = [
  // Global Technologies (15 people) - largest company
  {
    id: 1,
    firstName: 'John',
    lastName: 'Smith',
    email: 'john.smith@globaltech.com',
    company: 'Global Technologies',
    courseName: 'Executive Challenge Course'
  },
  {
    id: 2,
    firstName: 'Emily',
    lastName: 'Davis',
    email: 'emily.davis@globaltech.com',
    company: 'Global Technologies',
    courseName: 'Executive Challenge Course'
  },
  {
    id: 3,
    firstName: 'Christopher',
    lastName: 'Lee',
    email: 'chris.lee@globaltech.com',
    company: 'Global Technologies',
    courseName: 'Executive Challenge Course'
  },
  {
    id: 4,
    firstName: 'Sarah',
    lastName: 'Johnson',
    email: 'sarah.johnson@globaltech.com',
    company: 'Global Technologies',
    courseName: 'Executive Challenge Course'
  },
  {
    id: 5,
    firstName: 'Michael',
    lastName: 'Brown',
    email: 'michael.brown@globaltech.com',
    company: 'Global Technologies',
    courseName: 'Executive Challenge Course'
  },
  {
    id: 6,
    firstName: 'Lisa',
    lastName: 'Anderson',
    email: 'lisa.anderson@globaltech.com',
    company: 'Global Technologies',
    courseName: 'Executive Challenge Course'
  },
  {
    id: 7,
    firstName: 'Kevin',
    lastName: 'Wilson',
    email: 'kevin.wilson@globaltech.com',
    company: 'Global Technologies',
    courseName: 'Executive Challenge Course'
  },
  {
    id: 8,
    firstName: 'Rachel',
    lastName: 'Thomas',
    email: 'rachel.thomas@globaltech.com',
    company: 'Global Technologies',
    courseName: 'Executive Mastery'
  },
  {
    id: 9,
    firstName: 'Andrew',
    lastName: 'Martin',
    email: 'andrew.martin@globaltech.com',
    company: 'Global Technologies',
    courseName: 'Executive Challenge Course'
  },
  {
    id: 10,
    firstName: 'Melissa',
    lastName: 'Garcia',
    email: 'melissa.garcia@globaltech.com',
    company: 'Global Technologies',
    courseName: 'Executive Challenge Course'
  },
  {
    id: 11,
    firstName: 'Jonathan',
    lastName: 'Rodriguez',
    email: 'jonathan.rodriguez@globaltech.com',
    company: 'Global Technologies',
    courseName: 'Executive Challenge Course'
  },
  {
    id: 12,
    firstName: 'Lauren',
    lastName: 'Lewis',
    email: 'lauren.lewis@globaltech.com',
    company: 'Global Technologies',
    courseName: 'Executive Challenge Course'
  },
  {
    id: 13,
    firstName: 'Steven',
    lastName: 'Wright',
    email: 'steven.wright@globaltech.com',
    company: 'Global Technologies',
    courseName: 'Executive Challenge Course'
  },
  {
    id: 14,
    firstName: 'Angela',
    lastName: 'King',
    email: 'angela.king@globaltech.com',
    company: 'Global Technologies',
    courseName: 'Executive Challenge Course'
  },
  {
    id: 15,
    firstName: 'Eric',
    lastName: 'Nelson',
    email: 'eric.nelson@globaltech.com',
    company: 'Global Technologies',
    courseName: 'Breakthrough Execution Program'
  },

  // First National Bank (8 people)
  {
    id: 16,
    firstName: 'Timothy',
    lastName: 'Hall',
    email: 'timothy.hall@firstnational.com',
    company: 'First National Bank',
    courseName: 'Executive Challenge Course'
  },
  {
    id: 17,
    firstName: 'James',
    lastName: 'Taylor',
    email: 'james.taylor@firstnational.com',
    company: 'First National Bank',
    courseName: 'Executive Mastery'
  },
  {
    id: 18,
    firstName: 'Michelle',
    lastName: 'Rodriguez',
    email: 'michelle.rodriguez@firstnational.com',
    company: 'First National Bank',
    courseName: 'Executive Challenge Course'
  },
  {
    id: 19,
    firstName: 'Daniel',
    lastName: 'Thompson',
    email: 'daniel.thompson@firstnational.com',
    company: 'First National Bank',
    courseName: 'Executive Challenge Course'
  },
  {
    id: 20,
    firstName: 'Jennifer',
    lastName: 'Adams',
    email: 'jennifer.adams@firstnational.com',
    company: 'First National Bank',
    courseName: 'Executive Challenge Course'
  },
  {
    id: 21,
    firstName: 'Mark',
    lastName: 'Young',
    email: 'mark.young@firstnational.com',
    company: 'First National Bank',
    courseName: 'Executive Challenge Course'
  },
  {
    id: 22,
    firstName: 'Rebecca',
    lastName: 'Perez',
    email: 'rebecca.perez@firstnational.com',
    company: 'First National Bank',
    courseName: 'Executive Challenge Course'
  },
  {
    id: 23,
    firstName: 'Joshua',
    lastName: 'Phillips',
    email: 'joshua.phillips@firstnational.net',
    company: 'First National Bank',
    courseName: 'Executive Mastery'
  },

  // Regional Healthcare Network (7 people)
  {
    id: 24,
    firstName: 'John',
    lastName: 'Smith',
    email: 'john.smith@regionalhealthcare.com',
    company: 'Regional Healthcare Network',
    courseName: 'Breakthrough Execution Program'
  },
  {
    id: 25,
    firstName: 'Stephanie',
    lastName: 'Harris',
    email: 'stephanie.harris@regionalhealthcare.com',
    company: 'Regional Healthcare Network',
    courseName: 'Executive Challenge Course'
  },
  {
    id: 26,
    firstName: 'Kimberly',
    lastName: 'Allen',
    email: 'kimberly.allen@regionalhealthcare.com',
    company: 'Regional Healthcare Network',
    courseName: 'Executive Challenge Course'
  },
  {
    id: 27,
    firstName: 'Michelle',
    lastName: 'Scott',
    email: 'michelle.scott@regionalhealthcare.com',
    company: 'Regional Healthcare Network',
    courseName: 'Executive Challenge Course'
  },
  {
    id: 28,
    firstName: 'Samantha',
    lastName: 'Carter',
    email: 'samantha.carter@regionalhealthcare.edu',
    company: 'Regional Healthcare Network',
    courseName: 'Breakthrough Execution Program'
  },
  {
    id: 29,
    firstName: 'Gregory',
    lastName: 'Mitchell',
    email: 'gregory.mitchell@regionalhealthcare.com',
    company: 'Regional Healthcare Network',
    courseName: 'Executive Challenge Course'
  },
  {
    id: 30,
    firstName: 'Heather',
    lastName: 'Turner',
    email: 'heather.turner@regionalhealthcare.com',
    company: 'Regional Healthcare Network',
    courseName: 'Executive Challenge Course'
  },

  // TechCorp Solutions (6 people)
  {
    id: 31,
    firstName: 'David',
    lastName: 'Wilson',
    email: 'david.wilson@techcorp.com',
    company: 'TechCorp Solutions',
    courseName: 'Executive Challenge Course'
  },
  {
    id: 32,
    firstName: 'Jessica',
    lastName: 'Martinez',
    email: 'jessica.martinez@techcorp.com',
    company: 'TechCorp Solutions',
    courseName: 'Executive Challenge Course'
  },
  {
    id: 33,
    firstName: 'Brandon',
    lastName: 'Jackson',
    email: 'brandon.jackson@techcorp.com',
    company: 'TechCorp Solutions',
    courseName: 'Executive Challenge Course'
  },
  {
    id: 34,
    firstName: 'Ryan',
    lastName: 'Moore',
    email: 'ryan.moore@techcorp.com',
    company: 'TechCorp Solutions',
    courseName: 'Executive Mastery'
  },
  {
    id: 35,
    firstName: 'Jason',
    lastName: 'Walker',
    email: 'jason.walker@techcorp.com',
    company: 'TechCorp Solutions',
    courseName: 'Breakthrough Execution Program'
  },
  {
    id: 36,
    firstName: 'Adam',
    lastName: 'Roberts',
    email: 'adam.roberts@techcorp.com',
    company: 'TechCorp Solutions',
    courseName: 'Executive Challenge Course'
  },

  // Wilson Consulting (5 people)
  {
    id: 37,
    firstName: 'Nicole',
    lastName: 'Wilson',
    email: 'nicole.wilson@wilsonconsulting.com',
    company: 'Wilson Consulting',
    courseName: 'Executive Challenge Course'
  },
  {
    id: 38,
    firstName: 'Matthew',
    lastName: 'Davis',
    email: 'matthew.davis@wilsonconsulting.com',
    company: 'Wilson Consulting',
    courseName: 'Executive Challenge Course'
  },
  {
    id: 39,
    firstName: 'Ashley',
    lastName: 'Johnson',
    email: 'ashley.johnson@wilsonconsulting.com',
    company: 'Wilson Consulting',
    courseName: 'Executive Challenge Course'
  },
  {
    id: 40,
    firstName: 'Paul',
    lastName: 'Green',
    email: 'paul.green@wilsonconsulting.com',
    company: 'Wilson Consulting',
    courseName: 'Executive Challenge Course'
  },
  {
    id: 41,
    firstName: 'Maria',
    lastName: 'Gonzalez',
    email: 'maria.gonzalez@wilsonconsulting.com',
    company: 'Wilson Consulting',
    courseName: 'Executive Challenge Course'
  },

  // State University (5 people)
  {
    id: 42,
    firstName: 'Michael',
    lastName: 'Brown',
    email: 'm.brown@stateuniversity.edu',
    company: 'State University',
    courseName: 'Executive Challenge Course'
  },
  {
    id: 43,
    firstName: 'Sarah',
    lastName: 'Taylor',
    email: 'sarah.taylor@stateuniversity.edu',
    company: 'State University',
    courseName: 'Executive Challenge Course'
  },
  {
    id: 44,
    firstName: 'Jennifer',
    lastName: 'Baker',
    email: 'jennifer.baker@stateuniversity.com',
    company: 'State University',
    courseName: 'Executive Challenge Course'
  },
  {
    id: 45,
    firstName: 'John',
    lastName: 'Williams',
    email: 'john.williams@stateuniversity.com',
    company: 'State University',
    courseName: 'Executive Challenge Course'
  },
  {
    id: 46,
    firstName: 'Amy',
    lastName: 'Campbell',
    email: 'amy.campbell@stateuniversity.com',
    company: 'State University',
    courseName: 'Breakthrough Execution Program'
  },

  // Miller & Partners Law (3 people)
  {
    id: 47,
    firstName: 'Jennifer',
    lastName: 'Miller',
    email: 'jennifer.miller@millerlaw.net',
    company: 'Miller & Partners Law',
    courseName: 'Executive Challenge Course'
  },
  {
    id: 48,
    firstName: 'Robert',
    lastName: 'Garcia',
    email: 'robert.garcia@millerlaw.com',
    company: 'Miller & Partners Law',
    courseName: 'Executive Challenge Course'
  },
  {
    id: 49,
    firstName: 'Amanda',
    lastName: 'White',
    email: 'amanda.white@millerlaw.com',
    company: 'Miller & Partners Law',
    courseName: 'Executive Challenge Course'
  },

  // Smith & Associates (3 people)
  {
    id: 50,
    firstName: 'John',
    lastName: 'Smith',
    email: 'j.smith@smithassociates.com',
    company: 'Smith & Associates',
    courseName: 'Executive Challenge Course'
  },
  {
    id: 51,
    firstName: 'David',
    lastName: 'Smith',
    email: 'david.smith@smithassociates.com',
    company: 'Smith & Associates',
    courseName: 'Executive Challenge Course'
  },
  {
    id: 52,
    firstName: 'Sarah',
    lastName: 'Johnson',
    email: 's.johnson@smithassociates.com',
    company: 'Smith & Associates',
    courseName: 'Executive Challenge Course'
  },

  // Premier Real Estate (2 people)
  {
    id: 53,
    firstName: 'David',
    lastName: 'Smith',
    email: 'd.smith@premierrealty.com',
    company: 'Premier Real Estate',
    courseName: 'Executive Challenge Course'
  },
  {
    id: 54,
    firstName: 'Jennifer',
    lastName: 'Miller',
    email: 'j.miller@premierrealty.com',
    company: 'Premier Real Estate',
    courseName: 'Breakthrough Execution Program'
  },

  // FastTrack Logistics (1 person)
  {
    id: 55,
    firstName: 'Michael',
    lastName: 'Brown',
    email: 'mike.brown@fasttracklogistics.net',
    company: 'FastTrack Logistics',
    courseName: 'Executive Mastery'
  }
];

export default function App() {
  const [selectedCourse, setSelectedCourse] = useState<string>('');
  const [selectedCourse2, setSelectedCourse2] = useState<string>('');

  // Filter people based on selected course
  const filteredPeople = selectedCourse 
    ? mockPeople.filter(person => person.courseName === selectedCourse)
    : [];

  // Handle course selection change
  const handleCourseChange = (value: string) => {
    setSelectedCourse(value);
    setSelectedCourse2(''); // Reset individual selection when course changes
  };

  const handleSubmit = () => {
    if (!selectedCourse || !selectedCourse2) {
      alert('Please make both selections.');
      return;
    }
    
    const selectedPerson = mockPeople.find(person => person.id.toString() === selectedCourse2);
    const personDisplay = selectedPerson 
      ? `${selectedPerson.firstName} ${selectedPerson.lastName} (${selectedPerson.email})`
      : 'Unknown';
    
    alert(`Form submitted!\nCourse: ${selectedCourse}\nIndividual: ${personDisplay}`);
  };





  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <header className="bg-[#228477] text-white px-6 py-6">
        <div className="max-w-7xl mx-auto">
          <img 
            src="https://www.gapinternational.com/ResourcePackages/GapInternationalResourcePackage/assets/dist/images/svg/gap-logo-white.svg" 
            alt="Gap International" 
            className="h-7"
          />
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 max-w-2xl mx-auto px-6 py-16 w-full">
        <div className="text-center mb-12">
          <h1 className="text-4xl text-foreground mb-16 leading-tight font-display" style={{ transform: 'scaleX(1.1)' }}>
            Project Access for<br />
            Breakthrough Execution
          </h1>
          
          <div className="space-y-8">
            {/* First Course Selection */}
            <div className="flex items-center gap-4">
              <label className="text-sm text-foreground whitespace-nowrap">Select:</label>
              <Select value={selectedCourse} onValueChange={handleCourseChange}>
                <CustomSelectTrigger 
                  className="flex-1 text-left rounded-none border-gray-400 hover:bg-gray-50" 
                  icon={<SolidTriangleIcon className="opacity-70 pointer-events-none shrink-0 size-3" />}
                >
                  <SelectValue placeholder="Course / Program" />
                </CustomSelectTrigger>
                <SelectContent className="rounded-none standard-scrollbar">
                  {courseOptions.map((course) => (
                    <SelectItem key={course} value={course} className="select-item-override rounded-none">
                      {course}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Second Course Selection */}
            <div className="flex items-center gap-4">
              <label className="text-sm text-foreground whitespace-nowrap">Select:</label>
              <SearchableSelect
                value={selectedCourse2}
                onValueChange={setSelectedCourse2}
                disabled={!selectedCourse}
                people={filteredPeople}
                placeholder={selectedCourse ? "Individual" : "Select course first"}
              />
            </div>

            {/* Submit Button */}
            <div className="pt-8">
              <Button 
                onClick={handleSubmit}
                className="bg-[#59315f] hover:bg-[#7a4d7f] disabled:bg-[#9a7d9f] text-white px-16 rounded-full font-normal tracking-wide button-extra-padding text-base"
                disabled={!selectedCourse || !selectedCourse2}
              >
                SUBMIT
              </Button>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-8 text-center text-xs text-black mt-auto">
        <div className="max-w-5xl mx-auto px-6">
          <p className="mb-1">© Gap International</p>
          <div className="flex justify-center gap-2">
            <a href="#" className="hover:text-black hover:underline transition-colors">Terms of Use</a>
            <span>|</span>
            <a href="#" className="hover:text-black hover:underline transition-colors">Privacy Statement</a>
          </div>
        </div>
      </footer>
    </div>
  );
}