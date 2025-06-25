import React, { useState } from 'react';

// Using inline SVG for the Masonic symbol to avoid external image dependencies
const MasonicSymbol = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 200 200"
    className="w-12 h-12 text-blue-800 mx-auto mb-4"
  >
    <path
      fill="currentColor"
      d="M100 10l-80 180h160z"
      stroke="currentColor"
      strokeWidth="5"
      fillOpacity="0"
    />
    <path
      fill="currentColor"
      d="M20 190l80-180l80 180"
      stroke="currentColor"
      strokeWidth="5"
      fillOpacity="0"
    />
    <path
      fill="currentColor"
      d="M100 20c-30 0-30 40 0 40s30-40 0-40z"
      stroke="currentColor"
      strokeWidth="5"
      fillOpacity="0"
    />
    <path
      fill="currentColor"
      d="M100 180c-30 0-30-40 0-40s30 40 0 40z"
      stroke="currentColor"
      strokeWidth="5"
      fillOpacity="0"
    />
    <path
      fill="currentColor"
      d="M100 100c-20 0-20 30 0 30s20-30 0-30z"
      stroke="currentColor"
      strokeWidth="5"
      fillOpacity="0"
    />
    <text
      x="100"
      y="115"
      fontFamily="serif"
      fontSize="40"
      textAnchor="middle"
      fill="currentColor"
    >
      G
    </text>
  </svg>
);

// Lucide-react like icons (simplified as inline SVGs to avoid library import)
const ChevronDown = ({ className = '' }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="m6 9 6 6 6-6" />
  </svg>
);

const ChevronUp = ({ className = '' }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="m18 15-6-6-6 6" />
  </svg>
);

const Section = ({ title, children, defaultOpen = false }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-6 transition-all duration-300 ease-in-out hover:shadow-lg">
      <button
        className="w-full flex justify-between items-center text-xl font-semibold text-blue-700 hover:text-blue-900 focus:outline-none py-2"
        onClick={() => setIsOpen(!isOpen)}
      >
        {title}
        {isOpen ? <ChevronUp /> : <ChevronDown />}
      </button>
      {isOpen && (
        <div className="mt-4 pt-4 border-t border-gray-200 animate-fade-in">
          {children}
        </div>
      )}
    </div>
  );
};

