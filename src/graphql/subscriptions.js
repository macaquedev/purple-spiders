/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($owner: String) {
    onCreateUser(owner: $owner) {
      id
      name
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($owner: String) {
    onUpdateUser(owner: $owner) {
      id
      name
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($owner: String) {
    onDeleteUser(owner: $owner) {
      id
      name
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onCreateReview = /* GraphQL */ `
  subscription OnCreateReview {
    onCreateReview {
      id
      rating
      author
      content
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateReview = /* GraphQL */ `
  subscription OnUpdateReview {
    onUpdateReview {
      id
      rating
      author
      content
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteReview = /* GraphQL */ `
  subscription OnDeleteReview {
    onDeleteReview {
      id
      rating
      author
      content
      createdAt
      updatedAt
    }
  }
`;
export const onCreateMusic = /* GraphQL */ `
  subscription OnCreateMusic {
    onCreateMusic {
      id
      name
      link
      isFanClubOnly
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateMusic = /* GraphQL */ `
  subscription OnUpdateMusic {
    onUpdateMusic {
      id
      name
      link
      isFanClubOnly
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteMusic = /* GraphQL */ `
  subscription OnDeleteMusic {
    onDeleteMusic {
      id
      name
      link
      isFanClubOnly
      createdAt
      updatedAt
    }
  }
`;
