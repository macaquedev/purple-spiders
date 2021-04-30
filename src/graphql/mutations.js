/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
      owner
    }
  }
`;
export const createReview = /* GraphQL */ `
  mutation CreateReview(
    $input: CreateReviewInput!
    $condition: ModelReviewConditionInput
  ) {
    createReview(input: $input, condition: $condition) {
      id
      rating
      author
      content
      createdAt
      updatedAt
    }
  }
`;
export const updateReview = /* GraphQL */ `
  mutation UpdateReview(
    $input: UpdateReviewInput!
    $condition: ModelReviewConditionInput
  ) {
    updateReview(input: $input, condition: $condition) {
      id
      rating
      author
      content
      createdAt
      updatedAt
    }
  }
`;
export const deleteReview = /* GraphQL */ `
  mutation DeleteReview(
    $input: DeleteReviewInput!
    $condition: ModelReviewConditionInput
  ) {
    deleteReview(input: $input, condition: $condition) {
      id
      rating
      author
      content
      createdAt
      updatedAt
    }
  }
`;
export const createMusic = /* GraphQL */ `
  mutation CreateMusic(
    $input: CreateMusicInput!
    $condition: ModelMusicConditionInput
  ) {
    createMusic(input: $input, condition: $condition) {
      id
      name
      link
      isFanClubOnly
      createdAt
      updatedAt
    }
  }
`;
export const updateMusic = /* GraphQL */ `
  mutation UpdateMusic(
    $input: UpdateMusicInput!
    $condition: ModelMusicConditionInput
  ) {
    updateMusic(input: $input, condition: $condition) {
      id
      name
      link
      isFanClubOnly
      createdAt
      updatedAt
    }
  }
`;
export const deleteMusic = /* GraphQL */ `
  mutation DeleteMusic(
    $input: DeleteMusicInput!
    $condition: ModelMusicConditionInput
  ) {
    deleteMusic(input: $input, condition: $condition) {
      id
      name
      link
      isFanClubOnly
      createdAt
      updatedAt
    }
  }
`;
