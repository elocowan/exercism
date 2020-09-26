// i: planet and age in seconds
// o: age in years

export const orbital_periods = {
  mercury: 0.2408467,
  venus: 0.61519726,
  earth: 1, // 365.25 Earth days, or 31,557,600 seconds
  mars: 1.8808158,
  jupiter: 11.862615,
  saturn: 29.447498,
  uranus: 84.016846,
  neptune: 164.79132
}

export const age = (planet, seconds) => {
  let ageInEarthYears = seconds / 31557600;

  // toFixed method returns a string, so it's necessary to parse the float to return the type the tests are expecting
  return parseFloat((ageInEarthYears / orbital_periods[planet]).toFixed(2));
};