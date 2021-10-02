const DATA = `
{
  continents {
    code
    name
  }
  countries {
    name
    code
    continent {
      code
    }
    languages {
      code
      name
    }
  }
}`;

export default DATA;