const App = () => {
  const grandLodgeUpdates = [
    {
      country: 'Belgium',
      details: [
        'Grande Loge Reguliere de Belgique recognized by 82 regular Grand Lodges worldwide.',
        'Includes most US Grand Lodges, all Canadian, York Grand Lodge of Mexico, England, Scotland, Ireland, nearly all regular European GLs, and almost all British Commonwealth GLs.',
        'Principal Officers (1981-1984): Grand Master Rene Constant, Deputy Grand Masters Piet Van Brabant & Georges Brogniez, Senior Grand Warden Jan Corbet, Junior Grand Warden Joseph Haesendonck, Grand Secretary Edgard Spehl.',
        'Address: Rue Royale 265, B-1030 Bruxelles, Belgium.',
      ],
    },
    {
      country: 'Brazil',
      details: [
        'Grand Lodge of Guanabara merged with United Lodge of the State of Rio de Janeiro (Grande Loja Unida do Estado Rio de Janeiro).',
        'Two new state Grand Lodges are probable in Rondonia and Sergipe (1983 or 1984).',
        'Grand Secretary for External Relations (Goias): Ronaldo Jayme.',
        'United Grand Lodge address: Caixa Postal 2612, 20000 Rio de Janeiro-RJ.',
      ],
    },
    {
      country: 'Cuba',
      details: [
        'Grand Lodge of Cuba operates "free from government control" and conforms to "strictest Masonic rules".',
        'Attended Interamerican Masonic Confederation (C.M.I.) in May 1981 (first since 1959).',
        'Principal Officers (elected 1981, for 1981-1983): Grand Master Facundo Diaz, Deputy Grand Master Raciel Martinez Andreu, Grand Senior Warden Jose Miguel Garvey, Grand Junior Warden Agustin Hernandez, Grand Secretary Juan Varela Alvarez.',
        'Address: Ave. de Salvador Allende 508, C. Habana, Cuba.',
        'Controls five floors of its building in Havana (3rd, 4th, 5th, 11th, and 12th).',
      ],
    },
    {
      country: 'Iran',
      details: [
        'Grand Lodge completely destroyed.',
        'Many members fled to US, Canada, and other countries.',
        'Grand Secretary Hossein Daftarian (resides in Texas/France) is compiling a list of Iranian Masons.',
      ],
    },
    {
      country: 'Italy',
      details: [
        'Grand Orient of Italy (Grande Oriente D\'Italia) appears to have recovered from the P-2 scandal (1981, problems since 1974).',
        'New officers elected and installed at the Annual Meeting on March 27-28, 1982.',
        'Principal Officers (3-year term): Grand Master Armando Corona, Deputy Grand Masters Lodovico Tomaseo & Massimo Maggiore, Senior Grand Warden Delfo Del Bino, Junior Grand Warden Orazio Catarsini, Grand Secretary Antonio De Stefano.',
        'Address: Palazzo Giustiniani, Via Giustiniani, 5, 00186 Roma, Italy.',
      ],
    },
    {
      country: 'Nigeria',
      details: [
        'No further information on the progress being made on the formation of a Grand Lodge of Nigeria.',
      ],
    },
    {
      country: 'Spain',
      details: [
        'Gran Logia De Espana consecrated on November 6, 1982, in Madrid by Grande Loge Nationale Francaise (G.L.N.F.).',
        'Initially composed of 10 constituent Lodges chartered by G.L.N.F. between 1978 and 1982.',
        'Chartered 6 additional Lodges since November 1982 (No. 11-16).',
        'United Grand Orient of Spain (Grande Oriente Espanol Unido) announced "Unification with the Gran Logia De Espana".',
        'Principal Officers (installed Nov 6, 1982): Grand Master Luis Salat-Gusils, Deputy Grand Master Manuel Guzman Cavadid, Assistant Grand Masters Miguel Cabra Massana, Jose Torrente Duran, Joan Gonzalez Masso, Grand Secretary Josep Munte Rodriguez.',
        'Constitution and Laws patterned on the United Grand Lodge of England.',
        'Grand Lodge of Spain is entitled to recognition by regular Grand Lodges worldwide.',
      ],
    },
    {
      country: 'Uruguay',
      details: [
        'Grand Master: Carlos A. Bolana.',
        'Grand Lodge Address: Calle Duvimioso Terra No. 1481, Montevideo, Uruguay.',
        'Grand Secretary for Foreign Relations: Augusto Cesar Montesdeoca G.',
      ],
    },
  ];

  const treasurerReport = {
    balanceFromPrevious: 8138.70,
    receipts: 3031.25,
    expenses: 2277.85,
    balanceAsOf: 8892.10,
    expenseDetails: {
      Printing: 480.00,
      Secretarial: 750.00,
      'Travel and hotel for Secretary-Treasurer': 736.64,
      Postage: 249.46,
      'Lodges Masonic': 61.75,
    },
    sampleContributions: [
      { lodge: 'Florida', amount: 100.00 },
      { lodge: 'Kentucky', amount: 100.00 },
      { lodge: 'Tennessee', amount: 100.00 },
      { lodge: 'Alabama', amount: 100.00 },
      { lodge: 'Pennsylvania', amount: 100.00 },
      { lodge: 'Japan', amount: 15.00 },
      { lodge: 'South Dakota', amount: 25.00 },
      { lodge: 'Washington', amount: 100.00 },
      { lodge: 'New Mexico', amount: 50.00 },
      { lodge: 'Iowa', amount: 100.00 },
      { lodge: 'South Carolina', amount: 100.00 },
      { lodge: 'Rhode Island', amount: 15.00 },
      { lodge: 'New Brunswick', amount: 15.00 },
      { lodge: 'Indiana', amount: 100.00 },
      { lodge: 'New York', amount: 100.00 },
      { lodge: 'Saskatchewan, Canada', amount: 15.00 },
      { lodge: 'British Columbia, Canada', amount: 50.00 },
      { lodge: 'Quebec, Canada', amount: 15.00 },
      { lodge: 'West Virginia', amount: 50.00 },
      { lodge: 'New Hampshire', amount: 15.00 },
      { lodge: 'Ontario, Canada', amount: 100.00 },
      { lodge: 'District of Columbia', amount: 15.00 },
      { lodge: 'North Dakota', amount: 15.00 },
      { lodge: 'Vermont', amount: 15.00 },
      { lodge: 'Manitoba, Canada', amount: 15.00 },
      { lodge: 'Arizona', amount: 15.00 },
      { lodge: 'Colorado', amount: 50.00 },
      { lodge: 'New Jersey', amount: 100.00 },
      { lodge: 'Nova Scotia', amount: 11.25 },
      { lodge: 'Alberta, Canada', amount: 15.00 },
      { lodge: 'Wyoming', amount: 30.00 },
      { lodge: 'Montana', amount: 15.00 },
      { lodge: 'North Carolina', amount: 100.00 },
      { lodge: 'California', amount: 100.00 },
      { lodge: 'Oregon', amount: 50.00 },
      { lodge: 'Nevada', amount: 25.00 },
      { lodge: 'Mexico', amount: 15.00 },
      { lodge: 'Michigan', amount: 100.00 },
      { lodge: 'Georgia', amount: 100.00 },
      { lodge: 'Puerto Rico', amount: 15.00 },
    ],
  };

  const members = [
    {
      role: 'Chairman',
      name: 'M:W: James H. Hutchins',
      affiliation: 'Delaware',
      retirement: '1983',
    },
    {
      role: 'Vice-Chairman',
      name: 'M:W: Charles A. Brigham, Jr.',
      affiliation: 'Ohio',
      retirement: '1984',
    },
    {
      role: 'Secretary-Treasurer',
      name: 'R:W: Robert L. Dillard, Jr.',
      affiliation: 'Texas',
      retirement: 'Ongoing (appointed for 1983)',
      address: 'P.O. Box 1850, Dallas, Texas 75221',
    },
    {
      role: 'Member',
      name: 'M:W: Morris I. Budkofsky',
      affiliation: 'Connecticut',
      retirement: '1985',
    },
    {
      role: 'Member',
      name: 'M:W: J. Lewis Beckstead, M.D.',
      affiliation: 'Manitoba, Canada',
      retirement: '1986',
    },
    {
      role: 'Member',
      name: 'M:W: Curtis N. Lancaster',
      affiliation: 'Utah',
      retirement: '1987',
    },
    {
      role: 'New Member (1983 Organization)',
      name: 'R:W: Richard A. Porter',
      affiliation: 'Deputy Grand Master of Kansas',
      retirement: '1988',
    },
  ];

  const [activeSection, setActiveSection] = useState('overview');

  const renderSection = () => {
    switch (activeSection) {
      case 'overview':
        return (
          <div className="text-gray-700">
            <h3 className="text-2xl font-bold text-blue-800 mb-4">
              Commission Overview
            </h3>
            <p className="mb-3 leading-relaxed">
              The Commission on Information for Recognition was organized in{' '}
              <span className="font-semibold text-blue-700">1952</span>. Its
              primary function is to{' '}
              <span className="font-semibold text-green-700">
                gather, collate, and revise information on Grand Lodges in other
                lands
              </span>{' '}
              to serve the Grand Lodges of this Conference.
            </p>
            <p className="mb-3 leading-relaxed">
              It does not advise or recommend recognition, but{' '}
              <span className="font-semibold text-yellow-700">
                merely indicates whether a Grand Lodge satisfies the conditions
                of regularity
              </span>
              .
            </p>
            <p className="mb-3 leading-relaxed">
              The Commission consists of{' '}
              <span className="font-semibold text-blue-700">six members</span>{' '}
              of wide geographical distribution. One new member is elected each
              year and serves for six years.
            </p>
            <p className="text-sm italic text-gray-500 mt-4">
              Report adopted by the Conference on February 22, 1983, in Dallas,
              Texas.
            </p>
          </div>
        );
      case 'members':
        return (
          <div className="text-gray-700">
            <h3 className="text-2xl font-bold text-blue-800 mb-4">
              Commission Members (1983 Organization)
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {members.map((member, index) => (
                <div
                  key={index}
                  className="bg-blue-50 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
                >
                  <p className="text-lg font-semibold text-blue-700">
                    {member.name}
                  </p>
                  <p className="text-sm text-gray-600">{member.role}</p>
                  <p className="text-sm text-gray-600">
                    Affiliation: {member.affiliation}
                  </p>
                  <p className="text-sm text-gray-600">
                    Retirement Year: {member.retirement}
                  </p>
                  {member.address && (
                    <p className="text-xs text-gray-500 mt-2">
                      Address: {member.address}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        );
      case 'grand-lodges':
        return (
          <div className="text-gray-700">
            <h3 className="text-2xl font-bold text-blue-800 mb-4">
              Grand Lodge Updates
            </h3>
            {grandLodgeUpdates.map((item, index) => (
              <Section key={index} title={item.country}>
                <ul className="list-disc pl-5 space-y-2">
                  {item.details.map((detail, idx) => (
                    <li key={idx} className="text-gray-700 text-base">
                      {detail}
                    </li>
                  ))}
                </ul>
              </Section>
            ))}
          </div>
        );
      case 'financials':
        return (
          <div className="text-gray-700">
            <h3 className="text-2xl font-bold text-blue-800 mb-4">
              Treasurer's Report (as of December 31, 1982)
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="bg-green-100 p-5 rounded-lg shadow-md">
                <p className="text-lg font-medium text-green-800">
                  Balance from Feb 23, 1982:
                </p>
                <p className="text-3xl font-bold text-green-900">
                  ${treasurerReport.balanceFromPrevious.toFixed(2)}
                </p>
              </div>
              <div className="bg-blue-100 p-5 rounded-lg shadow-md">
                <p className="text-lg font-medium text-blue-800">
                  Total Receipts (1982):
                </p>
                <p className="text-3xl font-bold text-blue-900">
                  ${treasurerReport.receipts.toFixed(2)}
                </p>
              </div>
              <div className="bg-red-100 p-5 rounded-lg shadow-md">
                <p className="text-lg font-medium text-red-800">
                  Total Expenses (1982):
                </p>
                <p className="text-3xl font-bold text-red-900">
                  ${treasurerReport.expenses.toFixed(2)}
                </p>
              </div>
              <div className="bg-purple-100 p-5 rounded-lg shadow-md">
                <p className="text-lg font-medium text-purple-800">
                  Balance as of Dec 31, 1982:
                </p>
                <p className="text-3xl font-bold text-purple-900">
                  ${treasurerReport.balanceAsOf.toFixed(2)}
                </p>
              </div>
            </div>

            <Section title="Expense Details (1982)">
              <ul className="list-disc pl-5 space-y-2">
                {Object.entries(treasurerReport.expenseDetails).map(
                  ([item, amount], index) => (
                    <li key={index} className="text-gray-700 text-base">
                      {item}:{' '}
                      <span className="font-semibold">${amount.toFixed(2)}</span>
                    </li>
                  )
                )}
              </ul>
            </Section>

            <Section title="Sample Grand Lodge Contributions (1982)">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                {treasurerReport.sampleContributions.map((contribution, index) => (
                  <div key={index} className="bg-gray-50 p-3 rounded-md text-sm shadow-sm">
                    <span className="font-medium text-gray-800">{contribution.lodge}:</span> ${contribution.amount.toFixed(2)}
                  </div>
                ))}
              </div>
            </Section>
          </div>
        );
      case 'conclusion':
        return (
          <div className="text-gray-700">
            <h3 className="text-2xl font-bold text-blue-800 mb-4">
              Conclusion
            </h3>
            <p className="mb-3 leading-relaxed">
              The principal function of this Commission is to{' '}
              <span className="font-semibold text-blue-700">
                promote and preserve unity and good will
              </span>{' '}
              among all regular Grand Lodges in the world.
            </p>
            <p className="mb-3 leading-relaxed">
              There is a personal concern about the importance of maintaining{' '}
              <span className="font-semibold text-blue-700">
                harmonious relations
              </span>{' '}
              among Grand Lodges in the Conference, emphasizing sensitivity to
              the concerns of other Grand Lodges regarding the enforcement of
              judgments against sojourning Masons.
            </p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 font-sans text-gray-900 antialiased">
      {/* Moved style block content to index.css */}
      {/* Header Section */}
      <header className="bg-blue-800 text-white py-8 shadow-lg">
        <div className="container mx-auto px-4 text-center">
          <MasonicSymbol />
          <h1 className="text-4xl md:text-5xl font-bold mb-2">
            1983 Annual Report
          </h1>
          <p className="text-xl md:text-2xl font-light">
            Commission on Information for Recognition
          </p>
          <p className="text-lg md:text-xl font-light mt-1">
            Conference of Grand Masters of Masons in North America
          </p>
          <p className="text-md md:text-lg mt-4">
            A.D. 1983 / A.L. 5983 — Dallas, Texas, February 22, 1983
          </p>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-blue-700 shadow-md py-3 sticky top-0 z-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-2 md:gap-4">
            <button
              onClick={() => setActiveSection('overview')}
              className={`px-4 py-2 rounded-full text-sm md:text-base font-medium transition-all duration-300 ease-in-out ${
                activeSection === 'overview'
                  ? 'bg-white text-blue-700 shadow-lg'
                  : 'text-white hover:bg-blue-600 hover:scale-105'
              }`}
            >
              Overview
            </button>
            <button
              onClick={() => setActiveSection('members')}
              className={`px-4 py-2 rounded-full text-sm md:text-base font-medium transition-all duration-300 ease-in-out ${
                activeSection === 'members'
                  ? 'bg-white text-blue-700 shadow-lg'
                  : 'text-white hover:bg-blue-600 hover:scale-105'
              }`}
            >
              Members
            </button>
            <button
              onClick={() => setActiveSection('grand-lodges')}
              className={`px-4 py-2 rounded-full text-sm md:text-base font-medium transition-all duration-300 ease-in-out ${
                activeSection === 'grand-lodges'
                  ? 'bg-white text-blue-700 shadow-lg'
                  : 'text-white hover:bg-blue-600 hover:scale-105'
              }`}
            >
              Grand Lodge Updates
            </button>
            <button
              onClick={() => setActiveSection('financials')}
              className={`px-4 py-2 rounded-full text-sm md:text-base font-medium transition-all duration-300 ease-in-out ${
                activeSection === 'financials'
                  ? 'bg-white text-blue-700 shadow-lg'
                  : 'text-white hover:bg-blue-600 hover:scale-105'
              }`}
            >
              Financials
            </button>
            <button
              onClick={() => setActiveSection('conclusion')}
              className={`px-4 py-2 rounded-full text-sm md:text-base font-medium transition-all duration-300 ease-in-out ${
                activeSection === 'conclusion'
                  ? 'bg-white text-blue-700 shadow-lg'
                  : 'text-white hover:bg-blue-600 hover:scale-105'
              }`}
            >
              Conclusion
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content Area */}
      <main className="container mx-auto px-4 py-8 md:py-12">
        {renderSection()}
      </main>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-6 mt-12 shadow-inner">
        <div className="container mx-auto px-4 text-center text-sm">
          <p>&copy; 1983 Commission on Information for Recognition. All Rights Reserved.</p>
          <p className="mt-2">Digitized by The George Washington Masonic National Memorial Association - Masonic Digital Archives Project A.D. 2022 / A.L. 6022</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
