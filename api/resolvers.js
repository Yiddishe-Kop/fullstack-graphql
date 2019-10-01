import data from "./data";

const resolvers = {
  Query: {
    allPeople: () => data,
    person: (typeDefs, { id }) => {
      return data.filter(person => {
        return (person.id == id)
      })[0]
    }
  }
};

export default resolvers
