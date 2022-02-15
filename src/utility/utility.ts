type gqlError = {
  exception?: {
    response: {
      error: string;
    };
  };
  response?: {
    error: string;
    message: string[];
    statusCode: number;
  };
};

export const onError = (err: any) => {
  if (err?.graphQLErrors[0]?.extensions) {
    const e = err?.graphQLErrors[0]?.extensions! as gqlError;
    console.log("error", e.response);
    alert(e?.response?.message || e?.exception?.response?.error || "error");
  } else {
    alert(err);
  }
};
