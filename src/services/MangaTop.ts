export const getTop = async () => {
  try {
    return await fetch("http://localhost:4000/top", {
      headers: { "Content-Type": "application/json" },
      method: "GET",
    });
  } catch (error) {
    return error;
  }
};
