export const getManga = async (id:string) => {
    try {
        return fetch(`http://localhost:4000/manga/${id}`,{
            headers: { "Content-Type": "application/json" },
            method: "GET",
          })
    } catch (error) {
        return console.error(error);
    }
}