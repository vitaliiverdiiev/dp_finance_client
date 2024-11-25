export const deleteItemHandler = (handler: (i: UnknownType) => void, id: string) => {
  handler({ variables: { id } });
};
