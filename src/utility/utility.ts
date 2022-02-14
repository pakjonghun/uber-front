type gqlError = {
  response: {
    error: string;
    message: string[];
    statusCode: number;
  };
};

export const onError = (err: any) => {
  if (err?.graphQLErrors[0]?.extensions) {
    const e = err?.graphQLErrors[0]?.extensions! as gqlError;
    alert(e.response.message[0]);
  } else {
    alert(err);
  }
};
