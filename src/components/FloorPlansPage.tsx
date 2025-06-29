import React, { useState } from 'react';

interface FloorPlan {
  id: string;
  name: string;
  series: string;
  beds: number;
  baths: number;
  sqft: number;
  image?: string;
  description?: string;
}

const FloorPlansPage = () => {
  const [selectedSeries, setSelectedSeries] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('name');

  const floorPlans: FloorPlan[] = [
    // Villa Series
    { id: 'merlot', name: 'Merlot', series: 'Villa', beds: 2, baths: 2, sqft: 1387, description: 'Cozy villa with open floor plan' },
    { id: 'chardonnay', name: 'Chardonnay', series: 'Villa', beds: 2, baths: 2, sqft: 1467, description: 'Popular villa model with screened porch' },
    { id: 'duval', name: 'Duval', series: 'Villa', beds: 2, baths: 2, sqft: 1543, description: 'Spacious villa with split bedroom plan' },
    { id: 'bellino', name: 'Bellino', series: 'Villa', beds: 2, baths: 2, sqft: 1556, description: 'Villa with upgraded kitchen' },
    { id: 'tango', name: 'Tango', series: 'Villa', beds: 2, baths: 2, sqft: 1587, description: 'Modern villa design' },
    { id: 'brindini', name: 'Brindini', series: 'Villa', beds: 2, baths: 2, sqft: 1612, description: 'Villa with bonus room' },
    { id: 'zinfandel', name: 'Zinfandel', series: 'Villa', beds: 2, baths: 2, sqft: 1643, description: 'Premium villa model' },
    { id: 'marathon', name: 'Marathon', series: 'Villa', beds: 2, baths: 2, sqft: 1687, description: 'Large villa with den' },
    { id: 'islamorada', name: 'Islamorada', series: 'Villa', beds: 2, baths: 2, sqft: 1723, description: 'Villa with water views' },
    { id: 'bisenti', name: 'Bisenti', series: 'Villa', beds: 2, baths: 2, sqft: 1756, description: 'Luxury villa model' },
    { id: 'concerto', name: 'Concerto', series: 'Villa', beds: 2, baths: 2, sqft: 1789, description: 'Villa with formal dining' },
    { id: 'vicenza', name: 'Vicenza', series: 'Villa', beds: 2, baths: 2, sqft: 1823, description: 'European-inspired villa' },
    { id: 'charleston', name: 'Charleston', series: 'Villa', beds: 2, baths: 2, sqft: 1856, description: 'Southern charm villa' },
    { id: 'siesta-key', name: 'Siesta Key', series: 'Villa', beds: 2, baths: 2, sqft: 1887, description: 'Coastal villa design' },
    { id: 'west-palm', name: 'West Palm', series: 'Villa', beds: 2, baths: 2, sqft: 1923, description: 'Tropical villa style' },
    { id: 'amaro', name: 'Amaro', series: 'Villa', beds: 2, baths: 2, sqft: 1956, description: 'Villa with study' },
    { id: 'salina', name: 'Salina', series: 'Villa', beds: 2, baths: 2, sqft: 1975, description: 'Mediterranean villa' },
    { id: 'cabernet', name: 'Cabernet', series: 'Villa', beds: 2, baths: 2, sqft: 2012, description: 'Premium wine series villa' },
    { id: 'tavernier', name: 'Tavernier', series: 'Villa', beds: 2, baths: 2, sqft: 2045, description: 'Keys-inspired villa' },
    { id: 'key-west', name: 'Key West', series: 'Villa', beds: 2, baths: 2, sqft: 2087, description: 'Island-style villa' },
    { id: 'roma', name: 'Roma', series: 'Villa', beds: 2, baths: 2, sqft: 2123, description: 'Italian-inspired villa' },
    { id: 'allegro', name: 'Allegro', series: 'Villa', beds: 2, baths: 2, sqft: 2156, description: 'Musical series villa' },
    { id: 'allegro-bella-viana', name: 'Allegro at Bella Viana', series: 'Villa', beds: 2, baths: 2, sqft: 2156, description: 'Allegro in premium location' },
    { id: 'tampa-bay', name: 'Tampa Bay', series: 'Villa', beds: 2, baths: 2, sqft: 2189, description: 'Bay-inspired villa' },
    { id: 'avellino', name: 'Avellino', series: 'Villa', beds: 2, baths: 2, sqft: 2223, description: 'Italian villa design' },
    { id: 'milano', name: 'Milano', series: 'Villa', beds: 2, baths: 2, sqft: 2256, description: 'Fashion-forward villa' },
    { id: 'sonesta', name: 'Sonesta', series: 'Villa', beds: 2, baths: 2, sqft: 2289, description: 'Resort-style villa' },
    { id: 'bordeaux', name: 'Bordeaux', series: 'Villa', beds: 2, baths: 2, sqft: 2323, description: 'French-inspired villa' },
    { id: 'everglades', name: 'Everglades', series: 'Villa', beds: 2, baths: 2, sqft: 2356, description: 'Nature-inspired villa' },
    { id: 'alessandria', name: 'Alessandria', series: 'Villa', beds: 2, baths: 2, sqft: 2389, description: 'Elegant villa model' },
    { id: 'cortina', name: 'Cortina', series: 'Villa', beds: 2, baths: 2, sqft: 2423, description: 'Mountain-inspired villa' },
    { id: 'port-royal', name: 'Port Royal', series: 'Villa', beds: 2, baths: 2, sqft: 2456, description: 'Royal villa design' },
    { id: 'tangier', name: 'Tangier', series: 'Villa', beds: 2, baths: 2, sqft: 2489, description: 'Exotic villa style' },
    { id: 'sonata', name: 'Sonata', series: 'Villa', beds: 2, baths: 2, sqft: 2523, description: 'Musical villa series' },
    { id: 'sonata-bella-viana', name: 'Sonata at Bella Viana', series: 'Villa', beds: 2, baths: 2, sqft: 2523, description: 'Sonata in premium location' },
    { id: 'bergamo', name: 'Bergamo', series: 'Villa', beds: 2, baths: 2, sqft: 2556, description: 'Italian villa charm' },
    { id: 'captiva', name: 'Captiva', series: 'Villa', beds: 2, baths: 2, sqft: 2589, description: 'Island villa living' },
    { id: 'torino', name: 'Torino', series: 'Villa', beds: 2, baths: 2, sqft: 2623, description: 'Italian city villa' },
    { id: 'key-largo', name: 'Key Largo', series: 'Villa', beds: 2, baths: 2, sqft: 2656, description: 'Keys villa lifestyle' },
    { id: 'plantation', name: 'Plantation', series: 'Villa', beds: 2, baths: 2, sqft: 2689, description: 'Southern plantation villa' },
    { id: 'bonita-springs', name: 'Bonita Springs', series: 'Villa', beds: 2, baths: 2, sqft: 2723, description: 'Springs villa design' },
    { id: 'bolzano', name: 'Bolzano', series: 'Villa', beds: 2, baths: 2, sqft: 2756, description: 'Alpine villa style' },
    { id: 'allora', name: 'Allora', series: 'Villa', beds: 2, baths: 2, sqft: 2789, description: 'Contemporary villa' },
    { id: 'bal-harbour', name: 'Bal Harbour', series: 'Villa', beds: 2, baths: 2, sqft: 2823, description: 'Harbour villa living' },
    { id: 'cabella', name: 'Cabella', series: 'Villa', beds: 2, baths: 2, sqft: 2856, description: 'Elegant villa design' },
    { id: 'chopin', name: 'Chopin', series: 'Villa', beds: 2, baths: 2, sqft: 2889, description: 'Classical villa style' },
    { id: 'brescia', name: 'Brescia', series: 'Villa', beds: 2, baths: 2, sqft: 2923, description: 'Italian villa elegance' },
    { id: 'magari', name: 'Magari', series: 'Villa', beds: 2, baths: 2, sqft: 2956, description: 'Wishful villa design' },
    { id: 'saint-augustine', name: 'Saint Augustine', series: 'Villa', beds: 2, baths: 2, sqft: 2989, description: 'Historic villa charm' },
    { id: 'melody', name: 'Melody', series: 'Villa', beds: 2, baths: 2, sqft: 3023, description: 'Musical villa harmony' },
    { id: 'melody-bella-viana', name: 'Melody at Bella Viana', series: 'Villa', beds: 2, baths: 2, sqft: 3023, description: 'Melody in premium location' },
    { id: 'sarasota', name: 'Sarasota', series: 'Villa', beds: 2, baths: 2, sqft: 3056, description: 'Cultural villa design' },
    { id: 'bach', name: 'Bach', series: 'Villa', beds: 2, baths: 2, sqft: 3089, description: 'Classical composer villa' },
    { id: 'bach-bella-viana', name: 'Bach at Bella Viana', series: 'Villa', beds: 2, baths: 2, sqft: 3089, description: 'Bach in premium location' },
    { id: 'brava', name: 'Brava', series: 'Villa', beds: 2, baths: 2, sqft: 3123, description: 'Bravo villa performance' },
    { id: 'harmony', name: 'Harmony', series: 'Villa', beds: 2, baths: 2, sqft: 3156, description: 'Harmonious villa living' },
    { id: 'serenade', name: 'Serenade', series: 'Villa', beds: 2, baths: 2, sqft: 3189, description: 'Romantic villa serenade' },
    { id: 'serenade-bella-viana', name: 'Serenade at Bella Viana', series: 'Villa', beds: 2, baths: 2, sqft: 3189, description: 'Serenade in premium location' },
    { id: 'napoli', name: 'Napoli', series: 'Villa', beds: 2, baths: 2, sqft: 3223, description: 'Neapolitan villa style' },
    { id: 'palm-island', name: 'Palm Island', series: 'Villa', beds: 2, baths: 2, sqft: 3256, description: 'Tropical island villa' },
    { id: 'casablanca', name: 'Casablanca', series: 'Villa', beds: 2, baths: 2, sqft: 3289, description: 'Moroccan villa charm' },
    { id: 'calabria', name: 'Calabria', series: 'Villa', beds: 2, baths: 2, sqft: 3323, description: 'Southern Italian villa' },
    { id: 'panhandle', name: 'Panhandle', series: 'Villa', beds: 2, baths: 2, sqft: 3356, description: 'Florida panhandle villa' },
    { id: 'caldes', name: 'Caldes', series: 'Villa', beds: 2, baths: 2, sqft: 3389, description: 'Warm villa design' },
    { id: 'dolcetto', name: 'Dolcetto', series: 'Villa', beds: 2, baths: 2, sqft: 3423, description: 'Sweet villa living' },
    { id: 'sanibel', name: 'Sanibel', series: 'Villa', beds: 2, baths: 2, sqft: 3456, description: 'Island paradise villa' },
    { id: 'safi', name: 'Safi', series: 'Villa', beds: 2, baths: 2, sqft: 3489, description: 'Pure villa design' },
    { id: 'calto', name: 'Calto', series: 'Villa', beds: 2, baths: 2, sqft: 3523, description: 'High villa living' },
    { id: 'carnegie', name: 'Carnegie', series: 'Villa', beds: 2, baths: 2, sqft: 3556, description: 'Distinguished villa' },
    { id: 'carnegie-bella-viana', name: 'Carnegie at Bella Viana', series: 'Villa', beds: 2, baths: 2, sqft: 3556, description: 'Carnegie in premium location' },
    { id: 'boca-raton', name: 'Boca Raton', series: 'Villa', beds: 2, baths: 2, sqft: 3589, description: 'Upscale villa living' },
    { id: 'corsica', name: 'Corsica', series: 'Villa', beds: 2, baths: 2, sqft: 3623, description: 'Mediterranean island villa' },
    { id: 'boca-grande', name: 'Boca Grande', series: 'Villa', beds: 2, baths: 2, sqft: 3656, description: 'Grand villa design' },
    { id: 'saint-john', name: 'Saint John', series: 'Villa', beds: 2, baths: 2, sqft: 3689, description: 'Saintly villa charm' },
    { id: 'brahms', name: 'Brahms', series: 'Villa', beds: 2, baths: 2, sqft: 3723, description: 'Composer villa series' },
    { id: 'savoy', name: 'Savoy', series: 'Villa', beds: 2, baths: 2, sqft: 3756, description: 'Royal villa elegance' },
    { id: 'san-rocco', name: 'San Rocco', series: 'Villa', beds: 2, baths: 2, sqft: 3789, description: 'Italian saint villa' },
    { id: 'cambria', name: 'Cambria', series: 'Villa', beds: 2, baths: 2, sqft: 3823, description: 'Welsh villa charm' },
    { id: 'napoli-grande', name: 'Napoli Grande', series: 'Villa', beds: 2, baths: 2, sqft: 3856, description: 'Grand Neapolitan villa' },
    { id: 'mozart', name: 'Mozart', series: 'Villa', beds: 2, baths: 2, sqft: 3889, description: 'Musical genius villa' },
    { id: 'mozart-bella-viana', name: 'Mozart at Bella Viana', series: 'Villa', beds: 2, baths: 2, sqft: 3889, description: 'Mozart in premium location' },
    { id: 'castello', name: 'Castello', series: 'Villa', beds: 2, baths: 2, sqft: 3923, description: 'Castle villa design' },
    { id: 'juilliard', name: 'Juilliard', series: 'Villa', beds: 2, baths: 2, sqft: 3956, description: 'Prestigious villa' },
    { id: 'sevilla', name: 'Sevilla', series: 'Villa', beds: 2, baths: 2, sqft: 3989, description: 'Spanish villa style' },
    { id: 'sevilla-bella-viana', name: 'Sevilla at Bella Viana', series: 'Villa', beds: 2, baths: 2, sqft: 3989, description: 'Sevilla in premium location' },
    { id: 'jacksonville', name: 'Jacksonville', series: 'Villa', beds: 2, baths: 2, sqft: 4023, description: 'Florida city villa' },
    { id: 'cannes', name: 'Cannes', series: 'Villa', beds: 2, baths: 2, sqft: 4056, description: 'French Riviera villa' },
    { id: 'ambra', name: 'Ambra', series: 'Villa', beds: 2, baths: 2, sqft: 4089, description: 'Amber villa glow' },
    { id: 'savona', name: 'Savona', series: 'Villa', beds: 2, baths: 2, sqft: 4123, description: 'Italian port villa' },
    { id: 'bolero', name: 'Bolero', series: 'Villa', beds: 2, baths: 2, sqft: 4156, description: 'Spanish dance villa' },
    { id: 'bolero-bella-viana', name: 'Bolero at Bella Viana', series: 'Villa', beds: 2, baths: 2, sqft: 4156, description: 'Bolero in premium location' },
    { id: 'clearwater', name: 'Clearwater', series: 'Villa', beds: 2, baths: 2, sqft: 4189, description: 'Clear water villa' },
    { id: 'coconut-grove', name: 'Coconut Grove', series: 'Villa', beds: 2, baths: 2, sqft: 4223, description: 'Tropical grove villa' },
    { id: 'marseille', name: 'Marseille', series: 'Villa', beds: 2, baths: 2, sqft: 4256, description: 'French port villa' },
    { id: 'basta', name: 'Basta', series: 'Villa', beds: 2, baths: 2, sqft: 4289, description: 'Enough villa luxury' },
    { id: 'letizia', name: 'Letizia', series: 'Villa', beds: 2, baths: 2, sqft: 4323, description: 'Joyful villa living' },
    { id: 'tivoli', name: 'Tivoli', series: 'Villa', beds: 2, baths: 2, sqft: 4356, description: 'Garden villa paradise' },
    { id: 'siena', name: 'Siena', series: 'Villa', beds: 2, baths: 2, sqft: 4389, description: 'Tuscan villa charm' },
    { id: 'sorano', name: 'Sorano', series: 'Villa', beds: 2, baths: 2, sqft: 4423, description: 'Hilltop villa views' },
    { id: 'operetta', name: 'Operetta', series: 'Villa', beds: 2, baths: 2, sqft: 4456, description: 'Light opera villa' },
    { id: 'operetta-bella-viana', name: 'Operetta at Bella Viana', series: 'Villa', beds: 2, baths: 2, sqft: 4456, description: 'Operetta in premium location' },
    { id: 'verona', name: 'Verona', series: 'Villa', beds: 2, baths: 2, sqft: 4489, description: 'Romantic villa setting' },
    { id: 'verona-bella-viana', name: 'Verona at Bella Viana', series: 'Villa', beds: 2, baths: 2, sqft: 4489, description: 'Verona in premium location' },
    { id: 'naples', name: 'Naples', series: 'Villa', beds: 2, baths: 2, sqft: 4523, description: 'Italian coastal villa' },
    { id: 'biscayne', name: 'Biscayne', series: 'Villa', beds: 2, baths: 2, sqft: 4556, description: 'Bay villa living' },
    { id: 'aragon-1st', name: 'Aragon (1st)', series: 'Villa', beds: 2, baths: 2, sqft: 4589, description: 'First Aragon villa' },
    { id: 'aragon-2nd', name: 'Aragon (2nd)', series: 'Villa', beds: 2, baths: 2, sqft: 4623, description: 'Second Aragon villa' },
    { id: 'ocala', name: 'Ocala', series: 'Villa', beds: 2, baths: 2, sqft: 4656, description: 'Forest villa retreat' },
    { id: 'rhapsody', name: 'Rhapsody', series: 'Villa', beds: 2, baths: 2, sqft: 4689, description: 'Musical villa composition' },
    { id: 'bellagio', name: 'Bellagio', series: 'Villa', beds: 2, baths: 2, sqft: 4723, description: 'Lake villa elegance' },
    { id: 'bellagio-bella-viana', name: 'Bellagio at Bella Viana', series: 'Villa', beds: 2, baths: 2, sqft: 4723, description: 'Bellagio in premium location' },
    { id: 'pesaro', name: 'Pesaro', series: 'Villa', beds: 2, baths: 2, sqft: 4756, description: 'Italian coastal villa' },
    { id: 'madrid', name: 'Madrid', series: 'Villa', beds: 2, baths: 2, sqft: 4789, description: 'Spanish capital villa' },
    { id: 'biltmore', name: 'Biltmore', series: 'Villa', beds: 2, baths: 2, sqft: 4823, description: 'Estate villa grandeur' },
    { id: 'marsala', name: 'Marsala', series: 'Villa', beds: 2, baths: 2, sqft: 4856, description: 'Wine villa richness' },
    { id: 'cocoa-beach', name: 'Cocoa Beach', series: 'Villa', beds: 2, baths: 2, sqft: 4889, description: 'Beach villa paradise' },
    { id: 'milan', name: 'Milan', series: 'Villa', beds: 2, baths: 2, sqft: 4923, description: 'Fashion villa capital' },
    { id: 'milan-bella-viana', name: 'Milan at Bella Viana', series: 'Villa', beds: 2, baths: 2, sqft: 4923, description: 'Milan in premium location' },
    { id: 'pallazio', name: 'Pallazio', series: 'Villa', beds: 2, baths: 2, sqft: 4956, description: 'Palace villa luxury' },
    { id: 'cordoba', name: 'Cordoba', series: 'Villa', beds: 2, baths: 2, sqft: 4989, description: 'Spanish villa heritage' },
    { id: 'riviera', name: 'Riviera', series: 'Villa', beds: 2, baths: 2, sqft: 5023, description: 'Coastal villa luxury' },
    { id: 'barcelona', name: 'Barcelona', series: 'Villa', beds: 2, baths: 2, sqft: 5056, description: 'Catalonian villa style' },
    { id: 'barcelona-bella-viana', name: 'Barcelona at Bella Viana', series: 'Villa', beds: 2, baths: 2, sqft: 5056, description: 'Barcelona in premium location' },
    { id: 'miami', name: 'Miami', series: 'Villa', beds: 2, baths: 2, sqft: 5089, description: 'Magic city villa' }
  ];

  const series = ['All', ...Array.from(new Set(floorPlans.map(plan => plan.series)))];

  const filteredPlans = floorPlans
    .filter(plan => {
      const matchesSeries = selectedSeries === 'All' || plan.series === selectedSeries;
      const matchesSearch = plan.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           plan.series.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesSeries && matchesSearch;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'name':
          return a.name.localeCompare(b.name);
        case 'sqft-low':
          return a.sqft - b.sqft;
        case 'sqft-high':
          return b.sqft - a.sqft;
        case 'beds':
          return b.beds - a.beds;
        default:
          return 0;
      }
    });

  const handleFloorPlanClick = (plan: FloorPlan) => {
    alert(`Floor Plan Details:\n\nModel: ${plan.name}\nSeries: ${plan.series}\nBedrooms: ${plan.beds}\nBathrooms: ${plan.baths}\nSquare Feet: ${plan.sqft.toLocaleString()}\n\n${plan.description || 'Contact us for more details about this floor plan.'}`);
  };

  const handleRequestInfo = (plan: FloorPlan) => {
    const subject = `Floor Plan Information Request - ${plan.name}`;
    const body = `Hi, I'm interested in learning more about the ${plan.name} floor plan.\n\nModel: ${plan.name}\nSeries: ${plan.series}\nBedrooms: ${plan.beds}\nBathrooms: ${plan.baths}\nSquare Feet: ${plan.sqft.toLocaleString()}\n\nPlease send me additional information including pricing and availability.\n\nThank you!`;
    window.location.href = `mailto:sborchini@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-navy text-white py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Solivita Floor Plans</h1>
            <p className="text-xl text-cream max-w-3xl mx-auto">
              Explore our extensive collection of floor plans designed for active adult living. 
              From cozy villas to spacious estates, find the perfect layout for your lifestyle.
            </p>
          </div>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="bg-white shadow-md py-6">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
            {/* Search */}
            <div>
              <label className="block text-sm font-medium text-navy mb-2">Search Floor Plans</label>
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search by name or series..."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-accent focus:border-transparent"
              />
            </div>

            {/* Series Filter */}
            <div>
              <label className="block text-sm font-medium text-navy mb-2">Series</label>
              <select
                value={selectedSeries}
                onChange={(e) => setSelectedSeries(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-accent focus:border-transparent"
              >
                {series.map(s => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </div>

            {/* Sort */}
            <div>
              <label className="block text-sm font-medium text-navy mb-2">Sort By</label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-accent focus:border-transparent"
              >
                <option value="name">Name A-Z</option>
                <option value="sqft-low">Square Feet: Low to High</option>
                <option value="sqft-high">Square Feet: High to Low</option>
                <option value="beds">Bedrooms</option>
              </select>
            </div>

            {/* Results Count */}
            <div className="text-center">
              <div className="text-sm text-gray-600">
                Showing {filteredPlans.length} of {floorPlans.length} floor plans
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floor Plans Grid */}
      <div className="container mx-auto px-4 py-8">
        {filteredPlans.length === 0 ? (
          <div className="text-center py-12">
            <svg className="w-16 h-16 mx-auto mb-4 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
            </svg>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">No floor plans found</h3>
            <p className="text-gray-600">Try adjusting your search criteria to see more results.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredPlans.map((plan) => (
              <div key={plan.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow group">
                {/* Floor Plan Details - Simplified Layout */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-navy mb-2">{plan.name}</h3>
                  <p className="text-teal font-semibold mb-4">{plan.series} Series</p>

                  {/* Specifications */}
                  <div className="grid grid-cols-3 gap-4 mb-4">
                    <div className="text-center">
                      <div className="flex items-center justify-center mb-1">
                        <svg className="w-4 h-4 mr-1 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M10,2V6H12V2H16V6H18A2,2 0 0,1 20,8V19A2,2 0 0,1 18,21H6A2,2 0 0,1 4,19V8A2,2 0 0,1 6,6H8V2H10M18,19V10H6V19H18Z" />
                        </svg>
                        <span className="text-sm font-medium text-gray-700">{plan.beds}</span>
                      </div>
                      <div className="text-xs text-gray-500">Beds</div>
                    </div>
                    <div className="text-center">
                      <div className="flex items-center justify-center mb-1">
                        <svg className="w-4 h-4 mr-1 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M23,11H21A2,2 0 0,0 19,13V16A2,2 0 0,0 21,18H23V11M1,11V18H3A2,2 0 0,0 5,16V13A2,2 0 0,0 3,11H1M21,9H18V5A2,2 0 0,0 16,3H8A2,2 0 0,0 6,5V9H3A2,2 0 0,0 1,11V18A2,2 0 0,0 3,20H21A2,2 0 0,0 23,18V11A2,2 0 0,0 21,9Z" />
                        </svg>
                        <span className="text-sm font-medium text-gray-700">{plan.baths}</span>
                      </div>
                      <div className="text-xs text-gray-500">Baths</div>
                    </div>
                    <div className="text-center">
                      <div className="flex items-center justify-center mb-1">
                        <svg className="w-4 h-4 mr-1 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M13,9V3.5L18.5,9M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6Z" />
                        </svg>
                        <span className="text-sm font-medium text-gray-700">{plan.sqft.toLocaleString()}</span>
                      </div>
                      <div className="text-xs text-gray-500">Sq Ft</div>
                    </div>
                  </div>

                  {/* Description */}
                  {plan.description && (
                    <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                      {plan.description}
                    </p>
                  )}

                  {/* Action Buttons */}
                  <div className="flex gap-2">
                    <button 
                      onClick={() => handleFloorPlanClick(plan)}
                      className="flex-1 bg-navy text-white py-2 px-4 rounded-lg font-semibold hover:bg-opacity-90 transition-all text-sm"
                    >
                      View Plan
                    </button>
                    <button 
                      onClick={() => handleRequestInfo(plan)}
                      className="flex-1 bg-teal text-white py-2 px-4 rounded-lg font-semibold hover:bg-opacity-90 transition-all text-sm"
                    >
                      Get Info
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Popular Floor Plans */}
      <div className="bg-cream py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-navy text-center mb-8">Most Popular Floor Plans</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {floorPlans.slice(0, 4).map((plan) => (
                <div key={plan.id} className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
                  <h3 className="font-bold text-navy mb-2">{plan.name}</h3>
                  <p className="text-sm text-teal mb-2">{plan.series} Series</p>
                  <div className="text-sm text-gray-600">
                    {plan.beds} Bed • {plan.baths} Bath • {plan.sqft.toLocaleString()} SF
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-navy py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Ready to Find Your Perfect Floor Plan?</h2>
            <p className="text-xl text-cream mb-8">
              Our team can help you choose the ideal floor plan for your lifestyle and provide detailed information about each model.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => window.location.href = 'tel:+14077911789'}
                className="bg-teal text-white px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all"
              >
                Call (407) 791-1789
              </button>
              <button
                onClick={() => window.location.href = 'mailto:sborchini@gmail.com'}
                className="bg-cream text-navy px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all"
              >
                Email for Floor Plans
              </button>
              <button
                onClick={() => window.location.href = '/home-searches'}
                className="bg-white/20 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/30 transition-all"
              >
                View Available Homes
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Floor Plan Categories */}
      <div className="bg-light-blue py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-navy text-center mb-8">Floor Plan Categories</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="text-4xl mb-4">🏡</div>
                  <h3 className="text-xl font-bold text-navy mb-2">Compact Living</h3>
                  <p className="text-gray-600 mb-4">1,300 - 2,000 sq ft</p>
                  <p className="text-sm text-gray-600">Perfect for couples seeking low-maintenance luxury</p>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="text-4xl mb-4">🏘️</div>
                  <h3 className="text-xl font-bold text-navy mb-2">Spacious Comfort</h3>
                  <p className="text-gray-600 mb-4">2,000 - 3,500 sq ft</p>
                  <p className="text-sm text-gray-600">Ideal for entertaining and guest accommodations</p>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="text-4xl mb-4">🏰</div>
                  <h3 className="text-xl font-bold text-navy mb-2">Luxury Estates</h3>
                  <p className="text-gray-600 mb-4">3,500+ sq ft</p>
                  <p className="text-sm text-gray-600">Ultimate luxury with premium features and space</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FloorPlansPage;