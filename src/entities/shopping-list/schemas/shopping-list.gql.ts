import { gql } from '@apollo/client';

export const GET_SHOPPING_LIST_ITEMS = gql`
  query GetShoppingList {
    shoppingList {
      id
      name
      amount
      unit
      createdAt
      updatedAt
    }
  }
`;

export const GET_SHOPPING_LIST_ITEM = gql`
  query GetShoppingListItem($id: String!) {
    shoppingListItem(id: $id) {
      id
      name
      amount
      createdAt
      updatedAt
    }
  }
`;

export const CREATE_SHOPPING_LIST_ITEM = gql`
  mutation AddShoppingListItem($input: AddShoppingListItemInput!) {
    addShoppingListItem(input: $input) {
      id
      name
      amount
      createdAt
      updatedAt
    }
  }
`;

export const UPDATE_SHOPPING_LIST_ITEM = gql`
  mutation UpdateShoppingListItem($id: String!, $input: UpdateShoppingListItemInput!) {
    updateShoppingListItem(id: $id, input: $input) {
      id
      name
      amount
      isCompleted
    }
  }
`;

export const DELETE_SHOPPING_LIST_ITEM = gql`
  mutation DeleteShoppingListItem($id: String!) {
    deleteShoppingListItem(id: $id) {
      id
      name
    }
  }
`;
