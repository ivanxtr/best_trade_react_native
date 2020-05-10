import gql from 'graphql-tag';

const GET_ALL_LISTINGS = gql`
  query getAllListings {
    allListings {
      isPublished
      id
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
      photoMain
      photo1
      photo2
      photo3
      photo4
      photo5
      photo6
    }
  }
`;

export {GET_ALL_LISTINGS};
