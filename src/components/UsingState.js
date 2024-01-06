import { useSelector } from "react-redux";

const UsingState =()=>{
    const result = useSelector(state=>{
        return state.albums.queries;
    })
    //console.log(result['fetchAlbums({"id":1,"name":"Myra"})'].data);
    console.log(result, "result");
    const result1 = result['fetchAlbums({"id":1,"name":"Myra"})'];
    
   const actArray = result1 ? result1.data:null;
   console.log(actArray);

   return (
    <>
      {actArray && actArray.map(item => {
        return (
          <div key={item.id}> {/* Assigning a unique key to each rendered div */}
            <h1>{item.title}</h1>
            <p>{item.id}</p>
            <p>{item.userId}</p>
          </div>
        );
      })}
      {!actArray &&  <h4>Data from big state object, mainly focus on albums, the data came from the api, so that we can use any where in the entire application;</h4>}

    </>
  );
}

export default UsingState;
