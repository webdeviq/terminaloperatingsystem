const sleep = () => new Promise((resolve) => setTimeout(resolve, 3000));

export const awaitResponse = async () => {
  await sleep();
};
