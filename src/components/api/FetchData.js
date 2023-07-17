export const PostRequest = async (data) => {
  const response = await fetch(
    "https://trello-4ecc5-default-rtdb.firebaseio.com/tasks.json",
    {
      method: "POST",
      body: JSON.stringify(data),
    }
  );
};

const GetRequest = async () => {
  const response = await fetch(
    "https://trello-4ecc5-default-rtdb.firebaseio.com/tasks.json"
  );
  const result = await response.json();
  const data = []
 for (let key in result) {
    data.push(result[key]);
    return data
  }
};