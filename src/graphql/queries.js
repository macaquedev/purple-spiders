/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      name
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getReview = /* GraphQL */ `
  query GetReview($id: ID!) {
    getReview(id: $id) {
      id
      rating
      author
      content
      createdAt
      updatedAt
    }
  }
`;
export const listReviews = /* GraphQL */ `
  query ListReviews(
    $filter: ModelReviewFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listReviews(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        rating
        author
        content
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getMusic = /* GraphQL */ `
  query GetMusic($id: ID!) {
    getMusic(id: $id) {
      id
      name
      link
      isFanClubOnly
      createdAt
      updatedAt
    }
  }
`;
export const listMusics = /* GraphQL */ `
  query ListMusics(
    $filter: ModelMusicFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMusics(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        link
        isFanClubOnly
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
