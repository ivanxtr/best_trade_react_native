import gql from 'graphql-tag';

const GET_ALL_LISTINGS = gql`
query getAllListings {
  allListings {
    propertyType
    transactionType
    title
    address
    city
    state
    description
    price
    sqft
    photoMain
    isPublished
  }
}
`;


export {
  GET_ALL_LISTINGS,
}
