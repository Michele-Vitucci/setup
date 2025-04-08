// Definiamo un tipo per rappresentare un Pianeta
type Planet = {
    id: number;
    name: string;
  };
  
  // Funzione per ottenere un saluto
  function greet(name: string): string {
    return `Ciao, ${name}!`;
  }
  
  // Creiamo una funzione che accetta un array di pianeti e restituisce un pianeta
  function getPlanetById(planetId: number, planets: Planet[]): Planet | undefined {
    return planets.find(planet => planet.id === planetId);
  }
  
  // Dati di esempio: una lista di pianeti
  const planets: Planet[] = [
    { id: 1, name: "Earth" },
    { id: 2, name: "Mars" },
    { id: 3, name: "Venus" }
  ];
  
  // Eseguiamo la funzione greet
  const greeting = greet("Mario");
  console.log(greeting); // Output: Ciao, Mario!
  
  // Cerchiamo un pianeta per ID
  const planet = getPlanetById(2, planets);
  
  if (planet) {
    console.log(`Pianeta trovato: ${planet.name}`); // Output: Pianeta trovato: Mars
  } else {
    console.log("Pianeta non trovato");
  }
  