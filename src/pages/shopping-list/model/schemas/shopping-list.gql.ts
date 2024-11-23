import { gql } from "@apollo/client";

export const GET_SHOPPING_LIST_ITEMS = gql`
  query GetShoppingLists {
    shoppingLists {
      id
      name
      amount
      createdAt
      updatedAt
    }
  }
`;

export const GET_SHOPPING_LIST_ITEM = gql`
  query GetShoppingListItem($id: String!) {
    shoppingList(id: $id) {
      id
      name
      amount
      createdAt
      updatedAt
    }
  }
`;

export const CREATE_SHOPPING_LIST_ITEM = gql`
  mutation CreateShoppingList($input: CreateShoppingListInput!) {
    createShoppingList(input: $input) {
      id
      name
      amount
      createdAt
      updatedAt
    }
  }
`;
