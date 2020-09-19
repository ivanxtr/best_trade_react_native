import gql from 'graphql-tag';

const GET_ALL_LISTINGS = gql`
  query getAllListings(
    $initial: Int
    $jumped: Int
    $dock: Boolean
    $office: Boolean
    $industrialPark: Boolean
    $search: String
    $transactionType: String
    $vigilancia: Boolean
    $parking: Boolean
    $price: Int
    $meters: Int
  ) {
    allListings(
      active: true
      search: $search
      first: $initial
      skip: $jumped
      dock: $dock
      office: $office
      industrialPark: $industrialPark
      transactionType: $transactionType
      vigilancia: $vigilancia
      parking: $parking
      price: $price
      sqft: $meters
    ) {
      isPublished
      id
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
